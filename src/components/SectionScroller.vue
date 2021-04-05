<template>
  <!-- <nav class="navbar is-black">
    <button class="button is-black is-medium" v-on:click="scrollToSection('skills')">Skills</button>
    <button class="button is-black is-medium" v-on:click="scrollToSection('projects')">Projects</button>
    <button class="button is-black is-medium" v-on:click="scrollToSection('about')">About</button>
  </nav> -->
    <b-navbar :spaced="true" class="is-black">
        <template slot="brand">
            <b-navbar-item  v-on:click="scrollToSection('home')">
                <img
                    src="https://a.wattpad.com/useravatar/Caped-Sensei-Saitama.256.463233.jpg"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                    style="height:400px"
                >
            </b-navbar-item>
        </template>
        <template slot="end">
            <div class="columns">
            <div class="column has-background-black"><span class="has-text-white cursor is-clickable" v-on:click="scrollToSection('projects')">Projects</span></div>
            <div class="column has-background-black"><span class="has-text-white is-clickable" v-on:click="scrollToSection('skills')">Skills</span></div>
            <div class="column has-background-black"><span class="has-text-white cursor is-clickable" v-on:click="scrollToSection('about')">About</span></div>
            </div>
        </template>

    </b-navbar>
</template>

<script>
export default {
    methods:{
        scrollToSection(section){
            const element = document.getElementsByClassName(section)[0];
            const offset = 60;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
        }
    }
}
</script>

<style scoped>
    .navbar{
        position: sticky;
        top: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 10px;
        
    }

    .is-clickable {
        cursor: pointer !important;
    }

    button{
        font-family: monospace;
        font-weight: lighter;

    }
</style>

