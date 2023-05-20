"use client";

import React from "react";

const Button = ({ text, dark, handleClick }) => {
	return (
		<button
			type="button"
			className={
				!dark
					? "bg-lightBlue w-44 h-12 rounded"
					: "bg-darkPurple w-44 h-12 rounded"
			}
			onClick={() => handleClick && handleClick()}
		>
			<p
				className={
					!dark
						? "text-center font-semibold text-base text-darkPurple"
						: "text-center font-semibold text-base text-lightBlue"
				}
			>
				{text}
			</p>
		</button>
	);
};

export default Button;
