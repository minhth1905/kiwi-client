<template>
    <div>
        <div style="position: fixed; top:0px;background-color: #000;width : 100%;z-index : 9999;height:50px;">
            <navbar :hidden-search="false" :is-login="isLogin" :user="user"></navbar>
        </div>
        <div style="height:250px;color:#fff">
            <div id="brand-image">
                <h1 style="margin-top :50px;">BrandName</h1>
            </div>
        </div>        
            <filter-nav></filter-nav>    
            <div id="view-portfolio" class="col-xs-12" >
                <div class="row" style="margin : 25px;">
                    
                    <div class="col-md-3 col-xs-4" v-for="item in lPortfolio" :key="item.id" style="margin-bottom : 10px;">
                        <card  :item="item"  style="background-color:#fff"></card>
                    </div>
                    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
                </div>                
            </div>                                   
    </div>
</template>

<script>
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
          lPortfolio: [
              {
                  id : 1,
                  feature_img : "https://www.disneyclips.com/imagesnewb2/images/baymax.gif",
                  name : "Baymax Portfolio",
                  author : "Hiro",
                  category : "Big Hero 6",
                  view : 1234,
                  like : 123
              },
              {
                  id : 1,
                  feature_img : "https://www.disneyclips.com/imagesnewb2/images/baymax.gif",
                  name : "Baymax Portfolio",
                  author : "Hiro",
                  category : "Big Hero 6",
                  view : 1234,
                  like : 123
              },             
              {
                  id : 1,
                  feature_img : "https://www.disneyclips.com/imagesnewb2/images/baymax.gif",
                  name : "Baymax Portfolio",
                  author : "Hiro",
                  category : "Big Hero 6",
                  view : 1234,
                  like : 123
              },
              {
                  id : 1,
                  feature_img : "https://www.disneyclips.com/imagesnewb2/images/baymax.gif",
                  name : "Baymax Portfolio",
                  author : "Hiro",
                  category : "Big Hero 6",
                  view : 1234,
                  like : 123
              },                            
          ]
      }
  },
  beforeMount : function(){
      let token = localStorage.getItem("token");
      if(token !== null){
          this.isLogin = true;  
          let user = JSON.parse(localStorage.getItem("user"));
          this.user = user.email;
      }
  },
  methods: {
    infiniteHandler($state) {
      setTimeout(() => {
        var tmp = JSON.parse(JSON.stringify(this.lPortfolio));
        this.lPortfolio = this.lPortfolio.concat(tmp); 
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
        background-image: url('https://9to5mac.files.wordpress.com/2016/06/oled-apple-keyboard-03.jpg');
        height: 100%;
        }
    #brand-image h1{
      padding-top : 50px;  
    }
    #view-portfolio {
        background-color : #f9f9f9;
        height : 100%;
        padding-top: 30px;
    }  
</style>
