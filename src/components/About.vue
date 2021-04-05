<template>
    <div class="about">
    <section class="hero is-black is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">About</h1>
                </div>
            </div>
    </section>
        <div class="main-body">
            <div class="container">
            <div class="columns">
                <div data-aos="fade-up" data-aos-delay=" 0" data-aos-duration="1000" class="column">
                    <div class="section" style="width:100%">
                        <p class="tag is-black title is-4">Formal Education</p>
                        </div>
                </div>
                <div data-aos="fade-down" data-aos-delay="600" data-aos-duration="1000" class="column">
                    <div class="section">
                        <p class="title is-4">Queen Mary, University of London</p>   
                        <p class="subtitle is-6 is-italic">BSc Computer Science 2018-2022</p>   
                        <ul class="menu-list">
                            <li>
                            <p class="subtitle"><strong class="has-text-white">Favourite Modules</strong></p>
                            <ul class="modules-menu">

                                <li class="menulist-li">
                                <strong>Year 1</strong>
                                <ul>
                                    <li><span class="has-text-white">Object-Oriented Programming</span></li>
                                </ul>
                                </li>
                                <li>
                                <strong>Year 2</strong>
                                <ul>
                                    <li><span class="has-text-white">Algorithms and Data Structures</span></li>
                                </ul>
                                </li>
                            </ul>       
                            </li>

                            <li class="menulist-li">
                                <p class="subtitle"><strong class="has-text-white">Industrial Experience</strong></p>
                                <ul>
                                    <li><span class="has-text-white">Trainee Software Developer - 1 Year (pending)</span></li>
                                </ul>
                            </li>
                        </ul>                  
                        </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    export default {

}
</script>

<style scoped>

  .main-body{
    padding: 20px;
    background-image: url('~@/assets/ProjectsSection.jpg');
  }

  p, a, strong{
      color: white;
  }

  .title{
      font-family: monospace;
      font-weight: lighter;
  }

</style>