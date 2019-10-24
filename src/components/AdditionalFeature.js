import React from 'react';
import { connect } from 'react-redux'

import { addFeature } from '../actions/addFeature'
import { updateTotal } from '../actions/updateTotal'

const AdditionalFeature = props => {
  const addItem = (item) => {
    props.addFeature(item)
    props.updateTotal(item.price)
  }


  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={(e) => addItem(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapDispatchToProps = {
  addFeature,
  updateTotal
}

export default connect(null, mapDispatchToProps)(AdditionalFeature);
