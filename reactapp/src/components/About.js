import React, {Component} from 'react';
import {useParams} from "react-router-dom";
function About() {
    // URL'nin dinamik parçalarına erişmek için
    // burada `useParams` kancasını kullanabiliriz.
    // let {id} = useParams();
    return <h1>About Benim oluşturdugum componet</h1>;


}
export default About;