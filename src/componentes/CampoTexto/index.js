import "./CampoTexto.css";

const CampoTexto = (props) => {

  const placeholderModificada = `${props.placeholder}...`;

  function aoDigitado(e) {
    props.aoAlterado(e.target.value);
  }

  return (
    <fieldset className="campo-texto">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        id={props.id}
        name={props.name}
        placeholder={placeholderModificada}
      />
    </fieldset>
  );
};

export default CampoTexto;
