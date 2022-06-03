var img, img2, img3, img4, img5, img6;
var mainCharacter, obstacles1, obs1IMG, characterImg, invisibleGround;
var obstacles2, obstacles3, obstacles4;
var score=0;
var bg1, bg2;
var state;
var monsterIMG;
var changeSpeed, changeScore;
var monster;
var walkImage, walkImageL, characterImgL;
var obsOut = false;
var obsOut1 = false;
var life = 120;
var life1 = 310;
var win = false;
var healthBar, barWidth;
var stateistwo = false;
var stateisthree = false;
var stateisfour = false;
var stateIsFive = false;
var increaseScore = true;
var obstaclesIMG2;
var resetButton;
var animeCount = 1;
var opening;
var ruleButton;
var startButton;
var stateIsOne = false;
var ruleBook, rulesPage;
var backGroundSound, outSound, WinSound, pointSound, monsterHit;
var level;
function preload(){
    backGroundSound = loadSound('Background.wav');
    outSound = loadSound('GameOver.wav');
    WinSound = loadSound('LevelComplete.wav');
    pointSound = loadSound('Point.wav');
    monsterHit = loadSound('Monster hit.wav');
}
function setup(){
    createCanvas(displayWidth, displayHeight-150)
    img = loadImage('BackgroundImf.jpg');
    img2 = loadImage('BackgroundTwo.png');
    img3 = loadImage('BackgroundThree.png');
    img4 = loadImage('BackgroundFour.png');
    img5 = loadImage('BackgroundFive.png');
    img6 = loadImage('BackgroundSix.png');
    bg1 = createSprite(displayWidth/2+20, displayHeight/2-75, displayWidth, displayHeight-150);
    bg2 = createSprite(displayWidth+displayWidth/2+100, displayHeight/2-75, displayWidth, displayHeight-150);
    mainCharacter = createSprite(200, 400, 30, 75);
    obstacles1 = createSprite (displayWidth + 145, 450, 30, 30);
    obstacles2 = createSprite (obstacles1.x + 900, 450, 30, 30);
    obstacles3 = createSprite (displayWidth + 145, 1000, 30, 30);
    obstacles4 = createSprite (obstacles3.x + 900, 1000, 30, 30);
    obs1IMG = loadImage('obstacle1.png');
    obs2IMG = loadImage('obstacle2.png');
    characterImg = loadImage('mainCharacter.png');
    invisibleGround = createSprite(mainCharacter.x+displayWidth/2-50, 515, displayWidth, 15);
    monster = createSprite(2100, 10, 50, 50);
    monsterIMG = loadImage('monster1.png');
    monster.addImage(monsterIMG);
    monster.scale = 0.3;
    walkImage = loadImage('mainCharacterWalk.png');
    walkImageL = loadImage('mainCharacterWalkL.png');
    barWidth = map(life, 0, 120, 0, 90);
    obstaclesIMG2 = loadImage('obstacles2.png');
    resetButton = createButton('Reset');
    opening = loadImage('Opening screen.png');
    ruleButton =  createButton('Rules');
    startButton = createButton('Start');
    ruleButton.position(300, 500);
    startButton.position(900, 500);
    ruleBook = loadImage('Rules.png');
    rulesPage = false;
}
function draw(){
    background(0);
    changeBackground();
    resetButton.position(mainCharacter.x+100,-200);
    state=0;
    transition();
    if(state===1){
        increaseScore = true;
        if(score>=80){
            state = state+10;
        }
    }
        
    if(state===2){
        monster.y = 10
        increaseScore = true;
        if(score>=160){
            state = 12;
        }
    }
    if(state===3){
        if(score>=240){
            state = state+10;
        }
    }
    if(state===4){
        if(score>=320){
            state = state+10;
        }
    }
    if(state===5){
        if(score>=480){
            state = state+10;
        }
    }
    if(state === 11 ){
        monster.y = 420;
    }
    else if(state <=10){
        monster.y = 10;
    }

    if(state === 12 ){
        monster.y=420
    }
    if(state === 13 ){
        monster.y=370
    }
    if(state === 14 ){
        monster.y=370
    }
    if(state === 15 ){
        monster.y=370
    }

    if(state<=10){
        monster.velocityX = mainCharacter.velocityX;
    }
    if(state>=11){
        monster.velocityX = 0;
    }
    if(state>=11){
        if(monster.y>=200){
            if(obstacles2.x>= monster.x){
                obstacles2.x = mainCharacter.x -100;
            }
            if(obstacles1.x>= monster.x){
                obstacles1.x = mainCharacter.x -100;
            }
        }
    }
    else if(monster.y<=0){
        obstacles1.x = displayWidth;
    }
    if(state===12){
        monster.y = 420
        monster.velocityX = 0;
        if(monster.y>=200){
            if(obstacles2.x>= monster.x){
                obstacles2.x = mainCharacter.x -100;
            }
            if(obstacles1.x>= monster.x){
                obstacles1.x = mainCharacter.x -100;
            }
        }
    }
    else if(monster.y<=0){
        obstacles1.x = displayWidth;
    }
    if(state<=10){
        changeSpeed = state*0.5
    }
    else{
        changeSpeed = state-10 * 0.5
    }
    changeScore = state*2
    if(obsOut === true){
        obstacles1.x=mainCharacter.x-300;
        score = score+10;
        obstacles3.x = obstacles4.x+900;
        pointSound.play();
    }
    if(obsOut1 === true){
        obstacles2.x=mainCharacter.x-300;
        score = score+10;
        obstacles4.x = obstacles3.x + 900;
        pointSound.play();
    }
    if(state>=11){
        obsOut = false;
        obsOut1 = false;
    }
    if(state>=12){
        obsOut = false;
        obsOut1 = false;
    }
    if(state===1){
        if(mainCharacter.x - obstacles1.x>=300){
        obstacles1.x = obstacles2.x+900;
        obstacles3.x = obstacles4.x+900;
        obsOut = false;
        obsOut1 = false;
    }
    if(mainCharacter.x - obstacles2.x>=300){
        obstacles2.x = obstacles1.x+900;
        obstacles4.x = obstacles3.x+900
        obsOut = false;
        obsOut1 = false
    }
    }
    if(state>=2 && state<=5){
        if(mainCharacter.x - obstacles1.x>=300){
            obstacles1.x = obstacles2.x+900;
            obstacles3.x = obstacles4.x+900;
            obsOut = false;
            obsOut1 = false;
        }
        if(mainCharacter.x - obstacles2.x>=300){
            obstacles2.x = obstacles1.x+900;
            obstacles4.x = obstacles3.x+900
            obsOut = false;
            obsOut1 = false;
        }
    }
    else if(state>=11){
        if(obstacles3.x <= mainCharacter.x - 180){
            obstacles3.x = mainCharacter.x+900
        }
        if(mainCharacter.x - obstacles4.x>=200){
            obstacles4.x = obstacles3.x+900;
        }
    }
    if(state>=12){
        if(obstacles3.x <= mainCharacter.x - 180){
            obstacles3.x = mainCharacter.x+900
        }
        if(mainCharacter.x - obstacles4.x>=200){
            obstacles4.x = obstacles3.x+900;
        }
    }
    if(state<=10){
        monster.velocityX=mainCharacter.velocityX;
    }
    else if(state === 11 || state === 12){
        monster.velocityX=0;
    }
    invisibleGround.x = mainCharacter.x+displayWidth/2-40;
    invisibleGround.visible = false;
    camera.x = mainCharacter.x + displayWidth/2-80
    mainCharacter.addImage(characterImg);
    mainCharacter.scale = 0.5;
    obstacles1.addImage(obs1IMG);
    obstacles1.scale = 0.2;
    obstacles2.addImage(obs1IMG);
    obstacles2.scale = 0.2;
    if(state<=10){
        if(obstacles1.x - mainCharacter.x < displayWidth){
        obstacles1.velocityX = -0.5-changeSpeed;
        }
        if(obstacles2.x - mainCharacter.x < displayWidth){
            obstacles2.velocityX = -0.5-changeSpeed;
        }
        if(obstacles3.x - mainCharacter.x < displayWidth){
            obstacles3.velocityX = -0.5-changeSpeed;
        }
        if(obstacles4.x - mainCharacter.x < displayWidth){
            obstacles4.velocityX = -0.5-changeSpeed;
        }
    }
    if(obstacles3.x - mainCharacter.x < displayWidth){
        obstacles3.velocityX = -0.5-changeSpeed;
    }
    if(obstacles4.x - mainCharacter.x < displayWidth){
        obstacles4.velocityX = -0.5-changeSpeed;
    }
    if(mainCharacter.y>375 && mainCharacter.y<675){
        if(keyDown("space")){
            mainCharacter.velocityY = -15
        }
    }
    mainCharacter.velocityY = mainCharacter.velocityY+0.6
    if(keyWentDown('right')){
        mainCharacter.velocityX = 2.5+changeSpeed;
    }
    else if(keyWentUp('right')){
        mainCharacter.velocityX = 0;
    }
    if(keyDown('right') && mainCharacter.y>=360){
        if(frameCount%10===0 || frameCount%10===1 || frameCount%10===2 || frameCount%10===3 || frameCount%10===4){
            mainCharacter.addImage(walkImage)
            mainCharacter.scale = 0.5
        }
    }
    if(keyWentDown('left')){
        mainCharacter.velocityX = -(2.5+changeSpeed);
    }
    else if(keyWentUp('left')){
        mainCharacter.velocityX = 0;
    }
    if(state<=10){
    if(mainCharacter.x>obstacles1.x+50 && mainCharacter.x<obstacles1.x+68+changeScore){
        score = score+1
    }
    if(mainCharacter.x>obstacles2.x+50 && mainCharacter.x<obstacles2.x+68+changeScore){
        score = score+1
    }}
    mainCharacter.collide(invisibleGround);
    canDefeat(obstacles1.x, obstacles1.y);
    canDefeatOne(obstacles2.x, obstacles2.y);
    weShallDefeatMonsterrr(monster.x, monster.y);
    drawSprites();
    textSize(25)
    fill('cyan')
    text("Score : "+score, mainCharacter.x+displayWidth-250, 50);
    if(win===true){
        mainCharacter.velocityX = -12;
        mainCharacter.velocityY = -13;
        monsterHit.play();
    }
    if(state===11){
        if(monster.x-mainCharacter.x<=700 && life>=0 && state<12){
            textSize(30)
            fill('orange');
            text('Jump on his horn to weaken him', mainCharacter.x+100, 100);
        }
        if(obstacles1.x <= mainCharacter.x-100){
            obstacles1.x = mainCharacter.x-250;
        }
        if(obstacles2.x <= mainCharacter.x-100){
            obstacles2.x = mainCharacter.x-250;
        }
        obsOut = false;
        obsOut1 = false;
        score = score;
        if(life<=0){
            state = 11.5;
            monster.velocityX = 7;
        }
    }
    if(state===11.5){
        textSize(30);
        fill('orange');
        if(life>-5){
            text('QUICK! He is escaping!', mainCharacter.x+100, 100)
        }
        if(life<=-5){
            monster.velocityX = 15
            if(monster.x>=mainCharacter.x+displayWidth+300){
                textSize(30);
                text("You Win!", mainCharacter.x+500, 100);
                textSize(20)
                text("Press UP to go to the next stage", mainCharacter.x+400, 200);
                monster.y = -10;
                monster.velocityX = 0;
                win = false;
                if(keyDown('up')){
                    life = 140;
                }
            }
            if(monster.x>=mainCharacter.x+displayWidth){
                if(monster.y>200){
                    WinSound.play();
                }
            }
        }
    }
    if(state===12){
        if(obstacles1.x <= mainCharacter.x-100){
            obstacles1.x = mainCharacter.x-250;
        }
        if(obstacles2.x <= mainCharacter.x-100){
            obstacles2.x = mainCharacter.x-250;
        }
        obsOut = false;
        obsOut1 = false;
        score = score;
    }
    if(life > 139){
        stateistwo = true;
        changeState();
    }
    if(life >= 310){
        stateisthree = true;
    }
    if(life>=500){
        stateisfour = true;
    }
    if(life>=680){
        stateIsFive = true;
    }
    if(state>2 && state <7){
        if(obstacles1.x <= mainCharacter.x-100){
            obstacles1.x = mainCharacter.x-250;
        }
        if(obstacles2.x <= mainCharacter.x-100){
            obstacles2.x = mainCharacter.x-250;
        }
    }
    decreaseLife();
    moreState();
    lose();
    if(state === 0){
        zeroState();
    }
    level = state-10
    rulesSlide();
    textSize(30);
    fill('orange');
    if(state>0 && state<=5){
        text('Level : '+state, mainCharacter.x, 50);
    }
    if(state===16){
        text('Level : FINAL', mainCharacter.x, 50);
    }
    if(state>10 && state<16){
        text('Level : '+ Math.floor(level), mainCharacter.x, 50);
    }
}
//To defeat the obstacle when you jump on it
function canDefeat(x, y){
    if(x-mainCharacter.x<=80/2){
        if(y-mainCharacter.y<=90 && mainCharacter.y<displayHeight){
            if(y-mainCharacter.y>=-100){
                obsOut = true;
            }
        }
    }
}
//same function
function canDefeatOne(x, y){
    if(x-mainCharacter.x<=80/2){
        if(y-mainCharacter.y<=90 && mainCharacter.y<displayHeight){
            if(y-mainCharacter.y>=-100){
                obsOut1 = true;
            }
        }    
    }
}
//to make the character lose if it touches an obstacle
function lose(){
    if(obstacles1.x-mainCharacter.x<=80/2 && obstacles1.x-mainCharacter.x>=61/2){
        if(obstacles1.y-mainCharacter.y<=67){
            if(obstacles1.y-mainCharacter.y>-110){
                outSound.play();
                invisibleGround.y = 200;
                mainCharacter.velocityY = -150
            }
        }
    }
    if(obstacles2.x-mainCharacter.x<=80/2 && obstacles2.x-mainCharacter.x>=61/2){
        if(obstacles2.y-mainCharacter.y<=67){
            if(obstacles2.y-mainCharacter.y>-110){
                outSound.play();
                invisibleGround.y = 200;
                mainCharacter.velocityY = -150
            }
        }
    }
    if(monster.x-mainCharacter.x<=80/2 && monster.x-mainCharacter.x>=61/2){
        if(monster.y-mainCharacter.y<=67){
            if(monster.y-mainCharacter.y>-110){
                outSound.play();
                invisibleGround.y = 200;
                mainCharacter.velocityY = -150
            }
        }
    }

    if(mainCharacter.y>=displayHeight && state>0){
            resetButton.position(displayWidth/2, displayHeight/2);
            fill('orange')
            text('Oh, Unlucky!',mainCharacter.x+displayWidth/2-50, displayHeight/2-50)
    }
    resetButton.mousePressed(()=>{
        if(state === 1 || state === 11 || state === 11.5){
            state = 1
            score = 0
            life = 120;
            mainCharacter.x = 100;
            mainCharacter.y = 10;
            invisibleGround.y = 515;
            bg1.x = displayWidth/2+20;
            bg2.x = displayWidth+displayWidth/2+100;
            monster.x = 2100;
        }
        if(state === 2 || state === 12 || state === 12.5){
            state = 2
            score = 80;
            life = 140;
            mainCharacter.y = 10;
            invisibleGround.y = 515;
            monster.x = mainCharacter.x+2000;
        }
        if(state === 3 || state === 13 || state === 13.5){
            state = 3
            score = 160;
            life = 310
            mainCharacter.y = 10;
            invisibleGround.y = 515;
            monster.x = mainCharacter.x+2000;
        }
        if(state === 4 || state === 14 || state === 14.5){
            state = 4;
            score = 240;
            life = 500;
            mainCharacter.y = 10;
            invisibleGround.y = 515;
            monster.x = mainCharacter.x+2000;
        }
        if(state === 5 || state === 15 || state === 15.5){
            state = 5
            score = 320;
            life = 680;
            mainCharacter.y = 10;
            invisibleGround.y = 515;
            monster.x = mainCharacter.x+2000;
        }
    })
}
//to weaken the monster when you jump on it
function weShallDefeatMonsterrr(x, y){
    if(x-mainCharacter.x<=80/2){
        if(y-mainCharacter.y<=90){
            if(state>=11){
                win = true;
            }
        }
    }
    if(mainCharacter.x-monster.x>=mainCharacter.width/2+monster.width/2){
        win = false;
    }
    if(monster.x-mainCharacter.x>=mainCharacter.width/2+monster.width/2){
        win = false;
    }
    if(mainCharacter.y<=300){
        win = false;
    }
}
//to decrease monsters life
function decreaseLife(){
    if(state===11 || state === 11.5){
        if(mainCharacter.y<=186){
            life = life-2;
        }    
    }
    if(state===12 || state === 12.5){
        if(mainCharacter.y<=186){
            life = life+2
        }
    }
    if(state===13 || state === 13.5){
        if(mainCharacter.y<=186){
            life = life+2
        }
    }
    if(state===14 || state === 14.5){
        if(mainCharacter.y<=186){
            life = life+2
        }
    }
    if(state===15 || state === 15.5){
        if(mainCharacter.y<=186){
            life = life+2
        }
    }
    if(state===16 || state === 16.5){
        if(mainCharacter.y<=186){
            life = life+2
        }
    }
}
//to change the state and go to the next level
function changeState(){
    if(stateistwo === true){
        state = 2;
        if(state===2){
            if(obstacles3.x>obstacles4.x){
            obstacles3.x = obstacles4.x+600;
            }
            canDefeat(obstacles3.x, obstacles1.y);
            canDefeatOne(obstacles4.x, obstacles2.y);
            if(obstacles4.x<=mainCharacter.x-300){
                if(monster.y<=100){
                    obstacles4.x = obstacles3.x + 600;
                }
            }
            if(obstacles3.x<=mainCharacter.x-300){
                if(monster.y<=100){
                    obstacles3.x = obstacles4.x+600;
                }
            }
            obstacles1.x = obstacles3.x;
            obstacles2.x = obstacles4.x;       
            monster.velocityX = mainCharacter.velocityX;;
            if(score>=160){
                state = 12;
                monster.velocityX = 0;
            }
        }
    }
    if(stateisthree === true){
        state = 3;
        if(state===3){
            if(obstacles3.x>obstacles4.x){
                obstacles3.x = obstacles4.x+600;
            }
            canDefeat(obstacles3.x, obstacles1.y);
            canDefeatOne(obstacles4.x, obstacles2.y);
            if(obstacles4.x<=mainCharacter.x-300){
                if(monster.y<=100){
                    obstacles4.x = obstacles3.x + 600;
                }
            }
            if(obstacles3.x<=mainCharacter.x-300){
                if(monster.y<=100){
                    obstacles3.x = obstacles4.x+600;
                }
            }
            obstacles1.x = obstacles3.x;
            obstacles2.x = obstacles4.x;
            monster.velocityX = mainCharacter.velocityX;
            if(score>=240){
                state = 13;
                monster.velocityX = 0;
            }
        }
    }
    if(stateisfour === true){
        state = 4;
        if(state===4){
            if(obstacles3.x>obstacles4.x){
                obstacles3.x = obstacles4.x+600;
            }
            canDefeat(obstacles3.x, obstacles1.y);
            canDefeatOne(obstacles4.x, obstacles2.y);
            if(obstacles4.x<=mainCharacter.x-300){
                if(monster.y<=100){
                    obstacles4.x = obstacles3.x + 600;
                }
            }
            if(obstacles3.x<=mainCharacter.x-300){
                if(monster.y<=100){
                    obstacles3.x = obstacles4.x+600;
                }
            }
            obstacles1.x = obstacles3.x;
            obstacles2.x = obstacles4.x;
            monster.velocityX = mainCharacter.velocityX;;
            if(score>=320){
                state = 14;
                monster.velocityX = 0;
            }
        }
    }
    if(stateIsFive === true){
        state = 5;
        if(state===5){
            if(obstacles3.x>obstacles4.x){
                obstacles3.x = obstacles4.x+600;
            }
            canDefeat(obstacles3.x, obstacles1.y);
            canDefeatOne(obstacles4.x, obstacles2.y);
            if(obstacles4.x<=mainCharacter.x-300){
                if(monster.y<=100){
                    obstacles4.x = obstacles3.x + 600;
                }
            }
            if(obstacles3.x<=mainCharacter.x-300){
                if(monster.y<=100){
                    obstacles3.x = obstacles4.x+600;
                }
            }
            obstacles1.x = obstacles3.x;
            obstacles2.x = obstacles4.x;
            monster.velocityX = mainCharacter.velocityX;;
            if(score>=400){
                state = 15;
                monster.velocityX = 0;
            }
        }
    }
    if(life>=900){
        state = 16;
    }
}
//this function focuses on the monster fight in each level
function moreState(){
    if(state===12){
        if(monster.y>=200){
            if(obstacles1.x>=monster.x-monster.x-mainCharacter.x){
                obstacles1.x = mainCharacter.x-200
            }
            if(obstacles2.x>=monster.x-monster.x-mainCharacter.x){
                obstacles2.x = mainCharacter.x-200
            }
        }
        obsOut = false;
        obsOut1 = false;
        score = 160;
        if(life>=260){
            state = 12.5;
            monster.velocityX = 4;
        }
    }
    if(state===12.5){
        obsOut = false;
        obsOut1 = false;
        if(life>=270){
            monster.velocityX = 15
            if(monster.x>=mainCharacter.x+displayWidth+300){
                textSize(30);
                text("You Win!", mainCharacter.x+500, 100);
                textSize(20)
                text("Press UP to go to the next stage", mainCharacter.x+400, 200);
                monster.y = -10;
                monster.velocityX = 0;
                win = false;
                if(keyDown('up')){
                    life = 310;
                }
            }
            if(monster.x>=mainCharacter.x+displayWidth){
                if(monster.y>200){
                    WinSound.play();
                }
            }
        }
    }
    if(state===13){
        if(monster.y>=200){
            if(obstacles1.x>=monster.x-monster.x-mainCharacter.x){
                obstacles1.x = mainCharacter.x-200
            }
            if(obstacles2.x>=monster.x-monster.x-mainCharacter.x){
                obstacles2.x = mainCharacter.x-200
            }
        }
        obsOut = false;
        obsOut1 = false;
        score = 240;
        if(life>=430){
            state = 13.5;
            monster.velocityX = 5;
        }
    }
    if(state===13.5){
        obsOut = false;
        obsOut1 = false;
        if(life>=440){
            monster.velocityX = 15;
            if(monster.x>=mainCharacter.x+displayWidth+300){
                textSize(30);
                text("You Win!", mainCharacter.x+500, 100);
                textSize(20)
                text("Press UP to go to the next stage", mainCharacter.x+400, 200);
                monster.y = -10;
                monster.velocityX = 0;
                win = false;
                if(keyDown('up')){
                life = 500;
                }
            }
            if(monster.x>=mainCharacter.x+displayWidth){
                if(monster.y>200){
                    WinSound.play();
                }
            }
        }
    }
    if(state===14){
        if(monster.y>=200){
            if(obstacles1.x>=monster.x-monster.x-mainCharacter.x){
                obstacles1.x = mainCharacter.x-200
            }
            if(obstacles2.x>=monster.x-monster.x-mainCharacter.x){
                obstacles2.x = mainCharacter.x-200
            }
        }
        obsOut = false;
        obsOut1 = false;
        score = 320;
        if(life>=615){
            state = 14.5;
            monster.velocityX = 6;
        }
    }
    if(state===14.5){
        obsOut = false;
        obsOut1 = false;
        if(life>=640){
            monster.velocityX = 15;
            if(monster.x>=mainCharacter.x+displayWidth+300){
                textSize(30);
                text("You Win!", mainCharacter.x+500, 100);
                textSize(20)
                text("Press UP to go to the next stage", mainCharacter.x+400, 200);
                monster.y = -10;
                monster.velocityX = 0;
                win = false;
                if(keyDown('up')){
                    life = 680;
                }
            }
            if(monster.x>=mainCharacter.x+displayWidth){
                if(monster.y>200){
                    WinSound.play();
                }
            }
        }
    }
    if(state===15){
        if(monster.y>=200){
            if(obstacles1.x>=monster.x-monster.x-mainCharacter.x){
                obstacles1.x = mainCharacter.x-200
            }
            if(obstacles2.x>=monster.x-monster.x-mainCharacter.x){
                obstacles2.x = mainCharacter.x-200
            }
        }
        obsOut = false;
        obsOut1 = false;
        score = 400;
        if(life>=795){
            state = 15.5;
            monster.velocityX = 7;
        }
    }
    if(state===15.5){
        obsOut = false;
        obsOut1 = false;
        if(life>=820){
            monster.velocityX = 15;
            if(monster.x>=mainCharacter.x+displayWidth+300){
                textSize(30);
                text("You Win!", mainCharacter.x+500, 100);
                textSize(20)
                text("Press UP to go to the next stage", mainCharacter.x+400, 200);
                monster.y = -10;
                monster.velocityX = 0;
                win = false;
                if(keyDown('up')){
                life = 900;
                }
            }
            if(monster.x>=mainCharacter.x+displayWidth){
                if(monster.y>200){
                    WinSound.play();
                }
            }
        }
    }
    if(state===16){
        obsOut = false;
        obsOut1 = false;
        if(mainCharacter.x + 700 > monster.x){
            text('He will be tougher to crack', mainCharacter.x+100, 200);
        }
        if(monster.y>=200){
            if(obstacles1.x>=monster.x-monster.x-mainCharacter.x){
                obstacles1.x = mainCharacter.x-200
            }
            if(obstacles2.x>=monster.x-monster.x-mainCharacter.x){
                obstacles2.x = mainCharacter.x-200
            }
        }
        if(life>=1095){
            monster.velocityX = 7;
        }
        if(life>=1100){
            monster.velocityX = 15
            if(monster.x>=mainCharacter.x+displayWidth+300){
                textSize(30);
                text("You Have Recaptured The Kingdom! Well Done!", mainCharacter.x+300, 100);
                monster.y = -10;
                monster.velocityX = 0;
                win = false;           
            }
            if(monster.x>=mainCharacter.x+displayWidth){
                if(monster.y>200){
                    WinSound.play();
                }
            }
        }
    }
}
//To change background based on different levels
function changeBackground(){
        animeCount = state;
        if(animeCount === 1 || animeCount === 11 || animeCount === 11.5){
            bg1.addImage(img)
            bg1.scale = 3;
            bg2.addImage(img)
            bg2.scale = 3;
        }
        if(animeCount === 2 || animeCount === 12 || animeCount === 12.5){
            bg1.addImage(img2);
            bg1.scale = 2;
            bg2.addImage(img2);
            bg2.scale = 2;
        }
        if(animeCount === 3 || animeCount === 13 || animeCount === 13.5){
            bg1.addImage(img3);
            bg1.scale = 2;
            bg2.addImage(img3);
            bg2.scale = 2;
        }
        if(animeCount === 4 || animeCount === 14 || animeCount === 14.5){
            bg1.addImage(img4);
            bg1.scale = 2;
            bg2.addImage(img4);
            bg2.scale = 2;
        }
        if(animeCount === 5 || animeCount === 15 || animeCount === 15.5){
            bg1.addImage(img5);
            bg1.scale = 2;
            bg2.addImage(img5);
            bg2.scale = 2;
        }
        if(animeCount === 6 || animeCount === 16 || animeCount === 16.5){
            bg1.addImage(img6);
            bg1.scale = 2;
            bg2.addImage(img6);
            bg2.scale = 2;
        }
        if(mainCharacter.x-bg1.x-120>displayWidth/2 && mainCharacter.x-bg1.x-120<displayWidth){
            bg1.x = mainCharacter.x+displayWidth+displayWidth/2;
        }
        if(mainCharacter.x-bg2.x-120>displayWidth/2 && mainCharacter.x-bg2.x-120<displayWidth){
            bg2.x = mainCharacter.x+displayWidth+displayWidth/2;
        }
        if(bg1.x-mainCharacter.x>displayWidth/2-80 && bg1.x - mainCharacter.x<displayWidth){
            bg2.x = bg1.x-displayWidth-80;
        }
        if(bg2.x-mainCharacter.x>displayWidth/2-80 && bg2.x - mainCharacter.x<displayWidth){
            bg1.x = bg2.x-displayWidth-80;
        }
}
//Opening screen
function zeroState(){
    mainCharacter.x = -180;
    image(opening, -260, displayHeight/2-370, 1280, 600);
    startButton.mousePressed(()=>{
        stateIsOne = true;
        startButton.position(-500, -500);
        ruleButton.position(-500, -600)
        backGroundSound.play();
    })
    ruleButton.mousePressed(()=>{
        rulesPage = true;
    })
}
//To make the rules page
function rulesSlide(){
    if(rulesPage===true){
        image(ruleBook, -260, displayHeight/2-370, 1280, 580);
        ruleButton.position(-700, -700);
        startButton.position(900, 525);
        startButton.mousePressed(()=>{
            stateIsOne = true;
            rulesPage = false;
            backGroundSound.play();
            startButton.position(-500, -1000)   
        })
    }
}
//to start the game
function transition(){
    if(stateIsOne === true){
        state = 1;
    }
}