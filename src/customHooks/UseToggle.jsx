import { useState } from "react"

export const UseToggle = () => {
    const [value, setValue] = useState(false);

    return [value, setValue];
}