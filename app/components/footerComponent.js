import $ from 'jquery';
import ComponentBase from './componentBase.js'

class FooterComponent extends ComponentBase {
    
    constructor(element) {
        super();
        this.element = element;
    }

    render(){

        let html = 
            `<div id="footer">
                2017
            </div>`;
        this.element.html(html);
    }
    
}

export default FooterComponent;