let menuButton=document.querySelector(".header button")
let menu=document.querySelector(".header ul")
let home=document.querySelector(".background")
let projects=document.querySelector(".projects")
let skills=document.querySelector(".skills")
let contact=document.querySelector(".contact")
let about=document.querySelector(".about")
let homeLink=document.querySelectorAll(".header ul li")[0]
let projectsLink=document.querySelectorAll(".header ul li")[1]
let aboutLink=document.querySelectorAll(".header ul li")[2]
let skillsLink=document.querySelectorAll(".header ul li")[3]
let contactLink=document.querySelectorAll(".header ul li")[4]
let scrollTop=document.querySelector(".scrollTop")

menuButton.onclick=()=>{
    menu.classList.toggle("active")
}
homeLink.onclick=()=>{
    home.scrollIntoView({
        behavior:"smooth"
    })
}
projectsLink.onclick=()=>{
    projects.scrollIntoView({
        behavior:"smooth"
    })
}
aboutLink.onclick=()=>{
    about.scrollIntoView({
        behavior:"smooth"
    })
}
skillsLink.onclick=()=>{
    skills.scrollIntoView({
        behavior:"smooth"
    })
}
contactLink.onclick=()=>{
    contact.scrollIntoView({
        behavior:"smooth"
    })
}
scrollTop.onclick=()=>{
    home.scrollIntoView({behavior:"smooth"})
}