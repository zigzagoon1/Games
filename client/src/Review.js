import React, {useState} from "react";

function Review() {
    const [input, setInput] = useState("");
    const [count, setCount] = useState(0);

    function handleChange(e) {
        setInput(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const letters = input.length;
        setCount(count + letters);
        setInput("");
    }
    return (
        <div>
            <form id="form" onSubmit={handleSubmit}>
                <input type="text" name="user_input" onChange={handleChange} value={input}></input>
                <button>Click Me!</button>
            </form>
            <p>{count}</p>
        </div>
    )
}

export default Review;