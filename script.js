const niveauDiv = document.querySelector('.niveau');
const inputRange = niveauDiv.querySelector('input[type="range"]');
inputRange.value=0;

const etapes=document.querySelectorAll("section");

const formulaire=document.getElementById("formulaire");

const nom=document.getElementById("nom");
const prenom=document.getElementById("prenom");
const email=document.getElementById("email");
const telephone=document.getElementById("telephone");

function afficherEtape(index) {
    etapes.forEach((etape, i) => {
        etape.classList.toggle("active", i === index);
    });
}

let etapeCourante=0;

const bouton1=document.getElementById("suivant1");
bouton1.addEventListener('click', (event) => {
    if(nom.value.trim() && prenom.value.trim()){
        etapeCourante=1;
        afficherEtape(etapeCourante);
        inputRange.value=30;
    }else{
        alert("failed!");
    }
});

const bouton2=document.getElementById("suivant2");
bouton2.addEventListener('click', (event) => {
    if(email.value.trim() && telephone.value.trim()){
        etapeCourante=2;
        afficherEtape(etapeCourante);
        inputRange.value=30+30;
    }else{
        alert("failed!");
    }
});

const boutonsPrecedent = document.querySelectorAll('.btn.secondaire');

boutonsPrecedent.forEach(bouton => {
    bouton.addEventListener('click', () => {
        if (etapeCourante > 0) {
            etapeCourante--;
            afficherEtape(etapeCourante);
        }
    });
});



formulaire.addEventListener('submit', (event) => {
    event.preventDefault();
    
    etapeCourante = 3;
    afficherEtape(etapeCourante);
    inputRange.value=30+30+40;
    
    setTimeout(() => {
        formulaire.reset();
        etapeCourante = 0;
        afficherEtape(etapeCourante);
        inputRange.value=0;
    }, 3000);
});


afficherEtape(etapeCourante);



