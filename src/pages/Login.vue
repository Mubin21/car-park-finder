<template>
    <q-page class="flex flex-center" padding>

        <div class="full-width">
            <h5 class="q-my-md text-center">LOGIN</h5>
            <q-card>
                <q-card-section>
                    <q-form>
                        <q-input filled label="email" placeholder="email@example.com" class="q-mb-md" />
                        <q-input filled label="password" type="password" class="q-mb-sm" />
                    </q-form>
                </q-card-section>
                <q-btn label="login" class="full-width" color="primary"></q-btn>
            </q-card>
        </div>
    </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Login'
})
</script>
