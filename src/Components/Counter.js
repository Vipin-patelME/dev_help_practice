import { useState } from "react"

const Counter = ()=>{

    let [count, setCount] = useState(0)
    const calculate = (e)=>{
        let operation = e.target.value
        switch (operation) {
            case "ADD":
                setCount (count+1)
                break;
            case "RES":
                setCount (0)
                break;
            case "SUB":
                setCount (count-1)
                break;
            default:
                break;
        }
    }

    return(
        <>
            <h1>This Is A Normal Counter Made By Vipin</h1>
            <h1>{count}</h1>
            <div>
                <button value={"ADD"} onClick={calculate}>Increase</button>
                <button value={"RES"} onClick={calculate}>Reset</button>
                <button value={"SUB"} onClick={calculate}>Decrease</button>
            </div>
        </>
    )
}

export default Counter