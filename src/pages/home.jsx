import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/faqs";
import { HeaderContainer } from "../containers/header";
import { Feature, OptForm } from "../components";
import { useEffect } from "react";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";
import { db } from "../lib/firebase.prod";
import { addMovies } from "../seed";

const Home = () => {
  useEffect(() => {
    // addMovies();
  }, []);

  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited flims, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />

            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
};
export default Home;
