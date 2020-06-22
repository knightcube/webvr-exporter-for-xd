# WebVR Exporter for XD

**This plugin lets designers export any artboard or asset into WebVR. Just select the artboard or asset you want to export, go to plugins and click on "export artboard to WebVR". This functionality is yet to be achieved and this repository is open for contributions.**

## Testing

The steps given below do not require any coding knowledge. So even if you are a designer and don't know anything about development you should not face any trouble following the steps below. Even if you do, feel free to create an issue and let me know which exact step are you facing trouble in.

### Prerequisites

- [Download Adobe XD](https://www.adobe.com/products/xd.html?sdid=12B9F15S&mv=Search&ef_id=CjwKCAjwq832BRA5EiwACvCWsdtljfu-P6dY5cwDYa75OqxZKuB0k7SfgEylYnLDM0ACb4wrcZ7CQBoClLIQAvD_BwE:G:s&s_kwcid=AL!3085!3!394015010053!e!!g!!adobe%20xd#)(Get the starter pack. It's free, for now.)
- [VSCode](https://code.visualstudio.com/)
- [Live Server extension for VSCode](https://github.com/ritwickdey/vscode-live-server)
- You will need an Adobe Developer account. [Follow the steps in the official guide.](https://adobexdplatform.com/plugin-docs/tutorials/quick-start/)
- Create a new project in the Adobe Developer Console. You will get an `id`. We will use this `id` in the upcoming steps

### Setup💻

- Create a new document(or open any other document) in Adobe XD.

- Click on the hamburger menu on top hand left corner. Go to `Plugins > Development > Show Develop Folder`. This will open the develop folder. We will need this in the next step. Hang on :)

- Download this repository or clone it *inside the develop folder* that you opened in the above step.

- Open the `web-vr-exporter-for-xd` project inside the "develop" folder in VSCode. Go to manifest.json file and replace `YOUR_ID_HERE` with the `id` you generated in the last step of the Prerequisites section.

- In Adobe XD, go to `Plugins > Development > Reload Plugins` or just use the shortcut `ctrl+shift+R`. You should be able to see the "Export Artboard to WebVR" option in the `Plugins` panel now.

- Install the "Live Server extension" in VSCode. (Go to VSCode where the project is opened > Press `ctrl+shift+x`> Search for "Live Server" > Install it.)

- Go to `index.html > Right click anywhere in the editor window > Open with Live Server`. This opens a live server in the browser where you will be able to see changes you make in your artboard. Keep this open.

#### Tip - Keep the browser and Adobe XD side by side. It helps visualizing things simultaneously!;) ([Check out this demo video to understand better](https://www.youtube.com/watch?v=M0qm_HESQ2E))

### Final steps

- Create a new artboard(or use existing artboard) in Adobe XD.

- Look up "360 degree images" in Google, select any image and drag it inside the artboard(checkout the demo video above if you didn't understand the dragging step) you created in Adobe XD. (*Note - You can use any high resolution image.*)

- Select the artboard that you want to export > Go to Plugins > Export artboard to WebVR. The WebVR scene will open in the Browser and you will be able to visualize the artboard as a scene in WebVR.

### Have fun🥳

- You can design the artboards with icons or text and follow the 3rd step in the "Final steps" section to keep experimenting and create prototypes.

### Need help?🤝

Faced trouble in the setup process? Create an issue in the repo. I will help you :)

### Future Improvements🤔

- The whole deployment process seems to be a hurdle for a designer. It will be great if the designer only uses Adobe XD and **does not install VSCode at all**. This can be done by opening the live server as soon as the "Export Artboard to WebVR" button is clicked. Once this issue is resolved this plugin can be distributed to be used by the Adobe XD community and future designers.

- Few images are distorted when opened in WebVR. What can be a way to figure this out in advance or scale the image without the designer having to worry about it? 🤔

- Have more ideas? Create an issue or make a PR. Contribute ;)

### Libraries used

- [A-Frame](https://aframe.io/)

### Reference

- https://adobexdplatform.com/plugin-docs/