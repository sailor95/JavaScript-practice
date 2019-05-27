// BUDGET CONTROLLER
var budgetController = (function () {

	var Expoense = function (id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	}

	var Income = function (id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	}

	var data = {
		allItems: {
			exp: [],
			inc: []
		},
		totals: {
			exp: 0,
			inc: 0
		}
	}

	return {
		addItem: function (type, des, val) {
			var newItem, ID;

			// Create new ID
			if (data.allItems[type].length > 0) {
				ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
			} else {
				ID = 0;
			}

			if (type === 'exp') {
				newItem = new Expoense(ID, des, val);
			} else if (type === 'inc') {
				newItem = new Income(ID, des, val);
			}

			data.allItems[type].push(newItem);

			return newItem;
		}
	};

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
		addListItem: function (obj, type) {
			var html;
			// create html string with placeholder text
			if (type === 'inc') {
				html = '<div class="item clearfix" id="income-%id%">< div class="item__description" > %description%</div ><div class="right clearfix">< div class="item__value" >%value%</div ><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div ></div >';
			} else if (type === 'exp') {
				html = '<div class="item clearfix" id="income-1"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
			}
			// replace the placeholder text with some actual data
			newHtml = html.replace('%id%', obj.id);
			newHtml = newHtml.replace('%description%', obj.description);
			newHtml = newHtml.replace('%value%', obj.value);

			// insert the html into the dom
		},
		getDOMstrings: function () {
			return DOMstrings;
		}
	};

})();

// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

	var setupEventListeners = function () {
		var DOM = UICtrl.getDOMstrings();

		document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

		document.addEventListener('keypress', function (e) {
			if (e.keyCode === 13 || e.which === 13) {
				ctrlAddItem();
			}
		});
	};

	var ctrlAddItem = function () {
		var input, newItem;
		// get the filed input data
		input = UICtrl.getinput();
		// add the item to the budget controller
		newItem = budgetCtrl.addItem(input.type, input.description, input.value);
		// add the item to UI

		//  calculate the budget

		// display the budget on the UI
	}

	return {
		init: function () {
			console.log("Init~");
			setupEventListeners();
		}
	}

})(budgetController, UIController);

controller.init();