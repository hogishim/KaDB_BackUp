import styled from 'styled-components';

let CityIfBox = styled.div`
    width: 22vw;
    height: 200px;
    border: 0;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    background: snow;
    &:hover{

        background-color: #F2F2F2;



}
`;

let InfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`;
let Detail = styled.div`

border-top: 1px solid black;
text-align: left;


`

function CityInfo(props) {

    let c_info = props.info

    return (
        <InfoContainer>
            {c_info.map(function (a) {
                if (props.nation === a.nat) {
                    return (
                        <CityIfBox key={a.city}>
                            <h3>{a.city}</h3>
                            <Detail>
                                <h5>{a.place1}</h5>
                                <h5>{a.place2}</h5>
                                <h5>{a.place3}</h5>
                            </Detail>
                        </CityIfBox>
                    );
                }
                return null;
            })}
        </InfoContainer>
    );
}

export default CityInfo;
