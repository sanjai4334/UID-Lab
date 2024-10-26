import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((count) => count + 1);
    };

    const decrement = () => {
        if (count > 0) setCount((count) => count - 1);
    };

    return (
        <>
            <div className="vertical">
                <h2>Counter App</h2>
                <div className="count" key={count}>
                    {count}
                </div>
                <div>
                    <button onClick={decrement}>Decrement</button>
                    <button onClick={increment}>Increment</button>
                </div>
            </div>
        </>
    );
}

export default Counter;
