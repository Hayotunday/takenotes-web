import Image from "next/image";

import Nav from "@components/Nav";
import Button from "@components/Button";
import Footer from "@components/Footer";
import GetInTouch from "@components/GetInTouch";
import AppDesc from "@components/AppDesc";
import AppFeature from "@components/AppFeature";
import AppService from "@components/AppService";
import AppQuestion from "@components/AppQuestion";

import {
	appFeatureData,
	appDescData,
	appServiceData,
	appQuestionData,
} from "@utils/data";

const page = () => {
	return (
		<main className="w-full">
			<section className="bg-gradient-to-b from-gradientPurple from-20% to-gradientBlue w-full items-center justify-center">
				<Nav />
				<div className="flex flex-col md:flex-row gap-10 items-stretch justify-center md:items-center md:justify-between p-10 md:p-24">
					<div className="flex flex-col gap-6 text-center">
						<h1 className="bold-header">
							TakeNotes your number one documents management app
						</h1>
						<p className="desc text-tintWhite">
							Lorem ipsum dolor sit amet consectetur. Sed orci at posuere
							posuere at mi quis aliquam et. Mauris fermentum at sapien congue
							libero tempus sed. Suscipit leo a tempor lobortis.
						</p>
						<div className="gap-10 flex flex-row">
							<Button text={"Download"} />
							<Button text={"Explore tools"} />
						</div>
					</div>
					<Image
						src={"/assets/images/app.png"}
						width={500}
						height={600}
						alt="Takenotes App Image"
						className="object-contain"
					/>
				</div>
			</section>

			<section className="flex flex-col gap-32 p-10 md:p-32">
				<div className="items-center flex flex-col gap-5">
					<h1 className="semiBold-header">
						Most Popular for documents management app
					</h1>
					<p className="text-center text-darkPurple md:px-32">
						Lorem ipsum dolor sit amet consectetur. In donec suspendisse
						ultricies id tortor purus mauris. Ligula molestie sed vivamus odio
					</p>
					<div className="flex flex-row gap-12 flex-wrap mt-14 items-center justify-center">
						{appFeatureData.map((item, key) => (
							<AppFeature
								key={key}
								icon={item.icon}
								desc={item.desc}
								header={item.header}
							/>
						))}
					</div>
				</div>

				<div className="items-center flex flex-col gap-5">
					<h1 className="semiBold-header">Keep Your document more organized</h1>
					<p className="text-center text-darkPurple md:px-32">
						Lorem ipsum dolor sit amet consectetur. In donec suspendisse
						ultricies id tortor purus mauris. Ligula molestie sed vivamus odio
					</p>
					<div className="flex flex-col gap-16 mt-14 items-center justify-center">
						{appDescData.map((item, key) => (
							<AppDesc
								key={key}
								image={item.image}
								header={item.header}
								detail={item.detail}
								alt={item.alt}
								reverse={item.reverse}
							/>
						))}
					</div>
				</div>

				<div className="items-center flex flex-col gap-5">
					<h1 className="semiBold-header">What make’s us stand out</h1>
					<p className="text-center text-darkPurple md:px-32">
						Lorem ipsum dolor sit amet consectetur. In donec suspendisse
						ultricies id tortor purus mauris. Ligula molestie sed vivamus odio
					</p>
					<div className="flex flex-row flex-wrap mt-14 gap-10 items-center justify-center">
						{appServiceData.map((item, key) => (
							<AppService
								key={key}
								icon={item.icon}
								desc={item.desc}
								color={item.color}
								header={item.header}
							/>
						))}
					</div>
				</div>

				<div className="items-center flex flex-col gap-5">
					<h1 className="semiBold-header">Frequently Asked Questions</h1>
					<p className="text-center text-darkPurple md:px-32">
						Lorem ipsum dolor sit amet consectetur. In donec suspendisse
						ultricies id tortor purus mauris. Ligula molestie sed vivamus odio
					</p>
					<div className="flex flex-col gap-5 mt-14 w-full items-center justify-center">
						{appQuestionData.map((item, key) => (
							<AppQuestion
								key={key}
								answer={item.answer}
								question={item.question}
							/>
						))}
					</div>
				</div>

				<div className="items-center flex flex-col gap-5">
					<h1 className="semiBold-header">Get In Touch</h1>
					<p className="text-center text-darkPurple md:px-32">
						Lorem ipsum dolor sit amet consectetur. In donec suspendisse
						ultricies id tortor purus mauris. Ligula molestie sed vivamus odio
					</p>
					<GetInTouch />
				</div>
			</section>

			<Footer />
		</main>
	);
};

export default page;
