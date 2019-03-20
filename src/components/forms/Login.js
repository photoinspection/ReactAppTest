import React, { Component } from "react";
import Form from "react-jsonschema-form";

const schema = {
  title: "Login",
  type: "object",
  required: ["username", "password"],
  properties: {
    username: {
      type: "string",
      title: "Username ",
      default: "",
      name: "username",
      width: 5
    },
    password: {
      type: "string",
      title: "Password ",
      default: "",
      name: "password",
      width: 5
    },
    remember: { type: "boolean", title: " Remember me", default: false }
  }
};

const uiSchema = {
  "ui:order": ["username", "password", "remember"]
};

const log = type => console.log.bind(console, type);

export default class Login extends Component {
  render() {
    return (
      <div class="container central">
        <Form
          schema={schema}
          uiSchema={uiSchema}
          onChange={log("changed")}
          onSubmit={log("submitted")}
          onError={log("errors")}
        />
      </div>
    );
  }
}
