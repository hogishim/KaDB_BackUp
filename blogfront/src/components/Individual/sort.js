import styled from "styled-components"

const SortDiv = styled.div`
    position: relative;
`
const SortBtn = styled.div`
    display: inline-block;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
`
const SortCategory = styled.div`
    position: absolute;
    text-align: center;
    width: 4rem;
    display:inline-block;
    background-color: white;
    border: 1px solid gray;
    border-radius: 5px;
    left: 2.3rem;
    top: 1.8rem;
    z-index:5;
    &::after{
        border-color : white transparent;
        border-style: solid;
        border-width: 0 6px 8px 6.5px;
        content: '';
        display: block;
        left: 1rem;
        position: absolute;
        top:-6px;
        width: 0;
        z-index: 1;
    }
    &::before{
        border-color : gray transparent;
        border-style: solid;
        border-width: 0 6px 8px 6.5px;
        content: '';
        display: block;
        left: 1rem;
        position: absolute;
        top:-8px;
        width: 0;
        z-index: 0;
    }
`
const ArrowDiv = styled.div`
`
const ListP = styled.p`
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
`

function Sort(props) {

    return (
        <SortDiv>
            <SortBtn onClick={() => props.setToggle(!props.toggle)}>정렬 : {props.category} &#9660;</SortBtn>
            {props.toggle &&
                    <SortCategory>
                        {props.categoryList.map((List, id) => {
                            return <ListP key={id} onClick={() => props.setCategory(List)}>{List}</ListP>
                        })}
                    </SortCategory>
            }
            <hr />
        </SortDiv>
    )
}

export default Sort;