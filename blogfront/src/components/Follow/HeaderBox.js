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

    const navi = useNavigate();

    return (

        <>

            <Head>

                <ImgBox><Image src={img} onClick={() => navi(-1)} /></ImgBox>
                <Text>{props.text}</Text>

            </Head>

        </>

    )

}
export default HeaderBox;