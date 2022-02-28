import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import UserList from "./components/UserList";
import axios from "axios";
import { motion } from 'framer-motion';
import "./css/main.css";

function App() {

  const [listOfUser, setListOfUser] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      setListOfUser(response.data);
      console.table(response.data);
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
  }, []); //[] only fires one time when the component loads

  return (
    <div className="container bg-light">
        <motion.h1
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          whileHover={{ scale: 1.2 }}
          className="font-custom"
        >
          User Management System
        </motion.h1>

      {listOfUser ? (
        <UserList listOfUser={listOfUser} />       
        ) : (
          <Loading />
        )}

  </div>
  );
}
export default App;


//import React, { useEffect, useState } from "react";

// const App = () => {
//  const [data, setData] = useState([]); // where to store the returned data
//  const [error, setError] = useState(null); // where to store the coming errors
//  useEffect(() => {
//    function fetchData() {
//      // the function to fetch data from the api
//      fetch("https://hn.algolia.com/api/v1/search?query=redux")
//        .then(res => res.json()) // when the result comes back with success here is what to do
//        .then(res => setData(res.hits))
//        .catch(err => setError(err)); // if there is an error here what you have to do.
//    }

//    fetchData();
//  }, []);

//  return (
//    <div>
//      <ul>
//        {data.map(course => (
//          <li>
//            <a href={course.url}> {course.title}</a>
//          </li>
//        ))}
//      </ul>
//    </div>
//  );
// };
// export default App;

// const App = () => {
//   const [user, setUser] = useState();
//   const handleSubmit = e => {
//     e.preventDefault();
//     fetch("https://jsonplaceholder.typicode.com/users", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(user)
//     })
//       .then(res => res.json())
//       .then(res => console.log(res))
//       .catch(err => console.log(err));
//   };

//   const handleChange = e =>
//     setUser({ id: Date.now(), [e.target.name]: e.target.value });
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Person Name:
//           <input type="text" name="name" onChange={handleChange} />
//         </label>
//         <button type="submit">Add</button>
//       </form>
//     </div>
//   );
//  };
//  export default App;


// // Make a request for a user with a given ID
// axios.get('/user?ID=12345')
//  .then(function (response) {
//    // handle success
//    console.log(response);
//  })
//  .catch(function (error) {
//    // handle error
//    console.log(error);
//  })


// axios
//  .post("/user", {
//    firstName: "Fred",
//    lastName: "Flintstone"
//  })
//  .then(function(response) {
//    console.log(response);
//  })
//  .catch(function(error) {
//    console.log(error);
//  });


// const requestOne = axios.get("https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt");
// const requestTwo = axios.get(https://api.storyblok.com/v1/cdn/datasources/?token=wANpEQEsMYGOwLxwXQ76Ggtt");
// const requestThree = axios.get("https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt");

// axios
//  .all([requestOne, requestTwo, requestThree])
//  .then(axios.spread((firstResponse, secondResponse, thirdResponse) => {
//      console.log(firstResponse.data,secondResponse.data, thirdResponse.data);
//    })
//  )
//  .catch(errors => {
//    console.error(errors);
//  });