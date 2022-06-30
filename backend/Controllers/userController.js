const express = require('express')
const pool = require('../database/db_connect') //connect into database
const bcrypt = require('bcryptjs')

//create users 

module.exports.createUsers = (req,res) =>{
    const {first_name,last_name,email,mobile_no,address,password,confirm_password} = req.body;

    //hash password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password,salt);

    //setting the user table 
    pool.query(
        'INSERT INTO users(first_name,last_name,email,mobile_no,address,password,confirm_password) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING id',
        [first_name,last_name,email,mobile_no,address,password,confirm_password], (error,results) => {
            if(error){
                throw error;
            }else{
                res.status(201).send(`user with id ${results.rows[0].id} has been save successfully`)
            }
        }
    )

}

//get users from the table 
module.exports.getAllUsers = (req,res)=>{
    pool.query('SELECT * FROM users',(error,results)=>{
        if(error){
            throw error
        }else{
            res.status(200).json(results.rows)
        }
    })
}