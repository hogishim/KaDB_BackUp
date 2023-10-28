import styled from "styled-components"

const SortDiv = styled.div`
    position: relative;
`
const SortBtn = styled.div`
    display: inline-block;
`
const SortCategory = styled.div`
    position: absolute;
    display:inline-block;
    background-color: lightgray;
    left: 0;
    top:2rem;
    z-index:5;
`

function Sort(props){

    return(
        <SortDiv>
            <SortBtn onClick={()=>props.setToggle(!props.toggle)}>{props.category}</SortBtn>
            {props.toggle&&
                <SortCategory>
                    {props.categoryList.map((List,id)=>{
                        return <p key={id} onClick={()=>props.setCategory(List)}>{List}</p>
                    })}
                </SortCategory>
            }
        </SortDiv>
    )
}

export default Sort;