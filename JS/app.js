
'use strict'

function clickMe(Element){
    if (Element.checked){
        document.getElementById("cbox1").style.textDecoration="line-through";
    }else{
        document.getElementById("cbox1").style.textDecoration="none";
    }
}
