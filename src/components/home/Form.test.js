import React from "react";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Form from "./Form";

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../../store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { getFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import firebaseConfig from "../../config/fbconfig";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebaseConfig)
  )
);

describe("SharedButton Component", () => {
  describe("Renders", () => {
    let wrapper;
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        emitEvent: mockFunc,
      };
      wrapper = shallow(
        <Provider store={store}>
          <Form {...props} />
        </Provider>
      );
    });

    it("Should Render a button", () => {
      const button = wrapper.find(".btn");
      expect(button).toBeTruthy();
    });

    // it("Should emit callback on submit event", () => {
    //   const button = wrapper.find(".white");
    //   button.simulate("onSubmit", ()=>{});
    //   const callback = mockFunc.mock.calls;
    //   expect(callback).toBeTruthy();
    // });
  });
});
