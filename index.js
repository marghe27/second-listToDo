var list = [];
var ID_COUNTER = 0;

var _users = ["Pippo", "Lorenza", "Giuseppe", "Fabio"];


    
exports.getUsers = function(){
	'use strict';
	return _users;
};



// Funzione per aggiungere ToDo agli utenti che esistono nell'array _users
exports.addList = function (paramName, paramDescription, paramComplete, paramAssigned) {
	'use strict';
	
		if (_users.indexOf(paramAssigned) > -1) {

			list.push({
				name: paramName,
				description: paramDescription,
				completed: paramComplete,
				assignedTo: paramAssigned,
				id: ID_COUNTER++
			});

		} else {
			return "L'utente non è presente nella lista";
		}
 
};

exports.getList = function (){
	'use strict';
	return list;
};


	
//Leggere la lista dei toDo in base ad uno specifico utente
exports.searchAssigned = function(user) {
	'use strict';
	var person = [];
	for (var item of list){
		if(item.assignedTo.indexOf(user)>-1){
			person.push(item);
		}
	}
	return person;

};

//Leggere la lista dei Todo in base al fatto che siano completati o meno, indipendentemente dall'utente
exports.readByState = function (state) {
	'use strict';
	var filterByState = [];
	for (var item of list) {
		if (item.completed === state) {
			filterByState.push(item);
		}
	}
	return filterByState;
};



//Cambiare lo stato di completed da false a true e viceversa // da aggiornare
	exports.changeTheState = function (id, completed) {
		'use strict';

		for (var item of list) {
			if (item.id === id) {
				item.completed = completed;

			}
		}
		return true;
	};

// Elimina per id
exports.deleteList = function(id){
	'use strict';
	for (var i=0; i<list.length; i++){
		if(list[i].id === id){
			list.splice(i, 1);	
		}	
	}
	
	return list; 
};


 


exports.resetList = function(){
	'use strict';
	list = [];
	ID_COUNTER = 0;
	return list;
};
