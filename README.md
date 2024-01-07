# Periodic Bot
An attempt to recreate reddit's [PeriodicSentenceBot](https://www.reddit.com/user/PeriodicSentenceBot/).


## Prerequisites
- A system with deno installed
- Telegram bot token (from [@BotFather](https://t.me/BotFather))
- Mongodb url (local or srv)


## Deploy
- Clone this repo
```sh
git clone https://github.com/Itz-fork/PeriodicBot && cd PeriodicBot
```
- Setup environmental variables
    - `BOT_TOKEN` - Telegram bot token
    - `MONGO_URL` - Mongodb url
- Run the bot
```sh
deno run --allow-net --allow-env peridiotic/bot.ts
```


## Known limitations
As the current algorithm is not mature enough, it fails to detect complex sentences or sometimes even the most basic ones.

You can find the current algorithm [here](peridiotic/algorithms/current.ts)