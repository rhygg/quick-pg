/// <reference types="jest" />

import QuickPg from '../src'

const pg = new QuickPg({
    poolOptions: {
   host: process.env.HOST,
   user: process.env.USER,
   password: process.env.PASSWORD,
   database: process.env.DATABASE
}
 })

 test("QuickPg Set Test", async () => {
     expect(await pg.set<string>("one", "two")).toBe(true);
 })
 test("QuickPg Get Test", async () => {
     expect(await pg.get("one")).toBe("two")
 })

 test("QuickPg exists Test", async () => {
     expect(await pg.exists<string>("one")).toBe(true);
 })