import { useContext } from "react"
import Content from "./Content"
import { ThemeContext } from "./ThemContext"
import './App.css'

// Context 
// compA => compB => compC
// compA => compC
// Theme : dark / light

// 1. Create context
// 2 . Provider
// 3 . Consumer

function App() {

    const context = useContext(ThemeContext)
    return (

        <div style={{ padding: 20 }}>
            <button onClick={context.toggleTheme}>Toggle Theme</button>
            <Content />

        </div>


    )

}
export default App