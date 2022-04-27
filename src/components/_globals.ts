import {App} from "vue";

export const requireComponent: any = require.context(
    './layout/',
    true,
    /Base[\w-]+\.vue$/
);
console.log(requireComponent);
export const registerComponents = (requiredComponents: any, app: App) => {
    requiredComponents.keys().forEach((fileName: string) => {
        // Get the component config
        const componentConfig = requiredComponents(fileName);
        // Get the PascalCase version of the component name
        const componentName = fileName
            .replace(/^\.\//, '')
            .replace(/\.\w+$/, '')

        app.component(componentName, componentConfig.default || componentConfig);
    });
}
