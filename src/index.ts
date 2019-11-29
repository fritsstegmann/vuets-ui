import UiButton from "./ui/UiButton";
import UiCard from "./ui/UiCard";
import UiPill from "./ui/UiPill";
import UiProgress from "./ui/UiProgress";
import UiModal from "./ui/UiModal";

export function VueUI(v: any) {
    v.component("ui-button", UiButton);
    v.component("ui-card", UiCard);
    v.component("ui-pill", UiPill);
    v.component("ui-progress", UiProgress);
    v.component("ui-modal", UiModal);
}