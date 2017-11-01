exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    borderColor: 'blue',
    cursorColor: 'blue',
    css: `
      ${config.css || ''}
      .tabs_nav .tabs_list .tab_text {
        color: blue;
      }
      .tabs_nav .tabs_title {
        color: blue;
      }
    `
  });
}
