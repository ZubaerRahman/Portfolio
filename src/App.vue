<template>
  <div id="app">
    <Home/>
    <SectionScroller/>
    <Projects/>
    <Skills/>
    <About/>
    <Contact/>
    <ScrollTopButton/>
  </div>
</template>

<script>
import SectionScroller from './components/SectionScroller'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import ScrollTopButton from './components/subcomponents/ScrollTopButton'

export default {
  name: 'App',
  components: {
    SectionScroller,
    Home,
    Skills,
    Projects,
    About,
    Contact,
    ScrollTopButton,
  },
  created(){
  },
  methods:{
   
  }

}
</script>

<style>
    body{
        font-family: monospace !important;
        font-weight: lighter !important;
    }
</style>
