import React from 'react';
import slugify from 'slugify';
import './FeatureItem.css'
import FeatureCustomize from '../FeatureCustomize/FeatureCustomize';


class FeatureItem extends React.Component {
    render() {
      {/*store the props from Parent component (Features) as variables after render() */}
        const { features, feature } = this.props;
        const options = features[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));
    
          return (
            <FeatureCustomize
              item={item}
              feature={feature}
              selected={this.props.selected}
              handleUpdateFeature={this.props.handleUpdateFeature}
              id={itemHash}
              key={itemHash}
            />
          );
        });
    
        return (
          <fieldset className="feature" >
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            {options}
          </fieldset>
        );
      }

}

export default FeatureItem;