import {useState, useEffect} from 'react'

export default function Home(){
    const [post,setPost]= useState([]) 

    const fetching= async ()=> {
        try{
            const res = await fetch("http://localhost:5000/blog")
            const blogs= res.json 
            setPost(blogs)
            console.log(blogs)
        }
        catch(e){
            console.log(e)
        }
    }


    return(
        <button onClick={fetching}>YO</button>
    )
    
}