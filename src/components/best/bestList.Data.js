const bestListItems = [
  { id: 1, src: `${process.env.PUBLIC_URL}/images/best01.svg`, title: '보로실리케이트 글라스 프렌치프레스 보로실리케이트 글라스 프렌치프레스 보로실리케이트 글라스 프렌치프레스 보로실리케이트 글라스 프렌치프레스 보로실리케이트 글라스 프렌치프레스 보로실리케이트 글라스 프렌치프레스', price: '359,000', sale: '10', newPrice: '45,000', num: '5153/121'}, 
  { id: 2, src: `${process.env.PUBLIC_URL}/images/best02.svg`, best: 'BEST', title: '블록 프린트 러그 블록 프린트 러그 블록 프린트 러그', price: '359,000', sale: '50', newPrice: '359,000'},
  { id: 3, src: `${process.env.PUBLIC_URL}/images/best03.svg`, new: 'NEW', title: '애쉬우드 체어 타월 랙', price: '238,500'},
  { id: 4, src: `${process.env.PUBLIC_URL}/images/best04.svg`, new: 'NEW', best: 'BEST', title: '업홀스터리 부클레 암체어', price: '45,000'},
  { id: 5, src: `${process.env.PUBLIC_URL}/images/best05.svg`, best: 'BEST', title: '실리콘 & 우드 조리도구 세트', price: '359,000'},
  { id: 6, src: `${process.env.PUBLIC_URL}/images/best06.svg`, new: 'NEW', title: '우드 디테일 메탈 메쉬 트레이', price: '238,500'},
];

export default bestListItems;

bestListItems.forEach(item=>{
  const startIndex = item.src.lastIndexOf('/');
  // src 문자열의 마지막 /
  const lastIndex = item.src.lastIndexOf('.');
  // src 문자열의 마지막 .
  item.href = item.src.slice(startIndex + 1, lastIndex);
})