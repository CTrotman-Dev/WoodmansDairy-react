import React from "react";

import { MapContainer, TileLayer, useMap, Marker, Popup, LayerGroup, Circle, FeatureGroup, Rectangle } from 'react-leaflet';

const MyMap = () => {
    // var map = L.map('map').setView([51.505, -0.09], 13);
    // console.log(map);
    const center = [51.513499, -3.15];
    const rectangle1 = [
        [51.501549, -3.138890],
        [51.538341, -3.057490]
    ];
    const rectangle2 = [
        [51.501549, -3.138890],
        [51.547914, -3.229137]
    ];

    const redOptions = { color: 'red' };

    return (
        <MapContainer className="map" center={center} zoom={12} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <FeatureGroup pathOptions={redOptions}>
                <Popup>We deliver in this area</Popup>
                {/* <Circle center={[51.515, -3.11]} radius={500} /> */}
                <Rectangle bounds={rectangle1} />
                <Rectangle bounds={rectangle2} />
            </FeatureGroup>
        </MapContainer>

    );
}

export default MyMap;