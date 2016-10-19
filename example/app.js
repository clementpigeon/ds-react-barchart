import React from "react";

import Button from "../src";

const config = {
  label: "hello sunshine",
  handleClick: () => {
    console.log("I'm handleClick");
  }
};

const App = () => (
  <div>
    <h1>Button</h1>

    <section>
      <h2>Regular Buttons</h2>
      <Button label="Default" />
      <Button label="Primary" isPrimary />
      <Button label="Disabled" isDisabled />
      <Button label="Primary Disabled" isPrimary isDisabled />
    </section>

    <section>
      <h2>Outline Buttons</h2>
      <Button label="Default" isOutline />
      <Button label="Primary" isOutline isPrimary />
      <Button label="Disabled" isOutline isDisabled />
      <Button label="Primary Disabled" isOutline isPrimary isDisabled />
    </section>
  </div>
);

export default App;
