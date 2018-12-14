var assert = require('assert');
var listToDo = require('./index');

describe('Tests del file index.js di List To Do', function(){
	'use strict';
	it('Primo test : funzione getUsers()', function(){
		assert.equal(listToDo.getUsers().length, 4);
	});
	
	it('Secondo test : funzione getList()', function(){
		assert.equal(listToDo.getList().length, 0);
	});
	
	
	// Aggiornato per modifica del file index - function addList(param1, param2, param3, param4)
	it('Terzo test : funzione addList()', function(){
		//listToDo.addList("Primo" , "Fare la spesa", false, listToDo.getUsers()[0]);
//		listToDo.addList("Secondo" , "Completare progetto per cliente", true, listToDo.getUsers()[1]);
		listToDo.addList("Primo" , "Fare la spesa", false, "Pippo");
		listToDo.addList("Secondo" , "Completare progetto per cliente", true, "Giuseppe");
		assert.equal(listToDo.getList().length, 2);
		assert.equal(listToDo.getList()[1].id, 1);
		listToDo.addList("Terzo" , "Fare lezione matematica", true, "Lorenza");
		listToDo.addList("Quarto" , "Comprare regali di Natale", false, "Pluto");
		assert.equal(listToDo.getList().length, 3);
		//assert.equal(listToDo.getList()[3], );
	});
	
	
	it('Quarto test : funzione delete By Id', function(){
		listToDo.deleteList(2);
		assert.equal(listToDo.getList().length, 2);
		
	});
	
	it('Quinto test : funzione search User Assigned to', function(){
		listToDo.resetList();
		listToDo.addList("Primo" , "Fare la spesa", false, listToDo.getUsers()[0]);
		listToDo.addList("Secondo" , "Completare progetto per cliente", true, listToDo.getUsers()[1]);
		listToDo.addList("Terzo" , "Fare lezione matematica", true, listToDo.getUsers()[2]);
		listToDo.addList("Quarto" , "Comprare regali di Natale", false, listToDo.getUsers()[3]);																			
	 	assert.equal(listToDo.getList()[1].assignedTo, listToDo.getUsers()[1]);
		var user = listToDo.getUsers()[1];
		assert(typeof(listToDo.searchAssigned(user)) === 'object');
	});
	
	it('Sesto test : funzione change The State', function(){
		
		assert.equal(listToDo.changeTheState(0,listToDo.getUsers()[0].completed), true);
		
	});
	
	it('Settimo test : funzione read By State', function(){
		
		assert(typeof(listToDo.readByState(listToDo.getUsers().completed)) === 'object');
					 
		
	});
	
});


