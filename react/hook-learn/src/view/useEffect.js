import React, { Component, useEffect, useState } from 'react'

function Input(props) {

    useEffect(() => {
        console.log("props changeed" + props.value)
    }, [props.value, props.name])


    return <div>
        <input />
    </div>
}

export default () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState(() => {
        return "徐鑫鑫"
    });




    return <div>
        <Input value={count} name={name} />
        <button onClick={() => { setCount(x => "fds") }}>改变props</button>
        <button onClick={() => { setName(x => "Box") }}>改变姓名</button>
    </div>
}