import React from 'react';
import {RootElement, RootContainer, TheFold, Link, getCurrentRequestContext} from 'react-server';

export default class HomePage {
  getElements() {
    return (
      <RootElement>
        <div>It works</div>
      </RootElement>
    );
  }
}
