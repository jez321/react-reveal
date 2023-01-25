/*
 * Wobble Component Test Suite
 *
 * Copyright © Roman Nosov 2017
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import Wobble from '../../Wobble';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow } from 'enzyme';
import React from 'react';

configure({ adapter: new Adapter() });

describe('Wobble', () => {
  it('renders a initial view', () => {
    const content = shallow(
      <Wobble>
        <div>Test test</div>
      </Wobble>
    );
    expect(content.html()).toMatchSnapshot();
  });
});
