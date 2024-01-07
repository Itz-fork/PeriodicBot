// Copyright (c) 2024 Itz-fork

import { MongoClient } from "https://deno.land/x/mongo@v0.32.0/mod.ts";

// Mongo client, so like we can connect to database
const client = new MongoClient();
await client.connect(Deno.env.get("MONGO_URL") || "");

// It the database thingy. Idk what to call it
interface UserSchema {
	_id: number;
	charma: number;
}

const db = client.database("peridiotic");
const users = db.collection<UserSchema>("users");

// add a user to database
async function add_user(uid: number) {
	await users.updateOne(
		{ _id: uid },
		{ $setOnInsert: { _id: uid, charma: 0 } },
		{ upsert: true },
	);
}

// update charma
async function increment_charma(uid: number) {
	await users.updateOne(
		{ _id: uid },
		{ $inc: { charma: 1 } },
	);
}

// get charma
async function get_charma(uid: number) {
    const user = await users.findOne({ _id: uid });
    return user?.charma;
}

export { add_user, increment_charma, get_charma };
