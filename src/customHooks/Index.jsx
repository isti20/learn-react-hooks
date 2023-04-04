import { useState } from "react"
import { UseToggle } from "./UseToggle";

const Hooks = () => {
    let [label, setLabel] = useState('ON');
    let [lampu, setLampu] = UseToggle();

    const style = {
        backgroundColor: lampu ? 'yellow' : 'black',
        textAlign: 'center',
        height: '400px',
        width: '400px'
    }

    const saklar = () => {
        setLampu(!lampu);
        setLabel(e => {
            if (e === 'ON') {
                return 'OFF'
            }
            return 'ON'
        })
    }
    return (
        <div style={style}>
            <button onClick={saklar}>{label}</button>
        </div>
    )
}

export default Hooks