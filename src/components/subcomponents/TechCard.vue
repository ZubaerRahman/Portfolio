<template>
  <div class="card is-shadowless">
      <div class="card-image">
        <figure class="image is-128x128">
        <img :src="image" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-footer has-text-white"><strong  class="subtitle is-6 has-text-white">{{name}}</strong></div>
  </div>
</template>

<script>
export default {
    props:{
        name: {
            type:String,
        },
        image:{
            type:String,
        },
    }
}
</script>

<style scoped>
    .card{
        padding: 10px;
        margin: 20px;
        height: 180px;
        width: 160px;
        background-color:transparent;
    }

    strong{
        font-family: monospace;
        font-weight: lighter;
    }
</style>