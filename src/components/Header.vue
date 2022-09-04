<template>

<!-- popups -->
<div class="services-drp dropdown inactive-drp">
  <ul class="drp-list">
    <li class="items"><a href="/products?prodName=application-testing">Application Testing</a></li>
    <li class="items"><a href="/products?prodName=infrastructure-testing">Infrastructure Testing</a></li>
    <li class="items"><a href="/products?prodName=social-engineering">Social Engineering</a></li>
    <li class="items"><a href="/products?prodName=accreditation">Accreditation</a></li>
    <li class="items"><a href="/products?prodName=subscription-services">Subscription Services</a></li>
  </ul>
</div>

<div class="partners-drp dropdown inactive-drp">
  <ul class="drp-list">
    <li class="items"><a href="/partners">Become a Partner</a></li>
  </ul>
</div>

<div class="knowHow-drp dropdown inactive-drp">
  <ul class="drp-list">
    <li class="items"><a href="/blogs">Blog</a></li>
    <li class="items"><a href="/news">Cybersecurity News</a></li>
    <li class="items"><a href="/know-how#newsletter">Subsribe to our Newsletter</a></li>
    <li class="items"><a href="">Glossary</a></li>
    <li class="items"><a href="">Site Map</a></li>
  </ul>
</div>

<div class="learnMore-drp dropdown inactive-drp">
  <ul class="drp-list">
    <li class="items"><a href="/about-us">About us</a></li>
    <li class="items"><a href="/careers">Careers</a></li>
  </ul>
</div>

<div class="information-drp dropdown inactive-drp">
  <ul class="drp-list">
    <li class="items"><a href="/get-in-touch">Get in touch</a></li>
    <li class="items"><a href="">Privacy Policy</a></li>
    <li class="items"><a href="">Tems & Condition</a></li>
  </ul>
</div>


  <div class="header" id="header">
    <a href="/"><img src="./../assets/RTPlogo.png" alt="" class="logo"></a>
    <div class="nav-items-cont">
      <ul class="nav-items">
        <a href="/services">
          <li class="items">Services 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
          </svg>
          </li>
        </a>

        <a href="partners">
          <li class="items">Partners 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
          </svg>
          </li>
        </a>

        <a href="know-how">
          <li class="items">Know How 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
          </svg>
          </li>
        </a>

        <a href="#">
          <li class="items">Learn More 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
          </svg>
          </li>
        </a>

        <a href="#">
          <li class="items">Information 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
          </svg>
          </li>
        </a>

        <a href="#">
          <li class="items">Shop 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
          </svg>
          </li>
        </a>
      </ul>
    </div>
    <!-- nav-items-cont -->
  </div>
  <!-- Header -->
</template>

<script>
var prevScroll = window.pageYOffset;
export default {
  name: 'Header-comp',
  mounted(){
    window.addEventListener("scroll",this.headerScroll,true);


    const dropdowns = document.querySelectorAll(".dropdown");
    const headerItems = document.querySelectorAll(".nav-items .items")


    window.addEventListener("load",()=>{
      headerItems.forEach((element,index)=>{
        if(index!=5){
          var x = window.scrollX + element.getBoundingClientRect().left-(element.offsetWidth/2);
          var y = window.scrollY + element.getBoundingClientRect().top+(element.offsetHeight);
          dropdowns[index].style.top = y+"px";
          dropdowns[index].style.left = x+"px"
        }
      })
    })
    
  

    headerItems.forEach((element,index)=>{
      if(index!=5){
        element.addEventListener("mouseover",()=>{
          if(document.querySelector(".active-drp")!=null){
            document.querySelector(".active-drp").classList.remove("active-drp")
          }
          dropdowns[index].classList.add("active-drp")
        })

        element.addEventListener("mouseleave",()=>{
          dropdowns[index].classList.remove("active-drp")
        })
      }
    })

    dropdowns.forEach((element)=>{
      element.addEventListener("mouseleave",()=>{
        element.classList.remove("active-drp")
      })
      element.addEventListener("mouseover",()=>{
        element.classList.add("active-drp")
      })
    })
  },
  methods:{
    headerScroll:function(){
      var currentScroll = window.pageYOffset;
      if(prevScroll > currentScroll){
        document.getElementById("header").style.top = "0px";
        document.getElementById("header").style.backgroundColor = "white"
        document.getElementById("header").style.boxShadow = "0px 2px 5px 3px rgba(0,0,0,.25)"
      }
      else{
        document.getElementById("header").style.top = "-13vh"
        document.getElementById("header").style.boxShadow = "none"
      }
      if(currentScroll == 0){
        document.getElementById("header").style.backgroundColor = "rgba(255,255,255,0)"
        document.getElementById("header").style.boxShadow = "none"

      }
      prevScroll = currentScroll
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
  .header{
    width: 100vw;
    height: 13vh;
    /* background-color: black; */
    position: fixed;
    transition: 0.3s;
    top:0;
    display:flex;
    align-items: center;  
    z-index: 99999999;
  }
  .logo{
    width:16em;
    margin-left: 3em;
  }
  .nav-items{
    /* display: flex;
    gap:3vw;*/
    margin-left: 3vw; 
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    width:70vw
  }
  .nav-items a{
    text-decoration: none;
    color:#4A494A;
    width: fit-content;
  }
  .items{
    display:inline-block;
    font-weight: 600;
  }
  .nav-items a:hover{
    color: #d41539;
  }
  .items svg{
    height: 1.4em;
    width: 1.4em;
    vertical-align: middle;
    transform:scale(.6)
  }


  .dropdown{
    background-color: white;
    width:15vw;
    position: absolute;
    border-radius: 10px;
    padding:.5vw 0;
    z-index: 999999999999999;
    box-shadow: #4A494A3A 3px 3px 10px 1px;
    padding-bottom: .5vw;
    display: none;
  }
  .dropdown a{
    text-decoration: none;
    color: #4A494A;
  }
  .dropdown .drp-list{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .drp-list .items{
    width: 100%;
    padding:.4vw 0;
    text-align: center;
  }
  .drp-list .items:hover{
    background-color: #4A494A3A;
  }

  .active-drp{
    display:block
  }

</style>
