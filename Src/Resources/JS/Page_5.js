function fillExisting(){
	
	//Fill With Goal Bank Values
	populateLongTerm();
	
	//Create References to Long Term Goal DOM Elements
	var long_term_1 = document.getElementById('goal1');
	var long_term_2 = document.getElementById('goal2');
	var long_term_3 = document.getElementById('goal3');
	var long_term_4 = document.getElementById('goal4');
	
	//Update Long Term Goal 1
	for(i = 0; i < long_term.length; i++){
		if((sessionStorage.getItem("Long Term Goal 1") != null) && (sessionStorage.getItem("Long Term Goal 1") == long_term[i])){
			long_term_1.selectedIndex = (i+1);
			updateShortTerm1();
		}
	}
	
	//Update Long Term Goal 2
	for(i = 0; i < long_term.length; i++){
		if((sessionStorage.getItem("Long Term Goal 2") != null) && (sessionStorage.getItem("Long Term Goal 2") == long_term[i])){
			long_term_2.selectedIndex = (i+1);
			updateShortTerm2();
		}
	}
	
	//Update Long Term Goal 3
	for(i = 0; i < long_term.length; i++){
		if((sessionStorage.getItem("Long Term Goal 3") != null) && (sessionStorage.getItem("Long Term Goal 3") == long_term[i])){
			long_term_3.selectedIndex = (i+1);
			updateShortTerm3();
		}
	}
	
	//Update Long Term Goal 4
	for(i = 0; i < long_term.length; i++){
		if((sessionStorage.getItem("Long Term Goal 4") != null) && (sessionStorage.getItem("Long Term Goal 4") == long_term[i])){
			long_term_4.selectedIndex = (i+1);
			updateShortTerm4();
		}
	}
	
	//Create References to Short Term Goal DOM Elements
	var short_term_1_1 = document.getElementById('shortTermObjective1_1');
	var short_term_1_2 = document.getElementById('shortTermObjective1_2');
	var short_term_1_3 = document.getElementById('shortTermObjective1_3');
	
	var short_term_2_1 = document.getElementById('shortTermObjective2_1');
	var short_term_2_2 = document.getElementById('shortTermObjective2_2');
	var short_term_2_3 = document.getElementById('shortTermObjective2_3');
	
	var short_term_3_1 = document.getElementById('shortTermObjective3_1');
	var short_term_3_2 = document.getElementById('shortTermObjective3_2');
	var short_term_3_3 = document.getElementById('shortTermObjective3_3');
	
	var short_term_4_1 = document.getElementById('shortTermObjective4_1');
	var short_term_4_2 = document.getElementById('shortTermObjective4_2');
	var short_term_4_3 = document.getElementById('shortTermObjective4_3');
	
	//Update Short Term Goals 1
	for(i = 0; i < short_term_1_1.options.length; i++){
		if((sessionStorage.getItem("Short Term Objective Goal 1.1") != null) && (sessionStorage.getItem("Short Term Objective Goal 1.1") == short_term_1_1.options[i].text)){
			short_term_1_1.selectedIndex = i;
		}
	}

	for(i = 0; i < short_term_1_2.options.length; i++){
		if((sessionStorage.getItem("Short Term Objective Goal 1.2") != null) && (sessionStorage.getItem("Short Term Objective Goal 1.2") == short_term_1_2.options[i].text)){
			short_term_1_2.selectedIndex = i;
		}
	}
	
	for(i = 0; i < short_term_1_3.options.length; i++){
		if((sessionStorage.getItem("Short Term Objective Goal 1.3") != null) && (sessionStorage.getItem("Short Term Objective Goal 1.3") == short_term_1_3.options[i].text)){
			short_term_1_3.selectedIndex = i;
		}
	}
	
	//Update Short Term Goals 2
	for(i = 0; i < short_term_2_1.options.length; i++){
		if((sessionStorage.getItem("Short Term Objective Goal 2.1") != null) && (sessionStorage.getItem("Short Term Objective Goal 2.1") == short_term_2_1.options[i].text)){
			short_term_2_1.selectedIndex = i;
		}
	}

	for(i = 0; i < short_term_2_2.options.length; i++){
		if((sessionStorage.getItem("Short Term Objective Goal 2.2") != null) && (sessionStorage.getItem("Short Term Objective Goal 2.2") == short_term_2_2.options[i].text)){
			short_term_2_2.selectedIndex = i;
		}
	}
	
	for(i = 0; i < short_term_2_3.options.length; i++){
		if((sessionStorage.getItem("Short Term Objective Goal 2.3") != null) && (sessionStorage.getItem("Short Term Objective Goal 2.3") == short_term_2_3.options[i].text)){
			short_term_2_3.selectedIndex = i;
		}
	}
	
	//Update Short Term Goals 3
	for(i = 0; i < short_term_3_1.options.length; i++){
		if((sessionStorage.getItem("Short Term Objective Goal 3.1") != null) && (sessionStorage.getItem("Short Term Objective Goal 3.1") == short_term_3_1.options[i].text)){
			short_term_3_1.selectedIndex = i;
		}
	}

	for(i = 0; i < short_term_3_2.options.length; i++){
		if((sessionStorage.getItem("Short Term Objective Goal 3.2") != null) && (sessionStorage.getItem("Short Term Objective Goal 3.2") == short_term_3_2.options[i].text)){
			short_term_3_2.selectedIndex = i;
		}
	}
	
	for(i = 0; i < short_term_3_3.options.length; i++){
		if((sessionStorage.getItem("Short Term Objective Goal 3.3") != null) && (sessionStorage.getItem("Short Term Objective Goal 3.3") == short_term_3_3.options[i].text)){
			short_term_3_3.selectedIndex = i;
		}
	}
	
	//Update Short Term Goals 4
	for(i = 0; i < short_term_4_1.options.length; i++){
		if((sessionStorage.getItem("Short Term Objective Goal 4.1") != null) && (sessionStorage.getItem("Short Term Objective Goal 4.1") == short_term_4_1.options[i].text)){
			short_term_4_1.selectedIndex = i;
		}
	}

	for(i = 0; i < short_term_4_2.options.length; i++){
		if((sessionStorage.getItem("Short Term Objective Goal 4.2") != null) && (sessionStorage.getItem("Short Term Objective Goal 4.2") == short_term_4_2.options[i].text)){
			short_term_4_2.selectedIndex = i;
		}
	}
	
	for(i = 0; i < short_term_4_3.options.length; i++){
		if((sessionStorage.getItem("Short Term Objective Goal 4.3") != null) && (sessionStorage.getItem("Short Term Objective Goal 4.3") == short_term_4_3.options[i].text)){
			short_term_4_3.selectedIndex = i;
		}
	}
	
	//If Form Variables still Exist, fill the HTML Elements with the Stored Values
	document.getElementById("goalBaseline1").value = sessionStorage.getItem("Baseline Goal 1");	
	document.getElementById("objectiveReview1").value = sessionStorage.getItem("Objective Review Goal 1");
	if(sessionStorage.getItem("Accommodations and Strategies Goal 1") != null){document.getElementById("goalStrategy1").value = sessionStorage.getItem("Accommodations and Strategies Goal 1");}
	
	document.getElementById("goalBaseline2").value = sessionStorage.getItem("Baseline Goal 2");
	document.getElementById("objectiveReview2").value = sessionStorage.getItem("Objective Review Goal 2");
	if(sessionStorage.getItem("Accommodations and Strategies Goal 2") != null){document.getElementById("goalStrategy2").value = sessionStorage.getItem("Accommodations and Strategies Goal 2");}
	
	document.getElementById("goalBaseline3").value = sessionStorage.getItem("Baseline Goal 3");
	document.getElementById("objectiveReview3").value = sessionStorage.getItem("Objective Review Goal 3");
	if(sessionStorage.getItem("Accommodations and Strategies Goal 3") != null){document.getElementById("goalStrategy3").value = sessionStorage.getItem("Accommodations and Strategies Goal 3");}
	
	document.getElementById("goalBaseline4").value = sessionStorage.getItem("Baseline Goal 4");
	document.getElementById("objectiveReview4").value = sessionStorage.getItem("Objective Review Goal 4");
	if(sessionStorage.getItem("Accommodations and Strategies Goal 4") != null){document.getElementById("goalStrategy4").value = sessionStorage.getItem("Accommodations and Strategies Goal 4");}
	
	document.getElementById("EnviromentAccommodations").value = sessionStorage.getItem("Early Learning Accommodations");
}

function next(){
	
	//Remove any existing items and add as new key
	sessionStorage.removeItem("Long Term Goal 1");
	var goalOption1 = document.getElementById("goal1");
	sessionStorage.setItem("Long Term Goal 1", goalOption1.options[goalOption1.selectedIndex].text);
	
	sessionStorage.removeItem("Baseline Goal 1");
	sessionStorage.setItem("Baseline Goal 1", document.getElementById("goalBaseline1").value);
	
	if(sessionStorage.getItem("Long Term Goal 1") != "None"){
		sessionStorage.removeItem("Short Term Objective Goal 1.1");
		var goalObjective1_1 = document.getElementById("shortTermObjective1_1");
		sessionStorage.setItem("Short Term Objective Goal 1.1", goalObjective1_1.options[goalObjective1_1.selectedIndex].text);
	
		sessionStorage.removeItem("Short Term Objective Goal 1.2");
		var goalObjective1_2 = document.getElementById("shortTermObjective1_2");
		sessionStorage.setItem("Short Term Objective Goal 1.2", goalObjective1_2.options[goalObjective1_2.selectedIndex].text);
	
		sessionStorage.removeItem("Short Term Objective Goal 1.3");
		var goalObjective1_3 = document.getElementById("shortTermObjective1_3");
		sessionStorage.setItem("Short Term Objective Goal 1.3", goalObjective1_3.options[goalObjective1_3.selectedIndex].text);
	}
	
	sessionStorage.removeItem("Objective Review Goal 1");
	sessionStorage.setItem("Objective Review Goal 1", document.getElementById("objectiveReview1").value);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 1");
	sessionStorage.setItem("Accommodations and Strategies Goal 1", document.getElementById("goalStrategy1").value);


	sessionStorage.removeItem("Long Term Goal 2");
	var goalOption2 = document.getElementById("goal2");
	sessionStorage.setItem("Long Term Goal 2", goalOption2.options[goalOption2.selectedIndex].text);
	
	sessionStorage.removeItem("Baseline Goal 2");
	sessionStorage.setItem("Baseline Goal 2", document.getElementById("goalBaseline2").value);
	
	if(sessionStorage.getItem("Long Term Goal 2") != "None"){
		sessionStorage.removeItem("Short Term Objective Goal 2.1");
		var goalObjective2_1 = document.getElementById("shortTermObjective2_1");
		sessionStorage.setItem("Short Term Objective Goal 2.1", goalObjective2_1.options[goalObjective2_1.selectedIndex].text);
	
		sessionStorage.removeItem("Short Term Objective Goal 2.2");
		var goalObjective2_2 = document.getElementById("shortTermObjective2_2");
		sessionStorage.setItem("Short Term Objective Goal 2.2", goalObjective2_2.options[goalObjective2_2.selectedIndex].text);
	
		sessionStorage.removeItem("Short Term Objective Goal 2.3");
		var goalObjective2_3 = document.getElementById("shortTermObjective2_3");
		sessionStorage.setItem("Short Term Objective Goal 2.3", goalObjective2_3.options[goalObjective2_3.selectedIndex].text);
	}
	
	sessionStorage.removeItem("Objective Review Goal 2");
	sessionStorage.setItem("Objective Review Goal 2", document.getElementById("objectiveReview2").value);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 2");
	sessionStorage.setItem("Accommodations and Strategies Goal 2", document.getElementById("goalStrategy2").value);
	
	
	sessionStorage.removeItem("Long Term Goal 3");
	var goalOption3 = document.getElementById("goal3");
	sessionStorage.setItem("Long Term Goal 3", goalOption3.options[goalOption3.selectedIndex].text);
	
	sessionStorage.removeItem("Baseline Goal 3");
	sessionStorage.setItem("Baseline Goal 3", document.getElementById("goalBaseline3").value);
	
	if(sessionStorage.getItem("Long Term Goal 3") != "None"){
		sessionStorage.removeItem("Short Term Objective Goal 3.1");
		var goalObjective3_1 = document.getElementById("shortTermObjective3_1");
		sessionStorage.setItem("Short Term Objective Goal 3.1", goalObjective3_1.options[goalObjective3_1.selectedIndex].text);
	
		sessionStorage.removeItem("Short Term Objective Goal 3.2");
		var goalObjective3_2 = document.getElementById("shortTermObjective3_2");
		sessionStorage.setItem("Short Term Objective Goal 3.2", goalObjective3_2.options[goalObjective3_2.selectedIndex].text);
	
		sessionStorage.removeItem("Short Term Objective Goal 3.3");
		var goalObjective3_3 = document.getElementById("shortTermObjective3_3");
		sessionStorage.setItem("Short Term Objective Goal 3.3", goalObjective3_3.options[goalObjective3_3.selectedIndex].text);
	}
	
	sessionStorage.removeItem("Objective Review Goal 3");
	sessionStorage.setItem("Objective Review Goal 3", document.getElementById("objectiveReview3").value);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 3");
	sessionStorage.setItem("Accommodations and Strategies Goal 3", document.getElementById("goalStrategy3").value);
	
	
	sessionStorage.removeItem("Long Term Goal 4");
	var goalOption4 = document.getElementById("goal4");
	sessionStorage.setItem("Long Term Goal 4", goalOption4.options[goalOption4.selectedIndex].text);
	
	sessionStorage.removeItem("Baseline Goal 4");
	sessionStorage.setItem("Baseline Goal 4", document.getElementById("goalBaseline4").value);
	
	if(sessionStorage.getItem("Long Term Goal 4") != "None"){
		sessionStorage.removeItem("Short Term Objective Goal 4.1");
		var goalObjective4_1 = document.getElementById("shortTermObjective4_1");
		sessionStorage.setItem("Short Term Objective Goal 4.1", goalObjective4_1.options[goalObjective4_1.selectedIndex].text);
	
		sessionStorage.removeItem("Short Term Objective Goal 4.2");
		var goalObjective4_2 = document.getElementById("shortTermObjective4_2");
		sessionStorage.setItem("Short Term Objective Goal 4.2", goalObjective4_2.options[goalObjective4_2.selectedIndex].text);
	
		sessionStorage.removeItem("Short Term Objective Goal 4.3");
		var goalObjective4_3 = document.getElementById("shortTermObjective4_3");
		sessionStorage.setItem("Short Term Objective Goal 4.3", goalObjective4_3.options[goalObjective4_3.selectedIndex].text);
	}
	
	sessionStorage.removeItem("Objective Review Goal 4");
	sessionStorage.setItem("Objective Review Goal 4", document.getElementById("objectiveReview4").value);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 4");
	sessionStorage.setItem("Accommodations and Strategies Goal 4", document.getElementById("goalStrategy4").value);
	
	sessionStorage.removeItem("Early Learning Accommodations");
	sessionStorage.setItem("Early Learning Accommodations", document.getElementById("EnviromentAccommodations").value);

	return location.href = "./Page_6.html";
}

function previous(){
	
	//Remove any existing items and add as new key
	sessionStorage.removeItem("Long Term Goal 1");
	var goalOption1 = document.getElementById("goal1");
	sessionStorage.setItem("Long Term Goal 1", goalOption1.options[goalOption1.selectedIndex].text);
	
	sessionStorage.removeItem("Baseline Goal 1");
	sessionStorage.setItem("Baseline Goal 1", document.getElementById("goalBaseline1").value);
	
	if(sessionStorage.getItem("Long Term Goal 1") != "None"){
		sessionStorage.removeItem("Short Term Objective Goal 1.1");
		var goalObjective1_1 = document.getElementById("shortTermObjective1_1");
		sessionStorage.setItem("Short Term Objective Goal 1.1", goalObjective1_1.options[goalObjective1_1.selectedIndex].text);
	
		sessionStorage.removeItem("Short Term Objective Goal 1.2");
		var goalObjective1_2 = document.getElementById("shortTermObjective1_2");
		sessionStorage.setItem("Short Term Objective Goal 1.2", goalObjective1_2.options[goalObjective1_2.selectedIndex].text);
	
		sessionStorage.removeItem("Short Term Objective Goal 1.3");
		var goalObjective1_3 = document.getElementById("shortTermObjective1_3");
		sessionStorage.setItem("Short Term Objective Goal 1.3", goalObjective1_3.options[goalObjective1_3.selectedIndex].text);
	}
	
	sessionStorage.removeItem("Objective Review Goal 1");
	sessionStorage.setItem("Objective Review Goal 1", document.getElementById("objectiveReview1").value);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 1");
	sessionStorage.setItem("Accommodations and Strategies Goal 1", document.getElementById("goalStrategy1").value);


	sessionStorage.removeItem("Long Term Goal 2");
	var goalOption2 = document.getElementById("goal2");
	sessionStorage.setItem("Long Term Goal 2", goalOption2.options[goalOption2.selectedIndex].text);
	
	sessionStorage.removeItem("Baseline Goal 2");
	sessionStorage.setItem("Baseline Goal 2", document.getElementById("goalBaseline2").value);
	
	if(sessionStorage.getItem("Long Term Goal 2") != "None"){
		sessionStorage.removeItem("Short Term Objective Goal 2.1");
		var goalObjective2_1 = document.getElementById("shortTermObjective2_1");
		sessionStorage.setItem("Short Term Objective Goal 2.1", goalObjective2_1.options[goalObjective2_1.selectedIndex].text);
	
		sessionStorage.removeItem("Short Term Objective Goal 2.2");
		var goalObjective2_2 = document.getElementById("shortTermObjective2_2");
		sessionStorage.setItem("Short Term Objective Goal 2.2", goalObjective2_2.options[goalObjective2_2.selectedIndex].text);
	
		sessionStorage.removeItem("Short Term Objective Goal 2.3");
		var goalObjective2_3 = document.getElementById("shortTermObjective2_3");
		sessionStorage.setItem("Short Term Objective Goal 2.3", goalObjective2_3.options[goalObjective2_3.selectedIndex].text);
	}
	
	sessionStorage.removeItem("Objective Review Goal 2");
	sessionStorage.setItem("Objective Review Goal 2", document.getElementById("objectiveReview2").value);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 2");
	sessionStorage.setItem("Accommodations and Strategies Goal 2", document.getElementById("goalStrategy2").value);
	
	
	sessionStorage.removeItem("Long Term Goal 3");
	var goalOption3 = document.getElementById("goal3");
	sessionStorage.setItem("Long Term Goal 3", goalOption3.options[goalOption3.selectedIndex].text);
	
	sessionStorage.removeItem("Baseline Goal 3");
	sessionStorage.setItem("Baseline Goal 3", document.getElementById("goalBaseline3").value);
	
	if(sessionStorage.getItem("Long Term Goal 3") != "None"){
		sessionStorage.removeItem("Short Term Objective Goal 3.1");
		var goalObjective3_1 = document.getElementById("shortTermObjective3_1");
		sessionStorage.setItem("Short Term Objective Goal 3.1", goalObjective3_1.options[goalObjective3_1.selectedIndex].text);
	
		sessionStorage.removeItem("Short Term Objective Goal 3.2");
		var goalObjective3_2 = document.getElementById("shortTermObjective3_2");
		sessionStorage.setItem("Short Term Objective Goal 3.2", goalObjective3_2.options[goalObjective3_2.selectedIndex].text);
	
		sessionStorage.removeItem("Short Term Objective Goal 3.3");
		var goalObjective3_3 = document.getElementById("shortTermObjective3_3");
		sessionStorage.setItem("Short Term Objective Goal 3.3", goalObjective3_3.options[goalObjective3_3.selectedIndex].text);
	}
	
	sessionStorage.removeItem("Objective Review Goal 3");
	sessionStorage.setItem("Objective Review Goal 3", document.getElementById("objectiveReview3").value);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 3");
	sessionStorage.setItem("Accommodations and Strategies Goal 3", document.getElementById("goalStrategy3").value);
	
	
	sessionStorage.removeItem("Long Term Goal 4");
	var goalOption4 = document.getElementById("goal4");
	sessionStorage.setItem("Long Term Goal 4", goalOption4.options[goalOption4.selectedIndex].text);
	
	sessionStorage.removeItem("Baseline Goal 4");
	sessionStorage.setItem("Baseline Goal 4", document.getElementById("goalBaseline4").value);
	
	if(sessionStorage.getItem("Long Term Goal 4") != "None"){
		sessionStorage.removeItem("Short Term Objective Goal 4.1");
		var goalObjective4_1 = document.getElementById("shortTermObjective4_1");
		sessionStorage.setItem("Short Term Objective Goal 4.1", goalObjective4_1.options[goalObjective4_1.selectedIndex].text);
	
		sessionStorage.removeItem("Short Term Objective Goal 4.2");
		var goalObjective4_2 = document.getElementById("shortTermObjective4_2");
		sessionStorage.setItem("Short Term Objective Goal 4.2", goalObjective4_2.options[goalObjective4_2.selectedIndex].text);
	
		sessionStorage.removeItem("Short Term Objective Goal 4.3");
		var goalObjective4_3 = document.getElementById("shortTermObjective4_3");
		sessionStorage.setItem("Short Term Objective Goal 4.3", goalObjective4_3.options[goalObjective4_3.selectedIndex].text);
	}
	
	sessionStorage.removeItem("Objective Review Goal 4");
	sessionStorage.setItem("Objective Review Goal 4", document.getElementById("objectiveReview4").value);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 4");
	sessionStorage.setItem("Accommodations and Strategies Goal 4", document.getElementById("goalStrategy4").value);
	
	sessionStorage.removeItem("Early Learning Accommodations");
	sessionStorage.setItem("Early Learning Accommodations", document.getElementById("EnviromentAccommodations").value);

	return location.href = "./Page_4.html";
}

function goals1(){
	document.getElementById("goals1").style.display = "block";
	document.getElementById("goals3").style.display = "none";
	document.getElementById("goals2").style.display = "block";
	document.getElementById("goals4").style.display = "none";
}

function goals2(){
	document.getElementById("goals3").style.display = "block";
	document.getElementById("goals1").style.display = "none";
	document.getElementById("goals4").style.display = "block";
	document.getElementById("goals2").style.display = "none";
}


function shortTermObjective1_1(){
	document.getElementById("shortTermObjective1_1").style.display = "block";
	document.getElementById("shortTermObjective1_2").style.display = "none";
	document.getElementById("shortTermObjective1_3").style.display = "none";
}

function shortTermObjective1_2(){
	document.getElementById("shortTermObjective1_2").style.display = "block";
	document.getElementById("shortTermObjective1_1").style.display = "none";
	document.getElementById("shortTermObjective1_3").style.display = "none";
}

function shortTermObjective1_3(){
	document.getElementById("shortTermObjective1_3").style.display = "block";
	document.getElementById("shortTermObjective1_2").style.display = "none";
	document.getElementById("shortTermObjective1_1").style.display = "none";
}


function shortTermObjective2_1(){
	document.getElementById("shortTermObjective2_1").style.display = "block";
	document.getElementById("shortTermObjective2_2").style.display = "none";
	document.getElementById("shortTermObjective2_3").style.display = "none";
}

function shortTermObjective2_2(){
	document.getElementById("shortTermObjective2_2").style.display = "block";
	document.getElementById("shortTermObjective2_1").style.display = "none";
	document.getElementById("shortTermObjective2_3").style.display = "none";
}

function shortTermObjective2_3(){
	document.getElementById("shortTermObjective2_3").style.display = "block";
	document.getElementById("shortTermObjective2_2").style.display = "none";
	document.getElementById("shortTermObjective2_1").style.display = "none";
}


function shortTermObjective3_1(){
	document.getElementById("shortTermObjective3_1").style.display = "block";
	document.getElementById("shortTermObjective3_2").style.display = "none";
	document.getElementById("shortTermObjective3_3").style.display = "none";
}

function shortTermObjective3_2(){
	document.getElementById("shortTermObjective3_2").style.display = "block";
	document.getElementById("shortTermObjective3_1").style.display = "none";
	document.getElementById("shortTermObjective3_3").style.display = "none";
}

function shortTermObjective3_3(){
	document.getElementById("shortTermObjective3_3").style.display = "block";
	document.getElementById("shortTermObjective3_2").style.display = "none";
	document.getElementById("shortTermObjective3_1").style.display = "none";
}


function shortTermObjective4_1(){
	document.getElementById("shortTermObjective4_1").style.display = "block";
	document.getElementById("shortTermObjective4_2").style.display = "none";
	document.getElementById("shortTermObjective4_3").style.display = "none";
}

function shortTermObjective4_2(){
	document.getElementById("shortTermObjective4_2").style.display = "block";
	document.getElementById("shortTermObjective4_1").style.display = "none";
	document.getElementById("shortTermObjective4_3").style.display = "none";
}

function shortTermObjective4_3(){
	document.getElementById("shortTermObjective4_3").style.display = "block";
	document.getElementById("shortTermObjective4_2").style.display = "none";
	document.getElementById("shortTermObjective4_1").style.display = "none";
}
