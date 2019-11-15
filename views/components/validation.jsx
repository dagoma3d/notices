const React = require('react');

function Validation(props) {
  const { step, text } = props;
  const label = text ? text : "Je valide cette étape";
  return (
    <div className="checkbox-classic checkbox-full-width">
      <input id="yo" type="checkbox" />
      <label className="tnormal valid-step" data-redirect={step} htmlFor="yo">{label}</label>
    </div>
  );
}

module.exports = Validation;