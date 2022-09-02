<template>
    <div class="product-comp">
        <div class="product-icon" :class="direction">
            <span class="product-name">{{prodName}}</span>
        </div>
        <div class="product-description" :class="direction">
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
            prodName:String

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
    }
    .product-comp{
        width: 70%;
        gap:2vw;
        padding-bottom: 2vh;
    }
    .product-description{
        width:60%;
        height: 10.5vw;
        border-bottom: 1px solid var(--line);
    }

    .floatRight{
        float: right;
        margin-left:1vw;
        text-align: right;
    }
    .floatLeft{
        float:left;
        margin-right:1vw;
    }
</style>