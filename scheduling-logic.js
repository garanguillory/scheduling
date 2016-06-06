// need:
 // weekday array
 // weekend array
 // holiday array

// get # of days in month
 // moment("2016-02").daysInMonth() // 29


// week days 
var getWeekdays = function(currentMonth, year){
	var monthsArray = moment.months();
	var array = [];

	var month = monthsArray.indexOf(currentMonth)+1;
	year = year || moment().year();
	var day = moment().day() + 1;
	
	var lengthOfMonth = moment(month).daysInMonth();

	for(var d=1; d<lengthOfMonth+1; d++){
		var date = moment(year+"-"+month+"-"+d);
			if(date.format("dddd") == "Monday"){
					array.push(date.format("YYYY-MM-DD"));
			}
			if(date.format("dddd") == "Tuesday"){
					array.push(date.format("YYYY-MM-DD"));
			}
			if(date.format("dddd") == "Wednesday"){
					array.push(date.format("YYYY-MM-DD"));
			}
			if(date.format("dddd") == "Thursday"){
					array.push(date.format("YYYY-MM-DD"));
			}
	}

	return array;
};


var getWeekends = function(currentMonth, year){
	var monthsArray = moment.months();
	var array = [];

	var month = monthsArray.indexOf(currentMonth)+1;
	year = year || moment().year();
	var day = moment().day() + 1;

	var lengthOfMonth = moment(month).daysInMonth();

	for(var d=1; d<lengthOfMonth+1; d++){
		var date = moment(year+"-"+month+"-"+d);
			if(date.format("dddd") == "Friday"){
					array.push(date.format("YYYY-MM-DD"));
			}
			if(date.format("dddd") == "Saturday"){
					array.push(date.format("YYYY-MM-DD"));
			}
			if(date.format("dddd") == "Sunday"){
					array.push(date.format("YYYY-MM-DD"));
			}
	}

	return array;
};

var employeesObject = {};

	for(var i=1; i<=41; i++){
		employeesObject[i] = [];
	}


var weekdaysJS = [
  "2016-07-05", "2016-07-06", "2016-07-07", "2016-07-11", "2016-07-12", "2016-07-13", "2016-07-14", "2016-07-18", "2016-07-19", "2016-07-20", "2016-07-21", "2016-07-25", "2016-07-26", "2016-07-27", "2016-07-28",
  "2016-08-01", "2016-08-02", "2016-08-03", "2016-08-04", "2016-08-08", "2016-08-09", "2016-08-10", "2016-08-11", "2016-08-15", "2016-08-16", "2016-08-17", "2016-08-18", "2016-08-22", "2016-08-23", "2016-08-24", "2016-08-25", "2016-08-29", "2016-08-30", "2016-08-31",
  "2016-09-01", "2016-09-06", "2016-09-07", "2016-09-08", "2016-09-12", "2016-09-13", "2016-09-14", "2016-09-15", "2016-09-19", "2016-09-20", "2016-09-21", "2016-09-22", "2016-09-26", "2016-09-27", "2016-09-28", "2016-09-29"
]; 

var weekendsJS = [
	"2016-07-08", "2016-07-09", "2016-07-09", "2016-07-10", "2016-07-10", "2016-07-15", "2016-07-16", "2016-07-16", "2016-07-17", "2016-07-17", "2016-07-22", "2016-07-23", "2016-07-23", "2016-07-24", "2016-07-24", "2016-07-29", "2016-07-30", "2016-07-30", "2016-07-31", "2016-07-31",
	"2016-08-05", "2016-08-06", "2016-08-06", "2016-08-07", "2016-08-07", "2016-08-12", "2016-08-13", "2016-08-13", "2016-08-14", "2016-08-14", "2016-08-19", "2016-08-20", "2016-08-20", "2016-08-21", "2016-08-21", "2016-08-26", "2016-08-27", "2016-08-27", "2016-08-28", "2016-08-28",
	"2016-09-09", "2016-09-10", "2016-09-10", "2016-09-11", "2016-09-11", "2016-09-16", "2016-09-17", "2016-09-17", "2016-09-18", "2016-09-18", "2016-09-23", "2016-09-24", "2016-09-24", "2016-09-25", "2016-09-25", "2016-09-30", "2016-10-01", "2016-10-01"
];

'use strict';

var people = [
  {"name":"George Washington","conflicts":["2016-07-09","2016-07-10","2016-07-11","2016-07-12","2016-07-13","2016-08-28","2016-08-29","2016-08-30"], "onCall": {weekdays:[], weekends:[], holidays: []} },
  {"name":"John Adams","conflicts":["2016-07-03","2016-07-04","2016-07-05","2016-07-29","2016-07-30","2016-08-29","2016-08-30","2016-09-03","2016-09-04","2016-09-23","2016-09-24"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Thomas Jefferson","conflicts":["2016-08-21","2016-08-22","2016-08-23","2016-09-21","2016-09-22","2016-09-23"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"James Madison","conflicts":["2016-07-29","2016-07-30","2016-07-31","2016-08-09","2016-08-10","2016-08-11"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"James Monroe","conflicts":["2016-07-29","2016-08-03","2016-08-11","2016-09-09","2016-09-10","2016-09-11"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"John QuincyAdams","conflicts":["2016-07-09","2016-08-30","2016-09-08","2016-09-09","2016-09-10","2016-09-11"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Andrew Jackson","conflicts":["2016-07-29","2016-07-30","2016-07-31","2016-08-09","2016-08-10","2016-08-11"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Martin VanBuren","conflicts":["2016-07-11","2016-07-12","2016-07-13","2016-08-09","2016-08-10","2016-08-11","2016-09-09","2016-09-10","2016-09-11"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"William HenryHarrison","conflicts":["2016-08-08","2016-08-09","2016-08-10","2016-08-11","2016-09-29","2016-09-30"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"John Tyler","conflicts":["2016-07-20","2016-07-21","2016-07-22","2016-08-20","2016-08-21","2016-08-22","2016-09-20","2016-09-21","2016-09-22"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"James KPolk","conflicts":["2016-08-20","2016-08-21","2016-08-22","2016-09-20","2016-09-21","2016-09-22"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Zachary Taylor","conflicts":["2016-07-26","2016-07-27","2016-07-28","2016-08-01","2016-08-02","2016-08-03","2016-09-01","2016-09-02","2016-09-03"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Millard Fillmore","conflicts":["2016-07-16","2016-07-17","2016-07-18","2016-08-01","2016-08-02","2016-08-03","2016-09-11","2016-09-12","2016-09-13"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Franklin Pierce","conflicts":["2016-07-26","2016-08-01","2016-08-02","2016-08-03","2016-08-04","2016-08-05","2016-09-10","2016-09-11","2016-09-12"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"James Buchanan","conflicts":["2016-07-08","2016-07-09","2016-07-10","2016-08-10","2016-08-11","2016-08-12","2016-09-04","2016-09-05","2016-09-06"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Abraham Lincoln","conflicts":["2016-07-22","2016-07-23","2016-07-24","2016-08-11","2016-08-12","2016-08-13","2016-09-21","2016-09-22","2016-09-23"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Andrew Johnson","conflicts":["2016-07-22","2016-07-23","2016-07-24","2016-08-11","2016-08-12","2016-08-13","2016-09-21","2016-09-22","2016-09-23"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Ulysses SGrant","conflicts":["2016-07-03","2016-07-04","2016-07-05","2016-08-01","2016-08-02","2016-08-03","2016-09-21","2016-09-22","2016-09-23"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Rutherford BHayes","conflicts":["2016-07-29","2016-07-30","2016-07-31","2016-08-01","2016-08-02","2016-08-03","2016-09-27","2016-09-28"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"James AGarfield","conflicts":["2016-07-29","2016-07-30","2016-08-02","2016-08-03"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Chester AArthur","conflicts":["2016-07-31","2016-08-01","2016-08-02","2016-08-03","2016-09-27","2016-09-28"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Grover Cleveland","conflicts":["2016-07-29","2016-07-30","2016-07-31","2016-08-01","2016-08-02","2016-08-03","2016-09-27","2016-09-28"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Benjamin Harrison","conflicts":["2016-07-28","2016-07-29","2016-07-30","2016-07-31","2016-08-01","2016-08-02","2016-08-03","2016-09-27","2016-09-28","2016-09-29","2016-09-30"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"William McKinley","conflicts":["2016-07-31","2016-08-01","2016-08-02","2016-08-03","2016-08-05","2016-08-06","2016-09-01","2016-09-02","2016-09-03","2016-09-05","2016-09-06","2016-09-28","2016-09-29"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Theodore Roosevelt","conflicts":["2016-07-19","2016-07-20","2016-07-31","2016-09-11","2016-09-12","2016-09-13","2016-09-30"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"William HowardTaft","conflicts":["2016-07-29","2016-07-30","2016-07-31","2016-08-01","2016-08-02","2016-08-03","2016-08-05","2016-08-06","2016-09-01","2016-09-02","2016-09-03","2016-09-05","2016-09-06"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Woodrow Wilson","conflicts":["2016-07-29","2016-07-30","2016-07-31","2016-08-01","2016-08-02","2016-08-03","2016-08-05","2016-08-06","2016-09-03","2016-09-05","2016-09-06"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Warren GHarding","conflicts":["2016-07-13","2016-07-14","2016-07-15","2016-07-29","2016-07-30","2016-07-31","2016-08-17","2016-08-18","2016-08-19","2016-09-21","2016-09-22","2016-09-23","2016-09-25","2016-09-26"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Calvin Coolidge","conflicts":["2016-07-29","2016-07-30","2016-07-31","2016-08-25","2016-08-26","2016-08-27","2016-08-15","2016-08-16","2016-09-21","2016-09-22","2016-09-23","2016-09-25","2016-09-26"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Herbert Hoover","conflicts":["2016-07-29","2016-07-30","2016-07-31","2016-08-01","2016-08-02","2016-08-03","2016-08-05","2016-08-06","2016-09-29","2016-09-30"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Franklin DRoosevelt","conflicts":["2016-07-29","2016-07-30","2016-07-31","2016-08-17","2016-08-18","2016-08-19","2016-08-20","2016-08-21","2016-09-21","2016-09-22","2016-09-29","2016-09-30"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Harry STruman","conflicts":["2016-07-19","2016-07-20","2016-07-21","2016-08-11","2016-08-12","2016-08-13","2016-08-14","2016-08-15","2016-08-16","2016-08-17","2016-08-18","2016-08-19","2016-08-20"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Dwight DEisenhower","conflicts":["2016-07-09","2016-07-10","2016-07-11","2016-08-11","2016-08-12","2016-08-13","2016-08-15","2016-08-26","2016-09-11","2016-09-12","2016-09-13","2016-09-25","2016-09-16"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"John FKennedy","conflicts":["2016-07-29","2016-07-30","2016-07-31","2016-07-11","2016-08-22","2016-08-23","2016-08-25","2016-08-26","2016-09-11","2016-09-17","2016-09-18","2016-09-25","2016-09-26"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Lyndon BJohnson","conflicts":["2016-07-09","2016-07-10","2016-07-11","2016-08-11","2016-08-21","2016-08-23","2016-08-25","2016-08-26","2016-09-21","2016-09-22","2016-09-23","2016-09-25","2016-09-26"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Richard Nixon","conflicts":["2016-07-29","2016-07-30","2016-07-31","2016-08-17","2016-08-02","2016-08-03","2016-08-15","2016-08-26","2016-09-01","2016-09-02","2016-09-03","2016-09-05","2016-09-06"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Gerald Ford","conflicts":["2016-07-08","2016-07-09","2016-07-10","2016-07-29","2016-08-01","2016-08-02","2016-08-03","2016-08-05","2016-08-06","2016-08-10","2016-08-11"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Jimmy Carter","conflicts":["2016-07-08","2016-07-09","2016-07-10","2016-07-29","2016-07-30","2016-07-31","2016-08-01","2016-08-02","2016-08-03","2016-08-05","2016-09-17","2016-09-16","2016-09-15"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Ronald Reagan","conflicts":["2016-07-08","2016-07-09","2016-07-10","2016-07-29","2016-07-30"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"George HWBush","conflicts":["2016-07-31","2016-08-01","2016-08-02","2016-08-03","2016-09-05","2016-09-21","2016-09-29","2016-09-30"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Bill Clinton","conflicts":["2016-08-08","2016-08-09","2016-08-10","2016-08-29","2016-08-30","2016-09-01","2016-09-02","2016-09-03","2016-09-05","2016-09-06","2016-09-10","2016-09-11"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"George WBush","conflicts":["2016-08-01","2016-08-02","2016-08-09","2016-08-19","2016-08-28","2016-08-29","2016-09-01","2016-09-02","2016-09-03","2016-09-05","2016-09-06","2016-09-10","2016-09-11"],"onCall": {weekdays:[], weekends:[], holidays: []}},
  {"name":"Barack Obama","conflicts":[],"onCall": {weekdays:[], weekends:[], holidays: []}}
];

var weekdaysJS = [
  "2016-07-05", "2016-07-06", "2016-07-07", "2016-07-11", "2016-07-12", "2016-07-13", "2016-07-14", "2016-07-18", "2016-07-19", "2016-07-20", "2016-07-21", "2016-07-25", "2016-07-26", "2016-07-27", "2016-07-28",
  "2016-08-01", "2016-08-02", "2016-08-03", "2016-08-04", "2016-08-08", "2016-08-09", "2016-08-10", "2016-08-11", "2016-08-15", "2016-08-16", "2016-08-17", "2016-08-18", "2016-08-22", "2016-08-23", "2016-08-24", "2016-08-25", "2016-08-29", "2016-08-30", "2016-08-31",
  "2016-09-01", "2016-09-06", "2016-09-07", "2016-09-08", "2016-09-12", "2016-09-13", "2016-09-14", "2016-09-15", "2016-09-19", "2016-09-20", "2016-09-21", "2016-09-22", "2016-09-26", "2016-09-27", "2016-09-28", "2016-09-29"
];

var weekendsJS = [
  "2016-07-08", "2016-07-09", "2016-07-09", "2016-07-10", "2016-07-10", "2016-07-15", "2016-07-16", "2016-07-16", "2016-07-17", "2016-07-17", "2016-07-22", "2016-07-23", "2016-07-23", "2016-07-24", "2016-07-24", "2016-07-29", "2016-07-30", "2016-07-30", "2016-07-31", "2016-07-31",
  "2016-08-05", "2016-08-06", "2016-08-06", "2016-08-07", "2016-08-07", "2016-08-12", "2016-08-13", "2016-08-13", "2016-08-14", "2016-08-14", "2016-08-19", "2016-08-20", "2016-08-20", "2016-08-21", "2016-08-21", "2016-08-26", "2016-08-27", "2016-08-27", "2016-08-28", "2016-08-28",
  "2016-09-09", "2016-09-10", "2016-09-10", "2016-09-11", "2016-09-11", "2016-09-16", "2016-09-17", "2016-09-17", "2016-09-18", "2016-09-18", "2016-09-23", "2016-09-24", "2016-09-24", "2016-09-25", "2016-09-25", "2016-09-30", "2016-10-01", "2016-10-01"
];

let findEligible = (date) => {
  return (person) => person.conflicts.indexOf(date) < 0;
};

let findShortestOnCallList = (type) => {
  return (prev, curr) => ( prev.onCall[type].length <= curr.onCall[type].length ) ? prev : curr;
};

var result = weekdaysJS.reduce((acc, date) => {
  var type = 'weekdays';
  var selected = acc.filter(findEligible(date)).reduce(findShortestOnCallList(type));

  selected.onCall[type].push(date);

  return acc;
}, people);

var resultWeekends = weekendsJS.reduce((acc, date) => {
  var type = 'weekends';
  var selected = acc.filter(findEligible(date)).reduce(findShortestOnCallList(type));

  selected.onCall[type].push(date);

  return acc;
}, people);

console.log(resultWeekends);


var holidays = [];

var getHolidays = function(year){

	var newYears = `${year}-01-01`;
		holidays.push(newYears, newYears);
		if(moment(newYears, "YYYY-MM-DD").format("dddd") == "Friday"){
			holidays.push(moment(`${year}-01-01`, "YYYY-MM-DD").subtract(1,'days').format("YYYY-MM-DD"));
			holidays.push(`${year}-01-02`, `${year}-01-02`, `${year}-01-03`, `${year}-01-03`);
		} else if(moment(newYears, "YYYY-MM-DD").format("dddd") == "Saturday"){
				holidays.push(moment(`${year}-01-01`, "YYYY-MM-DD").subtract(1,'days').format("YYYY-MM-DD"));
				holidays.push(`${year}-01-02`, `${year}-01-02`);
		} else if(moment(newYears, "YYYY-MM-DD").format("dddd") == "Sunday"){
				holidays.push(moment(`${year}-01-01`, "YYYY-MM-DD").subtract(1,'days').format("YYYY-MM-DD"));
				holidays.push(moment(`${year}-01-01`, "YYYY-MM-DD").subtract(1,'days').format("YYYY-MM-DD"));
				holidays.push(moment(`${year}-01-01`, "YYYY-MM-DD").subtract(2,'days').format("YYYY-MM-DD"));
		} else if(moment(newYears, "YYYY-MM-DD").format("dddd") == "Monday"){
				holidays.push(moment(`${year}-01-01`, "YYYY-MM-DD").subtract(1,'days').format("YYYY-MM-DD"));
				holidays.push(moment(`${year}-01-01`, "YYYY-MM-DD").subtract(1,'days').format("YYYY-MM-DD"));
				holidays.push(moment(`${year}-01-01`, "YYYY-MM-DD").subtract(2,'days').format("YYYY-MM-DD"));
				holidays.push(moment(`${year}-01-01`, "YYYY-MM-DD").subtract(2,'days').format("YYYY-MM-DD"));
				holidays.push(moment(`${year}-01-01`, "YYYY-MM-DD").subtract(3,'days').format("YYYY-MM-DD"));
		} else {
			holidays.push(moment(`${year}-01-01`, "YYYY-MM-DD").subtract(1,'days').format("YYYY-MM-DD"));
		}

	// Easter
		holidays.push('2017-04-16', '2017-04-16', '2017-04-15', '2017-04-15', '2017-04-14');
		holidays.push('2018-04-01', '2018-04-01', '2018-03-31', '2018-03-31', '2018-03-30');
		holidays.push('2018-04-21', '2018-04-21', '2018-04-20', '2018-04-20', '2018-04-19');
		holidays.push('2018-04-12', '2018-04-12', '2018-04-11', '2018-04-11', '2018-04-10');
		holidays.push('2017-04-04', '2017-04-04', '2017-04-03', '2017-04-03', '2017-04-02');

	var memorialDay = moment(`${year}-05-01`, "YYYY-MM-DD").endOf('month').day("Monday").format("YYYY-MM-DD");
		holidays.push(moment(memorialDay,"YYYY-MM-DD").format("YYYY-MM-DD"), moment(memorialDay,"YYYY-MM-DD").format("YYYY-MM-DD"));
		holidays.push(moment(memorialDay,"YYYY-MM-DD").subtract(1,'days').format("YYYY-MM-DD"),moment(memorialDay,"YYYY-MM-DD").subtract(1,'days').format("YYYY-MM-DD"));
		holidays.push(moment(memorialDay,"YYYY-MM-DD").subtract(2,'days').format("YYYY-MM-DD"),moment(memorialDay,"YYYY-MM-DD").subtract(2,'days').format("YYYY-MM-DD"));
	
	var fourthOfJuly = `${year}-07-04`;
		holidays.push(fourthOfJuly, fourthOfJuly);
		if(moment(fourthOfJuly, "YYYY-MM-DD").format("dddd") == "Friday"){
			holidays.push(`${year}-07-03`, `${year}-07-05`, `${year}-07-05`, `${year}-07-06`, `${year}-07-06`);
		} else if(moment(fourthOfJuly, "YYYY-MM-DD").format("dddd") == "Saturday"){
			holidays.push(`${year}-07-03`, `${year}-07-03`, `${year}-07-05`, `${year}-07-05`);
		} else if(moment(fourthOfJuly, "YYYY-MM-DD").format("dddd") == "Sunday"){
			holidays.push(`${year}-07-02`, `${year}-07-03`, `${year}-07-03`);
		} else if(moment(fourthOfJuly, "YYYY-MM-DD").format("dddd") == "Monday"){
			holidays.push(`${year}-07-01`, `${year}-07-02`, `${year}-07-02`, `${year}-07-03`, `${year}-07-03`);
		} else {
			holidays.push(`${year}-07-03`);
		}

	// Labor Day
	var start = moment(`${year}-09`).startOf('month');
	var counter = 1;
		if(start != "Monday"){
			while(day != "Monday"){
				var day = moment(`${year}-09`).startOf('month').add(counter,'days').format('dddd');
				if(day == "Monday"){
					var laborDay = moment(`${year}-09`).startOf('month').add(counter,'days').format('YYYY-MM-DD');
					holidays.push(moment(laborDay,"YYYY-MM-DD").format("YYYY-MM-DD"), moment(laborDay,"YYYY-MM-DD").format("YYYY-MM-DD"));
					holidays.push(moment(laborDay,"YYYY-MM-DD").subtract(1,'days').format("YYYY-MM-DD"),moment(laborDay,"YYYY-MM-DD").subtract(1,'days').format("YYYY-MM-DD"));
					holidays.push(moment(laborDay,"YYYY-MM-DD").subtract(2,'days').format("YYYY-MM-DD"),moment(laborDay,"YYYY-MM-DD").subtract(2,'days').format("YYYY-MM-DD"));
				}
				counter++
			}
		}

	var Thanksgiving = moment(`${year}-11-01`,"YYYY-MM-DD").startOf('month').day("Thursday").add(3,'weeks').format("YYYY-MM-DD");
		holidays.push(moment(Thanksgiving,"YYYY-MM-DD").subtract(1,'days').format("YYYY-MM-DD"));
		holidays.push(Thanksgiving, Thanksgiving);
		holidays.push(moment(Thanksgiving,"YYYY-MM-DD").add(1,'days').format("YYYY-MM-DD"),moment(Thanksgiving,"YYYY-MM-DD").add(1,'days').format("YYYY-MM-DD"));
		holidays.push(moment(Thanksgiving,"YYYY-MM-DD").add(2,'days').format("YYYY-MM-DD"),moment(Thanksgiving,"YYYY-MM-DD").add(2,'days').format("YYYY-MM-DD"));
		holidays.push(moment(Thanksgiving,"YYYY-MM-DD").add(3,'days').format("YYYY-MM-DD"),moment(Thanksgiving,"YYYY-MM-DD").add(3,'days').format("YYYY-MM-DD"));

	// Christmas
	var christmas = `${year}-12-25`;
		holidays.push(christmas, christmas);
		if(moment(christmas, "YYYY-MM-DD").format("dddd") == "Friday"){
			holidays.push(`${year}-12-24`, `${year}-12-26`, `${year}-12-26`, `${year}-12-27`, `${year}-12-27`);
		} else if(moment(christmas, "YYYY-MM-DD").format("dddd") == "Saturday"){
			holidays.push(`${year}-12-24`, `${year}-12-26`, `${year}-12-26`);
		} else if(moment(christmas, "YYYY-MM-DD").format("dddd") == "Sunday"){
			holidays.push(`${year}-12-23`,`${year}-12-24`, `${year}-12-24`, `${year}-12-26`, `${year}-12-26`);
		} else if(moment(christmas, "YYYY-MM-DD").format("dddd") == "Monday"){
			holidays.push(`${year}-12-22`,`${year}-12-23`, `${year}-12-23`, `${year}-12-24`, `${year}-12-24`);
		} else {
			holidays.push(`${year}-12-24`);
		}

	console.log(holidays);
};



for(var i=0; i<weekdays.length; i++){
	holidays.forEach(function(date){
		if(weekdays[i] == date){
			weekdays.splice(weekdays[i], 1);
		}
	});
}



























// returns an object {day-of-week: number of occurences}
var weekdays = function(){
	var mondays = [];
	var tuesdays = [];
	var wednesdays = [];
	var thursdays = [];
	var fridays = [];
	var saturdays = [];
	var sundays = [];

	var month = String(moment().month() + 1);
	var year = String(moment().year());
	var day = moment().day() + 1;
	
	var lengthOfMonth = moment(month).daysInMonth();

	var object = {};

	for(var d=1; d<lengthOfMonth+1; d++){
		var date = moment(year+"-"+month+"-"+d);
			if(date.format("dddd") == "Monday"){
					mondays.push(date.format("YYYY-MM-DD"));
					object["Mondays"] = mondays;
			}
			if(date.format("dddd") == "Tuesday"){
					tuesdays.push(date.format("YYYY-MM-DD"));
					object["Tuesdays"] = tuesdays;
			}
			if(date.format("dddd") == "Wednesday"){
					wednesdays.push(date.format("YYYY-MM-DD"));
					object["Wednesdays"] = wednesdays;
			}
			if(date.format("dddd") == "Thursday"){
					thursdays.push(date.format("YYYY-MM-DD"));
					object["Thursdays"] = thursdays;
			}
			if(date.format("dddd") == "Friday"){
					fridays.push(date.format("YYYY-MM-DD"));
					object["Fridays"] = fridays;
			}
			if(date.format("dddd") == "Saturday"){
					saturdays.push(date.format("YYYY-MM-DD"));
					object["Saturdays"] = saturdays;
			}
			if(date.format("dddd") == "Sunday"){
					sundays.push(date.format("YYYY-MM-DD"));
					object["Sundays"] = sundays;
			}
	}

	// return array;
	return object;
};

// returns an object {day-of-week: number of occurences}
var weekdays = function(){
	var mondays = [];
	var tuesdays = [];
	var wednesdays = [];
	var thursdays = [];
	var fridays = [];
	var saturdays = [];
	var sundays = [];

	var month = String(moment().month() + 1);
	var year = String(moment().year());
	var day = moment().day() + 1;
	
	var lengthOfMonth = moment(month).daysInMonth();

	var object = {};

	for(var d=1; d<lengthOfMonth+1; d++){
		var date = moment(year+"-"+month+"-"+d);
			if(date.format("dddd") == "Monday"){
					mondays.push(date.format("YYYY-MM-DD"));
					object["Mondays"] = mondays;
			}
			if(date.format("dddd") == "Tuesday"){
					tuesdays.push(date.format("YYYY-MM-DD"));
					object["Tuesdays"] = tuesdays;
			}
			if(date.format("dddd") == "Wednesday"){
					wednesdays.push(date.format("YYYY-MM-DD"));
					object["Wednesdays"] = wednesdays;
			}
			if(date.format("dddd") == "Thursday"){
					thursdays.push(date.format("YYYY-MM-DD"));
					object["Thursdays"] = thursdays;
			}
			if(date.format("dddd") == "Friday"){
					fridays.push(date.format("YYYY-MM-DD"));
					object["Fridays"] = fridays;
			}
			if(date.format("dddd") == "Saturday"){
					saturdays.push(date.format("YYYY-MM-DD"));
					object["Saturdays"] = saturdays;
			}
			if(date.format("dddd") == "Sunday"){
					sundays.push(date.format("YYYY-MM-DD"));
					object["Sundays"] = sundays;
			}
	}

	// return array;
	return object;
};

