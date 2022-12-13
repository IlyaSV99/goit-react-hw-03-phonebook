import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

class ContactForm extends Component { 
  state = {
    name: '',
    number: '',
  }
  handleChangeInput = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value, });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  }
  reset = () => {
    this.setState({
      name: '',
      number: '',
    })
  }
  render() {
    const { name, number } = this.state;
    return (
    <div className={css.wrapper}>
      <form className={css.form} onSubmit={this.handleSubmit}>
              <label className={css.label}>
                  Name
                  <input
                    className={css.input}
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChangeInput}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                  />
              </label>
              <label className={css.label}>
                  Number
                  <input
                    className={css.input}
                    type="tel"
                    name="number"
                    value={number}
                    onChange={this.handleChangeInput}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                  />
              </label>
              <button className={css.button} type="submit">Add contact</button>
      </form>
    </div>
  );
  }
}
ContactForm.defaultProps = {
  onSubmit: ()=>{},
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default ContactForm;