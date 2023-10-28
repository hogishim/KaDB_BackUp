import styled from "styled-components";

import MenuButton from "./menuButton";
import Profile from "./profile";
import SignButton from "./SignButton";

import userIcon from "./user.png"
import homepageLogoIcon from "./homepageLogo.png"
import profileIcon from "./profileIcon.png"
import homeIcon from "./whiteHomeIcon.png"
import searchIcon from "./whiteSearchIcon.png"

const HomepageLogo = styled.img`
    width : 7rem;
    height : 7rem;
`
const BackDiv = styled.div`
    background-color : #66B0FF;
    width : 7rem;
    height : 100vh;
    display : flex;
    flex-direction : column;
    justify-content: space-between;
    align-items : center;
`
const SignDiv = styled.div`
    display : flex;
    flex-direction:column;
    margin-bottom : 2rem;
`

const MenuDiv = styled.div`
    display : flex;
    flex-direction:column;
    flex-grow:1;
`

function NavBar(){
    return(
        <BackDiv>
            <HomepageLogo src={homepageLogoIcon}/>
            <Profile text="USERNAME" src={userIcon}/>
            <MenuDiv>
                <MenuButton text="HOME" src={homeIcon}/>
                <MenuButton text="PROFILE" src={profileIcon}/>
                <MenuButton text="SEARCH" src={searchIcon}/>
            </MenuDiv>
            <SignDiv>
                <SignButton text="Sign In"/>
                <SignButton text="Sign Up"/>
            </SignDiv>
        </BackDiv>
    )
}

export default NavBar;