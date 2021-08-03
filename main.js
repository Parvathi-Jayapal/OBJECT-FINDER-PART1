function setup(){
    canvas = createCanvas(400,400,0,0);
    canvas.position(550,300)
    video = createCapture(VIDEO);
    video.hide()
     statusElement = document.getElementById("status")
     objectDetector = ml5.objectDetector("cocossd", modelLoaded) 
}
status=""
function draw(){
    image(video,0,0,400,400)
    if(status!==""){
    objectDetector.detect(video,getResults())}
}
function modelLoaded(){
    status = true;
    console.log("model loaded")
    }
function getResults(error,results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
    }
}
function start(){
  
    statusElement.innerHTML = "Status: Detecting Objects"
    var inputbox = document.getElementById("OBJECT").value
    console.log(inputbox)
}