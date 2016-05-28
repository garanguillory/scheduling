
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

module.exports = {
// + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + 
// log in to specific clinic/company 
// and check email address/password at the same time
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

    updateConflict: function(employee_id, conflict){
        return Conflicts().update(conflict).where('employee_id', employee_id);
    },

// + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + +
};


    // getDecksByUser: function(user_id) {
    //     return knex.select('users.id', 'decks.id', 'decks.name', 'decks.description', 'decks.image_url')
    //     					 .from('decks')
    //     					 .rightJoin('users', 'decks.user_id', 'users.id')
    //     					 .where('users.id', user_id);
    // },

//     getDeckInfo: function(deck_id){
//         return Decks().where('id', deck_id);
//     },

//     getCards: function(deck_id){
//         return Cards().where('deck_id', deck_id);
//     },

//     getDeck: function(deck_id) {
//         return knex.select('decks.id', 'decks.name', 'decks.description', 'decks.image_url', 'cards.id', 'cards.question', 'cards.question_image_url', 'cards.answer', 'cards.answer_image_url')
//         					 .from('decks')
//         					 .rightJoin('cards', 'decks.id', 'cards.deck_id')
//         					 .where('cards.deck_id', deck_id);
//     },

//     addDeck: function(deck){
//     	return Decks().insert(deck).returning('id');
//     },

//     addCard: function(card){
//     	return Cards().insert(card).returning('id');
//     },

//     updateDeck: function(newInfo, deck_id){
//         return Decks().update(newInfo).where('id', deck_id);
//     },

//     updateCards: function(newInfo, card_id){
//         return Cards().update(newInfo).where('id', card_id).returning('id');
//     },

//     deleteDeck: function(deck_id){
//         return Decks().where('id', deck_id).del();
//     },

//     deleteCard: function(card_id){
//         return Cards().where('id', card_id).del();
//     },

//     deleteCards: function(deck_id){
//         return Cards().where('deck_id', deck_id).del();
//     }

