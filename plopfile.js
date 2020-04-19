module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'list',
        name: 'package',
        message: 'What is your package?',
        choices: ['dashboard', 'web-app'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
        validate(value) {
          if (value === '') {
            return 'Please enter a valid component';
          }
          return true;
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/{{package}}/src/containers/{{pascalCase name}}/index.js',
        templateFile: 'plop-templates/component/component-index.js.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{package}}/src/containers/{{pascalCase name}}/{{pascalCase name}}.js',
        templateFile: 'plop-templates/component/component-view.js.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{package}}/src/containers/{{pascalCase name}}/{{camelCase name}}Enhance.js',
        templateFile: 'plop-templates/component/component-enhance.js.hbs',
      },
    ],
  });
  plop.setGenerator('addNewComponent', {
    description: 'Create a new component from Antd',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
        validate(value) {
          if (value === '') {
            return 'Please enter a valid name !';
          }
          return true;
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'shared/components/{{pascalCase name}}/index.js',
        templateFile: 'plop-templates/new-component/new-component-index.js.hbs',
      },
    ],
  });
};
