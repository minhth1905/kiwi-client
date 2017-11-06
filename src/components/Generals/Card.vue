<template>
    <div>
        <!-- Image feature-->
        <a href="javascript:void(0)">
            <img :src="'http://45.32.21.62:3000'+item.image" style="width : 100%;"/>
        </a>
        <div class="porfolio-detail">
            <!-- Name -->
            <p class="name"><a href="#">{{item.name}}</a></p>
            <!-- Author -->
            <p><a href="#">{{item.owner.full_name}}</a></p>
            <!-- Category -->
            <p><a href="#" v-if="item.category">{{item.category.name}}</a></p>
        </div>
        <hr>
        <div class="action">
            <span class="view"><img src="../../assets/view.png" />{{item.view ||  0}}</span>
            <span class="like"><img src="../../assets/like.png" /> {{item.like || 0}}</span>
            <span class="bookmark" style="float: right"><img src="../../assets/bookmark.png"/></span>
        </div>
    </div>

</template>

<script>
    export default {
        props : ['item'],

    }
</script>
<style>
    .action img{
        width : 15px;
    }   
    .porfolio-detail p {
        text-align : left;
        margin-left : 10px;
    } 
    .name {
        font-weight: bold;
    }
    .action {
        text-align : left;
        margin-left : 10px;
        padding-bottom : 10px;
    }
    .view,.like{
        padding : 10px;
    }
    .action span img {
        margin: 5px;
    }
</style>