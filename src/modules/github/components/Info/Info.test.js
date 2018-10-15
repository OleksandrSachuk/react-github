import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Info from './InfoContainer';
import configureStore from '../../../../store';

it('renders Info without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Info store={ configureStore() }/>, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('Info snapshot test', () => {

  const component = renderer.create(
      <Info store={ configureStore() }/>,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
