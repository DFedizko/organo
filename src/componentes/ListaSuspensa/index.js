import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  return (
    <fieldset className="lista-suspensa">
      <label>{props.label}</label>
      <select
        onChange={e => props.aoAlterado(e.target.value)}
        required={props.obrigatorio}
        value={props.valor}
      >
        <option value=""></option>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </fieldset>
  );
};

export default ListaSuspensa;
