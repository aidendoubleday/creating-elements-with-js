console.log("Script started");

function start() {
    console.log("click");

    // Create an h1 heading
    let heading = document.createElement("h1");

    //Setup text and styles
    heading.innerText = "Attedance";
    heading.style.color = "green";
    heading.style.textDecoration = "underline";

    // Add the h1 to the page
    document.body.appendChild(heading);

    let userName = prompt("Enter your name");
    console.log(userName)
    addName(userName,lastname);

   let userLastname = prompt("Enter your last name");
}


function addName(newName,lastname){
    let heading2 = document.createElement("h2");

    heading2.innerText = newName;
    heading2.style.color = "blue";
    heading2.style.textDecoration = "underline";

    document.body.appendChild(heading2);
}