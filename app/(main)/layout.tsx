import { MobileHeader } from "@/components/mobile-headers";
import { Sidebar } from "@/components/sidebar";

type Props = {
	children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
	return (
		<>
			<MobileHeader />
			{/* Hidden on mobile, visible on desktop only */}
			<Sidebar className="hidden lg:flex" />
			{/* pt-[50px] lg:pt-0 on mobile, pt-0 on desktop */}
			<main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
				<div className="max-w-[1056px] mx-auto pt-6 h-full">{children}</div>
			</main>
		</>
	);
};

export default MainLayout;
