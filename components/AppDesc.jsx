import Image from "next/image";

const AppDesc = ({ reverse, alt, image, header, detail }) => {
	return (
		<div
			className={
				reverse
					? "flex flex-col md:flex-row-reverse md:gap-32 items-center justify-between p-5"
					: "flex flex-col md:flex-row md:gap-32 items-center justify-between p-5"
			}
		>
			<Image
				src={image}
				width={300}
				height={650}
				alt={alt}
				className="object-contain w-[205px] md:w-[300px] h-[445px] md:h-[650px]"
			/>
			<div className="flex flex-col gap-4 text-center">
				<h4 className="text-4xl font-semibold text-darkPurple">{header}</h4>
				<p className="text-base text-darkPurple">{detail}</p>
			</div>
		</div>
	);
};

export default AppDesc;
