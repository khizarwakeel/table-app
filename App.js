const table = document.getElementById("inputField");

table.addEventListener("keydown", function (event) {
    console.log(event.key);

    if (event.key === "Enter") {
        tableCal();
    }
});

function tableCal() {
    const messageHeading = document.getElementById("messageHeading");
    messageHeading.innerHTML = "";

    const number = parseInt(table.value);
    if (isNaN(number)) {
        const li = document.createElement("li");
        li.textContent = "Please enter a valid number.";
        messageHeading.appendChild(li);
        return;
    }

    for (let i = 1; i <= 10; i++) {
        const li = document.createElement("li");
        li.textContent = `${number} x ${i} = ${number * i}`;
        messageHeading.appendChild(li);
    }
}