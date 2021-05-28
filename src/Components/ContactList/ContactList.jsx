import { connect } from 'react-redux';
import style from '../ContactList/ContactList.module.css';
import contactsOperetions from '../../redux/contacts/operations';
import contactsSelectors from '../../redux/contacts/selectors';

const ContactList = ({contacts, onDeleteContact}) => (
<ul className ={style.contactList}>
    {contacts.map(({name, id, number}) =>(
        <li key ={id} className = {style.contactItem}>
            <p className = {style.contactName}>{name}
                {': '}
                {number}
                </p>
                <button className ={style.deleteBtm} onClick ={() => onDeleteContact(id)}>Delete</button>
        </li>
    )

    )}
</ul>
)

// const getVisibleContacts =(allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//     return allContacts.filter(({name}) => 
//     name.toLowerCase().includes(normalizedFilter),
//     );
// };


const mapStateToProps = (state) => ({
    contacts:contactsSelectors.getVisibleContacts(state)
});

const mapDispatchToProps = dispatch => ({
    onDeleteContact:(id) => dispatch(contactsOperetions.deleteContact(id)),
})

export default connect(mapStateToProps,mapDispatchToProps)(ContactList);