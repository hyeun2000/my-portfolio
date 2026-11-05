import { useCallback, useEffect, useRef, useState } from 'react';

import { supabase } from '../lib/supabase';

const PROJECT_COLUMNS = 'id, title, description, tech_stack, detail_url, thumbnail_url, created_at, updated_at';
/** 실시간으로 바뀐 카드의 강조 애니메이션을 유지하는 시간 (ms) */
const HIGHLIGHT_DURATION = 6000;

/** 게시된 프로젝트를 sort_order 순으로 조회한다. (RLS 에서도 is_published = true 만 허용) */
function selectProjects() {
  return supabase
    .from('projects')
    .select(PROJECT_COLUMNS)
    .eq('is_published', true)
    .order('sort_order', { ascending: true })
    .order('id', { ascending: true });
}

/**
 * useProjects 훅
 * Supabase projects 테이블을 불러오고, 새 글·수정이 생기면 실시간으로 다시 불러온다.
 * 실시간으로 바뀐 프로젝트 id 는 highlightedIds 에 잠시 담겨 카드 애니메이션에 쓰인다.
 *
 * @returns {{
 *   projects: Array, isLoading: boolean, error: string,
 *   isConfigured: boolean, highlightedIds: Set<number>
 * }}
 *
 * Example usage:
 * const { projects, isLoading, highlightedIds } = useProjects();
 */
function useProjects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(Boolean(supabase));
  const [error, setError] = useState('');
  const [highlightedIds, setHighlightedIds] = useState(() => new Set());
  const timersRef = useRef([]);

  const applyResult = useCallback(({ data, error: fetchError }) => {
    if (fetchError) {
      setError('프로젝트를 불러오지 못했어요. 잠시 후 다시 시도해주세요.');
    } else {
      setProjects(data);
      setError('');
    }
    setIsLoading(false);
  }, []);

  /** 실시간 변경된 id 를 잠깐 강조 목록에 넣었다가 뺀다. */
  const highlight = useCallback((id) => {
    setHighlightedIds((prev) => new Set(prev).add(id));
    const timer = setTimeout(() => {
      setHighlightedIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }, HIGHLIGHT_DURATION);
    timersRef.current.push(timer);
  }, []);

  useEffect(() => {
    if (!supabase) return undefined;

    selectProjects().then(applyResult);

    const channel = supabase
      .channel('projects-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'projects' }, (payload) => {
        if (payload.new?.id) highlight(payload.new.id);
        selectProjects().then(applyResult);
      })
      .subscribe();

    const timers = timersRef.current;
    return () => {
      supabase.removeChannel(channel);
      timers.forEach(clearTimeout);
    };
  }, [applyResult, highlight]);

  return { projects, isLoading, error, isConfigured: Boolean(supabase), highlightedIds };
}

export default useProjects;
