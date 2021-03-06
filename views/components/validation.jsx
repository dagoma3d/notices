const React = require('react');

function Validation(props) {
  const { step, text, t } = props;
  const label = text ? text : "Je valide cette étape";
  if (step) {
    return (
      <div className="checkbox-classic checkbox-full-width">
        <input id="yo" type="checkbox" />
        <label className="tnormal valid-step" data-redirect={step} htmlFor="yo">{t(label)}</label>
      </div>
    );
  } else {
    return null;
  }
}

module.exports = Validation;