const storyData = 
{
    wait : {
        text : `\"Let's just wait here\', you suggest. \"It doesn't look like anyone's home anyways\". You wait under the dark moonlight for what seems like an eternity. That is, until an old pick up truck pulls over beside you. "You guys look like you could use a ride\", the man in the car says. \"Do you want me to take you somewhere? Do you RIDE with the man, or do you DECLINE his offer?`,
        o1 : "Ride",
        o2 : "Decline",
        o3 : ""
    },

        waitRide : {
            text: `You ask the man to take you to your friend’s house. Maybe you’ll make it to the party after all! However, when you told him to turn right, he decided to turn left instead. Do you ASK him what’s going on, or do you JUMP out?`,
            o1 : "Ask",
            o2 : "Jump",
            o3 : ""
        },

            waitRideAsk : {
                text: `You ask the man why he turned left. The man starts laughing. “We’re going to have a different kind of party tonight”. You are terrified. Do you ATTACK the man, or JUMP out?`,
                o1 : "Attack",
                o2 : "Jump",
                o3 : "",
            },
                waitRideAskAttack : {
                    text: `From the back seat, you choke the driver while your friend reaches over to get the steering wheel. Your friend punches the man in the face. You notice an axe underneath the seat. You grab hold of it and tell the man to get out. You go to the party like nothing happened.`,
                    o1 : "",
                    o2 : "",
                    o3 : "",
                },
                waitRideAskJump : {
                    text : `You try to open the door, only to find that the door is child locked. He laughs maniacally, and then drives off a cliff.`,
                    o1 : "",
                    o2 : "",
                    o3 : "",
                },
            waitRideJump : {
                text : `You realize this man is up to no good. You need to act fast before the situation becomes worse. You whisper to your friends “We have to jump”. On the count of 3, you open the door and jump, rolling onto the asphalt. The car comes to a halt, and a man comes out of the car with an ax. Do you RUN, or do you ATTACK?`,
                o1 : "Run",
                o2 : "Attack",
                o3 : "",
            },
                waitRideJumpRun : {
                    text: `You see a pair of golden arches in the distance. You realize it’s a miracle. “Run to that McDonald's!”, you tell your friends. You all run the fastest you have ever run in your life, but your friend cannot keep up. He collapses onto the ground, and you can hear a final, bloodcurdling screech come out of him as the man swings his ax. He was your life-long friend. There’s no time to think about that now, you just keep running through the field, until you reach the orange light radiating from the street lamps. You made it safely, but at what cost?`,
                    o1 : "",
                    o2 : "",
                    o3 : "",
                },
                waitRideJumpAttack : {
                    text: `You and your friends gang up on him, and are able to take his axe. One of your friends kills him. You go to McDonald's and then the party.`,
                    o1 : "",
                    o2 : "",
                    o3 : "",
                },
        waitDecline : {
            text: `You decide that hitchhiking isn’t the best idea. You decide to wait it out until the morning. Then, you hear a growl outside your window. Do you STAY in the car, or do you CHECK it out?`,
            o1 : "Stay",
            o2 : "Check",
            o3 : "",
        },
            waitDeclineStay : {
                text: "You decide to stay in the car. You lock the doors. The werewolf tumbles over the car, but the werewolf is shot. The bullet goes through the door and hits your friend in the head. Shotgun Sam comes out and apologizes.",
                o1 : "",
                o2 : "",
                o3 : "",
            },
            waitDeclineCheck : {
                text: "You go out. You see the werewolf. Do you RUN or HIDE?",
                o1 : "Run",
                o2 : "Hide",
                o3 : "",
            },
                waitDeclineCheckRun : {
                    text: "You run and meet Shotgun Sam who kills the werewolf.",
                    o1 : "",
                    o2 : "",
                    o3 : "",
                },
                waitDeclineCheckHide : {
                    text: "You hide, but the werewolf finds you and kills you",
                    o1 : "",
                    o2 : "",
                    o3 : "",
                },
    walk : {
        text: `You start walking down the road, in hopes of finding something. Along the way, you find a man sobbing uncontrollably. "It's coming!" he chokes out with soul-shaking terror. Do you decide to DISMISS him and tell him nothing's wrong, or do you ASK him what "it" is?`,
        o1 : "Dismiss",
        o2 : "Ask",
        o3 : "",
    },
        walkDismiss : {
            text: `Dude, this guy’s crazy, you whisper to your friends”. You try to tell him to calm down, that nothing is coming. That’s when you feel a shadow loom over you. You turn around to see something grotesque, a giant, muscular wolf standing on its hind legs, almost like a man. Do you RUN, or STAND your ground?`,
            o1:"Run",
            o2:"Stand Your Ground",
            o3:""
        },
            walkDismissRun : {
                text : `Instinctively, you run into the bushes. The monster isn’t far behind. You can hear it growl as you swerve over branches, and you can almost feel your leg trapped in its jaws. You trip, and are left at the mercy of the monster.`,
                o1:"",
                o2:"",
                o3:""
            },
            "walkDismissStand Your Ground" : {
                text: `You want to run, but decide to stand your ground. Who knows how fast that thing can run? It creeps closer, its mouth drooling with white foam, when you hear the ear-splitting sound of a gunshot. The monster drops to the ground, dead. You have no idea who did that, but you know you're safe, for now.`,
                o1:"",
                o2:"",
                o3:""
            },
        walkAsk : {
            text: () => `\"What is 'It', you ask? \"It’s the darndest scariest thing I ever did see\", said the man. \"A beast that takes a resemblance to both a wolf and a man. Me and me buddies were darn chasin' it when it got ‘em.\" You're speechless. \"We need to look for supplies\", the man said. “We need som’in to kill that beast. “We could see if the people in the house could help us”, ${friend1} suggests. “I don’t think anyone’s home”, ${friend2} says. “I think we should keep walking and find something on the way”. Do you GO to the house, or KEEP WALKING?`,
            o1:"Go",
            o2:"Keep Walking",
            o3:""
        },
            walkAskGo : {
                text: "You decide to go to the house and see if anyone can help you. When you get there, the house looks abandoned. You knock on the door, asking for help, but the door just creaks open. You walk in, when a guy with an ax jumps at you.",
                o1:"",
                o2:"",
                o3:""

            },
            "walkAskKeep Walking" : {
                text: `You decide to keep walking. A few hundred feet in the distance, you see a man with a shotgun. Do you ASK him for help, or do you KEEP WALKING?`,
                o1 : "Ask",
                o2 : "Keep Walking",
                o3 : "",
            },
                "walkAskKeep WalkingAsk" : {
                    text: `You approach the man with the shotgun cautiously. He sees you and points his gun at you. “What are you doin’ around these parts”, he asks in a low, husky tone. “There’s one on them terrible monsters in these woods”, the man says. “I’ve been looking for those forsaken werewolves all my life, and now is my time. The name’s sam, buy the say. Shotgun Sam. He takes you in and then drives you to Mc. Donald's in the morning`,
                    o1:"",
                    o2:"",
                    o3:""
                },
                "walkAskKeep WalkingKeep Walking" : {
                    text: `“That man looks scary”, you say. “We better stay out of his way”. You go into the forest and the werewolf kills you.`,
                    o1:"",
                    o2:"",
                    o3:""
                },
    go : {
        text: () => `"Let's go to the house\", you say confidently. As you walk towards the house, it's clear that no one lives there. The house looks old and abandoned. "This is awesome!\", you say. \"Let's check it out!\". 

     "Are you stupid!?\", replies ${friend2}. \"Who knows what could be in there? And this is definitley trespassing.\"

     "Come on, man. It's freakin' awesome!\". ${friend2} is pretty lame.

     You approach the door, only to find it open. You walk into the decrepid building, finding the old remains of someone's past life. 
That’s when you see the arm under the couch. You hear a faint chuckle. he he he. It becomes louder. hE hE hE. HE HE HE HE! Your
heart starts pounding, and you start to wish you listened to ${friend2}.

"On the ground, you see a crowbar. Do you take the crowbar and HIDE, or do you RUN?` ,
        o1 : "Hide",
        o2 : "Run",
        o3 : "",
    },
        goHide : {
            text: `You take the crowbar and hide in a closet. You try to stay silent, you try to slow your breathing, but your heart is racing. Then, you hear the footsteps. They creep closer and closer to you. The blood-curdling laugh pierces your ears. HE hE hE. HE HE HE.
            
            Do you jump out and ATTACK, or do you STAY where you are?`,
            o1 : "Attack",
            o2 : "Stay",
            o3 : "",
        },
            goHideAttack : {
                text: `With the crowbar in hand, you jump out of the closet, startling the man. Quickly, you hit him in the head, and run as fast as you can to the exit. Unfortunately, he catches up.`,
                o1 : "",
                o2 : "",
                o3 : "",
            },
            goHideStay : {
                text: `You stay in the closet, terrified. You hear the footsteps and the maniacal laugh again. HE he hE. HE hE He. HE HE HE HE HE HE HE… The ax breaks through the door.`,
                o1 : "",
                o2 : "",
                o3 : "",
            },

        goRun : {
            text: `“Run”, you scream.\n
            As you hear the footsteps coming closer, you and your friends bolt towards the door. The footsteps are pounding now. They pound faster and faster as the blood-curdling laugh pierces your ears. 
            HE HE HE… You see the shadow of a man as you run through the forest. You make it down the to the road, but the man isn't far behind. 
            Then, you run into a man with a shotgun. \n
            "What in tarnation are you doing?", he says in a slow grumble. \n
            He's after us!, you scream, trembling and exauseted. \n
            The man with the shotgun sees the shadow of the killer, and without hesitation, shoots him three times in the head.\n
            "The name's sam", he says, nonchalantly. "Shotgun sam". "You folks better be careful out in these parts, there are wild things out there."\n
            It's been a long night, but now you trust that you're safe.\n`,
            o1 : "",
            o2 : "",
            o3 : "",
        },
    p : {
        text: "",
        o1 : "",
        o2 : "",
        o3 : "",
    },
};


// [2] : {
//     text: ``,
//     o1 : "",
//     o2 : "",
//     o3 : "",
// },