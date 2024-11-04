const apiUrl = "http://localhost:3000/data"; // json-server URL

// Fetch and display data
async function fetchData() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  const dataList = document.getElementById("dataList");
  dataList.innerHTML = "";
  data.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} (${item.email}) 
            <button onclick="deleteData(${item.id})">Delete</button>
            <button onclick="editData(${item.id}, '${item.name}', '${item.email}')">Edit</button>`;
    dataList.appendChild(li);
  });
}

// Add new item
document.getElementById("addForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email }),
  });
  document.getElementById("addForm").reset();
  fetchData();
});

// Delete item
async function deleteData(id) {
  await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
  fetchData();
}

// Edit item
function editData(id, currentName, currentEmail) {
  const name = prompt("Edit name:", currentName);
  const email = prompt("Edit email:", currentEmail);
  if (name && email) {
    updateData(id, { name, email });
  }
}

// Update item
async function updateData(id, updatedData) {
  await fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
  fetchData();
}

// Initial data load
fetchData();
