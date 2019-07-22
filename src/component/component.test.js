import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Com from './component'
import SubCom from './subComponent'

describe('componnet', () => {
  it('should have classes with name of container and subContainer', () => {
    // GIVEN
    // WHEN
    const wrapper = mount(<Com />)
    // THEN
    expect(wrapper.find('.container').length).toEqual(1)
    expect(wrapper.find('.subContainer').length).toEqual(1)
  })

  it('should have a subComponent', () => {
    // GIVEN
    // WHEN
    const wrapper = shallow(<Com />)
    // THEN
    expect(wrapper.find('SubCom').length).toEqual(1)
    expect(wrapper.find('SubCom').props()).toEqual({ testProp: 'testProp' })
  })

  it('func should be excusted if we click on subComponent', () => {
    // GIVEN
    const func = jest.fn()
    const props = { func }

    // WHEN
    const wrapper = mount(<Com {...props} />)
    wrapper.find('.subContainer').simulate('click')

    // THEN
    expect(func).toBeCalled()
  })
})
