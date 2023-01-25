/*
 * Animation Test Suite
 *
 * Copyright © Roman Nosov 2017
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import Animation from '../Animation';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow } from 'enzyme';
import React from 'react';

configure({ adapter: new Adapter() });


describe('Animation', () => {
  it('renders a initial view', () => {
    const content = shallow(
      <Animation steps={Animation.step("1", 1000).step("2", 2000)}>
        <div>Test test</div>
      </Animation>
    );
    expect(content.html()).toMatchSnapshot();
  });
});
