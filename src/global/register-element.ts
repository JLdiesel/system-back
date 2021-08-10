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
  ElMenuItemGroup,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn
} from 'element-plus';
import { App } from 'vue';

const components = [
  ElDatePicker,
  ElOption,
  ElSelect,
  ElRow,
  ElCol,
  ElAvatar,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
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
  ElLink,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn
];

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}
