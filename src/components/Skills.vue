<template>
    <div class="skills"> 
      <section class="hero is-black is-bold">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">Technical Skills</h1>
            </div>
        </div>
    </section>
    <div class="skills-body">
        <br/>
        <div class="container">    
                <div class="columns is-centered">
                    <div class="column">
                        <div class="rows">
                            <div data-aos="zoom-in-right" data-aos-delay="300" data-aos-duration="1000" class="column">
                                 <div class="row"><strong class="title is-5 has-text-white">Back end</strong></div>
                                 <div class="row" v-for="tech in backend" :key="tech.name"><TechCard :name="tech.name" :image="tech.image"/></div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="rows">
                                 <div data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000" class="column">
                                    <div class="row"><strong  class="title is-5 has-text-white">Front End</strong></div>
                                    <div class="row" v-for="tech in frontend" :key="tech.name"><TechCard :name="tech.name" :image="tech.image"/></div>
                                 </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="rows">
                            <div data-aos="zoom-in-left" data-aos-delay="300" data-aos-duration="1000" class="column">
                                <div class="row"><strong  class="title is-5 has-text-white">Databases</strong></div>
                                <div class="row" v-for="tech in databases" :key="tech.name"><TechCard :name="tech.name" :image="tech.image"/></div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
    </div>
    </div>
</template>

<script>
import TechCard from '../components/subcomponents/TechCard'
export default {
    components:{
        TechCard,
    },
    data: function(){
        return{
            backend:[
                {name:'Node.Js', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png'},
                {name:'Spring Boot', image:'https://dzone.com/storage/temp/12434118-spring-boot-logo.png'}
                ],
            frontend:[
                {name:'Vue.Js', image:'https://vuejs.org/images/logo.png'},
                {name:'React.Js', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'}
                ],
            databases:[
                {name:'Firebase', image:'https://www.gstatic.com/devrel-devsite/prod/va70c25da2af7c102a85bdfc215259d86fc5b2e57f33cbc810a173f52e333a7a1/firebase/images/touchicon-180.png'},
                {name:'Oracle SQL', image:'https://www.logo.wine/a/logo/Oracle_SQL_Developer/Oracle_SQL_Developer-Logo.wine.svg'}
                ],
        }
    }
}
</script>

<style scoped>
.skills-body{
    padding: 20px;
    background-image: url('~@/assets/AboutSection.jpg');
}

.gap{
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.gap h1{
    display: inline;
}

.row{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.title{
        font-family: monospace;
        font-weight: lighter;
     }
</style>