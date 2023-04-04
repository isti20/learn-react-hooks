import { useEffect, useState } from "react"

const TanpaDepedency = () => {
    let [text, setText] = useState('');

    useEffect(() => {
        localStorage.setItem('text', text);
        console.log("Sincronisasi")
    })

    return (
        <div>
            <textarea cols="30" rows="11" onChange={(e) => setText(e.target.value)}/>
        </div>
    )
}

export default TanpaDepedency