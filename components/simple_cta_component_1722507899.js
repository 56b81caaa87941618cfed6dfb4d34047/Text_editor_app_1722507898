/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722507899", {
    template: `
    <section id="cta-component" style="min-height: 430px" class="bg-gradient-to-br from-purple-700 via-pink-600 to-magenta-500 flex-1 p-8">
        <div id="cta-inner-container" class="max-w-screen-xl mx-auto backdrop-filter backdrop-blur-xl bg-white bg-opacity-10 rounded-3xl shadow-2xl p-12 border border-white border-opacity-20">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-6 text-5xl font-black leading-tight tracking-wide text-white text-opacity-90 shadow-lg">Build Better Writing Apps</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-8 font-medium text-white text-opacity-80 text-xl">Unleash your creativity with our powerful text building platform.</p>
                </div>
                
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-purple-800 bg-white bg-opacity-20 hover:bg-opacity-30 focus:ring-4 focus:ring-purple-300 font-bold rounded-full text-xl px-10 py-4 transition duration-300 ease-in-out transform hover:scale-105 backdrop-filter backdrop-blur-sm shadow-xl border border-white border-opacity-30">Start Creating Today</a>
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
