import React, { useState } from "react";

const initialState = {
    string: "",
};

const Calculator = () => {
    const [expression, setExpression] = useState(initialState);

    const clear = () => {
        setExpression(initialState);
    };

    const input = (value) => {
        setExpression({
            string: expression.string + value,
        });
    };

    const backspace = () => {
        setExpression({
            string: expression.string.slice(0, -1),
        });
    };

    const evaluate = () => {
        try {
            setExpression({
                string: eval(expression.string).toString(),
            });
        } catch (error) {
            setExpression({
                string: "Error",
            });
        }
    };

    return (
        <div className="calculator">
            <div className="display">{expression.string || "0"}</div>
            <div className="keypad">
                <button onClick={clear}>C</button>
                <button onClick={() => input("(")}>(</button>
                <button onClick={() => input(")")}>)</button>
                <button onClick={() => input("/")}>/</button>
                <button onClick={() => input("7")}>7</button>
                <button onClick={() => input("8")}>8</button>
                <button onClick={() => input("9")}>9</button>
                <button onClick={() => input("*")}>*</button>
                <button onClick={() => input("4")}>4</button>
                <button onClick={() => input("5")}>5</button>
                <button onClick={() => input("6")}>6</button>
                <button onClick={() => input("-")}>-</button>
                <button onClick={() => input("1")}>1</button>
                <button onClick={() => input("2")}>2</button>
                <button onClick={() => input("3")}>3</button>
                <button onClick={() => input("+")}>+</button>
                <button onClick={() => input("0")}>0</button>
                <button onClick={() => input(".")}>.</button>
                <button onClick={backspace}>⌫</button>
                <button onClick={evaluate}>=</button>
            </div>
        </div>
    );
};

export default Calculator;