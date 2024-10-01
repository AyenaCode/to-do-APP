import { createElement } from "./src/dom";
import "./style.css";

const addList = document.getElementById("form");
const markList = document.getElementById("markList");
const deleteList = document.getElementById("deleteList");

const UlList = document.getElementById("list");
const tabLists = [];

addList.addEventListener("submit", (e) => {
  e.preventDefault();
  const forData = new FormData(addList);
  const textareaValue = forData.get("textarea").toString().trim();

  if (textareaValue === "") {
    return;
  }
  tabLists.push(textareaValue);
  addList.reset();
  listItems();
});

console.log(tabLists);

function listItems() {
  UlList.innerHTML = ""; // maj de la liste à 0
  if (tabLists.length > 0) {
    tabLists.forEach((element) => {
      const li = createElement("li", {
        class:
          "flex gap-4 my-2 border border-gray-100 rounded-md justify-between",
      });
      li.innerHTML = `<p class="text-left">
          ${element}
          </p>
          <div class="flex flex-col gap-1">
            <button class="btn rounded-none btn-success w-full" id="markList">
              Terminer
            </button>
            <button class="btn rounded-none btn-primary w-full" id="deleteList">
              Supprimer
            </button>
          </div>`;
      UlList.appendChild(li);
    });
  }
}
