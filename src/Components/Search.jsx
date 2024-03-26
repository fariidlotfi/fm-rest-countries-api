import "./Search.css";

const Search = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      className="search__input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Search;
