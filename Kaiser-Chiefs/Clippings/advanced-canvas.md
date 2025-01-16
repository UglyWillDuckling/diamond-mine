---
title: "Developer-Mike/obsidian-advanced-canvas: ⚡ Supercharge your Obsidian.md canvas experience! Create presentations, flowcharts and more!"
source: https://github.com/Developer-Mike/obsidian-advanced-canvas
author:
  - "[[GitHub]]"
published: 
created: 2025-01-15
description: ⚡ Supercharge your Obsidian.md canvas experience! Create presentations, flowcharts and more! - Developer-Mike/obsidian-advanced-canvas
tags:
  - plugin
  - obsidian-plugin
  - obsidian
related:
  - "[[canvas]]"
  - "[[canvas-send-to-back]]"
  - "[[simple-canvasearch]]"
  - "[[Using Obsidian Canvas to Create Custom Dashboards]]"
---
![icon](https://github.githubassets.com/favicons/favicon-dark.svg)

**⚡ Supercharge** your canvas experience! Create presentations, flowcharts and more!
## Installation

Open the Community Plugins tab in the settings and search for "Advanced Canvas" (or click [here](https://obsidian.md/plugins?id=advanced-canvas)).

Other installation methods  

- Install it using [BRAT](https://github.com/TfTHacker/obsidian42-brat)
- Manual folder creation
1. Create a folder named `obsidian-advanced-canvas` in your vault's plugins folder (`<vault>/.obsidian/plugins/`).
2. Download `main.js`, `styles.css` and `manifest.json` from the latest release and put them in the `obsidian-advanced-canvas` folder.
3. Enable the plugin in Settings -> Community plugins -> Installed plugins

## Features

All features can be enabled/disabled in the settings.

- Create groups independently of the nodes
- [Better default settings](https://github.com/Developer-Mike/#better-default-settings)
- More [canvas commands](https://github.com/Developer-Mike/#canvas-commands)
- [Node Styles](https://github.com/Developer-Mike/#node-styles)
- (Flowchart) [Node Shapes](https://github.com/Developer-Mike/#node-shapes)
- Terminal shape
- Process shape
- Decision shape
- Input/Output shape
- On-page Reference shape
- Predefined Process shape
- Document shape
- Database shape
- [Border Styles](https://github.com/Developer-Mike/#border-styles)
- Dotted
- Dashed
- Invisible
- Text Alignment
- Left
- Center
- Right
- [Edge Styles](https://github.com/Developer-Mike/#edge-styles)
- [Path Styles](https://github.com/Developer-Mike/#path-styles)
- Dotted
- Short-dashed
- Long-dashed
- [Arrow Styles](https://github.com/Developer-Mike/#arrow-styles)
- Triangle Outline
- Halved Triangle
- Thin Triangle
- Diamond
- Diamond Outline
- Circle
- Circle Outline
- [Pathfinding Methods](https://github.com/Developer-Mike/#pathfinding-methods)
- Default
- Straight
- Square
- A\*
- Add [custom styles](https://github.com/Developer-Mike/#custom-styles) to nodes and edges for unlimited possibilities
- [Custom colors](https://github.com/Developer-Mike/#custom-colors) in the color picker
- [Presentation mode](https://github.com/Developer-Mike/#presentation-mode)
- Create presentations by connecting nodes with arrows
- [Portals](https://github.com/Developer-Mike/#portals)
- Embed other canvases inside your canvas
- Create edges (arrows) to the embedded canvas
- [Collapsible groups](https://github.com/Developer-Mike/#collapsible-groups)
- Collapse and expand groups to organize your canvas
- [Auto node resizing](https://github.com/Developer-Mike/#auto-node-resizing)
- Resize nodes automatically when the text content changes
- [Focus mode](https://github.com/Developer-Mike/#focus-mode)
- Focus on a single node and blur all other nodes
- [Better readonly](https://github.com/Developer-Mike/#better-readonly)
- Disable node popup menus
- Lock the canvas' position
- Lock the canvas' zoom
- [Encapsulate selection](https://github.com/Developer-Mike/#encapsulate-selection)
- Create a new canvas from the selected nodes
- Create a link to the new canvas in the current canvas
- Expose [canvas events](https://github.com/Developer-Mike/#canvas-events) to use them in other plugins
- Expose node data to style them using CSS

## Support

Please consider supporting the plugin. There are many hours of work and effort behind it. The two easiest ways to support the plugin are either by starring ⭐ the repository or by donating any amount on [Ko-fi](https://ko-fi.com/X8X27IA08) ❤️. Thank you!

[![ko-fi](https://camo.githubusercontent.com/70e2ef5e0263b261f9a2a314bb1d6919d1d43292eed117fe8fc766a68c7d96ea/68747470733a2f2f6b6f2d66692e636f6d2f696d672f676974687562627574746f6e5f736d2e737667)](https://ko-fi.com/X8X27IA08) [![Time Spent](https://camo.githubusercontent.com/be536cbcb7e50dffc25ed04bbeb033a108999239a8d8274e3472e76787f86fa4/68747470733a2f2f696d672e736869656c64732e696f2f656e64706f696e743f75726c3d68747470733a2f2f77616b6170692e6465762f6170692f636f6d7061742f736869656c64732f76312f446576656c6f7065722d4d696b652f696e74657276616c3a616c6c5f74696d652f70726f6a6563743a6f6273696469616e2d616476616e6365642d63616e766173266c6162656c3d54696d652532305370656e74267374796c653d666f722d7468652d626164676526636f6c6f72413d66666666666626636f6c6f72423d666635653562)](https://camo.githubusercontent.com/be536cbcb7e50dffc25ed04bbeb033a108999239a8d8274e3472e76787f86fa4/68747470733a2f2f696d672e736869656c64732e696f2f656e64706f696e743f75726c3d68747470733a2f2f77616b6170692e6465762f6170692f636f6d7061742f736869656c64732f76312f446576656c6f7065722d4d696b652f696e74657276616c3a616c6c5f74696d652f70726f6a6563743a6f6273696469616e2d616476616e6365642d63616e766173266c6162656c3d54696d652532305370656e74267374796c653d666f722d7468652d626164676526636f6c6f72413d66666666666626636f6c6f72423d666635653562)

## Better Default Settings

- Enforce all new nodes to be aligned to the grid
- Customize default text node size
- Customize default file node size
- Modify the minimum node size
- Disable the font scaling relative to the zoom level

## Canvas Commands

- `Advanced Canvas: Open Quicksettings`
- Open the quicksettings menu
- `Advanced Canvas: Create text node`
- Create a new text node
- `Advanced Canvas: Create file node`
- Create a new file node
- `Advanced Canvas: Select all edges`
- Select all edges
- `Advanced Canvas: Zoom to selection`
- Zoom to the bounding box of the selected nodes
- `Advanced Canvas: Clone node up/down/left/right`
- Clone the selected node in the direction of the arrow keys
- The cloned node will have the same dimensions and color as the original node
- `Advanced Canvas: Expand node up/down/left/right`
- Expand the selected node in the direction of the arrow keys

## Node Styles

You can customize the default node styles using the settings.

### Node Shapes

Flowchart Example [![Flowchart Example](https://github.com/Developer-Mike/obsidian-advanced-canvas/raw/main/assets/sample-flowchart.png)](https://github.com/Developer-Mike/obsidian-advanced-canvas/blob/main/assets/sample-flowchart.png) 

#### Usage

- Use the updated popup menu set a node's shape

#### Shapes

Terminal Shape [![Terminal Shape](https://github.com/Developer-Mike/obsidian-advanced-canvas/raw/main/assets/flowchart-nodes/terminal.png)](https://github.com/Developer-Mike/obsidian-advanced-canvas/blob/main/assets/flowchart-nodes/terminal.png)  Process/Center Shape [![Process/Center Shape](https://github.com/Developer-Mike/obsidian-advanced-canvas/raw/main/assets/flowchart-nodes/process.png)](https://github.com/Developer-Mike/obsidian-advanced-canvas/blob/main/assets/flowchart-nodes/process.png)  Decision Shape [![Decision Shape](https://github.com/Developer-Mike/obsidian-advanced-canvas/raw/main/assets/flowchart-nodes/decision.png)](https://github.com/Developer-Mike/obsidian-advanced-canvas/blob/main/assets/flowchart-nodes/decision.png)  Input/Output Shape [![Input/Output Shape](https://github.com/Developer-Mike/obsidian-advanced-canvas/raw/main/assets/flowchart-nodes/input-output.png)](https://github.com/Developer-Mike/obsidian-advanced-canvas/blob/main/assets/flowchart-nodes/input-output.png)  On-page Reference Shape [![On-page Reference Shape](https://github.com/Developer-Mike/obsidian-advanced-canvas/raw/main/assets/flowchart-nodes/reference.png)](https://github.com/Developer-Mike/obsidian-advanced-canvas/blob/main/assets/flowchart-nodes/reference.png)  Predefined Process Shape [![Predefined Process Shape](https://github.com/Developer-Mike/obsidian-advanced-canvas/raw/main/assets/flowchart-nodes/predefined-process.png)](https://github.com/Developer-Mike/obsidian-advanced-canvas/blob/main/assets/flowchart-nodes/predefined-process.png)  Document Shape [![Document Shape](https://github.com/Developer-Mike/obsidian-advanced-canvas/raw/main/assets/flowchart-nodes/document.png)](https://github.com/Developer-Mike/obsidian-advanced-canvas/blob/main/assets/flowchart-nodes/document.png)  Database Shape [![Database Shape](https://github.com/Developer-Mike/obsidian-advanced-canvas/raw/main/assets/flowchart-nodes/database.png)](https://github.com/Developer-Mike/obsidian-advanced-canvas/blob/main/assets/flowchart-nodes/database.png) 

### Border Styles

Set the style of the border to dotted, dashed or invisible.

Border Styles Example [![Border Styles Example](https://github.com/Developer-Mike/obsidian-advanced-canvas/raw/main/assets/border-styles.png)](https://github.com/Developer-Mike/obsidian-advanced-canvas/blob/main/assets/border-styles.png) 

## Edge Styles

You can customize the default edge styles using the settings.

### Path Styles

Set the style of the edge paths to dotted, short-dashed or long-dashed.

Edge Styles Example [![Edge Path Styles Example](https://github.com/Developer-Mike/obsidian-advanced-canvas/raw/main/assets/edge-path-styles.png)](https://github.com/Developer-Mike/obsidian-advanced-canvas/blob/main/assets/edge-path-styles.png) 

### Arrow Styles

Set the style of the arrows to triangle outline, halved triangle, thin triangle, diamond, diamond outline, circle or circle outline.

Arrow Styles Example [![Edge Arrow Styles Example](https://github.com/Developer-Mike/obsidian-advanced-canvas/raw/main/assets/edge-arrow-styles.png)](https://github.com/Developer-Mike/obsidian-advanced-canvas/blob/main/assets/edge-arrow-styles.png) 

### Pathfinding Methods

Set the pathfinding method of the edges (arrows) to default, straight, squared or A\*.

Path Styles Example [![Edge Pathfinding Methods Example](https://github.com/Developer-Mike/obsidian-advanced-canvas/raw/main/assets/edge-pathfinding-methods.png)](https://github.com/Developer-Mike/obsidian-advanced-canvas/blob/main/assets/edge-pathfinding-methods.png) 

## Custom Styles

Custom style attributes for nodes and edges can easily be added.

1. Add a popup menu option

- Open the `<VAULT-PATH>/.obsidian/plugins/obsidian-advanced-canvas/data.json` file
- If you want to add an option to node popup menu, search for `customNodeStyleAttributes` property, otherwise search for `customEdgeStyleAttributes` property. (Create it if it doesn't exist yet)
- Add the custom popup menu option (Remove the comments!)

```
 "customNodeStyleAttributes": [
     {
         "datasetKey": "exampleStyleAttribute", // Must be unique and written in camelCase
         "label": "Example Style Attribute",
         "options": [
             {
                 "icon": "cloud-sun", // Choose an icon from lucide.dev
                 "label": "Sunny Appearance",
                 "value": null // Null means default
             },
             {
                 "icon": "cloud-rain-wind", // Choose an icon from lucide.dev
                 "label": "Rainy Appearance",
                 "value": "rainy" // The value that gets set
             }
         ]   
     }
     // You can add more categories here
 ]
```
2. Create a new CSS snippet in your vault (And enable it in the settings)

```
.canvas-node[data-<DATASET-KEY>="rainy"] { /* The dataset key is now written in kebab-case */
    background-color: #7f7f7f;
}
```
3. Reload Obsidian and enjoy your new custom style!  
[![Custom Style Attribute Example](https://github.com/Developer-Mike/obsidian-advanced-canvas/raw/main/assets/custom-style-attribute-example.png)](https://github.com/Developer-Mike/obsidian-advanced-canvas/blob/main/assets/custom-style-attribute-example.png)

## Custom Colors

Add custom colors to the color picker. You can add them using the following css snippet:

```
:root {
    /* Where X is the index of the color in the palette */
    /* The colors 1-6 are already used by Obsidian */
    --canvas-color-X: 0, 255, 0; /* RGB */
}
```

Custom Colors In Palette [![Custom Colors In Palette](https://github.com/Developer-Mike/obsidian-advanced-canvas/raw/main/assets/custom-colors.png)](https://github.com/Developer-Mike/obsidian-advanced-canvas/blob/main/assets/custom-colors.png) 

## Presentation Mode

In presentation mode, you can navigate through the nodes using the arrow keys or the PageUp/PageDown keys (Compatible with most presentation remotes). The different slides/nodes are connected using arrows. If you want to have multiple arrows pointing from the same node, you can number them in the order you want to navigate through them. While in presentation mode, the canvas is in readonly mode (So [better readonly](https://github.com/Developer-Mike/#better-readonly) effects the presentation mode as well!). You can exit the presentation mode using the `ESC` key or the corresponding command. If you want to continue the presentation from the last slide you were on, you can use the `Advanced Canvas: Continue presentation` command.

[![Presentation mode example](https://github.com/Developer-Mike/obsidian-advanced-canvas/raw/main/assets/sample-presentation-simple.gif)](https://github.com/Developer-Mike/obsidian-advanced-canvas/blob/main/assets/sample-presentation-simple.gif)

Canvas File [![Presentation canvas file](https://github.com/Developer-Mike/obsidian-advanced-canvas/raw/main/assets/sample-presentation-simple.png)](https://github.com/Developer-Mike/obsidian-advanced-canvas/blob/main/assets/sample-presentation-simple.png) 

### More Complex Example

[![Complex presentation mode example](https://github.com/Developer-Mike/obsidian-advanced-canvas/raw/main/assets/sample-presentation-complex.gif)](https://github.com/Developer-Mike/obsidian-advanced-canvas/blob/main/assets/sample-presentation-complex.gif)

Canvas File [![Complex presentation canvas file](https://github.com/Developer-Mike/obsidian-advanced-canvas/raw/main/assets/sample-presentation-complex.png)](https://github.com/Developer-Mike/obsidian-advanced-canvas/blob/main/assets/sample-presentation-complex.png) 

### Usage

- Create the first slide
- Create the first slide of the presentation using the updated popup menu
- OR create a node and mark it as the first slide using the updated card menu
- Add more slides
- Link the slides using arrows
- If you want to loop back to a previous slide, you can number the arrows in the order you want to navigate through them
- **TIP:** Create slides with consistent dimensions by using the updated card menu
- Control the presentation
- Start the presentation using the command palette (`Advanced Canvas: Start presentation`)
- Change slides using the arrow keys
- Exit the presentation using the `ESC` key

## Portals

Embed other canvases inside your canvas and create edges (arrows) to the embedded canvas.

[![Portal example](https://github.com/Developer-Mike/obsidian-advanced-canvas/raw/main/assets/sample-portal-usage.png)](https://github.com/Developer-Mike/obsidian-advanced-canvas/blob/main/assets/sample-portal-usage.png)

### Usage

- Embed a canvas file and click on the door icon of the popup menu to open a portal

## Collapsible Groups

Collapse and expand groups to organize your canvas.

Collapsible Groups Example [![Collapsible Groups Example](https://github.com/Developer-Mike/obsidian-advanced-canvas/raw/main/assets/collapsible-groups.png)](https://github.com/Developer-Mike/obsidian-advanced-canvas/blob/main/assets/collapsible-groups.png) 

## Auto Node Resizing

Resize nodes automatically when the text content changes.

Auto Node Resizing Example [![Auto Node Resizing Example](https://github.com/Developer-Mike/obsidian-advanced-canvas/raw/main/assets/auto-node-resizing.gif)](https://github.com/Developer-Mike/obsidian-advanced-canvas/blob/main/assets/auto-node-resizing.gif) 

## Focus Mode

Focus on a single node and blur all other nodes.

Focus Mode Example [![Focus Mode](https://github.com/Developer-Mike/obsidian-advanced-canvas/raw/main/assets/focus-mode.png)](https://github.com/Developer-Mike/obsidian-advanced-canvas/blob/main/assets/focus-mode.png) 

## Better Readonly

- Disable node popup menus
- Lock the canvas' position
- Lock the canvas' zoom
- BUT to retain some interactivity, it allows zooming to a bounding box (e.g. zoom to selection, zoom to fit all)

### Usage

- Use the updated control menu to toggle the new features (Only shown if the canvas is in readonly mode)

## Encapsulate Selection

Move the current selection to a new canvas and create a link in the current canvas.

### Usage

- Select the nodes you want to encapsulate
- Use the context menu (right click) to encapsulate the selection
- OR use the command palette (`Advanced Canvas: Encapsulate selection`)

## Canvas Events

All custom events are prefixed with `advanced-canvas:` and can be listened to using `app.workspace.on` (Just like the default events).

All Events

- `advanced-canvas:canvas-changed`
- Fired when a new canvas gets loaded
- Payload: `Canvas`
- `advanced-canvas:viewport-changed:before` and `advanced-canvas:viewport-changed:after`
- Fired before and after the viewport gets changed
- Payload: `Canvas`
- `advanced-canvas:node-moved`
- Fired when a node gets moved
- Payload: `Canvas`, `Node`
- `advanced-canvas:double-click`
- Fired when the canvas gets double-clicked
- Payload: `Canvas`, `MouseEvent`, `preventDefault: { value: Boolean }`
- `advanced-canvas:dragging-state-changed`
- Fired when the dragging state of the canvas changes
- Payload: `Canvas`, `boolean`
- `advanced-canvas:node-created`
- Fired when a new node gets created
- Payload: `Canvas`, `Node`
- `advanced-canvas:edge-created`
- Fired when a new edge gets created
- Payload: `Canvas`, `Edge`
- `advanced-canvas:node-added`
- Fired when a new node gets added
- Payload: `Canvas`, `Node`
- `advanced-canvas:edge-added`
- Fired when a new edge gets added
- Payload: `Canvas`, `Edge`
- Payload: `Canvas`, `Edge`
- `advanced-canvas:node-changed`
- Fired when any node gets changed
- Payload: `Canvas`, `Node`
- `advanced-canvas:edge-changed`
- Fired when any edge gets changed
- Payload: `Canvas`, `Edge`
- `advanced-canvas:node-text-content-changed`
- Fired when the text content of a node gets changed (While typing)
- Payload: `Canvas`, `Node`, `ViewUpdate (From CodeMirror)`
- `advanced-canvas:node-removed`
- Fired when a node gets removed
- Payload: `Canvas`, `Node`
- `advanced-canvas:edge-removed`
- Fired when an edge gets removed
- `advanced-canvas:copy`
- Fired when the selection gets copied
- Payload: `Canvas`, `SelectionData (Reference!)`
- `advanced-canvas:node-editing-state-changed`
- Fired when the editing state of a node changes
- Payload: `Canvas`, `Node`, `boolean (isEditing)`
- `advanced-canvas:node-bbox-requested`
- Fired when the bounding box of a node gets requested (e.g. for the edge path or when dragging a group)
- Payload: `Canvas`, `Node`, `BBox (Reference!)`
- `advanced-canvas:edge-center-requested`
- Fired when the center of an edge gets requested (e.g. for the edge label position)
- Payload: `Canvas`, `Edge`, `Position (Reference!)`
- `advanced-canvas:containing-nodes-requested`
- Fired when the nodes inside a bounding box get requested
- Payload: `Canvas`, `BBox`, `Node[] (Reference!)`
- `advanced-canvas:selection-changed`
- Fired when the selection of the canvas changes
- Payload: `Canvas`, `oldSelection: Set<Node|Edge>`, `updateSelection: (() => void) => void`
- `advanced-canvas:zoom-to-bbox:before` and `advanced-canvas:zoom-to-bbox:after`
- Fired before and after the canvas gets zoomed to a bounding box (e.g. zoom to selection, zoom to fit all)
- Payload: `Canvas`, `BBox`
- `advanced-canvas:popup-menu-created`
- Fired when the a node popup menu gets created (Not firing multiple times if it gets moved between nodes of the same type)
- Payload: `Canvas`
- `advanced-canvas:node-interaction`
- Fired when a node gets hovered over
- Payload: `Canvas`, `Node`
- `advanced-canvas:undo`
- Fired when undo gets called
- Payload: `Canvas`
- `advanced-canvas:redo`
- Fired when redo gets called
- Payload: `Canvas`
- `advanced-canvas:readonly-changed`
- Fired when the readonly state of the canvas changes
- Payload: `Canvas`, `boolean`
- `advanced-canvas:data-requested`
- Fired when the canvas data gets requested
- Payload: `Canvas`, `CanvasData (Reference!)`
- `advanced-canvas:load-data`
- Fired when the canvas data gets set
- Payload: `Canvas`, `CanvasData (Reference!)`, `setData: (CanvasData) => void`
- `advanced-canvas:canvas-saved:before` and `advanced-canvas:canvas-saved:after`
- Fired before and after the canvas gets saved
- Payload: `Canvas`

## Settings

Every feature can be enabled/disabled in the settings. All features were made to be as customizable as possible.

## Contributing

All contributions are welcome! You may want to check out issues with the `only PRs` label to find issues that won't be worked on by me. But feel free to work on any issue or non-issue you want to work on!

## Star History

[![Star History Chart](https://camo.githubusercontent.com/3965592da79a95c5e06f9f78806704fe8358404b26d22a90dc1b8d5d595c39cf/68747470733a2f2f6170692e737461722d686973746f72792e636f6d2f7376673f7265706f733d446576656c6f7065722d4d696b652f6f6273696469616e2d616476616e6365642d63616e76617326747970653d44617465)](https://star-history.com/#Developer-Mike/obsidian-advanced-canvas&Date)