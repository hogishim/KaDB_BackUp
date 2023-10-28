import styled from "styled-components"

import tapeIcon from "../Individual/TapeIcon.png";

const ProfileDiv = styled.div`
    position : relative;
    border : 3px solid #09006B;
    border-radius : 5px;
    width : 10rem;
    aspect-ratio: 1/1;
    background-color: #F2F2F2;
`
const ProfileImg = styled.img`
    position : absolute;
    width : 100%;
    height: 100%;
    object-fit:cover;
    left : 50%;
    top : 50%;
    transform : translate(-50%,-50%);
`
const ProfileTapeImg = styled.img`
    z-index : 1;
    position : absolute;
    width : 5rem;
    left : 50%;
    top : -10%;
    transform : translate(-50%,0);
`
function Profile(props) {
    return (
            <ProfileDiv>
                <ProfileTapeImg src={tapeIcon} />
                <ProfileImg src={props.src} />
            </ProfileDiv>
    )
}

export default Profile;