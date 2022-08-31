<template>
    <Header/>
  <LandingPage buttontext="<button class='action-button'>Book a call</button>" subtext="Manage the Information. Manage the World. Get Ready. Make it Simple. Red Team Partners.Your Partner in Cyberworld." tagline="<span class='bigTag'>Cybersecurity &mdash;<br><span class='redText'>Simplified!</span></span>"/>
  <PartnerSlide/>
  
  <div class="benefits">
    <div class="benefits-bg">
      <span class="benefits-title">Benefits of hiring <span class="redText">Red Team Partners</span></span>
      <div class="benefits-cont">
        <Bullet benefit-text="Identify Vulnerabilities in applications and systems" benefit-number="1"/>
        <Bullet benefit-text="Testing of systems, applications, security, and people" benefit-number="3"/>
        <Bullet benefit-text="Providing clear security objectives for your organisation" benefit-number="2"/>
        <Bullet benefit-text="Maximize entire organization's security" benefit-number="4"/>
      </div>
    </div>
  </div>

  <div class="testimonies">
    <div class="testimonies-title">
      <span class="title">To serve, simplify, and exceed your <span class="redText">Expectations</span></span>
    </div>
    <div class="testimonials-cont">
      <div class="testimonials">
        <span class="quote">
           <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8533 9.11599C11.3227 13.9523 7.13913 19.5812 6.30256 26.0029C5.00021 36 13.9404 40.8933 18.4703 36.4967C23.0002 32.1002 20.2848 26.5196 17.0047 24.9942C13.7246 23.4687 11.7187 24 12.0686 21.9616C12.4185 19.9231 17.0851 14.2713 21.1849 11.6392C21.4569 11.4079 21.5604 10.9591 21.2985 10.6187C21.1262 10.3947 20.7883 9.95557 20.2848 9.30114C19.8445 8.72888 19.4227 8.75029 18.8533 9.11599Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M38.6789 9.11599C31.1484 13.9523 26.9648 19.5812 26.1282 26.0029C24.8259 36 33.7661 40.8933 38.296 36.4967C42.8259 32.1002 40.1105 26.5196 36.8304 24.9942C33.5503 23.4687 31.5443 24 31.8943 21.9616C32.2442 19.9231 36.9108 14.2713 41.0106 11.6392C41.2826 11.4079 41.3861 10.9591 41.1241 10.6187C40.9519 10.3947 40.614 9.95557 40.1105 9.30114C39.6702 8.72888 39.2484 8.75029 38.6789 9.11599Z" fill="white"/>
          </svg>
        </span>
        <div class="testimonials-text">
          <p class="text">I  have enjoyed the entire process, good communication and easy to manage the process from my side. Getting the report so quickly and the detail was great. I will shortly be in touch to discuss further security work with RTP. Thanks.</p>
        </div>
        <div class="testimonials-author">
          <p class="author">&mdash; Global Infrastructure Manager</p>
        </div>
      </div>
      <div class="testimonials">
        <span class="quote">
            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8533 9.11599C11.3227 13.9523 7.13913 19.5812 6.30256 26.0029C5.00021 36 13.9404 40.8933 18.4703 36.4967C23.0002 32.1002 20.2848 26.5196 17.0047 24.9942C13.7246 23.4687 11.7187 24 12.0686 21.9616C12.4185 19.9231 17.0851 14.2713 21.1849 11.6392C21.4569 11.4079 21.5604 10.9591 21.2985 10.6187C21.1262 10.3947 20.7883 9.95557 20.2848 9.30114C19.8445 8.72888 19.4227 8.75029 18.8533 9.11599Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M38.6789 9.11599C31.1484 13.9523 26.9648 19.5812 26.1282 26.0029C24.8259 36 33.7661 40.8933 38.296 36.4967C42.8259 32.1002 40.1105 26.5196 36.8304 24.9942C33.5503 23.4687 31.5443 24 31.8943 21.9616C32.2442 19.9231 36.9108 14.2713 41.0106 11.6392C41.2826 11.4079 41.3861 10.9591 41.1241 10.6187C40.9519 10.3947 40.614 9.95557 40.1105 9.30114C39.6702 8.72888 39.2484 8.75029 38.6789 9.11599Z" fill="white"/>
          </svg>
        </span>
        <div class="testimonials-text">
          <p class="text">Extremely likely to recommend. Reports look detailed and give sufficient information to help resolve vulnerabilities.</p>
        </div>
        <div class="testimonials-author">
          <p class="author">&mdash; DevOps Engineer</p>
        </div>
      </div>
      <div class="testimonials">
        <span class="quote">
            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8533 9.11599C11.3227 13.9523 7.13913 19.5812 6.30256 26.0029C5.00021 36 13.9404 40.8933 18.4703 36.4967C23.0002 32.1002 20.2848 26.5196 17.0047 24.9942C13.7246 23.4687 11.7187 24 12.0686 21.9616C12.4185 19.9231 17.0851 14.2713 21.1849 11.6392C21.4569 11.4079 21.5604 10.9591 21.2985 10.6187C21.1262 10.3947 20.7883 9.95557 20.2848 9.30114C19.8445 8.72888 19.4227 8.75029 18.8533 9.11599Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M38.6789 9.11599C31.1484 13.9523 26.9648 19.5812 26.1282 26.0029C24.8259 36 33.7661 40.8933 38.296 36.4967C42.8259 32.1002 40.1105 26.5196 36.8304 24.9942C33.5503 23.4687 31.5443 24 31.8943 21.9616C32.2442 19.9231 36.9108 14.2713 41.0106 11.6392C41.2826 11.4079 41.3861 10.9591 41.1241 10.6187C40.9519 10.3947 40.614 9.95557 40.1105 9.30114C39.6702 8.72888 39.2484 8.75029 38.6789 9.11599Z" fill="white"/>
          </svg>
        </span>
        <div class="testimonials-text">
          <p class="text">Very satisfied with the report. Overall a great 5 Star Service provided by Red Team Partners. No Worst part. Whole experience from start to end was Best! I would extremely likely (10) recommend you to friends. Hopefully speak again same time next year.</p>
        </div>
        <div class="testimonials-author">
          <p class="author">&mdash; IT and Communications Manager</p>
        </div>
      </div>
    </div>
  </div>

  <div class="problem-cont">
    <div class="problems-title">
      <span class="title">The simplest way to <span class="redText">protect</span> you business.</span>
    </div>
    <div class="content">
      <div class="problem">
        <span class="redText">PROBLEM</span>
        <div class="problem-paragraph">
          We all know cybersecurity is important. But when you're a small business with limited resources, it can be tricky to know where to start. Most off-the-peg options are expensive, complex and built with big businesses in mind.<br><br>Red Team Partners is the solution
        </div>
      </div>
      <div class="technology">
        <span class="redText">TECHNOLOGY</span>
         <div class="technology-paragraph">
          Ensure your business is protected, however you work. Our software checks every device that touches your company data 24/7, identifies any problems and recommends simple, easy-to-understand fixes.
        </div>
      </div>
    </div>
    <div class="delivery">
        <span class="redText">DELIVERY</span>
        <div class="steps-cont">
          <div class="steps">
        <div class="circleSteps">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bullseye" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
            <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
          </svg>
        </div>
        Scoping stage
      </div>
      <div class="steps">
        <div class="circleSteps">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-text" viewBox="0 0 16 16">
            <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
            <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
          </svg>
        </div>
        Proposal stage
      </div>
      <div class="steps">
        <div class="circleSteps">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-check" viewBox="0 0 16 16">
            <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
          </svg>
        </div>
        Delivery stage
      </div>
      <div class="steps">
        <div class="circleSteps">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
          </svg>
        </div>
        Reporting stage
      </div>
        </div>
    </div>
  </div>

  <div class="ads">
    <div class="pic"></div>
    <h1 class="ads-texts">Red Team Partner Ads</h1>
  </div>

  <Footer/>
</template>
<script>
import Header from './Header.vue'
import LandingPage from './LandingPage.vue'
import PartnerSlide from './PartnerSlide.vue'
import Footer from './Footer.vue'
import Bullet from './Bullet.vue'

export default{
    name:"IndexPage",
    components:{
        Header,
        LandingPage,
        PartnerSlide,
        Footer,
        Bullet
    },
    mounted(){
      const quote = document.querySelectorAll(".quote");
      const testiomonies = document.querySelectorAll(".testimonials");

      testiomonies.forEach((item,index)=>{
        item.addEventListener("mouseover",()=>{
            quote[index].classList.add("hithere")
        })
        item.addEventListener("mouseout",()=>{
            quote[index].classList.remove("hithere")
        })


      })
    }
}
</script>
<style scoped src="./../assets/css/app.css">
</style>