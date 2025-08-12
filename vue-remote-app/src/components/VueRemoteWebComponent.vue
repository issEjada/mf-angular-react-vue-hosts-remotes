<script>
import { defineCustomElement } from 'vue';

const css = `
.box-container01 {
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 8px;
    background: #02F7FF;
    margin-top:20px;
}
`;

const VueRemoteWebComponent = defineCustomElement({
    styles: [css],
    template: `<div class='box-container01'>
                <h1>This is a Vue component comming from a Vue remote</h1>
                <p>This is a test component rendered from a remote React application.</p>
                <p>It can be used in a web component.</p>
                <p>Make sure to include the necessary React and ReactDOM scripts in your HTML.</p>
                <p>Enjoy using this component!</p>
                <p>For more information, visit the <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React documentation</a>.</p>
                <p>Happy coding!</p>
            </div>`
});

customElements.define("vue-remote-web-component", VueRemoteWebComponent);

export default VueRemoteWebComponent;
</script>

<style scoped>
.box-container01 {
    /* Your styles here */
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 8px;
    background: #f9f9f9;
}
</style>