<template>
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
    z-index: 999999999;
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

</style>
