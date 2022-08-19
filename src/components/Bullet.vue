<template>
<div class="bullet-cont">
    <div class="bullet-circle">
        <span class="bullet-num">{{benefitNumber}}</span>
    </div>
    <span class="benefit-text">{{benefitText}}</span>
</div>
</template>

<script>
    export default{
        name:"Bullet-component",
        props:{
            benefitNumber:String,
            benefitText:String
        }
    }
</script>


<style scoped>
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
.bullet-circle{
    background-color: none;
    border: 4px solid #D41539;
    display: flex;
    border-radius: 50%;
    width: 3vw;
    height: 3vw;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    margin: 0!important;
}

.benefit-text{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5vw;
    margin-left: 1.5vw;
    width:25vw;
}
.bullet-cont{
    margin:0;
    display:flex;
    flex-direction: row;
}
</style>