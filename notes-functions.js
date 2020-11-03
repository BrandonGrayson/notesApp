// Read existing notes from local storage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if(notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

const savedNotes = localStorage.setItem('notes', JSON.stringify(notes))

// Generate the DOM structure for a note
const generateNoteDOM = function (note) {
    const noteEl = document.createElement('p')

    if(note.title.length > 0) {
        noteEl.textContent = note.title
    } else {
        noteEl.textContent = 'Unnamed note'
    }
    return noteEl
}

// Render application notes

const renderNotes = function (notes, filters) {
    // limit notes to just the ones that pass the filter
    const filteredNotes = notes.filter(function (note) {
        // figure out if notes title contains search text
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}