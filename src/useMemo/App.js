import { useState, useMemo } from "react";
function App() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [product, setProduct] = useState([])
    const handleSubmit = () => {
        setProduct([...product, {
            name,
            price: +price
        }])
        setName('')
        setPrice('')
    }
    const total = useMemo(() => {
        const result = product.reduce((result, prod) => {
            console.log('Tính toán lại ');
            return result + prod.price
        }, 0)
        return result
    }, [product])

    return (
        <div style={{ padding: '10px 32px' }}>
            <input
                value={name}
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
                value={price}
                placeholder="Enter price"
                onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}>ADD</button>
            <br />
            Total:{total}
            <ul>
                {product.map((product, index) => {
                    return (

                        <li key={index}>{product.name} - {product.price}</li>
                    )
                })}
            </ul>

        </div>
    )
}
export default App