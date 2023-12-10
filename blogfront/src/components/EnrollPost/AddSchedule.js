import { useRef } from "react";
import styled from "styled-components";

const PostBox = styled.div`
  background-color: #F2F2F2;
  margin: 20px 20px;
  border-radius: 10px;
  position: relative;
  padding: 10px 20px;
  width: 80%;
`;
const PostBoxTitle = styled.div`
  font-family: KakaoBold;
  font-size: 12pt;
  margin: 20px 20px;
`;

const DelButton = styled.button`
  background-color: transparent;
  padding: 10px 20px;
  position: absolute;
  top: 10px;
  right: 30px;
  font-size: 15pt;
  border: none;
  &:hover{
    cursor: pointer;
  }
`
const PostItemBox = styled.div`
  background-color: #FFFFFF;
  margin-left: 20px;
  margin-top: 20px;
  margin: 30px 20px;
  border-radius: 10px;
  padding: 20px 20px;
`;
const PostItem = styled.div`
  font-family: KakaoRegular;
  font-size: 10pt;
  color: #000000;
  width: 100%;
  margin: 20px auto;
`;
const PostText = styled.textarea`
  border: none;
  resize: none;
  width: 100%;
  background-color: aliceblue;
  outline: none;
`

const AddImageBox = styled.div`
  border: 1px dashed #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 20px;
`;

const AddImage = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 20px;
  display: block;
  margin: 50px 50px;
  margin-left: auto;
  margin-right: auto;
`;

const Manages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 15px;
`;

const TagButton = styled.button`
  background-color: #1EFFF1;
  font-family: KakaoBold;
  font-size: 10pt;
  padding: 10px 20px;
  border-radius: 50px;
  position: absolute;
  left: 20px;
  margin-left: 20px;
  border: none;
`;

const ManageButton = styled.button`
  background-color: #FBFB49;
  color: #000000;
  font-family: KakaoBold;
  font-weight: bold;
  font-size: 10pt;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  margin-left: 10px;
`

function AddSchedule(props) {
  const textref = useRef()
  const handleResizeHeight = ()=>{
    textref.current.style.height = 'auto'
    textref.current.style.height = textref.current.scrollHeight + 'px'
  }
    return (
        <PostBox>
            <PostBoxTitle>{props.id+1}일차</PostBoxTitle>
            <DelButton onClick={()=>{props.delete(props.id)}}>&#10060;</DelButton>
            <PostItemBox>
                <AddImageBox>
                    <AddImage src="AddImg.jpg" alt="AddImg" />
                </AddImageBox>
                <PostItem>
                  <PostText rows={1} ref={textref}onChange={()=>handleResizeHeight()}/>
                </PostItem>
            </PostItemBox>
            <Manages>
                <TagButton>#태그 추가</TagButton>
                <ManageButton>이동수단 추가</ManageButton>
                <ManageButton>장소 추가</ManageButton>
            </Manages>
        </PostBox>
    )
}

export default AddSchedule