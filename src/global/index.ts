import { App } from 'vue';
import registerElement from './register-element';
import registerproperties from './reigster-propserties';
export function registerApp(app: App) {
  app.use(registerElement);
  app.use(registerproperties);
}
