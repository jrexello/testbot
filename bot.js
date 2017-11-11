//Cargamos la librería de Discord.js
const Discord = require("discord.js");

//Este será el bot en sí.
const client = new Discord.Client();

var mensaje = "";

client.on("ready", () => {
  console.log("I am ready!");
});

//El bot recibe un mensaje
client.on("message", message => {
  //Solo hacemos caso a los que empiecen con !
  if (message.content.startsWith("!")) {
    mensaje = message.content.substring(1);

    if(mensaje === "culo"){

      message.channel.send("Me gustan grandes");
    }

    else if(mensaje === "buscoraid"){
      var arrRaid = [message.author];
      message.channel.send("El usuario " + message.author.tag + " va a iniciar una raid");
      message.channel.send("Apuntados hasta ahora: ");
      for(var i = 0; i < arrRaid.length; i++){
        message.channel.send(arrRaid[i]);
      }
    }

  }
});

client.login(process.env.TOKEN_BOT);

