import data from "../data.json"
import React from 'react'

function Button({ icon, color, text, to, reverse, border }) {
    return (
        <div
            onClick={() => window.location.href = to}
            className={`px-2 md:px-4 py-2 text-black flex items-center gap-2 text-lg rounded-md hover:scale-95 cursor-pointer ${reverse ? "flex-row-reverse" : ""} border-2 ${border ? "dark:text-white" : "border-transparent"} transition-all hover:transition-all`}
            style={{ backgroundColor: color, borderColor: border }}
        >
            <p>{text}</p> <p>{icon}</p>
        </div>
    )
}

export default Button