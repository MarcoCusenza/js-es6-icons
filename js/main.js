
// PROGRAMMA
fillPage("All");
// END PROGRAMMA



//FUNZIONI

function createBox(el) {
    const { name, prefix, family } = el;
    document.getElementById("box-container").innerHTML += `
    <div class="box">
        <span>${name}</span><br>
        <i class="${family} ${prefix}${name}"></i>
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