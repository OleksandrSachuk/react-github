import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import RepoInfo from './';
import store from '../../../../store';

it('renders RepoInfo without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RepoInfo store={ store }/>, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('RepoInfo snapshot test', () => {

  const component = renderer.create(
    <RepoInfo store={ store }/>,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
