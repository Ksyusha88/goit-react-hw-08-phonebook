import style from '../ContactFilter/ContactFilter.module.css';
import {filterContact} from '../../redux/contacts/actions';
import { connect } from 'react-redux';


const ContactFilter = ({value, onChange}) =>(
            <form className={style.form}>
                <label className={style.label_text}>
                Phone book search
                    <input className={style.form_input}
                    type = "text"
                    value = {value}
                    name="text"
                    onChange ={onChange}
                    />
                </label>
            </form>
            
);



const mapStateToProps = state => ({
    value: state.contacts.filter,
});


const mapDispatchToProps = dispatch => ({
    onChange: e => dispatch(filterContact(e.currentTarget.value)),
})


export default connect(mapStateToProps,mapDispatchToProps)(ContactFilter);

 