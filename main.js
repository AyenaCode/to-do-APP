import { createElement } from "./src/dom";
import "./style.css";

const addList = document.getElementById("form");

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
  countTasks();
});

console.log(tabLists);

//1- Ajout des tâches dans la liste
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

// 2- Marquer une tâche comme terminée
UlList.addEventListener("click", (e) => {
  if (e.target.id === "markList") {
    const taskElement = e.target.closest("li").querySelector("p");

    //barrer la tâche avec une ternaire
    taskElement.style.textDecoration === "line-through"
      ? (taskElement.style.textDecoration = "none")
      : (taskElement.style.textDecoration = "line-through");

    e.target.closest("li").classList.toggle("bg-blue"); // Change la couleur du li (tâche)
  }
});

//3- Supprimer une tâche
UlList.addEventListener("click", (e) => {
  if (e.target.id === "deleteList") {
    e.target.parentElement.parentElement.remove();
  }
  const taskText = e.target
    .closest("li")
    .querySelector("p")
    .textContent.toString()
    .trim();
  const index = tabLists.indexOf(taskText);
  if (index > -1) {
    tabLists.splice(index, 1);
  }
  countTasks();
});

//4 Compter les tâches restantes : Afficher en bas de la liste le nombre de tâches restantes (non terminées).
function countTasks() {
  const countTasks = document.getElementById("countTasks");
  countTasks.textContent = `Vous avez ${tabLists.length} tâches à réaliser`;
}
