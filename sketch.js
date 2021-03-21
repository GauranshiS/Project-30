    const Engine = Matter.Engine;
    const World= Matter.World;
    const Bodies = Matter.Bodies;
    const Constraint = Matter.Constraint;

    var polygon;
    var slingShot;

    function preload() {

        polygon_Img=loadImage("polygon.png")
    }

    function setup(){
        var canvas = createCanvas(1200,800);
        engine = Engine.create();
        world = engine.world;

        polygon = Bodies.circle(50,200,50);
        World.add(world,polygon);

        
        ground = new Ground(760,400,300,20);
        //platform = new Ground(150, 305, 300, 170);

        //Level 1

        //box1 = new Box(700,390,30,30);
        box2 = new Box(730,390,30,30);
        box3 = new Box(760,390,30,30);
        box4 = new Box(790,390,30,30);
        box5 = new Box(820,390,30,30);
        box6 = new Box(850,390,30,30);
        box7 = new Box(880,390,30,30);
        
        // Level 2

        box8 = new Box(750,360,30,30);
        box9 = new Box(780,360,30,30);
        box10 = new Box(810,360,30,30);
        box11= new Box(840,360,30,30);
        box12= new Box(870,360,30,30);

        // Level 3

        box13 = new Box(800,310,30,30);
        box14 = new Box(830,310,30,30);
        box15 = new Box(860,310,30,30);
    
        // Level top

        box16 = new Box(835,250,30,30);
        
        slingShot = new Slingshot(polygon,{x:150,y:200});
    }

    function draw(){
        background(100,20,20);
        Engine.update(engine);
        strokeWeight(4);
        //box1.display();
        box2.display();
        ground.display();
        box3.display();
        box4.display();
        box5.display();
        box6.display();
        box7.display();
        box8.display();
        box9.display();
        box10.display();
        box11.display();
        box12.display();
        box13.display();
        box14.display();
        box15.display();
        box16.display();
    
        slingShot.display();   
     
        
        imageMode(CENTER);
        image(polygon_Img,polygon.position.x,polygon.position.y,50,50);

    }

    // Whenever an Event occurs, it gets called automatically .
    function mouseDragged(){
        Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
    }


    function mouseReleased(){
        slingShot.fly();
    }

    function keyPressed(){
        if(keyCode===32){

        slingShot.attach(polygon);
        
        }
    }
    