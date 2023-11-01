import styled from 'styled-components'
import InputBox from './InputBox';

let InputContainerBox = styled.div`

width: 45rem;
height: 20vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


`

let OuterInputBox = styled.div`

width: 25rem;
height: 5vh;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;


`

let H = styled.div`

width: 5rem;
height: 5vh;
font-size: 15px;
display: flex;
justify-content: center;
align-items: center;


`



function InputContainer() {

    const content_str = [

        { type: "교통수단명", text: "교통수단명 / 노선 번호등을 입력해주세요" },
        { type: "출발시간", text: "출발시간을 입력해주세요" },
        { type: "도착시간", text: "도착시간을 입력해주세요" },
        { type: "비용", text: "소요 비용을 입력해주세요" },



    ]



    return (

        <InputContainerBox>
            {content_str.map(function (a) {

                return (

                    <OuterInputBox>
                        <H>{a.type}</H>
                        <InputBox text={a.text} />
                    </OuterInputBox>

                )



            })}


        </InputContainerBox>




    )

}
export default InputContainer;