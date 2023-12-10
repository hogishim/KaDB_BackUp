import styled from 'styled-components'
import data from './TempData'
import { useNavigate } from 'react-router-dom'
import editImg from './Source/edit.png'
import viewImg from './Source/view.png'
import GlobalStyle from '../Fonts/GlobalStyle'


const RouteContainer = styled.div`

    width: calc(100div - 7rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;


    `



const RouteInfoBox = styled.div`

    width: 60vw;
    height: 13vh;
    background-color: #FFDB31;
    padding: 10px;
    margin: 1vh;
    box-sizing: border-box;
    overflow-x: hidden;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-radius: 10px;
    



    `

const InfoBox = styled.div`
    
    display: flex;
    flex-direction: column;
    width: 40vw;
    height: 10vh;
    justify-content: center;
    
    
    `


const RouteTitle = styled.div`

    font-size: 3vh;
    font-family: "kakaobold";

    `
const RouteDate = styled.div`

    font-family: "kakao";

    `
const EditBox = styled.div`

    width: 20vw;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    
    
    `

const EditImg = styled.img`
    
    width: 3vw;
    height: auto;
    margin-left: 3vw;
    
    
    `

function RouteBox() {

    const navi = useNavigate('')


    return (

        <RouteContainer>
            <GlobalStyle />

            {data.map(function (a, i) {

                return (
                    <RouteInfoBox id={i}>
                        <InfoBox>
                            <RouteTitle>{a.title}</RouteTitle>
                            <RouteDate>{a.date}</RouteDate>
                        </InfoBox>
                        <EditBox>
                            <EditImg src={viewImg} onClick={() => navi('/routeview')} />
                            <EditImg src={editImg} onClick={() => navi('/routeedit')} />

                        </EditBox>
                    </RouteInfoBox>

                )

            })}




        </RouteContainer>


    )



}
export default RouteBox;