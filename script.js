const addBtn = document.querySelector(".add");
const deleteBtns = document.getElementsByClassName(".delete-note");
const saveBtn = document.querySelector(".save");
const cancelBtn = document.querySelector(".cancel");
const deleteAllBtn = document.querySelector(".delete-all");

const noteArea = document.querySelector(".note-area");
const notePanel = document.querySelector(".note-panel");
const title = document.querySelector("#title");
const textarea = document.querySelector("#text");
const error = document.querySelector(".error");

let selectedValue;

let cardID = 0;

const openPanel = () => {
  notePanel.style.display = "flex";
};

const closePanel = () => {
  notePanel.style.display = "none";
  error.style.visibility = "hidden";
  textarea.value = "";
  title.value = "";
};

const addNote = () => {
  if (textarea.value !== "") {
    error.style.visibility = "hidden";
    createNote();
  } else {
    error.style.visibility = "visible";
  }
};

const createNote = () => {
  const newNote = document.createElement("div");
  newNote.classList.add("note");
  newNote.setAttribute("id", cardID);
  newNote.innerHTML = `<div class="note-header">
    <h3 class="note-title">${titleValue}</h3>
    <button class="delete-note" onclick = "deleteNote(${cardID})">
        <i class="fa-solid fa-xmark"></i>
    </button>
</div>
<div class="note-body">
   ${textarea.value}

</div>`;
  noteArea.appendChild(newNote);
  cardID++;
  textarea.value = "";
  title.value = "";

  notePanel.style.display = "none";
  checkColor(newNote);
};

const inputValue = () => {
  titleValue = title.value;
};

const bgOne = () => {
  colorValue = "one";
};
const bgTwo = () => {
  colorValue = "two";
};
const bgThree = () => {
  colorValue = "three";
};
const bgFour = () => {
  colorValue = "four";
};
const bgFive = () => {
  colorValue = "five";
};

const checkColor = (note) => {
  switch (colorValue) {
    case "one":
      note.style.backgroundColor = "var(--option-one-color)";
      break;
    case "two":
      note.style.backgroundColor = "var(--option-two-color)";
      break;
    case "three":
      note.style.backgroundColor = "var(--option-three-color)";
      break;
    case "four":
      note.style.backgroundColor = "var(--option-four-color)";
      break;
    case "five":
      note.style.backgroundColor = "var(--option-five-color)";
      break;
  }
};

const deleteNote = (id) => {
  const noteToDelete = document.getElementById(id);
  noteArea.removeChild(noteToDelete);
};

const deleteAllNotes = () => {
  noteArea.textContent = "";
};

addBtn.addEventListener("click", openPanel);
cancelBtn.addEventListener("click", closePanel);
saveBtn.addEventListener("click", addNote);
deleteAllBtn.addEventListener("click", deleteAllNotes);
