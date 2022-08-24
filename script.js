const form = document.querySelector("#form");
const ul = document.querySelector("#mylist");
const input = document.querySelector("#input");

form.addEventListener("click", (e) => {
  e.preventDefault();
  if (!e.target.matches("#button")) return;

  // create item
  const item = document.createElement("li");
  const dBtn = document.createElement("button");

  dBtn.innerText = "x";
  item.innerText = input.value;

  item.classList.add("item-list");
  dBtn.classList.add("dBtn");

  ul.appendChild(item);
  item.append(dBtn);

  // clears the input field
  input.value = "";

  // delete the item when clicked the delete Button
  dBtn.addEventListener("click", () => {
    ul.removeChild(item);
    save();
  });

  function save(todo) {
    const saveItem = JSON.parse(input.value);
    localStorage.setItem("todo", saveItem);
    console.log(localStorage.getItem("todo"));
  }
});
