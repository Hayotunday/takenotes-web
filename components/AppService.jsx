import Image from "next/image";

const AppService = ({ header, icon, desc, color }) => {
	return (
		<div
			className="rounded-2xl md:w-80 items-center justify-center flex flex-col p-5"
			style={{ backgroundColor: color }}
		>
			<Image
				src={icon}
				width={60}
				height={60}
				alt="service icon"
				className="object-contain"
			/>
			<h3 className="text-center text-tintWhite text-xl font-bold">{header}</h3>
			<p className="text-center text-tintWhite">{desc}</p>
		</div>
	);
};

export default AppService;
