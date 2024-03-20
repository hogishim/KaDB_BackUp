import React from "react";
import styled from "styled-components";
import AddCity from "../EnrollPost/AddCity/Integrated";
import { useState, useEffect } from "react";
import AddPlace from "../EnrollPost/AddPlace/Integrated";
import AddTransport from "../EnrollPost/AddTransport/Integrated";
import AddImage from '../EnrollPost/AddImage/Integrated'
import CategorySelector from "./CategorySelector";
import PostInput from "./PostBox";
import TitleBox from "./TitleBox";
import img from "../RouteView/Source/backimg.png";
import { SaveOutlined } from "@ant-design/icons";
import { Button } from "antd";
import GlobalStyle from "../Fonts/GlobalStyle";
import AddTag from '../EnrollPost/AddTag/Integrated'

const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  display: flex;
  background-image: url(${img});
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
`;

const PostTitle = styled.div`
  font-size: 12pt;
  font-family: KakaoBold;
  color: #ffffff;
  font-weight: bold;
  text-decoration: 2px yellow underline;
  margin-left: 120px;
  margin-top: 20px;
`;

const Postcontainer = styled.div`
  padding: 20px;
  width: calc(100vh-7rem);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Posts = styled.div`
  width: 75vw;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding: 20px;
`;

const PostBox = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 15px;
`;

const PostBoxTitle = styled.div`
  width: 70vw;
  text-align: start;
  padding: 10px;
  font-family: KakaoBold;
  font-size: 12pt;
  font-weight: bold;
  margin-bottom: 10px;
`;

const PostItemBox = styled.div`
  width: 65vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  margin-bottom: 3vh;
  border-radius: 10px;
  padding: 10px;
`;

const Manages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 15px;
`;

const AddButton = styled.button`
  background-color: #f9b507;
  color: black;
  padding: 20px;
  justify-content: center;
  border-radius: 50px;
  border: none;
  align-items: center;
  font-family: KakaoBold;
  font-size: 10pt;
  margin-top: 10px;
`;

const PlaceTitle = styled.div`
  text-align: left;
  display: flex;
  width: 60vw;
  margin-top: 1rem;
`;

const HeaderBox = styled.div`
  display: flex;
  width: 60vw;
`;

const PostButton = styled.div`
  display: flex;
  flex-direction: row;
  width: 75vw;
  align-items: center;
  justify-content: center;
`;
const EmptyBox = styled.div`
  width: 15vw;
`;

const TagButton = styled(Button)`
  background-color: #a2e1db;
  color: #000000;
  font-family: "kakao";
  height: 3rem;
  width: 10rem;
  font-size: 10pt;
  border-radius: 50px;
  margin-left: 20px;
  border: none;
`;

const ManageButton = styled(Button)`
  background-color: #f3b0c3;
  color: #000000;
  font-family: "kakao";
  height: 3rem;
  width: 10rem;
  font-size: 10pt;
  border-radius: 50px;
  margin-left: 20px;
  border: none;
`;
const ImageButton = styled(Button)`
  background-color: #cbaacb;
  color: #000000;
  font-family: "kakao";
  height: 3rem;
  width: 10rem;
  font-size: 10pt;
  border-radius: 50px;
  margin-left: 20px;
  border: none;
`;

function ManagePost() {

  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);
  const [click5, setClick5] = useState(false);
  const [place, setPl] = useState("");
  const [cty, setCty] = useState("");
  const [index1, setIndex1] = useState();
  const [index2, setIndex2] = useState();
  const [selectCate, setSelectCate] = useState(); //카테고리 값 저장
  const [tit, setTit] = useState() //제목 값 저장
  const [date, setDate] = useState([
    {
      city: "",
      paragraph: [],
    },
  ]); //일자별 데이터 저장

  const closeWindow = (val) => {
    setClick(val);
  };

  const closeWindow2 = (val) => {
    setClick2(val);
  };
  const closeWindow3 = (val) => {
    setClick3(val);
  };
  const closeWindow4 = (val) => {
    setClick4(val)
  }
  const closeWindow5 = (val) => {
    setClick5(val)
  }

  const setCategory = (val) => {
    setSelectCate(val);
  }

  const setTitle = (val) => {
    setTit(val);
  }


  useEffect(() => {
    console.log("paragraph[0]:", date[0]?.paragraph);
  }, [date])

  return (
    <Container>
      <GlobalStyle />
      <CategorySelector setCategory={setCategory} />
      <TitleBox setTitle={setTitle} />
      <PostTitle>POST</PostTitle>

      {date.map(function (c, i) {
        return (
          <Postcontainer>
            <Posts>
              <PostBox>
                <HeaderBox>
                  <PostBoxTitle>
                    {i + 1}일차 {c.city}
                  </PostBoxTitle>
                  <Button
                    shape="circle"
                    type="primary"
                    icon={<SaveOutlined />}
                  />
                </HeaderBox>

                {Array.isArray(c.paragraph) &&
                  c.paragraph.map((p, k) => {
                    return (
                      <div key={k}>
                        <PostItemBox>
                          <PlaceTitle>{p.place}</PlaceTitle>
                          <PostInput onchange={(val)=>{

                            p.text = val;
                           


                          }}/>
                        </PostItemBox>
                      </div>
                    );
                  })}

                <Manages>
                  <TagButton
                    onClick={() => {
                      setClick5(true);
                      setClick(false);
                      setClick3(false);
                      setClick4(false);
                      setClick2(false);
                      setIndex2(i);
                    }}

                  ># 태그 추가하기</TagButton>
                  <ManageButton
                    onClick={() => {
                      setClick2(true);
                      setClick(false);
                      setClick3(false);
                      setClick4(false);
                      setClick5(false);
                      setIndex2(i);
                    }}
                  >
                    장소 추가
                  </ManageButton>

                  <ManageButton
                    onClick={() => {
                      const newContainer = [...date];

                      if (c.paragraph.length > 0) {
                        newContainer[i].paragraph.splice(
                          newContainer[i].paragraph.length - 1,
                          1
                        );
                      }
                      setDate(newContainer)
                    }}
                  >
                    장소 삭제
                  </ManageButton>

                  <ManageButton
                    onClick={() => {
                      setClick3(true);
                      setClick(false);
                      setClick2(false);
                      setClick4(false);
                      setClick5(false);
                    }}
                  >이동수단 추가</ManageButton>
                  <ImageButton onClick={() => {
                    setClick(false);
                    setClick2(false);
                    setClick3(false);
                    setClick4(true);
                    setClick5(false);
                    setIndex1(i);
                  }}>이미지 추가하기</ImageButton>

                </Manages>
              </PostBox>

              {click && (
                <AddCity
                  closeWindow={closeWindow}
                  setCity={(val) => {
                    const cit = val;
                    setCty(cit);
                  }}
                  addContainer={() => {
                    const newItem = { city: cty };

                    setDate((prev) => {
                      const updatedContainer = [
                        ...prev.slice(0, index1 + 1),
                        newItem,
                        ...prev.slice(index1 + 1),
                      ];
                      return updatedContainer;
                    });
                  }}
                />
              )}
              {click2 && (
                <AddPlace
                  setPlace={(val) => {
                    setPl(val);
                  }}
                  closeWindow2={closeWindow2}
                  addBox={() => {

                    const newPlace = {
                      paragraph: [
                        {
                          place: place,
                          text: '',
                          images: [],
                          tags: [],
                          transports: [],
                        },
                      ],
                    };

                    const newContainer = [...date];
                    if (!newContainer[index2]?.paragraph) {
                      newContainer[index2].paragraph = [];
                    }
                    newContainer[index2].paragraph.push({ ...newPlace.paragraph[0] });
                    setDate(newContainer);

                  }}
                />
              )}
              {click5 && <AddTag
                closeWindow5={closeWindow5}
                addTag={(tag) => {
                  const tagsArray = tag.split(' ');

                  setDate((prevDate) => {
                    const lastIndex = prevDate[index2]?.paragraph.length - 1;
                    return prevDate.map((day, index) => {
                      if (index === index2 && day.paragraph[lastIndex]) {
                        day.paragraph[lastIndex].tags = tagsArray;
                      }
                      return day;
                    });
                  });
                }}
              />}
              {click4 && <AddImage closeWindow4={closeWindow4} />}
              {click3 && (
                <AddTransport
                  closeWindow3={closeWindow3}
                  addTransport={(newTransport) => {
                    setDate((prevDate) => {
                      const lastIndex = prevDate[index2]?.paragraph.length - 1;

                      if (lastIndex !== undefined && prevDate[index2]?.paragraph[lastIndex]) {
                        const currentTransports = prevDate[index2].paragraph[lastIndex].transports || [];
                        return prevDate.map((day, index) =>
                          index === index2
                            ? {
                              ...day,
                              paragraph: day.paragraph.map((paragraph, paragraphIndex) =>
                                paragraphIndex === lastIndex
                                  ? {
                                    ...paragraph,
                                    transports: [...currentTransports, newTransport],
                                  }
                                  : paragraph
                              ),
                            }
                            : day
                        );
                      }
                      return prevDate;
                    });
                  }}
                />
              )}

            </Posts>
            <PostButton>
              <AddButton
                onClick={() => {
                  setClick(true);
                  setClick2(false);
                  setClick3(false);
                  setClick4(false);
                  setClick5(false);
                  setIndex1(i);
                }}
              >일정 추가하기</AddButton>

              <EmptyBox />

              <AddButton
                onClick={() => {
                  const newContainer = [...date];
                  newContainer.splice(i, 1);
                  setDate(newContainer);
                }}
              >일정 제거하기</AddButton>
            </PostButton>
          </Postcontainer>
        );
      })}
    </Container>
  );
}

export default ManagePost;