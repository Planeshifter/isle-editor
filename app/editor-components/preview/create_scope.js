// MODULES //

import React, { Component } from 'react';
import { render } from 'react-dom';
import Draggable from 'react-draggable';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import copy from '@stdlib/utils/copy';
import Components from 'components';
import factor from 'utils/factor-variable';


// VARIABLES //

export const SCOPE = {
	...Components,
	Card,
	Form,
	Modal,
	Alert,
	Badge,
	Button,
	Col,
	FormControl,
	ListGroup,
	ListGroupItem,
	Nav,
	Navbar,
	NavItem,
	NavLink,
	Row,
	Tab,
	Tabs
};


// MAIN //

const createScope = ( session ) => {
	const scope = copy( SCOPE, 1 );
	scope.session = session;
	scope.React = React;
	scope.Component = Component;
	scope.render = render;
	scope.factor = factor;
	scope.Draggable = Draggable;
	return scope;
};


// EXPORTS //

export default createScope;
