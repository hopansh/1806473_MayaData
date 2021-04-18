function getHome(){
    var iframe=document.getElementById("iframe")
    iframe.innerHTML="<iframe src='home'></iframe>"
    var aboutTile=document.getElementById("about")
    var homeTile=document.getElementById("home")
    aboutTile.setAttribute("class","")
    homeTile.setAttribute("class","selected")
}
function getAbout(){
    var iframe=document.getElementById("iframe")
    iframe.innerHTML="<iframe src='about'></iframe>"
    var aboutTile=document.getElementById("about")
    var homeTile=document.getElementById("home")
    aboutTile.setAttribute("class","selected")
    homeTile.setAttribute("class","")
}