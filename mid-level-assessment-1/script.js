function changeTextContent(elementId, newText) {
    const element = document.getElementById(elementId);
    element.textContent = newText;
    };
changeTextContent ("heading", "Dear lord help me");
changeTextContent("paragraph", "We did it!");
   
const button = document.getElementById("changeButton");
button.addEventListener("click", () => {
    changeTextContent("heading" , "You didn't have to click the button so hard!");
}
);