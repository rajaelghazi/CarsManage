const currentYear = new Date().getFullYear();

// Données de revenus et dépenses
function generateDailyData(month, year, days) {
    const data = [];
    for (let i = 1; i <= days; i++) {
        const income = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
        const expense = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
        data.push({ date: `${year}-${month}-${i < 10 ? '0' + i : i}`, income, expense });
    }
    return data;
}

const today = new Date();
const currentDay = today.getDate();

const januaryData = generateDailyData(1, 2025, currentDay);

export const incomeVsExpenseSeries = [
    { name: 'Revenus', data: januaryData.map(d => d.income) },
    { name: 'Dépenses', data: januaryData.map(d => d.expense) },
];

export const incomeVsExpenseChartOptions = {
    chart: { type: 'bar' },
    xaxis: { categories: januaryData.map(d => d.date) },
};
