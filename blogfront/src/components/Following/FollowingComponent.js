import styled from 'styled-components';

let Btn = styled.button`
    background-color: #09006B;
    color: snow;
    border: 0;
    border-radius: 40px;
    padding: 10px;

    &:hover {
        background-color: #567ace;
    }
`;

function FollowingComponent(props) {

    return (
        props.data.map(function (a) {
            return (
                <div className="follower-container">
                    <div className="img-cont">
                        <img src={a.img} alt={a.name} />
                    </div>
                    <div className="name-cont">
                        <h5>{a.name}</h5>
                    </div>
                    <Btn onClick={() => {
                        const updatedData = props.data.filter(item => item.name !== a.name);
                        props.onButtonClick(updatedData);
                    }}>차단하기</Btn>
                </div>
            );
        })
    );
}

export default FollowingComponent;
