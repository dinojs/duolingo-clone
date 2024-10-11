import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./global.css";
import { Toaster } from "@/components/ui/sonner";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Duolingo",
	description: "Created with Next.js",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			<html lang="en" className="h-full">
				<body className={`${font.className} h-full`}>
					<Toaster />
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
