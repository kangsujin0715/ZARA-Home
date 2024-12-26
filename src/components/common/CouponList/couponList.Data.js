import IconButton from '../Icon/IconButton';

// 쿠폰 타입 정의 (TypeScript를 사용할 경우)
const CouponList = [
  {
    title: '할인 쿠폰',
    detail: [
      { 
        id: 1,
        coupons: [ // 쿠폰 배열
          {
            title: '전상품 12% 쿠폰', // title 확인
            text: '최대 50,000원 할인',
            downLoad: <IconButton icon="download" />
          },
          {
            title: '전상품 12% 쿠폰',
            text: '최대 50,000원 할인',
            downLoad: <IconButton icon="download" />
          },
        ]
      },
      { 
        id: 2, 
        coupons: [
          {
            title: '전상품 120% 쿠폰',
            text: '최대 50,000원 할인',
            downLoad: <IconButton icon="download" />
          },
        ]
      },
      { 
        id: 3, 
        coupons: [
          {
            title: '전상품 12% 쿠폰',
            text: '최대 50,000원 할인',
            downLoad: <IconButton icon="download" />
          },
        ]
      },
    ],
  },
];


export default CouponList;
