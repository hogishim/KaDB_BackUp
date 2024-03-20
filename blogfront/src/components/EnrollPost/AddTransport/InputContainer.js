import styled from 'styled-components'
import InputBox from './InputBox';
import { useState } from 'react';

const InputContainerBox = styled.div`

width: 45rem;
height: 20vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


`

const OuterInputBox = styled.div`

width: 25rem;
height: 5vh;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

`

const H = styled.div`

width: 5rem;
height: 5vh;
font-size: 15px;
display: flex;
justify-content: center;
align-items: center;


`

function InputContainer(props) {


    const content_str = [

        { type: "교통수단명", text: "이용 항공사 / 노선 번호등을 입력해주세요" },
        { type: "소요 시간", text: "소요 시간을 입력해주세요" },
        { type: "비용", text: "소요 비용을 입력해주세요" },

    ]

    const getName = (val) =>{

        props.sendName(val)
    }

    const getTime = (val) => {

        props.sendTime(val)

    }

    const getBudget = (val) =>{

        props.sendBudget(val);

    }

    return (

        <InputContainerBox>

                    <OuterInputBox>
                        <H>{content_str[0].type}</H>
                        <InputBox text={content_str[0].text} onchange = {getName}/>
                    </OuterInputBox>

                    <OuterInputBox>
                        <H>{content_str[1].type}</H>
                        <InputBox text={content_str[1].text} onchange={getTime}/>
                    </OuterInputBox>

                    <OuterInputBox>
                        <H>{content_str[2].type}</H>
                        <InputBox text={content_str[2].text} onchange={getBudget}/>
                    </OuterInputBox>

        </InputContainerBox>

    )

}
export default InputContainer;