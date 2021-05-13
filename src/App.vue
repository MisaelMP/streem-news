<template>
  <div id="app">
    <Navbar/>
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/PureComponents/Navbar';
  export default {
    name: 'streem-news',
    components: {
      Navbar
    }
  };
  </script>
