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
document.write("<h2>Hola mundo jajajaja </h2>")*/

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
console.log(document.querySelector("menu li"))