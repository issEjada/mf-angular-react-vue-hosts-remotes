import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';

class TestComponent extends React.Component {
    render() {
        return (
            <div className='box-container'>
                <h1>This is a React component comming from a REACT remote</h1>
                <p>This is a test component rendered from a remote React application.</p>
                <p>It can be used in a web component.</p>
                <p>Make sure to include the necessary React and ReactDOM scripts in your HTML.</p>
                <p>Enjoy using this component!</p>
                <p>For more information, visit the <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React documentation</a>.</p>
                <p>Happy coding!</p>
            </div>
        );
    }
}

export default TestComponent;

class TestComponentElement extends HTMLElement {
    connectedCallback() {
        ReactDOM.render(<TestComponent />, this);
    }
}

customElements.define("react-remote-test-component-element", TestComponentElement);