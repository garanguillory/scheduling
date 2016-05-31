
var calendar_2016 = new Map();

var January_2016 = 
	[ 
		{ day: 1, name: 'Friday', date: '2016-01-01', weekend: true, holiday: true },
	  { day: 2, name: 'Saturday', date: '2016-01-02', weekend: true, holiday: false },
	  { day: 3, name: 'Sunday', date: '2016-01-03', weekend: true, holiday: false },
	  { day: 4, name: 'Monday', date: '2016-01-04', weekend: false, holiday: false },
	  { day: 5, name: 'Tuesday', date: '2016-01-05', weekend: false, holiday: false },
	  { day: 6, name: 'Wednesday', date: '2016-01-06', weekend: false, holiday: false },
	  { day: 7, name: 'Thursday', date: '2016-01-07', weekend: false, holiday: false },
	  { day: 8, name: 'Friday', date: '2016-01-08', weekend: true, holiday: false },
	  { day: 9, name: 'Saturday', date: '2016-01-09', weekend: true, holiday: false },
	  { day: 10, name: 'Sunday', date: '2016-01-10', weekend: true, holiday: false },
	  { day: 11, name: 'Monday', date: '2016-01-11', weekend: false, holiday: false },
	  { day: 12, name: 'Tuesday', date: '2016-01-12', weekend: false, holiday: false },
	  { day: 13, name: 'Wednesday', date: '2016-01-13', weekend: false, holiday: false },
	  { day: 14, name: 'Thursday', date: '2016-01-14', weekend: false, holiday: false },
	  { day: 15, name: 'Friday', date: '2016-01-15', weekend: true, holiday: false },
	  { day: 16, name: 'Saturday', date: '2016-01-16', weekend: true, holiday: false },
	  { day: 17, name: 'Sunday', date: '2016-01-17', weekend: true, holiday: false },
	  { day: 18, name: 'Monday', date: '2016-01-18', weekend: false, holiday: false },
	  { day: 19, name: 'Tuesday', date: '2016-01-19', weekend: false, holiday: false },
	  { day: 20, name: 'Wednesday', date: '2016-01-20', weekend: false, holiday: false },
	  { day: 21, name: 'Thursday', date: '2016-01-21', weekend: false, holiday: false },
	  { day: 22, name: 'Friday', date: '2016-01-22', weekend: true, holiday: false },
	  { day: 23, name: 'Saturday', date: '2016-01-23', weekend: true, holiday: false },
	  { day: 24, name: 'Sunday', date: '2016-01-24', weekend: true, holiday: false },
	  { day: 25, name: 'Monday', date: '2016-01-25', weekend: false, holiday: false },
	  { day: 26, name: 'Tuesday', date: '2016-01-26', weekend: false, holiday: false },
	  { day: 27, name: 'Wednesday', date: '2016-01-27', weekend: false, holiday: false },
	  { day: 28, name: 'Thursday', date: '2016-01-28', weekend: false, holiday: false },
	  { day: 29, name: 'Friday', date: '2016-01-29', weekend: true, holiday: false },
	  { day: 30, name: 'Saturday', date: '2016-01-30', weekend: true, holiday: false },
	  { day: 31, name: 'Sunday', date: '2016-01-31', weekend: true, holiday: false }
	];

var February_2016 = 
	[
		{ day: 1, name: 'Monday', date: '2016-02-01', weekend: false, holiday: false },
	  { day: 2, name: 'Tuesday', date: '2016-02-02', weekend: false, holiday: false },
	  { day: 3, name: 'Wednesday', date: '2016-02-03', weekend: false, holiday: false },
	  { day: 4, name: 'Thursday', date: '2016-02-04', weekend: false, holiday: false },
	  { day: 5, name: 'Friday', date: '2016-02-05', weekend: true, holiday: false },
	  { day: 6, name: 'Saturday', date: '2016-02-06', weekend: true, holiday: false },
	  { day: 7, name: 'Sunday', date: '2016-02-07', weekend: true, holiday: false },
	  { day: 8, name: 'Monday', date: '2016-02-08', weekend: false, holiday: false },
	  { day: 9, name: 'Tuesday', date: '2016-02-09', weekend: false, holiday: false },
	  { day: 10, name: 'Wednesday', date: '2016-02-10', weekend: false, holiday: false },
	  { day: 11, name: 'Thursday', date: '2016-02-11', weekend: false, holiday: false },
	  { day: 12, name: 'Friday', date: '2016-02-12', weekend: true, holiday: false },
	  { day: 13, name: 'Saturday', date: '2016-02-13', weekend: true, holiday: false },
	  { day: 14, name: 'Sunday', date: '2016-02-14', weekend: true, holiday: true },
	  { day: 15, name: 'Monday', date: '2016-02-15', weekend: false, holiday: false },
	  { day: 16, name: 'Tuesday', date: '2016-02-16', weekend: false, holiday: false },
	  { day: 17, name: 'Wednesday', date: '2016-02-17', weekend: false, holiday: false },
	  { day: 18, name: 'Thursday', date: '2016-02-18', weekend: false, holiday: false },
	  { day: 19, name: 'Friday', date: '2016-02-19', weekend: true, holiday: false },
	  { day: 20, name: 'Saturday', date: '2016-02-20', weekend: true, holiday: false },
	  { day: 21, name: 'Sunday', date: '2016-02-21', weekend: true, holiday: false },
	  { day: 22, name: 'Monday', date: '2016-02-22', weekend: false, holiday: false },
	  { day: 23, name: 'Tuesday', date: '2016-02-23', weekend: false, holiday: false },
	  { day: 24, name: 'Wednesday', date: '2016-02-24', weekend: false, holiday: false },
	  { day: 25, name: 'Thursday', date: '2016-02-25', weekend: false, holiday: false },
	  { day: 26, name: 'Friday', date: '2016-02-26', weekend: true, holiday: false },
	  { day: 27, name: 'Saturday', date: '2016-02-27', weekend: true, holiday: false },
	  { day: 28, name: 'Sunday', date: '2016-02-28', weekend: true, holiday: false },
	  { day: 29, name: 'Monday', date: '2016-02-29', weekend: false, holiday: false }
  ];

var March_2016 = 
	[
		{ day: 1, name: 'Tuesday', date: '2016-03-01', weekend: false, holiday: false },
	  { day: 2, name: 'Wednesday', date: '2016-03-02', weekend: false, holiday: false },
	  { day: 3, name: 'Thursday', date: '2016-03-03', weekend: false, holiday: false },
	  { day: 4, name: 'Friday', date: '2016-03-04', weekend: true, holiday: false },
	  { day: 5, name: 'Saturday', date: '2016-03-05', weekend: true, holiday: false },
	  { day: 6, name: 'Sunday', date: '2016-03-06', weekend: true, holiday: false },
	  { day: 7, name: 'Monday', date: '2016-03-07', weekend: false, holiday: false },
	  { day: 8, name: 'Tuesday', date: '2016-03-08', weekend: false, holiday: false },
	  { day: 9, name: 'Wednesday', date: '2016-03-09', weekend: false, holiday: false },
	  { day: 10, name: 'Thursday', date: '2016-03-10', weekend: false, holiday: false },
	  { day: 11, name: 'Friday', date: '2016-03-11', weekend: true, holiday: false },
	  { day: 12, name: 'Saturday', date: '2016-03-12', weekend: true, holiday: false },
	  { day: 13, name: 'Sunday', date: '2016-03-13', weekend: true, holiday: false },
	  { day: 14, name: 'Monday', date: '2016-03-14', weekend: false, holiday: false },
	  { day: 15, name: 'Tuesday', date: '2016-03-15', weekend: false, holiday: false },
	  { day: 16, name: 'Wednesday', date: '2016-03-16', weekend: false, holiday: false },
	  { day: 17, name: 'Thursday', date: '2016-03-17', weekend: false, holiday: true },
	  { day: 18, name: 'Friday', date: '2016-03-18', weekend: true, holiday: false },
	  { day: 19, name: 'Saturday', date: '2016-03-19', weekend: true, holiday: false },
	  { day: 20, name: 'Sunday', date: '2016-03-20', weekend: true, holiday: false },
	  { day: 21, name: 'Monday', date: '2016-03-21', weekend: false, holiday: false },
	  { day: 22, name: 'Tuesday', date: '2016-03-22', weekend: false, holiday: false },
	  { day: 23, name: 'Wednesday', date: '2016-03-23', weekend: false, holiday: false },
	  { day: 24, name: 'Thursday', date: '2016-03-24', weekend: false, holiday: false },
	  { day: 25, name: 'Friday', date: '2016-03-25', weekend: true, holiday: false },
	  { day: 26, name: 'Saturday', date: '2016-03-26', weekend: true, holiday: false },
	  { day: 27, name: 'Sunday', date: '2016-03-27', weekend: true, holiday: false },
	  { day: 28, name: 'Monday', date: '2016-03-28', weekend: false, holiday: false },
	  { day: 29, name: 'Tuesday', date: '2016-03-29', weekend: false, holiday: false },
	  { day: 30, name: 'Wednesday', date: '2016-03-30', weekend: false, holiday: false },
	  { day: 31, name: 'Thursday', date: '2016-03-31', weekend: false, holiday: false }
	];

var April_2016 = 
	[
		{ day: 1, name: 'Friday', date: '2016-04-01', weekend: true, holiday: false },
	  { day: 2, name: 'Saturday', date: '2016-04-02', weekend: true, holiday: false },
	  { day: 3, name: 'Sunday', date: '2016-04-03', weekend: true, holiday: false },
	  { day: 4, name: 'Monday', date: '2016-04-04', weekend: false, holiday: false },
	  { day: 5, name: 'Tuesday', date: '2016-04-05', weekend: false, holiday: false },
	  { day: 6, name: 'Wednesday', date: '2016-04-06', weekend: false, holiday: false },
	  { day: 7, name: 'Thursday', date: '2016-04-07', weekend: false, holiday: false },
	  { day: 8, name: 'Friday', date: '2016-04-08', weekend: true, holiday: false },
	  { day: 9, name: 'Saturday', date: '2016-04-09', weekend: true, holiday: false },
	  { day: 10, name: 'Sunday', date: '2016-04-10', weekend: true, holiday: false },
	  { day: 11, name: 'Monday', date: '2016-04-11', weekend: false, holiday: false },
	  { day: 12, name: 'Tuesday', date: '2016-04-12', weekend: false, holiday: false },
	  { day: 13, name: 'Wednesday', date: '2016-04-13', weekend: false, holiday: false },
	  { day: 14, name: 'Thursday', date: '2016-04-14', weekend: false, holiday: false },
	  { day: 15, name: 'Friday', date: '2016-04-15', weekend: true, holiday: false },
	  { day: 16, name: 'Saturday', date: '2016-04-16', weekend: true, holiday: false },
	  { day: 17, name: 'Sunday', date: '2016-04-17', weekend: true, holiday: true },
	  { day: 18, name: 'Monday', date: '2016-04-18', weekend: false, holiday: false },
	  { day: 19, name: 'Tuesday', date: '2016-04-19', weekend: false, holiday: false },
	  { day: 20, name: 'Wednesday', date: '2016-04-20', weekend: false, holiday: false },
	  { day: 21, name: 'Thursday', date: '2016-04-21', weekend: false, holiday: false },
	  { day: 22, name: 'Friday', date: '2016-04-22', weekend: true, holiday: false },
	  { day: 23, name: 'Saturday', date: '2016-04-23', weekend: true, holiday: false },
	  { day: 24, name: 'Sunday', date: '2016-04-24', weekend: true, holiday: false },
	  { day: 25, name: 'Monday', date: '2016-04-25', weekend: false, holiday: false },
	  { day: 26, name: 'Tuesday', date: '2016-04-26', weekend: false, holiday: false },
	  { day: 27, name: 'Wednesday', date: '2016-04-27', weekend: false, holiday: false },
	  { day: 28, name: 'Thursday', date: '2016-04-28', weekend: false, holiday: false },
	  { day: 29, name: 'Friday', date: '2016-04-29', weekend: true, holiday: false },
	  { day: 30, name: 'Saturday', date: '2016-04-30', weekend: true, holiday: false }
  ];

var May_2016 = 
	[
		{ day: 1, name: 'Sunday', date: '2016-05-01', weekend: true, holiday: false },
	  { day: 2, name: 'Monday', date: '2016-05-02', weekend: false, holiday: false },
	  { day: 3, name: 'Tuesday', date: '2016-05-03', weekend: false, holiday: false },
	  { day: 4, name: 'Wednesday', date: '2016-05-04', weekend: false, holiday: false },
	  { day: 5, name: 'Thursday', date: '2016-05-05', weekend: false, holiday: false },
	  { day: 6, name: 'Friday', date: '2016-05-06', weekend: true, holiday: false },
	  { day: 7, name: 'Saturday', date: '2016-05-07', weekend: true, holiday: false },
	  { day: 8, name: 'Sunday', date: '2016-05-08', weekend: true, holiday: false },
	  { day: 9, name: 'Monday', date: '2016-05-09', weekend: false, holiday: false },
	  { day: 10, name: 'Tuesday', date: '2016-05-10', weekend: false, holiday: false },
	  { day: 11, name: 'Wednesday', date: '2016-05-11', weekend: false, holiday: false },
	  { day: 12, name: 'Thursday', date: '2016-05-12', weekend: false, holiday: false },
	  { day: 13, name: 'Friday', date: '2016-05-13', weekend: true, holiday: false },
	  { day: 14, name: 'Saturday', date: '2016-05-14', weekend: true, holiday: false },
	  { day: 15, name: 'Sunday', date: '2016-05-15', weekend: true, holiday: false },
	  { day: 16, name: 'Monday', date: '2016-05-16', weekend: false, holiday: false },
	  { day: 17, name: 'Tuesday', date: '2016-05-17', weekend: false, holiday: true },
	  { day: 18, name: 'Wednesday', date: '2016-05-18', weekend: false, holiday: false },
	  { day: 19, name: 'Thursday', date: '2016-05-19', weekend: false, holiday: false },
	  { day: 20, name: 'Friday', date: '2016-05-20', weekend: true, holiday: false },
	  { day: 21, name: 'Saturday', date: '2016-05-21', weekend: true, holiday: false },
	  { day: 22, name: 'Sunday', date: '2016-05-22', weekend: true, holiday: false },
	  { day: 23, name: 'Monday', date: '2016-05-23', weekend: false, holiday: false },
	  { day: 24, name: 'Tuesday', date: '2016-05-24', weekend: false, holiday: false },
	  { day: 25, name: 'Wednesday', date: '2016-05-25', weekend: false, holiday: false },
	  { day: 26, name: 'Thursday', date: '2016-05-26', weekend: false, holiday: false },
	  { day: 27, name: 'Friday', date: '2016-05-27', weekend: true, holiday: false },
	  { day: 28, name: 'Saturday', date: '2016-05-28', weekend: true, holiday: false },
	  { day: 29, name: 'Sunday', date: '2016-05-29', weekend: true, holiday: false },
	  { day: 30, name: 'Monday', date: '2016-05-30', weekend: false, holiday: false },
	  { day: 31, name: 'Tuesday', date: '2016-05-31', weekend: false, holiday: false }
  ];

var June_2016 = 
	[
		{ day: 1, name: 'Wednesday', date: '2016-06-01', weekend: false, holiday: false },
	  { day: 2, name: 'Thursday', date: '2016-06-02', weekend: false, holiday: false },
	  { day: 3, name: 'Friday', date: '2016-06-03', weekend: true, holiday: false },
	  { day: 4, name: 'Saturday', date: '2016-06-04', weekend: true, holiday: false },
	  { day: 5, name: 'Sunday', date: '2016-06-05', weekend: true, holiday: false },
	  { day: 6, name: 'Monday', date: '2016-06-06', weekend: false, holiday: false },
	  { day: 7, name: 'Tuesday', date: '2016-06-07', weekend: false, holiday: false },
	  { day: 8, name: 'Wednesday', date: '2016-06-08', weekend: false, holiday: false },
	  { day: 9, name: 'Thursday', date: '2016-06-09', weekend: false, holiday: false },
	  { day: 10, name: 'Friday', date: '2016-06-10', weekend: true, holiday: false },
	  { day: 11, name: 'Saturday', date: '2016-06-11', weekend: true, holiday: false },
	  { day: 12, name: 'Sunday', date: '2016-06-12', weekend: true, holiday: false },
	  { day: 13, name: 'Monday', date: '2016-06-13', weekend: false, holiday: false },
	  { day: 14, name: 'Tuesday', date: '2016-06-14', weekend: false, holiday: false },
	  { day: 15, name: 'Wednesday', date: '2016-06-15', weekend: false, holiday: false },
	  { day: 16, name: 'Thursday', date: '2016-06-16', weekend: false, holiday: false },
	  { day: 17, name: 'Friday', date: '2016-06-17', weekend: true, holiday: true },
	  { day: 18, name: 'Saturday', date: '2016-06-18', weekend: true, holiday: false },
	  { day: 19, name: 'Sunday', date: '2016-06-19', weekend: true, holiday: false },
	  { day: 20, name: 'Monday', date: '2016-06-20', weekend: false, holiday: false },
	  { day: 21, name: 'Tuesday', date: '2016-06-21', weekend: false, holiday: false },
	  { day: 22, name: 'Wednesday', date: '2016-06-22', weekend: false, holiday: false },
	  { day: 23, name: 'Thursday', date: '2016-06-23', weekend: false, holiday: false },
	  { day: 24, name: 'Friday', date: '2016-06-24', weekend: true, holiday: false },
	  { day: 25, name: 'Saturday', date: '2016-06-25', weekend: true, holiday: false },
	  { day: 26, name: 'Sunday', date: '2016-06-26', weekend: true, holiday: false },
	  { day: 27, name: 'Monday', date: '2016-06-27', weekend: false, holiday: false },
	  { day: 28, name: 'Tuesday', date: '2016-06-28', weekend: false, holiday: false },
	  { day: 29, name: 'Wednesday', date: '2016-06-29', weekend: false, holiday: false },
	  { day: 30, name: 'Thursday', date: '2016-06-30', weekend: false, holiday: false }
  ];

var July_2016 = 
	[
		{ day: 1, name: 'Friday', date: '2016-07-01', weekend: true, holiday: false },
	  { day: 2, name: 'Saturday', date: '2016-07-02', weekend: true, holiday: false },
	  { day: 3, name: 'Sunday', date: '2016-07-03', weekend: true, holiday: false },
	  { day: 4, name: 'Monday', date: '2016-07-04', weekend: false, holiday: true },
	  { day: 5, name: 'Tuesday', date: '2016-07-05', weekend: false, holiday: false },
	  { day: 6, name: 'Wednesday', date: '2016-07-06', weekend: false, holiday: false },
	  { day: 7, name: 'Thursday', date: '2016-07-07', weekend: false, holiday: false },
	  { day: 8, name: 'Friday', date: '2016-07-08', weekend: true, holiday: false },
	  { day: 9, name: 'Saturday', date: '2016-07-09', weekend: true, holiday: false },
	  { day: 10, name: 'Sunday', date: '2016-07-10', weekend: true, holiday: false },
	  { day: 11, name: 'Monday', date: '2016-07-11', weekend: false, holiday: false },
	  { day: 12, name: 'Tuesday', date: '2016-07-12', weekend: false, holiday: false },
	  { day: 13, name: 'Wednesday', date: '2016-07-13', weekend: false, holiday: false },
	  { day: 14, name: 'Thursday', date: '2016-07-14', weekend: false, holiday: false },
	  { day: 15, name: 'Friday', date: '2016-07-15', weekend: true, holiday: false },
	  { day: 16, name: 'Saturday', date: '2016-07-16', weekend: true, holiday: false },
	  { day: 17, name: 'Sunday', date: '2016-07-17', weekend: true, holiday: true },
	  { day: 18, name: 'Monday', date: '2016-07-18', weekend: false, holiday: false },
	  { day: 19, name: 'Tuesday', date: '2016-07-19', weekend: false, holiday: false },
	  { day: 20, name: 'Wednesday', date: '2016-07-20', weekend: false, holiday: false },
	  { day: 21, name: 'Thursday', date: '2016-07-21', weekend: false, holiday: false },
	  { day: 22, name: 'Friday', date: '2016-07-22', weekend: true, holiday: false },
	  { day: 23, name: 'Saturday', date: '2016-07-23', weekend: true, holiday: false },
	  { day: 24, name: 'Sunday', date: '2016-07-24', weekend: true, holiday: false },
	  { day: 25, name: 'Monday', date: '2016-07-25', weekend: false, holiday: false },
	  { day: 26, name: 'Tuesday', date: '2016-07-26', weekend: false, holiday: false },
	  { day: 27, name: 'Wednesday', date: '2016-07-27', weekend: false, holiday: false },
	  { day: 28, name: 'Thursday', date: '2016-07-28', weekend: false, holiday: false },
	  { day: 29, name: 'Friday', date: '2016-07-29', weekend: true, holiday: false },
	  { day: 30, name: 'Saturday', date: '2016-07-30', weekend: true, holiday: false },
	  { day: 31, name: 'Sunday', date: '2016-07-30', weekend: true, holiday: false }
  ];

var August_2016 = 
	[
		{ day: 1, name: 'Monday', date: '2016-08-01', weekend: false, holiday: false },
	  { day: 2, name: 'Tuesday', date: '2016-08-02', weekend: false, holiday: false },
	  { day: 3, name: 'Wednesday', date: '2016-08-03', weekend: false, holiday: false },
	  { day: 4, name: 'Thursday', date: '2016-08-04', weekend: false, holiday: true },
	  { day: 5, name: 'Friday', date: '2016-08-05', weekend: true, holiday: false },
	  { day: 6, name: 'Saturday', date: '2016-08-06', weekend: true, holiday: false },
	  { day: 7, name: 'Sunday', date: '2016-08-07', weekend: true, holiday: false },
	  { day: 8, name: 'Monday', date: '2016-08-08', weekend: false, holiday: false },
	  { day: 9, name: 'Tuesday', date: '2016-08-09', weekend: false, holiday: false },
	  { day: 10, name: 'Wednesday', date: '2016-08-10', weekend: false, holiday: false },
	  { day: 11, name: 'Thursday', date: '2016-08-11', weekend: false, holiday: false },
	  { day: 12, name: 'Friday', date: '2016-08-12', weekend: true, holiday: false },
	  { day: 13, name: 'Saturday', date: '2016-08-13', weekend: true, holiday: false },
	  { day: 14, name: 'Sunday', date: '2016-08-14', weekend: true, holiday: false },
	  { day: 15, name: 'Monday', date: '2016-08-15', weekend: false, holiday: false },
	  { day: 16, name: 'Tuesday', date: '2016-08-16', weekend: false, holiday: false },
	  { day: 17, name: 'Wednesday', date: '2016-08-17', weekend: false, holiday: true },
	  { day: 18, name: 'Thursday', date: '2016-08-18', weekend: false, holiday: false },
	  { day: 19, name: 'Friday', date: '2016-08-19', weekend: true, holiday: false },
	  { day: 20, name: 'Saturday', date: '2016-08-20', weekend: true, holiday: false },
	  { day: 21, name: 'Sunday', date: '2016-08-21', weekend: true, holiday: false },
	  { day: 22, name: 'Monday', date: '2016-08-22', weekend: false, holiday: false },
	  { day: 23, name: 'Tuesday', date: '2016-08-23', weekend: false, holiday: false },
	  { day: 24, name: 'Wednesday', date: '2016-08-24', weekend: false, holiday: false },
	  { day: 25, name: 'Thursday', date: '2016-08-25', weekend: false, holiday: false },
	  { day: 26, name: 'Friday', date: '2016-08-26', weekend: true, holiday: false },
	  { day: 27, name: 'Saturday', date: '2016-08-27', weekend: true, holiday: false },
	  { day: 28, name: 'Sunday', date: '2016-08-28', weekend: true, holiday: false },
	  { day: 29, name: 'Monday', date: '2016-08-29', weekend: false, holiday: false },
	  { day: 30, name: 'Tuesday', date: '2016-08-30', weekend: false, holiday: false },
	  { day: 31, name: 'Wednesday', date: '2016-08-30', weekend: false, holiday: false }
  ];

var September_2016 = 
	[
		{ day: 1, name: 'Thursday', date: '2016-09-01', weekend: false, holiday: false },
	  { day: 2, name: 'Friday', date: '2016-09-02', weekend: true, holiday: false },
	  { day: 3, name: 'Saturday', date: '2016-09-03', weekend: true, holiday: false },
	  { day: 4, name: 'Sunday', date: '2016-09-04', weekend: true, holiday: false },
	  { day: 5, name: 'Monday', date: '2016-09-05', weekend: false, holiday: true },
	  { day: 6, name: 'Tuesday', date: '2016-09-06', weekend: false, holiday: false },
	  { day: 7, name: 'Wednesday', date: '2016-09-07', weekend: false, holiday: false },
	  { day: 8, name: 'Thursday', date: '2016-09-08', weekend: false, holiday: false },
	  { day: 9, name: 'Friday', date: '2016-09-09', weekend: true, holiday: false },
	  { day: 10, name: 'Saturday', date: '2016-09-10', weekend: true, holiday: false },
	  { day: 11, name: 'Sunday', date: '2016-09-11', weekend: true, holiday: false },
	  { day: 12, name: 'Monday', date: '2016-09-12', weekend: false, holiday: false },
	  { day: 13, name: 'Tuesday', date: '2016-09-13', weekend: false, holiday: false },
	  { day: 14, name: 'Wednesday', date: '2016-09-14', weekend: false, holiday: false },
	  { day: 15, name: 'Thursday', date: '2016-09-15', weekend: false, holiday: false },
	  { day: 16, name: 'Friday', date: '2016-09-16', weekend: true, holiday: false },
	  { day: 17, name: 'Saturday', date: '2016-09-17', weekend: true, holiday: true },
	  { day: 18, name: 'Sunday', date: '2016-09-18', weekend: true, holiday: false },
	  { day: 19, name: 'Monday', date: '2016-09-19', weekend: false, holiday: false },
	  { day: 20, name: 'Tuesday', date: '2016-09-20', weekend: false, holiday: false },
	  { day: 21, name: 'Wednesday', date: '2016-09-21', weekend: false, holiday: false },
	  { day: 22, name: 'Thursday', date: '2016-09-22', weekend: false, holiday: false },
	  { day: 23, name: 'Friday', date: '2016-09-23', weekend: true, holiday: false },
	  { day: 24, name: 'Saturday', date: '2016-09-24', weekend: true, holiday: false },
	  { day: 25, name: 'Sunday', date: '2016-09-25', weekend: true, holiday: false },
	  { day: 26, name: 'Monday', date: '2016-09-26', weekend: false, holiday: false },
	  { day: 27, name: 'Tuesday', date: '2016-09-27', weekend: false, holiday: false },
	  { day: 28, name: 'Wednesday', date: '2016-09-28', weekend: false, holiday: false },
	  { day: 29, name: 'Thursday', date: '2016-09-29', weekend: false, holiday: false },
	  { day: 30, name: 'Friday', date: '2016-09-30', weekend: true, holiday: false }
	];

var October_2016 = 
	[
		{ day: 1, name: 'Saturday', date: '2016-10-01', weekend: true, holiday: false },
	  { day: 2, name: 'Sunday', date: '2016-10-02', weekend: true, holiday: false },
	  { day: 3, name: 'Monday', date: '2016-10-03', weekend: false, holiday: false },
	  { day: 4, name: 'Tuesday', date: '2016-10-04', weekend: false, holiday: false },
	  { day: 5, name: 'Wednesday', date: '2016-10-05', weekend: false, holiday: false },
	  { day: 6, name: 'Thursday', date: '2016-10-06', weekend: false, holiday: false },
	  { day: 7, name: 'Friday', date: '2016-10-07', weekend: true, holiday: false },
	  { day: 8, name: 'Saturday', date: '2016-10-08', weekend: true, holiday: false },
	  { day: 9, name: 'Sunday', date: '2016-10-09', weekend: true, holiday: false },
	  { day: 10, name: 'Monday', date: '2016-10-10', weekend: false, holiday: false },
	  { day: 11, name: 'Tuesday', date: '2016-10-11', weekend: false, holiday: false },
	  { day: 12, name: 'Wednesday', date: '2016-10-12', weekend: false, holiday: false },
	  { day: 13, name: 'Thursday', date: '2016-10-13', weekend: false, holiday: false },
	  { day: 14, name: 'Friday', date: '2016-10-14', weekend: true, holiday: false },
	  { day: 15, name: 'Saturday', date: '2016-10-15', weekend: true, holiday: false },
	  { day: 16, name: 'Sunday', date: '2016-10-16', weekend: true, holiday: false },
	  { day: 17, name: 'Monday', date: '2016-10-17', weekend: false, holiday: true },
	  { day: 18, name: 'Tuesday', date: '2016-10-18', weekend: false, holiday: false },
	  { day: 19, name: 'Wednesday', date: '2016-10-19', weekend: false, holiday: false },
	  { day: 20, name: 'Thursday', date: '2016-10-20', weekend: false, holiday: false },
	  { day: 21, name: 'Friday', date: '2016-10-21', weekend: true, holiday: false },
	  { day: 22, name: 'Saturday', date: '2016-10-22', weekend: true, holiday: false },
	  { day: 23, name: 'Sunday', date: '2016-10-23', weekend: true, holiday: false },
	  { day: 24, name: 'Monday', date: '2016-10-24', weekend: false, holiday: false },
	  { day: 25, name: 'Tuesday', date: '2016-10-25', weekend: false, holiday: false },
	  { day: 26, name: 'Wednesday', date: '2016-10-26', weekend: false, holiday: false },
	  { day: 27, name: 'Thursday', date: '2016-10-27', weekend: false, holiday: false },
	  { day: 28, name: 'Friday', date: '2016-10-28', weekend: true, holiday: false },
	  { day: 29, name: 'Saturday', date: '2016-10-29', weekend: true, holiday: false },
	  { day: 30, name: 'Sunday', date: '2016-10-30', weekend: true, holiday: false },
	  { day: 31, name: 'Monday', date: '2016-10-30', weekend: false, holiday: false }
	];

var November_2016 = 
	[
		{ day: 1, name: 'Tuesday', date: '2016-10-01', weekend: false, holiday: false },
	  { day: 2, name: 'Wednesday', date: '2016-10-02', weekend: false, holiday: false },
	  { day: 3, name: 'Thursday', date: '2016-10-03', weekend: false, holiday: false },
	  { day: 4, name: 'Friday', date: '2016-10-04', weekend: true, holiday: false },
	  { day: 5, name: 'Saturday', date: '2016-10-05', weekend: true, holiday: false },
	  { day: 6, name: 'Sunday', date: '2016-10-06', weekend: true, holiday: false },
	  { day: 7, name: 'Monday', date: '2016-10-07', weekend: false, holiday: false },
	  { day: 8, name: 'Tuesday', date: '2016-10-08', weekend: false, holiday: false },
	  { day: 9, name: 'Wednesday', date: '2016-10-09', weekend: false, holiday: false },
	  { day: 10, name: 'Thursday', date: '2016-10-10', weekend: false, holiday: false },
	  { day: 11, name: 'Friday', date: '2016-10-11', weekend: true, holiday: false },
	  { day: 12, name: 'Saturday', date: '2016-10-12', weekend: true, holiday: false },
	  { day: 13, name: 'Sunday', date: '2016-10-13', weekend: true, holiday: false },
	  { day: 14, name: 'Monday', date: '2016-10-14', weekend: false, holiday: false },
	  { day: 15, name: 'Tuesday', date: '2016-10-15', weekend: false, holiday: false },
	  { day: 16, name: 'Wednesday', date: '2016-10-16', weekend: false, holiday: false },
	  { day: 17, name: 'Thursday', date: '2016-10-17', weekend: false, holiday: true },
	  { day: 18, name: 'Friday', date: '2016-10-18', weekend: true, holiday: false },
	  { day: 19, name: 'Saturday', date: '2016-10-19', weekend: true, holiday: false },
	  { day: 20, name: 'Sunday', date: '2016-10-20', weekend: true, holiday: false },
	  { day: 21, name: 'Monday', date: '2016-10-21', weekend: false, holiday: false },
	  { day: 22, name: 'Tuesday', date: '2016-10-22', weekend: false, holiday: false },
	  { day: 23, name: 'Wednesday', date: '2016-10-23', weekend: false, holiday: false },
	  { day: 24, name: 'Thursday', date: '2016-10-24', weekend: false, holiday: false },
	  { day: 25, name: 'Friday', date: '2016-10-25', weekend: true, holiday: false },
	  { day: 26, name: 'Saturday', date: '2016-10-26', weekend: true, holiday: false },
	  { day: 27, name: 'Sunday', date: '2016-10-27', weekend: true, holiday: false },
	  { day: 28, name: 'Monday', date: '2016-10-28', weekend: false, holiday: false },
	  { day: 29, name: 'Tuesday', date: '2016-10-29', weekend: false, holiday: false },
	  { day: 30, name: 'Wednesday', date: '2016-10-30', weekend: false, holiday: false }
  ];

var December_2016 = 
	[
		{ day: 1, name: 'Thursday', date: '2016-10-01', weekend: false, holiday: false },
	  { day: 2, name: 'Friday', date: '2016-10-02', weekend: true, holiday: false },
	  { day: 3, name: 'Saturday', date: '2016-10-03', weekend: true, holiday: false },
	  { day: 4, name: 'Sunday', date: '2016-10-04', weekend: true, holiday: false },
	  { day: 5, name: 'Monday', date: '2016-10-05', weekend: false, holiday: false },
	  { day: 6, name: 'Tuesday', date: '2016-10-06', weekend: false, holiday: false },
	  { day: 7, name: 'Wednesday', date: '2016-10-07', weekend: false, holiday: false },
	  { day: 8, name: 'Thursday', date: '2016-10-08', weekend: false, holiday: false },
	  { day: 9, name: 'Friday', date: '2016-10-09', weekend: true, holiday: false },
	  { day: 10, name: 'Saturday', date: '2016-10-10', weekend: true, holiday: false },
	  { day: 11, name: 'Sunday', date: '2016-10-11', weekend: true, holiday: false },
	  { day: 12, name: 'Monday', date: '2016-10-12', weekend: false, holiday: false },
	  { day: 13, name: 'Tuesday', date: '2016-10-13', weekend: false, holiday: false },
	  { day: 14, name: 'Wednesday', date: '2016-10-14', weekend: false, holiday: false },
	  { day: 15, name: 'Thursday', date: '2016-10-15', weekend: false, holiday: false },
	  { day: 16, name: 'Friday', date: '2016-10-16', weekend: true, holiday: false },
	  { day: 17, name: 'Saturday', date: '2016-10-17', weekend: true, holiday: true },
	  { day: 18, name: 'Sunday', date: '2016-10-18', weekend: true, holiday: false },
	  { day: 19, name: 'Monday', date: '2016-10-19', weekend: false, holiday: false },
	  { day: 20, name: 'Tuesday', date: '2016-10-20', weekend: false, holiday: false },
	  { day: 21, name: 'Wednesday', date: '2016-10-21', weekend: false, holiday: false },
	  { day: 22, name: 'Thursday', date: '2016-10-22', weekend: false, holiday: false },
	  { day: 23, name: 'Friday', date: '2016-10-23', weekend: true, holiday: false },
	  { day: 24, name: 'Saturday', date: '2016-10-24', weekend: true, holiday: false },
	  { day: 25, name: 'Sunday', date: '2016-10-25', weekend: true, holiday: false },
	  { day: 26, name: 'Monday', date: '2016-10-26', weekend: false, holiday: false },
	  { day: 27, name: 'Tuesday', date: '2016-10-27', weekend: false, holiday: false },
	  { day: 28, name: 'Wednesday', date: '2016-10-28', weekend: false, holiday: false },
	  { day: 29, name: 'Thursday', date: '2016-10-29', weekend: false, holiday: false },
	  { day: 30, name: 'Friday', date: '2016-10-30', weekend: true, holiday: false },
	  { day: 31, name: 'Saturday', date: '2016-10-30', weekend: true, holiday: false }
	];


calendar_2016.set('January', January_2016);
calendar_2016.set('February', February_2016);
calendar_2016.set('March', March_2016);
calendar_2016.set('April', April_2016);
calendar_2016.set('May', May_2016);
calendar_2016.set('June', June_2016);
calendar_2016.set('July', July_2016);
calendar_2016.set('August', August_2016);
calendar_2016.set('September', September_2016);
calendar_2016.set('October', October_2016);
calendar_2016.set('November', November_2016);
calendar_2016.set('December', December_2016);





// var calendar_2016 = new Map();

// var December_2016 = 
// 	[
// 		{ day: 1, name: 'Thursday', date: '2016-10-01', weekend: true, holiday: false },
// 	  { day: 2, name: 'Friday', date: '2016-10-02', weekend: true, holiday: false },
// 	  { day: 3, name: 'Saturday', date: '2016-10-03', weekend: false, holiday: false },
// 	  { day: 4, name: 'Sunday', date: '2016-10-04', weekend: false, holiday: false },
// 	  { day: 5, name: 'Monday', date: '2016-10-05', weekend: false, holiday: false },
// 	  { day: 6, name: 'Tuesday', date: '2016-10-06', weekend: false, holiday: false },
// 	  { day: 7, name: 'Wednesday', date: '2016-10-07', weekend: true, holiday: false },
// 	  { day: 8, name: 'Thursday', date: '2016-10-08', weekend: true, holiday: false },
// 	  { day: 9, name: 'Friday', date: '2016-10-09', weekend: true, holiday: false },
// 	  { day: 10, name: 'Saturday', date: '2016-10-10', weekend: false, holiday: false },
// 	  { day: 11, name: 'Sunday', date: '2016-10-11', weekend: false, holiday: false },
// 	  { day: 12, name: 'Monday', date: '2016-10-12', weekend: false, holiday: false },
// 	  { day: 13, name: 'Tuesday', date: '2016-10-13', weekend: false, holiday: false },
// 	  { day: 14, name: 'Wednesday', date: '2016-10-14', weekend: true, holiday: false },
// 	  { day: 15, name: 'Thursday', date: '2016-10-15', weekend: true, holiday: false },
// 	  { day: 16, name: 'Friday', date: '2016-10-16', weekend: true, holiday: false },
// 	  { day: 17, name: 'Saturday', date: '2016-10-17', weekend: false, holiday: true },
// 	  { day: 18, name: 'Sunday', date: '2016-10-18', weekend: false, holiday: false },
// 	  { day: 19, name: 'Monday', date: '2016-10-19', weekend: false, holiday: false },
// 	  { day: 20, name: 'Tuesday', date: '2016-10-20', weekend: false, holiday: false },
// 	  { day: 21, name: 'Wednesday', date: '2016-10-21', weekend: true, holiday: false },
// 	  { day: 22, name: 'Thursday', date: '2016-10-22', weekend: true, holiday: false },
// 	  { day: 23, name: 'Friday', date: '2016-10-23', weekend: true, holiday: false },
// 	  { day: 24, name: 'Saturday', date: '2016-10-24', weekend: false, holiday: false },
// 	  { day: 25, name: 'Sunday', date: '2016-10-25', weekend: false, holiday: false },
// 	  { day: 26, name: 'Monday', date: '2016-10-26', weekend: false, holiday: false },
// 	  { day: 27, name: 'Tuesday', date: '2016-10-27', weekend: false, holiday: false },
// 	  { day: 28, name: 'Wednesday', date: '2016-10-28', weekend: true, holiday: false },
// 	  { day: 29, name: 'Thursday', date: '2016-10-29', weekend: true, holiday: false },
// 	  { day: 30, name: 'Friday', date: '2016-10-30', weekend: true, holiday: false },
// 	  { day: 31, name: 'Saturday', date: '2016-10-30', weekend: false, holiday: false }
// 	];

// calendar_2016.set('December', December_2016);



// for(var i=0; i<calendar_2016.get('December').length; i++){	
// 	if(calendar_2016.get('December')[i].name == "Friday"){
// 			calendar_2016.get('December')[i].weekend = true;
// 	} else if(calendar_2016.get('December')[i].name == "Saturday"){
// 			calendar_2016.get('December')[i].weekend = true;
// 	}	else if(calendar_2016.get('December')[i].name == "Sunday"){
// 			calendar_2016.get('December')[i].weekend = true;
// 	}	else {
// 			calendar_2016.get('December')[i].weekend = false;
// 	}
	
// }

// calendar_2016.get('December');












