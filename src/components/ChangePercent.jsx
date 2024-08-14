import React from "react";
import { twMerge } from "tailwind-merge";

const ChangePercent = ({ num, when }) => {
    return (
        <span
            className={twMerge(
                num >= 0 ? "text-lime-green" : "text-bright-red",
                "label flex items-center gap-1"
            )}
        >
            {num >= 0 ? (
                <img src="/images/icon-up.svg" />
            ) : (
                <img src="/images/icon-down.svg" />
            )}

            {num < 0 ? num * -1 : num}
            {when}
        </span>
    );
};

export default ChangePercent;
