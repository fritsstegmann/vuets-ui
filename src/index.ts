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

export function VueUI(v: any) {
    v.component("ui-button", UiButton);
    v.component("ui-card", UiCard);
    v.component("ui-pill", UiPill);
    v.component("ui-progress", UiProgress);
    v.component("ui-modal", UiModal);
    v.component("ui-radio-box", UiRadioBox);
    v.component("ui-check-box", UiCheckBox);
}