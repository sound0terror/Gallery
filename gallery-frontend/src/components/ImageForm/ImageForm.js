import React, {Component} from 'react';
import {Button, Col, Form, FormGroup} from "reactstrap";
import FormElement from "../UI/FormElement/FormElement";

class ProductForm extends Component {
  state = {
    title: '',
    photo: ''
  };

  inputChangeHandler = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  fileChangeHandler = e => {
    this.setState({photo: e.target.files[0]});
  };

  submitFormHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.author = this.props.author;
    for (let key in this.state) {
      formData.append(key, this.state[key]);
    }

    this.props.submitForm(formData);
  };

  render() {
    return (
      <Form onSubmit={this.submitFormHandler}>
        <FormElement
          title="Title"
          type="text"
          required
          name="title"
          placeholder="Enter image title"
          value={this.state.title}
          onChange={this.inputChangeHandler}
        />

        <FormElement
          title="Photo"
          type="file"
          name="photo"
          onChange={this.fileChangeHandler}
        />

        <FormGroup row>
          <Col sm={{offset:2, size: 10}}>
            <Button type="submit" color="primary">Save image</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default ProductForm;
