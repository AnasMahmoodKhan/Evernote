// import { render, screen } from "@testing-library/react";
import App from "./App";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Navbar from "./components/layout/Navbar";

// import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from "./store/reducers/rootReducer";
// import { Provider } from "react-redux";
// import firebase from "firebase/app";
// import thunk from "redux-thunk";
// import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
// import {
//   createFirestoreInstance,
//   getFirestore,
//   reduxFirestore,
// } from "redux-firestore";
// import firebaseConfig from "./config/fbconfig";

configure({ adapter: new Adapter() });

// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
//     reduxFirestore(firebaseConfig)
//   )
// );

// const rrfProps = {
//   firebase,
//   config: firebaseConfig,
//   dispatch: store.dispatch,
//   createFirestoreInstance,
// };

describe("Testing Evernote", () => {
  test("renders learn react link", () => {
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

  test("renders a link with text of NoteBook", () => {
    const wrapper = shallow(<Navbar />);
    const text = wrapper.find("Link").text();
    expect(text).toBe("NoteBook");
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
