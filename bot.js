//Cargamos la librería de Discord.js
const Discord = require("discord.js");

//Este será el bot en sí.
const client = new Discord.Client();

//El array donde se guardarán las planificaciones

var arrPlanes = [];

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

    else if(mensaje.match(/crearraid \d/)){
      var numero = Number(mensaje.substring(mensaje.length-2));
      var arrRaid = [message.author];
      message.channel.send("El usuario <@" + message.author.id + "> va a iniciar una raid");
      if(existeRaid(numero)){
        message.channel.send("Ya existe una raid con ese número, usa otro.");
        return;
      }
      var raid = new Plan(numero, 6, message);
      arrPlanes.push(raid);
      message.channel.send("Apuntados hasta ahora: ");
      raid.dameLista();
    }

  }
});

//Confirma si ya existe esa raid.
function existeRaid(num){
  for(var i = 0; i < arrPlanes.length(); i++){
    if((arrPlanes[i].id === num) && (arrPlanes[i].maxMembers === 6)) return true;
  }
  return false;
}

client.login(process.env.TOKEN_BOT);

