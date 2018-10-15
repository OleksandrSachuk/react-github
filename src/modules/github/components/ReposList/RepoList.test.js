import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import RepoList from './';
import store from '../../../../store';

it('renders RepoList without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RepoList store={ store }/>, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('RepoList snapshot test', () => {

  const component = renderer.create(
    <RepoList store={ store }/>,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
