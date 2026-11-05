import { useState } from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import ImageNotSupportedRoundedIcon from '@mui/icons-material/ImageNotSupportedRounded';

/**
 * MobileMockupThumbnail 컴포넌트
 * 1:1 파스텔 배경 위에 둥근 스마트폰 프레임을 그리고, 그 안에 사이트 썸네일을 보여준다.
 * 이미지가 오는 동안에는 Skeleton, 실패하면 안내 아이콘을 보여준다.
 *
 * Props:
 * @param {string} imageUrl - 휴대폰 화면에 넣을 썸네일 URL [Required]
 * @param {string} title - 대체 텍스트로 쓸 프로젝트 이름 [Required]
 * @param {string} toneSoft - 배경 파스텔 색 [Required]
 * @param {string} toneMain - 실패 아이콘 등 강조 색 [Required]
 *
 * Example usage:
 * <MobileMockupThumbnail imageUrl={ url } title="게시판" toneSoft="#e3f6ee" toneMain="#1d7a52" />
 */
function MobileMockupThumbnail({ imageUrl, title, toneSoft, toneMain }) {
  const [status, setStatus] = useState('loading');

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        aspectRatio: '1 / 1',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        overflow: 'hidden',
        bgcolor: toneSoft,
      }}
    >
      <Box
        className="project-card__phone"
        sx={{
          position: 'relative',
          height: '88%',
          aspectRatio: '375 / 812',
          mb: '-6%',
          borderRadius: '26px',
          border: '6px solid #1f1f1f',
          bgcolor: '#ffffff',
          overflow: 'hidden',
          boxShadow: '0 12px 28px rgba(0, 0, 0, 0.18)',
          transition: 'transform 0.35s ease',
          '&::before': {
            content: '""',
            position: 'absolute',
            zIndex: 2,
            top: 6,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '34%',
            height: 10,
            borderRadius: 10,
            bgcolor: '#1f1f1f',
          },
        }}
      >
        { status === 'loading' && (
          <Skeleton variant="rectangular" animation="wave" sx={{ position: 'absolute', inset: 0, height: '100%' }} />
        ) }
        { status === 'error' ? (
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              px: 1,
              textAlign: 'center',
              fontSize: '0.75rem',
              lineHeight: 1.4,
              color: '#555555',
            }}
          >
            <ImageNotSupportedRoundedIcon sx={{ fontSize: 32, color: toneMain }} />
            미리보기를 불러올 수 없어요
          </Box>
        ) : (
          <Box
            component="img"
            src={ imageUrl }
            alt={ `${title} 사이트 모바일 화면 미리보기` }
            loading="lazy"
            onLoad={ () => setStatus('loaded') }
            onError={ () => setStatus('error') }
            sx={{
              display: 'block',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
              opacity: status === 'loaded' ? 1 : 0,
              transition: 'opacity 0.4s ease',
            }}
          />
        ) }
      </Box>
    </Box>
  );
}

export default MobileMockupThumbnail;
