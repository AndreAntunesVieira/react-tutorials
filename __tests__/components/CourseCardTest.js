import React from 'react'
import { shallow } from 'enzyme'
import CourseCard from 'components/CourseCard'

describe('<CourseCard/>', () => {
  it('without paragraphs', () => {
    const title = 'Some title'
    const href = '/some-route'
    const text = 'Some text'
    const wrapper = shallow(<CourseCard title={title} href={href}>{text}</CourseCard>)
    expect(wrapper.hasClass('courseCard')).toBeTruthy()
    expect(wrapper.find('h2').text()).toEqual(title)
    expect(wrapper.find('p').text()).toEqual(text)
  })

  it('with paragraphs', () => {
    const title = 'Some title'
    const href = '/some-route'
    const text1 = 'Some text 1'
    const text2 = 'Some text 2'
    const wrapper = shallow(
      <CourseCard title={title} href={href}>
        <p>{text1}</p>
        <p>{text2}</p>
      </CourseCard>
    )
    expect(wrapper.hasClass('courseCard')).toBeTruthy()
    expect(wrapper.find('h2').text()).toEqual(title)
    expect(wrapper.find('p').at(0).text()).toEqual(text1)
    expect(wrapper.find('p').at(1).text()).toEqual(text2)
  })
})
