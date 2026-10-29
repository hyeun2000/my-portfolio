import { useCallback, useEffect, useState } from 'react';

import { supabase } from '../lib/supabase';

/** 공개 조회 컬럼 (email 은 비공개라 DB 권한에서도 조회가 막혀 있다) */
const PUBLIC_COLUMNS = 'id, nickname, sns, message, created_at';
const PAGE_SIZE = 50;

/** 최신순 방명록 목록을 조회한다. (상태를 직접 바꾸지 않는 순수 조회 함수) */
function selectEntries() {
  return supabase
    .from('guestbook')
    .select(PUBLIC_COLUMNS)
    .order('created_at', { ascending: false })
    .limit(PAGE_SIZE);
}

/**
 * useGuestbook 훅
 * Supabase guestbook 테이블에서 방명록을 불러오고 새 글을 등록한다.
 *
 * @returns {{
 *   entries: Array, isLoading: boolean, error: string,
 *   isConfigured: boolean, addEntry: function
 * }}
 *
 * Example usage:
 * const { entries, addEntry } = useGuestbook();
 */
function useGuestbook() {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(Boolean(supabase));
  const [error, setError] = useState('');

  const applyResult = useCallback(({ data, error: fetchError }) => {
    if (fetchError) {
      setError('방명록을 불러오지 못했어요. 잠시 후 다시 시도해주세요.');
    } else {
      setEntries(data);
      setError('');
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!supabase) return;
    selectEntries().then(applyResult);
  }, [applyResult]);

  /** 새 방명록 등록 후 목록을 다시 불러온다. 실패하면 Error 를 던진다. */
  const addEntry = useCallback(async ({ nickname, email, sns, message }) => {
    if (!supabase) throw new Error('방명록 서버가 연결되지 않았어요.');

    const { error: insertError } = await supabase.from('guestbook').insert({
      nickname,
      email: email || null,
      sns: sns || null,
      message,
    });

    if (insertError) throw new Error('방명록 등록에 실패했어요. 다시 시도해주세요.');
    applyResult(await selectEntries());
  }, [applyResult]);

  return { entries, isLoading, error, isConfigured: Boolean(supabase), addEntry };
}

export default useGuestbook;
