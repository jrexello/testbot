//Cargamos la librería de Discord.js
const Discord = require("discord.js");

//Este será el bot en sí.
const client = new Discord.Client();

//El objeto raid
function Plan(maxMembers, message){
  this.maxMembers = maxMembers;
  this.autor = message.autor;
  this.lista = [message.autor];
}

//Métodos

Plan.prototype.dameLista = function(){
  for(var i = 0; i < this.lista.length; i++){
    this.message.channel.send("<@" + this.lista[i].tag + ">");
  }
}

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
      message.channel.send("El usuario <@" + message.author.id + "> va a iniciar una raid");
      var raid = new Plan(6, message);
      message.channel.send("Apuntados hasta ahora: ");
      raid.dameLista();
    }

  }
});

client.login(process.env.TOKEN_BOT);

