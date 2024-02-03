import { Component } from "react";
import "./search-box-styles.css";

class SearchBox extends Component {
  render() {
    const { placeholder, handleChange, className } = this.props;
    return (
      <input
        type="search"
        className={`search-box ${className}`}
        placeholder={placeholder}
        onChange={handleChange}
      />
    );
  }
}

export default SearchBox;