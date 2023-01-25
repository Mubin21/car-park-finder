<template>
    <q-page>
        <q-card flat>
            <div id="map" style="width:100%; height:450px;"></div>
            <q-card-section horizontal>
                <q-img class="col-3 q-ma-sm" src="~assets/viber_image_2022-12-02_07-48-26-120.jpg" />
                <q-card-section>
                    <div class="text-h6">Car Parking Finder</div>
                    <div class="text-subtitle3">Available Space: 3</div>
                    <div class="text-subtitle3">Latitude: 4.2346 Longitude: 2349790</div>

                </q-card-section>
            </q-card-section>
            <q-separator/>
            <q-card-actions align="center">
                <q-btn outline rounded class="full-width" label="Reserve" color="primary" /> 
            </q-card-actions>
        </q-card>
    </q-page>
</template>

<script>

import { defineComponent, onMounted } from 'vue';

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import "leaflet/dist/images/marker-icon-2x.png";
import "leaflet/dist/images/marker-shadow.png";

export default defineComponent({
    name: 'Map',
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

                console.log("Latitude: " + e.latlng.lat + " Longitude: " + e.latlng.lng)
                var radius = e.accuracy / 3

                L.marker(e.latlng).addTo(map).bindPopup('You are within this radius').openPopup()

                L.circle(e.latlng, {
                    fillColor: '#ffffff',
                    fillOpacity: 0.1,
                    radius: radius
                }).addTo(map)
            }

            function onLocationError(e) {
                alert(e.message);
            }


            map.on('locationfound', getCurrentLocation)
            map.on('locationerror', onLocationError)
        }


        onMounted(() => {
            locationYou()
        })

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