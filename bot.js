//Cargamos la librería de Discord.js
const Discord = require("discord.js");

//Este será el bot en sí.
const client = new Discord.Client();

//El objeto raid
function Plan(id, maxMembers, message){
  this.id = id;
  this.maxMembers = maxMembers;
  this.message = message;
  this.autor = message.author;
  this.lista = [message.author];
}

//Métodos

Plan.prototype.dameLista = function(){
  for(var i = 0; i < this.lista.length; i++){
    this.message.channel.send("<@" + this.lista[i].id + ">");
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

    else if(mensaje.match("buscoraid \d")){
      var arrRaid = [message.author];
      message.channel.send("El usuario <@" + message.author.id + "> va a iniciar una raid");
      var raid = new Plan(0, 6, message);
      message.channel.send("Apuntados hasta ahora: ");
      raid.dameLista();
    }

  }
});

client.login(process.env.TOKEN_BOT);

