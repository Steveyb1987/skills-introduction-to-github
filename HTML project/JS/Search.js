document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const resultsBody = document.getElementById("results-body");

    if (!resultsBody) {
        console.error("Error: Results table is missing.");
        return;
    }

    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

    searchButton.addEventListener("click", () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const filteredTransactions = transactions.filter(transaction =>
            transaction.description.toLowerCase().includes(searchTerm)
        );

        resultsBody.innerHTML = filteredTransactions.length
            ? filteredTransactions.map(transaction => `
                <tr>
                    <td>${transaction.username}</td>
                    <td>${transaction.description}</td>
                    <td>${transaction.category}</td>
                    <td>$${transaction.amount.toFixed(2)}</td>
                </tr>
            `).join("")
            : `<tr><td colspan="4">No transactions found.</td></tr>`;
    });
});