/*
 * LightSpeed Component Test Suite
 *
 * Copyright © Roman Nosov 2017
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import LightSpeed from '../../LightSpeed';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow } from 'enzyme';
import React from 'react';

configure({ adapter: new Adapter() });

describe('LightSpeed', () => {
  it('renders a initial view', () => {
    const content = shallow(
      <LightSpeed>
        <div>Test test</div>
      </LightSpeed>
    );
    expect(content.html()).toMatchSnapshot();
  });
});
