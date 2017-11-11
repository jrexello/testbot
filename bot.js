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

    else if(mensaje.match(/crearaid \d/)){
      var numero = Number(mensaje.substring(mensaje.length-2));
      var arrRaid = [message.author];
      if(existePlan(numero, 6)){
        message.channel.send("Ya existe una raid con ese número, usa otro.");
        return;
      }
      message.channel.send("El usuario <@" + message.author.id + "> va a iniciar una raid");     
      var raid = new Plan(numero, 6, message);
      arrPlanes.push(raid);
      message.channel.send("Apuntados hasta ahora: ");
      raid.dameLista();
    }

    else if(mensaje.match(/borraraid \d/)){
      var numero = Number(mensaje.substring(mensaje.length-2));
      var arrRaid = [message.author];
      if(existeRaid(numero, 6)){
        borraPlan(numero, 6);
        message.channel.send("Raid borrada");
      }
      else {
        message.channel.send("No existe esa raid, no puedo borrarla");
      }
    }

  }
});

//Confirma si ya existe esa raid.
function existePlan(num, tipo){
  for(var i = 0; i < arrPlanes.length; i++){
    if((arrPlanes[i].id === num) && (arrPlanes[i].maxMembers === tipo)) return true;
  }
  return false;
}

//Elimina una raid
function borraPlan(num, tipo){
  for(var i = 0; i < arrPlanes.length; i++){
    if((arrPlanes[i].id === num) && (arrPlanes[i].maxMembers === tipo)){
      arrPlanes.splice(i,1);
    }
  }
}

client.login(process.env.TOKEN_BOT);

