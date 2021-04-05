<template>
  <div class="home">
      <div class="night">
          <div class="container has-text-centered">
            
            <div data-aos="fade-right" data-aos-delay="800" data-aos-duration="2000">
                <h1 class="name title is-2 has-text-white">
                    Hi, I'm Zubaer
                </h1>
            </div>
            <br/>
            <div data-aos="fade-left" data-aos-delay="1600" data-aos-duration="2000">
            <h2 class="desc subtitle is-4 has-text-white">
                Software developer based in London, UK
            </h2>
            </div>
            <br/>
            <h2 class="subtitle github">
                <a href="https://github.com/ZubaerRahman" target="_blank">
                <img src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/64/social_media_logo_github-512.png" alt="github" width="50"/>
                </a>
            </h2>
            
            <h2 class="subtitle">
                <a style="color:whitesmoke"><ArrowDown class="arrowDown" @click="scrollToSection('projects')"/></a>
            </h2>
            
            </div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
    </div>
  </div>
</template>

<script>
import ArrowDown from 'vue-material-design-icons/ArrowDown';
export default {
    components:{
        ArrowDown,
    },
    methods:{
        scrollToSection(section){
            const element = document.getElementsByClassName(section)[0];
            const offset = 65;
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
    .material-design-icon__svg { height: 60px; width: 60px;}
    .home{
        height: 100vh;
        position: relative;
    }
    .hero{
        height: 100%;
    
    }
    .container{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        transform: rotateZ(-45deg);
    }

    .name, .desc{
        font-family: monospace;
        font-weight: lighter;

    }
    .arrowDown:hover{
            color:grey;
    }
    .github:hover{
        opacity: 0.8;
    }

</style>

<style lang="scss">
    .home {
        background-image: url('~@/assets/HomeSection.jpg');
        height: 100vh;
        overflow: hidden;
        display: flex;
        font-family: 'Anton', sans-serif;
        justify-content: center;
        align-items: center;
        }

        $shooting-time: 3000ms;

        .night {
        position: relative;
        width: 100%;
        height: 100%;
        transform: rotateZ(45deg);
        }

        .shooting_star {
        position: absolute;
        left: 50%;
        top: 50%;
        height: 2px;
        background: linear-gradient(-45deg, rgba(95, 145, 255, 1), rgba(0, 0, 255, 0));
        border-radius: 999px;
        filter: drop-shadow(0 0 6px rgba(105, 155, 255, 1));
        animation:
            tail $shooting-time ease-in-out infinite,
            shooting $shooting-time ease-in-out infinite;
        
        &::before {
            content: '';
            position: absolute;
            top: calc(50% - 1px);
            right: 0;
            height: 2px;
            background: linear-gradient(-45deg, rgba(0, 0, 255, 0), rgba(95, 145, 255, 1), rgba(0, 0, 255, 0));
            transform: translateX(50%) rotateZ(45deg);
            border-radius: 100%;
            animation: shining $shooting-time ease-in-out infinite;
        }

        &::after {
            @extend .shooting_star::before;
            transform: translateX(50%) rotateZ(-45deg);
        }
        
        @for $i from 1 through 20 {
            &:nth-child(#{$i}) {
            $delay: random(9999) + 0ms;
            top: calc(50% - #{random(400) - 200px});
            left: calc(50% - #{random(600) + 0px});
            animation-delay: $delay;
            
            &::before,
            &::after {
                animation-delay: $delay;
            }
            }
        }
        }

        @keyframes tail {
        0% {
            width: 0;
        }
        
        30% {
            width: 100px;
        }
        
        100% {
            width: 0;
        }
        }

        @keyframes shining {
        0% {
            width: 0;
        }
        
        50% {
            width: 30px;
        }
        
        100% {
            width: 0;
        }
        }

        @keyframes shooting {
        0% {
            transform: translateX(0);
        }
        
        100% {
            transform: translateX(300px);
        }
        }

        @keyframes sky {
        0% {
            transform: rotate(45deg);
        }
        
        100% {
            transform: rotate(45 + 360deg);
        }
        }
</style>