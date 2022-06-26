import { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { FirebaseContext } from "../context/firebase";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Signin = () => {
  //TODO: useNavigate goes here
  const navigate = useNavigate();
  const location = useLocation();

  const redirectUrl = location.state?.path || "/";

  const { app } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [messageUsername, setMessageUsername] = useState("");

  const isInvalid = password === "" || emailAddress === "";

  const handleBur = (e) => {
    const { value } = e.target;
    console.log(value);
    if (value == "") {
      setMessageUsername("Please enter a valid email or phone number.");
    }
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    //TODO: Firebase auth goes here
    const authentication = getAuth();
    signInWithEmailAndPassword(authentication, emailAddress, password)
      .then((response) => {
        navigate(redirectUrl, { replace: true });
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
      })
      .then((response) => {
        navigate(ROUTES.BROWSE);
      })

      .catch((err) => {
        setEmailAddress("");
        setPassword("");
        setError(err.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error data-testid="error">{error}</Form.Error>}

          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
              onBlur={handleBur}
            />
            {messageUsername && (
              <Form.TextSmall style={{ marginTop: "-13px", color: "#e87c03" }}>
                Please enter a valid email or phone number.
              </Form.TextSmall>
            )}
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
              onBlur={handleBur}
            />
            {messageUsername && (
              <Form.TextSmall style={{ marginTop: "-13px", color: "#e87c03" }}>
                Your password must contain between 9 and 60 characters.
              </Form.TextSmall>
            )}
            <Form.Submit
              disabled={isInvalid}
              type="submit"
              data-testid="sign-in"
            >
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};
export default Signin;
