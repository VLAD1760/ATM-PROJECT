/*---------------------BANK ACCOUNT INFO-----------------------*/

const accounts = [
    { id: 'Vlad', pin: '1234', balance: 500 },
    { id: 'Odin', pin: '5678', balance: 800 },
    { id: 'Mintzi', pin: '9876', balance: 700 },
];

/*---------------------AUTHENTICATION-----------------------*/

function authenticate() {
    const accountSelect = document.getElementById('account');
    const passwordInput = document.getElementById('password');
    const output = document.getElementById('output');

    const selectedAccountId = accountSelect.value;
    const selectedAccount = accounts.find(account => account.id === selectedAccountId);

    if (!selectedAccount) {
        output.textContent = 'Please select a valid account.';
        return;
    }

    const enteredPin = passwordInput.value;

    if (enteredPin === selectedAccount.pin) {
        output.textContent = `Welcome, ${selectedAccountId}!`;
        showOperationsContainer();
        showSignOutButton();
    } else {
        output.textContent = 'Authentication Failed! Please try again!';
    }

    passwordInput.value = '';
}

/*--------------------OPERATIONS CONTAINER------------------------*/

function showOperationsContainer() {
    const loginContainer = document.getElementById('login-container');
    const operationsContainer = document.getElementById('operations-container');

    loginContainer.style.display = 'none';
    operationsContainer.style.display = 'block';
}

/*--------------------Signout Functions------------------------*/

function showSignOutButton() {
    const operationsContainer = document.getElementById('operations-container');
    const existingSignOutButton = document.getElementById('signOutButton');

    if (existingSignOutButton) {
        return;
    }

    const signOutButton = document.createElement('button');
    signOutButton.id = 'signOutButton';
    signOutButton.textContent = 'Sign Out';
    signOutButton.onclick = signOut;

    operationsContainer.appendChild(signOutButton);
}

function signOut() {
    const loginContainer = document.getElementById('login-container');
    const operationsContainer = document.getElementById('operations-container');
    const output = document.getElementById('output');

    loginContainer.style.display = 'block';
    operationsContainer.style.display = 'none';
    output.textContent = '';
}

/*--------------------Check Balance------------------------*/

function checkBalance() {
    const accountSelect = document.getElementById('account');
    const selectedAccountId = accountSelect.value;
    const selectedAccount = accounts.find(account => account.id === selectedAccountId);
    const output = document.getElementById('output');

    output.textContent = `Account Balance: $${selectedAccount.balance}`;
}

/*--------------------Amount of $$$ Entered------------------------*/

function enterAmount() {
    const amount = parseFloat(prompt('Enter the amount'));
    if (isNaN(amount)) {
        alert('invalid amount. Please try again');
        return;
    }

    const accountSelect = document.getElementById('account');
    const selectedAccountId = accountSelect.value;
    const selectedAccount = accounts.find(account => account.id === selectedAccountId);
    const newBalance = selectedAccount.balance + amount;

    if (newBalance > 990 || newBalance < 10) {
        alert('The amount entered will violate the business rule. Please try again.');
        return;
    }

    selectedAccount.balance = newBalance;
    const output = document.getElementById('output');
    output.textContent = `amount entered: $${amount}\nNew Balance: $${newBalance}`;
}

/*--------------------Withdraw Amount Function------------------------*/

function withdrawAmount() {
    const amount = parseFloat(prompt('Enter the amount to withdraw:'));
    if (isNaN(amount)) {
        alert('invalid amount. Please try again');
        return;
    }

    const accountSelect = document.getElementById('account');
    const selectedAccountId = accountSelect.value;
    const selectedAccount = accounts.find(account => account.id === selectedAccountId);
    const newBalance = selectedAccount.balance - amount;

    if (newBalance > 990 || newBalance < 10) {
        alert('The amount entered will violate the business rule. Please try again.');
        return;
    }

    if (newBalance < 0) {
        alert('Insufficient funds. Please try again');
        return;
    }

    selectedAccount.balance = newBalance;
    const output = document.getElementById('output');
    output.textContent = `amount withdrawn: $${amount}\nNew Balance: $${newBalance}`;
}