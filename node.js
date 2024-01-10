const licolors=document.querySelectorAll("li")
for(let i=0;i<licolors.length;i++){
    if (i==0){
        licolors[0].style.display="inline-block"
        licolors[0].style.margin="1px"
        licolors[0].style.padding="17px"
        licolors[0].style.paddingRight="200px"
        licolors[0].insertAdjacentHTML('afterend', '<br>');
    }else if (i==1){
        licolors[1].style.display="inline-block"
        licolors[1].style.margin="1px"
        licolors[1].style.padding="17px"
        licolors[1].style.paddingRight="143px"
        licolors[1].insertAdjacentHTML('afterend', '<br>');
    }else{
        licolors[i].style.display="inline-block"
        licolors[i].style.margin="1px"
        licolors[i].style.padding="17px"
        licolors[i].insertAdjacentHTML('afterend', '<br>');
    }
    licolors[2].style.paddingRight="186px"
    licolors[3].style.paddingRight="162px"
    licolors[4].style.paddingRight="129px"
    licolors[5].style.paddingRight="137px"
    licolors[6].style.paddingRight="95px"
}

for(let i=0;i<licolors.length;i++){
    if (licolors[i].textContent.endsWith("Done")){
    licolors[i].style.backgroundColor="green"
    }else if (licolors[i].textContent.endsWith("Coming")){
    licolors[i].style.backgroundColor="Red"
    }else if (licolors[i].textContent.endsWith("Ongoing"))
    licolors[i].style.backgroundColor="yellow"

}

const currentdate = new Date();
const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];
const date = currentdate.getDate();
const day = currentdate.getDay();
const month = currentdate.getMonth();
const year = currentdate.getFullYear();
let hours = currentdate.getHours(); 
let minutes = currentdate.getMinutes();
let seconds = currentdate.getSeconds();

if (hours < 10){
    hours = "0" + hours; 
}
if (minutes < 10){
    minutes = "0" + minutes; 
}
if (seconds < 10){
    seconds = "0" + seconds; 
}
const currenttime = `${months[month]} ${date}, ${year} ${hours}:${minutes}:${seconds}`;
var n=document.createElement("h5")
n.innerText=currenttime
var parent=document.getElementsByClassName("wrapper")[0]
var last=document.getElementsByTagName("ul")[0]

parent.insertBefore(n,last)
n.id="time"

let timeone=document.getElementById("time")

function changecolors(){
const colors=["black","white","red","yellow","pink","blue","green","skyblue"]
const randomcolor=colors[Math.floor(Math.random()*colors.length)]
timeone.style.backgroundColor=randomcolor
timeone.style.display="inline"
}
setInterval(changecolors,1000)
setInterval(updateTime,1000)
function updateTime() {
    const currentDate = new Date(); // Get the current date every second
    hours = currentDate.getHours(); // Update hours
    minutes = currentDate.getMinutes(); // Update minutes
    seconds = currentDate.getSeconds(); // Update seconds
    if (hours < 10){
        hours = "0" + hours; 
    }
    if (minutes < 10){
        minutes = "0" + minutes; 
    }
    if (seconds < 10){
        seconds = "0" + seconds; 
    }
    const updatedTime = `${months[month]} ${date}, ${year} ${hours}:${minutes}:${seconds}`;
    const timeone = document.getElementById("time");
    timeone.innerText = updatedTime; // Update the displayed time
    changecolors();
}
function changeyearcolor(){
    const yearcolor=document.querySelector("h1")
    const fullcolors=yearcolor.textContent
    let styledText=""
    for (let i=0;i<fullcolors.length;i++){
        if (fullcolors.substr(i,4)==="2024"){
            let differentcolors=["black","red","yellow","pink","blue","green","skyblue"]
            let randomcolors=differentcolors[Math.floor(Math.random()*differentcolors.length)]
            const stylingyear=`<span style="color:${randomcolors}";display:inline;>2024</span>`
        styledText+=stylingyear
        i+=3
        }else{
            styledText+=fullcolors[i]
        }

    }
    yearcolor.innerHTML=styledText
}
setInterval(changeyearcolor,1000)




