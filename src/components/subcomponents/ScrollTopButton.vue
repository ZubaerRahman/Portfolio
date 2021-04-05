<template>
<button class="scroll-top button is-black" @click="scrollToTop">
        <ArrowUp/>
  </button>
</template>

<script>
import ArrowUp from 'vue-material-design-icons/ArrowUp'
export default {
    components:{
        ArrowUp,
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods:{
        handleScroll(){
            var x = document.getElementsByClassName("scroll-top")[0];
            if(window.scrollY >600){
                console.log('SCROLLED')
                x.style.display = "block";
            }
            else{x.style.display = "none";}
        },
        scrollToTop() {
                window.scrollTo({top:0, left:0, behavior:"smooth"});
           }
    }
}
</script>

<style scoped>
    .scroll-top {
        display:none;
        position: fixed; 
        bottom:20px;
        right: 20px;
        width: 70px; 
    }
</style>