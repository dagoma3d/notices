const React = require('react');

function Validation(props) {
  const { step } = props;
  return (
    <div className="checkbox-classic checkbox-full-width">
      <input id="yo" type="checkbox" />
      <label className="tnormal valid-step" data-redirect={step} htmlFor="yo">Je valide cette étape</label>
    </div>
  );
}

module.exports = Validation;