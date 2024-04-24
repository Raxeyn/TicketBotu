const { Intents } = require("discord.js");
require("dotenv").config();

const config = {
  bot: {
    token: process.env.token,
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MEMBERS,
      Intents.FLAGS.GUILD_MESSAGES,
    ],
    guildId: "762710093543899176",
    message: require("./message.json"),
  },
  ids: {
    ticketCategory: "1174294310334779432", // category Id which tickets will get created
    ticketChannel: "1216691216633040956", // Channel Id which ticket create message is sent
    modsRole: "762710246271221770", // role Id which gets mentioned when a new ticket gets created
  },
};

module.exports = config;
