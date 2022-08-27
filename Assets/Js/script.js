/*========== Contenu JS ===========*/
const html = document.querySelector('html')
const check = document.querySelector('#checkbox')
check.addEventListener('change' , function()
{
    html.classList.toggle('dark');
}) 
let button = document.getElementById('contenu-btn');

button.addEventListener('click', () => {
    const height= parseInt(document.getElementById('height').value);
    const weight= parseInt(document.getElementById('weight').value);
    const result= document.getElementById('prod');
    let height_statut=false , weight_statut=false;


    if(height === '' || isNaN(height) || (height<=0)){
        document.getElementById('height_error').innerHTML='Wsh mets ta vrai taille tie fou ou qw';
    }
    else{
        document.getElementById('height_error').innerHTML='';
        height_statut=true;
    }

    if(weight === '' || isNaN(weight) || (weight<=0)){
        document.getElementById('weight_error').innerHTML='Tie serieux on dit un poids frr';
    }
    else{
        document.getElementById('weight_error').innerHTML='';
        weight_statut=true;
    }

    if(height_statut && weight_statut){
        const imc=(weight / ((height*height)/10000)).toFixed(2);
    
        if(imc < 18.5){
            result.innerHTML='Desole tie en insuffisance pondérale en gros tie mal nourris , non jrgl bref ton IMC est de : ' +imc;
        }else if(imc >= 18.5 && imc < 25){
            result.innerHTML ='Toi çava tia une corpulence normale ton IMC est de : ' +imc;
        }else if(imc > 25 && imc< 30){
            result.innerHTML ='Wesh frerot doucement avk la bouffe tie en surpoids , ton IMC est de : ' +imc;
        }
        else if(imc > 30 && imc< 35){
            result.innerHTML ='Courage à toi mon reuf va a la salle et mets toi au regime tie obésité modérée ton IMC est de : ' +imc;
        }
        else if(imc > 35 && imc< 40){
            result.innerHTML ='Mon reuf en vrai toi mm tu sais on deja prevenu avec les FASTFOOD obésité sévère ton IMC est de : ' + imc;
        }
        else if(imc > 40){
            result.innerHTML ='Courage à toi mon gars pour oit its trop grave : obésité morbide ton IMC est de : '+ imc;
        }
        }else{
            alert('Eh tu joue à quoi corrige cette erreur et réessaye');
            result.innerHTML='';
        }

});
