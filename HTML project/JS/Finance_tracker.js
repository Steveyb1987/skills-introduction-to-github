// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const descriptionInput = document.getElementById("description-input");
    const amountInput = document.getElementById("amount-input");
    const categoryInput = document.getElementById("category-input");
    const addButton = document.getElementById("add-button");
    const clearAllButton = document.getElementById("clear-all-button");
    const transactionList = document.getElementById("transaction-list");
    const totalTransactions = document.getElementById("total-transactions");
    const totalAmount = document.getElementById("total-amount");
    const flashMessage = document.getElementById("flash-message");

    let transactions = [];

    // Function to update the summary
    function updateSummary() {
        totalTransactions.textContent = transactions.length;
        const total = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
        totalAmount.textContent = total.toFixed(2);
    }

    // Function to display flash message
    function showFlashMessage(message, duration = 2000) {
        flashMessage.textContent = message;
        flashMessage.style.display = "block";
        setTimeout(() => {
            flashMessage.style.display = "none";
        }, duration);
    }

    // Function to render the transaction list
    function renderTransactions() {
        transactionList.innerHTML = ""; // Clear the list
        transactions.forEach((transaction, index) => {
            const li = document.createElement("li");
            li.textContent = `${transaction.description} - $${transaction.amount.toFixed(2)} (${transaction.category})`;
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.style.marginLeft = "10px";
            deleteButton.addEventListener("click", () => {
                transactions.splice(index, 1);
                renderTransactions();
                updateSummary();
                showFlashMessage("Transaction deleted successfully!");
            });
            li.appendChild(deleteButton);
            transactionList.appendChild(li);
        });
    }

    // Add transaction event
    addButton.addEventListener("click", () => {
        const description = descriptionInput.value.trim();
        const amount = parseFloat(amountInput.value);
        const category = categoryInput.value;

        if (!description || isNaN(amount) || amount <= 0) {
            showFlashMessage("Please enter valid transaction details!", 3000);
            return;
        }

        transactions.push({ description, amount, category });
        renderTransactions();
        updateSummary();
        showFlashMessage("Transaction added successfully!");

        // Clear inputs
        descriptionInput.value = "";
        amountInput.value = "";
        categoryInput.value = "Coffee";
    });

    // Clear all transactions event
    clearAllButton.addEventListener("click", () => {
        if (confirm("Are you sure you want to clear all transactions?")) {
            transactions = [];
            renderTransactions();
            updateSummary();
            showFlashMessage("All transactions cleared!");
        }
    });

    // Initialize flash message visibility
    flashMessage.style.display = "none";
});