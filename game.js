  //work on line 318 down next
  //level is the amount of regions you have unlocked
  var lifes = 3;
  var level = 1;
  var mineX = 180;
  var mineY = 289;
  var regions = ["greenlands"];
  var grasslands = true;
  var dirtlands = false;
  var wastelands = false;
  var backcol = "green";
  var region = "grasslands";
  //ex and ex are the enemy's x and y coordinates
  var ex = 0;
  var ey = 0;
    var x = 0;
    var y = 100;
    //waits for the page to load before running the game
sl.ready(function() {
    //adds an onclick attribute to the help button on the home menu 
    sl.click("help", function() {
        alert("Help: to move around use the arrow keys, to telaport to one of the regions you have been to press space and type the name of that region. when you get to the end of the screen you will enter a new region");
    })
    //adds an onclick attribute to the continue button in the game over screen
    sl.click("continue", function() {
       
        //hides the game over screen
        sl.hide("gameOver");
        //shows the canvas
        sl.show("ctx");
        sl.fillColor(backcol);
        sl.fillRect(x, y, 50, 50);
        x = 0;
        y = 100;
        ex = 0;
        ey = 0;
        sl.fillColor("black");
        sl.fillRect(ex, ey, 50, 50);
        sl.fillColor("red");
        sl.fillRect(x, y, 50, 50);
    })
    //adds an onclick element to the quit button in the game over screen
    sl.click("quit", function() {
        //hide the canvas
        sl.hide("ctx");
        //hide the game over screen
        sl.hide("gameOver");
        //show the start menu
        sl.show("startMenu");
       
    });

   //Hide the canvas in the start menu
    sl.hide("ctx");
    //hide the game over screen in the start menu
    sl.hide("gameOver");
    //adds an onclick event to the start button all code for the actual game is here
sl.click("start", function() {
    //starts the game
    //hide the start menu
    sl.hide("startMenu")
    //show the canvas
    sl.show("ctx");
   
    //set the fill color to green
    sl.fillColor("green");
    //fill the canvas
    sl.fillCanvas();
    //set the fill color to red
    sl.fillColor("red");
    //draw the player
    sl.fillRect(x, y, 50, 50)
    //set the fill color to black
 sl.fillColor("black");
 //draw the enemy
 sl.fillRect(ex, ey, 50, 50);
 //set the fill color to white
    sl.fillColor("white");
    //display your unlocked regions
    sl.text("unlocked regions: " + level, 50, 50);
    //ask your name
    var name = window.prompt("what is your name young hero?");
 //add the event listener for an onkeydown event that will call the function right when a key is pressed 
    window.addEventListener("keydown", right, false);

//this makes the enemy move
function enemyMove() {
    if (ex > x) {
        sl.fillColor(backcol);
        sl.fillRect(ex, ey, 50, 50);
    ex = ex + 10;
    
    
    
    sl.fillColor("black");
    sl.fillRect(ex, ey, 50, 50);
      }
    
      if (ex < x) {
        sl.fillColor(backcol);
        sl.fillRect(ex, ey, 50, 50);
    ex = ex + 10;
    
    
    
    sl.fillColor("black");
    sl.fillRect(ex, ey, 50, 50);
      }
      if (ey > y) {
        sl.fillColor(backcol);
        sl.fillRect(ex, ey, 50, 50);
    ey = ey - 10;
    
    
    
    sl.fillColor("black");
    sl.fillRect(ex, ey, 50, 50);
      }
      if (ey < y) {
        sl.fillColor(backcol);
        sl.fillRect(ex, ey, 50, 50);
    ey = ey + 10;
    
    
    
    sl.fillColor("black");
    sl.fillRect(ex, ey, 50, 50);
      }
      if (x === ex && y === ey) {
        sl.fillColor("black");
        sl.fillRect(ex, ey, 50, 50);
        lifes = lifes - 1;
     
        sl.show("gameOver");
     sl.hide("ctx");
           }
  
}
//runs when a key is pressed
function right(evt) {
    
     //colision controll (if the player's coordinates = the enemy's coordinates go to the game over screen)
    if (x === ex && y === ey) {
        sl.fillColor("black");
        sl.fillRect(ex, ey, 50, 50);
        lifes = lifes - 1;
     
        sl.show("gameOver");
     sl.hide("ctx");
           }
  
    //if the right key is pressed move the player right
    if (evt.keyCode == "39") {
        //make the enemy move
    enemyMove();
        //swich region from grasslands to wastelands pretty simple to understand aslong as you know blizard.canvas.js
       if (region = "grasslands" && x > 1000) {
        sl.fillColor("purple");
        sl.fillCanvas()
        sl.fillColor("red");
        x = 0;
        sl.fillRect(x, y, 50, 50);
        region = "wastelands";
        backcol = "purple";
        //if you have never been in the wastelands then add the wastelands to a region you can telaport to
        if (wastelands === false) {
wastelands = true;
alert("The wise mapper: congratualtations young adventurer you have sucsesfully traveled to the wastelands region");
//add wastelands to the regions array
regions.push("wastelands");
           level = level + 1;
        }
        
       }
       //move the player
        sl.fillColor(backcol);
        sl.fillRect(x, y, 50, 50)
        x = x + 25;
        sl.fillColor("red");
        sl.fillRect(x, y, 50, 50)
        console.log(x, y);
    }
 // if the spacebar is pressed open the telaport location
    if (evt.keyCode == "32") {
        //display the regions you have unlocked
     var telaportLocation = window.prompt("unlocked regions: " + regions + " please enter wich region you wish to teleport to ");
  
            //if you have unlocked the greenlands and you have typed in greenlands telaport to the greenlands
          
                if (telaportLocation === "greenlands" && grasslands === true) {
             region = "greenlands"
         
             backcol = "green"
             sl.fillColor("green");
             sl.fillCanvas();
             
             sl.fillRect(x, y, 50, 50);
             y = 0;
             sl.fillColor("red");
             sl.fillRect(x, y, 50, 50);
           
             sl.fillColor(backcol);
             sl.fillCanvas();
             sl.fillColor("purple");
         sl.fillRect(200, 65, 100, 100);
                }
                 //if you have unlocked the dirtlands and you have typed in dirtlands telaport to the dirtlands
                if (telaportLocation === "dirtlands" && dirtlands === true) {
                backcol = "#612F2F"
                region = "dirtlands"
                sl.fillColor("#612F2F");
                sl.fillCanvas();
                
                sl.fillRect(x, y, 50, 50);
                y = 450;
                sl.fillColor("red");
                sl.fillRect(x, y, 50, 50);
                sl.fillColor("white");
                }
                     
                    
                     //if you have unlocked the wastelands and you have typed in wastelands telaport to the wastelands
                               if (telaportLocation === "wastelands" && wastelands === true) {
                                backcol = "purple"
                                region = "wastelands"
                                sl.fillColor("purple");
                                sl.fillCanvas();
                                
                                sl.fillRect(x, y, 50, 50);
                                y = 450;
                                sl.fillColor("red");
                                sl.fillRect(x, y, 50, 50);
                                sl.fillColor("white");
                               }
                     
                    }
                    // if the left key is pressed then move the player left
    if (evt.keyCode == "37") {
        //make the enemy move
    enemyMove();
        //move the player
        sl.fillColor(backcol);
        sl.fillRect(x, y, 50, 50);
        x = x - 25;
        sl.fillColor("red");
        sl.fillRect(x, y, 50, 50)
        console.log(x, y);
   // if the region is wastelands be able to move from wastelands to dirtlands
        if ( region = "wastelands" && x < 0) {
            backcol = "green";
            region = "grasslands";
           sl.fillColor(backcol);
           sl.fillCanvas();
           x = 950;
           sl.fillColor("red");
           sl.fillRect(x, y, 50, 50);
        }
    }
    //if the up arrow is pressed move up
    if (evt.keyCode == "38") {
        //make the enemy move
    enemyMove();
        //if the player's y coordinates are less than 0 and you are in the greenlands region move to the dirtlands
        if (region = "grasslands" && y < 0|| region === "greenlands" && y < 0) {
            backcol = "#612F2F"
            region = "dirtlands"
            sl.fillColor("#612F2F");
            sl.fillCanvas();
            
            sl.fillRect(x, y, 50, 50);
            y = 450;
            sl.fillColor("red");
            sl.fillRect(x, y, 50, 50);
            sl.fillColor("white");
            if (dirtlands === false) {
                level = level + 1;
              sl.wait(alert("The wise mapper: congratualtations young adventurer you have sucsesfully traveled to the dirtlands region"), 1000)
              regions.push("dirtlands");
              dirtlands = true;
            }
            sl.text("unlocked regions: " + level, 50, 50);
          
            
        }
        console.log(x, y);
        sl.fillColor(backcol);
        sl.fillRect(x, y, 50, 50)
        y = y - 25;
        console.log(y);
        sl.fillColor("red");
        sl.fillRect(x, y, 50, 50)
    }
    if (evt.keyCode == "40") {
        enemyMove();
        //code to be able to go from the dirtlands to the greenlands got it working the problem was some coordinates where off
        if (region = "dirtlands" && y > 675) {
            region = "greenlands"

            backcol = "green"
            sl.fillColor("green");
            sl.fillCanvas();
            
            sl.fillRect(x, y, 50, 50);
            y = 0;
            sl.fillColor("red");
            sl.fillRect(x, y, 50, 50);
          
            sl.fillColor(backcol);
            sl.fillCanvas();
            sl.fillColor("purple");
        sl.fillRect(200, 65, 100, 100);
        }
      console.log(x, y);
        sl.fillColor(backcol);
        sl.fillRect(x, y, 50, 50)
        y = y + 25;
        console.log(y);
        sl.fillColor("red");
        sl.fillRect(x, y, 50, 50)
        
    }
    //atack function ("A" key)
    if (evt.keyCode == "65") {
//work on this next
        if (x === ex - 50 || x === ex + 50 || y === ey - 50 || y === ey + 50) {
alert("hejheh");
        }
    }
    
}
})
})