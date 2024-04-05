import React from "react";
import ReactDOM from "react-dom";
//we can also render jsx elements in array
//React fragment use to avoid double div problems 
//we can also use " <> </> " instead of react.fragment
ReactDOM.render(
<React.Fragment>
    <h1>Muhammad hassan</h1>
    <p>I am 22 years old</p>
    <h2>Habbits</h2>
    <p>Coding,Reading</p>
</React.Fragment>,
    document.getElementById("root"));