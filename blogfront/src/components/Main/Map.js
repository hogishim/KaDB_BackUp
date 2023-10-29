import styled from "styled-components";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import features from './features.json'

const MapDiv = styled.div`
    background-color: #f2f2f2;
`
function Map() {
    return (
        <MapDiv>
            <ComposableMap>
                <Geographies geography={features}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography key={geo.rsmKey} geography={geo} />
                        ))
                    }
                </Geographies>
            </ComposableMap>
        </MapDiv>
    )
}

export default Map;