---
author: 
created: 2025-05-15
published: 
source: https://github.com/kraibse/obsidian-table-sorting
tags:
  - plugin/obsidian/sorting
---

**[obsidian-table-sorting](https://github.com/kraibse/obsidian-table-sorting)** Public

This essential plugin will finally allow you to organize your tables non-destructively right within Obsidian. Sorting by multiple columns is supported!

## ✨ Features

Whatever sort mode you choose, the markdown sourcecode will not be touched. Instead the sorting all happens visually. Rightly restore the original order by cycling through the modes.

multi-column-mode.mp4<video src="https://private-user-images.githubusercontent.com/33869366/333728988-28468e05-9ea3-46a5-9ce1-82927031b499.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDczMjI3NzEsIm5iZiI6MTc0NzMyMjQ3MSwicGF0aCI6Ii8zMzg2OTM2Ni8zMzM3Mjg5ODgtMjg0NjhlMDUtOWVhMy00NmE1LTljZTEtODI5MjcwMzFiNDk5Lm1wND9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTE1VDE1MjExMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTRlNjIyY2NlZWZlMDIyNzFkZmUzODZkZGY5M2ZkYTY1MWMyMmFkNGZhNmE5MGE0MmI5YmNlOWVhMDAxNjk0OTAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.jUGlVV98pPxUbRmq5VlzV64o01o1hRc2byLtd9aFALI" controls="controls"></video>

**Select multiple columns** to set their order when sorting hierarchically.

reset-columns.mp4<video src="https://private-user-images.githubusercontent.com/33869366/333730544-e46b9a2e-8a22-4906-af33-4048b63a9e92.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDczMjI3NzEsIm5iZiI6MTc0NzMyMjQ3MSwicGF0aCI6Ii8zMzg2OTM2Ni8zMzM3MzA1NDQtZTQ2YjlhMmUtOGEyMi00OTA2LWFmMzMtNDA0OGI2M2E5ZTkyLm1wND9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTE1VDE1MjExMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWE2ZDhlYWI0MzFmMTRjNTA1YzRlYmI0NzMyODBiZjNkZDA5MjQxZTQyZWQ3YWMwZjk4YjY5NWYyNjk2NjkwMGImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.sM83iYMAdzJyF8lOQEYiDnDdtv2WXVbYZdu1rfTWh7o" controls="controls"></video>

It's as easy as picking the **reset option** in the dropdown.

  

## 💡 Usage

1. From the [latest releases](https://github.com/kraibse/obsidian-table-sorting/releases) download the necessary files `main.ts`, `styles.css` and `manifest.json`
2. Create a folder in to your vault `VaultFolder/.obsidian/plugins/obsidian-table-sorting/`.
	- (optional) Also refer to the [Obsidian plugin installation instructions](https://help.obsidian.md/Extending+Obsidian/Community+plugins).
3. Move the `main.ts`, `styles.css` and `manifest.json` to the directory you just created.
4. Create a table in your Obsidian note.
5. Right-click a column to open the context menu.
	- Sorting columns A-Z/Z-A
	- De/Selecting files for multi column sorting
	- Resetting to the original order

## Limitations

- Numeric data must be properly formatted for accurate sorting (WIP)
- Dataview tables are currently not supported (WIP)
- Currently limited to the Live Preview edit mode
	- Preview mode is currently in development
	- Source edit mode is currently not planned

## Contributing

If you encounter any issues or have suggestions for future improvements, please don't hesitate to open an issue on the Github repository. Contributions are also welcome!

## License

This project is licensed under the [MIT License](https://github.com/kraibse/obsidian-table-sorting/blob/master/LICENSE).

## Releases 6

[\+ 5 releases](https://github.com/kraibse/obsidian-table-sorting/releases)

## Languages

- [TypeScript 80.0%](https://github.com/kraibse/obsidian-table-sorting/search?l=typescript)
- [CSS 14.4%](https://github.com/kraibse/obsidian-table-sorting/search?l=css)
- [JavaScript 5.6%](https://github.com/kraibse/obsidian-table-sorting/search?l=javascript)