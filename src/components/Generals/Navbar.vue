<template>
<nav class="navbar navbar-expand-md navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
    <router-link class="navbar-brand" to="/">Creators</router-link>
    <form class="form-inline" v-if="!hiddenSearch">
      <input type="search" class="form-control mr-sm-2" placeholder="Search">
      <button type="submit" class="btn btn-outline-primary">Search</button>
    </form>
    <ul class="navbar-nav" v-if="!checkLogin">
      <li class="nav-item">
        <router-link class="nav-link text-primary" to="/register"><i class="fa fa-lg fa-user-plus"></i> Sign Up</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link text-primary" to="/login"><i class="fa fa-lg fa-sign-in"></i> Login</router-link>
      </li>
    </ul>
    <ul class="navbar-nav" v-if="checkLogin">
      <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{user}} <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><router-link class="nav-link text-primary" to="/"><i class="fa fa-lg fa-user"></i> Profile  </router-link></li>
          <li><router-link class="nav-link text-primary" to="/new-portfolio"><i class="fa fa-lg fa-plus-circle"></i> Create Portfolio  </router-link></li>
          <li role="separator" class="divider"></li>
          <li><a href="javascript:void(0)" @click="logout"><i class="fa fa-lg fa-sign-out"></i> Logout</a></li>
        </ul>
      </li>
    </ul>
  </div><!-- /.navbar-collapse -->
</nav>
</template>

<script>
export default {
  props: ['hiddenInfo', 'hiddenSearch'],
  data() {
    return {
      checkLogin: null
    };
  },
  beforeMount() {
    let token = localStorage.getItem('token');
    if (token !== null) {
      this.checkLogin = true;
      let user = JSON.parse(localStorage.getItem('user'));
      this.user = user.email;
    }
  },
  methods: {
    logout: function() {
      localStorage.removeItem('token');
      this.checkLogin = false;
    }
  }
};
</script>

<style>
nav {
  padding: 0 10px;
}
</style>
