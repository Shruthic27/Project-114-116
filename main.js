lip_x=0
lip_y=0
m_x=0
m_y=0
function preload() {
    i=loadImage("lip.png")
    m=loadImage("m.png")
}

 function setup() {
canvas=createCanvas(300, 300);
canvas.center();
video=createCapture(VIDEO)
video.size(300,300)
video.hide()
 
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gp);
 }
 
 function gp(results) {
     if (results.length > 0) {
     console.log(results)
     console.log("lip x =" + results[0].pose.nose.x)
     console.log("lip y =" + results[0].pose.nose.y)
     
     lip_x=results[0].pose.nose.x
     lip_y=results[0].pose.nose.y

     console.log("m x =" + results[0].pose.nose.x)
     console.log("m y =" + results[0].pose.nose.y)

     m_x=results[0].pose.nose.x
     m_y=results[0].pose.nose.y
     }
 }

 function modelLoaded() {
     console.log('PoseNet Is Initialized');
 }


 function draw(){  
     image(video, 0, 0, 300, 300);
     image(i, lip_x-25, lip_y+10, 60, 30)
     image(m, m_x-25, m_y, 60, 30)
 }

 function ts() {
save('filter.png')
 }