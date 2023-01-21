<template>
  <q-layout view="hhh lpR fff">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          ParkFinder
        </q-toolbar-title>
        <q-btn>
          Login
        </q-btn>
        <q-btn>
          Signup
        </q-btn>
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

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div class="text-center">
            <p>A Car Parking Finder App</p>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>