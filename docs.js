const listItems = document.querySelectorAll("li");



function toggleDone (e) {
    if(!e.target.className){
        e.target.className = "done"

    }else{
        e.target.className=""
    }
}

listItems.forEach((item) =>{
item.addEventListener("click" , toggleDone)

});



   



// function Changes(){
// const myHeading = document.querySelector("h1");
// if(myHeading.textContent == "Mozzila is cool"){
// myHeading.textContent = "Hello World"
// }else {
//     myHeading.textContent = "Mozzila is cool"
// }
// }
// const h1 = document.querySelector("h1")
// h1.addEventListener("click" ,Changes)


const myImg = document.querySelector("img");

myImg.addEventListener("click" , () => {
    const mySrc = myImg.getAttribute("src")

    if(mySrc == "./images/fox.png"){
        myImg.setAttribute( "src","./images/react.png")
    }else {
        myImg.setAttribute("src","./images/fox.png")
    }
})



const myButton = document.querySelector("button")
const myHeading = document.querySelector("h1")

function setUserName (){
    const myName = prompt("please enter your name")
    if(!myName){
        setUserName();
    }else{

    localStorage.setItem ("name" , myName)
    myButton.textContent = `Mozilla is cool, ${myName}`
    }
}


if(!localStorage.getItem("name")){
    setUserName();
}else {
const storedName = localStorage.getItem("name");
myHeading.textContent = `Mozilla is cool, ${storedName}`
}

myButton.addEventListener("click" , () => {
setUserName();
})