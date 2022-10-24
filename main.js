function preload() {

}


function setup() {

    canvas = createCanvas(400, 400);
    canvas.position(470, 200);
    video = createCapture(VIDEO);
    video.hide();
    

}

function draw() {

    image(video,0,0,400,400);

    fill(200, 0, 0);
    stroke(200, 0, 0);
    circle(360, 40, 70);
    
    fill(200, 0, 0);
    stroke(200, 0, 0);
    circle(40, 40, 70);

    fill(200, 0, 0);
    stroke(200, 0, 0);
    circle(360, 360, 70);
    
    fill(200, 0, 0);
    stroke(200, 0, 0);
    circle(40, 360, 70);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(40, 25, 310, 30);
    
    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(40, 345, 310, 30);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(30, 25, 30, 350);
    
    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(345, 25, 30, 350);
    
    
    }
    
    function takesnapshot() {
        save('child.png');
    }
    
    