"use strict";
//==================
// VARIABLES
//==================
const notebook = document.querySelector("#notebook");
const notes = document.querySelector("#note");
const btn = document.querySelector(".form-btn");
const notification = document.querySelector("#notification");

//==================
// FUNCTIONS
//==================

const showStatus = () => {
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
 * Takes data from input and store
 * in localstorage in key/value pair
 * @param {function} Function   String as key/value pair
 * @return {object}
 */
const onSaveHandler = (e) => {
    e.preventDefault();
    if (!note.value) return;
    localStorage.setItem("note", note.value);

    showStatus();
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

notebook.addEventListener("submit", onSaveHandler);
btn.addEventListener("click", onSaveHandler);
