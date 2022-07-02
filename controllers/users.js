import { v4 as uuid } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
  ///  console.log(`Users in the database: ${users}`);

    res.send(users);
}

export const createUser = (req, res) => {   
    const user = req.body;

    users.push({...user, id: uuid()});
    
    res.send(`User with the name ${user.firstName} added to the database.`);
};

export const getUser = (req, res) => {
    const { id }= req.params;
    const foundUser = users.find((user)=>user.id==id);
    res.send(foundUser);
};

export const deleteUser = (req, res) => { 
    const { id }= req.params;
//    console.log(`user with id ${req.params.id} has been deleted`);
    
    users = users.filter((user) => user.id !== id);
    res.send(`User with the id ${id} deleted from the database.`);
};

export const updateUser =  (req,res) => {
    const { id }=req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id === req.params.id);
    
    if(firstName)user.firstName = firstName;
    if(lastName) user.lastName= lastName;
    if(age) user.age =age;

    res.send(`User with the id ${id} has been updated`);
};