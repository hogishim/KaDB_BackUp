import styled from "styled-components"

const BannerDiv = styled.div`
    border-radius : 5px;
    display : flex;
    margin-top : 0.7rem;
    margin-bottom : 0.7rem;
    padding : 0.5rem;
    width:100%;
    background-color:white;
`
const CityDiv = styled.div`
    display : flex;
    overflow : auto;
    border-right : 1px solid black;
    width : 50%;
    &::-webkit-scrollbar{
        margin-left : 0.1rem;
        margin-right : 0.1rem;
        height:0.3rem;
        border-radius:6px;
        background:#F2F2F2;
    }
    &::-webkit-scrollbar-thumb{
        background:darkgray;
        border-radius:6px;
    }
`
const PlaceDiv = styled.div`
    display : flex;
    overflow : auto;
    width : 50%;
    &::-webkit-scrollbar{
        height:0.3rem;
        border-radius:6px;
        background:#F2F2F2;
    }
    &::-webkit-scrollbar-thumb{
        background:darkgray;
        border-radius:6px;
    }
`
const BannerInnerDiv = styled.div`
    margin-left:0.5rem;
    margin-right:0.5rem;
    width : 7rem;
    text-align : center;
`
const BannerImg = styled.img`
    border : none;
    border-radius : 50%;
    width : 6.5rem;
    height : 6.5rem;
`

function Banner(){
    const citydata = [
        {
            src : "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTwSP1OmtK82NfEOTRow2_1q_oqChR1YxGMh6NoEWrIpxllpWS4qpF04-IkeNTBH3oNtvH8bd1vsIpn0frfnX-YUSMrOsyT",
            name : "서울"
        }
    ]
    const placedata = [
        {
            src : "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTwSP1OmtK82NfEOTRow2_1q_oqChR1YxGMh6NoEWrIpxllpWS4qpF04-IkeNTBH3oNtvH8bd1vsIpn0frfnX-YUSMrOsyT",
            name : "서울"
        },
        {
            src : "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTwSP1OmtK82NfEOTRow2_1q_oqChR1YxGMh6NoEWrIpxllpWS4qpF04-IkeNTBH3oNtvH8bd1vsIpn0frfnX-YUSMrOsyT",
            name : "서울"
        },
        {
            src : "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTwSP1OmtK82NfEOTRow2_1q_oqChR1YxGMh6NoEWrIpxllpWS4qpF04-IkeNTBH3oNtvH8bd1vsIpn0frfnX-YUSMrOsyT",
            name : "서울"
        },
        {
            src : "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTwSP1OmtK82NfEOTRow2_1q_oqChR1YxGMh6NoEWrIpxllpWS4qpF04-IkeNTBH3oNtvH8bd1vsIpn0frfnX-YUSMrOsyT",
            name : "서울"
        },
    ]
    return(
        <BannerDiv>
            <CityDiv>
                {
                    citydata.map((citydata)=>{
                        return(
                            <BannerInnerDiv>
                                <BannerImg src={citydata.src}/>
                                <div>{citydata.name}(도시)</div>
                            </BannerInnerDiv>
                        )
                    })
                }
            </CityDiv>
            <PlaceDiv>
                {
                    placedata.map((placedata)=>{
                        return(
                            <BannerInnerDiv>
                                <BannerImg src={placedata.src}/>
                                <div>{placedata.name}(장소)</div>
                            </BannerInnerDiv>
                        )
                    })
                }
            </PlaceDiv>
        </BannerDiv>
    )
}

export default Banner;