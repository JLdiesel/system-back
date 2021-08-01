import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElRadio,
  ElTabPane,
  ElTabs
} from 'element-plus';
import { App } from 'vue';

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabPane,
  ElTabs,
  ElCheckbox,
  ElLink
];

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}
