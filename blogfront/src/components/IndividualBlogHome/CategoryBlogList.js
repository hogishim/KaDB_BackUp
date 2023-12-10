import postlist from './TempPostName'
import styled from 'styled-components'

const PostItem = styled.div`
display: flex;
flex-direction: column;
align-item: center;
justify-content: center;
width: 70%;
  font-size: 9pt;
  font-family: KakaoRegular;
  margin: 20px;
`;

const P = styled.div`

margin: 0px;
text-align: center;

`

function CategoryBlogList(props) {

    return (

        postlist.map(function (a) {


            if(a.category == props.category){

            return (

                <PostItem>
                    
                    <P>{a.date} </P>
                    <P> {a.title}</P>

                </PostItem>

            )

            }
        })

    )


}
export default CategoryBlogList;