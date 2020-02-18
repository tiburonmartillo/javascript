const button = document.getElementById('btncomparar');
button.addEventListener('click',comparar);

const imprimirnombre = document.getElementById('imprimirnombre');

function comparar(){
    let name1 = String(document.getElementById('name1').value);
    let name2 = String(document.getElementById('name2').value);
    
    let age1 = Number(document.getElementById('age1').value);
    let age2 = Number(document.getElementById('age2').value);
    
    if(age1 > age2){
        imprimirnombre.innerText = name1;
        console.log(name1)
} else {
    console.log(name2)
    imprimirnombre.innerText = name2;
}

}