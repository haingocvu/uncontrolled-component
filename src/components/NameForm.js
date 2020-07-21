import React from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert(`the name was submitted is: ${this.inputRef.current.value}`);
    event.preventDefault();
  }

  render() {
    const { className } = this.props;
    return (
      <form className={className} onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            ref={this.inputRef}
            defaultValue={"enter name here"}
          />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default NameForm;
