import { ReactComponent as Logo } from '../img/logo.svg';
import { Container } from 'react-bootstrap';

function Home() {
  return (
    <>
      <Container>
        {/* <img src={Logo} className="App-logo" alt="logo" width="100%" height="100%"/> */}
        <Logo className="App-logo" alt="logo"/>
        <p>
          Hello World, <code>npm install rest</code>
        </p>
        <a
          className="App-link"
          href="https://www.nonviolentcommunication.com/wp-content/uploads/2019/07/aboutnvc_feelingsneeds.gif"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Empathy
        </a>
      </Container>
    </>
  );
}

export default Home;
