<template>
    <div class="col-xs-12 col-md-8 offset-md-2">
        <div class="panel">
                    <form id="signupform" class="form-horizontal" @submit.prevent="createPortfolio">

                        <div id="signupalert" class="alert alert-danger" v-if="err">
                            <p>{{err}}</p>
                            <span></span>
                        </div>

                        <div class="form-group">
                            <label for="email" class="col-md-3 control-label">Portfolio Name(*)</label>
                            <div class="col-md-9">
                                <input type="email" class="form-control" placeholder="Portfolio Name" required v-model="name">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="firstname" class="col-md-3 control-label">Description(*)</label>
                            <div class="col-md-9">
                                <textarea name="" id="" cols="30" rows="10" class="form-control" v-model="description" required></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="firstname" class="col-md-3 control-label">Website(optional)</label>
                            <div class="col-md-9">
                                <input type="email" class="form-control" placeholder="http://google.com " required v-model="website">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="firstname" class="col-md-3 control-label">Feature Image(*)</label>
                            <div class="col-md-9">
                               <input type="file" class="form-control-file" aria-describedby="fileHelp" @change="uploadFeauture($event.target.files)">
                            </div>
                        </div>     
                        <div class="form-group">
                            <label for="firstname" class="col-md-3 control-label">Select Images</label>
                            <div class="col-md-9">
                               <input type="file" class="form-control-file" aria-describedby="fileHelp" @change="uploadImage($event.target.files)">
                            </div>
                        </div>
                        <div class="form-group" v-if="images">
                            <div class="col-xs-3" v-for="src in images" :key="src">
                                <img :src="'http://45.32.21.62:3000'+src" class="img-thumbnail" alt="Cinque Terre" >
                            </div>
                            
                        </div>                                            
                        <div class="form-group">
                            <!-- Button -->
                            <div class="offset-md-3 col-md-9">
                                <button id="btn-signup" type="button" class="btn btn-info btn-block" @click="createPortfolio">
                                    <i class="icon-hand-right"></i> Create Portfolio</button>
                            </div>
                        </div>

                    </form>            
        </div>
    </div>

</template>

<script>
import {Network} from '../../services/Network'
import config from '../../config'
export default {
    data() {
        return {
            err : "",
            name: "",
            description : "",
            website : "",
            feauture : "",
            images : []
        }
    },
    methods: {
        successUploadFeauture : function(data){
            this.feauture = data.data;
        },
        successUploadImage: function(data)
        {
            this.images.push(data.data);
        } ,
        uploadFeauture : function(file){
            let formData = new FormData();
            formData.append('file', file[0]);
            Network.getDataFromApi(config.API_UPLOAD,formData,this.successUploadFeauture.bind(this))
        },
        uploadImage : function(file){
            let formData = new FormData();
            let index = this.images.length;
            formData.append('file', file[0]);
            Network.getDataFromApi(config.API_UPLOAD,formData,this.successUploadImage.bind(this));
        },
        createPortfolio : function(){
            let info = {
                name : this.name,
                description : this.description,
                image : this.feauture
            };
            let content = [];
            for(let i = 0;i < this.images.length ; i++)
            {
                content[i] = {type:"image",url : this.images[i]};
            }
            let params = {info : info,content : content}
            Network.getDataFromApi(config.API_PORTFOLIOS,params,function(data){
                let tmp =this;
                setTimeout(function() {
                    tmp.$router.push({name : 'Home'});
                }, 500);
            }.bind(this))
        }
    },
}
</script>

<style>

</style>
