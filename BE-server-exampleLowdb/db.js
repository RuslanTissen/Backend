import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

// Lowdb setup, use a JSON file for storage
const adapter = new JSONFile("db.json");
const db = new Low(adapter, {});
// db.data = db.data || {}

// Read datafrom our storage file (if one exists)
// The data that was read will go into "db.data"
await db.read();

// Set data
db.data.posts ||= [];
console.log("Data:", db.data);

export default db;
