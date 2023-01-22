<template>
    <q-page class="flex flex-center" padding>
        <div class="full-width">
            <h5 class="q-my-md text-center">LOGIN</h5>
            <q-card square bordered class="q-ma-md shadow-1">
                <q-card-section>
                    <q-form class="q-gutter-md">
                        <q-input square filled clearable v-model="email" type="Email" label="email"
                            placeholder="email@example.com" class="q-mb-md" />
                        <q-input square filled clearable v-model="password" label="Password" type="password"
                            class="q-mb-sm" />
                    </q-form>
                </q-card-section>
                <q-card-actions class="q-px-md">
                    <q-btn label="login" class="full-width" size="large" color="primary"></q-btn>
                    <q-btn label="Sign In with Google" class="q-mt-md full-width text-black" size="large" color="white"></q-btn>
                </q-card-actions>
                <q-card-section class="text-center">
                    <p>Not Registered? Create an Account</p>
                </q-card-section>
            </q-card>
        </div>
    </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Login',
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods:{

    }
})
</script>

<style>

</style>
