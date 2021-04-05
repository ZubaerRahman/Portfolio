<template>
<div class="education">
    <!-- <div class="verti-spacer"></div> -->
    <section class="hero is-dark is-bold">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">Education</h1>
            </div>
        </div>
    </section>
    <ul>
        <li v-for="(school,index) in schools" :key="index">{{school.name}}, {{index}}</li>
    </ul>
    <!-- <hr style="width: 10px; height: 200px; display: inline-block;"> -->
</div>
</template>

<script>
export default {
    data: function(){
        return{
            schools:[{name:"Queen Mary University of London", years:"2018-2022"},{name:"NewVic", years:"2016-2018"},]
        }
    },
    
}
</script>

<style scoped>
    ul{
    padding: 20px;
    background-image: url("https://wallpaperplay.com/walls/full/8/c/2/12870.jpg");
}
    
</style>