$(document).ready(function() {

  function generateCompliment() {

    var compliments = [
      "<strong>Lorsqu'un jour férié tombe un jeudi, que peut-on faire le vendredi?</strong> <br><br>A) Le pont - B) Le tunnel",
      "<strong>Qu'est-il préférable de manger lors du goûter si on aime la vie?</strong> <br><br>A) Un cookie - B) Une ogive nucléaire",
      "<strong>De quel club font partie Jim Morrison, Jimi Hendrix ou encore Janis Joplin?</strong> <br><br>A) Le Club des 27 - B) Le FC Lorient",
      "<strong>Quel est le nom de l'actrice espagnole qui a joué pour Almodovar mais aussi dans Clem?</strong> <br><br>A) Victoria Abril - B) Bruno Mars",
      "<strong>Qui meurt de plus en plus chaque jour?</strong> <br><br>A) Les forêts - B) Les banques",
      "<strong>Qu'est-ce qui est le plus facile à trouver?</strong> <br><br>A) Le sens de la vie - B) Le sens d'une clé USB",
      "<strong>Quel est le numéro du département du Rhône?</strong> <br><br>A) Le 69 - B) La levrette",
      "<strong>Comment s'appelait ce roi des Francs couronné en 800?</strong> <br><br>A) Charlemagne - B) Charles, prends ton temps",
      "<strong>Conor Mcgregor, pratiquant d'art martial, est un champion de...?</strong> <br><br>A) MMA - B) MAAF",
      "<strong>Comment se dégustent les huitres?</strong> <br><br>A) Par six - B) Partouze",
      "<strong>Terminez cette expression : Les bons comptes font...?</strong> <br><br>A) Les bons amis - B) Les Balkany",
    ];

    var randomCompliments = Math.floor(Math.random() * compliments.length);

    document.getElementById("compliment").innerHTML = compliments[randomCompliments];
  }

  $('.get-compliment').on('click', function(event) {
    event.preventDefault();
    generateCompliment();
  });
});


// update footer copyright year

var today = new Date();
var year = today.getFullYear();

var copyright = document.getElementById("copyright");
copyright.innerHTML = '© Marina Marques '+ year;