
// PROGRAMMA
fillPage("All");
// END PROGRAMMA



//FUNZIONI

function createBox(el) {
    const { name, prefix, family } = el;
    document.getElementById("box-container").innerHTML += `
    <div class="box">
        <i class="${family} ${prefix}${name}"><i><br>
        <span>${name}</span>
    </div>
    `
}

function fillPage(select) {
    icons.forEach(element => {
        if (select == "All") {
            createBox(element);
        } else {
            if (element.type == select) {
                createBox(element);
            }
        }
    });
}

//END FUNZIONI