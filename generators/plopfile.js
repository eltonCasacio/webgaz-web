module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "application component",

    // inquirer prompts
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name?",
      },
    ],

    // actions to perform
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.tsx",
        templateFile: "templates/index.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/View.tsx",
        templateFile: "templates/View.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/styles.tsx",
        templateFile: "templates/styles.tsx.hbs",
      },
    ],
  });
};
