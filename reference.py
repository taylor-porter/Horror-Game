print()
print("--The Adventure Game--")
print("By Taylor Porter")
print()
print("""Instructions: For each scenario, you will need to make a decision. Each of the choices are written in ALL CAPS. 
To make a decision, simply type out your choice and press Enter.""")
print()

print("Please name 3 friends to bring along with you: ")
friend1 = input("1: ").capitalize()
friend2 = input("2: ").capitalize()
friend3 = input("3: ").capitalize()
print()

print(f"""It's been a long week of studying and finals, and you finally finished your last class. You and your friends want to go out and celebrate! 
Your friend has a cabin in the woods, and she's throwing a huge party, so you drive with your friends up the winding mountain road, 
exited to catch a break.  Suddenly, your car starts to sputter and die. You are stranded on the side of the road in the middle of the night.
You try to call for help, only to relaize you have no cell service. Luckily, you stopped in front of a house. 
      
\"Thank goodness\", {friend1} says. \"We can ask the owners for help.\" 
      
Your other friends aren't sure of that's the greatest idea. 
      
\"let's just stay here\", {friend2} suggests. 
      
{friend3} suggests that you start walking to find a gas station or something.\n""")

choice = input("Do you WAIT, WALK to find help, or GO to the house? ").lower()

print()

if choice == "wait":
     print("""\"Let's just wait here\', you suggest. \"It doesn't look like anyone's home anyways\".
     \nYou wait under the dark moonlight for what seems like an eternity. That is, until an old pick up truck pulls over beside you.
     \n\"You guys look like you could use a ride\", the man in the car says. \"Do you want me to take you somewhere?\"\n""")
     choice = input("Do you RIDE with the man, or do you DECLINE his offer? ").lower()


elif choice == "walk":
    print("""You start walking down the road, in hopes of finding something. Along the way, you find a man sobbing uncontrollably. 
     \n\"It's comming!\" he chokes out with soul-shaking terror.\n""")
    choice = input("Do you decide to DISMISS him and tell him nothing's wrong, or do you ASK him what \"it\" is? ").lower()
    if choice == "ask":
         print(f""" \"What is 'It', you ask? \n
\"It’s the darndest scariest thing I ever did see\", said the man. \"A beast that takes a resemblance to both a wolf and a man. Me and me buddies were darn chasin it when it got ‘em.\"\n
You're speechless. \"We need to look for supplies\", the man said. “We need som’in to kill that beast. \n
“We could see if the people in the house could help us”, {friend1} suggests. \n
“I don’t think anyone’s home”, {friend2} says. “I think we should keep walking and find something on the way”. 
""")
         choice = input("Do you GO to the house, or KEEP WALKING?" ).lower()
         if choice == "go":
              print("""You decide to go to the house and see if anyone can help you. When you get there, the house looks abandoned. 
You knock on the door, asking for help, but the door just creaks open. You walk in, when a guy with an ax jumps at you.
                    
THE END.""")
         elif choice == "keep walking":
              print()
              print("You decide to keep walking. A few hundred feet in the distance, you see a man with a shotgun.")
              choice = input("Do you ASK him for help, or do you KEEP WALKING? ").lower()
              if choice == "ask":
                   print()
                   print("""You approach the man with the shotgun cautiously. He sees you and points his gun at you. \n
“What are you doin’ around these parts”, he asks in a low, husky tone. \n
“There’s one on them terrible monsters in these woods”, the man says. \n
“I’ve been looking for those forsaken werewolves all my life, and now is my time.\" The name’s sam, by the way. Shotgun Sam. \n
He takes you in and then drives you to Mc. Donalds in the morning.
                         
THE END.
""")
              elif choice == "keep walking":
                   print()
                   print("""“That man looks scary”, you say. “We better stay out of his way”. Ask you walk, you start to hear thr growl of something hideous. You turn around, but it's too late. \n
THE END.
""")
              else:
                   print()
                   print("Please enter either ASK or KEEP WALKING.")
         else:
              print("Please enter either GO or KEEP WALKING.")
    elif choice == "dismiss":
         print()
         print("""“Dude, this guy’s crazy, you whisper to your friends”. \n
You try to tell him to calm down, that nothing is coming. That’s when you feel a shadow loom over you. You turn around to see something grotesque, a giant, muscular wolf standing on its hind legs, almost like a man. \n 
""")
         choice = input("Do you RUN, or STAND your ground? ").lower()
         if choice == "run":
              print()
              print("""Instinctively, you run into the bushes. The monster isn’t far behind. You can hear it growl as you swerve over branches, and you can almost feel your leg trapped in its jaws. You trip, and are left at the mercy of the monster. 
                    
THE END""")
         elif choice == "stand":
              print()
              print("""
                    
THE END""")
          


elif choice == "go":
     print(f"""\"Let's go to the house\", you say confidently. As you walk towards the house, it's clear that no one lives there. The house looks old and abandoned. 
     \n\"This is awesome!\", you say. \"Let's check it out!\". 
     \n\"Are you stuipid!?\", replies {friend2}. \"Who knows what could be in there? And this is definitley trespassing.\"
     \n\"Come on, man. It's freakin' awesome!\". {friend2} is pretty lame.
     \nYou approach the door, only to find it open. You walk into the decrepid building, finding the old remains of someone's past life. 
That’s when you see the arm under the couch. You hear a faint chuckle. he he he. It becomes louder. hE hE hE. HE HE HE HE! Your
heart starts pounding, and you start to wish you listened to {friend2}. \n""")
     choice = input("On the ground, you see a crowbar. Do you take the crowbar and HIDE, or do you RUN? ").lower()
     
     if choice == "hide":
          print("""You take the crowbar and hide in a closet. You try to stay silent, you try to slow your breathing, but your heart is racing. 
Then, you hear the footsteps. They creep closer and closer to you. The blood-curdling laugh pierces your ears. HE hE hE. HE HE HE.\n""")
          choice = input("Do you jump out and ATTACK, or do you STAY where you are? ").lower()
          if choice == "attack":
               print()
               print("""With the crowbar in hand, you jump out of the closet, startling the man. Quickly, you hit him in the head, and run as fast as you can to the exit. 
Unfortunatley, he catches up.
THE END. 
""")
          elif choice == "stay":
               print()
               print(""""You stay in the closet, terrified. You hear the footsteps and the maniacal laugh again. HE he hE. HE hE He. HE HE HE HE HE HE HE… The ax breaks through the door.\n
THE END.""")
          else:
               print("Please enter either ATTACK or STAY.")

     elif choice == "run":
          print()
          print("""“Run”, you scream.\n
As you hear the footsteps coming closer, you and your friends bolt towards the door. The footsteps are pounding now. They pound faster and faster as the blood-curdling laugh pierces your ears. 
HE HE HE… You see the shadow of a man as you run through the forest. You make it down the to the road, but the man isn't far behind. 
Then, you run into a man with a shotgun. \n
"What in tarnation are you doing?", he says in a slow grumble. \n
He's after us!, you scream, trembling and exauseted. \n
The man with the shotgun sees the shadow of the killer, and without hesitation, shoots him three times in the head.\n
"The name's sam", he says, nonchalantly. "Shotgun sam". "You folks better be careful out in these parts, there are wild things out there."\n
It's been a long night, but now you trust that you're safe.\n
THE END.
""")
else:
    print("PLease enter either WAIT, WALK, or GO.")

