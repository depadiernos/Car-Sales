import React from 'react';
import { connect } from 'react-redux'

import { removeFeature } from '../actions/removeFeature'


const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={(e)=>props.removeFeature(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapDispatchToProps = {
  removeFeature
}

export default connect(null, mapDispatchToProps)(AddedFeature);
