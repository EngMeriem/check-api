import React from 'react';
import { motion } from 'framer-motion';

const UserList = ({ listOfUser }) => {
    return (

        <motion.div
          initial={{ x: "150vw", transition: { type:'spring', duration: 1 } }}
          animate={{ x: 0, transition: { type: "spring", duration: 2 } }} 
        >
          <table className='table table-hover table-bordered'>
            <thead className='thead-font'>
              <tr >
                <motion.th 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }} 
                  scope='col'
                >
                  Name
                </motion.th>
                <motion.th 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }} 
                  scope='col'
                >
                  User Name
                </motion.th>
                <motion.th 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }} 
                  scope='col'
                >
                  Email
                </motion.th>
                <motion.th 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }} 
                  scope='col'
                >
                  City
                </motion.th>
                <motion.th 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }} 
                  scope='col'
                >
                  Phone Number
                </motion.th>
                <motion.th 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }} 
                  scope='col'
                >
                  Website
                </motion.th>
              </tr>
            </thead>
            <tbody className='tbody-font'>
              {listOfUser.map((user)=>(
                <tr key={user.id}>
                  <th scope='row'>{user.name}</th>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.address.city}</td>
                  <td>{user.phone}</td>
                  <td><a href="/">{user.website}</a></td>
                </tr>
              ))}
              

            </tbody>
          </table>

        </motion.div>
            
);
};

export default UserList;