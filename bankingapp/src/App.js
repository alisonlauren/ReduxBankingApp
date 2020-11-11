import './App.css';
import { Segment, Header, Grid, Container } from 'semantic-ui-react';
import Account from './components/Account'

function App() {
  return (
    <Container>
    <Segment vertical>
      <Header as ="h1" textAlign="center" >Smells Fargo</Header>
      <Grid columns="2">
        <Grid.Row>
          <Grid.Column>
          <Account title="Checking" id="checking" />
          </Grid.Column>
          <Grid.Column>
          <Account title="Saving" id="savings" />
          </Grid.Column>
        </Grid.Row>
      </Grid> 
    </Segment>
    </Container>
    


  );
}

export default App;