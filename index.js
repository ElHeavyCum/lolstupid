const Discord = require("discord.js");

const TOKEN = "lol";
const PREFIX = "$";
var fortunes = [
    "shut up rarted",
    "ok nice one rarted",
    "Thanks",
    "me too",
    "lol stupid",
    "lol stinky"
];

var beaches = ""

var bot = new Discord.Client();

bot.on("ready", function() {

  console.log("Thanos will return.");
});

bot.on("message", function(message) {
  if (message.author.equals(bot.user)) return;

  if (!message.content.startsWith(PREFIX)) return;

  var args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0].toLowerCase()) {

    case "ping":
      message.channel.send("DON'T PING ME YOU FILTH.");
      break;

    case "joe":
      for(var i=0;i<5;i++) { message.channel.send("<@131986878109843456>") }
      message.channel.bulkDelete(6);
      break;

    case "george":
      for(var i=0;i<5;i++) { message.channel.send("<@109830381989031936>") }
      message.channel.bulkDelete(6);
      break;

    case "karen":
      for(var i=0;i<5;i++) { message.channel.send("<@!149659255182589955>") }
      message.channel.bulkDelete(6);
      break;

    case "jack":
      for(var i=0;i<5;i++) { message.channel.send("<@85592897386201088>") }
      message.channel.bulkDelete(6);
      break;

    case "kiwi":
      for(var i=0;i<5;i++) { message.channel.send("<@!107901739507666944>") }
      message.channel.bulkDelete(6);
      break;

    case "money":
      for(var i=0;i<5;i++) { message.channel.send("<@!107901739507666944> gimme money") }
      break;

    case "mason":
      for(var i=0;i<5;i++) { message.channel.send("<@!171043591592869896>") }
      message.channel.bulkDelete(6);
      break;

    case "info":
      message.channel.send("Thanos will return. :sunglasses:");
      break;

    case "8ball":
      if (args[1]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);﻿
      else message.channel.send("Can't read that rarted.");
      break;

    case "embed":
      var embed = new Discord.RichEmbed()
        .addField("IMPORTANT MESSAGE BY THE BOT!" , "Look at this fucking geek LOL.")
        .setColor(0x00FFFF)
        .setFooter("What are you looking here for dummy?")
        .setThumbnail(message.author.avatarURL)
      message.channel.send(embed);
      break;

    default:
        message.channel.send("nice command rarted. :ok_hand::skin-tone-5:");

      }
});

bot.login(TOKEN);
