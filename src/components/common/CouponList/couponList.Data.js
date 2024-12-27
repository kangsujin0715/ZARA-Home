import IconButton from '../Icon/IconButton';

// 쿠폰 타입 정의 (TypeScript를 사용할 경우)
const CouponList = [
  {
    title: '할인 쿠폰',
    detail: [
      { 
        id: 1,
        coupons: [
          {
            sale: '14%',
            title: '전상품 14% 쿠폰',
            text: '최대 50,000원 할인',
            downLoad: <IconButton icon="download" size={24} />
          },
          {
            sale: '12%',
            title: '전상품 12% 쿠폰',
            text: '최대 50,000원 할인',
            downLoad: <IconButton icon="download" size={24} />
          },
          {
            sale: '3%',
            title: '프로모션 더블 3% 쿠폰',
            text: '최대 15,000원 할인',
            downLoad: <IconButton icon="download" size={24} />
          },
          {
            sale: '100%',
            title: '전상품 100% 쿠폰',
            text: '최대 15,00000원 할인',
            downLoad: <IconButton icon="download" size={24} />
          },
        ]
      },
      { 
        id: 3, 
        coupons: [
          {
            sale: '100%',
            title: '프로모션 전상품 100% 쿠폰',
            text: '최대 1,000,000원 할인',
            downLoad: <IconButton icon="download" size={24} />
          },
        ]
      },
      { 
        id: 4, 
        coupons: [
          {
            sale: '10%',
            title: '전상품 10% 쿠폰',
            text: '최대 10,000원 할인',
            downLoad: <IconButton icon="download" size={24} />
          },
          {
            sale: '15%',
            title: '전상품 15% 쿠폰',
            text: '최대 50,000원 할인',
            downLoad: <IconButton icon="download" size={24} />
          },
        ]
      },
    ],
  },
];


export default CouponList;
