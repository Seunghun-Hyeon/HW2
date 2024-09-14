let itemListArray = [];

// Function to update the displayed list
function updateItemList() {
  let itemList = document.getElementById("itemList");
  itemList.innerHTML = ""; // Clear current list

  itemListArray.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item;
    itemList.appendChild(li);
  });
}

// Add button functionality
document.getElementById("addButton").addEventListener("click", function () {
  let inputText = document.getElementById("itemInput").value;
  let items = inputText.split(",").map((item) => item.trim());

  // Add new items to the itemListArray
  itemListArray = [...itemListArray, ...items];

  // Clear the input field
  document.getElementById("itemInput").value = "";

  // Update the list display
  updateItemList();
});

// Delete button functionality (delete last item)
document.getElementById("deleteButton").addEventListener("click", function () {
  if (itemListArray.length > 0) {
    // Remove the last item from the array
    itemListArray.pop();
  }

  // Update the list display
  updateItemList();
});
