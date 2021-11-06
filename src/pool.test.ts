/// <reference types="jest" />

require("dotenv").config();
import QuickPg from "../src";

const pg = new QuickPg({
	table: "json",
	poolOptions: {
		host: process.env.DBHOST,
		user: process.env.DBUSER,
		password: process.env.DBPASSWORD,
		database: process.env.DBDATABASE
	}
});

test("QuickPg Set Test", async () => {
	expect(await pg.set<string>("one", "two")).toBe(true);
});
test("QuickPg Get Test", async () => {
	expect(await pg.get("one")).toBe("two");
});

test("QuickPg exists Test", async () => {
	expect(await pg.exists<string>("one")).toBe(true);
});
