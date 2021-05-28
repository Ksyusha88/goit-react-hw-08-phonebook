import { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../Components/Form';
import ContactList from '../Components/ContactList';
import ContactFilter from '../Components/ContactFilter';
import contactsOperetions from '../redux/contacts/operations';
import Container from '../Components/Container';

const barStyles = {
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: 20,
  };

class ContactsView extends Component{
    componentDidMount() {
        this.props.fetchContact();
}

render(){
    return(
        <Container>
          <h1>Phonebook</h1> 
          <Form onAddContact = {this.addContact}
         />
         <ContactFilter/>
          <ContactList/>
          </Container>
        );
      }
    };

    const mapDispatchToProps = dispatch => ({
        fetchContact: () => dispatch(contactsOperetions.fetchContact()),
      });

      export default connect(null,mapDispatchToProps)(ContactsView);