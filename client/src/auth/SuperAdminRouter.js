import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./index";
// import AdminNav from "../components/elements/adminnav/AdminNav";

const SuperAdminRoute = ({ component: Component, ...rest }) => (
    <>
    {/* <AdminNav/> */}
    <Route
        {...rest}
        render={props =>
            isAuthenticated() && isAuthenticated().user.role == 2 ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/signin",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
    </>
);

export default SuperAdminRoute;