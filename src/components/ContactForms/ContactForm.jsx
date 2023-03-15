import { LabelStyled } from './ContactFormStyled';
import { BottonStyled } from './ContactFormStyled';
import { addContact } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { contactSelector } from '../../redux/selectors';
import { Formik, Form, Field } from 'formik';

const initialValues = {
  name: '',
  number: '',
};
// console.log(initialValues);
const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactSelector);

  return (
    <Formik
      name="contact"
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        const { name, number } = values;

        const isNameInContacts = contacts.find(
          item => item.name.toLowerCase() === name.toLowerCase()
        );
        if (isNameInContacts) {
          alert('This name is already in your contact list');
          actions.resetForm();
          return;
        }
        dispatch(addContact({ name, number }));
        actions.resetForm();
      }}
    >
      <Form>
        <LabelStyled htmlFor="name">
          Name
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            style={{ margin: 10 + 'px' }}
          ></Field>
        </LabelStyled>
        <LabelStyled htmlFor="number">
          Number
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            style={{ margin: 10 + 'px' }}
          ></Field>
        </LabelStyled>
        <BottonStyled type="submit">Add contact</BottonStyled>
      </Form>
    </Formik>
    // </FormStyled>
  );
};
// console.log(initialValues);

export default ContactForm;
