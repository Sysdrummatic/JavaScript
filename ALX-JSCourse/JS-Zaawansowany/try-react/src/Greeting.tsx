import React, { FC, useState, useEffect } from "react";

interface GreetingProps {
    name?: string; //message
} //
interface GreetingState {
    message: string;
}

const Greeting: FC<GreetingProps> = ({ name }: GreetingProps) => {
    const [message, setMessage] = useState("");
    useEffect(() => {
        // Zastępuje Render w klasie App
        if (name) {
            setMessage(`Hello from ${name}`);
        }
    }, [name]);
    if (!name) {
        return <div>No name given</div>;
    }
    return <div>{message}</div>;
};

export default Greeting;
