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

function kien_show_b_d() {
    document.getElementById("animal_b").className = "display_block";
    document.getElementById("animal_d").className = "display_block";
    document.getElementById("animal_e").className = "display_none";
}

function kien_show_e() {
    document.getElementById("animal_b").className = "display_none";
    document.getElementById("animal_d").className = "display_none";
    document.getElementById("animal_e").className = "display_block";
}

function changeFunc() {
    var selectBox = document.getElementById("animal-types");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;

    if (selectedValue === "amphibians") {
        kien_show_b_d();
    }else if(selectedValue === "birds") {
        kien_show_e();
    }else {
        alert(selectedValue);
    }
}