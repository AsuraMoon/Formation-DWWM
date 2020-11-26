const RESPONSES = ["b", "d"];
let userResponses = [];
let checkArray = [];

const FORM = document.querySelector("#QuizNBA");

/** Des que l'utilisateur soumet le formulaire grâce à l'EVENTLISTENER */
FORM.addEventListener("submit", (event) => {

// validation.js:8 Uncaught TypeError: Cannot read property 'addEventListener' of null
// at validation.js:8
// (anonymous) @ validation.js:8

	/** On ne souhaite pas que la page se recharge */
	event.preventDefault();

	/* On boucle sur le tableau des réponses* */
	for (let i = 1; i <= RESPONSES.length; i++) {
		/**
		 * On push les réponses dans le tableau userResponses
		 * grace à querySelector
		 */
		userResponses.push(
			document.querySelector(`input[name="reponse${i}"]:checked`).value
		);
	}
	console.log(userResponses)
	
	checkIsTrue(userResponses);

	userResponses = [];
});

function checkIsTrue(array) {
	/** On boucle tant que i < la longueur du tableau passer en parametre */

	for (let i = 0; i < array.length; i++) {
		/** Si reponse juste alors return true sinon return false */
		if (array[i] === RESPONSES[i]) {
			checkArray.push(true);
        } 
        else {
			checkArray.push(false);
		}
    }
console.log(checkArray);
checkArray = []
}