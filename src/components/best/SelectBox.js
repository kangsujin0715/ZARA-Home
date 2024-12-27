import React from 'react'
import CustomSelect from '../common/CustomSelect';
import styled from "styled-components";
import IconButton from '../common/Icon/IconButton';

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
            <div><span>{item.title} / {colorOptions[1]} / {sizeOptions[1]}</span></div>
            <NumberBox className='calc-box'>
              <IconButton icon="minus" />
              <span>9999</span>
              <IconButton icon="plus" />
            </NumberBox>
            <PriceResultBox>
              <p>{item.sale ? item.newPrice : item.price}원</p>
              <IconButton icon="close" size={24} />
            </PriceResultBox>
          </ListItem>
          <ListItem>
            <div><span>{item.title} / {colorOptions[1]} / {sizeOptions[2]}</span></div>
            <NumberBox className='calc-box'>
              <IconButton icon="minus" />
              <span>9999</span>
              <IconButton icon="plus" />
            </NumberBox>
            <PriceResultBox>
              <p>{item.sale ? item.newPrice : item.price}원</p>
              <IconButton icon="close" size={24} />
            </PriceResultBox>
          </ListItem>
      </SelectListBox>
      {/* select-box 제품선택관련 */}
    </div>
    )
}


const SelectListBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;

  & > div {
    margin-top: 10px;
  }

  & > div:first-child {
    margin-top: 0;
  }
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 44px;
  padding: 0 10px 0 16px;
  background: #F1EADC;
  cursor: pointer;
  font-size: 14px;
  color: #757575;
  color: #282828;
`;

const NumberBox = styled.div`
  display: flex;
  align-items: center;
`;

const PriceResultBox = styled.div`
  display: flex;
  align-items: center;
`;

export default SelectBox