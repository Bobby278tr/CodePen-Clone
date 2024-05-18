import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Home, NewProject } from "./Container";
import { auth, db } from "./config/firebase.config";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { Spinner } from "./Components";
import { useDispatch } from "react-redux";
import { SET_USER } from './context/actions/userActions'
// import {} from 'react-router-dom'

const App = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((userCred) => {
      if (userCred) {
        console.log(userCred?.providerData[0]);
        setDoc(doc(db, "users", userCred?.uid), userCred?.providerData[0]).then(
          () => {
            // dispact the action to redux store
            dispatch(SET_USER(userCred?.providerData[0]))
            // navigate("../home/projects")
          }
        );
      } else {
        // navigate("/home/auth");
      }
      
      const intervalId = setInterval(() => {
        setIsLoading(false);
      }, 2000);
  
      return () => {
        clearInterval(intervalId);
      };

    });

    //clean up the listerner event
    return () => unSubscribe();

    // eslint-disable-next-line
  }, [dispatch, navigate])

  return (
    <>
      {isLoading ? (
        <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
          <Spinner/>
        </div>
      ) : (
        <div className="w-screen h-screen flex items-start justify-start overflow-hidden">
          <Routes>
            <Route path="/home/*" element={<Home />} />
            <Route path="/newProject" element={<NewProject />} />

            {/* if the routes are not matching  */}
            <Route path="*" element={<Navigate to={"/home/"} />} />
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;
