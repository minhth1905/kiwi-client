<template>
    <div>
        <!-- Image feature-->
        <a href="javascript:void(0)">
            <img :src="item.feature_img" style="width : 100%;"/>
        </a>
        <div class="porfolio-detail">
            <!-- Name -->
            <p class="name"><a href="#">{{item.name}}</a></p>
            <!-- Author -->
            <p><a href="#">{{item.author}}</a></p>
            <!-- Category -->
            <p><a href="#">{{item.category}}</a></p>
        </div>
        <hr>
        <div class="action">
            <span class="view"><img src="../../assets/view.png" />{{item.view}}</span>
            <span class="like"><img src="../../assets/like.png" /> {{item.like}}</span>
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