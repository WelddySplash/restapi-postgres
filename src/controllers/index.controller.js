//base de datos
const { Pool } = require('pg');//manera de conectarnos

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '12345',
    database: 'firstapi',
    port: '5432'
});


//archivo de las funciones
const getUsers = async (req, res) => {
    const response = await pool.query('select * from users');
    res.status(200).json(response.rows);
};

const createUser = async (req, res) => {

    const {name, email} = req.body;
    const response = await pool.query('insert into users (name, email) values ($1, $2)', [name, email]);
    console.log(response);
    res.json({
        message: 'User Added Succesfuly',
        body: {
            user: {name, email}
        }
    })

};

const getUserById = async (req, res) => {
    const idUser = req.params.id;
    const response = await pool.query("select * from users where id = $1", [idUser]);
    res.json(response.rows);
};

const deleteUser = async (req, res) => {
    const idUser = req.params.id;
    const response = await pool.query("delete from users where id = $1", [idUser]);
    console.log(response);
    res.json('User'+idUser+'deleted successfuly');
};

const updateUser = async (req, res) => {
    const idUser = req.params.id;
    const {name, email} = req.body;
    const response = await pool.query("update users set name = $1, email = $2 where id = $3", [name,email,idUser]);
    console.log(response);
    res.json('Update successfuly');
};

module.exports = {
    getUsers, 
    createUser,
    getUserById,
    deleteUser,
    updateUser
}