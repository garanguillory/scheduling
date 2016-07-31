# Employee Scheduling

Angular employee scheduling app that schedules a given company's employees according to their availability.

The scheduling algorithm takes into account:
	- all of the employees' scheduling conflicts
	- number of times each employee was scheduled in the prior time frame
	- number of times each employee has been scheduled for the defined time frame

Next, the algorithm makes 3 separate schedules (weekdays, weekends, and holidays), and displays them merged on the frontend's calendar view.

The algorithm reaches even distribution of shifts for weekdays, weekends, and holidays provided that the defined time frame includes a number of shifts larger than the number of employees. 



## Technologies Used:
Angular,
Express,
Node,
Postgresql,
Moment.js,
Knex,
Bootstrap,
Gulp



## To-Do:
1. Fix month drop down
1. Shuffle the order of the employees when scheduling (front-end)
1. Eliminate possibility of back-to-back shifts and days scheduled (front-end)
1. Eliminate possibility of double booking (server side)
1. Finish and style form validation
1. Toggle removal/addition of employee conflicts via calendar
1. Integrate Twilio:
	- text shift reminders the day before @ 6:00 PM
	- text shift reminders the day of at lunch 12:00 PM
	- last minute schedule change alerts
1. Weekly email reminders
1. Enable bulk upload of new employees (and bulk changes of company rosters)
