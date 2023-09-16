import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import ChildComp from './ChildComp';

const root = ReactDOM.createRoot(document.getElementById('root'));

export default function App() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((c) => c + 1);
    }

    return(
        <>
        <h1>Memo</h1>
        <ChildComp />
        <div>
            Count: {count}
            <button onClick={increment}>+</button>
        </div>
        </>
    )
}

root.render(<App />);