
//NOTE: Some Characters will cause a previously made form to not load in properly
//      including the characters: '.' / ',' / '(' / ')'

var long_term = ["Participate in his/her routines within a learning environment",
				 "Clearly communicate his/her wants/needs within a learning environment",
				 "Develop an increased understanding of language within a learning environment",
				 "Demonstrate confidence in his/her daily living skills within a learning environment",
				 "Engage in positive play opportunities within a learning environment",
				 "Demonstrate confidence in their physical movement skills within a learning environment"];
		 
var short_term_1 = ["Engage in circle time",
					"Participate in group activities [centers/snack time/circle time]",
					"Confidently transition between classroom activities [snack/playtime/restroom/PE/circle]",
					"Follow [first, then] directions",
					"Participate in non prefered activites",
					"Respond to [stop/go] directions"];
					
var short_term_2 = ["Use a single word [help/no/yes] or a short phrase [I want] to make a request",
					"Use a short sentence [I want a car] to make a request",
					"Attempt to produce new sounds/words or word combinations",
					"Demonstrate an awareness of the target sounds"];
					
var short_term_3 = ["Follow a simple one step direction",
					"Follow a simple two step direction",
					"Follow a multi step direction",
					"Answer simple [wh] questions",
					"Use a variety of action and descriptive words",
					"Use appropriate pronouns"];

var short_term_4 = ["Participate in daily self care routines [locker/shoes/jacket/snack/toilet/handwashing]",
					"Participate in hand strengthening activities [tongs/playdough/tweezers/theruputty]",
					"Practice using fine motor tools [pencil/crayons/scissors]",
					"Correctly position scissors to cut on a straight line",
					"Correctly position scissors to cut on a curved line",
					"Demonstrate a correct pencil grasp",
					"Copy pre-printing shapes [circle/curve/x]",
					"Use regulation and/or sensory tools during instruction time",
					"Use regulation and/or sensory tools during transitions"];

var short_term_5 = ["Engage in parallel play with a peer",
					"Verbally initiate play with a peer or familiar adult",
					"Engage in turn taking activities",
					"Engage in social games",
					"Identify and label his/her emotions",
					"Identify and label their peers emotions",
					"Increase their functional play skills"];

var short_term_6 = ["Demonstrate a variety of animal walks",
					"Balance on each foot and stand on tip toes with minimal swaying",
					"Throw a ball with an overhand action",
					"Catch a ball using both hands",
					"Jump forward using a 2 foot take off and landing"];
					
					
//Add Goal Bank Items to Selection					
function populateLongTerm(){
	var long_term_select_1 = document.getElementById('goal1');
	var long_term_select_2 = document.getElementById('goal2');
	var long_term_select_3 = document.getElementById('goal3');
	var long_term_select_4 = document.getElementById('goal4');
	
	for(i = 0; i < long_term.length; i++){
		var temp_1 = document.createElement("option");
		var temp_2 = document.createElement("option");
		var temp_3 = document.createElement("option");
		var temp_4 = document.createElement("option");
		
		temp_1.text = long_term[i];
		temp_1.value = i+1;
		
		temp_2.text = long_term[i];
		temp_2.value = i+1;
		
		temp_3.text = long_term[i];
		temp_3.value = i+1;
		
		temp_4.text = long_term[i];
		temp_4.value = i+1;
		
		long_term_select_1.options.add(temp_1);
		long_term_select_2.options.add(temp_2);
		long_term_select_3.options.add(temp_3);
		long_term_select_4.options.add(temp_4);
	}
}

function updateShortTerm1(){
	var select_list = document.getElementById('goal1');
	var short_term_num = select_list.options[select_list.selectedIndex].value;
	
	var short_term_select_1 = document.getElementById('shortTermObjective1_1');
	var short_term_select_2 = document.getElementById('shortTermObjective1_2');
	var short_term_select_3 = document.getElementById('shortTermObjective1_3');
	
	//Clear Select List
	for(i = (short_term_select_1.length - 1); i >= 0; i--){
		short_term_select_1.remove(i);
		short_term_select_2.remove(i);
		short_term_select_3.remove(i);
	}
	
	var short_term_goals;
	
	//Check which short term goals to use
	if(short_term_num == 1){
		short_term_goals = short_term_1;
	}
	else if(short_term_num == 2){
		short_term_goals = short_term_2;
	}
	else if(short_term_num == 3){
		short_term_goals = short_term_3;
	}
	else if(short_term_num == 4){
		short_term_goals = short_term_4;
	}
	else if(short_term_num == 5){
		short_term_goals = short_term_5;
	}
	else if(short_term_num == 6){
		short_term_goals = short_term_6;
	}
	
	var initial_select_1 = document.createElement("option");
	var initial_select_2 = document.createElement("option");
	var initial_select_3 = document.createElement("option");
	
	initial_select_1.text = "None";
	initial_select_2.text = "None";
	initial_select_3.text = "None";
	
	short_term_select_1.options.add(initial_select_1);
	short_term_select_2.options.add(initial_select_2);
	short_term_select_3.options.add(initial_select_3);
	
	for(i = 0; i < short_term_goals.length; i++){
		var temp_1 = document.createElement("option");
		var temp_2 = document.createElement("option");
		var temp_3 = document.createElement("option");
		
		temp_1.text = short_term_goals[i];
		temp_2.text = short_term_goals[i];
		temp_3.text = short_term_goals[i];
		
		short_term_select_1.options.add(temp_1);
		short_term_select_2.options.add(temp_2);
		short_term_select_3.options.add(temp_3);
	}

}

function updateShortTerm2(){
	var select_list = document.getElementById('goal2');
	var short_term_num = select_list.options[select_list.selectedIndex].value;
	
	var short_term_select_1 = document.getElementById('shortTermObjective2_1');
	var short_term_select_2 = document.getElementById('shortTermObjective2_2');
	var short_term_select_3 = document.getElementById('shortTermObjective2_3');
	
	//Clear Select List
	for(i = (short_term_select_1.length - 1); i >= 0; i--){
		short_term_select_1.remove(i);
		short_term_select_2.remove(i);
		short_term_select_3.remove(i);
	}
	
	var short_term_goals;
	
	//Check which short term goals to use
	if(short_term_num == 1){
		short_term_goals = short_term_1;
	}
	else if(short_term_num == 2){
		short_term_goals = short_term_2;
	}
	else if(short_term_num == 3){
		short_term_goals = short_term_3;
	}
	else if(short_term_num == 4){
		short_term_goals = short_term_4;
	}
	else if(short_term_num == 5){
		short_term_goals = short_term_5;
	}
	else if(short_term_num == 6){
		short_term_goals = short_term_6;
	}

	var initial_select_1 = document.createElement("option");
	var initial_select_2 = document.createElement("option");
	var initial_select_3 = document.createElement("option");
	
	initial_select_1.text = "None";
	initial_select_2.text = "None";
	initial_select_3.text = "None";
	
	short_term_select_1.options.add(initial_select_1);
	short_term_select_2.options.add(initial_select_2);
	short_term_select_3.options.add(initial_select_3);	

	for(i = 0; i < short_term_goals.length; i++){
		var temp_1 = document.createElement("option");
		var temp_2 = document.createElement("option");
		var temp_3 = document.createElement("option");
		
		temp_1.text = short_term_goals[i];
		temp_2.text = short_term_goals[i];
		temp_3.text = short_term_goals[i];
		
		short_term_select_1.options.add(temp_1);
		short_term_select_2.options.add(temp_2);
		short_term_select_3.options.add(temp_3);
	}

}

function updateShortTerm3(){
	var select_list = document.getElementById('goal3');
	var short_term_num = select_list.options[select_list.selectedIndex].value;
	
	var short_term_select_1 = document.getElementById('shortTermObjective3_1');
	var short_term_select_2 = document.getElementById('shortTermObjective3_2');
	var short_term_select_3 = document.getElementById('shortTermObjective3_3');
	
	//Clear Select List
	for(i = (short_term_select_1.length - 1); i >= 0; i--){
		short_term_select_1.remove(i);
		short_term_select_2.remove(i);
		short_term_select_3.remove(i);
	}
	
	var short_term_goals;
	
	//Check which short term goals to use
	if(short_term_num == 1){
		short_term_goals = short_term_1;
	}
	else if(short_term_num == 2){
		short_term_goals = short_term_2;
	}
	else if(short_term_num == 3){
		short_term_goals = short_term_3;
	}
	else if(short_term_num == 4){
		short_term_goals = short_term_4;
	}
	else if(short_term_num == 5){
		short_term_goals = short_term_5;
	}
	else if(short_term_num == 6){
		short_term_goals = short_term_6;
	}
	
	var initial_select_1 = document.createElement("option");
	var initial_select_2 = document.createElement("option");
	var initial_select_3 = document.createElement("option");
	
	initial_select_1.text = "None";
	initial_select_2.text = "None";
	initial_select_3.text = "None";
	
	short_term_select_1.options.add(initial_select_1);
	short_term_select_2.options.add(initial_select_2);
	short_term_select_3.options.add(initial_select_3);
	
	for(i = 0; i < short_term_goals.length; i++){
		var temp_1 = document.createElement("option");
		var temp_2 = document.createElement("option");
		var temp_3 = document.createElement("option");
		
		temp_1.text = short_term_goals[i];
		temp_2.text = short_term_goals[i];
		temp_3.text = short_term_goals[i];
		
		short_term_select_1.options.add(temp_1);
		short_term_select_2.options.add(temp_2);
		short_term_select_3.options.add(temp_3);
	}

}

function updateShortTerm4(){
	var select_list = document.getElementById('goal4');
	var short_term_num = select_list.options[select_list.selectedIndex].value;
	
	var short_term_select_1 = document.getElementById('shortTermObjective4_1');
	var short_term_select_2 = document.getElementById('shortTermObjective4_2');
	var short_term_select_3 = document.getElementById('shortTermObjective4_3');
	
	//Clear Select List
	for(i = (short_term_select_1.length - 1); i >= 0; i--){
		short_term_select_1.remove(i);
		short_term_select_2.remove(i);
		short_term_select_3.remove(i);
	}
	
	var short_term_goals;
	
	//Check which short term goals to use
	if(short_term_num == 1){
		short_term_goals = short_term_1;
	}
	else if(short_term_num == 2){
		short_term_goals = short_term_2;
	}
	else if(short_term_num == 3){
		short_term_goals = short_term_3;
	}
	else if(short_term_num == 4){
		short_term_goals = short_term_4;
	}
	else if(short_term_num == 5){
		short_term_goals = short_term_5;
	}
	else if(short_term_num == 6){
		short_term_goals = short_term_6;
	}
	
	var initial_select_1 = document.createElement("option");
	var initial_select_2 = document.createElement("option");
	var initial_select_3 = document.createElement("option");
	
	initial_select_1.text = "None";
	initial_select_2.text = "None";
	initial_select_3.text = "None";
	
	short_term_select_1.options.add(initial_select_1);
	short_term_select_2.options.add(initial_select_2);
	short_term_select_3.options.add(initial_select_3);
	
	for(i = 0; i < short_term_goals.length; i++){
		var temp_1 = document.createElement("option");
		var temp_2 = document.createElement("option");
		var temp_3 = document.createElement("option");
		
		temp_1.text = short_term_goals[i];
		temp_2.text = short_term_goals[i];
		temp_3.text = short_term_goals[i];
		
		short_term_select_1.options.add(temp_1);
		short_term_select_2.options.add(temp_2);
		short_term_select_3.options.add(temp_3);
	}

}

