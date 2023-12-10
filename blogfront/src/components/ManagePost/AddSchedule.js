import styled from "styled-components";


const PostBox = styled.div`
  background-color: #F2F2F2;
  margin-left: 20px;
  margin: 20px 20px;
  margin-top: 30px;
  border-radius: 10px;
  position: relative;
  padding: 10px 20px;
`;
const PostBoxTitle = styled.div`
  font-family: KakaoBold;
  font-size: 12pt;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 10px;
  margin: 20px 20px;
`;

const SaveButton = styled.button`
  background-color: #FBFB49;
  color: #000000;
  border-radius: 50px;
  padding: 10px 20px;
  position: absolute;
  top: 22px;
  right: 40px;
  z-index: 0;
  font-family: KakaoBold;
  font-size: 10pt;
  font-weight: bold;
  border: none;
`;

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
  margin-left: 20px;
  margin: 20px 22px;
`;

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
  color: #000000;
  font-family: KakaoBold;
  font-weight: bold;
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
`;

function AddSchedule() {
    return (
        <PostBox>
            <PostBoxTitle>1일차 인천 - 런던</PostBoxTitle>
            <SaveButton>저장</SaveButton>
            <PostItemBox>
                <PostItem>
                    공항으로 가는 길은 언제나 설레요... 저는 항상 출국하는 날에는 설레서 잠을 못이룹니다.
                    비행 3시간 전에 도착을 해야 하기 때문에, 8시에 출발하는 막차를 타고 9시쯤 도착해 체크인을 마쳤습니다.
                    마침내 0시 20분 비행기에 탑승하였고, 0시 55분 비행기는 이륙했습니다!
                </PostItem>
                <AddImageBox>
                    <AddImage src="AddImg.jpg" alt="AddImg" />
                </AddImageBox>
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