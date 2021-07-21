"use strict";
//==================
// VARIABLES
//==================
const notebook = document.querySelector("#notebook");
const note = document.querySelector("#note");
const notification = document.querySelector("#notification");
const savedNote = "You're notes were saved successfully!";
const removedNote = "Your note have been removed!";

// Get all field data from the form
// returns a FormData object
let data = new FormData(notebook);

//==================
// FUNCTIONS
//==================

/**
 * Helper function
 * Notification to user
 */
const showStatus = (message) => {
    // Inform user of note status
    setTimeout(() => {
        notification.textContent = message;
    }, 1);

    // Remove notification after 3 sec
    setTimeout(() => {
        notification.textContent = "";
    }, 3000);
};

// Helper function, convert FormData object into plain object
// Pass in the FormData object as argument
const serialize = (data) => {
    let obj = {};
    for (let [key, value] of data) {
        if (obj[key] !== undefined) {
            if (!Array.isArray(obj[key])) {
                obj[key] = [obj[key]];
            }
            obj[key].push(value);
        } else {
            obj[key] = value;
        }
    }
    return obj;
};

/**
 * Takes data from input and store
 * in localstorage in key/value pair
 * @param {Event} Event   The event object
 * @return {String}
 */
const onSaveHandler = (e) => {
    e.preventDefault();
    if (!note.value) return;
    localStorage.setItem("note", note.value);

    showStatus(savedNote);
};

/**
 * Removes note from local storage
 * @param {Event} event  The event object
 */
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
