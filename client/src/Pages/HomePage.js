import axios from 'axios';
import React, { useEffect } from 'react';

const HomePage = () => {
    const getUserData = async () => {
      try {
        const res = await axios.post(
          'http://localhost:5000/api/v1/user/getUserData',
            {},
            {
                headers: {
                  Authorization: "Bearer" + localStorage.getItem("token"),
              }
          }
        );
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
        getUserData();
    }, []);
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    );
};

export default HomePage; 