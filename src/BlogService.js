import axios from "axios";

const url = '/api/blogs/';
class BlogService{
    static async getAllBlogs(){
        const data = (await axios.get(url)).data

        return data
    }
    static async getBlog(blog_id){
        const data = (await axios.get(`${url}${blog_id}`)).data

        return data
    }

    static addBlog(blog_id,blog_name,blog_description,blog_body,blog_link){
        return axios.post(url,{
            blog_id,
            blog_name,
            blog_description,
            blog_body,
            blog_link,
        })
    }
    static deleteBlog(blog_id){
        return axios.delete(`${url}${blog_id}`)
    }
    
    static updateBlog(blog_id,blog_name,blog_description,blog_body){
        return axios.put(`${url}${blog_id}`,{
            blog_name,
            blog_description,
            blog_body,
        })
    }
    
}

export default BlogService;