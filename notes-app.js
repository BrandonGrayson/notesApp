const notes = [{
    title: 'JavaScript',
    body: 'Complete Andrew Meads Web developer Bootcamp'
}, {
    title: 'Health and Fitness',
    body: 'Exercise'
}, {
    title: 'business',
    body: 'Think of a Business Name'
},]

const filters = {
    searchText: ''
}
// create a function that filters the notes and then renders it 
const renderNotes = function (notes, filters) {
    // limit notes to just the ones that pass the filter
    const filteredNotes = notes.filter(function (note) {
        // figure out if notes title contains search text
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('button').addEventListener('click', function (e) {
    e.target.textContent = 'The button was clicked'    
})



document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

