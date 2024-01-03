import React, {useState, useEffect} from 'react'

const App = () => {

    return (
     <div>
        <h1> This is send from the server!! </h1>
     </div>   
    )
};

// create root
const root = createRoot(document.querySelector('#root'));
root.render(<App />);