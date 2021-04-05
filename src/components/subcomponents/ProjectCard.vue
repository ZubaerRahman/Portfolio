<template>
    <div class="card" style="background-color:black">
                <div class="card-image">
                    <figure class="image is-5by4">
                        <a @click="info(project.index)"><img :src="project.image"></a>
                    </figure>
                    <b-tag type="is-danger" rounded style="position: absolute; top: 0;"><b>50%</b></b-tag>
                </div>
                <div class="card-content">
                    <div class="content">
                        <p class="title is-6">{{ project.titlname }}</p>
                        <p class="subtitle is-7">@johnsmith</p>
                        <div class="field is-grouped" >
                            <p class="control" v-if="project.name">
                                <b-rate :value="project.name" show-score disabled/>
                            </p>
                            <p class="control" style="margin-left: auto">
                                <button class="button is-small is-danger is-outlined"><b-icon size="is-small" icon="heart"/></button>
                            </p>
                        </div>
                    </div>
                </div>
    </div>
</template>

<script>
export default {
    props:{
        project:{type:Object},
    }
}
</script>

<style>
   
</style>