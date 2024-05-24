import { useState } from "react"

const Quantity = () => {
    // let quantity = 0
    const [quantity, setQuantity] = useState(0)
    const increment = () => {
        // quantity = quantity+1
        setQuantity(quantity+1)
        // alert("increment Clicked " + quantity)
    }
    return (
        <div>
            <button onClick={increment}>+</button>
            <span>{quantity}</span>
            <button>-</button>
        </div>
    )
}

// export default Quantity;