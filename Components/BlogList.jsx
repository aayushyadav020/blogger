import { blog_data } from '@/Assets/assets'
import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import axios from 'axios';

const BlogList = () => {

    const [menu,setMenu] = useState("All");
    const [blogs,setBlogs] = useState([]);

    const fetchBlogs = async () =>{
      const response = await axios.get('/api/blog');
      setBlogs(response.data.blogs);
      console.log(response.data.blogs);
    }

    useEffect(()=>{
      fetchBlogs();
    },[])

  return (
    <div>
      <div className='flex justify-center gap-6 my-10'>
        <button onClick={()=>setMenu('All')} className={menu==="All"?'bg-black text-white py-1 px-4 rounded-sm':""}>All</button>
        <button onClick={()=>setMenu('bhagvadgita')} className={menu==="bhagvadgita"?'bg-black text-white py-1 px-4 rounded-sm':""}>Bhagvadgita</button>
        <button onClick={()=>setMenu('Srila prabhupada')} className={menu==="Srila prabhupada"?'bg-black text-white py-1 px-4 rounded-sm':""}>Srila prabhupada</button>
        <button onClick={()=>setMenu('for neophyte')} className={menu==="for neophyte"?'bg-black text-white py-1 px-4 rounded-sm':""}>for neophyte</button>
      </div>
      <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
        {blogs.filter((item)=> menu==="All"?true:item.category===menu).map((item,index)=>{
            return <BlogItem key={index} id={item._id} image={item.image} title={item.title} description={item.description} category={item.category} />
        })}
      </div>
    </div>
  )
}

export default BlogList
