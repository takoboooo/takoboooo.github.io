document.getElementById("submit").addEventListener("click", e => {
    e.preventDefault();
    let form = document.forms["add_list"];
    if (form.elements["todo_title"].value === "") {
        alert("Please Enter some Text.");
        return;
    }
    if (form.elements["month"].value === "" || form.elements["date"].value === "") {
        alert("Please Enter some date.");
        return;
    }

    if (form.elements["month"].value > 12 || form.elements["month"].value < 1) {
        alert("Please Enter Valid Month.");
        return;
    }

    if (form.elements["date"].value > 31 || form.elements["date"].value < 1) {
        alert("Please Enter Valid Date.");
        return;
    }

    let todo_card = document.createElement("div");
    let title = document.createElement("p")
    let time = document.createElement("p")
    let check = document.createElement("button");

    todo_card.classList.add("todo");
    title.classList.add("todo_title")
    time.classList.add("todo_time");
    check.classList.add("check");
    check.addEventListener("click", e=>{
        todo_card.classList.toggle("done");
    })
    
    title.innerText = form.elements["todo_title"].value
    time.innerText = form.elements["month"].value + " / " + form.elements["date"].value;
    check.innerText = "check"

    todo_card.appendChild(title)
    todo_card.appendChild(time)
    todo_card.appendChild(check);

    console.log(todo_card)

    var section = document.getElementById("insert_section");
    section.insertBefore(todo_card, section.firstChild);

    form.reset();
})
