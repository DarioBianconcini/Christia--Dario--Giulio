const div = document.querySelector('.id')
function click()
{
    console.log("funziona il click")
    let div = document.createElement('div')
    let p = document.createElement('p')
    let button = document.createElement('button')
    button.textContent = "chiudi"
    p.textContent ="Il nuovo film più visto è..."

    button.onclick = function(){
        body.removeChild(p);
    }
} 

div.appendChild(p);
div.appendChild(button)
body.appendChild(div)

