<template>
  <q-page padding>
    <div class="full-width text-center">
      <h5 class="q-my-md">Create your Account</h5>
      <h8 class="q-mt-lg">Step 1</h8>
      <q-card squared bordered class="q-ma-md shadow-1">
        <q-card-section>
          <q-form class>
            <q-input square filled v-model="firstname" label="First Name" class="q-mb-md" />
            <q-input square filled v-model="lastname" label="Last Name" class="q-mb-md" />
            <q-input square filled v-model="address" label="Address" class="q-mb-md" />
            <q-input square filled v-model="phonenumber" label="Phone Number" class="q-mb-md" />
            <q-input square filled v-model="platenumber" label="Plate Number" class="q-mb-md" />
          </q-form>
        </q-card-section>
        <q-card-actions class="q-mx-sm q-mb-md">
          <q-btn label="Next" class="full-width" size="large" color="primary" to="/auth/confirmPassword"></q-btn>
          <q-btn label="Cancel" class="q-mt-md full-width" size="large" color="grey" to="/"></q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Register',
  data(){
    return{
      firstname: '',
      lastname: '',
      address: '',
      phonenumber: '',
      platenumber: '',
    }
  }
})
</script>
