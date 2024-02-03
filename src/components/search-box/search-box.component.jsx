import "./search-box-styles.css";

const SearchBox = ({ placeholder, handleChange, className }) => {
    return (
      <input
        type="search"
        className={`search-box ${className}`}
        placeholder={placeholder}
        onChange={handleChange}
      />
    );
  }

export default SearchBox;