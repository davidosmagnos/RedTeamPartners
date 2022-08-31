<template>
    <Header/>
    <div class="landingPage-careers">
        <div class="right">
            <div class="logo-wrapper">
                <img src="./../assets/RTPlogo.png" alt="" class="company-logo">
            </div>
            <div class="textContent">
                <h1 class="tagline-careers">Red Team Partners is growing,<br><span class="redText">Join us!</span></h1>
                <span class="subtext">What we do?</span>
                <span class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, ut ab tempore repudiandae, et sapiente necessitatibus aspernatur commodi similique cumque, nihil vero error laudantium nobis sit dignissimos architecto sint voluptatum.
                Obcaecati, cum, fuga nostrum repellat magnam ipsum maxime alias laudantium nam possimus nobis molestias.</span>
            </div>
        </div>
        <div class="left">
            <div class="careers-bg"></div>
        </div>
    </div>
    <div class="jobOpenings">
        <div class="jobs-wrapper">
            <h1 class="jobs-title">Job Openings</h1>
            <input type="search" name="jobSearch" id="jobSearch" placeholder="Seach jobs...">
            <div class="openings-table">
                <table class="jobs">
                    <tr>
                        <th>Job Title</th>
                        <th>Job Description</th>
                    </tr>
                    <tr class="job-details">
                        <td>Research Assistant</td>
                        <td>supports research projects by conducting literature searches, data management and maintaining files for project Researchers</td>
                    </tr>
                    <tr class="job-details">
                        <td>Research Assistant</td>
                        <td>supports research projects by conducting literature searches, data management and maintaining files for project Researchers</td>
                    </tr>
                    <tr class="job-details">
                        <td>Research Assistant</td>
                        <td>supports research projects by conducting literature searches, data management and maintaining files for project Researchers</td>
                    </tr>
                    <tr class="job-details">
                        <td>Research Assistant</td>
                        <td>supports research projects by conducting literature searches, data management and maintaining files for project Researchers</td>
                    </tr>
                </table>
            </div>
            <button class="loadMore">Load More</button>
        </div>
    </div>

    <div class="bePartOfUs">
        <div class="right">
        <div class="form-intro">
            <h1 class="title">Be part of <span class="redText">us!</span></h1> 
            <p class="text">Grow your business by implementing and selling top-class solutions.
            Earn higher margins and build a recurring revenue stream.</p>
        </div>
        <div class="main-form">
            <form method="get" class="careers-mainForm">
                <div class="fullName">
                    <input type="text" name="fname" id="fname" placeholder="First name" class="text-field">
                    <input type="text" name="lname" id="lname" placeholder="Last name" class="text-field">
                </div>
                <input type="text" name="role" id="role" placeholder="Role" class="text-field">

                <div class="uploads">
                    <form action="" class="uploadFiles">
                        <label for="cvUpload" class='fileUp'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16">
                                <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
                            </svg>
                            Attatch CV
                            <input type="file" name="cvUpload" id="cvUpload">
                        </label>
                        <label for="porfolioUpload" class='fileUp'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16">
                                <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
                            </svg>
                            Attatch Portfolio
                            <input type="file" name="porfolioUpload" id="porfolioUpload">
                        </label>
                    </form>
                </div>
                <button class="submitForm">Submit Form</button>
            </form>
        </div>
    </div>
    <div class="left">
        <div class="careers-bg1">
            
        </div>
    </div>
    </div>
    <PartnerSlide/>
    <Footer/>
</template>
<script>
    import Header from "./Header.vue";
    import Footer from "./Footer.vue"
    import PartnerSlide from "./PartnerSlide.vue";
    export default{
        name:"Careers-page",
        components:{
            Header,
            Footer,
            PartnerSlide
        }
    }
</script>
<style scoped src="./../assets/css/careers.css">
    
</style>