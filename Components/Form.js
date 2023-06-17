import React, {Component} from 'react'
import instance from '../firebase/instance';

class Form extends Component {

  constructor(props) {
    super(props);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = { email: "" };
  }

  onChangeUserEmail(e) {
    this.setState({ email: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    const userObject = {
        email: this.state.email
    };
    instance.post('/emails.json', userObject)
        .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        });
    this.setState({ email: "" })
  }

  render() {
    return(
      <div className='form-box'>
        <form className='box'>
          <input value={(this.state.email)} placeholder='Email' onChange={this.onChangeUserEmail}></input>
          <button onClick={this.onSubmit} disabled={!(this.state.email)}>submit</button>
        </form>
      </div>
    );
  }
}

export default Form;