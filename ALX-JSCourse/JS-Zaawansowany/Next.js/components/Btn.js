import React from "react";
import { withRouter } from "next/router";

const Btn = ({ href, onClick, children, router }) => (
    <span>
        <button
            onClick={onClick}
            style={{ fontWeight: router.pathname === href ? "bold" : "normal" }}
        >
            {children}
        </button>
    </span>
);

export default withRouter(Btn);

// Jest to przykład komponentu zawierającego przycisk. Komponent ten jest wykorzystywany w pliku pages\index.js oraz pages\second.js. Komponent ten jest wykorzystywany w celu zmiany stylu przycisku w zależności od ścieżki, na której się znajdujemy. Komponent ten jest wykorzystywany w celu zmiany stylu przycisku w zależności od ścieżki, na której się znajdujemy. Komponent ten jest wykorzystywany w celu zmiany stylu przycisku w zależności od ścieżki, na której się znajdujemy. Komponent ten jest wykorzystywany w celu zmiany stylu przycisku w zależności od ścieżki, na której się znajdujemy. Komponent ten jest wykorzystywany w celu zmiany stylu przycisku w zależności od ścieżki, na której się znajdujemy. Komponent ten jest wykorzystywany w celu zmiany stylu przycisku w zależności od ścieżki, na której się znajdujemy. Komponent ten jest wykorzystywany w celu zmiany stylu przycisku w zależności od ścieżki, na której się znajdujemy. Komponent ten jest wykorzystywany w celu zmiany stylu przycisku w zależności od ścieżki, na której się znajdujemy.
