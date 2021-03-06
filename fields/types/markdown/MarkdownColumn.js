import React from 'react';
import ItemsTableCell from '../../../admin/client/components/ItemsTable/ItemsTableCell';
import ItemsTableValue from '../../../admin/client/components/ItemsTable/ItemsTableValue';

var MarkdownColumn = React.createClass({
	displayName: 'MarkdownColumn',
	propTypes: {
		col: React.PropTypes.object,
		data: React.PropTypes.object,
	},
	renderValue () {
		const value = this.props.data.fields[this.props.col.path];
		return (value && Object.keys(value).length) ? value.md.substr(0, 100) : null;
	},
	render () {
		return (
			<ItemsTableCell>
				<ItemsTableValue field={this.props.col.type}>
					{this.renderValue()}
				</ItemsTableValue>
			</ItemsTableCell>
		);
	},
});

module.exports = MarkdownColumn;
