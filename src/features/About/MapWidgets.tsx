import "leaflet/dist/leaflet.css";
import * as L from "leaflet";

export function createMapWidget(containerDomNode: HTMLElement) {
    const map = L.map(containerDomNode);
    map.setView([49.575, 32.091], 6);
    L.tileLayer("https://title.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
}

export function addPopupToMapWidget(map: L.Map) {
    const poputDiv = document.createElement('div');
    L.popup().setLatLng([50.4488, 30.5222]).setContent(poputDiv).openOn(map);

    return poputDiv;
}