const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args, member, client, level) => {
 
let kayityetkili = '792135496561328148' // BOT KOMUT
    
  let user =
    message.guild.member(message.mentions.users.first()) ||
    message.guild.members.get(args[0]);
  if (!user) return message.reply("**Etiket atmadın olum neyin kafası bu **");
  if(!message.member.roles.has(kayityetkili)) 
  if(!message.member.hasPermission("ADMINISTRATOR"))
   return message.channel.send(`iznin yok`);
  user.addRole("792135532863291403");
  const ky = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setDescription(
      ` ${user}, **<@&792135532863291403>**`
    )
    .setColor("BLACK")
    .setTimestamp();
  message.channel.send(ky);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["w"],
  permLevel: 2
};
exports.help = {
  name: "vip",
  description: "Birine Vip Rolü Verir",
  usage: "vip"
};