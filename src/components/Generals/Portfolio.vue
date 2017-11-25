<template>
  <div class="container" style="background-color : #FAFAFA">
      <!-- Phan hien thi portfolio -->
      <div class="col-xs-12 col-md-9 full-item">
          <img :src="url_home + item.link" alt="" v-for="item in items" :key="item.id">
      </div>
      <!-- Hien thi info author va comments -->
      <div class="col-xs-12 col-md-3 commentdiv">
         <h4 class="fleft" v-if="portfolioInfo">{{portfolioInfo.owner_name}}</h4>
         <div class="clearfix"></div>
         <button class="btn btn-primary fleft">Follow</button>
         <div class="clearfix"></div>
         <h5 class="fleft" v-if="portfolioInfo">{{portfolioInfo.info.content}}</h5>
        <div class="action">
            <span class="view" v-if="portfolioInfo"><img src="../../assets/view.png" class="icon" />{{portfolioInfo.info.view ||  0}}</span>
            <span class="like" v-if="portfolioInfo"><img src="../../assets/like.png" class="icon" /> {{portfolioInfo.info.like || 0}}</span>
        </div>    
        <div>
            <textarea type="text" class="form-control" rows="4"></textarea>
            <button class="btn btn-primary btn-block">Submit</button>
        </div>
        <hr>
             <!-- Phan cho comments -->
             <div v-if="comments" v-for="comment in comments" :key="comment.id">
                 <span class="fleft" style="color:blue;padding : 0 5px">{{comment.username}}</span>
                 <span class="fleft">{{comment.msg}}</span>
                 <div class="clearfix"></div>
             </div>
         <hr>
      </div>
  </div>
</template>

<script>
import config from '../../config'
import {Network} from '../../services/Network'
export default {
    data() {
        return {
            portfolioInfo: null,
            comments : null,
            items : null,
            url_home : 'http://45.32.21.62'
        }
    },
    beforeMount(){
        this.loadInfo();
        this.loadComments();
    },
    methods: {
        
        loadInfo() {
            let id = this.$route.params.id;
            Network.getDataFromApi(config.API_PORTFOLIOS+"/"+id,null,function(data){
                this.items = data.data.content;
                this.portfolioInfo = data.data;
            }.bind(this),null,'GET')
        },
        loadComments() {
            let id = this.$route.params.id;
            Network.getDataFromApi(config.API_PORTFOLIO+"/"+id+"/comments",null,
                function(data){
                    this.comments = data.data;
                }.bind(this),null,'GET'
            )
        }
    },
}
</script>

<style>
    .fleft {
        float: left;
    }
    .action {
        text-align : left;
        margin-left : 10px;
        padding-bottom : 10px;
    }
    .view,.like{
        padding : 10px;
    }
    .icon {
        width: 20px;
    }
    .action span img {
        margin: 5px;
    } 
    .full-item {
     border-style: solid;
     border-color : #fafafa;
    border-right: thin solid #000;
    }
</style>
