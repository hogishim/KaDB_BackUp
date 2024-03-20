import styled from "styled-components";
import { useState } from "react";

const Categories = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
`;

const CategoryHeader = styled.div`
  font-size: 12pt;
  font-family: KakaoBold;
  color: #ffffff;
  margin-left: 60px;
  margin-top: 25px;
`;

const CategorySelect = styled.select`
  color: #000000;
  background-color: #ffffff;
  padding: 5px 10px;
  border: none;
  border-radius: 50px;
  margin: 10px 0;
  margin-left: 20px;
  margin-top: 20px;
  font-family: KakaoRegular;
  font-size: 10pt;
`;

function CategorySelector(props) {
  const cate = ["유럽여행", "아시아여행", "아메라카 여행", "국내여행"];

  const handleChange =(e) =>{

    const cat = e.target.value;
    props.setCategory(cat);

  }
  return (
    <Categories>
      <CategoryHeader >CATEGORY</CategoryHeader>
      <CategorySelect onChange={handleChange}>
        <option>---게시판을 선택해주세요---</option>
        {cate.map((a) => {
          return <option>{a}</option>;
        })}
      </CategorySelect>
    </Categories>
  );
}
export default CategorySelector;
