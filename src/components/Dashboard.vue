<template>
    <div class="users-section">
        <h1>Users</h1>
        <div class="user-cont">
           <table class="user-table">
                <tr>
                    <th>Username</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Password</th>
                </tr>
                <tr class="data" v-for="user in usersList" :key="user">
                    <td>{{user.username}}</td>
                    <td>{{user.first_name}}</td>
                    <td>{{user.last_name}}</td>
                    <td>{{user.password}}</td>
                    <td class="buttons" @click="deleteUser(user.username)"><button>delete</button></td>
                </tr>
                <tr class="insert">
                    <td><input type="text" name="newUname" v-model="newUname"></td>
                    <td><input type="text" name="newPassword" v-model="newFname"></td>
                    <td><input type="text" name="newFname" v-model="newLname"></td>
                    <td><input type="text" name="newLname" v-model="newPass"></td>
                    <td><button @click="addUser">Add</button></td>
                </tr>
           </table>
        </div>
    </div>
</template>
<script>
    import UserService from '@/UserService'
    export default{
        name:"Dashboard-page",
        data(){
            return{
                usersList:[],
                newUname:"",
                newPass:"",
                newFname:"",
                newLname:"",
            }
        },
        async created(){
            try{
                this.usersList = await UserService.getAllUsers();
            }catch(err){
                console.log(err)
            }
        },
        methods:{
            async addUser(){
                if(this.newFname!=""&&this.newLname!=""&&this.newPass!=""&&this.newUname!=""){
                    await UserService.addUser(this.newUname,this.newPass,this.newFname,this.newLname);
                    this.usersList = await UserService.getAllUsers();
                    this.newUname = "";
                    this.newLname = "";
                    this.newFname = "";
                    this.newPass = "";
                }
            },
            async deleteUser(id){
                await UserService.deleteUser(id);
                this.usersList = await UserService.getAllUsers();
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
    .user-cont{
        width: 80%;
        margin: 2vw auto;
    }
    .users-section{
        padding:1vw;
    }
   .user-table{
    width: 100%;
    border-collapse: collapse;
   }
   .user-table td{
    text-align: center;
    padding:.7vw
   }
   .user-table input{
        border-bottom: 1px solid var(--gray);
        border-width: 0 0 1px;
        width: 90%;
        outline: none;
        padding:.5vw
   }
   .user-table button{
        box-sizing: border-box;
        padding:.5vw 2vw;
        border:none;
        background-color: var(--red);
        color:white;
        border-radius: 5px;
        cursor: pointer;
   }
   .data:hover{
    background-color: #D415393A;
   }

   .buttons{
    transform: scaleX(0);
    transform-origin: left;
    transition: .2s ease-in;
   }
   .data:hover .buttons{
        transform: scaleX(1);
   }
   
</style>