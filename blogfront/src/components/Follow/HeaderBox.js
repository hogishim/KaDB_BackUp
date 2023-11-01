import styled from 'styled-components'
import img from './Source/back.png'
import { useNavigate } from 'react-router-dom'

let Head = styled.div`

height: 10vh;
width: 40vw;
justify-content: center;
display: flex;
align-items: center;
font-size: 20px;
`

let Image = styled.img`

height: 2vh;
width: 2vh;
display: flex;
justify-content: center;
align-items: center;


`
let ImgBox = styled.div`

flex-grow: 2;
display: flex;
justify-content: center;
align-items: center;

`

let Text = styled.div`

flex-grow: 9;
display: flex;
justify-content: center;
align-items: center;


`

function HeaderBox(props) {

    // naviagtor for moving to another page
    const navi = useNavigate();

    return (

        <>

            {/* define container that will store header text and 
            button that will move page to the previous page*/}
            <Head>

                {/* when clicking before button, it will move to the previous page */}
                <ImgBox><Image src={img} onClick={() => navi(-1)} /></ImgBox>
                {/* text will be shown depending on props data. For each following and follower
                text will be shown differently */}
                <Text>{props.text}</Text>

            </Head>

        </>

    )

}
export default HeaderBox;