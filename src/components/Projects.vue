<template>
<div class="projects">
    <section class="hero is-black is-bold">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">Projects</h1>
            </div>
        </div>
    </section>
    <div class="s">
    <div class="container">
    <br/>
    <ProjectCarousel :projects="projects"/>
    <br/>
    </div>
    </div>
</div>
</template>

<script>
import ProjectCarousel from '../components/subcomponents/ProjectCarousel'

import TrainerManager from '../static/images/TrainerManager.png'
import MaterialTodo from '../static/images/MaterialTodo.png'
import WeatherWatcher from '../static/images/WeatherWatcher.png'

export default {
    components:{
        ProjectCarousel,
    },
    data: function() {
        return{
            projects:[
                {
                    name:"TrainerManager",
                    desc:"Schedule and book classes for your trainers.",
                    image:TrainerManager, techs:["React + Redux","Firebase","MaterialUI"],
                    git:"https://github.com/ZubaerRahman/TrainerManager", 
                    host:"https://segroup23.firebaseapp.com/"
                 },
                {
                    name:"MaterialTodo",
                    desc:"Intuitive task manager built with Vuetify.", 
                    image:MaterialTodo, techs:["VueJs","Firebase","Vuetify"], 
                    git:"https://github.com/ZubaerRahman/VuetifyTasks", 
                    host:"https://materialtodo-8512f.web.app/"
                },
                {
                    name:"WeatherWatcher",
                    desc:"Activity suggestion based on current weather.",
                    image:WeatherWatcher, techs:["ReactJs", "MaterialUI"],
                    git:"https://github.com/ZubaerRahman/Ronin-Haven",
                    host:"https://weatherwatcher-dbb03.web.app/"
                },
            ],

        }
    },
    
}
</script>

<style scoped>
    .s {
        background-image: url('~@/assets/ProjectsSection.jpg');
    }

    .title {
        font-family: monospace;
        font-weight: lighter;
     }
</style>