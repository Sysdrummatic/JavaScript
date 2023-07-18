import { useState } from "react";

export default function MyForm() {
    const [formData, setFormData] = useState({ name: "", email: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={handleChange} />
            <input type="email" name="email" onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
}
