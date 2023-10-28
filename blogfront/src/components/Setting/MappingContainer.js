import styled from 'styled-components'
import icon1 from '../Setting/Source/pw.png'
import icon2 from '../Setting/Source/bg.png'
import icon3 from '../Setting/Source/tag.png'
import { useNavigate } from 'react-router-dom'

let MappingContainerBox = styled.div`

width: 30vw;
height: 5vh;

display: flex;


`
let MappingContainer1 = styled.div`

width: 10vw;
height: 5vh;
background-color:#5AD2FF;
border-top-left-radius: 20px;
display: flex;
justify-content: center;
align-items: center;

`
let MappingContainer2 = styled.div`

width: 10vw;
height: 5vh;
background-color: #D376F3;
display: flex;
justify-content: center;
align-items: center;


`
let MappingContainer3 = styled.div`

width: 10vw;
height: 5vh;
background-color: #F28ECA;
border-top-right-radius: 20px;
display: flex;
justify-content: center;
align-items: center;


`

let Icon = styled.img`

height: 3vh;
width: 3vh;


`




function MappingContainer() {

    const navi = useNavigate();

    return(
    <MappingContainerBox>
        <MappingContainer1 onClick={() => { navi("/setting/pw") }}><Icon src={icon1} /></MappingContainer1>
        <MappingContainer2 onClick={() => { navi("/setting/bg") }}><Icon src={icon2} /></MappingContainer2>
        <MappingContainer3 onClick={() => { navi("/setting/tag") }}><Icon src={icon3} /></MappingContainer3>

    </MappingContainerBox>
    )

}
export default MappingContainer;