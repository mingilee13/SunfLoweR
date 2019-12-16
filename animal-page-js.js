//working on animal types//
function typeselectFunc() {
    var selectBox = document.getElementById("animal-types");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;

    if (selectedValue === "amphibians") {
        show_amphibians();
    }else if(selectedValue === "birds") {
        show_birds();
    }else if(selectedValue === "fishes") {
        show_fishes();
    }else if(selectedValue === "invertebrates") {
        show_invertebrates();
    }else if(selectedValue === "mammals") {
        show_mammals();
    }else if(selectedValue === "reptiles") {
        show_reptiles();
    }else if (selectedValue === "all-types") {
        show_all_types();
    }else {
        alert("Please select types");
    }
}

function show_amphibians() {
    document.getElementById("09").className = "display_block";
    document.getElementById("12").className = "display_block";
    document.getElementById("01").className = "display_none";
    document.getElementById("02").className = "display_none";
    document.getElementById("03").className = "display_none";
    document.getElementById("04").className = "display_none";
    document.getElementById("05").className = "display_none";
    document.getElementById("06").className = "display_none";
    document.getElementById("07").className = "display_none";
    document.getElementById("08").className = "display_none";
    document.getElementById("10").className = "display_none";
    document.getElementById("11").className = "display_none";
    document.getElementById("M").className = "display_none";
    document.getElementById("T").className = "display_none";

}

function show_birds() {
    document.getElementById("05").className = "display_block";
    document.getElementById("12").className = "display_none";
    document.getElementById("01").className = "display_none";
    document.getElementById("02").className = "display_none";
    document.getElementById("03").className = "display_none";
    document.getElementById("04").className = "display_none";
    document.getElementById("09").className = "display_none";
    document.getElementById("06").className = "display_none";
    document.getElementById("07").className = "display_none";
    document.getElementById("08").className = "display_none";
    document.getElementById("10").className = "display_none";
    document.getElementById("11").className = "display_none";
    document.getElementById("M").className = "display_none";
    document.getElementById("T").className = "display_none";
}


function show_fishes() {
    document.getElementById("03").className = "display_block";
    document.getElementById("12").className = "display_none";
    document.getElementById("01").className = "display_none";
    document.getElementById("02").className = "display_none";
    document.getElementById("05").className = "display_none";
    document.getElementById("04").className = "display_none";
    document.getElementById("09").className = "display_none";
    document.getElementById("06").className = "display_none";
    document.getElementById("07").className = "display_none";
    document.getElementById("08").className = "display_none";
    document.getElementById("10").className = "display_none";
    document.getElementById("11").className = "display_none";
    document.getElementById("M").className = "display_none";
    document.getElementById("T").className = "display_none";
}

function show_invertebrates() {
    document.getElementById("02").className = "display_block";
    document.getElementById("04").className = "display_block";
    document.getElementById("06").className = "display_block";
    document.getElementById("07").className = "display_block";
    document.getElementById("10").className = "display_block";
    document.getElementById("01").className = "display_none";
    document.getElementById("03").className = "display_none";
    document.getElementById("05").className = "display_none";
    document.getElementById("09").className = "display_none";
    document.getElementById("08").className = "display_none";
    document.getElementById("12").className = "display_none";
    document.getElementById("11").className = "display_block";
    document.getElementById("M").className = "display_block";
    document.getElementById("T").className = "display_block";
}


function show_mammals() {
    document.getElementById("02").className = "display_none";
    document.getElementById("04").className = "display_none";
    document.getElementById("06").className = "display_none";
    document.getElementById("07").className = "display_none";
    document.getElementById("10").className = "display_none";
    document.getElementById("01").className = "display_none";
    document.getElementById("03").className = "display_none";
    document.getElementById("05").className = "display_none";
    document.getElementById("09").className = "display_none";
    document.getElementById("08").className = "display_none";
    document.getElementById("12").className = "display_none";
    document.getElementById("11").className = "display_none";
    document.getElementById("M").className = "display_none";
    document.getElementById("T").className = "display_none";
}



function show_reptiles() {
    document.getElementById("02").className = "display_none";
    document.getElementById("04").className = "display_none";
    document.getElementById("06").className = "display_none";
    document.getElementById("07").className = "display_none";
    document.getElementById("10").className = "display_none";
    document.getElementById("01").className = "display_none";
    document.getElementById("03").className = "display_none";
    document.getElementById("05").className = "display_none";
    document.getElementById("09").className = "display_none";
    document.getElementById("08").className = "display_block";
    document.getElementById("12").className = "display_none";
    document.getElementById("11").className = "display_none";
    document.getElementById("M").className = "display_none";
    document.getElementById("T").className = "display_none";
}

function show_all_types() {
    document.getElementById("02").className = "display_block";
    document.getElementById("04").className = "display_block";
    document.getElementById("06").className = "display_block";
    document.getElementById("07").className = "display_block";
    document.getElementById("10").className = "display_block";
    document.getElementById("01").className = "display_block";
    document.getElementById("03").className = "display_block";
    document.getElementById("05").className = "display_block";
    document.getElementById("09").className = "display_block";
    document.getElementById("08").className = "display_block";
    document.getElementById("12").className = "display_block";
    document.getElementById("11").className = "display_block";
    document.getElementById("M").className = "display_block";
    document.getElementById("T").className = "display_block";
}


//working on area//

function areaselectFunc() {
    var selectBox = document.getElementById("animal-areas");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;

    if (selectedValue === "asia") {
        show_asia();
    }else if(selectedValue === "Australia") {
        show_australia();
    }else if(selectedValue === "north-america") {
        show_north_america();
    }else if(selectedValue === "south-america") {
        show_south_america();
    }else if(selectedValue=== "northern-hemisphere") {
        show_northern_hemisphere ();
    }else if(selectedValue === "worldwide") {
        show_worldwide();
    }else if (selectedValue === "all-areas") {
        show_all_areas();
    }else {
        alert("Please select areas");
    }
}

function show_asia() {
    document.getElementById("07").className = "display_block";
    document.getElementById("12").className = "display_none";
    document.getElementById("01").className = "display_none";
    document.getElementById("02").className = "display_none";
    document.getElementById("03").className = "display_none";
    document.getElementById("04").className = "display_none";
    document.getElementById("09").className = "display_none";
    document.getElementById("06").className = "display_none";
    document.getElementById("05").className = "display_none";
    document.getElementById("08").className = "display_none";
    document.getElementById("10").className = "display_none";
    document.getElementById("11").className = "display_none";
    document.getElementById("M").className = "display_block";
    document.getElementById("T").className = "display_none";
}


function show_australia() {
    document.getElementById("05").className = "display_block";
    document.getElementById("12").className = "display_none";
    document.getElementById("01").className = "display_none";
    document.getElementById("02").className = "display_none";
    document.getElementById("03").className = "display_none";
    document.getElementById("04").className = "display_none";
    document.getElementById("09").className = "display_none";
    document.getElementById("06").className = "display_none";
    document.getElementById("07").className = "display_block";
    document.getElementById("08").className = "display_none";
    document.getElementById("10").className = "display_none";
    document.getElementById("11").className = "display_none";
    document.getElementById("M").className = "display_block";
    document.getElementById("T").className = "display_none";
}

function show_north_america() {
    document.getElementById("01").className = "display_block";
    document.getElementById("12").className = "display_block";
    document.getElementById("06").className = "display_none";
    document.getElementById("07").className = "display_none";
    document.getElementById("10").className = "display_none";
    document.getElementById("04").className = "display_none";
    document.getElementById("03").className = "display_none";
    document.getElementById("05").className = "display_none";
    document.getElementById("09").className = "display_none";
    document.getElementById("08").className = "display_none";
    document.getElementById("02").className = "display_none";
    document.getElementById("11").className = "display_none";
    document.getElementById("M").className = "display_none";
    document.getElementById("T").className = "display_none";
}


function show_south_america() {

    document.getElementById("01").className = "display_block";
    document.getElementById("04").className = "display_none";
    document.getElementById("06").className = "display_none";
    document.getElementById("07").className = "display_none";
    document.getElementById("10").className = "display_none";
    document.getElementById("02").className = "display_none";
    document.getElementById("03").className = "display_none";
    document.getElementById("05").className = "display_none";
    document.getElementById("09").className = "display_none";
    document.getElementById("08").className = "display_none";
    document.getElementById("12").className = "display_none";
    document.getElementById("11").className = "display_none";
    document.getElementById("M").className = "display_none";
    document.getElementById("T").className = "display_none";
}



function show_northern_hemisphere() {
    document.getElementById("09").className = "display_block";
    document.getElementById("04").className = "display_none";
    document.getElementById("06").className = "display_none";
    document.getElementById("07").className = "display_none";
    document.getElementById("10").className = "display_none";
    document.getElementById("01").className = "display_none";
    document.getElementById("03").className = "display_none";
    document.getElementById("05").className = "display_none";
    document.getElementById("02").className = "display_none";
    document.getElementById("08").className = "display_none";
    document.getElementById("12").className = "display_none";
    document.getElementById("11").className = "display_none";
    document.getElementById("M").className = "display_none";
    document.getElementById("T").className = "display_none";
}

function show_all_areas() {
    document.getElementById("02").className = "display_block";
    document.getElementById("04").className = "display_block";
    document.getElementById("06").className = "display_block";
    document.getElementById("07").className = "display_block";
    document.getElementById("10").className = "display_block";
    document.getElementById("01").className = "display_block";
    document.getElementById("03").className = "display_block";
    document.getElementById("05").className = "display_block";
    document.getElementById("09").className = "display_block";
    document.getElementById("08").className = "display_block";
    document.getElementById("12").className = "display_block";
    document.getElementById("11").className = "display_block";
    document.getElementById("M").className = "display_block";
    document.getElementById("T").className = "display_block";
}

function show_worldwide() {
    document.getElementById("02").className = "display_block";
    document.getElementById("04").className = "display_block";
    document.getElementById("06").className = "display_block";
    document.getElementById("11").className = "display_block";
    document.getElementById("10").className = "display_block";
    document.getElementById("08").className = "display_block";
    document.getElementById("03").className = "display_none";
    document.getElementById("05").className = "display_none";
    document.getElementById("09").className = "display_none";
    document.getElementById("07").className = "display_none";
    document.getElementById("12").className = "display_none";
    document.getElementById("01").className = "display_none";
    document.getElementById("M").className = "display_block";
    document.getElementById("T").className = "display_block";
}
