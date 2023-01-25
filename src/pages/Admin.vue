<template>
    <q-page>
        <div class>
            <div class="q-gutter-y-md">
                <q-tabs v-model="currentTab" dense align="justify" class="bg-primary text-white shadow-2"
                    :breakpoint="0">
                    <q-route-tab name="dashboard" label="Dashboard" to="/admin/dashboard" />
                    <q-route-tab name="map" label="Map" to="/admin/maps" />
                </q-tabs>

                <q-tab-panels v-model="currentTab">
                    <q-tab-panel name="dashboard">
                        dashboard
                    </q-tab-panel>
                    <q-tab-panel name="map">
                        <div id="maps" style="width:100%; height:450px;"></div>
                    </q-tab-panel>
                </q-tab-panels>
            </div>
        </div>
    </q-page>
</template>

<script>

import { defineComponent, ref, onMounted } from 'vue';

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import "leaflet/dist/images/marker-icon-2x.png";
import "leaflet/dist/images/marker-shadow.png";

export default defineComponent({
    name: 'Admin',
    setup() {

        //const currentTab = ref('dashboard')

        function locationYou() {

            var map = L.map('maps').setView([51.505, -0.09], 13);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

            map.locate({ setView: true, maxZoom: 40, watch: true, timeout: 6000 })

            //get current location
            function onlocationfound(e) {

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


            map.on('locationfound', onlocationfound)
            map.on('locationerror', onLocationError)
        }


        onMounted(() => {
            locationYou()
        })

    },
    data() {
        return {
            currentTab: '',
        }
    },
    methods() {

    },
    created() {
        
        //Marker icon
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