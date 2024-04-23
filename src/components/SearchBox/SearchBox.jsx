import css from './SearchBox.module.css'

export default function SearchBox({ inputValue, onFilter }) {
  return (
    <div className={css.wrap}>
      <p>Find contacts by name</p>
      <input type="text" value={inputValue} onChange={(e) => onFilter(e.target.value)} />
    </div>
  );
}
