import '../styles.css';

export const Componente3 = ({ inputValue }) => {
    return (
      <div className="component letters">
        {inputValue.split('').map((letter, index) => (
          <div key={index} className="lettersbox">
            {letter}
          </div>
        ))}
      </div>
    );
  };