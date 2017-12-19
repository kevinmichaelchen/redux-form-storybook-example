import PropTypes from 'prop-types';
import React from 'react';
import { Field as ReduxFormField } from 'redux-form';

const Field = ({ label, id, name, component, type }) => (
  <div className="form-group">
    <label htmlFor={name}>
      {label}
    </label>
    <ReduxFormField
      className="form-control"
      id={id}
      name={name}
      component={component}
      type={type}/>
  </div>
);

const fieldPropTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

Field.propTypes = fieldPropTypes;

export {
  Field,
  fieldPropTypes
}
