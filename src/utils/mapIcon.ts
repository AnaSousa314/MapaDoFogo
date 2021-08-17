import Leaflet from 'leaflet';

import mapMarkerImg from '../img/map-icon2.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [30, 40],
  iconAnchor: [15, 50],
  popupAnchor: [0, -60]
});

export default mapIcon;