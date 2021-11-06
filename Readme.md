# Quick Postgres 

A fast & simple key | value storage for postgres. 

Inspired by [quick.db](https://github.com/lorencerri/quick.db)


## Features 

- Typed
- Incredibly similar to quick.db
- Beginner Friendly

**All issues are welcomed!**


## Usage

```ts

import QuickPg from 'quick-postgres';

const db = new QuickPg({
    table:"test",
    poolOptions: {
   host: 'localhost',
   user: 'postgres',
   password: '1234',
   database: 'myDatabase'
    }
})

console.log(db.set<number>("sword", 2))
console.log(db.get("sword"))

```

## API Reference
## Classes

<dl>
<dt><a href="#QuickPg">QuickPg</a></dt>
<dd><p>QuickPg
This is the main class for the QuickPostgres library.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#exists
Checks if a key exists or not.">exists
Checks if a key exists or not.(key)</a> ⇒</dt>
<dd></dd>
<dt><a href="#set
Sets a value to a key in the table.
Returns void or boolean depending on the success.">set
Sets a value to a key in the table.
Returns void or boolean depending on the success.(key, value)</a> ⇒</dt>
<dd></dd>
<dt><a href="#get
Returns the value of the specified key.
The value maybe of any type depending upon the set type.">get
Returns the value of the specified key.
The value maybe of any type depending upon the set type.(key)</a> ⇒</dt>
<dd></dd>
<dt><a href="#delete
Deletes a key and value from the table.">delete
Deletes a key and value from the table.(key)</a> ⇒</dt>
<dd></dd>
<dt><a href="#all
Returns all the contents in a table. Specifically key value pairs.">all
Returns all the contents in a table. Specifically key value pairs.()</a> ⇒</dt>
<dd></dd>
</dl>

<a name="QuickPg"></a>

## QuickPg
QuickPg
This is the main class for the QuickPostgres library.

**Kind**: global class  
<a name="new_QuickPg_new"></a>

### new QuickPg(qpOps)

| Param | Description |
| --- | --- |
| qpOps | Specifies the QuickPostgres Options. Check out https://node-postgres.com/api/pool for pool configurations. |

<a name="exists
Checks if a key exists or not."></a>

## exists
Checks if a key exists or not.(key) ⇒
**Kind**: global function  
**Returns**: boolean  

| Param | Description |
| --- | --- |
| key | the key that you want to check if exists. |

<a name="set
Sets a value to a key in the table.
Returns void or boolean depending on the success."></a>

## set
Sets a value to a key in the table.
Returns void or boolean depending on the success.(key, value) ⇒
**Kind**: global function  
**Returns**: void | boolean  

| Param | Description |
| --- | --- |
| key | The key you want to set the value in. |
| value | The value of the key. |

<a name="get
Returns the value of the specified key.
The value maybe of any type depending upon the set type."></a>

## get
Returns the value of the specified key.
The value maybe of any type depending upon the set type.(key) ⇒
**Kind**: global function  
**Returns**: Promise<any>  

| Param | Description |
| --- | --- |
| key | The key from where you want to get the value. |

<a name="delete
Deletes a key and value from the table."></a>

## delete
Deletes a key and value from the table.(key) ⇒
**Kind**: global function  
**Returns**: Promise<any>  

| Param | Description |
| --- | --- |
| key | The key who's content is to be deleted. |

<a name="all
Returns all the contents in a table. Specifically key value pairs."></a>

## all
Returns all the contents in a table. Specifically key value pairs.() ⇒
**Kind**: global function  
**Returns**: Promise<any>  

## Maintainer

[**rhydderchc**](https://rhydderchc.rocks)