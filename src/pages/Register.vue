<template>
  <q-page padding>
    <div class="full-width text-center">
      <q-form @submit="onSubmit">
        <q-card squared bordered class="q-ma-md shadow-1">
          <h5 class="q-my-md">Create your Account</h5>
          <q-card-section>
            <q-input square filled v-model="firstname" label="First Name" class="q-mb-md"
              :rules="[val => val && val.length > 0 || 'Please type something']" />
            <q-input square filled v-model="lastname" label="Last Name" class="q-mb-md"
              :rules="[val => val && val.length > 0 || 'Please type something']" />
            <q-input square filled v-model="address" label="Address" class="q-mb-md"
              :rules="[val => val && val.length > 0 || 'Please type something']" />
            <q-input square filled v-model="phonenumber" label="Phone Number" class="q-mb-md" mask="#### ### ####"
              :rules="[val => val && val.length > 0 || 'Please type something']" />
            <q-input square filled v-model="platenumber" label="Plate Number" class="q-mb-md"
              :rules="[val => val && val.length > 0 || 'Please type something']" />
            <q-input square filled v-model="email" type="email" label="Email" placeholder="email@example.com"
              class="q-mb-md" :rules="[val => val && val.length > 0 || 'Please type something']" />
            <q-input square filled clearable v-model="password" label="Password" type="password" class="q-mb-sm"
              :rules="[val => val && val.length > 0 || 'Please type something']" />
          </q-card-section>
          <q-card-actions class="q-mx-sm q-mb-md">
            <q-btn label="Register" class="full-width" size="large" color="primary" type="submit"/>
            <q-btn label="Cancel" class="q-mt-md full-width" size="large" color="grey" to="/"/>
          </q-card-actions>
        </q-card>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { useQuasar } from 'quasar'

import { collection, addDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import db from "src/boot/firebase";


export default defineComponent({
  name: 'Register',
  setup() {
    const $q = useQuasar()

    return {
      triggerPositive(msg) {
        $q.notify({
          type: 'positive',
          message: msg,
        })
      }
    }
  },
  data() {
    return {
      firstname: '',
      lastname: '',
      address: '',
      phonenumber: '',
      platenumber: '',
      email: '',
      password: '',
    }
  },
  methods: {

    //ADD NEW USER IN THE DATABASE
    async onSubmit() {

      // Add a new document with a generated id.
      const docRef = await addDoc(collection(db, "users"), {
        firstname: this.firstname,
        lastname: this.lastname,
        address: this.address,
        phonenumber: this.phonenumber,
        platenumber: this.platenumber,
        email: this.email,
        // password: this.password,
      });

      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in 
          this.$q.notify({ type: 'positive', message: 'Account Successfully Created!' })
          this.$router.push('/auth/login')
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    },
  },



})
</script>
