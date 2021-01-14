import React, { Component } from 'react'
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from "react-google-maps";

class Map extends Component{

    

    render(){
        
        return (
            <GoogleMap
                defaultZoom={9}
                defaultCenter={{ lat: 32.873600, lng: -96.971910 }}
                // defaultOptions={{ styles: mapStyles }}
            >   
                
            </GoogleMap>
        )
    }
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function GoogleMapView() {

    return (
        <div style={{ width: "100%", height: "85vh" }}>
            <WrappedMap
                googleMapURL= "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=YOUR-KEY"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    )
}

export default GoogleMapView