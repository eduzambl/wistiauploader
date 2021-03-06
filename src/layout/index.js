//
// Copyright (c) 2015, 2016 Revolution Financial Technology, Inc.
//
import 'bootstrap-css-only';
import 'normalize.css';

import angular from 'angular';
import AppComponent from './app.component';

import ComponentsModule from '../components';

const App = angular
	.module('main', [
	  ComponentsModule.name
])
	.component('app', AppComponent);

export default App;
