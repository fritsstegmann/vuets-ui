import UiButton from './ui/UiButton.vue'
import UICard from './ui/UICard.vue'
import UiPill from './ui/UiPill.vue'
import UiProgress from './ui/UiProgress.vue'
import UiModal from './ui/UiModal.vue'
import UiRadioBox from './ui/UiRadioBox.vue'
import UiCheckBox from './ui/UiCheckBox.vue'
import UiTextField from './ui/UiTextField.vue'
import UiCardHeader from './ui/UiCardHeader.vue'
import UiCardFooter from './ui/UiCardFooter.vue'
import UiCardGrid from './ui/UiCardGrid.vue'
import UiBreadCrumb from './ui/UiBreadCrumb.vue'
import UiBreadCrumbRouterLink from './ui/UiBreadCrumbRouterLink.vue'
import UiCardSelect from './ui/UiCardSelect.vue'
import UISelectBox from './ui/UISelectBox.vue'
import UISelectBoxOption from './ui/UISelectBoxOption.vue'

export default function (v) {
    v.component('BlocProvider', BlocProvider)
    v.component('UiBreadCrumbRouterLink', UiBreadCrumbRouterLink)
    v.component('UiBreadCrumb', UiBreadCrumb)
    v.component('UISelectBox', UISelectBox)
    v.component('UISelectBoxOption', UISelectBoxOption)
    v.component('UiButton', UiButton)
    v.component('UICard', UICard)
    v.component('UiCardGrid', UiCardGrid)
    v.component('UiCardHeader', UiCardHeader)
    v.component('UiCardFooter', UiCardFooter)
    v.component('UiPill', UiPill)
    v.component('UiProgress', UiProgress)
    v.component('UiModal', UiModal)
    v.component('UiRadioBox', UiRadioBox)
    v.component('UiCheckBox', UiCheckBox)
    v.component('UiTextField', UiTextField)
    v.component('UiCardSelect', UiCardSelect)
}
