async function user(req, res) {
    console.log(req.body.lat)
    console.log(req.body.lng)
    res.send('user');
}

async function report(req, res) {
    console.log(req.body.place_id);
    console.log(req.body.id);
    console.log(req.body.name);
    res.send('report')
}

module.exports = { user, report };