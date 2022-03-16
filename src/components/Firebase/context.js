import React from "react";

const FirebaseContext = React.createContext(null);

export const withFirebase = (Component) => (props) => {
  <FirebaseContext>
    {(firebase) => <Component {...props} firebase={firebase} />}
  </FirebaseContext>;
};

export default FirebaseContext;
