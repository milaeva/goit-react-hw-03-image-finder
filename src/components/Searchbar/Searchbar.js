import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./Searchbar.module.css";

class Searcbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };
  state = {
    searchbar: "",
  };
  submit = (e) => {
    e.preventDefault();
    this.props.submit(this.state.searchbar);
    this.reset();
  };
  inputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ searchbar: "" });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form onSubmit={this.submit} className={s.SearchForm}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            className={s.SearchFormInput}
            type="text"
            name="searchbar"
            value={this.state.searchbar}
            onChange={this.inputChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searcbar;
