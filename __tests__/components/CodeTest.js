import React from 'react'
import { shallow } from 'enzyme'
import Code from 'components/Code'

test('<Code/>', () => {
  const wrapper = shallow(<Code>some code</Code>)
  expect(wrapper.text()).toBe('some code')
  expect(wrapper.hasClass('code')).toBeTruthy()
  expect(wrapper.find('code').exists()).toBeTruthy()
})
