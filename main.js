canvas = document.getElementById("myCanvas");//fetching canvas elements
ctx = canvas.getContext("2d");//to draw 2d structures

car_width = 100;
car_height = 100;

car_width1 = 100;
car_height1 = 100;

back_image = ["bg_1.jpg","bg_2.jpg","bg_3.jpg","bg_4.jpg"];
random_number=Math.floor(Math.random()*5);
background_image=back_image[random_number];

car_image = "car1.png";
car1_image = "car3.png";

car_x = 10;
car_y = 10;
car1_x = 100;
car1_y = 100;


function add()//activated when page is loaded
 {
    background_imgTag = new Image(); //defining a variable with a new image
    background_imgTag.onload = uploadBackground(); // setting a function, onloading this variable
    background_imgTag.src = background_image;   // load image

    car_imgTag = new Image(); //defining a variable with a new image
    car_imgTag.onload = uploadcar(); // setting a function, onloading this variable
    car_imgTag.src = car_image;   // load image
    car_imgTag1 = new Image(); //defining a variable with a new image
    car_imgTag1.onload = uploadcar1(); // setting a function, onloading this variable
    car_imgTag1.src = car1_image;   // load image
}

function uploadBackground()//called to upload background image of canvas
 {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);//to draw an image onto the canvas
}

function uploadcar()//called to upload image of car
 {
    ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);//to draw an image onto the canvas
}

function uploadcar1()//called to upload image of car
 {
    ctx.drawImage(car_imgTag1, car1_x, car1_y, car_width1, car_height1);//to draw an image onto the canvas
}

//code to control the car

window.addEventListener("keydown", my_keydown);//whenever key is pressed keydown is activated

function my_keydown(e)
{
    keyPressed = e.keyCode;//variable used to store ASCII values of keyboard keys
    console.log(keyPressed);
    //all keyboard keys have a fixed ASCII value

        if(keyPressed == '38')//38 is the ASCII value of up arrow
        {
            up();
            
        }
        if(keyPressed == '40')//40 is the ASCII value of down arrow
        {
            down();
            
        }
        if(keyPressed == '37')//37 is the ASCII value of left arrow
        {
            left();
            
        }
        if(keyPressed == '39')//39 is the ASCII value of right arrow
        {
            right();
            
        }

        if(keyPressed == '87')//39 is the ASCII value of right arrow
        {
            up1();
            
        }

        if(keyPressed == '83')//39 is the ASCII value of right arrow
        {
            down1();
            
        }

        if(keyPressed == '68')//39 is the ASCII value of right arrow
        {
            right1();
            
        }

        if(keyPressed == '65')//39 is the ASCII value of right arrow
        {
            left1();
            
        }
}


   function up(){
       if(car_y >=10){
           car_y=car_y-10;
           uploadBackground();
           uploadcar();
           uploadcar1();
       }

   }
   function up1(){
    if(car1_y >=10){
        car1_y=car1_y-10;
        uploadBackground();
        uploadcar1();
        uploadcar();
    }
    }

    function down1(){
        if(car1_y <=560){
            car1_y=car1_y+10;
            uploadBackground();
            uploadcar1();
            uploadcar();
        }
}

   function down(){

if(car_y<=560){
    car_y=car_y+10;
    uploadBackground();
    uploadcar();
    uploadcar1();
}

   }

   function right(){
       if(car_x <=760){
           car_x=car_x+10;
           uploadBackground();
           uploadcar();
           uploadcar1();

       }
   }

   function right1(){
    if(car1_x <=760){
        car1_x=car1_x+10;
        uploadBackground();
        uploadcar1();
        uploadcar();

    }
}

   function left(){
       if(car_x >=10){
           car_x=car_x-10;
           uploadBackground();
           uploadcar();
           uploadcar1();
       }
   }

   function left1(){
    if(car1_x >=10){
        car1_x=car1_x-10;
        uploadBackground();
        uploadcar1();
        uploadcar();
    }
}
