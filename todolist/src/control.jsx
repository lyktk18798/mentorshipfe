import React from "react";

const inputField = document.querySelector(".inpuField");
const allClear = document.querySelector(".clearAll");
const todoList = document.querySelector(".todoList");
const addBtn = document.querySelector(".addbtn");
const allCheck = document.querySelector(".allCheck");
const progressBar = document.querySelector(".pbar");
progressNum = document.querySelector(".percent");

//add task then press enter
inputField.addEventListener("keyup", (e) => {
    let inputVal = inputField.value.trim();

    if (e.key === "Enter" && inputVal.length > 0) {
        // console.log("valid");
        let item = `<div class="listItem pending pt-1">    
          <input type="checkbox" name="item" class="compItem " onclick ="handleStatus(this)">
          <span class="ml-1 itemDescription" >${inputVal}</span>
      </div>`;
        // <i class=" deleteItem fas fa-trash px-2" onclick="deleteItem(this)"></i>
        todoList.insertAdjacentHTML("beforeend", item);
        inputField.value = "";
    }
});
//add task when click the add button
addBtn.addEventListener("click", () => {
    let inputVal = inputField.value.trim();

    if (inputVal.length > 0) {
        console.log("valid");
        let item = `<div class="listItem pending pt-1" >   
    <input type="checkbox" class="compItem pending" onclick="handleStatus(this)" >
    <span class="ml-1 itemDescription">${inputVal}</span>
</div>`;
        // <i class=" deleteItem fas fa-trash px-2" onclick="deleteItem(this)"></i>
        todoList.insertAdjacentHTML("beforeend", item);
        inputField.value = "";
    }
});

//delete item
allClear.addEventListener("click", () => {
    let listItem = document.querySelectorAll(".listItem");
    let checkboxes = document.querySelectorAll(".compItem");
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        if (checkboxes[i].checked) {
            todoList.removeChild(listItem[i]);
            setProgessVal(0);
        }
    }
    // console.log(checkboxes);
    if (!todoList.innerHTML) {
        allCheck.checked = false;
        allClear.innerHTML = "Xóa";
        setProgessVal(0)
    }
});

function handleStatus(e) {
    e.classList.toggle("checked");
    let checkColor = progressCal();
    if (checkColor === 100) {
        progressBar.classList.add("bg-success");
    } else {
        progressBar.classList.remove("bg-success");
    }
}

//all check
allCheck.addEventListener("click", () => {
    let checkboxes = document.querySelectorAll(".compItem");
    setProgessVal(100);
    progressBar.classList.add("bg-success");
    if (allCheck.checked) {
        for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = true;

            checkboxes[i].classList.add("checked");
        }
        allClear.innerHTML = "Xóa tất";

    } else {
        setProgessVal(0);
        for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
            checkboxes[i].classList.remove("checked");
        }
        allClear.innerHTML = "Xóa";
    }
});

//progress bar
// tính progress bar = (100 chia tổng số task)*số task có class checked

function progressCal() {
    let checkedTask = document.querySelectorAll(".checked");
    let total = document.querySelectorAll(".compItem");
    let percent = Math.floor((100 / total.length) * checkedTask.length);
    setProgessVal(percent);
    if (percent === 100) {
        allCheck.checked = true;
        allClear.innerHTML = "Xóa tất";
    } else {
        allCheck.checked = false;
        allClear.innerHTML = "Xóa";
    }
    return percent;
}

function setProgessVal(num) {
    progressBar.style.width = `${num}%`;
    progressNum.textContent = `${num}%`;
}

function ListAction(){
    
}