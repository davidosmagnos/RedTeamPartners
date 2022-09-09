<template>
    <div class="blogs">
        <a :href="link"><button class="readMore" type="submit">{{buttonText}}</button></a>
        <div class="blog-textContent">
        <h4 class="blog-title">
            {{title}}
        </h4>
        <p class="blog-description">{{description}}</p>
        </div>
    </div>
</template>
<script>
    export default{
        name:"Blog-comp",
        props:{
            link:String,
            title:String,
            description:String,
            buttonText:String
        }
    }
</script>
<style scoped>
    :root{
    --red:#D41539;
    --gray:#4A494A;
    --line:#4A494A3A;
}
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
    .blogs{
        height: 20vw;
        width: 15vw;
        background-color: white;
        box-shadow: 4px 4px 10px 5px var(--line) ;
        border-radius: 10px;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap:2vw;
        padding:.5vw;
        overflow: hidden;
    }
    .readMore{
        background-color: var(--red);
        padding:.5vw;
        border:none;
        color:white;
        font-weight: 500;
        width:10vw;
        border-radius: 10px;
        cursor: pointer;
    }

    .blog-title{
        text-align: center;
    }
    .blog-description{
        font-weight: 400;
    }
  
</style>