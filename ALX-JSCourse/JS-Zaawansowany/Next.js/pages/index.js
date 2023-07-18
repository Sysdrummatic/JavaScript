import React from "react";
import Nav from "../components/Nav";
import posts from "../data/posts";
import Link from "next/link";

export default () => (
    <div>
        <Nav />
        <hr />
        <ul>
            {posts.map((post, i) => (
                <li key={i}>
                    <Link href={{ pathname: "/second", query: { id: i } }}>
                        <a>{post.title}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

/*{post.title} */
