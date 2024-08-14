import React from "react";

const ThemeToggler = () => {
    const setDarkMode = () => {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
    };
    const setLightMode = () => {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
    };

    // setDarkMode();
    setLightMode();
    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    };
    return (
        <label className="inline-flex items-center justify-between w-full gap-3 cursor-pointer sm:justify-end">
            <span className="title">Dark Mode</span>
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={toggleTheme}
            />
            <div className="relative w-11 h-6 bg-toggle-light  rounded-full   peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-gradient-to-r peer-checked:from-toggle-dark-blue peer-checked:to-toggle-dark-green  hover:bg-gradient-to-r hover:to-toggle-dark-green hover:from-toggle-dark-blue duration-75"></div>
        </label>
    );
};

export default ThemeToggler;
