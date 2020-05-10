// MODULES //

import React, { Fragment } from 'react';
import logger from 'debug';
import CirclePicker from 'react-color/lib/Circle.js';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import DropdownItem from 'react-bootstrap/DropdownItem';
import Tooltip from 'components/tooltip';
import icons from './config/icons';
import findActiveFontSize from './config/find_active_font_size.js';
import isTextStyleMarkCommandEnabled from './config/is_text_style_mark_command_enabled.js';
import FONT_COLORS from './font_colors.json';
import './menubar.css';


// VARIABLES //

const debug = logger( 'isle:text-editor' );


// MAIN //

const Button = ( props ) => {
	if ( props.disabled ) {
		return (
			<button onMouseDown={props.onMouseDown}
				style={{
					active: props.active,
					color: props.active ? 'black' : '#777',
					opacity: 0.2
				}}
				disabled={true}
				className="menu-item"
				aria-label={props.title}
			>{props.children}</button>
		);
	}
	return (
		<Tooltip key={`${props.itemKey}-tooltip`} tooltip={props.title} placement="bottom" >
			<button onMouseDown={props.onMouseDown}
				style={{
					active: props.active,
					color: props.active ? 'black' : '#777'
				}}
				className="menu-item"
				aria-label={props.title}
			>{props.children}</button>
		</Tooltip>
	);
};

const MenuBar = ({ menu, children, state, dispatch, view, fullscreen, showColorPicker, onColorChoice }) => {
	const onMenuMouseDown = ( item ) => e => {
		e.preventDefault();
		if ( item.run ) {
			debug( 'Run command', item, e );
			item.run( state, dispatch, view, e.nativeEvent );
		}
	};
	const createGroupButtons = ( item, itemKey ) => (
		<Button
			key={itemKey}
			itemKey={itemKey}
			type="button"
			active={item.active && state ? item.active( state ) : false}
			disabled={item.enable && state ? !item.enable( state ) : false}
			title={typeof item.title === 'string' ? item.title : ''}
			onMouseDown={onMenuMouseDown(item)}
		>
			{item.content}
		</Button>
	);
	const createDropdownButtons = ( item, itemKey ) => {
		if ( item.enable && state ? !item.enable( state ) : false ) {
			return (
				<DropdownItem
					key={`dropdown-item-${itemKey}`}
					disabled
				>{item.content}</DropdownItem>
			);
		}
		return (
			<DropdownItem
				key={`dropdown-item-${itemKey}`}
				onMouseDown={onMenuMouseDown(item)}
			>{item.content}</DropdownItem>
		);
	};
	const createFontButtons = ( item, itemKey ) => (
		<DropdownItem
			key={`font-buttons-${itemKey}`}
			style={{
				paddingLeft: 6,
				paddingRight: 6,
				paddingTop: 3,
				paddingBottom: 3
			}}
			onMouseDown={onMenuMouseDown(item)}
		>{item.content}</DropdownItem>
	);
	const renderMenuGroupButtons = ( items ) => {
		if ( items ) {
			return items.map( createGroupButtons );
		}
		return null;
	};
	return (
		<div className="prose-menu-bar cancel" >
			{children}
			{renderMenuGroupButtons( menu.blocks )}
			{menu.headers ? <Fragment>
				<DropdownButton
					title=""
					variant="outline-secondary"
					size="sm" style={{ display: 'inline-block', marginRight: 4 }}
					aria-label="Headers"
				>
					{renderMenuGroupButtons( menu.headers )}
				</DropdownButton>
				<i className="prose-separator">|</i>
			</Fragment>: null }
			{renderMenuGroupButtons( menu.marks )}
			{fullscreen ? renderMenuGroupButtons( menu.extraMarks ) : null}
			<div style={{ display: showColorPicker ? 'initial' : 'none', position: 'absolute', top: '50px', left: '100px', zIndex: 2 }}>
				<CirclePicker width="600px" colors={FONT_COLORS} circleSize={16} onChangeComplete={onColorChoice} />
			</div>
			<i className="prose-separator">|</i>
			{ menu.fontSizes ? <Dropdown
				style={{ display: 'inline-block', marginLeft: 4 }}
			>
				<DropdownToggle
					size="sm" variant="outline-secondary"
					disabled={!state || !isTextStyleMarkCommandEnabled( state, 'fontSize' )}
				>
					{state ? findActiveFontSize( state ) : '12'}
				</DropdownToggle>
				<DropdownMenu style={{ minWidth: '24px' }}>
					{menu.fontSizes.map( createFontButtons )}
				</DropdownMenu>
			</Dropdown> : null}
			{renderMenuGroupButtons( menu.wraps )}
			{ fullscreen && menu.alignment ?
				<Fragment>
					<i className="prose-separator">|</i>
					{renderMenuGroupButtons( menu.alignment )}
				</Fragment> : null
			}
			{ menu.insert ?
				<Fragment>
					<i className="prose-separator">|</i>
					<DropdownButton
						title={icons.insert}
						variant="outline-secondary"
						size="sm" style={{ display: 'inline-block' }}
						name="Insert"
					>
						{menu.insert.map( createDropdownButtons )}
					</DropdownButton>
				</Fragment> : null }
			{ menu.tableEdits ?
				<Fragment>
					<i className="prose-separator">|</i>
					<DropdownButton
						title={icons.table}
						variant="outline-secondary"
						size="sm" style={{ display: 'inline-block' }}
						name="Table"
					>
						{menu.tableEdits.map( createDropdownButtons )}
					</DropdownButton>
				</Fragment>: null }
			{ fullscreen && menu.history ?
				<Fragment>
					<i className="prose-separator">|</i>
					{menu.history.map( createGroupButtons )}
				</Fragment> : null
			}
			{ menu.addons ? <i className="prose-separator">|</i> : null }
			{renderMenuGroupButtons( menu.addons )}
		</div>
	);
};


// EXPORTS //

export default MenuBar;
