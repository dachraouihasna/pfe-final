import React from "react";

export default function PrivateRoutes({ children}){
    const token= localStorage.getItem("id");
    return token ? children : <div>Oups ! You'Re Not Authorized to Add Products</div>;
}