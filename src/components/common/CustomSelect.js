import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";

const CustomSelect = ({ data, placeholder = "선택", width = "100%" }) => {
  const [currentValue, setCurrentValue] = useState(placeholder);
  const [showOptions, setShowOptions] = useState(false);
  const selectRef = useRef(null); // SelectBox의 참조를 설정

  const handleOnChangeSelectValue = (e) => {
    setCurrentValue(e.target.getAttribute("value"));
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setShowOptions(false); // SelectBox 외부를 클릭하면 드롭다운 닫기
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // 마우스 클릭 이벤트 리스닝
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // 컴포넌트 언마운트 시 이벤트 제거
    };
  }, []);

  return (
    <SelectBox ref={selectRef} onClick={() => setShowOptions((prev) => !prev)} width={width}>
      <Label>{currentValue}</Label>
      <SelectOptions $show={showOptions}>
        {data.map((item, index) => (
          <Option key={index} value={item} onClick={handleOnChangeSelectValue}>
            {item}
          </Option>
        ))}
      </SelectOptions>
      <ArrowIcon $show={showOptions} /> {/* 화살표 아이콘 */}
    </SelectBox>
  );
};

const SelectBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => props.width}; /* 동적 너비 */
  height: 44px;
  margin-top: 8px;
  padding: 0 10px 0 16px;
  background-color: #FFF;
  cursor: pointer;
  font-size: 14px;
  color: #757575;
  border: 1px solid #E0E0E0;
  box-sizing: border-box;

  &:first-child {
    margin-top: 0;
  }
  `;

const Label = styled.label`
  font-size: 14px;
`;

const SelectOptions = styled.ul`
  position: absolute;
  z-index: 1;
  top: 48px;
  left: 0;
  width: 100%;
  overflow-y: auto;
  padding: 0;
  background: #FFF;
  color: #111;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
  max-height: ${(props) => (props.$show ? "176px" : "0")}; /* $show prop을 사용 */
  transition: max-height 0.3s ease-in-out; /* 부드러운 애니메이션 */
`;

const Option = styled.li`
  display: flex;
  align-items: center;
  height: 44px;
  font-size: 14px;
  padding: 0 10px 0 16px;
  transition: background-color 0.2s ease-in;

  &:hover {
    background: #F5F5F5;
  }
`;

const ArrowIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  background: url(${(props) => `${process.env.PUBLIC_URL}/images/icon/${props.$show ? 'g-up' : 'g-down'}.svg`}) center no-repeat;
  transition: max-height 0.3s ease-in-out; /* 부드러운 애니메이션 */
  background-size: 24px;
`;

export default CustomSelect;
