
import styled from 'styled-components'
import placeData from './TempPlace'


function PlaceBox(props) {

    return (
        <>


            {placeData.map(function (a) {


                if (props.city == a.c) {

                    return( 
                        <>
                    <h3>{a.place}</h3>
                    <h6>{a.address}</h6>
                    </>
                    )
                }

            })}
        </>


    )

}
export default PlaceBox;