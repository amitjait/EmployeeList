let form = document.forms['myform'];
var table = document.getElementById('etable');
let addbtn = document.getElementById('addUser');
let message = document.getElementById('message');
let added = document.getElementById('added');


var id = 0;
let arr = [];

addbtn.addEventListener('click', ()=>{

    let name = form['fname'].value;
    let pro = form['pro'].value;
    let age = form['Age'].value;

    if(name == "" || pro == "" || age == ""){
        message.innerHTML = " Error : Please make sure All fields are  filled before adding and employee !";
        message.style.color = "red";
    }else{
        message.innerHTML = " Success : Employee Added";
        message.style.color = "lightgreen";
        addUser(name, pro, age);
    }
})


let btnarr = [];
// let map = new Map();



function addUser(n, p, a){
    id++;

    const obj = {
        Id : id,
        Name : n,
        Profession : p,
        Age :a
    }

    let rowL = table.rows.length;

    var row = table.insertRow(rowL);
    row.setAttribute("id", id);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = id;
    cell2.innerHTML = "Name : " + n;
    cell3.innerHTML = "Profession : " +p;
    cell4.innerHTML = "Age : "+a;

    cell1.style.width = "1rem";
    cell2.style.width = "10rem";
    cell3.style.width = "10rem";
    cell4.style.width = "10rem";

    cell1.style.paddingLeft = "1rem";
    cell2.style.paddingLeft = "1rem";
    cell3.style.paddingLeft = "1rem";
    cell4.style.paddingLeft = "1rem";
    cell5.style.paddingLeft = "1rem";
    

    arr.push(obj);
    
    if(arr.length > 0){
        // console.log(table.rows.length);
        added.style.display = "none";
    }else{
        added.style.display = "block";
    }

    // delete btn

    let btn = document.createElement('button');
    btn.innerHTML = "Delete User";
    btn.style.borderRadius = "25px"
    btn.style.height = "2rem";
    btn.style.paddingLeft = "1rem";
    btn.style.paddingRight = "1rem";
    btn.classList.add('dbtn');
    let idx = table.rows.length;
    btn.setAttribute("id", id);

    btn.onclick = function(){
        deleteUser(btn.id);
    }

    btnarr.push(btn);

    cell5.appendChild(btn);
    cell5.style.border = "none";


}

function deleteUser(i){
    let row = document.getElementById(i).remove();

    for(let j=0; j<arr.length; j++){
        if(arr[j].Id == i){
            arr.splice(j, 1);
            break;
        }
        console.log(arr);
    }


    if(arr.length > 0){
        added.style.display = "none";
    }else{
        added.style.display = "block";
    }

}














