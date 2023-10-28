import styled from "styled-components"

import bedgeIcon from "./bedgeIcon.png"
import locationIcon from "./locationIcon.png"

const TotalListDiv = styled.div`
    border-radius : 5px;
    padding : 1.5rem;
    margin-top : 0.7rem;
    background-color : white;
    width: 90%;
`
const ListDiv = styled.div`
    display : flex;
    border-radius : 5px;
    border : 1.5px solid #808080;
    padding : 0.7rem;
    margin-bottom : 1.5rem;
`
const Title = styled.label`
    font-size:x-large;
    font-weight : 700;
`
const Img = styled.img`
    border-radius : 10px;
    width : 13rem;
    max-height : 13rem;
    margin-right : 1rem;
`
const UserAddressDiv = styled.div`
    display:flex;
    justify-content : space-between;
`
const UserDiv = styled.div`
    display : flex;
    align-items : center;
`
const UserName = styled.label`
    font-weight : bold;
`
const UserBadge = styled.img`
    width : 1rem;
    height : 1rem;
`
const AddressDiv = styled.div`
    display:flex;
    align-items : center;
`
const Address = styled.label`
`
const AddressIcon = styled.img`
    width : 2rem;
    height : 2rem;
`
const Contetnt = styled.div`
    margin-top : 1rem;
`
function List() {
    const listdata = [
        {
            src: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTwSP1OmtK82NfEOTRow2_1q_oqChR1YxGMh6NoEWrIpxllpWS4qpF04-IkeNTBH3oNtvH8bd1vsIpn0frfnX-YUSMrOsyT",
            title: '서울 5성급 호텔에서 5만원도 안되는 코스요리를?',
            user: {
                name: 'User1',
                badge: bedgeIcon
            },
            address: '서울시 강남구 논현로',
            content: '4만원대에 이정도 가격이라니 정말 놀라운 부분입니다. 다시 한번 먹어보고 싶은 마음에 글을 이렇게 남깁니다.',
        },
        {
            src: "https://a.cdn-hotels.com/gdcs/production97/d1351/a274bc26-9643-4bae-a91f-cebaf7f9fa56.jpg?impolicy=fcrop&w=800&h=533&q=medium",
            title: '서울 5성급 호텔에서 5만원도 안되는 코스요리를?',
            user: {
                name: 'User1',
                badge: ''
            },
            address: '서울시 강남구 논현로',
            content: '4만원대에 이정도 가격이라니 정말 놀라운 부분입니다. 다시 한번 먹어보고 싶은 마음에 글을 이렇게 남깁니다.',
        },
    ]
    return (
        <TotalListDiv>
            {listdata.map((listdata) => {
                return (
                    <ListDiv>
                        <Img src={listdata.src} />
                        <div>
                            <Title>▶︎ {listdata.title}</Title>
                            <UserAddressDiv>
                                <UserDiv>
                                    {listdata.user.badge !== '' && <UserBadge src={listdata.user.badge} />}
                                    <UserName>{listdata.user.name}</UserName>
                                </UserDiv>
                                <AddressDiv>
                                    <AddressIcon src={locationIcon} />
                                    <Address> {listdata.address}</Address>
                                </AddressDiv>
                            </UserAddressDiv>
                            <Contetnt>{listdata.content}</Contetnt>
                        </div>
                    </ListDiv>
                )
            })}
        </TotalListDiv>
    )
}

export default List;