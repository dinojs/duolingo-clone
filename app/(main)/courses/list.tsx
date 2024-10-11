"use client";
import { upsertUserProgress } from "@/actions/user-progress";
import { Card } from "./card";
import type { courses, userProgress } from "@/db/schema";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";
type Props = {
	courses: (typeof courses.$inferSelect)[];
	activeCourseId?: (typeof userProgress.$inferSelect)["activeCourseId"];
};

export const List = ({ courses, activeCourseId }: Props) => {
	const router = useRouter();
	const [pending, startTransition] = useTransition();

	const onClick = (courseId: number) => {
		if (pending) return;

		// if the course is already active, redirect to the learn page
		if (courseId === activeCourseId) return router.push("/learn");

		startTransition(async () => {
			upsertUserProgress(courseId).catch(() =>
				toast.error("Something went wrong"),
			);
		});
	};

	return (
		<div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
			{courses.map((course) => (
				<Card
					key={course.id}
					id={course.id}
					title={course.title}
					imageSrc={course.imageSrc}
					onClick={onClick}
					disabled={pending}
					active={course.id === activeCourseId}
				/>
			))}
		</div>
	);
};
