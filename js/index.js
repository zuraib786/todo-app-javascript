function openTodo() {
    document.getElementById('todoInput').style.display = 'block'
}
function addfunction() {

    let list = document.getElementById('ul');
    let txtVal = document.getElementById('txtVal').value;
    document.getElementById('txtVal').value = '';
    let x = Math.random() * 100;
    let li = document.createElement("li");
    li.setAttribute("class", "list");
    li.id = "uniuqeid" + x;

    // editbutton
    let editbutton = document.createElement("button");
    editbutton.setAttribute("class", "btn-edit");
    // delelebutton 
    let deletebutton = document.createElement("button");
    deletebutton.setAttribute("class", "btn-delete");
    let updatebutton = document.createElement("button");
    updatebutton.id = "upbtn";
    updatebutton.innerHTML = "Update";
    updatebutton.setAttribute("class", "btn-update");
    span = document.createElement("span");
    span.setAttribute("class", "title");
    span.id = "uniuqeid2" + x;
    span.innerHTML = txtVal;
    deletebutton.innerHTML = " Delete";
    editbutton.innerHTML = "Edit";

    // list.appendChild(li);
    list.appendChild(li);
    li.appendChild(span)
    li.appendChild(editbutton)
    li.appendChild(deletebutton)

    // delelebutton function
    deletebutton.onclick = function () {
        deletefunction("uniuqeid" + x);
    };

    // editbutton function
    editbutton.onclick = function () {
        editfunction("uniuqeid2" + x);
        document.getElementById("btn").appendChild(updatebutton);

    };
    // updatebutton function 
    updatebutton.onclick = function () {
        updatefunction("uniuqeid2" + x);
    };

}
// deletefunction
function deletefunction(id) {
    let y = document.getElementById(id);
    y.remove();
    a = id;
}

// editfunction
function editfunction(id) {
    addbtn.style.display = "none";
    btn.style.display = "inline-block"
    // where edit method use
    let spn = document.getElementById(id);
    document.getElementById('txtVal').value = spn.innerHTML;

}
// updatefunction
function updatefunction(id) {
    addbtn.style.display = "inline-block";
    let span = document.getElementById(id);
    let txtVal = document.getElementById('txtVal').value;
    span.innerHTML = txtVal;
    document.getElementById('txtVal').value = '';
    let b = document.getElementById('upbtn');
    b.remove();
}