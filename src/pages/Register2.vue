<template>
    <q-page padding>
        <div class="full-width text-center">
            <h5 class="q-my-md">Create your Account</h5>
            <h8 class="q-mt-lg">Step 2</h8>
            <q-card squared bordered class="q-ma-md shadow-1">
                <q-card-section>
                    <q-form class>
                        <q-input square filled clearable v-model="email" type="email" label="Email"
                            placeholder="email@example.com" class="q-mb-md" />
                        <q-input square filled clearable v-model="password" label="Password" type="password"
                            class="q-mb-sm" />
                        <q-input square filled clearable v-model="password" label="Confirm Password" type="password"
                            class="q-mb-sm" />
                    </q-form>
                </q-card-section>
                <q-card-actions class="q-mx-sm q-mb-md">
                    <q-btn label="Register" class="full-width" size="large" color="primary" type="submit"></q-btn>
                    <q-btn label="Back" class="q-mt-md full-width" size="large" color="grey" to="/auth/register"></q-btn>
                </q-card-actions>
            </q-card>
        </div>
    </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Register2',

})
</script>
