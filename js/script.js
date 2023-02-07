function click()
{
    let p = document.createElement('p')
    let button = document.createElement('button')
    button.textContent = "togli"
    p.textContent ="Il nuovo film più visto è..."

    button.onclick = function(){
        body.removeChild(p);
    }
} 

div.appendChild(p);
div.appendChild(button)
body.appendChild(div)

