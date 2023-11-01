import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


let AddBadge = styled.div`

display: flex;
  justify-content: center;
  align-items: center;
  width: 12vw;
  height: 12vw;
  background-color: snow;
  border-radius: 50%;
  margin: 3px;


`

let ImgBox = styled.div`

width: 70%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;


`

let Image = styled.img`

  width: 50%;
  height: auto;
  margin: 10px;

&:hover{

    width: 60%;
  height: auto;
  margin: 10px;
  transition: all 1s;

}


`


function BadgeBox(props) {

    const navi = useNavigate();

    return (
        <AddBadge>
            <ImgBox>
                <Image src={props.img} onClick={() => { navi('/setting') }} />
            </ImgBox>
        </AddBadge>



    )
}
export default BadgeBox;