const display = document.getElementById('display');

function buttonPress(input){
    display.value +=input;
}

function clearBtn(){
    display.value = ""
}
function delBtn(){
    display.value = (display.value).substring(0,(display.value).length-1);
}

function eqaualBtn(){
    try{
        display.value = eval(display.value);
    }catch(e){
        display.value= "(0.0) ..Errrrrr...";
    }
}