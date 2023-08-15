import "@styles/globals.css";

export const metadata = {
	title: "Takenotes",
	description: "The official website of Takenotes mobile app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="w-full">{children}</body>
		</html>
	);
}
