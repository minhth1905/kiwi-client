<template>
    <div>
        <navbar :hidden-search="true"></navbar>
        <div id="loginbox" style="margin-top:50px;" class="mainbox col-md-6 offset-md-3 col-sm-8 offset-sm-2">
            <div class="panel panel-info">
                <div class="panel-heading">
                    <h4 class="panel-title" style="display: inline-block">Sign In</h4>
                    <div style="float:right; font-size: 85%; position: relative;">
                        <a href="#">Forgot password?</a>
                    </div>
                </div>

                <div style="padding-top:30px" class="panel-body">

                    <div style="display:none" id="login-alert" class="alert alert-danger col-sm-12"></div>

                    <form id="loginform" class="form-horizontal" role="form" @submit.prevent="login">

                        <div style="margin-bottom: 25px" class="input-group">
                            <span class="input-group-addon">
                                <i class="fa fa-lg fa-user"></i>
                            </span>
                            <input type="text" class="form-control" placeholder="username or email" v-model="email">
                        </div>

                        <div style="margin-bottom: 25px" class="input-group">
                            <span class="input-group-addon">
                                <i class="fa fa-lg fa-unlock"></i>
                            </span>
                            <input type="password" class="form-control" placeholder="password" v-model="password">
                        </div>
                        <div class="form-group row">
                            <div class="input-group col-sm-3 col-form-label">
                                <div class="checkbox">
                                    <label><input id="login-remember" type="checkbox" name="remember" value="1"> Remember me</label>
                                </div>
                            </div>

                            <div class="form-group col-sm-9">
                                <!-- Button -->
                                <button class="btn btn-success btn-block" type="submit">Login</button>
                            </div>
                        </div>

                        <div class="form-group">
                            <div style="border-top: 1px solid#888; padding-top:15px; font-size:85%">
                                Don't have an account?
                                <router-link to="/register">Register</router-link>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import config from '../config.js';
import Navbar from '../components/Generals/Navbar'
import {Network} from '../services/Network'
export default {
    components : {Navbar},
    data : function(){
        return {
            email : '',
            password : '',
        }
    },
    methods : {
        successLogin : function(data){
            localStorage.setItem("token", data.token);
            localStorage.setItem('user', JSON.stringify(data.user))
            let tmp =this;
            setTimeout(function() {
                tmp.$router.push({name : 'Home'});
            }, 500);
        },
        errLogin : function(data){
            console.log(data);
        },
        login : function(){
            var params = {
                email : this.email,
                password : this.password
            };
            Network.getDataFromApi(config.API_LOGIN,params,this.successLogin.bind(this),
                                    this.errLogin.bind(this))
        }
    }
}
</script>

<style>

</style>
