<template>
    <button class="logout" @click="logout">Logout</button>
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
                    <td><input type="text" name="newUname" v-model="newUname" placeholder="Add username"></td>
                    <td><input type="text" name="newPassword" v-model="newFname" placeholder="Add First name"></td>
                    <td><input type="text" name="newFname" v-model="newLname" placeholder="Add Lastname"></td>
                    <td><input type="text" name="newLname" v-model="newPass" placeholder="Add password"></td>
                    <td><button @click="addUser">Add</button></td>
                </tr>
           </table>
        </div>
    </div>
    <div class="deleteModal">
        <span class="delete" @click="deleteBlog">Delete</span>
    </div>
    <div class="blog-section">
        <h1>Blogs</h1>
        <router-link to="/admin/dashboard/blog-editor?mode=add"><button class="addBlog">Add blog</button></router-link> 
        <div class="blogs-cont">
           <BlogsComp v-for="(blogs,index) in blogsList" :key="blogs" :title="blogs.blog_name" :description="blogs.blog_description" :link="`/admin/dashboard/blog-editor?mode=insert&id=${blogs.blog_id}`" button-text="Edit" class="blog" @click="showDelete(blogs.blog_id,index)"/>
        </div>
    </div>
</template>
<script>
    
    import BlogService from '@/BlogService'
import UserService from '@/UserService'
    import BlogsComp from '../components/blogs-component.vue'
    
    export default{
        name:"Dashboard-page",
        components:{
            BlogsComp
        },
        data(){
            return{
                usersList:[],
                newUname:"",
                newPass:"",
                newFname:"",
                newLname:"",
                blogsList:[],
                blog_id:"",
            }
        },
        beforeCreate(){
            if(sessionStorage.getItem("loggedIn")==null){
                location.href = "/admin"
        }
        },
        async created(){
            try{
                this.usersList = await UserService.getAllUsers();
                this.blogsList = await BlogService.getAllBlogs()
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
            },
            logout(){
                sessionStorage.removeItem('loggedIn');
                location.href= '/admin'
            },
            showDelete(id,index){
                const deleteModal = document.querySelector(".deleteModal")
                const blog = document.querySelectorAll(".blog")[index];

                const x = window.scrollX + blog.getBoundingClientRect().right;
                const y = window.scrollY + blog.getBoundingClientRect().top;

                deleteModal.style.top = y+"px";
                deleteModal.style.left = x+5+"px"

                deleteModal.style.display="flex";
                this.blog_id = id
            },
            async deleteBlog(){
                    const deleteModal = document.querySelector(".deleteModal")
                    await BlogService.deleteBlog(this.blog_id);
                    this.blogsList = await BlogService.getAllBlogs();
                    deleteModal.style.display = "none";
            }
        },
        
    }
    document.addEventListener("click",(e)=>{
        if(e.target.classList[0]=="blogs"){
            //pass
        }else{
            try{
                document.querySelector(".deleteModal").style.display="none"
            }
            catch(err){
                // pass
            }
        }
    })
</script>
<style scoped src="../assets/css/dashboard.css">
 
</style>