import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Home, NewProject } from "./Container";
import { auth, db } from "./config/firebase.config";
import { collection, doc, onSnapshot, orderBy, query, setDoc } from "firebase/firestore";
import { useState } from "react";
import { Spinner } from "./Components";
import { useDispatch } from "react-redux";
import { SET_USER } from './context/actions/userActions';
import { SET_PROJECTS } from "./context/actions/projectActions";

const App = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((userCred) => {
      if (userCred) {
        setDoc(doc(db, "users", userCred?.uid), userCred?.providerData[0]).then(
          () => {
            // dispact the action to redux store
            dispatch(SET_USER(userCred?.providerData[0]))
            navigate("../home/projects")
          }
        );
      } else {
        navigate("/home/auth");
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
  }, [])

  useEffect(() => {
    const projectQuery = query(
      collection(db, "Projects"),
      orderBy("id", "desc")
    )
    const unSubscribe = onSnapshot(projectQuery, (querySnaps => {
      const projectsList = querySnaps.docs.map(doc => doc.data())
      dispatch(SET_PROJECTS(projectsList))
    }))

    //clean up the listerner event
    return () => unSubscribe();
    
    // eslint-disable-next-line
  }, [])


  return (
    <>
      {isLoading ? (
        <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
          <Spinner />
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
