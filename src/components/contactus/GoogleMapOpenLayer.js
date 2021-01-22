import React, { Component } from 'react'
// import ol from "ol"
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import {
    interaction, layer, custom, control, //name spaces
    Interactions, Overlays, Controls,     //group
     Layers, Overlay, Util    //objects
  } from "react-openlayers";


// var iconFeature = new ol.Feature(new ol.geom.Point([32.873600, -96.971910]));
// var source = new ol.source.Vector({features: [iconFeature]});
// var marker = new custom.style.MarkerStyle(
// 'https://openlayers.org/en/v4.0.1/examples/data/icon.png'
// );

export class GoogleMapOpenLayer extends Component {
    componentDidMount(){
        // const map = new ol.Map({
        //     view: new ol.View({
        //         center: [32.873600, -96.971910],
        //         zoom: 9
        //     }),
        //     layer: [
        //         new ol.layer.Tile({
        //             source: new ol.source.OSM
        //         })
        //     ],
        //     target: 'js-map'
        // })
        const map = new Map({
            target: 'js-map',
            layers: [
              new TileLayer({
                source: new XYZ({
                  url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                })
              })
            ],
            view: new View({
              // center: [32.873600, -96.971910],
              center: [32.8140, -96.9489],
              // center: [0,0],
              zoom: 3
            })
          });
          map.on('click', function(e){
              console.log(e.coordinate)
          })
    }
    render() {
        return (
            <div id="js-map" style={{width: "350px", height: "200px"}}>
                {/* <Map view={{center: [32.873600, -96.971910], zoom: 9}} onClick={true} >
                    <Layers>
                        <layer.Tile/>
                        <layer.Vector   zIndex="1" />
                    </Layers> */}
                    {/* <Overlays>
                        <Overlay 
                        ref={comp => this.overlayComp = comp}
                        element="#popup" />
                    </Overlays>
                    <Controls attribution={false} zoom={true}>
                        <control.Rotate />
                        <control.ScaleLine />
                        <control.FullScreen />
                        <control.OverviewMap />
                        <control.ZoomSlider />
                        <control.ZoomToExtent />
                        <control.Zoom />
                    </Controls>
                    <Interactions>
                        <interaction.Select  />
                        <interaction.Draw  type='Point' />
                        <interaction.Modify features={"markers.features"} />
                    </Interactions> */}
                {/* </Map> */}

{/* <Map>
          <Layers>
            <layer.Tile />
            <layer.Vector 
              style={marker.style}
              source={source}/>
          </Layers>
        </Map>
        <a href="https://github.com/allenhwkim/react-openlayers/blob/master/app/custom/marker-style.tsx">source</a>
        <pre>{`
        <Map>
          <Layers>
            <layer.Tile />
            <layer.Vector 
              style={marker.style}
              source={source}/>
          </Layers>
        </Map>
        `}</pre> */}
            </div>
        )
    }
}

export default GoogleMapOpenLayer
