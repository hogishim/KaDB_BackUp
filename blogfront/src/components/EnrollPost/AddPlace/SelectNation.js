import styled from 'styled-components'

let Select = styled.select`

height: 40px;
padding: 5px;
width: 200px;
border: 0;  
border-radius: 5px;
margin-right: 10px; 
`



function SelectNation(props){



    const handleChange = (e) => {

        const selected = e.target.value;
        props.onNationChange(selected);


    }


    return(

        <Select onChange={handleChange}>

            {props.nation.map(function(a){

                return <option>{a}</option>


            })}



        </Select>




    )





}
export default SelectNation;