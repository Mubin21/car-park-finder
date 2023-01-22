<template>
  <q-page class>
    <div class="q-pa-md text-center">
      <!-- <h5>Car Park Finder</h5> -->
      <h5>Car Parking Finder</h5>
      <q-img src="https://img.freepik.com/free-vector/parking-concept-illustration_114360-6554.jpg?w=740&t=st=1674346789~exp=1674347389~hmac=b569f0780d18dfde1fddc059f1f76faa4e30ed133b0172c4b2b0383fdbdab6c7"/>
      <p class="text-justify q-ma-md">Apart from causing traffic jams, search for parking spots also burns a huge amount of fuel and the emissions increases air pollution. The digital car parking solution reduces the driving time which ultimately reduces the daily vehicle emissions and its carbon footprints.</p>
      <q-btn class="q-ma-sm full-width" size="large" label="Get Started Here" color="primary" to="/auth/register" />

    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
