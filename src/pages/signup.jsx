import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { FirebaseContext } from "../context/firebase";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";
import { auth } from "../lib/firebase.prod";

const Signup = () => {
  //TODO: useNavigate goes here
  let navigate = useNavigate();

  const { app } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = firstName === "" || password === "" || emailAddress === "";

  const handleSignUp = (e) => {
    e.preventDefault();

    //TODO: Firebase goes here
    const authentication = getAuth();
    createUserWithEmailAndPassword(authentication, emailAddress, password)
      .then((response) => {
        navigate(ROUTES.BROWSE);
      })
      .catch((err) => {
        setEmailAddress("");
        setPassword("");
        setError(err.message);
      });
  };

  // useEffect(() => {
  //   handleSignUp();
  // }, []);

  // const registerWithEmailAndPassword = async (
  //   firstName,
  //   emailAddress,
  //   password
  // ) => {
  //   try {
  //     const res = await createUserWithEmailAndPassword(
  //       auth,
  //       emailAddress,
  //       password
  //     );
  //     const user = res.user;
  //     await addDoc(collection(db, "users"), {
  //       uid: user.uid,
  //       firstName,
  //       authProvider: "local",
  //       emailAddress,
  //     });
  //   } catch (err) {
  //     console.error(err);
  //     // alert(err.message);
  //     console.log(err.message);
  //   }
  // };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignUp}>
            <Form.Input
              placeholder="First name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />

            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>

            <Form.Text>
              Already a user? <Form.Link to="/signin">Sign in Now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA to ensure your're not a
              bot. Learn more.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};
export default Signup;
