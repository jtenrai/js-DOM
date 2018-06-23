/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/
var taylor = document.getElementById("name1");
taylor.innerHTML = "Tay-Tay";

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/
var khaled = document.getElementById("position2");
khaled.innerHTML = "Project Manager";

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/
var piko = document.getElementById("alias3");
piko.innerHTML = "Concatenation";

var test = "test test"
console.log(test);

/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/
var classProfile = document.getElementsByClassName("profile");
console.log(classProfile);

classProfile[0].innerHTML = "Laughing in the purple rain";


/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/
classProfile[1].innerHTML = "Adapt what is useful, reject what is useless, and add what is specifically your own."


/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/
var classAlias = document.getElementsByClassName("alias");
console.log(classAlias);
classAlias[2].innerHTML = "Stephen - Django";


/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/

var peter = document.createElement("name7");
peter.innerHTML = "Peter Griffin";
document.getElementById("nameParent").appendChild(peter);
document.getElementById("nameParent").style.textAlign = "center";
 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/
var tim = document.createElement("alias8");
tim.innerHTML = "Old Man Riverwalk";
document.getElementById("aliasParent").appendChild(tim);
document.getElementById("aliasParent").style.textAlign = "center";


//Final Boss
/*9. Create your own profile.*/


var classBlock9 = document.getElementsByClassName("block3 col-sm-4");
console.log(classBlock9);
//"block3 col-sm-4"

var porsche = document.createElement("name9");
porsche.innerHTML = "Porsche GT-2 RS";

var positionPorsche = document.createElement("position9");
positionPorsche.innerHTML = "Company Car";

var aliasPorsche = document.createElement("alias9");
aliasPorsche = "Fastest Car Around the Nurburgring. Beep Beep!";

var bioPorsche = document.createElement("bio9");
bioPorsche = "Faster than your company's car...";

var insertClass9 = classBlock9[2];
console.log(insertClass9);

insertClass9.appendChild(porsche);
porsche.nextSibling(aliasPorsche);


console.log(aliasPorsche);