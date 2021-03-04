// import { render, screen } from "@testing-library/react";
import App from "./App";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Navbar from "./components/layout/Navbar";
import Form from "./components/home/Form";

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import firebase from "firebase/app";
import thunk from "redux-thunk";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import {
  createFirestoreInstance,
  getFirestore,
  reduxFirestore,
} from "redux-firestore";
import firebaseConfig from "./config/fbconfig";
import NoteList from "./components/notes/NoteList";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebaseConfig)
  )
);

const rrfProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

configure({ adapter: new Adapter() });

describe("Testing Evernote", () => {
  it("renders Route link in App", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Route")).toBeTruthy();
    // render(
    //   <Provider store={store}>
    //     <ReactReduxFirebaseProvider {...rrfProps}>
    //       <App />
    //     </ReactReduxFirebaseProvider>
    //   </Provider>
    // );
    // const linkElement = screen.getByText("NoteBook");
    // expect(linkElement).toBeInTheDocument();
  });

  it("renders a link with text of NoteBook", () => {
    const wrapper = shallow(<Navbar />);
    const text = wrapper.find("Link").text();
    expect(text).toBe("NoteBook");
  });

  it("renders props of Form", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <Form />
        </ReactReduxFirebaseProvider>
      </Provider>
    );

    expect(wrapper.props()).toBeDefined();
  });

  it("renders props of NoteList", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <NoteList />
        </ReactReduxFirebaseProvider>
      </Provider>
    );

    expect(wrapper.props()).toBeDefined();
  });

  it("calls onSubmit prop function when form is submitted", () => {
    const handleSubmit = jest
      .fn()
      
    const wrapper = mount(
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <Form  handleSubmit={handleSubmit} />
        </ReactReduxFirebaseProvider>
      </Provider>
    );

    wrapper.find("form").simulate("submit");
    expect(handleSubmit).toBeCalledTimes(1);
  });

  // test("renders new note link", () => {
  //   render(
  //     <Provider store={store}>
  //       <ReactReduxFirebaseProvider {...rrfProps}>
  //         <App />
  //       </ReactReduxFirebaseProvider>
  //     </Provider>
  //   );
  //   const linkElement = screen.getByText("New Note");
  //   expect(linkElement).toBeInTheDocument();
  // });
});
