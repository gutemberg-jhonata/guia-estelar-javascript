const family = {
    incomes: [1500],
    expenses: [350, 20, 130, 60],
}

function sum(array) {
    return array.reduce((total, value) => {
        return total + value;
    }, 0);
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes);
    const calculateExpenses = sum(family.expenses);
    
    const total = calculateIncomes - calculateExpenses;

    const isPositive = total >= 0;
    let balanceText = "negativo";
    
    if (isPositive) {
        balanceText = "positivo";
    }

    console.log(`Seu saldo é ${balanceText}: R$ ${total.toFixed(2)}`);
}

calculateBalance();