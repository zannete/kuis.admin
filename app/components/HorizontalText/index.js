/**
*
* HorizontalText
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class HorizontalText extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="form-group row">
        <label className="col-sm-3 col-form-label">{this.props.title}</label>
        <div className="col-sm-9">
          <input 
            type="text" 
            className="form-control" 
            placeholder={this.props.placeholder}
            onChange={this.props.onChange}
            value={this.props.value}/>
        </div>
      </div>
    );
  }
}

HorizontalText.propTypes = {

};

export default HorizontalText;
