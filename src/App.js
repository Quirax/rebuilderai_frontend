import './App.css'
import Header, { HEADER_MODE } from './Header'

function App() {
    return (
        <>
            <Header mode={HEADER_MODE.OnTop} />
            <Header mode={HEADER_MODE.Other} />
        </>
    )
}

export default App
