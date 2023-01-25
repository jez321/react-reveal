/*
 * Tada Component Test Suite
 *
 * Copyright © Roman Nosov 2017
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import Tada from '../../Tada';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow } from 'enzyme';
import React from 'react';

configure({ adapter: new Adapter() });

describe('Tada', () => {
  it('renders a initial view', () => {
    const content = shallow(
      <Tada>
        <div>Test test</div>
      </Tada>
    );
    expect(content.html()).toMatchSnapshot();
  });
});
