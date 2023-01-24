var i = 0;
var txt = "Hello, I am Fardeen Ahmed, a Computer Science Enginnering Major at the University of Michigan. My goal of creating Video Games, led me to picking Computer Science and allowed me to find other fields within Computer Science to get excited about! All of this led me to creating a web/mobile application with other students, indie video games by myself, tutoring other students in a variety of Computer Science topics, and creating this website."
var speed = 50
for(var i = 0; i < txt.length; i++){
    document.getElementById("Bio").innerHTML += txt.charAt(i)
    i++;
    setTimeout(typeWriter, speed);
}
    

