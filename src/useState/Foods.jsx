import React, { useState } from "react"

function FoodsList() {
    const [ foods, setFoods ] = useState(['Mie goreng', 'Nasi goreng']);

    const addFoods = () => {
        setFoods([...foods, 'Kwetiaw goreng', 'Indomie goreng'])
    }

    return ( 
        <div>
            <p>Daftar makanan</p>
            {foods.map((food) => <p>{food}</p>)}
            <button onClick={addFoods}>
            Add food
            </button>
        </div>
    );
}

export default FoodsList;