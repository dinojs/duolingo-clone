import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";

const LearnPage = async () => {
	const userProgress = await getUserProgress();
	const { activeCourse, hearts, points } = userProgress || {};

	if (!activeCourse) redirect("/courses");

	return (
		<div className="flex flex-row-reverse gap-[48px] px-6">
			<StickyWrapper>
				<UserProgress
					activeCourse={activeCourse}
					hearts={hearts ?? 0}
					points={points ?? 0}
					hasActiveSubscription={false}
				/>
			</StickyWrapper>
			<FeedWrapper>
				<Header title={activeCourse.title} />
			</FeedWrapper>
		</div>
	);
};

export default LearnPage;
