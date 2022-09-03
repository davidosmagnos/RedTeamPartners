<template>
<Header/>
    <div class="landingpage-news">
        <h1 class="title">Cybersecurity <span class="redText">News</span></h1>
        <span class="subtext">Cyber Security Press Highlights</span>
    </div>
    <div class="news-wrapper" id="news-wrapper">
        <!-- <div><NewsComp img="bg1.jpg" link='/' title="Title:The Title" description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from....'/></div> -->
    </div>
    <PartnerSlide/>
    <Footer/>
</template>
<script>
    import Header from "./Header.vue";
    import Footer from "./Footer.vue";
    import PartnerSlide from "./PartnerSlide.vue";
    import NewsComp from "./news-component.vue";
    import {createApp} from 'vue';
    export default{
        name:"NewsPage",
        components:{
            Header,
            Footer,
            PartnerSlide,
            // NewsComp,
        },
        mounted(){
            for(let i=0;i<10;i++){
                const newNews = createApp(NewsComp,{
                    img:"bg1.jpg", 
                    link:'/' ,
                    title:"Title:The Title",
                    description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from....',
                })

                const wrapper = document.createElement("div");
                wrapper.classList.add("newss-cont");
                newNews.mount(wrapper);
                document.querySelector("#news-wrapper").appendChild(wrapper);
            }
        }
    }
</script>
<style scoped src="./../assets/css/news.css">
    
</style>