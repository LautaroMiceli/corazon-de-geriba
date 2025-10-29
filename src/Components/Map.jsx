import React, { useState } from 'react';
import { MapContainer, TileLayer, Polygon, Popup, LayerGroup, LayersControl, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const { BaseLayer, Overlay } = LayersControl;

// Componente marcador que escala con el zoom
const ZoomAwareMarker = ({ position }) => {
    const [icon, setIcon] = useState(
        L.icon({
            iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Pin de ejemplo
            iconSize: [30, 30],
            iconAnchor: [15, 30],
        })
    );

    const map = useMapEvents({
        zoomend: () => {
            const zoom = map.getZoom();
            const scale = zoom / 14; // Ajustar factor según zoom inicial
            const size = 30 * scale;
            setIcon(
                L.icon({
                    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
                    iconSize: [size, size],
                    iconAnchor: [size / 2, size],
                })
            );
        },
    });

    return <Marker position={position} icon={icon} />;
};

const Map = () => {
    const center = [-22.772327, -41.905758]; // Coordenadas del centro del mapa


    return (
        <MapContainer center={center} zoom={14} style={{ height: '600px', width: '100%' }}>
            <LayersControl position="topright">
                <BaseLayer checked name="OpenStreetMap">
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                </BaseLayer>

                <BaseLayer name="OpenTopoMap">
                    <TileLayer
                        url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                    />
                </BaseLayer>

                <Overlay checked name="Marcadores">
                    <LayerGroup>


                        {/* Marcador escalable */}
                        <ZoomAwareMarker position={[-22.773327, -41.905758]} />

                    </LayerGroup>
                </Overlay>
            </LayersControl>
        </MapContainer>
    );
};

export default Map;
