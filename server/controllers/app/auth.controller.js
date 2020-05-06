const connection = require('./database_connection.js');
const bcrypt = require('bcrypt');
/*create user*/
exports.register_user = function (request, res) {
    let hashed_password = bcrypt.hashSync(request.body.password, 10);

    let sql = 'INSERT INTO users (first_name, last_name,email,password) VALUES (?,?,?,?)';
    connection.query(sql, [request.body.first_name, request.body.last_name, request.body.email, hashed_password], function (err, result) {
        if (err) {
            res.send('failed');
            return false;
        }else{
            res.send('success');
            return false;
        }
    });
};
