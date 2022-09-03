<template>
    <Header/>
    <div class="landingpage-blogs">
        <h1 class="title">Cybersecurity <span class="redText">Blogs</span></h1>
        <span class="subtext">New release topics of Cybersecurity</span>
    </div>
    <div class="blogs-wrapper" id="blogs-wrapper">
        <!-- <div><BlogComp title='Title:The title' description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from....'/></div>
        <div><BlogComp title='Title:The title' description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from....'/></div> -->
    </div>
    <PartnerSlide/>
    <Footer/>
</template>
<script>
    import Header from "./Header.vue";
    import Footer from "./Footer.vue";
    import PartnerSlide from "./PartnerSlide.vue";
    import BlogComp from "./blogs-component.vue"
    import {createApp} from 'vue'
    export default{
        name:"BlogsPage",
        components:{
            Header,
            Footer,
            PartnerSlide,
            // BlogComp,
        },
        mounted(){
            for(let i=0;i<10;i++){
                const newBlog = createApp(BlogComp,{
                    link:'/',
                    title:"Title:The title",
                    description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from....',
                })

                const wrapper = document.createElement("div");
                wrapper.classList.add("bloggs-cont");
                newBlog.mount(wrapper);
                document.querySelector("#blogs-wrapper").appendChild(wrapper)
            }

        }
    }
</script>
<style scoped src="./../assets/css/blogs.css">
 
</style>