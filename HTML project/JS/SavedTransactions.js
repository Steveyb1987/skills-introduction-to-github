document.addEventListener("DOMContentLoaded", () => {
    const loginContainer = document.getElementById("login-container");
    const transactionsContainer = document.getElementById("transactions-container");
    const loginButton = document.getElementById("login-button");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const savedTransactionsTable = document.getElementById("saved-transactions");

    const users = [
        { username: "user1", password: "password1" },
        { username: "admin", password: "admin123" }
    ];

    const transactions = [
        { username: "user1", description: "Coffee", amount: 5.0 },
        { username: "admin", description: "Office Supplies", amount: 45.0 }
    ];

    loginButton.addEventListener("click", () => {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            alert("Login successful!");
            loginContainer.style.display = "none";
            transactionsContainer.style.display = "block";

            const userTransactions = transactions.filter(t => t.username === username);
            savedTransactionsTable.innerHTML = userTransactions.length
                ? userTransactions.map(t => `
                    <tr>
                        <td>${t.description}</td>
                        <td>$${t.amount.toFixed(2)}</td>
                    </tr>
                `).join("")
                : `<tr><td colspan="2">No transactions found.</td></tr>`;
        } else {
            alert("Invalid username or password.");
        }
    });
});