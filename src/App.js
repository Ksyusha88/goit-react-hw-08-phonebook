import { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import AppBar from './Components/AppBar';
import { authOperations } from './redux/auth';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import Container from './Components/Container';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterViews'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsViews'));



class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }

render (){

  return(
    <Container>
        <AppBar />
        <Suspense fallback={<p>Загружаем...</p>}>
        <Switch>
          <PublicRoute exact path="/" component={HomeView} />

          <PublicRoute
              path="/register"
              restricted
              redirectTo="/contacts"
              component={RegisterView}
            />
          <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={LoginView}
            />

          <PrivateRoute 
            path="/contacts"
            redirectTo="/login"
            component={ContactsView}
           />
        </Switch>
        </Suspense>
      </Container>
    );
  }
}



const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};


export default connect(null,mapDispatchToProps)(App);
