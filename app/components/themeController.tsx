'use client'
import React from 'react'

const themes = [
    "coffee","light", "dark", "cupcake", "bumblebee", "emerald", "corporate",
    "synthwave", "retro", "cyberpunk", "valentine", "halloween",
    "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe",
    "black", "luxury", "dracula", "cmyk", "autumn", "business",
    "acid", "lemonade", "night", "winter", "dim", "nord", "sunset"
];

const ThemeController = () => {
    return (
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1 bg-accent">
                Theme
                <svg
                    width="12px"
                    height="12px"
                    className="inline-block h-2 w-2 fill-current opacity-60"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2048 2048"
                >
                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
            </div>

            <ul
                tabIndex={0}
                className="dropdown-content bg-base-300 rounded-box z-50 w-60 p-2 shadow-2xl max-h-96 overflow-y-auto"
            >
                {themes.map((theme) => (
                    <li key={theme}>
                        <input
                            type="radio"
                            name="theme-dropdown"
                            className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                            aria-label={theme}
                            value={theme}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ThemeController;
