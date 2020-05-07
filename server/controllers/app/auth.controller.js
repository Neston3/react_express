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

/*login user*/
exports.login_user = function (request, res) {

    let sql = 'SELECT * FROM users where email =  ?';
    connection.query(sql, [request.body.email], function (err, result) {
        if (err) {
            res.send('failed');
            return false;
        }else{
            if (result.length !== 0){

                if(bcrypt.compareSync(request.body.password, result[0].password)) {
                     /*password match*/
                    res.send('success_login');
                } else {
                    /*password no match*/
                    res.send('failed_login');
                }

            }else{
                res.send('user_not_found')
            }
            return false;
        }
    });
};
