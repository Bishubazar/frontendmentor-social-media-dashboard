import React from "react";
import { twMerge } from "tailwind-merge";
import { data } from "../constants";

const OverviewCard = ({ props }) => {
    var p = props.platform;
    return (
        <>
            {data.map((chel, index) => {
                return (
                    <div className="flex flex-col gap-6 p-6 bg-card">
                        <div className="flex items-center">
                            <span className="title ">
                                {p === "facebook" && "Page Views"}
                                {p === "twitter" && "Retweets"}
                                {p === "instagram" && "Profile Views"}
                            </span>
                            {props.today.views.view}
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default OverviewCard;
