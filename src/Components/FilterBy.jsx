import "./FilterBy.css";

const FilterBy = ({ value, onChange, children }) => {
  return (
    <select className="select__input" value={value} onChange={onChange}>
      {children}
    </select>
  );
};

export default FilterBy;
