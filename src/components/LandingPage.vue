<template>
<div class="main-cont">
    <div class="headerVideo">
    <video src="./../assets/video.mp4" autoplay loop playsinline disablePictureInPicture></video>
</div>
    <div class="home-page">
        <div class="inner-cont">
            <h1 class="tagline">Cybersecurity &#8211;<br><span class="redText">Simplified!</span></h1>
            <p class="subText">Manage the Information. Manage the World. Get Ready. Make it Simple. Red Team Partners.Your Partner in Cyberworld.</p>
            <button class="action-button">Book a call</button>
        </div>
    </div>
</div>
</template>
<script>
export default{
    name: "landing-page",
};

</script>

<style scoped>
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
    font-size: 3.5vw;
    text-align: right;
}
.redText{
    color:#D41539;
}
.subText{
    font-size: 1.5vw;
    width:30vw;
    text-align: right;
}
.inner-cont{
    margin-right: 3vw;
    display: flex;
    flex-direction: column;
    gap:3vw;
    padding: 0 1.5em;
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
</style>