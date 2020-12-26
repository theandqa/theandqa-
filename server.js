const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const moment = require("moment");
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const weather = require("weather-js");
const fs = require("fs");
const db = require("quick.db");
const http = require("http");
const express = require("express");
require("./util/eventLoader.js")(client);
const path = require("path");
const request = require("request");
const snekfetch = require("snekfetch");
const queue = new Map();
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");
const Hserver = new Discord.WebhookClient("792169537838907472", "7PyI6WpCE-5SGzkK10cWdU7FYOLJh0fSdo63fxu0fFHDHqTkaJzR3ZtdabSVpsqi7G0z")

const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);






var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};





client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);




client.on("guildMemberAdd", member => {  
    let user = client.users.get(member.id);
    require("moment-duration-format");
      const kurulus = new Date().getTime() - user.createdAt.getTime();  
    const embed = new Discord.RichEmbed()
   
    var kontrol;
  if (kurulus < 1296000000) kontrol = '**Yeni Hesap :warning:**'
  if (kurulus > 1296000000) kontrol = '**Onaylandı! :ribbon:**'
    moment.locale("tr");
  Hserver.send("🎉  `Hoşgeldin!` " + member + " Seninle \`" + member.guild.memberCount + "\ `Kişiyiz. \n\n  **ismini vea kullandığın nick <#792135677386162216>** \n\n  **<@&792135497837051936> seninle ilgilenicektir.** \n\n  Hesabın Oluşturulma Tarihi:" + moment(member.user.createdAt).format("** YYYY __DD MMMM dddd (hh:mm:ss)__**") +  "\n\n"  + kontrol + " \n\n  **Tagımızı alarak **' Nᴀʀᴋᴏᴛɪᴋ **  bize destek olabilirsin.** \n",                  

    );
  });









client.on('ready', ()=>{
client.channels.get('792135687024541706').join()
})











client.on("guildMemberAdd", async member => {
  
   
    if(member.user.bot) {
     
      member.guild.roles.forEach(async function(yetkilirol){
  if(yetkilirol.id ==="655327985351524363")return
  if(yetkilirol.hasPermission("ADMINISTRATOR")){
       yetkilirol.setPermissions((yetkilirol.permissions-8))    
     }
      })
      let korumakanalı = client.channels.get("792135757971587132")
      if(!korumakanalı || korumakanalı === null){
        member.ban(member);
         member.guild.owner.send(`BOT EKLENDİ GUARD 2 \nBanlanan Bot: **${member}  `)
     }
      else{
        
      member.ban(member);
      korumakanalı.send(`**GUARD 2 BOT EKLENDI** \n**Banlanan Bot**: **${member}`)
     }
  }
    else{
      
    }
  
  })











//OTO TAG
client.on("userUpdate", async (oldUser, newUser) => {
  if (oldUser.username !== newUser.username) {
    let tag = "' Nᴀʀᴋᴏᴛɪᴋ"; //tagınız
    let sunucu = "780800946523340850"; //sunucu ID
    let kanal = "792135753689202720"; //log kanal id
    let rol = "792135530929192991"; // rol ID
    if (
      newUser.username.includes(tag) &&
      !client.guilds
        .get(sunucu)
        .members.get(newUser.id)
        .roles.has(rol)
    ) {
      client.channels
        .get(kanal)
        .send(
          `${newUser} ${tag} Tagını aldığı için <@&${rol}> Rolünü kazandı! `
        );
      client.guilds
        .get(sunucu)
        .members.get(newUser.id)
        .addRole(rol);
    }
    if (
      !newUser.username.includes(tag) &&
      client.guilds
        .get(sunucu)
        .members.get(newUser.id)
        .roles.has(rol)
    ) {
      client.guilds
        .get(sunucu)
        .members.get(newUser.id)
        .removeRole(rol);
      client.channels
        .get(kanal)
        .send(
          `${newUser} ${tag} Tagını çıkardığı için <@&${rol}> Rolünü kaybetti!  `
        );
    }
  }
});
