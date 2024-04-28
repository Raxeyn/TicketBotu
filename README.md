<h1 align="center">Welcome to Ducko's DJS Ticket System V14</h1>
<h3 align="center">System made with 💖 by Ducko#7068</h3>

<div align="center">

[![discord](https://img.shields.io/discord/909261119103832084?style=for-the-badge&color=5865f2&label=Discord)](https://discord.gg/TKz7BMwEap)
  
[![issues](https://img.shields.io/github/issues/DuckoDas/DJS-Ticket-System-v14?style=for-the-badge&color=d84559)](https://github.com/DuckoDas/DJS-Ticket-System-v14)
[![stars](https://img.shields.io/github/stars/DuckoDas/DJS-Ticket-System-v14?color=009F81&label=stars&style=for-the-badge)](https://github.com/DuckoDas/DJS-Ticket-System-v14)
[![followers](https://img.shields.io/github/followers/DuckoDas?color=009F81&style=for-the-badge)](https://github.com/DuckoDas/)

</div>
<hr>

## **Features:**
- Advanced Ticket System with buttons, transcripts and a lot more**
- Categories is Archived, Closed, and Open**
- Download to see everything else:)**

## **Dependencies:**
- Make the paths right!
- [Roald Button Handler](https://github.com/RoaldDahl/Button-Handler)
- discord.js@14.3.0
- discord-html-transcripts
- [MongoDB Database (FREE)](https://www.mongodb.com/)

## **Database Connection:**
```js
const { MongoDB } = require("MONGODB URL");
const { connect } = require("mongoose");

module.exports = {
  name: "ready",
  async execute(client) {
    connect(MongoDB).then(() => {
        console.log(`Mongoose Connected`);
    });
  },
};
```

## **Credits:**
- None:/
