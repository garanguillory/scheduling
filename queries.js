
var knex = require('./db/knex');

function Schedules() {
    return knex('schedules');
}

function Users() {
    return knex('employees');
}

function Conflicts() {
    return knex('conflicts');
}

function OnCallSchedule() {
    return knex('on_call');
}

module.exports = {

    Users: function() {
        return Users();
    },

    Schedules: function() {
        return Schedules();
    },

    CheckEmail: function(email) {
        return Users().where('email', email);
    },

    NewCompany: function(company){
        return knex.insert({'company': company}).into('schedules').returning('id');
    },

    NewUser: function(data) {
        return Users().insert(data)
        .returning('*');
    },

    getCompany: function(company_id){
        return Schedules().where('id', company_id).returning('id');
    },

    getEmployeesByCompany: function(company_id){
        return Users().where('company_id', company_id);
    },

    getEmployeesAndConflicts: function(company_id){
        return knex.select('employees.id', 'employees.first_name', 'employees.last_name', 'employees.email', 'employees.phone', 'employees.admin', 'employees.company_id', 'employees.picture', 'conflicts.id as conflict_id', 'conflicts.employee_id', 'conflicts.date')
                   .from('employees')
                   .leftJoin('conflicts', 'employees.id', 'conflicts.employee_id')
                   .where('employees.company_id', company_id)
                   .returning('*');
    },
    getEmployeeAndConflicts: function(employee_id){
        return knex.select('employees.id', 'employees.first_name', 'employees.last_name', 'employees.email', 'employees.phone', 'employees.admin', 'employees.company_id', 'employees.picture', 'conflicts.id as conflict_id', 'conflicts.employee_id', 'conflicts.date')
                   .from('employees')
                   .leftJoin('conflicts', 'employees.id', 'conflicts.employee_id')
                   .where('employees.id', employee_id)
                   .returning('*');
    },

    deleteEmployee: function(employee_id){
        return Users().where('id', employee_id).delete();
    },

    editEmployee: function(employee){
        return Users().update(employee).where('id', employee.id);
    },

    getEmployee: function(id){
        return Users().where('id',id);
    },

    getConflicts: function(employee_id){
        return Conflicts().where('employee_id',employee_id);
    },

    deleteConflict: function(conflict_id){
        return Conflicts().where('id', conflict_id).delete();
    },

    deleteConflicts: function(employee_id){
        return Conflicts().where('employee_id', employee_id).delete();
    },

    addConflict: function(employee_id, data){
        return Conflicts().insert(data).where('id', employee_id);
    },

    updateConflict: function(employee_id, conflict){
        return Conflicts().update(conflict).where('employee_id', employee_id);
    },
// + + + + + + + + + + + + + + + + + + + + + + + + + + +
    addOnCallDate: function(data){
        return OnCallSchedule().insert(data);
    },
// + + + + + + + + + + + + + + + + + + + + + + + + + + +

    getOnCallDates: function(company_id){
        return OnCallSchedule().where('company_id', company_id);
    },

    getOnCallDatesByEmployee: function(employee_id){
      return OnCallSchedule().where('employee_id', employee_id);
    },

    deleteSchedule: function(company_id){
        return OnCallSchedule().where('company_id', company_id).delete();
    }

};

