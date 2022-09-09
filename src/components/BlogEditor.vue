<template>
    <div class="blogEditor-cont">
        <input type="text" name="blog-name" class="blog-name" placeholder="Blog Name" v-model="blogName">
        <textarea name="blog-body" class="blog-body" v-model="blogBody">

        </textarea>
        <div class="buttons">
            <button class="addBlog" @click="addBlog">Save Blog</button>
            <button class="updateBlog" @click="updateBlog">Update Blog</button>
        </div>
    </div>
</template>
<script>
    import BlogService from '@/BlogService';
    export default{
        name:"blogEditor-page",
        async mounted(){
            const addBlog = document.querySelector(".addBlog")
            const updateBlog = document.querySelector(".updateBlog")
            // const blogBody_field = document.querySelector(".blog-body")
            // const blogName_field = document.querySelector(".blog-name")
            if(this.$route.query.mode == "add"){
                addBlog.style.display = "block";
                updateBlog.style.display = "none";
            }
            else if(this.$route.query.mode == "insert"){
                const id = this.$route.query.id;
                addBlog.style.display = "none";
                updateBlog.style.display = "block";
                this.blogList = (await BlogService.getBlog(id))[0]

                this.blogBody = this.blogList.blog_body;
                this.blogName = this.blogList.blog_name;
            }
        },
        data(){
            return {
                blogName: "",
                blogBody: "",
                blogList: ""
            }
        },
        methods:{
            async addBlog(){
                if(this.blogName!=""&&this.blogBody!=""){
                    await BlogService.addBlog(Date.now(),this.blogName,this.blogBody.substring(0,125)+"...",this.blogBody,"/")
                    document.location = "/admin/dashboard"
                }
            },
            async updateBlog(){
                const id = this.$route.query.id;
                await BlogService.updateBlog(id,this.blogName,this.blogBody.substring(0,125)+"...",this.blogBody,"/")
                document.location = "/admin/dashboard"
            }
        }
    }
</script>
<style scoped>
    .blogEditor-cont{
        display:flex;
        flex-direction: column;
        gap:1vw;
        width:90vw;
        margin:2vw auto;
    }
    .blog-name,.blog-body{
        padding:.5vw;
    }
    
    .blog-body{
        height: 80vh;
    }
    .buttons{
        display: flex;
        gap:.5vw
    }

    .addBlog,.updateBlog{
        background-color: #D41539;
        color: white;
        padding:.5vw;
        border:none;
        border-radius: 5px;
    }
</style>