import { PlusCircleOutlined, MinusCircleOutlined, ReloadOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import "./counter.css"

function Counter() {
    const [count, setCount] = useState(0)
    const [clr, setClr] = useState("white")
    function add() {
        setCount(count + 1)
        setClr("white")
    }
    function sub() {
        setCount(count - 1)

    }
    function res() {
        setCount(count - count)
    }

    return (
        <>
            <div className="main">
                <div>
                    <h1 className="heading">Counter</h1>
                </div>
                <div className="counter_main">
                    <span className="input" type="text" ><p style={{ color: clr }}>{count}</p></span>
                    <button onClick={add}><PlusCircleOutlined /></button>
                    <button onClick={sub}><MinusCircleOutlined /></button>
                    <button onClick={res} ><ReloadOutlined /></button>

                </div>
               
            </div>
        </>
    )
}
export default Counter