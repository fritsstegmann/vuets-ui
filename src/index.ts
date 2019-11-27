// @ts-ignore
import UiButton from './ui/UiButton.vue';
// @ts-ignore
import UiCard from './ui/UiCard.vue';
// @ts-ignore
import UiPill from './ui/UiPill.vue';
// @ts-ignore
import UiRadioButton from './ui/UiRadioButton.vue';
// @ts-ignore
import UiModal from './ui/UiModal.vue';
// @ts-ignore
import UiProgress from './ui/UiProgress.vue';
// @ts-ignore
import UiCheckBox from './ui/UiCheckBox.vue';


export class UiPluginSettings {
}

export const UiPlugin: any = {

    install(Vue: any, options?: UiPluginSettings): void {
        Vue.component('ui-button', UiButton);
        Vue.component('ui-card', UiCard);
        Vue.component('ui-pill', UiPill);
        Vue.component('ui-input-radio', UiRadioButton);
        Vue.component('ui-input-checkbox', UiCheckBox);
        Vue.component('ui-modal', UiModal);
        Vue.component('ui-progress', UiProgress);
    }
};

export default UiPlugin;

// export default function UiPlugin() {
//     function install(V: typeof Vue) {
//         V.component('ui-card', UiCard);
//         V.component('ui-pill', UiPill);
//         V.component('ui-input-radio', UiRadioButton);
//         V.component('ui-input-checkbox', UiCheckBox);
//         V.component('ui-modal', UiModal);
//         V.component('ui-progress', UiProgress);
//     }
// }