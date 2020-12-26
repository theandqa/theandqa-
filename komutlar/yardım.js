const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
 
  let prefix = ayarlar.prefix
 
  if (!params[0]) {
    message.channel.sendCode("▪ Modarasyon",` [N A R K O T İ K]

${prefix}erkek          ::  Kullanıcıyı erkek olarak kayıt eder.
${prefix}kız            ::  Kullanıcıyı kız olarak kayıt eder.
${prefix}jail           ::  Kullanıcıyı cezalıya atar.
${prefix}unjail         ::  Kullanıcyı cezasını kaldırır.
${prefix}say            ::  Sunucunun üye, ses, boost, aktiflik, tag, sayar,
${prefix}yetkiliisim    ::  Yetkili kullanıcının adını sunucuda değiştirir.
${prefix}tagisim        ::  Taglı üyeleri adını değiştirir



# Komutlar hakkında yardım almak icin ${prefix}yardım <komut ismi>`);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.sendCode('▪ Modarasyon', `= ${command.help.name} =

Hakkında  :: ${command.help.description}
Kullanım  :: ${prefix}${command.help.usage}`);
    }
  }
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Komut kategorilerini gösterir.',
  usage: 'yardım'
};