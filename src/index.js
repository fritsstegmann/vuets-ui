import UiButton from "./ui/UiButton";
import UiCard from "./ui/UiCard";
import UiPill from "./ui/UiPill.vue";
import UiProgress from "./ui/UiProgress";

export function VueUI(v) {
    v.component("ui-button", UiButton);
    v.component("ui-card", UiCard);
    v.component("ui-pill", UiPill);
    v.component("ui-progress", UiProgress);
}