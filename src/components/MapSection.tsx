"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { brand } from "@/lib/data";

const pinIcon = L.divIcon({
  className: "lumara-pin",
  html: `
    <div style="position:relative;width:38px;height:48px;">
      <svg width="38" height="48" viewBox="0 0 38 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 0C8.5 0 0 8.5 0 19c0 13.6 19 29 19 29s19-15.4 19-29C38 8.5 29.5 0 19 0z" fill="#a8654f"/>
        <circle cx="19" cy="19" r="8" fill="#faf6f1"/>
      </svg>
    </div>
  `,
  iconSize: [38, 48],
  iconAnchor: [19, 48],
  popupAnchor: [0, -44],
});

export default function MapSection() {
  const { lat, lng } = brand.coordinates;

  return (
    <div className="h-full w-full overflow-hidden rounded-[2rem]">
      <MapContainer
        center={[lat, lng]}
        zoom={15}
        scrollWheelZoom={false}
        className="h-full w-full"
        style={{ minHeight: 360 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> Mitwirkende'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]} icon={pinIcon}>
          <Popup>
            <strong>{brand.fullName}</strong>
            <br />
            {brand.address.street}
            <br />
            {brand.address.zip} {brand.address.city}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
