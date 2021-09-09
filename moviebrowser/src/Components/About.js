import Hero from "./Hero";
import Body from "./Body";

const AboutView = () => {
    return(
    <>
        <Hero text = "About us"/>
        <Body text = "An app made with React.js . Fetches a list of films using the MovieDB Search API." />
    </>
    )
  }

  export default AboutView;