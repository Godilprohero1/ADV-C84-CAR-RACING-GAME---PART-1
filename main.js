canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d");

 car1_img = "car2.png";
 car2_img = "Tesla.png";

 car1_x = 10;
 car1_y = 10;
 car1_width = 120;
 car1_height = 70;

 car2_x = 10;
 car2_y = 10;
 car2_width = 120;
 car2_height = 70;



 function add_img(){
     background_imgtag = new Image();
     background_imgtag.onload = uploadbackimg;
     background_imgtag.src = "racing.gif";


     car1_imgtag = new Image();
     car1_imgtag.onload = uploadroverimg;
     car1_imgtag.src = rover_img;
 }

function uploadbackimg(){
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}
function uploadroverimg(){
    ctx.drawImage(car1_imgtag, car1, car1_y, car1_width, car1_height);
}
