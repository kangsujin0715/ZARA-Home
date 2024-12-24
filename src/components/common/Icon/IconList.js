import React from 'react';

const icons = {
    share: { 
        name: 'b-share', 
        src: '/images/icon/b-share.svg', // SVG 파일 경로
        alt: '공유', 
        size: 48 
    }
};

const Icon = ({ name, color, width, height, ...props }) => {
    const SvgComponent = icons[name]?.src;
    const size = width ?? icons[name]?.size;

    // SVG를 직접 JSX로 반환하려면 `src`를 `import` 하거나 SVG 파일을 JSX로 변환해야 함
    // 예: src를 import하여 JSX 형태로 다루는 방식

    return (
        <div className="inline-block">
            <img 
                src={SvgComponent}
                width={size}
                height={size}
                alt={icons[name]?.alt}
                className={`${color ? `text-[${color}]` : ''}`} // Tailwind 색상 적용
                {...props}
            />
        </div>
    );
};

export default Icon;
