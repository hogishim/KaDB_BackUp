import styled from "styled-components";

import likeIcon from "./likeIcon.png";
import shareIcon from "./shareIcon.png";
import commentIcon from "./commentIcon.png";

const ListDiv=styled.div`
    width: 95%;
    margin-bottom: 4%;
`
const ListImgDiv=styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 1/1;
    overflow: hidden;
    background-color: black;
`
const ListImg=styled.img`
    position: absolute;
    left: 50%;
    top : 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const ListInfoDiv=styled.div`
    display : flex;
    justify-content: space-between;
    margin-top:0.5rem;
`
const ListInfoItemDiv=styled.div`
    display:flex;
    align-items: center;
`
const ListInfoImg=styled.img`
    width: 30%;
`

function PostList (props){
    return(
        <ListDiv>
            <ListImgDiv><ListImg src={props.img}/></ListImgDiv>
            <ListInfoDiv>
                <ListInfoItemDiv><ListInfoImg src={likeIcon}/>{props.like}</ListInfoItemDiv>
                <ListInfoItemDiv><ListInfoImg src={commentIcon}/>{props.comment}</ListInfoItemDiv>
                <ListInfoItemDiv><ListInfoImg src={shareIcon}/>{props.share}</ListInfoItemDiv>
            </ListInfoDiv>
        </ListDiv>
    )
}

export default PostList;