<template>
  <Header/>
  <LandingPage/>
  <!-- <div class="benefits">
    <div class="benefits-bg">
      <span class="benefits-title">Benefits of hiring <span class="redText">Red Team Partners</span></span>
      <div class="benefits-cont">
        <Bullet benefit-text="Identify Vulnerabilities in applications and systems" benefit-number="1"/>
        <Bullet benefit-text="Identify Vulnerabilities in applications and systems" benefit-number="3"/>
        <Bullet benefit-text="Identify Vulnerabilities in applications and systems" benefit-number="2"/>
        <Bullet benefit-text="Identify Vulnerabilities in applications and systems" benefit-number="4"/>
      </div>  
    </div>
  </div> -->
</template>

<script>
import Header from './components/Header.vue'
import LandingPage from './components/LandingPage.vue'
// import Bullet from './components/Bullet.vue'


export default {
  name: 'App',
  components: {
    Header,
    LandingPage,
    // Bullet,
}
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  margin:0;
  padding:0;
  box-sizing: border-box;
}
body{
  margin: 0 !important;
}
.redText{
  color:#D41539
}
.circles-logo{
  width: fit-content;
  background-color: #D41539;
  border-radius: 50%;
  padding:1.1em
}
.service-process{
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  background-color: #fff9f9;
}
.service-process-title{
  text-align: center;  
  color:#4A494A;
}
.service-process .outer-cont{
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 6vw;
  margin-top: 4em;
}
.service-process .outer-cont .circles-logo svg{
  fill: white;
  width: 3vw;
  height: 3vw;
}
.service-process .inner-cont{
  display: flex;
  flex-direction: column;
  gap: 1vh;
  justify-content: center;
  align-items: center;
  transition: .3s;
}
.service-process .inner-cont:hover{
  transform: scale(1.1);
}
.step{
text-align: center;
font-size: 1.3vw;
font-weight: 500;
}
.benefits{
  display:flex;
  align-items: center;
  height: 100vh;

}
.benefits-title{
  font-size: 2vw;
  font-weight: 500;
  position: absolute;
  top:3vw;
  color:#4A494A
}
.benefits-bg{
  height: 75vh;
  width: 100%;
  background: #d1d1d1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
.benefits-cont{
  display: flex;
  width: 85%;
  margin-top: 4vw;
  flex-wrap: wrap;
  row-gap: 8vw;
  column-gap: 8vw;
  justify-content: center;
}
</style>
