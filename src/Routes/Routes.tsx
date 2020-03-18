
import React from 'react';
import './Routes.scss';
import Page from './RoutesHtml'
import Myservice from '../Myservice/Myservice'
var $ = require("jquery");
var swal = require("sweetalert");

class Routes extends Myservice {

    constructor(props:any) {
        super(props);
    }

    references = {
        test_in: React.createRef(),
        test_out: React.createRef()
    }

    test2 = () => {
    //@ts-ignore
    $(this.references.test_out.current).text(this.references.test_in.current.value)
  }

     componentDidMount() {
        super.componentDidMount();
    }

    componentDidUpdate() {
        super.componentDidUpdate();
    }

    guru() {
         swal("hi","")
    }

    render() {
        return (
             <Page _this={this} references={this.references} />
        )
    }
}

export default Routes;
    