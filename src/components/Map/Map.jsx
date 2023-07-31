// Map.js
import React, { useEffect, useRef } from 'react';
import 'ol/ol.css'; // Import OpenLayers styles
import { Map, View } from 'ol';
import { fromLonLat } from 'ol/proj'; // Import function to convert longitude/latitude to map coordinates
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Feature } from 'ol';
import Point from 'ol/geom/Point';
import { Icon, Style } from 'ol/style';
import pin from '../../assets/images/pin.png'
import './Map.styles.css'; // Import component-specific styles

const MapComponent = ({ driverLocation }) => {
    const mapRef = useRef(null);

    useEffect(() => {
        if (!driverLocation)
            return

        if (mapRef.current) {
            const coords = fromLonLat([driverLocation.longitude, driverLocation.latitude]);

            const map = new Map({
                target: mapRef.current,
                layers: [
                    new TileLayer({
                        source: new OSM(),
                    }),
                ],
                view: new View({
                    center: coords,
                    zoom: 12,
                }),
            });

            // Add a vector layer and a feature to display the pin
            const vectorSource = new VectorSource({
                features: [new Feature(new Point(coords))],
            });

            const vectorLayer = new VectorLayer({
                source: vectorSource,
                style: new Style({
                    image: new Icon({
                        src: pin, // Replace 'pin.png' with your custom pin icon
                        scale: 0.08, // Adjust the scale of the pin icon
                        anchor: [0.5, 1], // Position the pin's anchor point at the bottom center
                    }),
                }),
            });

            map.addLayer(vectorLayer);

            // Clean up the map instance when the component unmounts
            return () => {
                map.setTarget(null);
            };
        }
    }, [driverLocation]);

    return <div ref={mapRef} className="map-container"></div>;
};

export default MapComponent;
