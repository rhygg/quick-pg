import { Pool, QueryResult } from "pg";
import { QPOptions } from "./";

/**
 * @class QuickPg
 * This is the main class for the QuickPostgres library.
 * @param qpOps Specifies the QuickPostgres Options.
 * Check out https://node-postgres.com/api/pool for pool configurations.
 */
export class QuickPg {
	public pool: Pool;
	public options: QPOptions;
	constructor(qpOps: QPOptions) {
		this.pool = new Pool(qpOps.poolOptions);
		this.options = qpOps;
		this.createTableIfNotExists();
	}

	/**
	 * @method exists
	 * Checks if a key exists or not.
	 * @param key the key that you want to check if exists.
	 * @returns boolean
	 */
	async exists<T>(key: T | string): Promise<boolean> {
		const validation = await this.pool.query(`select * from ${this.options.table} where key = ($1)`, [key]);

		if (!validation.rows || validation.rows.length <= 0) return false;
		else return true;
	}

	/**
	 * @method set
	 * Sets a value to a key in the table.
	 * Returns void or boolean depending on the success.
	 * @param key The key you want to set the value in.
	 * @param value The value of the key.
	 * @returns void | boolean
	 */
	async set<T>(key: string, value: T): Promise<void | boolean> {
		let found = await this.pool.query(`select * from ${this.options.table} where key = ($1)`, [key]);

		if (found.rows.length > 0) {
			try {
				await this.pool.query(`update ${this.options.table} set val = ($2) where key = ($1)`, [key, value]);
				return true;
			} catch (e) {
				throw e;
			}
		} else {
			try {
				await this.pool.query(`insert into ${this.options.table} (key, val) VALUES ($1,$2)`, [key, value]);
				return true;
			} catch (e) {
				throw e;
			}
		}
	}

	/**
	 * @method get
	 * Returns the value of the specified key.
	 * The value maybe of any type depending upon the set type.
	 * @param key The key from where you want to get the value.
	 * @returns Promise<any>
	 */
	async get<T>(key: T | string): Promise<any> {
		const res = await this.pool.query(`select * from ${this.options.table} where key = ($1)`, [key]);
		if (!res.rows || res.rows.length <= 0) return null;
		return res.rows[0].val;
	}

	/**
	 * @method delete
	 * Delete's a key and value from the table.
	 * @param key The key who's content is to be deleted.
	 * @returns Promise<any>
	 */
	async delete<T>(key: T | string): Promise<any> {
		try {
			await this.pool.query(`delete from ${this.options.table} where key = ($1)`, [key]);
			return true;
		} catch (e) {
			throw e;
		}
	}

	/**
	 * @method all
	 * Returns all the contents in a table. Specifically key value pairs.
	 * @returns Promise<any>
	 */
	async all(): Promise<any> {
		const res = await this.pool.query(`select * from ${this.options.table}`);
		const ret: { [x: number]: any }[] = [];
		const base = {};

		if (!res.rows || res.rows.length <= 0) return {};

		res.rows.map((r) => ret.push({ [r.key]: JSON.parse(r.val) }));
		ret.map((e) => Object.assign(base, e));
		return base;
	}

	/**
	 * @private
	 * Creates a table if it does not exists.
	 * Made to be used only in the constructor, sepcifying the table creation at the brim of initialization.
	 * @returns Promise<QueryResult<any>>
	 */
	private createTableIfNotExists(): Promise<QueryResult<any>> {
		return new Promise((res, rej) => {
			this.pool.query(`create table if not exists ${this.options.table} (key text, val text)`, (err: Error, result: QueryResult<any>) => {
				if (err) rej(err);
				return res(result);
			});
		});
	}
}
