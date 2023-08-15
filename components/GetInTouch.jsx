"use client";

import { useState } from "react";

import Button from "./Button";

const GetInTouch = () => {
	const [formData, setFormData] = useState({
		firstname: "",
		lastname: "",
		email: "",
		message: "",
	});

	return (
		<div className="flex flex-col gap-5 bg-tintWhite p-10 rounded-xl">
			<div className="flex flex-col md:flex-row gap-5 justify-between items-center">
				<label
					htmlFor="firstname"
					className="text-darkPurple text-sm font-light flex flex-col gap-2"
				>
					First Name
					<input
						type="text"
						name="firstname"
						id=""
						placeholder="enter your first name"
						className="bg-lightBlue rounded-lg text-darkPurple text-sm font-light p-5"
						onChange={(e) => {
							e.preventDefault();
							setFormData({ ...formData, firstname: e.target.value });
						}}
					/>
				</label>

				<label
					htmlFor="lastname"
					className="text-darkPurple text-sm font-light flex flex-col gap-2"
				>
					Last Name
					<input
						type="text"
						name="lastname"
						id=""
						placeholder="enter your last name"
						className="bg-lightBlue rounded-lg text-darkPurple text-sm font-light p-5"
						onChange={(e) => {
							e.preventDefault();
							setFormData({ ...formData, lastname: e.target.value });
						}}
					/>
				</label>
			</div>
			<div className="">
				<label
					htmlFor="email"
					className="text-darkPurple text-sm font-light flex flex-col gap-2"
				>
					E-mail
					<input
						type="text"
						name="email"
						id=""
						placeholder="enter your email"
						className="bg-lightBlue rounded-lg text-darkPurple text-sm font-light p-5"
						onChange={(e) => {
							e.preventDefault();
							setFormData({ ...formData, email: e.target.value });
						}}
					/>
				</label>
			</div>
			<div className="">
				<label
					htmlFor="message"
					className="text-darkPurple text-sm font-light flex flex-col gap-2"
				>
					Message
					<textarea
						name="message"
						id=""
						cols="20"
						rows="5"
						placeholder="enter your message"
						className="bg-lightBlue rounded-lg text-darkPurple text-sm font-light p-5"
						onChange={(e) => {
							e.preventDefault();
							setFormData({ ...formData, message: e.target.value });
						}}
					></textarea>
				</label>
			</div>
			<Button text={"Contact Us"} dark />
		</div>
	);
};

export default GetInTouch;
