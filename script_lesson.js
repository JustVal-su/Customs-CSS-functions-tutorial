let progressbar = document.querySelector("progress");
let counter = 0;
let lives = 3;
let attemps = " attemps";
let heart1 = document.getElementById("1");
let heart2 = document.getElementById("2");
let heart3 = document.getElementById("3");
let button_2_disable = document.getElementById("remove_button");

// La fonction suivante gère l'affichage de la couleur des coeurs indépendamment du reste du code.
function heartColorDisplay() {
    if (lives == 3) {
        heart1.style.color = "rgb(255, 89, 89)";
        heart2.style.color = "rgb(255, 89, 89)";
        heart3.style.color = "rgb(255, 89, 89)";
    } else if (lives == 2) {
        heart1.style.color = "rgb(255, 89, 89)";
        heart2.style.color = "rgb(255, 89, 89)";
        heart3.style.color = "rgb(0, 0, 0)";  
    }  else if (lives == 1) {
        heart1.style.color = "rgb(255, 89, 89)";
        heart2.style.color = "rgb(0, 0, 0)";
        heart3.style.color = "rgb(0, 0, 0)";  
    }  else if (lives == 0) {
        heart1.style.color = "rgb(0, 0, 0)";
        heart2.style.color = "rgb(0, 0, 0)";
        heart3.style.color = "rgb(0, 0, 0)";  
    }

    requestAnimationFrame(heartColorDisplay);
}
requestAnimationFrame(heartColorDisplay);

// La fonction ci-dessous gère la barre de vie ainsi que l'affichage interactif de l'élément label.
// Ce dernier fait office de compteur de vies.
function increase() {
    if (counter < 5) {
        counter++;
        progressbar.setAttribute("value", counter);
        let label = document.querySelector("label");
        label.innerHTML = counter + "/5";
        console.log(counter);
    }
}

// Cette fonction gère le nombre de vie ainsi qu'une partie du code concernant le bouton.
// Je n'ai pas pu y intégrer la réactivation du bouton car elle fonctionne au click de ce dernier;
// donc si on ne peut pas le cliquer parce qu'il est désactivé on ne peut pas le réactiver.
function submit() {
    let answer = document.getElementById("answer").value;
    let solution = document.getElementById("solution");
    let textSolution = solution.innerText;

    if (answer == textSolution) {
        console.log("Perfect!");
        increase();
    } else {
        console.log("It seems like this is not the expected answer");
        console.log("Your answer : " + answer);
        lives--;

        if (lives == 0) {
            button_2_disable.setAttribute("disabled", "");
            document.getElementById("remove_button").style.cursor = "not-allowed";
            console.log("You lost! Buy more hearts to continue, or retry the lesson.")
        } else if (lives == 1) {
            attemps = " attemp";
            console.log(lives + attemps + " remaining");
        } else if (lives < 0) {
            lives = 0;
        } else {
            console.log(lives + attemps + " remaining");
        }
    }
}

// Avant ce morceau de code était dans un fichier javascript séparé, "popup.js".

let bouton = document.getElementById("ouvrirPopup");
let popup = document.getElementById("maPopup");
let fermer = document.querySelector(".fermer");
let r1 = document.getElementById("r1");
let r2 = document.getElementById("r2");
let r3 = document.getElementById("r3");

// Les trois fonctions suivantes gèrent l'affichage de la popup selon les interactions.

bouton.onclick = function() {
    popup.style.display = "block";
}

fermer.onclick = function() {
    popup.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

// Fin du morceau qui était situé dans un fichier séparé.

// Ici on gère les boutons pour acheter plus de vies : il ne faut pas qu'on puisse acheter jusqu'à une vie si on en a 2, par exemple.
function addLivesButton() {
    if (lives == 3) {
        document.getElementById("r1").style.cursor = "not-allowed";
        document.getElementById("r2").style.cursor = "not-allowed";
        document.getElementById("r3").style.cursor = "not-allowed";
        r1.setAttribute("disabled", "");
        r2.setAttribute("disabled", "");
        r3.setAttribute("disabled", "");
    } else if (lives == 2) {
        document.getElementById("r1").style.cursor = "not-allowed";
        document.getElementById("r2").style.cursor = "not-allowed";
        document.getElementById("r3").style.cursor = "auto";
        r1.setAttribute("disabled", "");
        r2.setAttribute("disabled", "");
        r3.removeAttribute("disabled");
    } else if (lives == 1) {
        document.getElementById("r1").style.cursor = "not-allowed";
        document.getElementById("r2").style.cursor = "auto";
        document.getElementById("r3").style.cursor = "auto";
        r1.setAttribute("disabled", "");
        r2.removeAttribute("disabled");
        r3.removeAttribute("disabled");
    } else if (lives == 0) {
        document.getElementById("r1").style.cursor = "auto";
        document.getElementById("r2").style.cursor = "auto";
        document.getElementById("r3").style.cursor = "auto";
        r1.removeAttribute("disabled");
        r2.removeAttribute("disabled");
        r3.removeAttribute("disabled");
    }
    requestAnimationFrame(addLivesButton);
}
requestAnimationFrame(addLivesButton);

// Suite du script.

// Les trois fonctions suivantes font en sorte que le bouton "submit" puisse être réactivé si l'utilisateur repasse la barre des 0 vies (donc après avoir été en-dessous de ce seuil).

function add1() {
    lives = 1;
    if (lives != 0) {
        button_2_disable.removeAttribute("disabled");
        document.getElementById("remove_button").style.cursor = "auto";
    }
}

function add2() {
    lives = 2;
    if (lives != 0) {
        button_2_disable.removeAttribute("disabled");
        document.getElementById("remove_button").style.cursor = "auto";
    }
}

function add3() {
    lives = 3;
    if (lives != 0) {
        button_2_disable.removeAttribute("disabled");
        document.getElementById("remove_button").style.cursor = "auto";
    }
}