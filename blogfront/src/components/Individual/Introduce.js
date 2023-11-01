import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import editIcon from "./editIcon.png";
import calanderIcon from "./calanderIcon.png";
import settingIcon from "./settingIcon.png";
import bedgeIcon from "./bedgeIcon.png";

const IntroduceDiv = styled.div`
    display : grid;
    margin-left:5%;
    flex-grow: 1;
`
const BedgeImg = styled.img`
    width : 2rem;
    height: 2rem;
`
const NameDiv = styled.div`
    display : flex;
    align-items : center;
    font-weight : bold;
    h1{
        font-size: 2rem;
    }
`
const EditIcon = styled.img`
    border : 3px solid black;
    border-radius : 5px;
    padding : 0.2rem;
    width : 5%;
    aspect-ratio: 1/1;
    margin-left : 0.6rem;
`
const TextDiv = styled.div`
`
const FolDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight : bold;
    grid-column : 2/3;
    grid-row : 1/3;
`
const FoTable = styled.table`
`
const FoTableTbody = styled.tbody`
    display: inline-block;
    border: 1px dashed black;
    border-radius: 5px;
    text-align: center;
    padding:4%;
`
const ButtonDiv = styled.div`
    display: flex;
    grid-column : 1/3;
    justify-content: center;
    align-items: center;
    gap: 5%;
`
const ButtonImg = styled.img`
    max-width: 3rem;
    width : 10%;
    aspect-ratio: 1/1;
    cursor: pointer;
`

function Introduce(props) {
    const navigate = useNavigate()
    return (
        <IntroduceDiv>
            <NameDiv>
                <BedgeImg src={bedgeIcon}/>
                <h1>{props.name}</h1>
                <EditIcon src={editIcon}/>
            </NameDiv>
            <FolDiv>
                <FoTable>
                    <FoTableTbody>
                    <tr>
                        <td>게시물</td>
                        <td>{props.postcount.toLocaleString('ko-KR')}</td>
                    </tr>
                    <tr onClick={()=>navigate('/follower')} style={{cursor:"pointer"}}>
                        <td>팔로워</td>
                        <td>{props.follower.toLocaleString('ko-KR')}</td>
                    </tr>
                    <tr onClick={()=>navigate('/following')} style={{cursor:"pointer"}}>
                        <td>팔로잉</td>
                        <td>{props.following.toLocaleString('ko-KR')}</td>
                    </tr>
                    </FoTableTbody>
                </FoTable>
            </FolDiv>
            <TextDiv>
                {props.intro}
            </TextDiv>
            <ButtonDiv>
                <ButtonImg src={calanderIcon} onClick={()=>navigate('/manageroute')}/>
                <ButtonImg src={settingIcon} onClick={()=>navigate('/setting')}/>
            </ButtonDiv>
        </IntroduceDiv>
    )
}

export default Introduce;