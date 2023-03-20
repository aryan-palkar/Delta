import { useState } from 'react'

export default function Signup(){
    const [info,setInfo]=useState({
        email :"", 
        displayName :"",
        username :"",
        password :""
    })

    const [output, setOutput] = useState("")

    const changeHandler= (e) => {
        setInfo({...info, [e.target.name]:e.target.value})
    }

    const submit = async (e) => {
        e.preventDefault()
        try{
            const response = await fetch("http://localhost:4000/signup", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(info)
            })
            const res = await response.text()
            setOutput(res)
        }
        catch(e){
            setOutput(e)
        }
    }

    return(
        <>
            <form>
                <input type="email" name="email" value={info.email} onChange={changeHandler} />
                <input type="text" name="displayName" value={info.displayName} onChange={changeHandler} />
                <input type="text" name="username" value={info.username} onChange={changeHandler} />
                <input type="password" name="password" value={info.password} onChange={changeHandler} />
                <input type="submit" name="submit" onClick={submit}/>
            </form>
            <div>
                {output && <p>{output}</p>}
                {output && <button onClick={() => setOutput("")}>X</button>}
            </div>
            
        </>
    )
}