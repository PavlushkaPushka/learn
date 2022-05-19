import { useEffect, useState } from "react"
// Обрати внимание, что компонент называетсә так же как и файл, и начинается с большой буквы, может быть и стрелочной функцией, и просто функцией, но обязательно должна возвращать JSX
// хуки : 
// useState
// useEffect
// useRef
// useMemo 
// useCallback
// useContext
// На основании стандартных хуков можно делать свои собственные
// Хуки используются только на верхнем уровне вложенности , нельзя вкладывать хуки в какие то функции циклы или вложенности







const Counter = () => {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>
                {count}
            </h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
};

export default Counter;