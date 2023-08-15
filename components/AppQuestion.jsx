"use client";

import Image from "next/image";
import { useState } from "react";

const AppQuestion = ({ answer, question }) => {
	const [isOpen, setIsOpen] = useState(true);

	const handleClick = () => {
		setIsOpen((prevState) => !prevState);
	};

	return (
		<div className="w-full rounded-2xl border-2 border-darkPurple p-12 flex flex-col gap-8 justify-center">
			<div className="flex flex-row items-center justify-between">
				<p className="text-darkPurple text-lg font-bold">{question}</p>
				<button
					type="button"
					className="p-2 rounded-full bg-tintWhite"
					onClick={handleClick}
				>
					<Image
						src={"/assets/icons/add.svg"}
						width={20}
						height={20}
						alt="Question icon"
						className="object-contain"
					/>
				</button>
			</div>
			<p className={isOpen ? "hidden" : "flex text-darkPurple text-base"}>
				{answer}
			</p>
		</div>
	);
};

export default AppQuestion;
