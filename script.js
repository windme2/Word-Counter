let textArea = document.getElementById("textArea");
let words = document.getElementById("words");
let characters = document.getElementById("characters");

TextArea.addEventListener("input", () => {
    characters.textContent = TextArea.value.length;
    let text = TextArea.value.trim();
    words.textContent = text.split(/\s+/).filter((item) => item).length;
});