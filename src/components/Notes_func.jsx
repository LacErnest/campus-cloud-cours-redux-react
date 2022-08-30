import React from 'react'
import AllNotes_func from './AllNotes_func'
import NotesForm_func from './NotesForm_func'

export default function Notes_func() {
  return (
    <React.Fragment>
      <h1>Notes App</h1>

      <NotesForm_func />
      <hr />
      <AllNotes_func />
    </React.Fragment>
  )
}