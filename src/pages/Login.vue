<template>
    <q-page class="flex flex-center" padding>
        <div class="full-width">
            <q-card square bordered class="q-ma-md shadow-1">
                <h5 class="text-center">LOGIN ACCOUNT</h5>
                <q-card-section>
                    <q-form class="q-gutter-md">
                        <q-input square filled v-model="email" type="Email" label="Email"
                            placeholder="email@example.com" class="q-mb-md" />
                        <q-input square filled clearable v-model="password" label="Password" type="password"
                            class="q-mb-sm" />
                    </q-form>
                </q-card-section>
                <q-card-actions class="q-px-md">
                    <q-btn label="login" class="full-width" size="large" @click="login" color="primary"></q-btn>
                    <q-btn no-caps label="Sign In with Google" class="q-mt-md full-width text-black" size="large"
                        color="white"></q-btn>
                </q-card-actions>
                <q-card-section class="text-center">
                    <p>Not Registered?
                        <q-btn no-caps flat size="small" to="/auth/register">
                            Create an Account
                        </q-btn>
                    </p>
                </q-card-section>
            </q-card>
        </div>
    </q-page>
</template>

<script>
import { defineComponent } from 'vue'

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default defineComponent({
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {

        async login() {

            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    // Signed in 
                    this.$q.notify({ message: 'Signed In' })
                    this.$router.push('/map')
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    this.$q.notify({ type: 'negative', message: 'Invalid email or password.', position: 'top' })
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        }

    }
})
</script>

<style>

</style>
