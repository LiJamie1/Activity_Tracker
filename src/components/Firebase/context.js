import React from "react";

/* 
  Takes in a component
  Keeps its properties by spreading them out via {…props}
  Consumes Firebase by using the Context API
  Add the firebase class as an added property

  https://reactjs.org/docs/higher-order-components.html
  https://reactjs.org/docs/context.html
*/

const FirebaseContext = React.createContext(null);

export const withFirebase = (Component) => (props) => {
  <FirebaseContext>
    {(firebase) => <Component {...props} firebase={firebase} />}
  </FirebaseContext>;
};

export default FirebaseContext;
