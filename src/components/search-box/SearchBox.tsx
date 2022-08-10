import "./search-box.style.scss";

interface IProps {
  placeholder: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  theme: string;
}
const SearchBox = ({ placeholder, handleChange, theme }: IProps) => (
  <div className="search-container">
    <button className="search-icon-btn">
      <i className={`fas fa-search search-icon ${theme}-mode`}></i>
    </button>
    <input
      className={`search ${theme}-mode`}
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  </div>
);

export default SearchBox;
