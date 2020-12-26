const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("../ayarlar.json");
const prefix = ayarlar.prefix;
const emoji = client.emojis.find("name", "790030467575054367"); // sunucunuzdaki onaylama anlamında bir emojiyi yazınız.
exports.run = async (client, message, args) => {
  let verifyroless = message.guild.roles.find(`name`, "Kullanıcak Yetki İsmi");
  if (!message.member.roles.find("id", "792135497837051936"))
  if (!message.member.roles.find("id", "792135478677733397"))
    return message.channel.send(
      `Bu komudu kullacak kadar yetkili değilsin üzgünüm.`
    );

  let isim = args.slice(1).join(" ");
  let kullanici = message.mentions.users.first();

  if (!kullanici)
    return message.channel.send(`Lütfen geçerli bir nick giriniz.`);
  if (!isim) return message.reply(`:warning: Lütfen bir nick giriniz.`);
  if (isim.length > 100)
    return message.reply(
      ` Lütfen \`100\` karakteri geçmeyecek şekilde bir isim giriniz!`
    );
  message.guild.members.get(kullanici.id).setNickname(`† ${isim} ✓`);

  const ısıms = new Discord.RichEmbed()
    .setColor(`black`)
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`${kullanici} Adlı Kişinin İsmi Değiştirildi. `);
  message.channel.send(ısıms);

  let emojilan = message.guild.emojis.find(emoji => emoji.name === "Narkotik_tac3");
  message.react(emojilan);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ytli", "ytisim"]
};

exports.help = {
  name: "yetkiliisim",
  description: "Yetkili Kullanıcıların adını sunucu da değiştirir. ",
  usage: "nick [USER=88116]@kullanıcı[/USER] <kullanıcı adı>"
};