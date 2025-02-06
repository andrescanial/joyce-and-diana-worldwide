document.addEventListener("DOMContentLoaded", function() {
    const addItemForm = document.getElementById('addItemForm');
    const inventoryTableBody = document.getElementById('inventoryTable').querySelector('tbody');

    // List to store inventory items
    const inventoryItems = [];

    addItemForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const itemName = document.getElementById('itemName').value;
        const itemStock = document.getElementById('itemStock').value;

        // Add item to the inventory
        inventoryItems.push({ name: itemName, stock: parseInt(itemStock) });

        // Update the inventory table
        updateInventoryTable();

        // Clear input fields
        addItemForm.reset();
    });

    function updateInventoryTable() {
        // Clear current table
        inventoryTableBody.innerHTML = '';
        
        // Populate table rows
        inventoryItems.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${item.name}</td><td>${item.stock}</td>`;
            inventoryTableBody.appendChild(row);
        });
    }

    // Sales forecasting simulation
    const forecastForm = document.getElementById('forecastForm');
    const forecastResultsDiv = document.getElementById('forecastResults');

    forecastForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const branch = document.getElementById('branch').value;
        const forecastResult = `Estimated stock needed for ${branch} is XX units.`; // Simulated result

        // Display result
        forecastResultsDiv.innerText = forecastResult;
    });

    // Example chart for graph section
    const ctx = document.getElementById('salesChart').getContext('2d');
    const salesChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Branch 1', 'Branch 2', 'Branch 3'],
            datasets: [{
                label: 'Sales',
                data: [12, 15, 5],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
