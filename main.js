var clicks = 0;

function clickClick(number){
    clicks = clicks + number;
    document.getElementById("clicks").innerHTML = clicks;
};

var poggers = 0;

function buyPogger(){
    var poggerCost = Math.floor(10 * Math.pow(1.1,poggers));     //works out the cost of this pogger
    if(clicks >= poggerCost){                                   //checks that the player can afford the pogger
        poggers = poggers + 1;                                   //increases number of poggers
    	clicks = clicks - poggerCost;                          //removes the clicks spent
        document.getElementById('poggers').innerHTML = poggers;  //updates the number of poggers for the user
        document.getElementById('clicks').innerHTML = clicks;  //updates the number of clicks for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,poggers));       //works out the cost of the next pogger
    document.getElementById('poggerCost').innerHTML = nextCost;  //updates the pogger cost for the user
};

window.setInterval(function(){
	
	clickClick(poggers);
	
}, 1000);
