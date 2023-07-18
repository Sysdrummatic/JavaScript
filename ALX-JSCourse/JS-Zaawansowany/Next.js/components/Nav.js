import React from "react";
import Link from "next/link";
import Btn from "./Btn";

export default () => (
    <div>
        <Link href="/" passHref>
            <Btn>Home</Btn>
        </Link>
        <Link href="/second" passHref>
            <Btn>second</Btn>
        </Link>
    </div>
);
