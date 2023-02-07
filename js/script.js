function click()
{
    let button = document.createElement('button')
    let img = document.createElement('img')
    button.textContent = "elimina"
    img.src ="https://upload.wikimedia.org/wikipedia/it/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png"

    button.onclick = function(){
        body.removeChild(img)
    }
} 

div.appendChild(img);
div.appendChild(button)
body.appendChild(div)

