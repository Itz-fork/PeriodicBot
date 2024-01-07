// Copyright (c) 2024 Itz-fork

import { Bot } from "https://deno.land/x/grammy@v1.20.2/mod.ts";

import { fromTwos } from "./algorithms/current.ts";
import { add_user, get_charma, increment_charma } from "./database.ts";

// grammy client
const PTBot = new Bot(Deno.env.get("BOT_TOKEN") || "");

// Start command
PTBot.command("start", async (ctx) => {
	await ctx.reply(
		`
Hey, I'm <b>Periodic table bot ⚛</b>!
        
I will congratulate you if your message can be spelled using elements of the perdiodic table.
    `,
		{ parse_mode: "HTML" },
	);
});

// Help command
PTBot.command("help", async (ctx) => {
	await ctx.reply(
		`
<b>Commands 🥽</b>

<i>/start - Starts the bot</i>
<i>/help - Show help</i>
<i>/about - Things about the bot</i>
<i>/charma - Check your charma</i>


<b>Knowledgebase 🔬</b>

  <b>⌬ What is charma?</b>
   Charma is a word play on the words chemistry and karma (reddit point system).
   Everytime you send a sentence that can be spelled using elements you get +1 charma
    `,
		{ parse_mode: "HTML" },
	);
});

// About command
PTBot.command("about", async (ctx) => {
	await ctx.reply(
		`
<b>Thank you for showing interest in this bot 🧪❤️</b>

<b>Why?</b>
When I was browsing reddit I saw this bot (<a href="https://www.reddit.com/user/PeriodicSentenceBot/t">PeriodicSentenceBot</a>).
It checks if a sentence can be spelled using periodic table elements and I (@Bruh_0x) thought "Wow, this'd be a fun project to do"
and here we are I guess 💊
    `,
		{ parse_mode: "HTML" },
	);
});

// Charma Get command
PTBot.command("charma", async (ctx) => {
	const user_id = ctx.message?.from.id;

	if (!user_id) {
		return await ctx.reply("You don't have charma yet ☣️!");
	}
	const charma = await get_charma(user_id);
	await ctx.reply(
		`You have <code>${charma}</code> <b>charma 👨‍🔬</b>`,
		{ parse_mode: "HTML" },
	);
});

// Handle other messages.
PTBot.on("message", async (ctx) => {
	const message = ctx.message.text?.toLowerCase();

	// add user
	const user_id = ctx.message.from.id;
	await add_user(user_id);

	const does_it = message ? fromTwos(message) : "";

	if (does_it) {
		await ctx.reply(
			`<b>+1 Charma 🧬!</b> \nYour message can be splelled using periodic table elements. \n\n<code>${does_it}</code>`,
			{ parse_mode: "HTML" },
		);
		await increment_charma(user_id);
	}
});

PTBot.start();
