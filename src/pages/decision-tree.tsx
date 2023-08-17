import React from "react";
import Layout from "@theme/Layout";
import { Controls, Step, Wizard } from "react-decision-tree-flow";

const BasicTree = () => {
  const tree = {
    initial: ["notimplemented", "todo_note", "step2", "step3"],
    step2: ["step3", "error"],
    step3: [],
    // leaves
    todo_note: [],
    todo_value: [],
    todo_async_value: [],
    todo_lazy_value: [],
    todo_lazy_async_value: [],
    todo_value_extension: [],
    todo_value_async_extension: [],
    todo_effect: [],
    todo_async_effect: [],
    todo_lazy_async_effect: [],
    todo_effect_extension: [],
    todo_effect_async_extension: [],
    idea: [],
    idea_attribute: [],
    refactor: [],
    refactor_attribute: [],
    notimplemented: [],
  } as const;

  // todo, throw, refactor, idea

  return (
    <Wizard tree={tree} first="initial">
      <Step name="initial">
        <div>
          I am step 1
          <br />
          <Controls>
            {({ destinations: { notimplemented, step2, step3, todo_note } }) => (
              <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                height: "50vh",
                fontSize: "20px",
              }}>
                <button onClick={notimplemented}>
                  <span>I want to mark something as </span>
                  <span>
                    <code>NotImplemented</code>
                  </span> 🚧
                </button>
                <button onClick={step3}>I want to note an idea 💡</button>
                <button onClick={step2}>I stumbled upon something that needs refactoring 🛠️</button>
                <button onClick={todo_note}>I want to place a note-it in my code 🗂️</button>
                <button onClick={step2}>I need some data that I don't yet have 📦</button>
                <button onClick={step2}>I want to simulate an effect 🧪</button>
              </div>
            )}
          </Controls>
        </div>
      </Step>
      <Step name="step2">
        <div>
          I am step 2
          <br />
          <Controls>
            {({ destinations: { step3, error } }) => (
              <div>
                <button onClick={error}>Go to error</button>
                <button onClick={step3}>Go to Step 3</button>
              </div>
            )}
          </Controls>
        </div>
      </Step>
      <Step name="step3">
        <div>I am step 3. No steps after me!</div>
      </Step>
      <Step name="notimplemented">
        <div>You want to use <code>throw Hole.NotImplemented("");</code></div>
      </Step>
      <Step name="error">
        <div>
          I am error
          <br />
          <Controls>
            {({ back, destinations }) => <button onClick={back}>Go back to Step 2</button>}
          </Controls>
        </div>
      </Step>
    </Wizard>
  );
};

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "20px",
        }}
      >
        <BasicTree />
      </div>
    </Layout>
  );
}
