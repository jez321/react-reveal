/*
 * Roll Component Test Suite
 *
 * Copyright © Roman Nosov 2017
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import Roll from '../../Roll';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow } from 'enzyme';
import React from 'react';

configure({ adapter: new Adapter() });

describe('Roll', () => {
  it('renders a initial view', () => {
    const content = shallow(
      <Roll>
        <div>Test test</div>
      </Roll>
    );
    expect(content.html()).toMatchSnapshot();
  });
});
