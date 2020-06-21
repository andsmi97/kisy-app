import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Component';

describe('Loader component', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<Loader />);
  });

  it('should render Loader component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
