import React from "react";
import Nav from "../components/Nav";
import posts from "../data/posts";
import Error from "next/error";

export default ({
    url: {
        query: { id },
    },
}) =>
    posts[id] ? (
        <div>
            <Nav />
            <h1>{posts[id].title}</h1>
            <div>{posts[id].content}</div>
        </div>
    ) : (
        <Error statusCode={404} />
    );
