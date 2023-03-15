import {useState, useEffect} from 'react'

export default function Signup(){
    const [info,setInfo]=useState({
        email :"", 
        displayName :"",
        username :"",
        password :""
    })

    const changeHandler= (e) => {
        setInfo({...info,[e.target.name]:e.target.value})
    }

    const submit= async (e) => {
        e.preventDefault()
        try{
            const response=await fetch("https://localhost:4000/signup", {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
            body: {info},
          })
          const res=await response.json()
          console.log(res)
        }
        catch(e){
            console.log(e)
        }
    }

    return(
        <>
            <form>
                <input type="email" name="email" value={info.email} onChange={changeHandler} />
                <input type="text" name="displayName" value={info.displayName} onChange={changeHandler} />
                <input type="text" name="username" value={info.username} onChange={changeHandler} />
                <input type="password" name="password" value={info.password} onChange={changeHandler} />
                <input type="submit" name="submit" onChange={submit}/>
            </form>
        </>
    )
}