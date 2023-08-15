"use client";

import Link from "next/link";
import Image from "next/image";

import Button from "./Button";

const Nav = () => {
	const handleClick = (e) => {};

	return (
		<div className="md:flex justify-between items-center w-full px-20 pt-11 hidden ">
			<Link href={"/"} className="-ml-10">
				<Image
					src={"/assets/images/logo.png"}
					width={285}
					height={50}
					alt="Takenotes Logo"
					className=""
				/>
			</Link>
			<div className="">
				<Button text={"Download"} handleClick={handleClick} />
			</div>
		</div>
	);
};

export default Nav;
