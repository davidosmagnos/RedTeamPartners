<template>
    <Header/>
    <div class="landingpage-blogs">
        <h1 class="title">Cybersecurity <span class="redText">Blogs</span></h1>
        <span class="subtext">New release topics of Cybersecurity</span>
    </div>
    <div class="blogs-wrapper">
        <BlogComp title='Title:The title' description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from....'/>
        <BlogComp title='Title:The title' description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from....'/>
        <BlogComp title='Title:The title' description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from....'/>
        <BlogComp title='Title:The title' description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from....'/>
        <BlogComp title='Title:The title' description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from....'/>
        <BlogComp title='Title:The title' description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from....'/>
        <BlogComp title='Title:The title' description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from....'/>
        <BlogComp title='Title:The title' description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from....'/>
        <BlogComp title='Title:The title' description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from....'/>
        <BlogComp title='Title:The title' description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from....'/>
    </div>
    <PartnerSlide/>
    <Footer/>
</template>
<script>
    import Header from "./Header.vue";
    import Footer from "./Footer.vue";
    import PartnerSlide from "./PartnerSlide.vue";
    import BlogComp from "./blogs-component.vue"
    export default{
        name:"BlogsPage",
        components:{
            Header,
            Footer,
            PartnerSlide,
            BlogComp,
        }
    }
</script>
<style scoped src="./../assets/css/blogs.css">
 
</style>