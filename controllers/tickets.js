const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    newTicket,
    create
}

async function newTicket(req, res) {
    const flight = await Flight.findById(req.params.id);
    res.render('tickets/new', {title:'Add Ticket', flight});
}

async function create(req, res) {
    req.body.flight = req.params.id;
    console.log(req.body);
    try {
        await Ticket.create(req.body);
    } catch (err) {
        console.log("This was what went wrong: ", err);
    }
    console.log()
    res.redirect(`/flights/${req.params.id}`);
}