import styled from 'styled-components'

let Select = styled.select`

height: 40px;
padding: 5px;
width: 200px;
border: 0;
border-radius: 5px;
margin-right: 10px; 
`


function SelectCity(props){

    const handleChange = (e) =>{

        const selected = e.target.value;
        props.onCityChange(selected);


    }

    return(

        <Select onChange={handleChange}>

            {props.city.map(function(a){

                if(a.n == props.nation){

                return <option>{a.city}</option>
                }

            })}



        </Select>




    )



}
export default SelectCity;