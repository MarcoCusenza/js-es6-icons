fillPage("all");
document.getElementById("selector").addEventListener('change', function () {
    document.getElementById("box-container").innerHTML = '';
    fillPage(`${document.getElementById("selector").value}`);
});
function createBox(el) {
    const { name, prefix, family, color } = el;
    document.getElementById("box-container").innerHTML += `
    <div class="box">
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
