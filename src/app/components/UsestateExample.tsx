"use client"

import { useState } from "react";

function UsestateExample() {
    const [form, setForm] = useState({
        Email: "",
        Password: ""
    })
    const onScreen = (e: any) => {
        const name = e.target.name;
        console.log(name);

        const value = e.target.value;
        console.log(value);

        setForm((prev) => {
            return { ...prev, [name]: value }
        })
    }
    return <div>
        <div>
            <input type="text" placeholder="Enter Email" name="Email" value={form.Email} onChange={onScreen} />
        </div>
        <div>
            <input type="password" placeholder="Enter Password" name="Password" value={form.Password} onChange={onScreen} />
        </div>
    </div>;
}

export default UsestateExample;