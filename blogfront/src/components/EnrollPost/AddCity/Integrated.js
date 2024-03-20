import CityPopUp from "./CityPopUp";

function Integrated(props){



    return(
    <CityPopUp closeWindow={props.closeWindow} addContainer={props.addContainer} setCity={props.setCity}  />
    )



}
export default Integrated;