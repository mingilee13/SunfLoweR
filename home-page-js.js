var i=0; typing;
text="READY TO FIND SOME REAL SUPERHEROES IN THE WILD?"

function typing() {
    if(i<text.length) {
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}
typing();

