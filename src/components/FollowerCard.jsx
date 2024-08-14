import React from "react";
import { twMerge } from "tailwind-merge";
import ChangePercent from "./ChangePercent";

const FollowerCard = ({ props }) => {
    var f = props.today[0].followed;
    console.log(document.getElementById("root"));

    return (
        <div
            className={twMerge(
                "flex flex-col flex-1 pt-1 rounded-lg cursor-pointer overflow-hidden",
                props.platform === "facebook" && "bg-facebook",
                props.platform === "instagram" &&
                    "bg-gradient-to-r from-instagram-yellow to-instagram-pink",
                props.platform === "twitter" && "bg-twitter",
                props.platform === "youtube" && "bg-youtube",
                props.cardStyle
            )}
        >
            <div className="flex h-full flex-col items-center justify-between gap-6 p-6 pt-7 text-center  bg-card hover:bg-[#e1e3f0] dark:hover:bg-[#333a56] ">
                <div className="flex items-center gap-2">
                    <img
                        src={twMerge("/images/icon-" + props.platform + ".svg")}
                        alt={props.platform + " logo"}
                    />
                    <span className="font-bold label text-content">
                        @{props.username}
                    </span>
                </div>
                <div className="block">
                    <h1 className="text-6xl font-bold">
                        {props.followers >= 10000
                            ? Math.floor(props.followers / 1000) + "k"
                            : props.followers}
                    </h1>
                    <h2 className="tracking-[5px] text-xs uppercase text-content mt-2">
                        Followers
                    </h2>
                </div>

                <ChangePercent num={f} when={" Today"} />
            </div>
        </div>
    );
};

export default FollowerCard;
