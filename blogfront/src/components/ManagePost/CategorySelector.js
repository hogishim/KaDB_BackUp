import styled from "styled-components";

const Categories = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
`;

const CategoryHeader = styled.div`
font-size: 12pt;
font-family: KakaoBold;
color: #FFFFFF;
margin-left: 60px;
margin-top: 25px;
`;

const CategorySelect = styled.select`
  color: #000000;
  background-color: #FFFFFF;
  padding: 5px 10px;
  border: none;
  border-radius: 50px;
  margin: 10px 0;
  margin-left: 20px;
  margin-top: 20px;
  font-family: KakaoRegular;
  font-size: 10pt;
`;





function CategorySelector() {
  return (
    <Categories>
      <CategoryHeader>CATEGORY</CategoryHeader>
      <CategorySelect>
        <option>국내여행</option>
        <option>유럽여행</option>
        <option>아시아여행</option>
        <option>아메리카여행</option>
        <option>아프리카여행</option>
        <option>오스트리아여행</option>
        <option>남/북극여행</option>
      </CategorySelect>
    </Categories>
  );
}
export default CategorySelector;
