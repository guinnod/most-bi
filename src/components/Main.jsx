import Image from "next/image";
import Link from "next/link";

export const Main = () => {
	return (
		<div className="flex h-screen">
			<div className="w-1/2 p-20 flex flex-col justify-center items-center gap-6">
				<h2 className="text-5xl text-[#bd302d] ">WHY LEAN-UP?</h2>
				<h2 className="text-lg text-[#bd302d] ">
					We give startups a disproportionate advantage.
				</h2>
				<Link
					href={"https://tally.so/r/mRDGOd"}
					className="bg-[#bd302d] py-5 px-8 flex justify-center items-center rounded-xl hover:bg-[#eb4432]"
				>
					<h2 className="text-white text-lg font-bold">Apply</h2>
				</Link>
			</div>

			<div className="relative w-1/2">
				<div className="absolute space-y-5 bottom-0 left-0 top-0  z-10 flex flex-col items-center justify-center">
					<div className="flex flex-col items-center justify-center rounded-2xl bg-[#bd302d] shadow-lg  ml-[-70px] w-[170px] py-3 xl:ml-[-115px] xl:w-[230px] xl:py-9">
						<div class="mb-1 text-3xl font-bold text-brand xl:text-4xl">
							4,000
						</div>
						<div class="text-l">funded startups</div>
					</div>
					<div className="flex flex-col items-center justify-center rounded-2xl bg-[#bd302d] shadow-lg  ml-[-70px] w-[170px] py-3 xl:ml-[-115px] xl:w-[230px] xl:py-9">
						<div class="mb-1 text-3xl font-bold text-brand xl:text-4xl">
							$600B
						</div>
						<div class="text-l">combined valuation</div>
					</div>
				</div>
				<Image
					className={`cursor-pointer `}
					src={`/images/banner.jpg`}
					alt={`most.png`}
					fill
				/>
			</div>
		</div>
	);
};
