"use strict";
//==================
// VARIABLES
//==================
const notebook = document.querySelector("#notebook");
const notes = document.querySelector("#note");
const removeBtn = document.querySelector(".remove-btn");
const notification = document.querySelector("#notification");
const savedNote = "You're notes were saved successfully!";
const removedNote = "Your note have been removed!";

//==================
// FUNCTIONS
//==================

const showStatus = (message) => {
    // Inform user of saved note
    setTimeout(() => {
        notification.textContent = message;
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

    showStatus(savedNote);
};

const removeNoteHandler = (e) => {
    e.preventDefault();
    if (!note.value) return;
    localStorage.removeItem("note");
    showStatus(removedNote);
    note.value = "";
};

/**
 * Display note in textarea on page load
 */
const renderNotes = () => {
    let saved = localStorage.getItem("note");
    if (!saved) return;
    note.textContent = saved;
};

renderNotes();

//==================
// EVENTHANDLERS
//==================

notebook.addEventListener("submit", onSaveHandler);
notebook.addEventListener("reset", removeNoteHandler);
