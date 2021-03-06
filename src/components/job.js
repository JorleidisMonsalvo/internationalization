import React from 'react';
import {FormattedDate} from 'react-intl';
import {FormattedRelative} from 'react-intl';

export default class Job extends React.Component {

  	render() {
  		return (
  			<tr>
  				<th scope="row">{this.props.offer.id}</th>
      			<td>{this.props.offer.name}</td>
  				<td>{this.props.offer.company}</td>
      			<td>{this.props.offer.salary}</td>
      			<td>{this.props.offer.city}</td>
      			<td>
  					<FormattedDate
						value={new Date(this.props.offer.date) }
    					year='numeric'
    					month='long'
    					day='numeric'
						weekday='long'
  					/>
					(<FormattedRelative value={this.props.offer.date}/>)	   
				</td>
  			</tr>
  		);
	}
}