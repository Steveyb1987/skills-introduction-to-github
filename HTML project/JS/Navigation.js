document.addEventListener("DOMContentLoaded", () => {
    const navPane = `
        <div class="nav-pane">
            <a href="Homepage.html">Home</a>
            <a href="Finance_tracker.html">Finance Tracker</a>
            <a href="Search.html">Search Transactions</a>
            <a href="SavedTransactions.html">Saved Transactions</a>
            <a href="About.html">About</a>
        </div>
    `;
    document.body.insertAdjacentHTML("afterbegin", navPane);
});