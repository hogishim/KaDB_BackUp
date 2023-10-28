import styled from "styled-components";

const ProfileDiv = styled.div`
    text-align : center;
    color : white;
    flex-grow:1;
    margin-top:2rem;
`
const ProfileImg = styled.img`
    width : 5rem;
    height : 5rem;
    border-radius : 50%;
    background-color : white;
`
const ProfileName = styled.p`
    font-weight : bold;
    font-size : 1rem;
`

function Profile(props){
    return(
        <ProfileDiv>
            <ProfileImg src={props.src}/>
            <ProfileName>{props.text}</ProfileName>
        </ProfileDiv>
    )
}
export default Profile;