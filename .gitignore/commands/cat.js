const snek = require("snekfetch");
const Discord = require('discord.js')
const api = "http://aws.random.cat/meow";

exports.run = async (client, message, args) => {
    let msg = await message.channel.send("**<a:Load:491296766835294208> Generating...**");

    let file = (await snek.get(api)).body.file;
    if(!file) return message.channel.send("**I broke ! Try again.**");

    await message.channel.send({files: [
        {
            attachment: file,
            name: file.split("/").pop()
        }   
    ]});

    msg.delete();

let embed2 = new Discord.RichEmbed()
    .setTitle('Commande `r!cat` a été utilisée !')
    .setColor('#36393F')
    .addField(`User:`, `\`${message.author.username}\``)
    .addField(`ID:`, `\`${message.author.id}\``)
    .addField(`Discrinator:`, `\`${message.author.discriminator}\``)
    .addField(`Created At:`, `\`${message.author.createdAt}\``)
    .addField(`GuildID:`, `\`${message.guild.id}\``)
    .addField(`Guild Name:`, `\`${message.guild.name}\``)
    .addField(`Channel:`, `\`#${message.channel.name} (${message.channel.id})\``)
    .addField(`Full content:`, `\`${message.content}\``) 
    .addField(`URL:`, `\`${file}\``) 
    .setThumbnail(message.author.avatarURL)
  
  client.channels.get('503494406264061963').send({embed: embed2});
}
