$(document).ready(function() {

  function generateCompliment() {

    var compliments = [
      "<strong>Lorsqu'un jour férié tombe un jeudi, que peut-on faire le vendredi?</strong> <br><br>A) Le pont - B) Le tunnel",
      "<strong>Qu'est-il préférable de manger lors du goûter si on aime la vie?</strong> <br><br>A) Un cookie - B) Une ogive nucléaire",
      "<strong>De quel club font partie Jim Morrison, Jimi Hendrix ou encore Janis Joplin?</strong> <br><br>A) Le Club des 27 - B) Le FC Lorient",
      "<strong>Quel est le nom de l'actrice espagnole qui a joué pour Almodovar mais aussi dans Clem?</strong> <br><br>A) Victoria Abril - B) Bruno Mars",
      "<strong>Qui meurt de plus en plus chaque jour?</strong> <br><br>A) Les forêts - B) Les banques",
      "<strong>Qu'est-ce qui est le plus facile à trouver?</strong> <br><br>A) Le sens de la vie - B) Le sens d'une clé USB",
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