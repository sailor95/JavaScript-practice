// BUDGET CONTROLLER
var budgetController = (function () {

})();

// UI CONTROLLER
var UIController = (function () {

	var DOMstrings = {
		inputType: '.add__type',  // +/-
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputBtn: '.add__btn',
	}

	return {
		getinput: function () {
			return {
				type: document.querySelector(DOMstrings.inputType).value,
				description: document.querySelector(DOMstrings.inputDescription).value,
				value: document.querySelector(DOMstrings.inputValue).value
			};
		},
		getDOMstrings: function () {
			return DOMstrings;
		}
	};

})();

// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

	var DOM = UICtrl.getDOMstrings();

	var ctrlAddItem = function () {
		// get the filed input data
		var input = UICtrl.getinput();
		// add the item to the budget controller

		// add the item to UI

		//  calculate the budget

		// display the budget on the UI
	}

	document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

	document.addEventListener('keypress', function (e) {

		if (e.keyCode === 13 || e.which === 13) {
			ctrlAddItem();
		}

	});

})(budgetController, UIController);