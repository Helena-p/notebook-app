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

/**
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
