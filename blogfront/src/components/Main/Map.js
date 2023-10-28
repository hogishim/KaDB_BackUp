import styled from "styled-components";
import { ComposableMap, Geographies, Geography } from "react-simple-maps"

const MapDiv = styled.div`
`
const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"
function Map() {
    return (
            <ComposableMap>
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography key={geo.rsmKey} geography={geo} />
                        ))
                    }
                </Geographies>
            </ComposableMap>
    )
}

export default Map;