"use strict";

const notes = document.querySelector("#note");
const btn = document.querySelector(".form-btn");
let data;

const inputHandler = () => {
    data = notes.value;
};

const onSaveHandler = (fn) => {
    localStorage.setItem("note", data);
    console.log(data);
};

notes.addEventListener("input", inputHandler);
btn.addEventListener("click", onSaveHandler);
