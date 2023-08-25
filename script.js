const operationElement = document.getElementById('operation');
const reponseElement = document.getElementById('reponse');
const resultatElement = document.getElementById('resultat');
const verifierButton = document.getElementById('verifier');

let resultatAttendu;

function genererOperation() {
    const operandes = [Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1];
    const operateurs = ['+', '-', '*'];
    const operateur = operateurs[Math.floor(Math.random() * operateurs.length)];

    const operation = `${operandes[0]} ${operateur} ${operandes[1]}`;
    resultatAttendu = eval(operation);

    operationElement.textContent = operation;
    reponseElement.value = '';
    resultatElement.textContent = '';
}

function verifierReponse(reponseUtilisateur) {

    if (isNaN(reponseUtilisateur)) {
        resultatElement.textContent = 'Veuillez saisir le résultat';
        resultatElement.style.color = 'red';
        resultatElement.style.fontSize = '18px';
        resultatElement.style.marginTop = '16px';
        resultatElement.style.fontWeight = 'Bold';
    } else if (parseFloat(reponseUtilisateur) === resultatAttendu) {
        resultatElement.textContent = 'Correct !';
        resultatElement.style.color = 'green';
        resultatElement.style.fontSize = '18px';
        resultatElement.style.marginTop = '16px';
        resultatElement.style.fontWeight = 'Bold';
        setTimeout(() => {
            genererOperation();
        }, 2000);
    } else {
        resultatElement.textContent = 'Faux !';
        resultatElement.style.color = 'Red';
        resultatElement.style.marginTop = '16px'
        resultatElement.style.fontSize = '22px';
        resultatElement.style.fontWeight = 'Bold';
    }
}

verifierButton.addEventListener('click', () => {
    const reponseUtilisateur = reponseElement.value;
    verifierReponse(reponseUtilisateur);
});

window.addEventListener('load', () => {
    genererOperation();
});
