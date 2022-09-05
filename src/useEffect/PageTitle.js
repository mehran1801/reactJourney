import { React, useState, useEffect } from "react";


export function PageTitle() {
    const [name, setName] = useState('');
    {console.log('starting')}
    useEffect(() => {
        console.log('I am in useEffect fn ')
        document.title = `Hello, ${name}`
    }, [name])
    {
      console.log("finishing")
    }

    return (
        <div>
            <p>Use {name} input field to rename page </p>
            <input
                type="text" 
                value={name}
                onChange = {({target})=>setName(target.value)}
                />
        </div>
    )
}