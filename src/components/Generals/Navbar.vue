<template>
    <nav class="navbar">
    <div class="container-fluid">
        <div class="navbar-header">
        <a class="navbar-brand" href="#">BrandName</a>
        </div>
        <ul class="nav navbar-nav">
        <li class="active"><a href="#why">Why</a></li>
        <li><a href="#how-work">How it work </span></a></li>
        <li><a href="#">About us</a></li>
        </ul>
        <form class="navbar-form navbar-left">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Developer">
            </div>
            <button type="submit" class="btn btn-default">Search</button>
        </form>
        <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
    </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
    nav {padding: 0 10px;}
</style>


