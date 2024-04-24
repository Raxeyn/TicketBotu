module.exports = {
  name:"ping",
  description:"🏓 Show the bot ping",
  cooldown:15,
  run : async(interaction, client, args) => {
    await interaction.deferReply()
    let Latency = Date.now() - interaction.createdTimestamp
    interaction.editReply({content:"> <a:yklenme:825679011920216084> Loading..."}).then(() => 
      setTimeout(() => {
        interaction.editReply({content:`>>> ⌛ | Latency : ${Latency}ms\n⏱️ | Api Latency : ${client.ws.ping}ms`})
      },2 * 1000)
      )
    
  } 
}
