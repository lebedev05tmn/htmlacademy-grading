import "./slider";

const map = L.map("map").setView([59.968322, 30.317359], 16);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const icon = L.icon({
  iconUrl: "../images/icons/pin.svg",
  iconSize: [38, 50],
});

const marker = L.marker([59.968322, 30.317359], { icon }).addTo(map);
