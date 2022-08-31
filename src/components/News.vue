<template>
<Header/>
    <div class="landingpage-news">
        <h1 class="title">Cybersecurity <span class="redText">News</span></h1>
        <span class="subtext">Cyber Security Press Highlights</span>
    </div>
    <div class="news-wrapper">
        <NewsComp img="bg1.jpg" link='/' title="Title:The Title" description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from....'/>
        <NewsComp img="bg2.png" link='/' title="Title:The Title" description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from....'/>
        <NewsComp img="bg1.jpg" link='/' title="Title:The Title" description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from....'/>
        <NewsComp img="bg1.jpg" link='/' title="Title:The Title" description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from....'/>
        <NewsComp img="bg2.png" link='/' title="Title:The Title" description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from....'/>
        <NewsComp img="bg3.jpg" link='/' title="Title:The Title" description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from....'/>
        <NewsComp img="bg1.jpg" link='/' title="Title:The Title" description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from....'/>
        <NewsComp img="bg2.png" link='/' title="Title:The Title" description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from....'/>
        <NewsComp img="bg1.jpg" link='/' title="Title:The Title" description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from....'/>
        <NewsComp img="bg3.jpg" link='/' title="Title:The Title" description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from....'/>
    </div>
    <PartnerSlide/>
    <Footer/>
</template>
<script>
    import Header from "./Header.vue";
    import Footer from "./Footer.vue";
    import PartnerSlide from "./PartnerSlide.vue";
    import NewsComp from "./news-component.vue"
    export default{
        name:"NewsPage",
        components:{
            Header,
            Footer,
            PartnerSlide,
            NewsComp,
        }
    }
</script>
<style scoped src="./../assets/css/news.css">
    
</style>