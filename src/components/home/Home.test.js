import React from "react";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Home from "./Home";
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

const setUp = (props = {}) => {
  const component = shallow(
    <Provider store={store}>
      <Home {...props} />
    </Provider>
  );
  return component;
};

describe("Home Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = component.find(".container");
    expect(wrapper).toBeTruthy();
  });

  it("Should render a row", () => {
    const row = component.find(".row");
    expect(row).toBeTruthy();
  });
});
