import React from "react";

import {shallow, mount, render} from "enzyme";
import {expect} from "chai";
import sinon from "sinon";

import Button from "../../src/index";

// Demo tests

// Making PropType warnings throw errors
// https://gist.github.com/scmx/d98cc058a7c3dfef7890
before(() => {
  sinon.stub(console, "error", (warning) => { throw new Error(warning); });
});
after(() => { console.error.restore(); });

// Shallow Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
describe("Basic Tests", () => {

  it("requires a label", () => {
    expect(() => {
      shallow(<Button/>);
    }).to.throw();

    expect(() => {
      shallow(<Button label="some button"/>);
    }).to.not.throw();
  });

  it("receives a function for handleClick property", () => {
    const fn = sinon.spy();

    expect(() => {
      shallow(<Button handleClick="hello"/>);
    }).to.throw();

    expect(() => {
      shallow(<Button handleClick={fn}/>);
    }).to.not.throw();
  });

  it("renders a button", () => {
    const buttonClick = sinon.spy();
    const wrapper = shallow(<Button handleClick={buttonClick} />);
    expect(wrapper.find("button")).to.have.length(1);
  });

  it("simulates button's click event", () => {
    const buttonClick = sinon.spy();
    const wrapper = shallow(
      <Button handleClick={buttonClick} />
    );
    wrapper.find("button").simulate("click");
    expect(buttonClick.calledOnce).to.equal(true);
  });
});

// Full DOM Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md
//describe("Full DOM Rendering", () => {
//  it("allows us to set props", () => {
//    const wrapper = mount(<Button bar="baz" />);
//    expect(wrapper.props().bar).to.equal("baz");
//    wrapper.setProps({ bar: "foo" });
//    expect(wrapper.props().bar).to.equal("foo");
//  });
//
//  it("calls componentDidMount", () => {
//    sinon.spy(Button.prototype, "componentDidMount");
//    mount(<Button />);
//    expect(Button.prototype.componentDidMount.calledOnce).to.be.true;
//    Button.prototype.componentDidMount.restore();
//  });
//});
