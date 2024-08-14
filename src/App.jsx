import { useState } from "react";
import ThemeToggler from "./components/ThemeToggler";
import FollowerCard from "./components/FollowerCard";
import { data } from "./constants";
import OverviewCard from "./components/OverviewCard";
import { twMerge } from "tailwind-merge";
import ChangePercent from "./components/ChangePercent";

function App() {
    // const [dark, setDark] = useState(false);

    // const darkModeHandler = () => {
    //     setDark(!dark);
    //     document.documentElement.classList.toggle("dark");
    // };

    return (
        <main className="relative min-h-screen p-6">
            <div class="absolute top-0 left-0 bg-pattern duration-150 h-[30vh] w-screen rounded-b-[30px]"></div>
            {/* <div className="bg-yellow-100 bg-bkg">
                <button onClick={() => darkModeHandler()}>
                    {dark && <p>dark</p>}
                    {!dark && <p>dark</p>}
                </button>
            </div> */}
            <section className="flex flex-col w-full max-w-6xl gap-12 py-12 mx-auto">
                <div className="relative flex flex-col gap-12">
                    <div className="flex flex-col items-start justify-between w-full sm:items-center sm:flex-row">
                        <div className="w-full">
                            <h1 className="text-3xl font-bold text-d-content">
                                Social Media Dashboard
                            </h1>
                            <h2 className="mt-1 title">
                                Total followers: 23,004
                            </h2>
                        </div>

                        <div className="h-[1px] w-full bg-content my-6 block sm:hidden" />
                        <ThemeToggler />
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 ">
                        {data.map((el, index) => {
                            console.log(el.platform);
                            return (
                                <FollowerCard
                                    key={index}
                                    props={el}
                                    cardStyle={
                                        el.platform === "twitter" && "order-3"
                                    }
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between w-full">
                        <div>
                            <h1 className="text-2xl font-bold text-content">
                                Overview - Today
                            </h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                        {data.map((el, index) => {
                            var p = el.platform;
                            return (
                                <div
                                    key={el.platform}
                                    className="grid grid-cols-1 gap-8 md:grid-cols-2"
                                >
                                    {el.today.map((chel, index) => {
                                        return (
                                            <div className="flex flex-col items-center w-full gap-6 p-6 pr-8 rounded-lg bg-card">
                                                <div className="flex items-center justify-between w-full">
                                                    <span className="title ">
                                                        {chel.title}
                                                        {/* {p === "facebook" &&
                                                        "Page Views"}
                                                    {p === "twitter" &&
                                                        "Retweets"}
                                                    {p === "instagram" &&
                                                        "Profile Views"} */}
                                                    </span>
                                                    <img
                                                        src={twMerge(
                                                            "/images/icon-" +
                                                                p +
                                                                ".svg"
                                                        )}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="flex items-end justify-between w-full ">
                                                    <span className="text-4xl font-bold text-d-content">
                                                        {chel.total >= 10000
                                                            ? Math.floor(
                                                                  chel.total /
                                                                      1000
                                                              ) + "k"
                                                            : chel.total}
                                                    </span>
                                                    <ChangePercent
                                                        num={chel.changes}
                                                        when={"%"}
                                                    />
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default App;
