import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';
import Settings from '../Settings';

class App extends Component {
  render() {
      return (
	      <AppLayout>
	      <AppProvider>
	      <AppBar/>
	      <Settings />
	      </AppProvider>
	      </AppLayout>
    );
  }
}

export default App;
