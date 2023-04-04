import { useEffect, useState } from "react"

const DepedencyState = () => {
    let [text, setText] = useState('');

    useEffect(() => {
        localStorage.setItem('text', text);
        console.log("Nilai state text berubah")
    }, [text])

    return (
        <div>
            <textarea cols="30" rows="11" onChange={(e) => setText(e.target.value)}/>
        </div>
    )
}

export default DepedencyState