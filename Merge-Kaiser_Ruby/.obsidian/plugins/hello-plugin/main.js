var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => LogBaseItemsPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian2 = require("obsidian");

// src/progress.ts
var import_obsidian = require("obsidian");
var DEFAULT_CONCURRENCY = 8;
async function withProgress(files, label, action, concurrency = DEFAULT_CONCURRENCY) {
  let cancelled = false;
  const notice = new import_obsidian.Notice("", 0);
  const cancelBtn = notice.messageEl.createEl("button", {
    text: "Cancel",
    cls: "mod-warning bulk-properties-cancel-btn"
  });
  cancelBtn.addEventListener("click", () => {
    cancelled = true;
  });
  const textEl = notice.messageEl.createSpan();
  notice.messageEl.appendChild(cancelBtn);
  let succeeded = 0;
  const failed = [];
  let nextIndex = 0;
  let completedCount = 0;
  try {
    textEl.textContent = `${label} 0 / ${files.length}...`;
    const workerCount = Math.min(concurrency, files.length);
    const runWorker = async () => {
      while (!cancelled) {
        const i = nextIndex++;
        if (i >= files.length) return;
        const file = files[i];
        try {
          await action(file);
          succeeded++;
        } catch (err) {
          console.error(
            `bulk-properties: ${label} failed on ${file.path}:`,
            err
          );
          failed.push(file.path);
        }
        completedCount++;
        if (!cancelled) {
          textEl.textContent = `${label} ${completedCount} / ${files.length}...`;
        }
      }
    };
    const workers = [];
    for (let w = 0; w < workerCount; w++) {
      workers.push(runWorker());
    }
    await Promise.all(workers);
  } finally {
    notice.hide();
  }
  return { succeeded, failed, cancelled, total: files.length };
}

// src/main.ts
var PropertyValueSuggest = class extends import_obsidian2.AbstractInputSuggest {
  constructor(app, inputEl, knownValues, currentPills, normalize) {
    super(app, inputEl);
    /**
     * Set to true when a suggestion is selected via mouse click. The pill
     * container's focusout handler defers its commit and checks this flag
     * to avoid committing partial query text as a pill. Only mouse clicks
     * cause the focusout race; keyboard selections are captured by the
     * suggest's Scope before focusout fires.
     */
    this.didSelect = false;
    this.knownValues = knownValues;
    this.currentPills = currentPills;
    this.normalizeFn = normalize;
  }
  getSuggestions(query) {
    const lower = query.toLowerCase();
    const existing = new Set(this.currentPills().map(this.normalizeFn));
    return this.knownValues.filter(
      (v) => this.normalizeFn(v).toLowerCase().includes(lower) && !existing.has(this.normalizeFn(v))
    );
  }
  renderSuggestion(value, el) {
    el.setText(value);
  }
  selectSuggestion(value, evt) {
    var _a;
    if (evt instanceof MouseEvent) {
      this.didSelect = true;
    }
    this.setValue("");
    this.close();
    (_a = this.onValueSelected) == null ? void 0 : _a.call(this, value, evt);
  }
};
var DEFAULT_SETTINGS = {
  logOnStartup: false,
  logOnViewChange: true,
  includeAllProperties: true
};
var LogBaseItemsPlugin = class extends import_obsidian2.Plugin {
  constructor() {
    super(...arguments);
    this.lastBasePath = "";
    this.activeController = null;
    this.allVaultProperties = /* @__PURE__ */ new Map();
  }
  async onload() {
    await this.loadSettings();
    this.buildPropertyCache();
    this.registerEvent(
      this.app.vault.on("modify", (file) => {
        if (file instanceof import_obsidian2.TFile && file.extension === "md") {
          setTimeout(() => this.buildPropertyCache(), 100);
        }
      })
    );
    this.registerEvent(
      this.app.metadataCache.on("changed", (file) => {
        if (file instanceof import_obsidian2.TFile && file.extension === "md") {
          setTimeout(() => this.buildPropertyCache(), 100);
        }
      })
    );
    this.addRibbonIcon("lucide-table", "Update Base Items", () => {
      this.openLogModal();
    });
    this.addCommand({
      id: "log-base-items",
      name: "Log items from current Base",
      callback: () => this.openLogModal()
    });
    if (this.settings.logOnViewChange) {
      this.registerEvent(
        this.app.workspace.on("active-leaf-change", () => {
          this.updateActiveController();
        })
      );
    }
    if (this.settings.logOnStartup) {
      setTimeout(() => this.logCurrentBaseItems(), 1e3);
    }
    this.addSettingTab(new LogBaseItemsSettingTab(this.app, this));
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  /**
   * Builds a cache of all properties in the vault
   */
  buildPropertyCache() {
    console.log("Building property cache for entire vault...");
    this.allVaultProperties.clear();
    const files = this.app.vault.getMarkdownFiles();
    let totalFiles = 0;
    let filesWithProperties = 0;
    files.forEach((file) => {
      const metadata = this.app.metadataCache.getFileCache(file);
      if (metadata && metadata.frontmatter) {
        filesWithProperties++;
        const frontmatter = metadata.frontmatter;
        Object.keys(frontmatter).forEach((key) => {
          var _a;
          const value = frontmatter[key];
          const valueStr = String(value);
          if (!this.allVaultProperties.has(key)) {
            this.allVaultProperties.set(key, /* @__PURE__ */ new Set());
          }
          (_a = this.allVaultProperties.get(key)) == null ? void 0 : _a.add(valueStr);
        });
      }
      totalFiles++;
    });
    console.log(
      `Property cache built: ${this.allVaultProperties.size} unique properties found across ${filesWithProperties}/${totalFiles} files`
    );
    const propArray = Array.from(this.allVaultProperties.keys());
    if (propArray.length > 0) {
      console.log(
        `Sample properties: ${propArray.slice(0, 10).join(", ")}${propArray.length > 10 ? "..." : ""}`
      );
    }
  }
  /**
   * Gets all property names from the entire vault
   */
  getVaultProperties() {
    const properties = Array.from(this.allVaultProperties.keys());
    properties.sort((a, b) => a.localeCompare(b));
    const commonProps = [
      "file",
      "title",
      "name",
      "path",
      "tags",
      "created",
      "modified",
      "date"
    ];
    const sortedProperties = [];
    commonProps.forEach((prop) => {
      if (properties.includes(prop)) {
        sortedProperties.push(prop);
        const index = properties.indexOf(prop);
        properties.splice(index, 1);
      }
    });
    sortedProperties.push(...properties);
    if (!sortedProperties.includes("file.basename")) {
      sortedProperties.unshift("file.basename");
    }
    if (!sortedProperties.includes("file.path")) {
      sortedProperties.splice(1, 0, "file.path");
    }
    return sortedProperties;
  }
  /**
   * Gets properties from the current Base only
   */
  getBaseProperties() {
    if (!this.activeController) {
      return [];
    }
    try {
      const results = this.activeController.results;
      if (!results) {
        return [];
      }
      const entries = Array.from(results.values() || []);
      if (entries.length === 0) {
        return [];
      }
      const firstEntry = entries[0];
      let propertyKeys = [];
      if (typeof firstEntry.getProperties === "function") {
        const props = firstEntry.getProperties();
        propertyKeys = Object.keys(props || {});
      }
      if (propertyKeys.length === 0 && firstEntry.properties) {
        propertyKeys = Object.keys(firstEntry.properties || {});
      }
      if (!propertyKeys.includes("file.basename")) {
        propertyKeys.unshift("file.basename");
      }
      if (!propertyKeys.includes("file.path")) {
        propertyKeys.splice(1, 0, "file.path");
      }
      return propertyKeys.sort((a, b) => a.localeCompare(b));
    } catch (error) {
      console.error("Error getting Base properties:", error);
      return [];
    }
  }
  /**
   * Gets all available properties (vault-wide or Base-specific based on settings)
   */
  getAvailableProperties() {
    if (this.settings.includeAllProperties) {
      return this.getVaultProperties();
    } else {
      return this.getBaseProperties();
    }
  }
  /**
   * Opens the modal with property selector
   */
  openLogModal() {
    this.updateActiveController();
    if (!this.activeController) {
      new Notice2("No active Base found. Please open a Base view first.");
      return;
    }
    const properties = this.getAvailableProperties();
    if (properties.length === 0) {
      new Notice2(
        "No properties found. Make sure yourr vault has files with frontmatter."
      );
      return;
    }
    const propertyStats = this.getPropertyStatistics(properties);
    const modal = new LogBaseItemsModal(
      this.app,
      properties,
      propertyStats,
      this.settings.includeAllProperties,
      (selectedProperty, newValue) => {
        doUpdate(this.app, this.activeController, selectedProperty, newValue);
      }
    );
    modal.open();
  }
  /**
   * Gets statistics for properties (how many files have each property)
   */
  getPropertyStatistics(properties) {
    const stats = /* @__PURE__ */ new Map();
    const files = this.app.vault.getMarkdownFiles();
    properties.forEach((prop) => {
      let count = 0;
      if (prop === "file.basename" || prop === "file.path") {
        count = files.length;
      } else {
        files.forEach((file) => {
          const metadata = this.app.metadataCache.getFileCache(file);
          if (metadata && metadata.frontmatter && prop in metadata.frontmatter) {
            count++;
          }
        });
      }
      stats.set(prop, count);
    });
    return stats;
  }
  /**
   * Updates the active controller reference
   */
  updateActiveController() {
    try {
      const activeLeaf = this.app.workspace.activeLeaf;
      if (!activeLeaf) {
        this.activeController = null;
        return;
      }
      const view = activeLeaf.view;
      if (!view || !("controller" in view)) {
        this.activeController = null;
        return;
      }
      const baseView = view;
      if (!baseView.controller) {
        this.activeController = null;
        return;
      }
      this.activeController = baseView.controller;
    } catch (error) {
      this.activeController = null;
    }
  }
  /**
   * Logs items with a specific property highlighted
   */
  logCurrentBaseItemsWithProperty(selectedProperty) {
    var _a;
    if (!this.activeController) {
      console.log("No active Base found");
      new Notice2("No active Base found");
      return;
    }
    try {
      const results = this.activeController.results;
      if (!results) {
        console.log("No results found in the Base");
        new Notice2("No results found in the Base");
        return;
      }
      const entries = Array.from(results.values() || []);
      console.log(
        `=== Base Items with "${selectedProperty}" (${entries.length} items) ===`
      );
      const baseView = (_a = this.app.workspace.activeLeaf) == null ? void 0 : _a.view;
      if (baseView == null ? void 0 : baseView.file) {
        this.lastBasePath = baseView.file.path;
        console.log(`Base file: ${baseView.file.path}`);
      }
      const stats = this.getPropertyStatistics([selectedProperty]);
      const propCount = stats.get(selectedProperty) || 0;
      const totalFiles = this.app.vault.getMarkdownFiles().length;
      console.log(
        `Property exists in ${propCount}/${totalFiles} files in the vault`
      );
      console.log(`
Property: ${selectedProperty}`);
      console.log("\u2500".repeat(80));
      let itemsWithProperty = 0;
      let itemsWithoutProperty = 0;
      entries.forEach((entry, index) => {
        var _a2, _b, _c, _d;
        const fileName = ((_a2 = entry.file) == null ? void 0 : _a2.basename) || "Unnamed file";
        const filePath = ((_b = entry.file) == null ? void 0 : _b.path) || "Unknown path";
        let propertyValue = null;
        let displayValue = "N/A";
        let hasProperty = false;
        try {
          if (selectedProperty === "file.basename") {
            propertyValue = (_c = entry.file) == null ? void 0 : _c.basename;
            displayValue = propertyValue || "N/A";
            hasProperty = true;
          } else if (selectedProperty === "file.path") {
            propertyValue = (_d = entry.file) == null ? void 0 : _d.path;
            displayValue = propertyValue || "N/A";
            hasProperty = true;
          } else if (typeof entry.getValue === "function") {
            propertyValue = entry.getValue(selectedProperty);
            if (propertyValue !== void 0 && propertyValue !== null) {
              displayValue = String(propertyValue);
              hasProperty = true;
            }
          } else if (entry.properties && selectedProperty in entry.properties) {
            propertyValue = entry.properties[selectedProperty];
            if (propertyValue !== void 0 && propertyValue !== null) {
              displayValue = String(propertyValue);
              hasProperty = true;
            }
          }
          if (hasProperty) {
            itemsWithProperty++;
          } else {
            itemsWithoutProperty++;
          }
        } catch (e) {
          displayValue = "Error retrieving value";
          itemsWithoutProperty++;
        }
        const status = hasProperty ? "\u2713" : "\u2717";
        console.log(
          `[${String(index + 1).padStart(3)}] ${status} ${fileName.padEnd(35)} | ${selectedProperty}: ${displayValue}`
        );
      });
      console.log("\u2500".repeat(80));
      console.log(
        `Summary: ${itemsWithProperty} items have "${selectedProperty}", ${itemsWithoutProperty} do not`
      );
      console.log("\u2550".repeat(80));
      console.log("=== End of Base Items ===");
      new Notice2(
        `Logged ${entries.length} items with property "${selectedProperty}"`
      );
    } catch (error) {
      console.error("Error logging Base items:", error);
      new Notice2("Error logging items. Check console for details.");
    }
  }
  /**
   * Original direct logging function (kept for backward compatibility)
   */
  logCurrentBaseItems() {
    this.updateActiveController();
    if (this.activeController) {
      const properties = this.getAvailableProperties();
      const defaultProperty = properties.length > 0 ? properties[0] : "file.basename";
      this.logCurrentBaseItemsWithProperty(defaultProperty);
    } else {
      console.log("No active Base found");
    }
  }
  onunload() {
  }
};
var LogBaseItemsModal = class extends import_obsidian2.Modal {
  constructor(app, properties, propertyStats, includeAllProperties, onSubmit) {
    super(app);
    this.selectedProperty = "";
    this.dropdownComponent = null;
    this.executeButton = null;
    this.newValue = null;
    this.properties = properties;
    this.propertyStats = propertyStats;
    this.includeAllProperties = includeAllProperties;
    this.onSubmit = onSubmit;
    this.selectedProperty = properties.length > 0 ? properties[0] : "";
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.createEl("h2", { text: "Update Base Items" });
    const totalFiles = this.app.vault.getMarkdownFiles().length;
    contentEl.createEl("p", {
      text: `Select a property to display and log from the current Base. ${this.includeAllProperties ? `Scanning ${this.properties.length} properties across ${totalFiles} files in your vault.` : `Showing ${this.properties.length} properties from the current Base.`}`,
      cls: "setting-item-description"
    });
    const formContainer = contentEl.createDiv({ cls: "modal-form-container" });
    formContainer.style.padding = "20px 0";
    const selectorContainer = formContainer.createDiv({ cls: "setting-item" });
    const infoContainer = selectorContainer.createDiv({
      cls: "setting-item-info"
    });
    infoContainer.createEl("div", {
      text: "Select Property",
      cls: "setting-item-name"
    });
    const controlContainer = selectorContainer.createDiv({
      cls: "setting-item-control"
    });
    const dropdown = new import_obsidian2.DropdownComponent(controlContainer);
    this.dropdownComponent = dropdown;
    this.properties.forEach((prop) => {
      const count = this.propertyStats.get(prop) || 0;
      const label = `${prop} (${count} files)`;
      dropdown.addOption(prop, label);
    });
    if (this.selectedProperty) {
      dropdown.setValue(this.selectedProperty);
    }
    dropdown.onChange((value) => {
      this.selectedProperty = value;
    });
    const valueContainer = formContainer.createDiv({
      cls: "setting-item"
    });
    const valueInfo = valueContainer.createDiv({
      cls: "setting-item-info"
    });
    valueInfo.createEl("div", {
      text: "New Value for Property",
      cls: "setting-item-name"
    });
    const valueControl = valueContainer.createDiv({
      cls: "setting-item-control"
    });
    const valueInput = valueControl.createEl("input", {
      cls: "log-properties-pill-input",
      attr: { placeholder: "Type and press enter" }
    });
    valueInput.addEventListener("change", (ev) => {
      this.newValue = ev.srcElement.value;
    });
    valueInput.addEventListener("focus", (ev) => {
      const knownValues = [
        ...new Set(
          getPropertyValues(this.app, this.selectedProperty).filter(
            (v) => v !== ""
          )
        )
      ].sort((a, b) => a.localeCompare(b));
      if (knownValues.length > 0) {
        const suggest = new PropertyValueSuggest(
          this.app,
          valueInput,
          knownValues,
          () => [],
          (v) => v
        );
        suggest.onValueSelected = (value) => {
          valueInput.value = value;
          valueInput.trigger("change");
        };
      }
    });
    const buttonContainer = formContainer.createDiv({
      cls: "modal-button-container"
    });
    buttonContainer.style.marginTop = "20px";
    buttonContainer.style.display = "flex";
    buttonContainer.style.gap = "10px";
    buttonContainer.style.justifyContent = "flex-end";
    const cancelButton = new import_obsidian2.ButtonComponent(buttonContainer);
    cancelButton.setButtonText("Cancel").onClick(() => {
      this.close();
    });
    const executeButton = new import_obsidian2.ButtonComponent(buttonContainer);
    this.executeButton = executeButton;
    executeButton.setButtonText("Execute").setCta().onClick(() => {
      if (this.selectedProperty && this.newValue) {
        this.onSubmit(this.selectedProperty, this.newValue);
        this.close();
      } else {
        alert("You need to input the new Value.");
      }
    });
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};
var Notice2 = class {
  constructor(message, timeout = 5e3) {
    console.log(`[Notice] ${message}`);
    this.el = document.body.createDiv({
      cls: "notice",
      text: message
    });
    this.el.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 12px 20px;
            background: var(--background-secondary);
            color: var(--text-normal);
            border-radius: 8px;
            border: 1px solid var(--background-modifier-border);
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
            z-index: 1000;
            max-width: 400px;
            animation: slideIn 0.3s ease-out;
        `;
    const style = document.createElement("style");
    style.textContent = `
            @keyframes slideIn {
                from { transform: translateY(20px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
        `;
    document.head.appendChild(style);
    this.timeout = window.setTimeout(() => {
      this.close();
    }, timeout);
  }
  close() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    if (this.el && this.el.parentNode) {
      this.el.parentNode.removeChild(this.el);
    }
  }
};
var LogBaseItemsSettingTab = class extends import_obsidian2.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Log Base Items Settings" });
    new import_obsidian2.Setting(containerEl).setName("Log on startup").setDesc("Automatically log Base items when Obsidian starts").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.logOnStartup).onChange(async (value) => {
        this.plugin.settings.logOnStartup = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian2.Setting(containerEl).setName("Log on view change").setDesc("Automatically log Base items when switching to a Base view").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.logOnViewChange).onChange(async (value) => {
        this.plugin.settings.logOnViewChange = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian2.Setting(containerEl).setName("Include all vault properties").setDesc(
      "Show properties from all files in the vault, not just the current Base"
    ).addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.includeAllProperties).onChange(async (value) => {
        this.plugin.settings.includeAllProperties = value;
        await this.plugin.saveSettings();
        this.plugin.buildPropertyCache();
      })
    );
    new import_obsidian2.Setting(containerEl).setName("Refresh Property Cache").setDesc("Scan all files in your vault to update the property list").addButton(
      (button) => button.setButtonText("Refresh").setCta().onClick(() => {
        this.plugin.buildPropertyCache();
        new Notice2("Property cache refreshed!");
      })
    );
    new import_obsidian2.Setting(containerEl).setName("Open Log Modal").setDesc("Open the modal to select a property and log Base items").addButton(
      (button) => button.setButtonText("Open Modal").setCta().onClick(() => {
        this.plugin.openLogModal();
      })
    );
    containerEl.createEl("hr");
    const infoEl = containerEl.createEl("div", {
      cls: "setting-item-description"
    });
    infoEl.createEl("p", {
      text: "How to use this plugin:"
    });
    const list = infoEl.createEl("ul");
    list.createEl("li", {
      text: "Open a Base in Obsidian (table, card, list, or map view)"
    });
    list.createEl("li", {
      text: "Use the ribbon icon, command palette, or settings button to open the modal"
    });
    list.createEl("li", {
      text: "Select a property from the dropdown (shows all properties from your vault)"
    });
    list.createEl("li", {
      text: "Property statistics show how many files have each property"
    });
    list.createEl("li", {
      text: 'Click "Execute" to log items with that property to the console'
    });
    list.createEl("li", {
      text: 'Use "Refresh Property Cache" in settings to scan for new properties'
    });
    const propCount = this.plugin.allVaultProperties.size;
    const filesCount = this.app.vault.getMarkdownFiles().length;
    infoEl.createEl("p", {
      text: `\u{1F4CA} Current cache: ${propCount} unique properties found across ${filesCount} files`,
      cls: "setting-item-description"
    });
    infoEl.createEl("p", {
      text: `\u{1F4A1} Tip: Properties are automatically cached from all Markdown files in your vault`,
      cls: "setting-item-description"
    });
  }
};
function getPropertyValues(app, propertyName) {
  const values = /* @__PURE__ */ new Set();
  for (const file of app.vault.getMarkdownFiles()) {
    const cache = app.metadataCache.getFileCache(file);
    if (!(cache == null ? void 0 : cache.frontmatter)) continue;
    if (!Object.prototype.hasOwnProperty.call(cache.frontmatter, propertyName))
      continue;
    const raw = cache.frontmatter[propertyName];
    if (Array.isArray(raw)) {
      for (const item of raw) {
        if (typeof item === "string" && item !== "") {
          values.add(item);
        }
      }
    } else if (typeof raw === "string" && raw !== "") {
      values.add(raw);
    }
  }
  return [...values].sort((a, b) => a.localeCompare(b));
}
async function doUpdate(app, activeController, property, value) {
  if (!activeController) {
    new Notice2("No active Base found");
    return;
  }
  const results = activeController.results;
  if (!results) {
    console.log("No results found in the Base");
    new Notice2("No results found in the Base");
    return;
  }
  const filesToUpdate = Array.from(results.values() || []);
  console.log(
    `=== Base Items with "${property}" (${filesToUpdate.length} items) ===`
  );
  const action = "replace";
  let skippedCount = 0;
  const result = await withProgress(filesToUpdate, "Updating", async (file) => {
    let skipped = false;
    await app.fileManager.processFrontMatter(
      file.file,
      (fm) => {
        if (action === "replace") {
          fm[property] = value;
        } else {
          const existing = fm[property];
          let current;
          if (existing === void 0 || existing === null) {
            current = [];
          } else if (Array.isArray(existing)) {
            current = existing;
          } else if (typeof existing === "string") {
            current = existing === "" ? [] : [existing];
          } else {
            skipped = true;
            return;
          }
          const newValues = value;
          if (action === "merge") {
            if (DEDUP_TYPES.has(type)) {
              const seen = new Set(current.map(String));
              const toAdd = [];
              for (const v of newValues) {
                if (!seen.has(v)) {
                  seen.add(v);
                  toAdd.push(v);
                }
              }
              fm[property] = [...current, ...toAdd];
            } else {
              fm[property] = [...current, ...newValues];
            }
          } else {
            if (existing === void 0 || existing === null) {
              if (deselect) fm[selProp] = false;
              return;
            }
            const removeSet = new Set(newValues);
            fm[property] = current.filter((v) => !removeSet.has(String(v)));
          }
        }
      }
    );
    if (skipped) skippedCount++;
  });
  const actualSucceeded = result.succeeded - skippedCount;
  const { failed, cancelled, total } = result;
  let msg = `Updated "${property}" in ${actualSucceeded} note${actualSucceeded === 1 ? "" : "s"}`;
  if (cancelled) {
    msg = `Updated "${property}" in ${actualSucceeded} of ${total} note${total === 1 ? "" : "s"} (cancelled)`;
  }
  if (skippedCount > 0) {
    msg += `, skipped ${skippedCount} (non-list values)`;
  }
  if (failed.length > 0) {
    msg += `, failed on ${failed.length}: ${failed.join(", ")}`;
  }
  new Notice2(msg);
}
//# sourceMappingURL=main.js.map
