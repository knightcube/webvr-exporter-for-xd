const application = require("application");
const fs = require("uxp").storage.localFileSystem;

async function exportRendition(selection) {
  const pluginFolder = await fs.getPluginFolder();
  const file = await pluginFolder.createFile("exported_artboard.png", {
    overwrite: true,
  });
  console.log(`Number of selected artboards : ${selection.items.length}`);

  let renditionSettings = [
    {
      node: selection.items[0],
      outputFile: file,
      type: application.RenditionType.PNG,
      scale: 2,
    },
  ];

  if (selection.items.length > 0) {
    application
      .createRenditions(renditionSettings)
      .then((results) => {
        console.log(
          `PNG rendition has been saved at ${results[0].outputFile.nativePath}`
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

module.exports = {
  commands: {
    exportRendition,
  },
};
