// Pakai localStorage
let users = JSON.parse(localStorage.getItem("users")) || [];

// Tampilkan data
function renderTable() {
    const table = document.getElementById("userTable");
    table.innerHTML = "";

    // Buat tabel
    users.forEach((user, index) => {
        const row = `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>
                    <button onclick="editUser(${index})">Edit</button>
                    <button onclick="deleteUser(${index})">Hapus</button>
                </td>
            </tr>
        `;
        table.innerHTML += row;
    });
}

renderTable();

// CREATE
function addUser() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (!name || !email) {
        alert("Nama dan Email wajib diisi!");
        return;
    }

    // Masukan ke array
    users.push({ name, email });

    // Simpan di localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Refresh tabel
    renderTable();

    // Kosongkan input
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
}

// UPDATE
function editUser(index) {
    const newName = prompt("Nama baru:", users[index].name);
    const newEmail = prompt("Email baru:", users[index].email);

    if (newName && newEmail) {
        users[index].name = newName;
        users[index].email = newEmail;

        localStorage.setItem("users", JSON.stringify(users));
        renderTable();
    }
}

// DELETE
function deleteUser(index) {
    if (confirm("Yakin ingin menghapus data?")) {
        users.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(users));
        renderTable();
    }
}
