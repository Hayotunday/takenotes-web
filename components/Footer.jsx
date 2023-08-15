import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<section className="bg-darkPurple w-full p-10 items-center justify-center flex flex-col gap-16">
			<div className="w-full flex flex-col md:grid md:grid-cols-4 gap-14">
				{/* Logo and description */}
				<div className="">
					<Image
						src={"/assets/images/logo.png"}
						width={200}
						height={50}
						alt="Takenotes Logo"
					/>
					<p className="text-tintWhite">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt?
					</p>
				</div>

				{/* Quick Links */}
				<div className="">
					<h4 className="text-tintWhite text-lg font-bold mb-3">Quick Links</h4>
					<div>
						<Link href={"#"} className="">
							<p className="text-tintWhite text-sm">Home</p>
						</Link>
						<Link href={"#"} className="">
							<p className="text-tintWhite text-sm">About Us</p>
						</Link>
						<Link href={"#"} className="">
							<p className="text-tintWhite text-sm">Contact Us</p>
						</Link>
					</div>
				</div>

				{/* Support and legal */}
				<div className="">
					<h4 className="text-tintWhite text-lg font-bold mb-3">
						Support & Legal
					</h4>
					<div>
						<Link href={"#"} className="">
							<p className="text-tintWhite text-sm">Support</p>
						</Link>
						<Link href={"#"} className="">
							<p className="text-tintWhite text-sm">Cookie Policy</p>
						</Link>
						<Link href={"#"} className="">
							<p className="text-tintWhite text-sm">Privacy Policy</p>
						</Link>
					</div>
				</div>

				{/* Get in Touch */}
				<div className="">
					<h4 className="text-tintWhite text-lg font-bold mb-3">
						Get in Touch
					</h4>
					<div className="flex flex-col gap-1">
						<p className="text-tintWhite text-sm flex flex-row gap-2 items-center">
							<span>
								<Image
									src={"/assets/icons/phone.svg"}
									width={20}
									height={20}
									alt="Phone image"
								/>
							</span>
							08106082352
						</p>
						<p className="text-tintWhite text-sm flex flex-row gap-2 items-center">
							<span>
								<Image
									src={"/assets/icons/mail.svg"}
									width={20}
									height={20}
									alt="Mail image"
								/>
							</span>
							idowudanielayotunde@gmail.com
						</p>
					</div>
					<div className="mt-3 flex flex-col gap-2">
						<h6 className="text-tintWhite text-sm font-Medium">Social Media</h6>
						<div className="flex flex-row gap-3">
							<Image
								src={"/assets/icons/linkedin.svg"}
								width={20}
								height={20}
								alt="LinkedIn logo"
							/>
							<Image
								src={"/assets/icons/instagram.svg"}
								width={20}
								height={20}
								alt="Instagram logo"
							/>
							<Image
								src={"/assets/icons/facebook.svg"}
								width={20}
								height={20}
								alt="Facebook logo"
							/>
							<Image
								src={"/assets/icons/twitter.svg"}
								width={20}
								height={20}
								alt="Twitter logo"
							/>
						</div>
					</div>
				</div>
			</div>
			<p className="text-tintWhite text-center">©TekNotes Pro - 2023</p>
		</section>
	);
};

export default Footer;
