<template>
    <Header/>
    <div class="services-landingpage">
        <div class="textContent">
            <h1 class="title">The simplest way to <span class="redText">protect</span> your business.</h1>
            <p class="text">We all know cybersecurity is important. But when you're a small business with limited resources, it can be tricky to know where to start. Most off-the-peg options are expensive, complex and built with big businesses in mind.</p>
        </div>
    </div>
    <div class="services-wrapper">
        <a href="/products?prodName=application-testing"><div class="service">
            <h3 class="service-name">Application Testing</h3>
            <p class="service-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, alias? Id, velit. Similique adipisci explicabo natus non cupiditate unde harum</p>
        </div></a>
        <a href="/products?prodName=application-testing"><div class="service">
            <h3 class="service-name">Infrastructure Testing</h3>
            <p class="service-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, alias? Id, velit. Similique adipisci explicabo natus non cupiditate unde harum</p>
        </div></a>
        <a href="/products?prodName=application-testing"><div class="service">
            <h3 class="service-name">Social Engineering</h3>
            <p class="service-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, alias? Id, velit. Similique adipisci explicabo natus non cupiditate unde harum</p>
        </div></a>
        <a href="/products?prodName=application-testing"><div class="service">
            <h3 class="service-name">Accreditation</h3>
            <p class="service-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, alias? Id, velit. Similique adipisci explicabo natus non cupiditate unde harum</p>
        </div></a>
        <a href="/products?prodName=application-testing"><div class="service">
            <h3 class="service-name">Subscription Services</h3>
            <p class="service-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, alias? Id, velit. Similique adipisci explicabo natus non cupiditate unde harum</p>
        </div></a>
        <div class="gray-bg"></div>
    </div>
    <PartnerSlide/>
    <Footer/>
</template>
<script>
    import PartnerSlide from "./PartnerSlide.vue"
    import Footer from "./Footer.vue"
    import Header from "./Header.vue"

    export default{
        name:"ServicesPage",
        components:{
            PartnerSlide,
            Footer,
            Header,
        },
    }
</script>
<style scoped src='./../assets/css/services.css'> 
</style>