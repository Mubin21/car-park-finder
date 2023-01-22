<template>
    <q-layout view="hhh lpR fff">

        <q-header elevated class="bg-primary text-white">
            <q-toolbar>
                <q-toolbar-title>
                    <q-avatar>
                        <img src="https://static.vecteezy.com/system/resources/previews/013/570/457/non_2x/car-parking-road-signs-illustrator-eps-10-free-vector.jpg">
                    </q-avatar>
                    <q-btn flat no-caps padding="xs" size="20px" to="/">ParkFinder</q-btn>
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <nav>
                <router-link to="/">Home</router-link>
                <router-link to="/auth/register">register</router-link>
                <router-link to="/auth/login">Login</router-link>
            </nav>
            <router-view />
        </q-page-container>

    </q-layout>
</template>