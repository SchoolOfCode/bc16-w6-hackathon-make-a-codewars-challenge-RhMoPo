# LEGO QUALITY ASSURANCE
```
Name: RHYS POSTANS
Room: Room 3

```

![LEGO FIGURE](https://extraextrabricks.com/userdata/public/gfx/11351/LEGO-City-Minifigure---Mechanic-Female-in-overalls-and-cap.jpg)

## The Problem: LEGO Quality Assurance
You are part of the LEGO quality assurance team. 

To make your job easier you decide to make a function which checks whether a particular LEGO minifigure/ person can be sold based on completeness.

Your function will take in a string which represents what your manager has told you about the state of the
LEGO minifigure/ person.

A complete LEGO minifigure/ person will have:
- legs
- torso
- head
- headpeice (Which will either be hair or a hat)
- An accessory (Which will either be spanner, blaster or lightsaber)

If a LEGO minifigure/ person is complete, you will need to return ["complete"].

if a LEGO minifigure/ person is incomplete, you will have to return what is missing so that it can be completed later on!
 
NOTE: Your manager may SHOUT at you...(initial string may contain a mix of upper and lower case)

## Usage/Examples

```javascript
INPUT: "This LEGO figure has a pair of legs, a torso, head, hat and a spanner"
OUTPUT: ["complete"]

INPUT: "This LEGO figure has a pair of legs and hair.
OUTPUT: ["torso", "head", "accessory"]
```


## FAQ

#### Question 1: Where did you come up with this idea?

Answer 1: I just thought about the things I know about/ interested in. From there, I came up with a few ideas surrounding LEGO, MMA and BJJ... However, the LEGO idea became compelling very quickly, and the ideas seem to just rush to my head!



## Decision Table (expand window to see accurate table)
``````
 	           Legs    Torso    Head    Headpiece Accessory	  OUTPUT
Completeness	✅	   ✅	   ✅	   ✅	   ✅	    ["complete"]
Completeness	❌	   ✅	   ✅	   ✅	   ✅	    ["legs"]
Completeness	✅	   ❌	   ✅	   ✅	   ✅	    ["torso"]
Completeness	✅	   ✅	   ❌	   ✅	   ✅	    ["head"]
Completeness	✅	   ✅	   ✅	   ❌	   ✅	    ["headpiece"]
Completeness	✅	   ✅	   ✅	   ✅	   ❌	    ["accessory"]
Completeness	❌	   ❌	   ✅	   ✅	   ✅	    ["legs", "torso"]
Completeness	❌	   ❌	   ❌	   ✅	   ✅	    ["legs", "torso", "head"]
Completeness	❌	   ❌	   ❌	   ❌	   ✅	    ["legs", "torso", "head", "headpiece"]
Completeness	❌	   ❌	   ❌	   ❌	   ❌	    ["legs", "torso", "head", "headpiece", "accessory"]

``````


