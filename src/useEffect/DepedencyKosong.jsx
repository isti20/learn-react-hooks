import { useEffect, useState } from "react"

const DepedencyKosong = () => {
    let [text, setText] = useState('');
    let [seconds, setSeconds] = useState(0)

    useEffect(() => {
        localStorage.setItem('text', text);
        console.log("Test")
    }, [])

    useEffect(() => {
        console.log('Interval waktu')
        setInterval(() => {
            setSeconds(s => s + 1);
        }, 1000)
    }, [])

    return (
        <div>
            <textarea cols="30" rows="11" onChange={(e) => setText(e.target.value)}/>
            <div>Waktu: {Math.floor(seconds / 60)} Menit {seconds % 60} Detik</div>
        </div>
    )
}

export default DepedencyKosong