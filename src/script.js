"use strict";
//==================
// VARIABLES
//==================
const notes = document.querySelector("#note");
const btn = document.querySelector(".form-btn");
let data;

//==================
// FUNCTIONS
//==================

/**
 * Takes input from textarea and store in data variable
 * @param {string} String   Textarea input value
 */
const inputHandler = () => {
    data = notes.value;
};

/**
 * Takes data from inputHandler function and store
 * in localstorage in key/value pair
 * @param {function} Function   String as key/value pair
 * @return {object}
 */
const onSaveHandler = (fn) => {
    localStorage.setItem("note", data);
    console.log(data);
};

const renderNotes = () => {
    notes.textContent = localStorage.getItem("note");
};

window.onload = renderNotes();

//==================
// EVENTHANDLERS
//==================

notes.addEventListener("input", inputHandler);
btn.addEventListener("click", onSaveHandler);
