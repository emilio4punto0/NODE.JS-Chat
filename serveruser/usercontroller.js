
/** ESTO ESTA SIN TERMINAR PERO ERA LA GUIA A MITAD DE CAMINO
 * DEL CONTROL DE LA API DE USUARIO


app.get('/usuario', function(req, res) {
    res.json('get Usuario LOCAL!!!');
});

app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined) {

        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });

    } else {
        res.json({
            persona: body
        });
    }

});

app.put('/usuario/:id', function(req, res) {

    let id = req.params.id;

    res.json({
        id
    });
});

app.delete('/usuario', function(req, res) {
    res.json('delete Usuario');
});

module.exports = {
    usercontroller
}

*/