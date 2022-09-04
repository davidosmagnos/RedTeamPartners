<template>
    <div class="container">
        <div class="login-cont">
            <img src="./../assets/RTPlogo.png">
            <div class="login-form">
                <input type="text" placeholder="Username" v-model="username" required>
                <input type="password" placeholder="Password" v-model="password">
                <button @click="login" type="submit">Login</button>
            </div>
        </div>
    </div>
</template>
<script>
    import UserService from "../UserService.js"
    export default{
        name:"AdminPage",
        data(){
            return{
                userDets:[],
                username:"",
                password:""
            }
        },
        methods:{
            async login(){
                if(this.username != ""){
                    const user = await UserService.getUser(this.username);
                    if(user.length === 0){
                        alert("fuck")
                    }else if(user.length > 0){
                        if(user[0].password == this.password){
                            alert("logged in")
                        }else{
                            alert("incorrect credentials")
                        }
                    }

                }
            }
        }
    }
</script>
<style scoped>
    :root{
    --red:#D41539;
    --gray:#4A494A;
    --line:#4A494A3A;
}
    .container{
        display: flex;
        height: 100vh;
        background-color: rgb(255, 240, 240);
        justify-content: center;
        align-items: center;
    }
    .login-cont{
        display: flex;
        flex-direction: column;
        gap:2vw;
        width: 40vw;
        height: 30vw;
        background-color: white;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        box-shadow: 5px 5px 10px 2px var(--line);
    }
    .login-cont img{
        width:40%;
        height: auto;
    }
    .login-cont .login-form{
        display: flex;
        gap:.5vw;
        flex-direction: column;
        width: 70%;
    }

    .login-form input{
        padding:.5vw;
    }
    .login-form button{
        background-color: var(--red);
        color: white;
        padding:.5vw;
        border: none;
        border-radius: 5px;
    }
</style>