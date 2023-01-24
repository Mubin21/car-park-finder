<template>
    <q-page>
        <div id="map" style="width:100%; height:500px;">MAP
        </div>
    </q-page>
</template>

<script>

import { defineComponent, onMounted } from 'vue';

import 'leaflet/dist/leaflet.css';
import "leaflet/dist/images/marker-icon-2x.png";
import "leaflet/dist/images/marker-shadow.png";

import L from 'leaflet';

export default defineComponent({
    name: 'UserDashboard',
    setup() {

        function locationYou() {

            var map = L.map('map').setView([51.505, -0.09], 13);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

            map.locate({ setView: true, maxZoom: 40, watch: true, timeout: 6000 })

            //GET LOCATION
            function getCurrentLocation(e) {

                alert("Latitude: " + e.latlng.lat + " Longitude: " + e.latlng.lng)
                var radius = e.accuracy / 3

                L.marker(e.latlng).addTo(map).bindPopup('You are within this radius').openPopup()

                L.circle(e.latlng, {
                    fillColor: '#ffffff',
                    fillOpacity: 0.1,
                    radius: radius
                }).addTo(map)
            }

            map.on('locationfound', getCurrentLocation)
        }


        onMounted(() => {
            locationYou()
        })



        // var marker = L.marker([51.5, -0.09]).addTo(map);
    },
    data() {
        return {

        };
    },
    created() {
        L.Marker.prototype.options.icon = L.icon({
            iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
            iconUrl: require("leaflet/dist/images/marker-icon.png"),
            shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28],
            shadowSize: [41, 41],
        });
    },

})

</script>