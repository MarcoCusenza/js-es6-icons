fillPage("all");
document.getElementById("selector").addEventListener('change', function () {
    document.getElementById("box-container").innerHTML = '';
    fillPage(`${document.getElementById("selector").value}`);
});
function createBox(el) {
    const { name, prefix, family, color } = el;
    document.getElementById("box-container").innerHTML += `
    <div class="box" style="background-color:${getColor()}">
        <i class="${family} ${prefix}${name} ${color}"></i><br>
        <span>${name}</span>
    </div>`;
}
function fillPage(select) {
    icons.forEach(element => {
        if (select == "all") {
            createBox(element);
        } else {
            if (element.type == select) {
                createBox(element);
            }
        }
    });
}
function getColor() {
    let tot = "";
    for (let i = 0; i < 3; i++) {
        let hex = Math.round(Math.random() * (245 - 210) + 210).toString(16);
        tot += ("0" + hex.toString()).substr(-2);
    }
    return "#" + tot;
}

