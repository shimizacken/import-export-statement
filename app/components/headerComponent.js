import $ from 'jquery';
import ComponentBase from './componentBase.js'

class HeaderComponent extends ComponentBase {

    constructor(element) {
        super();
        this.element = element;
    }

    render(){
        
        let html = 
            `<div id="header">
                <h1>Portal</h1>
            </div>`;
        this.element.html(html);
    }
}

export default HeaderComponent;