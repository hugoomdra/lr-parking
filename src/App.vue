<template>

<h1 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncat">LR Place</h1>

<ul class="mt-4">
    <li 
    v-for="v in places"
    :key="v.id"
    >
    <span class="font-bold">{{ v.fields.nom }}</span> : {{ v.fields.nb_places_disponibles }} places disponibles
    </li>
</ul>

<!-- Using utilities: -->
<button @click="getData()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
  Actualiser
</button>


</template>

<script>

import axios from 'axios'

export default {

  name: 'App',

  data(){
    return {
      places: []
    }
  },

  created() {

    this.getData()

  },

  methods:{

    getData(){
      axios.get("/data_parking").then((result) => {
        console.log(result)
        this.places = result.data.records
        console.log(this.places)
      })
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
