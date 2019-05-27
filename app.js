// BUDGET CONTROLLER
var budgetController = (function () {

})();

// UI CONTROLLER
var UIController = (function () {

})();

// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

	var ctrlAddItem = function () {
		// get the filed input data

		// add the item to the budget controller

		// add the item to UI

		//  calculate the budget

		// display the budget on the UI
	}

	document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

	document.addEventListener('keypress', function (e) {
		if (e.keyCode === 13 || e.which === 13) {
			ctrlAddItem();
		}
	});

})(budgetController, UIController);