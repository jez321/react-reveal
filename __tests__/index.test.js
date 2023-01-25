/*
 * index Test Suite
 *
 * Copyright © Roman Nosov 2017
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import { Fade, Flip, Rotate, Zoom } from '../';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow } from 'enzyme';
import React from 'react';

configure({ adapter: new Adapter() });
//      <Reveal effect="some-effect" className="someClass" style={{ border: '1px solid red'}} props={{src: '/example.com'}}>
//    </Reveal>

describe('index', () => {
  it('renders a initial view', () => {
    const content = shallow(
      <div>
        <Zoom><div> Zoom Test test</div></Zoom>
        <Fade><div> Fade Test test</div></Fade>
        <Flip><div>Flip Test test</div></Flip>
        <Rotate><div> Rotate Test test</div></Rotate>
      </div>
    );
    expect(content.html()).toMatchSnapshot();
  });
});
