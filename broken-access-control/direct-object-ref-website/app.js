const users = {
    0: { id: 0, name: "Admin", email: "admin@example.com" },
    1: { id: 1, name: "Alice", email: "alice@example.com" },
    2: { id: 2, name: "Bob", email: "bob@example.com" },
    3: { id: 3, name: "Charlie", email: "charlie@example.com" }
};

function getUserDetails(userId) {
    // Simulate an API call
    const user = users[userId];
    if (user) {
        document.getElementById('details').innerText = `ID: ${user.id}\nName: ${user.name}\nEmail: ${user.email}`;
        document.getElementById('user-details').style.display = 'block';
    } else {
        alert('User not found');
    }
}
