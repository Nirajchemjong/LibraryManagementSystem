import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/sign-up-sign-in/Login";
import Signup from "./pages/sign-up-sign-in/Signup";
import Home from "./pages/Home/Home";
import { ToastContainer } from "react-toastify";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { getUserAction } from "./pages/user/userAction";
import { auth } from "./config/firebase-config";
import { PrivateRoute } from "./components/private-route/PrivateRoute";
import Books from "./pages/book/Books";
import { BurrowHistory } from "./pages/burrow-history/BurrowHistory";
import Clients from "./pages/clients/Clients";
import { NewBook } from "./pages/book/NewBook";
import { EditBook } from "./pages/book/EditBook";
import { useEffect } from "react";
import { getAllBookAction } from "./pages/book/BookAction";
import { BookLanding } from "./pages/book/BookLanding";
import PublicSignUp from "./pages/sign-up-sign-in/PublicSignUp";
import { ResetPassword } from "./pages/sign-up-sign-in/ResetPassword";
function App() {
  const dispatch = useDispatch();
  onAuthStateChanged(auth, (user) => {
    user?.uid && dispatch(getUserAction(user?.uid));
  });
  useEffect(() => {
    dispatch(getAllBookAction());
  }, [dispatch]);
  return (
    <>
      <Routes>
        {/* Public routers  */}
        <Route
          path='/login'
          element={<Login />}
        ></Route>
        <Route
          path='/admin-signup'
          element={
            <PrivateRoute>
              <Signup />
            </PrivateRoute>
          }
        ></Route>

        <Route
          path='/'
          element={<Home />}
        ></Route>
        {/* private routers  */}
        <Route
          path='/dashboard'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path='*'
          element={
            <>
              <h1 className='m-5 text-danger text-center'>
                {" "}
                404 Page not found! stop entering whatever you like MF!
              </h1>
            </>
          }
        ></Route>

        {/* book routers  */}
        <Route
          path='/books'
          element={
            <PrivateRoute>
              <Books />
            </PrivateRoute>
          }
        />

        <Route
          path='new-book'
          element={
            <PrivateRoute>
              <NewBook />
            </PrivateRoute>
          }
        />
        {/* 
          //when clicking on book from hom  */}
        <Route
          path='book/:id'
          element={<BookLanding />}
        />
        <Route
          path='/history'
          element={
            <PrivateRoute>
              <BurrowHistory />
            </PrivateRoute>
          }
        />
        <Route
          path='/clients'
          element={
            <PrivateRoute>
              <Clients />
            </PrivateRoute>
          }
        />
        <Route
          path='/edit-book/:id'
          element={
            <PrivateRoute>
              <EditBook />
            </PrivateRoute>
          }
        />
        {/* //{" "}
      <div className=''>
        // <Button variant='primary'>Primary</Button>
        //{" "}
      </div> */}

        <Route
          path='/signup'
          element={<PublicSignUp />}
        />

        <Route
          path='/reset-password'
          element={<ResetPassword />}
        ></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
