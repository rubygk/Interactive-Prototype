let img1, img2, img3, img4;
let img1_scale = 0.5;
let img2_scale = 0.1;
let img3_scale = 0.5;
let img4_scale = 0.4;


let hamSlices = [];
let SliceSuccess = false;
let sliceSound;
let context;
let soundPlayed = false;

let img2Count;

function loadMyFile() {
  // Load images from local file
  img1 = loadImage("Images/WoodBoard.png");
  img2 = loadImage("Images/HamSlice.png");
  img3 = loadImage("Images/Ham.png");
  img4 = loadImage("Images/Knife.png");
  sliceSound = loadSound("Sounds/SliceSound.mp3");
}


function setup() {  
  createCanvas(windowWidth, windowHeight);
  loadMyFile();
  context = getAudioContext();
  img2Count = 0;
}

function draw() {
  // your drawing code goes here
  background(130,60,30);
  drawImages();
  
  // Calculate the distance between the cursor and image3
  let d = dist(mouseX, mouseY, windowWidth/2, windowHeight/2);
  
  if (d < 100 && mouseIsPressed && mouseButton === LEFT && !soundPlayed) {
    SliceSuccess = true;
    soundPlayed = true;
    sliceSound.play();
      img2Count ++;
    hamSlices.push(new HamSlice(mouseX, mouseY));
  } else if (mouseButton === LEFT && !mouseIsPressed) {
    soundPlayed = false;
  }
  
  if (d >= 150 && img2Count <= 4) {
    fill(255);
    textSize(48);
    textAlign(CENTER);
    text("Slice the ham please", windowWidth/2, 200);
  }
    
    if (img2Count >= 5) {
    fill(255);
    textSize(48);
    textAlign(CENTER);
    text("To continue the narrative, you can go back to Figma", windowWidth/2, 200);
  }
  
  for (let i = 0; i < hamSlices.length; i++) {
    hamSlices[i].display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function drawImages() {
  // Draw the first image at its original size with the scale factor
  imageMode(CENTER);
  image(img1, windowWidth/2, windowHeight/2, img1.width * img1_scale, img1.height * img1_scale);
  
  // Draw the second image at its original size with the scale factor
  image(img2, windowWidth/2-280, windowHeight/2, img2.width * img2_scale, img2.height * img2_scale);
  
  // Draw the third image at its original size with the scale factor
  image(img3, windowWidth/2, windowHeight/2, img3.width * img3_scale, img3.height * img3_scale);
  
  image(img4, mouseX+30,mouseY+50, img4.width * img4_scale, img4.height * img4_scale);
  
  // Draw the ham slices
//  if (SliceSuccess) {
//    fill(255);
//    textSize(36);
//    textAlign(CENTER);
//    text("Chop Sound Effect", windowWidth/2, 100);
//  }
}

class HamSlice {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.scale = img2_scale;
  }
  
  display() {
    image(img2, this.x-300, this.y+img2Count, img2.width * this.scale, img2.height * this.scale);
  }
}
