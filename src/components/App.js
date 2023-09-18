import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./createArea"




function App() {
  return (
    <div>
      <Header />
      {Note.map(notes => 
 
    <Note
    key={notes.Key}
    title={notes.title}
    content={notes.content}
    />
    )}
      <Footer />
    </div>
  );
}

export default App;
