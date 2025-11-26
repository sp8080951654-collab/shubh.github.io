// Initialize balance
let balance = 0;

// Function to complete offers
function completeOffer(offerType) {
    let amount = 0;
    let message = '';
    
    switch(offerType) {
        case 'youtube':
            amount = 5;
            message = 'YouTube offer completed! ₹5 added to your balance.';
            break;
        case 'survey':
            amount = 10;
            message = 'Survey completed! ₹10 added to your balance.';
            break;
        case 'app':
            amount = 15;
            message = 'App installed! ₹15 added to your balance.';
            break;
        case 'shopping':
            amount = 20;
            message = 'Shopping completed! ₹20 added to your balance.';
            break;
        default:
            amount = 0;
            message = 'Offer completed!';
    }
    
    // Update balance
    balance += amount;
    updateBalanceDisplay();
    
    // Show success message
    alert(message);
    
    // Save to local storage
    saveBalance();
}

// Function to update balance display
function updateBalanceDisplay() {
    document.getElementById('balance').textContent = balance;
}

// Function to save balance to local storage
function saveBalance() {
    localStorage.setItem('userBalance', balance);
}

// Function to load balance from local storage
function loadBalance() {
    const savedBalance = localStorage.getItem('userBalance');
    if (savedBalance) {
        balance = parseInt(savedBalance);
        updateBalanceDisplay();
    }
}

// Function to handle money withdrawal
function withdrawMoney() {
    const minWithdrawal = 100;
    
    if (balance < minWithdrawal) {
        alert(`Minimum withdrawal amount is ₹${minWithdrawal}. Your current balance is ₹${balance}.`);
    } else {
        alert(`Withdrawal request of ₹${balance} received! Your money will be processed within 24 hours.`);
        // Reset balance after withdrawal
        balance = 0;
        updateBalanceDisplay();
        saveBalance();
    }
}

// Load balance when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadBalance();
});
