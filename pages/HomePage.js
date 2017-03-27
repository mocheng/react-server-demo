import React from 'react';
import {RootElement, RootContainer, TheFold, Link, getCurrentRequestContext} from 'react-server';

//Below import breaks production asset build
import {ReduxAdapter} from 'react-server-redux';

export default class HomePage {
  getElements() {
    return (
      <RootElement>
        <div>It works</div>
      </RootElement>
    );
  }
}
