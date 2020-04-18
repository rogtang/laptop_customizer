import React from 'react';
import {USCurrencyFormat} from '../App';
import slugify from 'slugify';
import './FeatureCustomize.css'

class FeatureCustomize extends React.Component {
    render() {
        const { item, feature, id } = this.props;
    
        return (
          <div className="feature__item">
            <input
              type="radio"
              id={id}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === this.props.selected[feature].name}
              onChange={e => this.props.handleUpdateFeature(feature, item)}
            />
            <label htmlFor={id} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </div>
        );
      }
}

export default FeatureCustomize;
