import React from 'react';
import './Summary.css';
import SummaryItems from '../SummaryItems/SummaryItems';
import { USCurrencyFormat } from '../App';

class Summary extends React.Component {
    render() {
      {/*store the props from Parent component (App) as variables after render() */}
        const { selected } = this.props;
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + "-" + idx;
            const selectedOption = this.props.selected[feature];
        
            return (
              <SummaryItems
                feature={feature}
                featureHash={featureHash}
                selectedOption={selectedOption}
              />
            );
          });
          const total = Object.keys(selected).reduce(
            (acc, curr) => acc + selected[curr].cost,
            0
          );
      
          return (
            <section className="main__summary">
              <h2>Your cart</h2>
              {summary}
              <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                  {USCurrencyFormat.format(total)}
                </div>
              </div>
            </section>
          );
    }

}

export default Summary;
