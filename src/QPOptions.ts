import { PoolConfig } from "pg";

/**
 * @interface QPOptions
 * @property table Optional property, which speicifies a table name.
 * @property PoolConfig [The Pool Configuration](https://node-postgres.com/api/pool)
 */
export interface QPOptions {
	table?: string;
	poolOptions: PoolConfig;
}
