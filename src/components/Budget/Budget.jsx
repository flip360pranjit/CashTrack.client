import React from 'react'
import styles from "./Budget.css";

function Budget() {
    // let ExpenseController = (() => {
    //     let total = 0, savings = 0, expenses = 0, investments = 0;
    
    //     return {
    //         inputEntry(userInput) {
    //             if (userInput['expenseType'] === 'savings') {
    //                 savings += userInput['value'];
    //                 total += userInput['value'];
    //             }
    //             if (userInput['expenseType'] === 'investment') {
    //                 investments += userInput['value'];
    //                 total -= userInput['value'];
    //             }
    //             if (userInput['expenseType'] === 'expense') {
    //                 expenses += userInput['value'];
    //                 total -= userInput['value'];
    //             }
    //         },
    
    //         getSavingsData() {
    //             return savings;
    //         },
    
    //         getExpensesData() {
    //             return expenses;
    //         },
    
    //         getInvestmentData() {
    //             return investments;
    //         },
    
    //         getTotalData() {
    //             return total;
    //         }
    //     }
    
    // })();
    
    // let UIController = (() => {
    //     let expenseType = 'savings';
    
    //     let HTMLStrings = {
    //         inExpenseDescription: '.input-expense-description',
    //         inExpenseValue: '.input-expense-value',
    //         btnSubmitExpense: '.btn-submit-expense',
    //         expenseList: '.expense-list',
    //         currentMonth: '#current-month',
    //         typeExpense: '#type-expense',
    //         typeSavings: '#type-savings',
    //         typeInvestment: '#type-investment',
    //         trackingText: '.tracking-text',
    //         expenseChart: '#expense-chart',
    //         monthBudget: '#month-budget'
    //     };
    
    //     return {
    //         numberFormat(number) {
    //             return Intl.NumberFormat('en-IN').format(number);
    //         },
    //         showCurrentMonth() {
    //             let now, month, year, months;
    
    //             now = new Date();
    //             month = now.getMonth();
    //             year = now.getFullYear();
    //             months = [
    //                 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
    //                 'November', 'December'
    //             ];
    //             document.querySelector(HTMLStrings.currentMonth)?.textContent = months[month] + " " + year;
    //         },
    
    //         getHTMLStrings() {
    //             return HTMLStrings;
    //         },
    
    //         setExpenseType(type) {
    //             console.log('here', type);
    //             this.expenseType = type;
    //             let emoji ="💰";
    //             if (type === 'savings') {
    //                 emoji ="💰";
    //                 if (document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-warning')) {
    //                     document.querySelector(HTMLStrings.btnSubmitExpense).classList.remove('btn-warning');
    //                 }
    //                 if (document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-danger')) {
    //                     document.querySelector(HTMLStrings.btnSubmitExpense).classList.remove('btn-danger');
    //                 }
    //                 if (!document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-success')) {
    //                     document.querySelector(HTMLStrings.btnSubmitExpense).classList.add('btn-success');
    //                 }
    //             }
    
    //             if (type === 'expense') {
    //                 emoji = "🧾";
    //                 if (document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-warning')) {
    //                     document.querySelector(HTMLStrings.btnSubmitExpense).classList.remove('btn-warning');
    //                 }
    //                 if (document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-success')) {
    //                     document.querySelector(HTMLStrings.btnSubmitExpense).classList.remove('btn-success');
    //                 }
    //                 if (!document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-danger')) {
    //                     document.querySelector(HTMLStrings.btnSubmitExpense).classList.add('btn-danger');
    //                 }
    //             }
    //             if (type === 'investment') {
    //                 emoji = "🏠";
    //                 if (document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-danger')) {
    //                     document.querySelector(HTMLStrings.btnSubmitExpense).classList.remove('btn-danger');
    //                 }
    //                 if (document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-success')) {
    //                     document.querySelector(HTMLStrings.btnSubmitExpense).classList.remove('btn-success');
    //                 }
    //                 if (!document.querySelector(HTMLStrings.btnSubmitExpense).classList.contains('btn-warning')) {
    //                     document.querySelector(HTMLStrings.btnSubmitExpense).classList.add('btn-warning');
    //                 }
    //             }
    
    //             document.querySelector(HTMLStrings.trackingText)?.textContent = "Tracking " + type + " " + emoji;
    
    //         },
    
    //         getUserExpenseInput() {
    //             return {
    //                 description: document.querySelector(HTMLStrings.inExpenseDescription).value,
    //                 value: parseInt(document.querySelector(HTMLStrings.inExpenseValue).value),
    //                 date: new Date().toLocaleDateString(),
    //                 expenseType: this.expenseType ? this.expenseType : 'savings'
    //             }
    //         },
    
    //         addListItem (inputObj) {
    //             let html, element;
    //             element = HTMLStrings.expenseList;
    
    //             if (inputObj['expenseType'] === 'savings') {
    //                 html = '<div class="bottom-border"> <div class="row expense-row"><div class="col-2 expense-date fs-15">' + inputObj['date'] + ' </div><div class="col-8 expense-text fs-15"> ' + inputObj['description'] + ' </div><div class="col-2 expense-value expense-saving fs-15"> ₹ ' + this.numberFormat(inputObj['value']) + ' </div></div>'
    //             } else if (inputObj['expenseType'] === 'expense') {
    //                 html = '<div class="bottom-border"> <div class="row expense-row"><div class="col-2 expense-date fs-15">' + inputObj['date'] + ' </div><div class="col-8 expense-text fs-15"> ' + inputObj['description'] + ' </div><div class="col-2 expense-value expense-cost fs-15"> ₹ ' + this.numberFormat(inputObj['value']) + ' </div></div>'
    //             } else if (inputObj['expenseType'] === 'investment') {
    //                 html = '<div class="bottom-border"> <div class="row expense-row"><div class="col-2 expense-date fs-15">' + inputObj['date'] + ' </div><div class="col-8 expense-text fs-15"> ' + inputObj['description'] + ' </div><div class="col-2 expense-value expense-investment fs-15"> ₹ ' + this.numberFormat(inputObj['value']) + ' </div></div>'
    //             }
    
    //             // Add the new element
    //             document.querySelector(element).insertAdjacentHTML('beforeend', html);
    
    //             // Clear the input fields after adding element
    //             document.querySelector(HTMLStrings.inExpenseValue).value = "";
    //             document.querySelector(HTMLStrings.inExpenseDescription).value = "";
    //         },
    
    //         updateOverallTotal(totalValue) {
    //             document.querySelector(HTMLStrings.monthBudget)?.textContent  = "₹ " + this.numberFormat(totalValue);
    
    //             if (totalValue > 0) {
    //                 if (document.querySelector(HTMLStrings.monthBudget).classList.contains('expense-cost')) {
    //                     document.querySelector(HTMLStrings.monthBudget).classList.remove('expense-cost');
    //                 }
    //                 document.querySelector(HTMLStrings.monthBudget).classList.add('expense-saving');
    //             } else {
    //                 if (document.querySelector(HTMLStrings.monthBudget).classList.contains('expense-saving')) {
    //                     document.querySelector(HTMLStrings.monthBudget).classList.remove('expense-saving');
    //                 }
    //                 document.querySelector(HTMLStrings.monthBudget).classList.add('expense-cost');
    //             }
    //         },
    
    //         displayChart(savings = 0, expenses = 0, investments = 0) {
    //             let ctx = document.querySelector(HTMLStrings.expenseChart);
    //             let expenseChart = new Chart(ctx, {
    //                 type: 'doughnut',
    //                 data: {
    //                     labels: ['Savings', 'Expenses', 'Investments'],
    //                     datasets: [{
    //                         data: [savings, expenses, investments],
    //                         backgroundColor: [
    //                             'rgba(32, 137, 56, 1)',
    //                             'rgba(255, 84, 98, 1)',
    //                             'rgba(255, 206, 86, 1)'
    //                         ],
    //                         borderWidth: 0.5
    //                     }]
    //                 },
    //                 options: {
    //                     legend: {
    //                         labels: {
    //                             fontColor: 'white'
    //                         }
    //                     }
    //                 }
    //             });
    //         }
    //     }
    // })();
    
    // ((UIController, ExpenseController) => {
    
    //     let HTMLStrings = UIController?.getHTMLStrings();
    //     let setupEventListeners = () => {
    //         document.querySelector(HTMLStrings.btnSubmitExpense)?.addEventListener('click', addExpense);
    //         document.querySelector(HTMLStrings.typeExpense)?.addEventListener('click', () => {
    //             setExpenseType('expense')
    //         });
    //         document.querySelector(HTMLStrings.typeInvestment)?.addEventListener('click', () => {
    //             setExpenseType('investment')
    //         });
    //         document.querySelector(HTMLStrings.typeSavings)?.addEventListener('click', () => {
    //             setExpenseType('savings')
    //         });
    //     };
    
    //     let setExpenseType = (type) => {
    //         UIController.setExpenseType(type);
    //     }
    
    //     let addExpense = () => {
    //         let input = UIController.getUserExpenseInput();
    //         console.log(input);
    
    //         if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
    //             console.log('Adding item');
    //             UIController.addListItem(input);
    //             ExpenseController.inputEntry(input);
    //             UIController.updateOverallTotal(ExpenseController.getTotalData());
    //             UIController.displayChart(ExpenseController.getSavingsData(), ExpenseController.getExpensesData(),
    //                 ExpenseController.getInvestmentData());
    //         }
    //     }
    
    //     let init = () => {
    //         console.log('Initializing...');
    //         setupEventListeners();
    //         UIController.showCurrentMonth();
    //     }
    
    //     init();
    
    // })(UIController, ExpenseController);
  return (
    <div class="budget-div">
        <div class="row">
    <div class="col-4 left-container">
        <div class="month-container">
            <div class="header fs-white">Your Budget</div>
            <div id="current-month" class="sub-text fs-white"></div>
            <div class="budget-container p-2 mt-4">
                <span id="month-budget" class="month-amount">₹ 0</span>
            </div>
        </div>

        <div class="chart-container">
            <canvas id="expense-chart"></canvas>
        </div>
    </div>
    <div class="col-8 right-container">
        <div class="calc-container">
            <div class="header fs-dark-grey">Track Your Budget</div>
            <div class="dropdown open">
                <button class="btn btn-info dropdown-toggle"
                        type="button" id="dropdownMenu3" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                    Expense Type
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" id="type-savings">Savings</a>
                    <a class="dropdown-item" id="type-expense">Expense</a>
                    <a class="dropdown-item" id="type-investment">Investment</a>
                </div>
            </div>
            <div class="mt-3 tracking-text text-capitalize sub-text bottom-border">Tracking Savings 💰</div>

            <div class="row mt-4">
                <div class="col-7">
                    <input class="form-control input-expense-description" type="text" placeholder="Description" />
                </div>
                <div class="col-4">
                    <input class="form-control input-expense-value" type="number" placeholder="Value" />
                </div>
                <div class="col-1">
                    <button type="button" class="btn btn-success btn-submit-expense">&check;</button>
                </div>
            </div>
            <div class="expense-list mt-4">

            </div>

        </div>
    </div>
</div>

<script src="app.js"></script>
    </div>
  )
}

export default Budget