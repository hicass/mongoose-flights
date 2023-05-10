const Ticket = require('../models/ticket');

module.exports = {
    newTicket
}

async function newTicket(req, res) {
    res.render('tickets/new');
}