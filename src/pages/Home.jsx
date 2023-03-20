import {useState, useEffect} from 'react'

export default function Home(){
    const [post,setPost]= useState([]) 
    
    const fetching= async function(){
        try{
            const response= await fetch('http://localhost:5000/blog')
            const data = await response.json()
            setPost(data.blogs)
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{  
        fetching()
    }, [])

    return(
        <>
            {post.map((item, index) => {
                return(
                    <div key={index}>
                        <h1>{item.title}</h1>
                        <p>{item.body}</p>
                    </div>
                )
            })}

        </>
    )
    
}