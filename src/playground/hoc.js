//Higher order component - a component that renders another component
//Reuse code
//Render hijacking
//prop manipulation
//Abstract sTate

import React from "react";
import ReactDOM from "react-dom";

const info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is pribate info</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (Children) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <Children {...props} />
      ) : (
        <p>this is the non authentication message</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(info);
const AuthInfo = requireAuthentication(info);

ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="hello" />,
  document.getElementById("app")
);
