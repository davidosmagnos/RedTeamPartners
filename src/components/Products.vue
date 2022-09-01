<template>
    <Header/>
    <div class="products-wrapper">
        <div class="title">
            <span>Services under <span class="redText">Application Testing</span></span>
        </div>
        <ProductComp direction='floatLeft'/>
        <ProductComp direction='floatRight'/>
        <ProductComp direction='floatLeft'/>
        <ProductComp direction='floatRight'/>
    </div>
    <div class="whys">
        <div class="why1">
            <span class="why1-title">Why do you need <span class="redText">Application Testing?</span></span>
            <p class="why1-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ratione, tempore molestiae, et tenetur eaque aspernatur repellendus labore debitis ex voluptatum accusantium vero saepe. Sed molestiae alias accusantium dolorem itaque!</p>
            <p class="why1-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, culpa officia. Animi delectus iusto inventore sequi ut maiores id commodi totam, consequatur eos distinctio non ducimus magni accusamus, similique alias.</p>
        </div>
        <div class="why2">
            <div class="why2-wrapper">
                <span class="why1-title"><span class="redText">Why RedTeam Partners?</span></span>
                <p class="why2-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ratione, tempore molestiae, et tenetur eaque aspernatur repellendus labore debitis ex voluptatum accusantium vero saepe. Sed molestiae alias accusantium dolorem itaque!</p>
                <p class="why2-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, culpa officia. Animi delectus iusto inventore sequi ut maiores id commodi totam, consequatur eos distinctio non ducimus magni accusamus, similique alias.</p>
            </div>
        </div>
    </div>
    <PartnerSlide/>
    <Footer/>
</template>
<script>
    import Header from "./Header.vue";
    import Footer from "./Footer.vue";
    import PartnerSlide from "./PartnerSlide.vue";
    import ProductComp from "./product-comp.vue"
    export default{
        name:"Products-page",
        components:{
            Header,
            Footer,
            PartnerSlide,
            ProductComp,
        }
    }
</script>
<style scoped src="./../assets/css/products.css">
</style>