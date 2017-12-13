<template>
    <div>
        <div style="position: fixed; top: 0px; width: 100%; z-index: 9999">
            <navbar :hidden-search="false"></navbar>
        </div>
        <div style="height: 300px; color: #fff">
            <div id="brand-image">
                <h1 style="margin-top: 50px; text-align: center;">Creators</h1>
            </div>
        </div>
            <filter-nav></filter-nav>
            <div id="view-portfolio" class="col-xs-12" >
                <div class="row" style="margin: 25px;">
                    <div class="col-md-3 col-xs-4" v-for="item in lPortfolio" :key="item.id" style="margin-bottom : 10px;">
                        <card  :item="item"  style="background-color:#fff"></card>
                    </div>
                    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
                </div>
            </div>
    </div>
</template>

<script>
import {Network} from '../services/Network'
import config from '../config'
import InfiniteLoading from 'vue-infinite-loading';
import FilterNav from '../components/Generals/FilterNav'
import Navbar from '../components/Generals/Navbar'
import Card from '../components/Generals/Card'
export default {
  components: {FilterNav,Navbar,Card,InfiniteLoading},
  data() {
      return {
          scrolled: false,
          isLogin : false,
          user : "",
          lPortfolio: []
      }
  },
  beforeMount : function(){
        Network.getDataFromApi(config.API_PORTFOLIOS,null,function(data){
            this.lPortfolio = data.data;
            console.log(data);
        }.bind(this),null,'GET')  
  },
  methods: {
    infiniteHandler($state) {
      setTimeout(() => {
        $state.loaded();
      }, 1000);
    },
  }
}

</script>

<style>
.section {padding-top:50px;height:500px;}
.section-odd{background-color: #fff}
.section-even{background-color: #fff}
    #brand-image{
        background-image: url('../assets/bg.jpg');
        height: 100%;
        background-position: 100px -250px;
        background-size: cover;
    }
    #brand-image h1{
      padding-top : 120px;
      font-weight: bolder;
      font-size: 3em;
      letter-spacing: 10px;
      text-transform: uppercase;
    }
    #view-portfolio {
        background-color : #f9f9f9;
        height : 100%;
        padding-top: 30px;
    }
</style>
