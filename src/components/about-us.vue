<template>
    <Header/>
    <div class="aboutus-landingPage">
        <div class="logo-wrapper">
            <img src="./../assets/RTPlogo.png" alt="" class="logo-img">
            <h1 class="title">About <span class="redText">Us</span></h1>
        </div>

        <div class="paragraph">
        Red Team Partners offers simple and reliable consulting services that help our clients understand their current state of cybersecurity and develop a plan to address any gaps in their existing security posture. In the event of an attack, we provide guidance on how to respond and mitigate the impact of the incident. We assist in developing a comprehensive plan to contain the damage and restore operations to normal.
        <br><br>
        Red Team Partners is one of the leading fast-growing providers of Cybersecurity services. Our goal is to protect your business from cybercrime. Our innovative, easy-to-use solutions make it simple and affordable for businesses of all sizes to get 101% protection against the ever-growing threat of cybercrime. From our award-winning penetration testing to our cutting-edge cloud security solutions, we have got you covered. So, you can focus on what you do best - running your business
        </div>
    </div>



    <PartnerSlide/>
    <Footer/>
</template>
<script>
    import Header from "./Header.vue";
    import Footer from "./Footer.vue";
    import PartnerSlide from "./PartnerSlide.vue";
    export default{
        name:"About-us-Page",
        components:{
    Header,
    Footer,
    PartnerSlide,
}
    }
</script>
<style scoped src="./../assets/css/aboutUs.css">
</style>