<template>
<div class="main-cont">
    <div class="headerVideo">
    <video src="./../assets/video.mp4" autoplay loop playsinline disablePictureInPicture muted></video>
</div>
    <div class="home-page">
        <div class="inner-cont">
            <p class="welcome">WELCOME TO RED TEAM PARTNERS</p>
            <h1 class="tagline"><span v-html="tagline"></span></h1>
            <p class="subText">{{subtext}}</p>
            <span v-html="buttontext" class="button-span"></span>
        </div>
    </div>
</div>
</template>
<script>
export default{
    name: "landing-page",
    props:{
        tagline:String,
        subtext:String,
        buttontext:String
    }
};

</script>

<style>
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
.main-cont{
    display: flex;
}
.home-page{
    height: 100vh;
    background-position: right;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.tagline{
    color:#4A494A;
    text-align: right;
    font-weight: 600;
    
}
.smallTag{
    font-size: 2.5vw;
}
.bigTag{
    font-size: 3.5vw;
}
.EbigTag{
    font-size: 5vw;
}
.welcome{
    text-align: right;
}
.subText{
    font-size: 1.2vw;
    width:30vw;
    text-align: right;
    margin-left: auto;
}
.inner-cont{
    margin-right: 3vw;
    display: flex;
    flex-direction: column;
    gap:3vw;
    padding: 0 1.5em;
    width:35vw
}
.action-button{
    background-color: #D41539;
    color: white;
    width: 20vw;
    border: none;
    padding: .5em;
    border-radius: 10px;
    font-size: 1.3vw;
    font-weight: 600;
    cursor: pointer;
    margin-left: auto;
    
}
.headerVideo{
    height: 100vh;
    width:70vw ;
    display: flex;
}
.headerVideo video{
    height: auto;
    width: 95%;
    margin-left: auto;
}
.button-span{
    display: block;
    margin-left: auto;
}
</style>