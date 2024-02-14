import { ChangeEvent } from "react";

import "./search-box-styles.css";

type SearchBoxProps = {
  placeholder: string;
  className?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ placeholder, onChangeHandler, className }: SearchBoxProps) => {
    return (
      <input
        type="search"
        className={`search-box ${className}`}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }

export default SearchBox;