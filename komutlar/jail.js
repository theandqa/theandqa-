const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, message, args) => {
//if(message.channel.id !== "719279214121189408") return message.channel.sendEmbed(new Discord.RichEmbed().setColor('WHİTE').setDescription('Bu kanalda bu komutu kullanamazsın. Sadece <#719279214121189408> Burda kullanımı var.').setFooter('Kalite Tesadüf Değildir', message.author.avatarURL).setTimestamp()).then(msg => msg.delete(5000))

 if (!message.member.roles.has('792135496561328148') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().setTitle("Bilginize").setColor("BLACK").setDescription(' Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!').setColor("Black"));
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bir üye etiketlemen gerekiyor!').setColor("Black"));
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
   let reason = args.slice(1).join(" ")
      if(!reason) return message.channel.send("Lütfen Bir Sebep Yazınız.").then(m => m.delete(5000));
          message.react('735845319836827688')
  message.guild.members.get(member.id).roles.forEach(r => {
message.guild.members.get(member.id).removeRole(r)

   
})
  member.addRole('792135515012464670')
db.add('devtr.jail_'+message.author.id, 1)
     const kanal = message.guild.channels.find(c => c.id == "792135745879670844")
    const embed1 = new Discord.RichEmbed() 
    .setDescription(`${kullanıcı} adlı üye cezalıya atıldı!

   Sebeb : **${reason}**`)
    .setColor("BLACK")
    .setFooter(message.member.nickname , message.author.avatarURL)
    .setTimestamp()
  
  
let embed = new Discord.RichEmbed() 
  .setDescription(`${kullanıcı} adlı üye **${reason}** Sebebiyle Ceczalandırıldı! `) 
  return message.channel.send(embed).then(kanal.send(embed1)).then(m => m.delete(5000));
  
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ceza","cezalandır"],
  kategori: "Yetkili Komutları",
  permLevel: 0
}

exports.help = {
  name: 'jail',
  description: "Etiketlenen kişinin tüm rollerini alıp jail'e atar.",
  usage: '.jail @etiket sebep'
} 