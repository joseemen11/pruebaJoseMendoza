import "../styles.css";
export const Componente2 = ({ value, onInputChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={onInputChange}
        placeholder="Escriba aquí"
      />
    </form>
  );
};
  