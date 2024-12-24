import React from 'react';

const icons = {
  search: {
    name: 'search',
    src: '/images/icon/w-search.svg',
    alt: '검색하기',
    size: 24,
  },
  redHeart: {
    name: 'redHeart',
    src: '/images/icon/r-heart.svg',
    alt: '관심목록',
    size: 48,
  },
  redHeartFill: {
    name: 'redHeart',
    src: '/images/icon/r-heart-fill.svg',
    alt: '관심목록',
    size: 48,
  },
  whitePlus: {
    name: 'whitePlus',
    src: '/images/icon/w-plus.svg',
    alt: '더보기',
    size: 48,
  },
  close: {
    name: 'close',
    src: '/images/icon/b-close.svg',
    alt: '닫기',
    size: 24,
  },
  share: {
    name: 'share',
    src: '/images/icon/b-share.svg',
    alt: '공유하기',
    size: 48,
  },
  favorite: {
    name: 'favorite',
    src: '/images/icon/b-heart.svg',
    alt: '찜하기',
    size: 48,
  },
  basket: {
    name: 'basket',
    src: '/images/icon/b-basket.svg',
    alt: '장바구니',
    size: 48,
  },
  download: {
    name: 'download',
    src: '/images/icon/b-download.svg',
    alt: '장바구니',
    size: 48,
  },
};

const Icon = ({ name, width, height, ...props }) => {
  const icon = icons[name];

  if (!icon) {
    return null; // 아이콘이 없으면 아무 것도 렌더링하지 않음
  }

  const { src, alt, size } = icon;
  const iconWidth = width ?? size;
  const iconHeight = height ?? size;

  return (
    <div className="inline-block">
      <img
        src={src}
        alt={alt}
        width={iconWidth}
        height={iconHeight}
        {...props}
      />
    </div>
  );
};

export default Icon;
