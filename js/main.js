var name = prompt("Как тебя зовут", '')
var age = prompt("Сколько тебе лет?", '');
var smoking = confirm("Ты куришь?");


if(age < 18 && smoking != true){
	alert(name + ", так держать!!!");
}else if(age < 18 && smoking) {
	alert(name + ", маме расскажу!!!");
}else if(age >= 18 && smoking != true) {
	alert(name + ", молодец, и не надо!!! ")
}else {
	alert(name + ", ну и зря!!!")
}

