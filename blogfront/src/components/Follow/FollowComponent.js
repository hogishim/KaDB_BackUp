import styled from 'styled-components';

let FollowerContainer = styled.div`

    border-top: 1px solid black;
    border-bottom: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 35vw;
    height: 80px;

`

let Btn = styled.button`
    background-color: ${(props) => (props.bgcolour)};
    color: snow;
    border: 0;
    border-radius: 40px;
    padding: 10px;

    &:hover {
        background-color: #567ace;
    }
`;

let ImgBox = styled.div`

    flex-grow: 10;
    height: 80px;
    justify-content: center;
    align-items: center;
    display: flex;
    


`

let NameBox = styled.div`

flex-grow: 60;
height: 80px;
justify-content: center;
    align-items: center;
    display: flex;

`

let ImgSrc = styled.img`

width: 50px;
  border-radius: 50%;


`


function FollowComponent(props) {

    return (
        // shows data of following/follower user, using data of props
        props.data.map(function (a) {
            return (
                //cotainer box that contains image, name of following/follower
                <FollowerContainer>
                    <ImgBox>
                        <ImgSrc src={a.img} alt={a.name} />
                    </ImgBox>
                    <NameBox>
                        <h5>{a.name}</h5>
                    </NameBox>
                    <Btn
                        // set button colour as colour from props
                        bgcolour={props.colour}
                        onClick={() => {
                            //if clicked, it will call function that will deleted the clicked user from the list
                            const updatedData = props.data.filter(item => item.name !== a.name);
                            //hand updated data to the higher component
                            props.onButtonClick(updatedData);
                        }}>{props.text}</Btn>
                </FollowerContainer>
            );
        })
    );
}
export default FollowComponent;