"use strict";
//==================
// VARIABLES
//==================
const notebook = document.querySelector("#notebook");
const notification = document.querySelector("#notification");
const savedNote = "You're notes were saved successfully!";
const removedNote = "Your note have been removed!";

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

/*!
 * Serialize all form data into an object
 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {FormData} data The FormData object to serialize
 * @return {String}        The serialized form data
 */
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
    let notes = serialize(new FormData(notebook));
    localStorage.setItem("notes", JSON.stringify(notes));

    showStatus(savedNote);
};

/**
 * Display note in textarea on page load
 */
const renderNotes = () => {
    let saved = JSON.parse(localStorage.getItem("notes"));

    if (!saved) return;

    let fields = notebook.elements;

    for (let field of fields) {
        if (!saved[field.name]) continue;
        field.value = saved[field.name];
    }
};

renderNotes();

/**
 * Removes note from local storage
 * @param {Event} event  The event object
 */
const removeNoteHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("notes");
    showStatus(removedNote);
    title.value = "";
    note.value = "";
};

//==================
// EVENTHANDLERS
//==================

notebook.addEventListener("submit", onSaveHandler);
notebook.addEventListener("reset", removeNoteHandler);
