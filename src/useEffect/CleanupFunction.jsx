import { useEffect, useState } from "react"

const CleanupFunction = () => {
    let [text, setText] = useState('');

    useEffect(() => {
        localStorage.setItem('text', text);
        console.log("Test")

        return(() => {
            console.log('Clean up')
        });

    }, [text])

    return (
        <div>
            <textarea cols="30" rows="11" onChange={(e) => setText(e.target.value)}/>
        </div>
    )
}

export default CleanupFunction