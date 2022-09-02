<template>
    <Header/>
    <div class="products-wrapper" id="productsWrapper">
        <div class="title">
            <span>Services under <span class="redText">Application Testing</span></span>
        </div>
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
    // import {defineComponent} from "vue"
    import {createApp} from "vue"
    export default{
        name:"Products-page",
        components:{
            Header,
            Footer,
            PartnerSlide,
            // ProductComp,
        },
        mounted(){
             for(let i=0;i<10;i++){
                let dir;
                if(i%2==0){
                    dir = ""
                }
                else if(i%2==1){
                    dir = "rightDir"
                }
                const newProduct = createApp(ProductComp,{
                    prodName:"Henlo",
                    direction:dir,
                    link:"#",
                    prodDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ratione, tempore molestiae, et tenetur eaque aspernatur repellendus labore debitis ex voluptatum accusantium vero saepe. Sed molestiae alias accusantium dolorem itaque!"
                });
                const wrapper = document.createElement("div");
                wrapper.classList.add("prods-cont")
                newProduct.mount(wrapper)
                document.querySelector("#productsWrapper").appendChild(wrapper)
            }
            
        },
        created(){
            console.log(this.$route.query)
        }
    }
</script>
<style src="./../assets/css/products.css">
</style>