import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElRadio,
  ElTabPane,
  ElTabs,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElFooter,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElMenuItemGroup
} from 'element-plus';
import { App } from 'vue';

const components = [
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElButton,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElFooter,
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
