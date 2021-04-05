<template>
    <div>
    <footer class="contact footer has-background-black has-text-white">
        <div class="content has-text-centered">
            <div class="columns">
                <div class="column">
                    <a href="mailto:zubaer9898@gmail.com">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="gmail" width="40" style="vertical-align:middle"/> <span class="subtitle is-5 has-text-white"> {{email}}</span>
                    </a>
                </div>
                <div class="column">
                    <a href="https://www.linkedin.com/in/zubaer-rahman-9b2410159/">
                    <img src="https://nextdoorpark.mk/wp-content/uploads/2017/01/linkedin-icon.png" alt="linkedin" width="40" style="vertical-align:middle"/> <span class="subtitle is-5 has-text-white"> {{linkedin}}</span>
                    </a>
                </div>
            </div>
        </div>
    </footer>
    <footer class="has-background-black has-text-white" style="padding:20px">
        <a href="https://wallpapercave.com/">
        Wallpaper credits: wallpapercave.com 
        </a>
    </footer>
    </div>
</template>

<script>
export default {
    data: ()=>{
        return{
            email:"zubaermilano1998@gmail.com",
            linkedin: "Zubaer Rahman"
        }
    }
}
</script>

<style scoped>
    span{
        font-family: monospace;
        font-weight: lighter;
    }
    a{
        color: white;
    }
</style>