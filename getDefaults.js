function getDefaults(name){
    
    var defaults = `
module.exports = [
	{
		name : "nouvel an Annecy 2016",
		city : "Annecy",
		type : "gros",
		nbTeam : 11,
		lat:45.902180,
		lng:6.120464,
		country : "france",
		dateShow : new Date(2016,7,14),
		dateMin : new Date(2016,7,10),
		dateMax : new Date(2016,7,15),
		year : 2017,
		status : "finished",
		team : [],
		subscriptions : [],
		discussion : [],
	},
	{
		name : "14 juillet Paris 2016",
		type : "gros",
		city : "Paris",
		nbTeam : 10,
		lat:48.857482, 
		lng:2.338285,
		country : "france",
		dateShow : new Date(2016,7,14),
		dateMin : new Date(2016,7,8),
		dateMax : new Date(2016,7,18),
		year : 2015,
		status : "finished",
		team : [],
		subscriptions : [],
		discussion : [],
	},
	{
		name : "14 juillet Nantes 2017",
		type : "petit",
		city : "Nantes",
		nbTeam : 3,
		lat:47.211154, 
		lng:-1.549736,
		country : "france",
		dateShow : new Date(2016,7,14),
		dateMin : new Date(2016,7,13),
		dateMax : new Date(2016,7,15),
		year : 2017,
		status : "notReady",
		team : [],
		subscriptions : [],
		discussion : [],
	},
	{
		name : "14 juillet Bordeaux 2017",
		type : "petit",
		city : "Nantes",
		nbTeam : 2,
		lat:44.848861,
		lng: -0.576186,
		country : "france",
		dateShow : new Date(2016,7,14),
		dateMin : new Date(2016,7,12),
		dateMax : new Date(2016,7,17),
		year : 2017,
		status : "ready",
		team : [],
		subscriptions : [],
		discussion : [],
	},
	{
		name : "Nouvel an Toulon 2016",
		type : "moyen",
		city : "Toulon",
		nbTeam : 6,
		lat:43.121948, 
		lng:5.930684,
		country : "france",
		dateShow : new Date(2016,12,31),
		dateMin : new Date(2016, 12, 20),
		dateMax : new Date(2017, 1, 3),
		year : 2017,
		status : "finished",
		team : [],
		subscriptions : [],
		discussion : [],
	},
	{
		name : "Nouvel an Dubai 2016",
		type : "gros",
		city : "Dubai",
		nbTeam : 25,
		lat:25.178537, 
		lng:55.281630,
		country : "dubai",
		dateShow : new Date(2016,12,31),
		dateMin : new Date(2016, 9, 20),
		dateMax : new Date(2017, 1, 28),
		year : 2017,
		status : "finished",
		team : [],
		subscriptions : [],
		discussion : [],
	},
	{
		name : "Nouvel an Oman 2016",
		type : "gros",
		city : "Mascate",
		nbTeam : 16,
		lat:23.586245, 
		lng:58.354288 ,
		country : "oman",
		dateShow : new Date(2016,12,31),
		dateMin : new Date(2016, 12, 1),
		dateMax : new Date(2017, 1, 7),
		year : 2017,
		status : "finished",
		team : [],
		subscriptions : [],
		discussion : [],
	},
	{
		name : "Grand prix F1",
		type : "petit",
		city : "Franckfort",
		nbTeam : 3,
		lat:50.143135, 
		lng:8.631065,
		dateShow : new Date(2017,5, 2),
		dateMin : new Date(2017, 4, 28),
		dateMax : new Date(2017, 5, 3),
		country : "germany",
		year : 2017,
		status : "notReady",
		team : [],
		subscriptions : [],
		discussion : [],
	},
	{
		name : "95 ans de Johnny",
		type : "petit",
		city : "Metz",
		nbTeam : 3,
		lat:49.112086, 
		lng:6.171798,
		country : "france",
		dateShow : new Date(2017,4, 2),
		dateMin : new Date(2017, 4, 1),
		dateMax : new Date(2017, 4, 3),
		year : 2017,
		status : "notReady",
		team : [],
		subscriptions : [],
		discussion : [],
	},
	{
		name : "Coupe de France de foot",
		type : "moyen",
		city : "Paris",
		nbTeam : 8,
		lat:48.840634,  
		lng:2.279764,
		country : "france",
		dateShow : new Date(2017,1, 17),
		dateMin : new Date(2017, 1, 14),
		dateMax : new Date(2017, 1, 18),
		year : 2017,
		status : "finished",
		team : [],
		subscriptions : [],
		discussion : [],
	},
	{
		name : "Anniversaire d'un méga riche",
		type : "moyen",
		city : "Canne",
		nbTeam : 5,
		lat:43.571880, 
		lng:7.012093 ,
		country : "france",
		dateShow : new Date(2017,3, 17),
		dateMin : new Date(2017, 3, 14),
		dateMax : new Date(2017, 3, 18),
		year : 2017,
		status : "notReady",
		team : [],
		subscriptions : [],
		discussion : [],
	},
	{
		name : "Fête de la reconquista",
		type : "moyen",
		city : "Madrid",
		nbTeam : 6,
		lat:40.314771, 
		lng:-3.830216,
		country : "spain",
		dateShow : new Date(2017,6, 7),
		dateMin : new Date(2017, 6, 2),
		dateMax : new Date(2017, 6, 5),
		year : 2017,
		status : "notReady",
		team : [],
		subscriptions : [],
		discussion : [],
	},
	{
		name : "Fête du Brexit",
		type : "moyen",
		city : "Londres",
		nbTeam : 5,
		lat:51.367236, 
		lng:-0.048305,
		country : "britain",
		dateShow : new Date(2017,5, 7),
		dateMin : new Date(2017, 5, 2),
		dateMax : new Date(2017, 5, 5),
		year : 2017,
		status : "notReady",
		team : [],
		subscriptions : [],
		discussion : [],
	},
	{
		name : "Fête de l'indépendance 2017",
		type : "gros",
		city : "Dakar",
		nbTeam : 13,
		lat:14.753761, 
		lng:-17.390657,
		country : "senegal",
		dateShow : new Date(2017,8, 1),
		dateMin : new Date(2017, 7, 25),
		dateMax : new Date(2017, 8, 4),
		year : 2017,
		status : "notReady",
		team : [],
		subscriptions : [],
		discussion : [],
	},
	{
		name : "Fête de la faillite",
		type : "moyen",
		city : "Rome",
		nbTeam : 7,
		lat:41.880056,  
		lng:12.486310,
		country : "italy",
		dateShow : new Date(2017,6, 12),
		dateMin : new Date(2017, 6, 9),
		dateMax : new Date(2017, 6, 15),
		year : 2017,
		status : "notReady",
		team : [],
		subscriptions : [],
		discussion : [],
	},
]


    `  
    return defaults
}

module.exports = getDefaults