import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const App = () => (
  <div class="columns">
    <div class="column">
      <Hello name="CodeSandbox" />
    </div>
    <div class="column">
      <h2>Start editing to see some magic happen {"\u2728"}</h2>
    </div>
  </div>
);

render(<App />, document.getElementById("root"));
