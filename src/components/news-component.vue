<template>
     <a :href="link"><div class="news">
        <div class="image">
            <img :src="require(`./../assets/${img}`)" alt="">
        </div>
        <div class="news-textContent">
            <h4 class="news-title">
                {{title}}
            </h4>
            <p class="news-description">{{description}}</p>
        </div>
    </div></a>
</template>
<script>
    export default{
        name:"News-comp",
        props:{
            title:String,
            description:String,
            link:String,
            img:String
        }
    }
</script>
<style scoped>
    .news{
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
        overflow: hidden;
        padding-bottom:2vw;
        position: relative;
    }

    .image img{
        width:100%;
        height: auto;
        border-radius: 5px;
        position: relative;

    }

    .news-textContent{
        width: 90%;
    }
    .news-title{
        text-align: center;
        font-size: 1vw;
    }
    .news-description{
        font-weight: 400;
        font-size: 1vw;
    }

    a{
        text-decoration: none;
        color:black;
    }
</style>