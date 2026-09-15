export type BlogPost = {
  slug: string;
  title: string;
  time: string;
  date: string;
  body: string;
  image: string;
  titleColor: string;
  titleOutlineColor: string;
  imageBrightness?: number; // optional — defaults to 1
};

export const blogPosts: BlogPost[] = [
  //{
    //slug: "ai-litter-drone",
    //title: "I Designed the Brains Behind an AI Litter Drone",
    //date: "September 9, 2026",
    //time: "idk",
    //body: "Full post content goes here...",
    //image: "/raspberryPi.jpeg",
    //titleColor: "#b80025",
    //titleOutlineColor: "#75081e",
  //},
  {
    slug: "tree-planter",
    title: "We Invented a Product That Would Please the Lorax",
    date: "March 5, 2026",
    time: "8 min read",
    body: `##Background
    
    Deforestation is a major issue. Through both human actions, such as clearing trees for space and materials, and natural events, such as forest fires, 10.9 million hectares are lost globally each year. The declining number of forest habitats negatively affects both animals and plants, as 80% of land species rely on the shelter of trees. Additionally, trees are needed for sequestering atmospheric carbon and slowing down climate change. This is evidently an issue that cannot go ignored. Fortunately, tree planters combat this crisis, replenishing forests and saving ecosystems by carefully planting trees throughout deforested regions. The issue? Tree planting is not an easy job. This work involves long days of planting 1,000 to 3,000 trees, continuously putting stress on the body through forward bending motions as dirt is shoveled aside. This takes a massive toll on the backs of workers, often leading to injuries and resulting in the average career length of a tree planter only lasting one to three years.

    This prompted a question among my UBCO engineering group: Why is it that the people who are tackling such a major world issue lack the equipment to take care of their own wellbeing? We took it upon ourselves to invent a new tool that would allow planters to remain in an upright position when planting, protecting their spines and preventing strain.

    ##Process

    We began by throwing out other features that a tree planting device could have: A location tracker to indicate being far away enough from the previous plant and counter for the number of trees planted. After researching, we decided the location tracker was not the most practical feature; however, a counter was extremely useful, as planters are paid by the number of trees planted and companies like to keep track of numbers. With this in mind, we had a rough idea of what had to be made. We needed a mechanism to push dirt aside like a shovel would, without requiring bending over. We needed a chute of some kind to lower the sapling into the created hole, again with the goal of the user remaining upright. We needed some sort of way to comfortably hold the device, both for planting and carrying between locations. Finally, we needed some way for the device to be able to count how many saplings had been planted, without requiring human intervention. It was straight to the (literal) drawing board, as my team created a variety of different ideas.

    ![The drawing board for our design planning](/treePlanterPlanning.jpeg){500}

    During this process, a few things became clear. Firstly, it was far more logical to utilize the strength of the user’s legs to dig the hole than their arms, given that legs have more power. This led to the implementation of a foot pedal. Secondly, the main body of the planter itself should be chute. In our prototype, we achieved this simply through using a PVC pipe; although, we noted that in an actual product, we would use bamboo due to it being environmentally friendly and lightweight. Thirdly, the height of the planter should be adjustable, considering the array of human heights and what may be comfortable for different people. We discussed different ways to accomplish this, observing the design of scooters and bike seats. Eventually, we decided to keep it simple and have an additional extension piece that could be added to the tube, stacking together. Finally, the counting mechanism would use a sensor to detect when a sapling fell through the chute, adding a number to the count. 
    
    The only thing we could not quite conclude was which digging mechanism would be ideal. We landed on two options. One was a simple blade that would move from being horizontal, at the bottom of the chute, to vertical in the ground, having pushed the dirt to the side like a shovel. The other was more complicated. It was inspired by a mechanical pencil’s mechanism to push out lead. The idea was that when the foot pedal was pushed, it would push a claw down and out of the tube. The claw arms would expand outwards and push dirt aside in all directions. The group had mixed opinions over which design was best, so we opted to model both in SolidWorks, 3D print them, and test to see which one should be used. We ended up not even needing to 3D print them, as the SolidWorks files showed us enough. The claw mechanism, though it felt fancy and unique, took us back to an engineering fundamental we had been taught in class earlier that semester: The more complex a mechanism is, the more opportunity it had to break. The claw had a large number of pivots and moving parts. It only took one little break for the whole thing to break down. The blade, on the other hand, was simple, with far less opportunity for something to go wrong. Considering tree planters are out in the middle of nowhere for hours at a time, durability was a primary concern. We selected the blade idea. 

    Before continuing with our projects, we interviewed someone with experience in tree planting, inquiring whether this design would actually benefit the work. She adored the idea, confirming that it solved a very real issue. With her approval, we started building.

    ![Plans for our final design](/treePlanterDesign.jpg){800}

    The build began with a good old trip to our local Home Depot. We needed to find a PVC pipe as the rest of our 3D printed parts relied on the pipe’s diameter. After some heavy thinking (see photo below), we found the perfect pipe for the job.

    ![Choosing our PVC pipe](/treePlanterPipe.jpeg){800}

    The parts we needed designed in SolidWorks and 3D printed were the handles, funnel, electronics box, extender, half blade and pedal, and half blade and attachment. In addition to this, we needed the electronics completed: IR break beam sensors that used a mini breadboard to connect to an LED display, along with the implementation of a Raspberry Pi so that the counted information could be linked to an app, regardless of having cell service. As the leader of the project, I then created a checklist of everything that needed to be designed, dividing it up among the six group members. The SolidWork pieces were built individually then modeled in an assembly to insure the parts would come together as planned. The below CAD and electronic pieces were created.

    ![SolidWorks funnel model](/treePlanterFunnel.PNG){790}

    ![SolidWorks electronics box model](/treePlanterElectronicsBox.PNG){680}

    ![SolidWorks handle model](/treePlanterHandle.PNG)

    ![SolidWorks half blade and pedal model](/treePlanterPedal.PNG){530}

    ![SolidWorks half blade and connecter model](/treePlanterBlade.PNG){640}

    ![SolidWorks extender model](/treePlanterExtender.PNG){675}

    ![Electronics with mini breadboard and Raspberry Pi](/treePlanterElectronics.jpeg){675}

    We very carefully 3D printed at angles that would boost strength, specifically for the pedal piece. We later realized that it was not quite strong enough, adding reinforcement through the posts with metal rods. Assembling the project was a quick process, as we screwed the pieces together, added the pedal spring, and secured the sensors. Just like that, our product was complete. We named it the "Sproute", combining the words "Sprout" and "route".
    
     ![The "Sproute"](/treePlanterFront.png)

    Then it was time for the moment of truth. We took the Sproute up to the forest and tested it with a model sapling. While we did have to be careful, as this was merely a prototype and did not have the strength that a final model would have, the product was able to hold up. To our delight, it successfully pushed aside dirt, making a hole for the sapling to drop into the way that we had intended. Pulling the Sproute back out of the ground also pushed the dirt around the plant back up against it, preventing the sapling from tipping over. As the sapling passed through the chute, the sensors were successfully able to detect a tree being planted, adding to the counter and updating that app with all the planting stats. And just as we'd set out to achieve, this all was able to happen without the individual using it needing to bend down. Our project was a success.
    
     ![The Sproute's top](/treePlanterHandles.jpeg){500}

     ![The Sproute's bottom](/treePlanterClaw.jpeg){500}

     ![Part of the app connecting to the Sproute's counter](/treePlanterApp.jpeg){500}
    `,
    image: "/loraxCover.jpeg",
    titleColor: "#f9630b",
    titleOutlineColor: "#852e00",
  },
  {
    slug: "batmobile",
    title: "I Was Locked in a Room for 83 Consecutive Hours to Model Batman's Car",
    date: "March 26, 2026",
    time: "4 min read",
    body: `##The Planning

    In my second engineering semester, I was thrown into an intense CAD project. We were told we had three months to make a detailed SolidWorks model of something incredible… and that was pretty much the extent of the project details. I was assigned as the project leader. We spent hours thinking through what would stand out as the MOST amazing model, among all the other amazing models that would be created by other groups. Eventually, we landed on our dream project: the Batmobile. However, that wasn’t the end of our decision making. There isn’t only one Batmobile out there, but approximately 250. We looked carefully at the most popular models, searching for one that really would take our project to another level. The one that caught our eye ended up being the 1989 Batmobile. Not only did it have a wide array of unique features, but the movie left some of its features as a mystery, giving our group creative freedom. We knew we were in for a long journey to complete this car, but we were beyond eager to take on the challenge.

    ##The Process

    The planning stage was a quick but enjoyable process. We brainstormed every possible fun feature a Batmobile could have, both researching what the movie actually detailed and inventing our own aspects. At the end of this stage, we had a large list, ranging from pop out guns and wings to a grappling hook.

    ![One of my primary planning sheets](/batmobilePlan.jpg){800}

    As for the more practical parts of the car, we researched other Batmobile CAD models. None of them exactly matched what we had in mind, but we were able to pull inspiration for various mechanical parts. We also sprinkled in some fun props for the inside of Batman’s car, figuring Batman would enjoy having various toys, while also allowing us to practice our sheet metal building skills in SolidWorks. We then compiled a list of everything that needed to be made:

    - Front tires
    - Rear tires
    - Front rims
    - Rear rims
    - Batman tire logo
    - Button console
    - Vehicle dashboard
    - Vehicle tie rod
    - Shocks
    - Stamp on button
    - Stamp on tire logo
    - Cockpit
    - Engine
    - Vehicle main dashboard
    - Middle dashboard
    - Poison ivy plant prison
    - Engine name stamp 
    - Steering wheel
    - Posterior frame
    - Posterior crossbar
    - Rear frame
    - Newspaper
    - Raybuck (currency in our CAD class)
    - Ninja star
    - Wing mechanism
    - Stamp on ninja star
    - Machine gun
    - Bullets
    - Custom nuts and bolts
    - Gun lifting mechanism
    - Exhaust
    - Front frame pieces
    - Mufflers
    - Seats 
    - Shock absorbers 
    - Back half of car shell 
    - Middle of car shell 
    - Canopy of car
    - Gas pedal 
    - Batarang (Batman’s boomerang)
    - Frame connected to wheel 
    - Front shell of car
    - Turbine
    - Exhaust frame
    - Brake pedals
    - Coin

    I divided this work up among the team members, each individually creating parts. It was crucial for measurements to be perfect. If one person’s designs were off by a tiny bit, the whole car would fail to be able to be assembled. We all took our time to make sure everything was flawless. Many of the parts used advanced SolidWorks features, boosting our SolidWorks proficiency rapidly as we worked to meet the deadline. It was a long process, but over the course of a couple months, nearly all parts were created. The deadline was soon approaching, yet at this point we only had dozens of part files, with no assembled car. With just under a week left, we decided that, like most engineering projects, the assembly was bound to take longer than we expected. We did not want to risk finishing the project late. Therefore, we made the choice to lock ourselves in one of the university study rooms until the project was done, unaware of whether we would be in there for five hours or five days. And for that period of time, we lived and breathed the project. Each person would only leave for about twenty minutes per day to get food. Some group members left for limited sleep, while some pulled multiple all-nighters—sometimes consecutively. It was grueling, yet every member pushed through the exhaustion, fueled by the love of what we were doing. We finished modeling the most challenging part (being the front hood), compiled all the different parts, brought everything together in a SolidWorks assembly, mated everything together to move logically with proper bounds and restraints, made renderings of the Batmobile in Blender, and created an entire video to showcase our work. 
    
    ![Front view of completed 1989 Batmobile model](/batmobileFront.png){800}

    ![Back view of completed 1989 Batmobile model](/batmobileBack.png)
    
    It took 83 hours of consistency and dedication, but the project came together, leaving us with a detailed 1989 Batmobile model we were proud of, established SolidWorks modeling skills, and severe sleep deprivation.

    ##The Parts

    Below is a non-exhaustive collection of parts modeled by me.

    ![Posterior crossbars](/posteriorCrossbar.PNG){800}

    ![Posterior frame piece](/posteriorFrame.PNG)

    ![Anterior frame piece](/anteriorFrame.PNG){750}

    ![Sheet metal batman newspaper](/newspaper.PNG)

    ![Steering wheel](/steeringWheel.PNG){920}

    ![Steering wheel stem](/steeringWheelStem.PNG){1000}

    ![Sheet metal ninja star](/ninjaStar.PNG){1000}

    ![Frame pieces](/heelBag.PNG){700}

    ![Wing mechanism](/wingMechanism.PNG)

    ![Wing](/wing.PNG)
    `,
    image: "/batmobileCover.jpeg",
    titleColor: "#2349f5",
    titleOutlineColor: "#140386ee",
  },
  {
    slug: "dragon-head",
    title: "I Fulfilled My Childhood Dream of a Pet Dragon",
    date: "January 20, 2024",
    time: "16 min read",
    body: `## Inspiration

    This project was inspired by my Grade 6 self, who adored the movie How to Train Your Dragon and wished Toothless, the dragon, was real. In middle school, after I’d finally accepted the tragic reality that I would never own a pet dragon, I pondered whether it would be possible to create a robotic version of Toothless. I thought about it countless times, but never went ahead to actually attempt it. When my Grade 11 teacher announced an open-ended building project, I saw the opportunity to finally design and build the dragon I’d thought of for so many years. Paired with my interests in the fields of robotics and computer programming, and my desire to pursue engineering after high school, this was the perfect project. I was thrilled to get started, drafting my first plans the day that the project was announced.
    
    ## Planning

    Building a robot that had to have very specific features was an ambitious task, especially considering my lack of experience. I had coded once before in C to program my Grade 8 science fair project, assembled a robot kit, and seen my dad build things growing up, but that wasn’t nearly enough to make me confident in what I was doing. The only aspect that I was already skilled in was the 3D printing. This led to a lot of required research. I found YouTube videos of people building moving eyes and limbs with servos and different complex mechanisms. 
    
    ![My original feature sketch for Toothless](/toothlessSketchOne.jpeg)

    ![Breaking down the mechanisms into individual parts](/toothlessSketchTwo.jpeg){900}

    After watching enough videos, I had a general idea of what I had to build, and what could be theoretically possible. I drafted my first design, planning every feature I could think of for Toothless to be able to do: moving ears, touch sensors, glowing and moving eyes, “plasma” lights, retractable teeth, sound effects, flapping wings, voice commands, and balance. I knew I wouldn’t be able to accomplish them all, but I made a full list so I could choose which ones I wanted to complete while I was building, depending on how much time the project ended up taking. Looking back at these papers in hindsight, it’s amazing how much I’ve learned about robotics. At the time, these designs seemed quite logical, however, now I can see multiple errors, such as a lack of account for space and incorrect terminology.
   
    ## 3D Printing (Design #1)
    
    Once the plan was made, my first step was the 3D printing. I thought this stage would go relatively fast. I was wrong. At first everything was smooth. I had originally planned to design the shape of Toothless myself in Meshmixer, however, due to the size of the project, I opted to save time by finding different downloadable 3D printing Toothless files. I found one file that was usable, except for the head, and another one with an amazing head, but horrible body. I downloaded them both and combined them, creating the perfect Toothless. 
    
    ![The combined high-detail Toothless model](/perfectToothless.PNG){700}
    
    However, the problem was that my perfect Toothless was extremely detailed, with a crazy number of facets. My computer software, 123D Design, did NOT like this. It shut off 90% of its tools and would crash every 20-30 minutes. Nearly every time I tried to edit the dragon, the computer would freeze and then give me an error message. At this point, I should have changed my strategy; however, I was too attached to my original design, determined to complete the exact project I had planned. 
    
  ![One of many "Toothless Head" files, containing the full head, top half of head, partial ear mechanism, and replicated servo](/toothlessHead.png){400}

    I fought the software for months. I found that it would allow me to subtract an approximately 1mm by 1mm random area 5% of the time, and so I would sit for hours slowly trying to make progress. 
    
    !video[A recording of the 123D Design errors I kept running into](/toothlessErrorVideo.mp4)
    
    This semi-worked when I was deleting broad areas, however it became incredibly difficult when I had to make an exact cut, and all I received were error messages. I tried other programs in an attempt to find one that could handle the complex shape, but I soon discovered that the only ones that would do so were too expensive. I wanted this design to work very badly, however, after months, I finally had to accept that due to the lack of cooperation from the software, my plans had to change.
    
    ## Reevaluating

    At this point I had to backtrack and reevaluate what was possible. Not only was I working with a software that had made it its sole mission to prevent the completion of my project, but after multiple test prints, I had discovered that my 3D printer couldn’t print the model big enough to hold the mechanics inside. In theory, I should have been able to break the dragon down into small parts, print them, and then attach them. However, I once again faced the problem that the software wouldn’t allow me to subtract and break the model into pieces. These factors were extremely limiting towards my original plan, and I had to think of a creative way to overcome them. I had learned so much about engineering through the steps I had already taken, but I didn’t seem to have the experience needed to know how to navigate this. I consulted my dad, who has forty years of engineering experience, asking what he would do. He suggested that I build a simplified version of what’s referred to as a “proof of concept”, meaning a sample of an overall concept that proves its feasibility. This was doable. With this new idea in mind, it was back to the drawing board. I ditched the high facet Toothless model, opting to build a simpler representation. On top of that, instead of attempting to create the entire Toothless, I simplified the design to only a few features. The model would only include the top part of the head, solving the lack of mechanical space. Additionally, the dragon would only have one moving function, being the ears, along with lights for the eyes and “plasma”. Everything would be operated by two motion sensors, which would work together to determine whether there was an object in front of the head, and its position. Once this modified plan was created, it was time to return to 123D Design.

    ## 3D Printing (Design #2)

    I used 123D Design to sketch out the top of the head, using the lofting and mirroring features to form the shape. To my delight, the simpler model of the dragon was accepted by 123D Design, and the software was no longer plotting my downfall. At last, I was able to make progress at the speed that I had originally thought I would back in September. I added the spikes, lower ears, and eyes to the model, completing the base. 
    
    ![The simplified head design](/simplifiedToothlessHead.PNG)
    
    From there, I used the subtraction tool to cut holes, three on each eye for the lights, and two on the back of the head for the ears. I was able to use the ears that I had removed from the head in my original design, finishing off the aesthetics of the head. Afterwards, I designed the stand and mechanics. The stand consisted of a thin, wide rectangle with mounting posts, a light holder and a servo holder on top. I was once again able to use parts from my original work, utilizing the servo replica to cut out the perfect shape. The mechanical part is where the design got challenging. I had to use one servo to control two different ears that would rotate on a specific axis point, different to the axis point of the servo. I eventually determined that the best design would be to have a horizontal rod as a pivot in the head. The ears would be attached to the rod, while also being attached to the servo by a wire. It took multiple attempts, but eventually, the mechanics were assembled.

    ## Hardware

    With the 3D printing finally complete, it was time for the wiring. It didn’t take long to realize that this required experience that I didn’t have. My dad walked me through this part. He showed how to wire and solder everything, building an interface board to make the connection between Toothless and the Arduino easier. My dad did most of the work with the interface and Arduino, as creating these boards was his exact job as an engineer, and I didn’t have the skills to do this. Afterwards, everything was assembled on a wooden plank, screwed down to keep it all together. I also secured the two motion sensors, lights, servo, and ear mechanism. Everything was in place, and at last I could move on to the final step, where the whole thing came to life.

    ## Software

    Coding the model was by far the most exciting part, and it was extremely fun to see it all come together. I filled my code with comments in detail, as I was relatively new to coding and it was easy to forget what a line of code does when resuming coding after a break.
\`\`\`
   // Constants

const int rightmotionPin = 5;  // Right motion detector input pin number.
const int leftmotionPin = 6;  // Left motion detector input pin number.

const int servoPin = 4;  // Ear servo output pin number.

const int ledmouthPin = 7;  // Mouth LED pin number.

const int ledR0Pin = 13;  // Right eye 0 LED pin number.
const int ledR1Pin = 12;  // Right eye 1 pin number.
const int ledR2Pin = 11;  // Right eye 2 pin number.
const int ledL0Pin = 10;  // Left eye 0 pin number.
const int ledL1Pin = 9;  // Left eye 1 pin number.
const int ledL2Pin = 8;  // Left eye 2 pin number.
\`\`\`
   This section is part of setting up the rest of the code. It defines different pin numbers on the Arduino, linking them to different electronics. For example, input pin number 5 was declared as the right motion detector.
\`\`\`
const int servoMin = 16; 
//Minimum servo value  16 should be the absolute lowest value allowed for 0 degrees.
const int servoMax = 20;   //Max servo value for extending ears. 30 should be the absolute highest value allowed for 180 degree servo position.

const int servoVib = 3;   //Number of times servo moves up/down when left or right motion detected and ears vibrate.
const int earShake = 3;   //Number of time servo moves up/down when left or right motion detected and ears move up and down. 
const int earDelay = 10;  //ms delay between ears going up/down when left or right motion detected.
const int earscareDelay = 2;  //ms delay between ears going up/down when center movement detected (both right and left motion simultaneously).

int i = 0;  //Counter
\`\`\`
    This section of code finishes setting up constant integers, including the integers for the minimum and maximum degrees of the servo. Integers like these are defined in code to simplify corrections later on. For example, I’ve written “const int earShake = 3;” which defines the amount of times the ears go up and down if either sensor detects motion. Now for the rest of the code, I can simply use “earShake” to refer to this, and the code will know I mean 3. If later on I decide that I want the number to be different, all I have to do it change the number in this one spot, and “earShake” will have a different value. This is far more efficient than editing every “3” in the entire code. I use “earShake” as an example as this was something that I did change the value of, as the original value was 2.
\`\`\`
void setup() 
{

pinMode(rightmotionPin, INPUT);  // Pin set as input.  Right motion detector.
pinMode(leftmotionPin, INPUT);  // Pin set as input.  Left motion detector.

pinMode(servoPin,OUTPUT);  // PWM output for servo.

pinMode(ledmouthPin, OUTPUT); //  Mouth LED.

pinMode(ledR0Pin, OUTPUT); //  Right eye 0 LED.
pinMode(ledR1Pin, OUTPUT); //  Right eye 1 LED.
pinMode(ledR2Pin, OUTPUT); //  Right eye 2 LED.
pinMode(ledL0Pin, OUTPUT); //  Left eye 0 LED.
pinMode(ledL1Pin, OUTPUT); //  Left eye 1 LED.
pinMode(ledL2Pin, OUTPUT); //  Left eye 2 LED.

TCCR0B = TCCR0B & B11111000 | B00000101; // Servo requires approximately 50 Hz PWM.  This setting provides PWM frequency of 61.04 Hz on Pin 4.

}
\`\`\`
    This is the final portion of set up code. It takes the terms that were given values on the Arduino and defines each pin, providing its pin number and function (input, output, etc). The last section defines the frequency for the servo, which was an extremely specific number found online. When I first plugged in the servo, it didn’t work and got extremely hot. I learned that the servo needs to have a control signal called a pulse width modulation (PWM) that runs at around 50 Hz, but my code by default was outputting PWM at 1000 Hz, causing the servo to get confused and start to melt. Obviously, this was not ideal. I discovered online that by changing the register value, I could change the frequency to 60 Hz, which worked.
\`\`\`
void loop() 
{

  if ((digitalRead(rightmotionPin) && digitalRead(leftmotionPin)) || (!digitalRead(rightmotionPin) && !digitalRead(leftmotionPin)))  //Check that there is no side motion detected.  Default eyes.
  {

    digitalWrite(ledmouthPin, LOW);  //Turn off the blue mouth LED.

    digitalWrite(ledR0Pin, LOW);  //Turn off right eye LED 0.
    digitalWrite(ledR1Pin, HIGH);  //Turn on right eye LED 1.
    digitalWrite(ledR2Pin, LOW);  //Turn off right eye LED 2.

    digitalWrite(ledL0Pin, LOW);  //Turn off left eye LED 0.
    digitalWrite(ledL1Pin, HIGH);  //Turn on left eye LED 1.
    digitalWrite(ledL2Pin, LOW);  //Turn off left eye LED 2.

//    if (!digitalRead(rightmotionPin) && !digitalRead(leftmotionPin))  //Motion in the center of the head.  Raise ears once.
//    {
//      analogWrite(servoPin, servoMax);
//      delay(earDelay);
//      analogWrite(servoPin, servoMin);   
//      delay(earDelay);
//    }

    while (!digitalRead(rightmotionPin) && !digitalRead(leftmotionPin))  //Motion in the center of the head.  Shake ears until hand is removed.
    {
      analogWrite(servoPin, servoMin+3);
      delay(earscareDelay);
      analogWrite(servoPin, servoMin);   
      delay(earscareDelay);
    }   

    delay(100);  //Give time to pull hand away and for both motion detectors to turn off, otherwise side motion routine will be triggered.

  }
\`\`\`
    With everything defined, different actions began to be coded in the void loop. At the beginning of this section, it sets the default eyes and plasma light. If neither or both motion sensors are activated, the middle eye lights turn on and the plasma light stays off. Additionally, it creates the “nervous Toothless” feature. When both motion sensors are activated, the code jiggles the ears slightly and rapidly until the sensors are no longer triggered. At the end of this section, there is a 100 millisecond delay. This is because when something moves away from the sensors, one sensor is bound to not detect motion slightly before the other. Later in the code, this would cause a different action from Toothless that would be unwanted. This brief delay prevents that. 
\`\`\`
  if (digitalRead(rightmotionPin) && !digitalRead(leftmotionPin))  //Motion on the right side of the head for first time.  Look to right.
  {
    digitalWrite(ledmouthPin, LOW);  //Turn off the blue mouth LED.

    digitalWrite(ledR0Pin, HIGH);  //Turn on right eye LED 0.
    digitalWrite(ledR1Pin, LOW);  //Turn off right eye LED 1.
    digitalWrite(ledR2Pin, LOW);  //Turn on right eye LED 2.

    digitalWrite(ledL0Pin, HIGH);  //Turn on left eye LED 0.
    digitalWrite(ledL1Pin, LOW);  //Turn off left eye LED 1.
    digitalWrite(ledL2Pin, LOW);  //Turn on left eye LED 2.

    for (i = 0; i < servoVib; i++)  //Jiggle the servo to make a buzzing noise.
    {    
      analogWrite(servoPin, servoMin+1);
      delay(5);
      analogWrite(servoPin, servoMin);   
      delay(5);
    }  

    digitalWrite(ledmouthPin, HIGH);  //Turn on the blue mouth LED.

    for (i = 0; i < earShake; i++)  //Move the servo up and down a little more, to make the ears move.
    {    
      analogWrite(servoPin, servoMax);
      delay(earDelay);
      analogWrite(servoPin, servoMin);   
      delay(earDelay);
    }

    digitalWrite(ledmouthPin, LOW);  //Turn off the blue mouth LED.

    while (digitalRead(rightmotionPin) && !digitalRead(leftmotionPin))  //While the right motion detector remains triggered, do nothing.
    {
      delay(1);
    }  
    
  }
\`\`\`
    This section of code controls what happens if only the right motion sensor detects movement. In the eyes, the middle lights turn off and the right lights turn on, causing Toothless to look towards the movement. Additionally, the plasma light turns on momentarily and the ears jiggle before moving up and down three times. As long as the right motion sensor remains triggered, the code enters an infinite loop, causing him to stare at the movement until the trigger is gone.
\`\`\`
  if (!digitalRead(rightmotionPin) && digitalRead(leftmotionPin))  //Motion on the left side of the head for first time.  Look to left.
  {

    digitalWrite(ledR0Pin, LOW);  //Turn off right eye LED 0.
    digitalWrite(ledR1Pin, LOW);  //Turn on right eye LED 1.
    digitalWrite(ledR2Pin, HIGH);  //Turn off right eye LED 2.

    digitalWrite(ledL0Pin, LOW);  //Turn off left eye LED 0.
    digitalWrite(ledL1Pin, LOW);  //Turn on left eye LED 1.
    digitalWrite(ledL2Pin, HIGH);  //Turn off left eye LED 2.

    for (i = 0; i < servoVib; i++)  //Jiggle the servo to make a buzzing noise.
    {    
      analogWrite(servoPin, servoMin+1);
      delay(5);
      analogWrite(servoPin, servoMin);   
      delay(5);
    }  

    digitalWrite(ledmouthPin, HIGH);  //Turn on the blue mouth LED.

    for (i = 0; i < earShake; i++)  //Move the servo up and down a little more, to make the ears move.
    {    
      analogWrite(servoPin, servoMax);
      delay(earDelay);
      analogWrite(servoPin, servoMin);   
      delay(earDelay);
    }  

    digitalWrite(ledmouthPin, LOW);  //Turn off the blue mouth LED.

    while (!digitalRead(rightmotionPin) && digitalRead(leftmotionPin))  //While the left motion detector remains triggered, do nothing.
    {
      delay(1);  
    }  

  }  

}  
\`\`\`
    This final portion of code does the exact same thing as the previous section, but for the left motion sensor instead of the right.

    ## Conclusion

    Through this project, I was able to explore the world of robotics, computer hardware, and computer software. After many months of work, I created a simplified version of a proof of concept for a robotic version of Toothless. My ending results were very different than what I originally set out to accomplish, due to a handful of uncontrollable problems. Despite this, I had an end result that was worth the challenges and grew in my understanding of engineering. I learned that it’s common in engineering for an original plan to not work. Instead of remaining stubborn, it’s crucial to evaluate progress and recognize when you’re going down a path that isn’t going to work, bringing the plan back to the drawing board and finding another way to accomplish it. This concept can be applied to scenarios that go outside of robotics, with life situations in general. Additionally, this experience made me more familiar with what path I would be taking if I entered into an engineering or robotics related field after high school, which helped with my post-secondary decisions. If I had more time to continue this project, I would be interested in what I could add to give Toothless more features. I’m curious if I would be able to print a simplified body that I could attach the head to, in order to create a full dragon. Overall, I am satisfied with my results, and my Grade six self would be thrilled to know that I finally attempted to bring my favorite childhood character to life.
    `,
    image: "/toothlessCover.jpeg",
    titleColor: "#41ff63",
    titleOutlineColor: "#095928",
  },
  //{
   // slug: "cookie-dispenser",
  //  title: "A Design That My Dog Was (Temporarily) a Huge Fan Of",
   // date: "March 23, 2021",
   // time: "idk",
  //  body: "Full post content goes here...",
  //  image: "/finnCover.jpeg",
  //  titleColor: "#ab5c2e",
  //  titleOutlineColor: "#471c03",
//  },
];