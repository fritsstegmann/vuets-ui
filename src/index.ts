// @ts-ignore
import UiButton from "./ui/UiButton";
// @ts-ignore
import UiCard from "./ui/UiCard";
// @ts-ignore
import UiPill from "./ui/UiPill";
// @ts-ignore
import UiProgress from "./ui/UiProgress";
// @ts-ignore
import UiModal from "./ui/UiModal";
// @ts-ignore
import UiRadioBox from "./ui/UiRadioBox";
// @ts-ignore
import UiCheckBox from "./ui/UiCheckBox";
// @ts-ignore
import UiTextField from "./ui/UiTextField.vue";

export function VueUI(v: any) {
    v.component("UiButton", UiButton);
    v.component("UiCard", UiCard);
    v.component("UiPill", UiPill);
    v.component("UiProgress", UiProgress);
    v.component("UiModal", UiModal);
    v.component("UiRadioBox", UiRadioBox);
    v.component("UiCheckBox", UiCheckBox);
    v.component("UiTextField", UiTextField);
}