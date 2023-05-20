import Image from "next/image";

const AppDesc = ({ reverse, alt, image, header, detail }) => {
	return (
		<div
			className={
				reverse
					? "flex flex-row-reverse gap-32 items-center justify-between p-5"
					: "flex flex-row gap-32 items-center justify-between p-5"
			}
		>
			<Image
				src={image}
				width={300}
				height={650}
				alt={alt}
				className="object-contain"
			/>
			<div className="flex flex-col gap-4">
				<h4 className="text-5xl font-semibold text-darkPurple">{header}</h4>
				<p className="text-base text-darkPurple">{detail}</p>
			</div>
		</div>
	);
};

export default AppDesc;
