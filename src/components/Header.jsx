"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
	return (
		<div className="flex px-20 justify-between bg-white shadow-xl py-4">
			<div>
				<Image
					className={`cursor-pointer min-h-[60px] min-w-[60px] `}
					src={`/images/most.png`}
					style={{
						objectFit: "cover",
						objectPosition: "center",
					}}
					alt={`most.png`}
					width={60}
					height={60}
					loading="eager"
				/>
			</div>
			<div className="flex gap-6 items-center justify-center">
				{links?.map((item, key) => (
					<Link
						href={item.href}
						className="text-xl text-[#bd302d] "
						key={key}
					>
						{item.title}
					</Link>
				))}
			</div>
			<div className="flex gap-6 items-center justify-center">
				<h2 className="text-[#bd302d]">Apply for W2024 batch</h2>
				<Link
					href={"https://tally.so/r/mRDGOd"}
					className="bg-[#bd302d] py-5 px-8 flex justify-center items-center rounded-xl hover:bg-[#eb4432]"
				>
					<h2 className="text-white text-lg font-bold">Apply</h2>
				</Link>
			</div>
		</div>
	);
};
