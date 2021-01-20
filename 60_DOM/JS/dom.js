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
//Video 65
/*

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
*/
//clases Css
/*
 const $card=document.querySelector(".card")

 console.log($card)
 console.log($card.className)
 console.log($card.classList)
 console.log($card.classList.contains("rotate-45"))
$card.classList.add("rotate-45")
console.log($card.classList.contains("rotate-45"))
console.log($card.className)
console.log($card.classList)
$card.classList.remove("rotate-45")
console.log($card.classList.contains("rotate-45"))
$card.classList.toggle("rotate-45")
console.log($card.classList.contains("rotate-45"))
$card.classList.toggle("rotate-45")
console.log($card.classList.contains("rotate-45"))
$card.classList.toggle("rotate-45")
$card.classList.replace("rotate-45","rotate-135")
$card.classList.add("opacity-80","sepia")
$card.classList.remove("opacity-80","sepia")
$card.classList.toggle("opacity-80","sepia")
*/
//TEXTO
/*
const $whatlsDOM=document.getElementById("que-es");
let text=`
<p>
parrafo 1
</p>
<p>
parrafo 2
</p>
<mark>
markbiahiasdg
</mark>
`;
//$whatlsDOM.innerText=text;
$whatlsDOM.textContent=text;
$whatlsDOM.innerHTML=text;

$whatlsDOM.outerHTML=text;*/
//traversing
/*
const $cards=document.querySelector(".cards");
console.log($cards)
console.log($cards.children)
console.log($cards.children[2])
console.log($cards.parentElement)//trabajaar con elementos dom
console.log($cards.firstElementChild)
console.log($cards.lastElementChild)
console.log($cards.previousElementSibling)
console.log($cards.nextElementSibling)

//closer metodo que busca el ancestro
console.log($cards.closest("div"))
console.log($cards.closest("body"))
console.log($cards.children[3].closest("section"))*/
//crear etiquetas dinamicas

//const $cards=document.querySelector(".cards");
/*
const $figure =document.createElement("figure"),
$img=document.createElement("img"),
$figcaption=document.createElement("figcaption"),
$figcaptionText=document.createTextNode("Animals"),
$cards=document.querySelector(".cards");

const $figure2=document.createElement("figure");


$img.setAttribute("src","https://placeimg.com/200/200/animals");
$img.setAttribute("alt","Animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText)
$figure.appendChild($img);
$figure.appendChild($figcaption)
$cards.appendChild($figure);

$figure2.innerHTML=`
<img src="https://placeimg.com/200/200/people" alt="people">
<figcaption>people</figcaption>`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones=["primavera","verano","otono","invierno"],
$ul=document.createElement("ul");

document.write("<h3>Estaciones delaño </h3>");
document.body.appendChild($ul);

estaciones.forEach(el=>{
        const $li = document.createElement("li");
        $li.textContent =el;
        $ul.appendChild($li)
})

const continentes=["africa","america","europa","asia","australia"],
$ul2=document.createElement("ul");

document.write("<h3>Continentes del mundo</h3>")
document.body.appendChild($ul2);
$ul2.innerHTML="";
continentes.forEach((el)=>($ul2.innerHTML +=`<li>${el}</li>`))

const meses=[
        "enero",
        "febrero",
        "marrzo",
        "abril",
        "mayo",
        "junio" ,
        "julio",
        "agosto",
        "setiembre",
        "octubre",
        "noviembre",
        "diciembre",
],
$ul3=document.createElement("ul"),
$fragment=document.createDocumentFragment();

meses.forEach(el=>{
        const $li =document.createElement("li");
        $li.textContent=el;
        $fragment.appendChild($li)
})

document.write("<h3> Meses del año </h3>");
$ul3.appendChild($fragment)
document.body.appendChild($ul3)*/

//templade
/*
const $cards=document.querySelector(".cards"),
$template=document.getElementById("template-card").content,
$fragment=document.createDocumentFragment();
cardContent=[
        {
                title:"Tecnologia",
                img:"https://placeimg.com/200/200/tech" 
        },
        {
                title:"ANIMALES",
                img:"https://placeimg.com/200/200/animals" 
        },
        {
                title:"Arquitectura",
                img:"https://placeimg.com/200/200/arch" 
        },
        {
                title:"Personas",
                img:"https://placeimg.com/200/200/people "
        },
        {
                title:"naturaleza",
                img:"https://placeimg.com/200/200/nature" 
        }
];
cardContent.forEach((el)=>{
        $template.querySelector("img").setAttribute("src",el.img);
        $template.querySelector("img").setAttribute("alt",el.title);
        $template.querySelector("figcaption").textContent=el.title;

        let $clone=document.importNode($template,true);
        $fragment.appendChild($clone);
});

$cards.appendChild($fragment);*/
/*
const $cards=document.querySelector(".cards"),
$newCard=document.createElement("figure"),
$clonecards=$cards.cloneNode(true);

$newCard.innerHTML=`
<img src="https://placeimg.com/200/200/any" alt="Any"> 
<figcaption>Any</figcaption>
`;
$newCard.classList.add("card");

//$cards.replaceChild($newCard,$cards.children[2]);
//primera
//$cards.insertBefore($newCard,$cards.firstElementChild)
//eliminar

//$cards.removeChild($cards.lastElementChild)
document.body.appendChild($clonecards);*/
/*
.insertAdjance
*/

const $cards=document.querySelector(".cards"),
$newCard=document.createElement("figure");

let $contencard=`
<img src="https://placeimg.com/200/200/any" alt="Any"> 
<figcaption></figcaption>
`;
$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend",$contencard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any")
$cards.insertAdjacentElement("afterbegin",$newCard);
//iguales
$cards.prepend($newCard)
$cards.before($newCard)
$cards.append($newCard)
$cards.after($newCard)