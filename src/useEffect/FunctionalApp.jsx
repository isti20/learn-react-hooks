import React, { useState, useEffect } from "react"

function FunctionalApp({level}) {
    const [count, setCount] = useState(0);
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        console.log(`Anda telah klik counter sebanyak ${count} kali`)
        console.log({posts})
    }) //no dependency array.

    useEffect(() => {
        console.log('UseEffect dengan dependency array kosong')
        const getPost = async () => {
            const fetchPosts = await fetch('https://jsonplaceholder.typicode.com/posts')
            const jsonPosts = await fetchPosts.json()
            setPosts(jsonPosts)
        }

        getPost()
    }, []) //dependency empty array.

    useEffect(() => {
        console.log('Nilai counter: ', count)
        if (count < 3) {
            console.log('Level 1')
        } else if (count < 5) {
            console.log('Level 2')
        } else {
            console.log('Level 3')
        }

    }, [count]) //dependency state array.

    useEffect(() => {
        console.log('Nilai level: ', level)
        if (level < 3) {
            console.log('Peringkat Level 1')
        } else if (level < 5) {
            console.log('Peringkat Level 2')
        } else {
            console.log('Peringkat Level 3')
        }

    }, [level, count])

    return (
        <div className="app functional-app">
            <h1>Functional Component</h1>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)}>
                Add Counter
            </button>
        </div>
    )
}

export default FunctionalApp