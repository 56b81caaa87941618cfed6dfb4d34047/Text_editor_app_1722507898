/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722507899", {
    template: `
    <section id="cta-component" class="bg-gradient-to-br from-purple-600 via-pink-500 to-magenta-400 flex-1 p-8">
        <div id="cta-inner-container" class="max-w-screen-xl mx-auto backdrop-filter backdrop-blur-lg bg-white bg-opacity-20 rounded-xl shadow-lg p-8">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-4 text-4xl font-extrabold leading-tight tracking-tight text-white">Build Better Writing Apps</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-6 font-light text-gray-100 text-lg">Unleash your creativity with our powerful text building platform.</p>
                </div>
                
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-purple-700 bg-white bg-opacity-80 hover:bg-opacity-100 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-8 py-3 transition duration-300 ease-in-out transform hover:scale-105">Start Creating Today</a>
                </div>
            </div>
        </div>
    </section>
        `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
