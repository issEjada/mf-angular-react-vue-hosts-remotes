<script>
    import { defineCustomElement } from 'vue';

    const VueRemoteWebComponent = defineCustomElement({
        styles: [``],
        template: `<h1>Vue 2 Remote Web Component 01</h1>`
    });

    customElements.define("vue-remote-web-component", VueRemoteWebComponent);

    export default VueRemoteWebComponent;
</script>