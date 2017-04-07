let list = [];
if (process.env.NODE_ENV === 'production') {
  // 打包时
  list = [
      // "_style_iconfonts",
      // "dayspicker",
      // "range",
      // "switch",
      // "power",
      // "panel",
      // "dialog",
      // "button",
      // "counter",
      // "button-group",
      // "modes",
      // "mask",
      // "picker",
      // "checkboard",
      "actions",
      "actions-box",
      // "input",
      // "timer",
      // "timer-task",
      // "timepicker",
      // "transition",
      // "slide",
  ];
} else {
  // 开发时
  list = [
      "_style_iconfonts",
      "dayspicker",
      "range",
      "switch",
      "power",
      "panel",
      "dialog",
      "button",
      "counter",
      "button-group",
      "modes",
      "mask",
      "picker",
      "checkboard",
      "actions",
      "actions-box",
      "input",
      "timer",
      "timer-task",
      "timepicker",
      "transition",
      "slide",
  ];
}

module.exports = {
  list,
  dependence: {
    "dayspicker": ["button"],
    "dialog": ["mask"],
    "counter": ["button"],
    "button-group": ["button"],
    "actions": ["mask"],
    "actions-box": ["mask"],
    "timer": ["panel", "timepicker", "modes", "dialog",
      "switch", "dayspicker", "timer-task", "input", "checkboard"
    ],
    "timer-task": ["panel", "modes", "range", "counter"],
    "timepicker": ["picker"],
  }
}
