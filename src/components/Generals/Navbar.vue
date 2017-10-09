<template>
    <nav class="navbar">
    <div class="container-fluid">
        <div class="navbar-header">
        <a class="navbar-brand" href="#">BrandName</a>
        </div>
        <ul class="nav navbar-nav" v-if="!hiddenInfo">
            <li><a href="#why">Why</a></li>
            <li><a href="#how-work">How it work </span></a></li>
            <li><a href="#">About us</a></li>
        </ul>
        <form class="navbar-form navbar-left" v-if="!hiddenSearch">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Developer">
            </div>
            <button type="submit" class="btn btn-default">Search</button>
        </form>
        <ul class="nav navbar-nav navbar-right">
        <li><router-link to="/register"><span class="glyphicon glyphicon-user"></span> Sign Up</router-link></li>
        <li><router-link to="/login"><span class="glyphicon glyphicon-log-in"></span> Login</router-link></li>
        </ul>
    </div>
    </nav>
</template>

<script>
export default {
    props: ['hiddenInfo','hiddenSearch']
}
</script>

<style>
    nav {padding: 0 10px;}
</style>


