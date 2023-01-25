/*
 * React Reveal Test Suite
 *
 * Copyright © Roman Nosov 2016, 2017
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import Reveal from '../Reveal';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow } from 'enzyme';
import React from 'react';

configure({ adapter: new Adapter() });


describe('Reveal', () => {
  it('renders a initial view', () => {
    const content = shallow(
      <Reveal effect="123" >
        <div>Test test</div>
      </Reveal>
    );
    expect(content.html()).toMatchSnapshot();
  });
});
