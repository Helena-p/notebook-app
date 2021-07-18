"use strict";
//==================
// VARIABLES
//==================
const notes = document.querySelector("#note");
const btn = document.querySelector(".form-btn");
const notification = document.querySelector("#notification");
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
    if (!data) return;
    localStorage.setItem("note", data);

    // Inform user of saved note
    setTimeout(() => {
        notification.textContent = "You're notes were saved successfully!";
    }, 1);

    // Remove notification after 3 sec
    setTimeout(() => {
        notification.textContent = "";
    }, 3000);
};

/**
 * Display note in textarea on page load
 */
const renderNotes = () => {
    notes.textContent = localStorage.getItem("note");
};

renderNotes();

//==================
// EVENTHANDLERS
//==================

notes.addEventListener("input", inputHandler);
btn.addEventListener("click", onSaveHandler);
