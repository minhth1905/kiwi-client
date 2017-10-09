<template>
    <div data-spy="scroll" data-target=".navbar" data-offset="50">
        <navbar :hidden-info="false" :hidden-search="false"></navbar>
        <div id="why" class="container-fluid section-even section">
            <why></why>
            
        </div>
        <div id="how-work" class="container-fluid section-odd section">
            <how-work></how-work>
        </div>
        <div id="section3" class="container-fluid section-even section">
            <about-us></about-us>
        </div>
    </div>
</template>

<script>
import HowWork from '../components/LandingPage/HowWork'
import Why from '../components/LandingPage/Why'
import AboutUs from '../components/LandingPage/AboutUs'
import Navbar from '../components/Generals/Navbar'
export default {
  components: {HowWork,Navbar,Why,AboutUs}
}
</script>

<style>
.section {padding-top:50px;height:500px;}
.section-odd{background-color: #fff}
.section-even{background-color: #f9f9f9}

</style>
