const {Pool} = require('pg');

const CONNECTION_STRING = process.env.DATABASE_URL || 'postgresql://postgres@localhost:5432/habitDB'
const SSL = process.env.NODE_ENV === 'production';

const tableObject = require('./tablelist');
const table = tableObject.list.engagement_types;

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
});

class Database {
    constructor() {

    }

    async connectDb () {
        try{
            await pool.connect()
        }
        catch(error) {
            console.log(`Could not connect to database ${error}...`)
         }
    }

    async readAllRows(){
        try{
            const results = await pool.query(`select * from ${table}`)
            return results.rows
        }
        catch(error) {
            console.log(`Could not retreive data from DB Engage Types ${error}...`)
            return [];
        }
       
    }

    async readOneClient(param, column, table ){
        try{
            const results = await pool.query(`select * from ${table} where ${column} = $1`, [param])
            return results.rows
        }
        catch(error) {
            console.log(error)
        }
    }

    async insertNewUser(param, table){
        try{
            await pool.query(`INSERT INTO ${table} (user_created, user_lastlogin, username, user_password, user_email) values ($1, $2, $3, $4, $5)`, ['2019-10-25', '2019-10-25', param.username, param.password, param.email])
            return true
        }
        catch(error) {
            console.log(`Could not insert data into Database ${error}`)
            return false
        }
    }

    async insertNewEmp(param, table){
        try{
            await pool.query(`INSERT INTO ${table} (emp_birthdate, emp_hiredate, emp_firstname, emp_lastname, emp_position, emp_cedula) values ($1, $2, $3, $4, $5, $6)`, [param.dob, param.hiredate, param.firstName, param.lastName, param.position, param.cedula])
            return true
        }
        catch(error) {
            console.log(`Could not insert data into Database ${error}`)
            return false
        }
    }

    async insertNewClient(param, table){
        try{
            await pool.query(`INSERT INTO ${table} (client_firstname, client_lastname, client_dob, client_gender, client_idcard, client_email, client_telephone, client_status, client_confirstname, client_conlastname, client_contelephone, client_conrelation, client_created_date, client_update_date, client_diagnosed) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)`, [param.firstName, param.lastName, param.dob, param.gender, param.cedula, param.status, param.email, param.telephone, param.contactFirstname, param.contactLastname, param.contactTelephone, param.contactRelation, param.createdDate, param.updatedDate, param.isDiagnosed])
            return true
        }
        catch(error) {
            console.log(`Could not insert data into Database ${error}`)
            return false
        }
    }

    async updateDb () {
        try{
            await pool.end()
        }
        catch(error) {
            console.log(error)
        }
    }


    async deleteByIdDb(id, table) {
        try{
            await pool.query(`DELETE FROM ${table} WHERE id = $1`, [id])
            return true
        }
        catch(error) {
            console.log(`Could not delete data from Database ${error}...`)
            return false
        }
    }

    async query () {
        try{
            await pool.end()
        }
        catch(error) {
            console.log(error)
        }
    }

    async endConnect () {
        try{
            await pool.end()
        }
        catch(error) {
            console.log(error)
        }
    }
}

module.exports = new Database();