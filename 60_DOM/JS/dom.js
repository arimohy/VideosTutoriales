/*console.log(window)
        let texto="aprendiendo javascsript hola yhomira";
        const hablar=(texto)=>speechSynthesis.
        speak(new SpeechSynthesisUtterance(texto))

        hablar(texto);

console.log("******Elementos*******")
console.log(document)
console.log(document.head)
console.log(document.body)
console.log(document.documentElement)
console.log(document.forms)
console.log(document.scripts);
document.write("<h2>Hola mundo jajajaja </h2>")

console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"))
console.log(document.getElementsByName("nombre"))
console.log(document.getElementById("menu"))

console.log(document.querySelector("#menu"))
console.log(document.querySelector("a"))
console.log(document.querySelectorAll("a"))
document.querySelectorAll("a").forEach((el)=>console.log(el))
console.log(document.querySelector(".card"))
console.log(document.querySelectorAll(".card"))
console.log(document.querySelectorAll(".card")[2])
console.log(document.querySelector("menu li"))*/

//DATA ATRIBUTOS VIDEO 63
/*
console.log(document.documentElement.lang)

console.log(document.documentElement.getAttribute("lang"))
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

console.log(document.documentElement.lang="es")
console.log(document.documentElement.getAttribute("lang"))


const $linkDOM=document.querySelector(".link-dom");

$linkDOM.setAttribute("target","_black")
$linkDOM.setAttribute("rel","noopener")
$linkDOM.setAttribute("href","https://youtube.com")
console.log($linkDOM.hasAttribute("rel"))
$linkDOM.removeAttribute("rel")
console.log($linkDOM.hasAttribute("rel"))

//Data-Atributes
console.log($linkDOM.getAttribute("data-description"))
console.log($linkDOM.dataset)
console.log($linkDOM.dataset.description)
$linkDOM.setAttribute("data-description","Modelo de objeto del documento")
console.log($linkDOM.dataset.description)
$linkDOM.dataset.description="SUSCRIPCIONES"
console.log($linkDOM.dataset.description)
console.log($linkDOM.hasAttribute("data-id"))
console.log($linkDOM.removeAttribute("data-id"))
console.log($linkDOM.hasAttribute("data-id"))
*/

const $linkDOM=document.querySelector(".link-dom");

console.log($linkDOM.style)
console.log($linkDOM.getAttribute("style"))
console.log($linkDOM.style.backgroundColor)
console.log($linkDOM.style.color)
console.log(window.getComputedStyle($linkDOM))
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration","none")
$linkDOM.style.setProperty("display","block")
$linkDOM.style.width="50%";
$linkDOM.style.textAlign="center";
$linkDOM.style.marginLeft="auto";
$linkDOM.style.marginRight="auto";
$linkDOM.style.padding="1rem";
$linkDOM.style.borderRadius=".5rem";

console.log($linkDOM)
//variables css custo, propi

const $html=document.documentElement,
$body=document.body;

let varDarkColor=getComputedStyle($html).getPropertyValue("--dark-color"),
varYellowColor=getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor,varYellowColor)

$body.style.backgroundColor=varDarkColor;
$body.style.color=varYellowColor;

$html.style.setProperty("--dark-color","#000")
varDarkColor=getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.setProperty("background-color",varDarkColor)






