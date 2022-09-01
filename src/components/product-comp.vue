<template>
    <div class="product-comp">
        <div class="product-icon" :class="direction">
            
        </div>
        <div class="product-description" :class="direction">
            <p class="description"> consectetur adipisicing elit. Commodi perspiciatis dignissimos obcaecati non nam? Sapiente quaerat rerum id beatae dolore amet? Nisi quibusdam facere ipsam soluta repellendus debitis amet quisquam?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, quaerat? Enim quasi voluptatum nemo minima iste consequuntur dolores doloremque debitis explicabo, accusantium optio iure architecto facilis quisquam vel temporibus vitae?</p>
        </div>
    </div>
</template>
<script>
    export default{
        name:"product-component",
        props:{
            direction:String,
        }
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