import React from 'react'
import CustomSelect from '../common/CustomSelect';
import styled from "styled-components";

const colorOptions = ['크림', '카키', '브라운', '블랙'];
const sizeOptions = ['XS', 'S', 'M', 'L', 'XL'];

const SelectBox = ({item}) => {
  return (
    <div>
      <CustomSelect data={colorOptions} placeholder='color' />
      <CustomSelect data={sizeOptions} placeholder='size' />
      {/* custom select 관련 */}
        
      <SelectListBox>
          <ListItem>
            <div>
              <span>{item.title}</span>/ {colorOptions.placeholder} / L</div>
            <div className='calc-box'>
              <button className='minus'></button>
              <span>9999</span>
              <button className='plus'></button>
            </div>
            <p>{item.sale ? item.newPrice : item.price}원</p>
            <button className='delete-btn'></button>
          </ListItem>
      </SelectListBox>
      {/* select-box 제품선택관련 */}
    </div>
    )
}



const SelectListBox = styled.ul`
  display: flex;
  align-items: center;
  width: ${(props) => props.width}; /* 동적 너비 */
  height: 44px;
  margin-bottom: ${(props) => props.$mb};
  padding: 0 10px 0 16px;
  background: #F1EADC;
  cursor: pointer;
  font-size: 14px;
  color: #757575;
`;


const ListItem = styled.li`
  display: flex;
    align-items: center;
    justify-content: space-between;
    color: #282828;

    & span {
    display: -webkit-box;
    overflow: hidden;
    width: 300px;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-all;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    }
`;

export default SelectBox