import styled from "styled-components";
import { useState } from "react";

import Profile from "./PlaceProfile";
import Introduce from "./Introduce";
import PlaceList from "./PlaceList";
import Sort from "./Sort";

const PlaceInfoDiv = styled.div`
    display: flex;
    gap : 2rem;
`
const PlaceListDiv = styled.div`
    display: grid;
    grid-template-columns : 1fr 1fr 1fr;
`
function PlaceInfo() {
    const [toggle, setToggle] = useState(false);
    const categoryList = [
        '좋아요',
        '댓글',
        '공유'
    ]
    const [category, setCategory] = useState(categoryList[0]);
    const placedata =
    {
        name: '서울',
        type: '대한민국',
        country: '도시'
    }
    let listdata = [
        {
            img: 'https://korean.miceseoul.com/humanframe/theme/mice/assets/images/spot/img_spot_view01.png',
            like: 500,
            comment: 100,
            share: 250,
        },
        {
            img: 'https://i.namu.wiki/i/vzQIsovYmymvt84FWS9hhAS3Qva_O31fczg3ErMrSQrSgnJ9h3oQDf3kVo5M6aD1Q05-etvQRlqc3dnurUczXw.webp',
            like: 400,
            comment: 500,
            share: 200
        },
        {
            img: 'https://korean.miceseoul.com/humanframe/theme/mice/assets/images/spot/img_spot_view19.jpg',
            like: 600,
            comment: 250,
            share: 300
        }
    ]
    const categorySort = () => {
        if (category === '좋아요') {
            listdata = listdata.sort((a, b) => (b.like - a.like))
        }
        else if (category === '댓글') {
            listdata = listdata.sort((a, b) => (b.comment - a.comment))
        }
        else if (category === '공유') {
            listdata = listdata.sort((a, b) => (b.share - a.share))
        }
    }
    return (
        <>
            <PlaceInfoDiv>
                {categorySort()}
                <Profile src={listdata[0].img} />
                <Introduce name={placedata.name} type={placedata.type} country={placedata.country} />
            </PlaceInfoDiv>
            <Sort toggle={toggle} setToggle={setToggle} category={category} setCategory={setCategory} categoryList={categoryList} />
            <PlaceListDiv>
                {
                    categorySort()
                }
                {
                    listdata.map((data, id) => <PlaceList key={id} img={data.img} like={data.like} comment={data.comment} share={data.share} />)
                }
            </PlaceListDiv>
        </>
    )
}

export default PlaceInfo;