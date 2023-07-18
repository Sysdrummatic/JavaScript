import React, { FC } from "react";

const Home: FC = () => {
    return (
        <div>
            <h1>Home</h1>
            <div>
                <div>
                    <a href="/greeting">Greetings</a>
                </div>
                <div>
                    <a href="/anotherScreen">Another</a>
                </div>
            </div>
        </div>
    );
};

export default Home;
