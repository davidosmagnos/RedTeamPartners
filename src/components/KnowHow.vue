<template>
    <Header/>
    <LandingPage tagline="<span class='EbigTag'>Know<span class='redText'>How</span>" subtext="From FAQs to industry-leading research and whitepapers, our resource centre is a one-stop shop for all your cybersecurity questions." buttontext="<a href='#newsletter'><button class='action-button'>Subscribe to our Newsletter</button></a>" />
        <div class="blogs-container">
            <div class="title">
                <span><span class="redText">Blogs</span></span>
            </div>
            <div class="blogs-wrapper" id="blogs-wrapper">
                <!-- <Blogs v-for="blog in blogsList" :key="blog" :title="blog.blog_name" :description="blog.blog_description" button-text="Read More" :link="blog.blog_link"/> -->
                <Blogs title="Title:The title" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum eum quas tenetur beatae id voluptatem iste " link="/" button-text="Read More"/>
                <Blogs title="Title:The title" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum eum quas tenetur beatae id voluptatem iste " link="/" button-text="Read More"/>
                <Blogs title="Title:The title" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum eum quas tenetur beatae id voluptatem iste " link="/" button-text="Read More"/>
            </div>
            <a href="/blogs" class="seeMore">See More >></a>
        </div>
        <div class="news-container">
            <div class="title">
                <span>Our latest <span class="redText">work </span>and <span class="redText">news</span></span>
            </div>
            <div class="news-wrapper" id="news-wrapper">
                <News title="Title:The title" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum eum quas tenetur beatae id voluptatem iste " link="/" img="bg1.jpg"/>
                <News title="Title:The title" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum eum quas tenetur beatae id voluptatem iste " link="/" img="bg1.jpg"/>
                <News title="Title:The title" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum eum quas tenetur beatae id voluptatem iste " link="/" img="bg1.jpg"/>
            </div>
            <a href="/news" class="seeMore">See More >></a>
        </div>
        <div class="supportHub">
            <div class="title">
                <span>Support <span class="redText">Hub</span></span>
            </div>
            <div class="faq">
                <span class="title">Frequently asked Questions</span>
                <div class="questions">
                    <div class="question-cont">
                        <span class="question" @click="showAns()">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vel, asperiores similique fuga iusto corrupti et reiciendis sed id ut eaque, quos exercitationem ipsum praesentium sunt suscipit nihil ad molestiae?</span>
                        <div class="answer inactive">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugit debitis nulla, dignissimos nesciunt reiciendis a provident voluptas quisquam quide</div>
                    </div>
                    <div class="question-cont">
                        <span class="question" @click="showAns()">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vel, asperiores similique fuga iusto corrupti et reiciendis sed id ut eaque, quos exercitationem ipsum praesentium sunt suscipit nihil ad molestiae?</span>
                        <div class="answer inactive">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugit debitis nulla, dignissimos nesciunt reiciendis a provident voluptas quisquam quide</div>
                    </div>
                    <div class="question-cont">
                        <span class="question" @click="showAns()">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vel, asperiores similique fuga iusto corrupti et reiciendis sed id ut eaque, quos exercitationem ipsum praesentium sunt suscipit nihil ad molestiae?</span>
                        <div class="answer inactive">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugit debitis nulla, dignissimos nesciunt reiciendis a provident voluptas quisquam quide</div>
                    </div>
                    <div class="question-cont">
                        <span class="question" @click="showAns()">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vel, asperiores similique fuga iusto corrupti et reiciendis sed id ut eaque, quos exercitationem ipsum praesentium sunt suscipit nihil ad molestiae?</span>
                        <div class="answer inactive">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugit debitis nulla, dignissimos nesciunt reiciendis a provident voluptas quisquam quide</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="newsletter" id="newsletter">
            <div class="right">
        <div class="form-intro">
            <h1 class="title">Subsribe to our <span class="redText">newsletter.</span></h1> 
            <p class="text">Want the latest delivered to your inbox? Subscribe to our newsletter below</p>
        </div>
        <div class="main-form">
            <form method="get" class="newsletter-mainForm">
                <div class="fullName">
                    <input type="text" name="fname" id="fname" placeholder="First name" class="text-field">
                    <input type="text" name="lname" id="lname" placeholder="Last name" class="text-field">
                </div>
                <input type="email" name="email" id="email" placeholder="Email address" class="text-field">
                <button class="submitForm">Submit Form</button>
            </form>
        </div>
    </div>
    <div class="left">
        <div class="newsletter-bg">
            
        </div>
    </div>
        </div>
    <PartnerSlide/>
    <Footer/>
</template>
<script>
    import Header from "./Header.vue";
    import Footer from "./Footer.vue";
    import LandingPage from "./LandingPage.vue";
    import PartnerSlide from "./PartnerSlide.vue";
    import Blogs from "./blogs-component.vue";
    import News from "./news-component.vue"
import BlogService from "@/BlogService";

    export default{
        name:"KnowHow-page",
        components:{
            Header,
            Footer,
            LandingPage,
            PartnerSlide,
            Blogs,
            News
        },
        data(){
            return{
                blogsList:[],
            }
        },
        mounted(){
            const questions = document.querySelectorAll(".question");
            const answer = document.querySelectorAll(".answer");

            questions.forEach((item,index)=>{
                item.addEventListener("click",()=>{
                    answer[index].classList.toggle("inactive")
                })
            })
        },
        async created(){
            try{
                this.blogsList = await BlogService.getAllBlogs()
            }catch(err){
                console.log(err)
            }
        }
    }
</script>
<style scoped src="./../assets/css/knowhow.css">
</style>