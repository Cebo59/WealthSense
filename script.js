document.getElementById('expenseForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get expense details from the form
    var expenseName = document.getElementById('expenseName').value;
    var expenseAmount = document.getElementById('expenseAmount').value;
    var expenseCategory = document.getElementById('expenseCategory').value;

    // Create a new expense item
    var expenseItem = document.createElement('li');
    expenseItem.textContent = `${expenseName} - $${expenseAmount} (${expenseCategory})`;

    // Add the expense item to the list
    var expenseList = document.getElementById('expenseList');
    expenseList.appendChild(expenseItem);

    // Clear the form inputs
    document.getElementById('expenseName').value = '';
    document.getElementById('expenseAmount').value = '';
});

