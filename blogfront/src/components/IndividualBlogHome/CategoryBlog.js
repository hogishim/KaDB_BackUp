import styled from "styled-components"
import category from './TempCategory'
import CategoryBlogList from "./CategoryBlogList";


const CategoryContainer = styled.div`

height: 50vh;
width: calc(100vw - 7rem);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`

const CategoryTitle = styled.div`
    width: 70vw;
    height: 2vh;
  font-size: 12pt;
  font-family: KakaoBold;
  color: #FFFFFF;
  font-weight: bold;
  text-decoration: 2px yellow underline;
  margin-top: 40px;
  margin-bottom: 1rem;
`;


const CategoryBox = styled.div`
    height: 48vh;
    width: 70vw;
  background-color: #FFFFFF;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  overflow-y: scroll
`;

const Categories = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  margin-top: 20px;
  width: 25%;
`;

const CategoryItem = styled.div`
  font-size: 11pt;
  font-family: KakaoBold;
  font-weight: bold;
  text-shadow: 2px 2px 2px gray;
  margin-left: 20px;
`;


function CategoryBlog() {

    return (
        <CategoryContainer>
            <CategoryTitle>CATEGORY</CategoryTitle>

            <CategoryBox>

                {category.map(function (a, i) {

                    return (
                        <Categories>
                            <CategoryItem>{a}</CategoryItem>
                            <CategoryBlogList category={category[i]} />
                        </Categories>
                    )

                })}

            </CategoryBox>

        </CategoryContainer>

    )

}

export default CategoryBlog;