<template>
    <b-carousel-list v-model="test" :data="projects" :items-to-show="2">
        <template slot="item" slot-scope="props">
            <div data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000" class="column">

            <div class="card main">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <a @click="info(props.index)"><img :src="props.list.image" style="height:100%"></a>
                    </figure>
                </div>
                <div class="card-content">
                    <div class="content">
                        <p class="title is-5 has-text-white">{{ props.list.name }}</p>  
                        <p><span @click="goToLink(props.list.host)"><WebIcon class="icon"/></span> <span @click="goToLink(props.list.git)"><GitIcon class="icon"/></span></p>
                        <p class="subtitle is-6 has-text-white">{{ props.list.desc }}</p>
                        <p class="subtitle is-6 has-text-white">ZubaerRahman</p>
                        <hr>
                        <div class="field is-grouped" >
                            <div class="columns">
                                <div class="column" v-for="tech in props.list.techs" :key="tech" >
                                    <span class="tag is-dark">{{tech}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
        </template>
    </b-carousel-list>
</template>

<script>
// import ProjectCard from '../subcomponents/ProjectCard'
import WebIcon from 'vue-material-design-icons/Web';
import GitIcon from 'vue-material-design-icons/Github';

export default {
    components:{
        WebIcon,
        GitIcon,
    },
    data() {
        return {
            test: 0, 
        }
    },
    props:{
        projects: {type:Array}
    },
    methods: {
        info(value) {
            this.test = value
        },
        goToLink(link){
            window.open(link)
        }
    },
    created (){
        console.log(this.$props.projects);
    },

}
</script>

<style scoped>
    .main{
        background-color: black;
    }
    .material-design-icon__svg { height: 20px; width: 20px; color: white;}
    .tag{
        margin: 4px;
    }
    .icon:hover{
        opacity: 0.7;
    }

    @media only screen and (max-width: 600px) {
    .title, .subtitle {
        font-size: 0.8em !important;
    }
    .tag{
        font-size: 0.6em !important;
        margin: 0px;
    }
}
</style>