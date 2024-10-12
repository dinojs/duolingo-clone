import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL || "");
const db = drizzle(sql, { schema });

const main = async () => {
	try {
		console.log("Seeding database...");
		// Delete user_progress records first
		await db.delete(schema.userProgress);

		// Then delete courses
		await db.delete(schema.courses);

		await db.insert(schema.courses).values([
			{
				id: 1,
				title: "Spanish",
				imageSrc: "/es.svg",
			},
			{
				id: 2,
				title: "Italian",
				imageSrc: "/it.svg",
			},
			{
				id: 3,
				title: "French",
				imageSrc: "/fr.svg",
			},
			{
				id: 4,
				title: "Croatian",
				imageSrc: "/hr.svg",
			},
		]);

		console.log("Seeding completed");
	} catch (err) {
		console.error(err);
		throw new Error("Failed to seed database");
	}
};

main();
