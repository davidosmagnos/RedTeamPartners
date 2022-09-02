<template>
    <div class="product-comp" :class="direction">
        <a :href="link"><div class="product-icon">
            <span class="product-name">{{prodName}}</span>
        </div></a>
        <div class="product-description">
            <p class="description">{{prodDescription}}</p>
        </div>
    </div>
</template>
<script>
    export default{
        name:"product-component",
        props:{
            direction:String,
            prodDescription:String,
            prodName:String,
            link:String,

        },
    }
</script>
<style scoped>
    :root{
    --red:#D41539;
    --gray:#4A494A;
    --line:#4A494A3A;
    }
    .product-icon{
        background-color: var(--red);
        border-radius: 10px;
        padding:.5vw;
        width: 10vw;
        height: 10vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .product-comp{
        width: 90%;
        gap:2vw;
        padding-bottom: 2vh;
        display: flex;
    }
    .product-description{
        width:75%;
        height: 10.5vw;
        border-bottom: 1px solid var(--line);
        display: flex;
        justify-content: center;
    }

    .rightDir{
        flex-direction: row-reverse;
        text-align: right;
    }

    .product-name{
        color:white;
        font-weight: 600;
    }
    
    .product-comp a{
        text-decoration: none;
    }

</style>