function getElementvalue(id){
    let input = document.getElementById(id);
    let inputValue = input.value;
   let newinput = parseFloat(inputValue);
    input.value = "";
    return newinput;
   
}



function getElementFromText(id){
    let element = document.getElementById(id);
    let textelement = element.innerText;
    let newelement = parseFloat(textelement);
    return newelement;
}

function setelement(id, value){
    document.getElementById(id).innerText = value;
}