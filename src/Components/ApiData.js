import { useEffect, useState } from "react"

const APiData = ()=>{

    const [users, setUsers] = useState([])

    useEffect(()=>{
         const getData = async ()=>{
            const userData = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await userData.json()
            setUsers(data)
            console.log(users)
         }
         getData()
    }, [])
    //console.log("users------->", users)
    return(
        <>
            <ul>
            {
                users.length>0 ? users.map((item)=><li style={{listStyle:"none"}}>{item.title}</li>)
                :
                <p>Loading............</p>
            }
            </ul>
        </>
    )
}
export default APiData