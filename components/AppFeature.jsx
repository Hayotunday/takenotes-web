import Image from "next/image";

const AppFeature = ({ header, icon, desc }) => {
	return (
		<div className="flex flex-row gap-4 p-5 items-start md:w-80 rounded-lg bg-tintWhite">
			<Image
				src={icon}
				width={30}
				height={30}
				alt="feature icon"
				className="object-contain"
			/>
			<div className="flex flex-col gap-1">
				<h3 className="text-tintBlack text-xl font-semibold">{header}</h3>
				<p className="text-tintBlack text-sm leading-4">{desc}</p>
			</div>
		</div>
	);
};

export default AppFeature;
