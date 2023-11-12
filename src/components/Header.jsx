"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () => {
    const [links, setLinks] = useState([
        { title: "About", href: "" },
        { title: "Companies", href: "" },
        { title: "Startup", href: "" },
        { title: "Jobs", href: "" },
        { title: "Find a Co-Founder", href: "" },
        { title: "Library", href: "" },
        { title: "Resources", href: "" },
    ]);
    const [a, sA] = useState(false);
    useEffect(() => {
        if (
            window.location.href.includes("admin") &&
            localStorage["auth"] == "True"
        )
            sA(true);
    }, []);
    return (
        <div className="flex px-20 justify-between bg-white shadow-xl py-4">
            <div className="flex items-center justify-center overflow-hidden w-[80px] h-[80px]">
                <Image
                    className={`cursor-pointer w-[120px]`}
                    src={`/images/most.png`}
                    // style={{
                    //     objectFit: "cover",
                    //     objectPosition: "center",
                    // }}
                    alt={`most.png`}
                    width={120}
                    height={120}
                    loading="eager"
                />
            </div>
            <div className="flex gap-6 items-center justify-center">
                {links?.map((item, key) => (
                    <Link
                        href={item.href}
                        className="text-lg text-[#bd302d] "
                        key={key}
                    >
                        {item.title}
                    </Link>
                ))}
            </div>
            <div className="flex gap-6 items-center justify-center">
                {!a ? (
                    <Link href={"/admin"}>
                        <h2 className="text-[#bd302d]">Admin</h2>
                    </Link>
                ) : (
                    <Link href={"/"}>
                        <h2
                            className="text-[#bd302d] cursor-pointer"
                            onClick={() => {
                                localStorage["auth"] = "";
                            }}
                        >
                            Logout
                        </h2>
                    </Link>
                )}
                <Link
                    href={"https://tally.so/r/mRDGOd"}
                    className="bg-[#bd302d] py-4 px-6 flex justify-center items-center rounded-xl hover:bg-[#eb4432]"
                >
                    <h2 className="text-white text-lg font-bold">Apply</h2>
                </Link>
            </div>
        </div>
    );
};
