---
author:
  - "[[lewis6991]]"
created: 2025-03-21
source: https://github.com/lewis6991/gitsigns.nvim
tags:
  - plugin/nvim
---
## gitsigns.nvim

Deep buffer integration for Git

## 👀 Preview

| Hunk Actions                                                                                                                                                    | Line Blame                                                                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![](https://raw.githubusercontent.com/lewis6991/media/main/gitsigns_actions.gif)](https://raw.githubusercontent.com/lewis6991/media/main/gitsigns_actions.gif) | [![](https://raw.githubusercontent.com/lewis6991/media/main/gitsigns_blame.gif)](https://raw.githubusercontent.com/lewis6991/media/main/gitsigns_blame.gif) |

## ✨ Features

**Signs**
- Adds signs to the sign column to indicate added, changed, and deleted lines.
	[![image](https://private-user-images.githubusercontent.com/7904185/410446681-e49ea0bf-c427-41fb-a67f-77c2d413a7cf.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI1NTE5OTksIm5iZiI6MTc0MjU1MTY5OSwicGF0aCI6Ii83OTA0MTg1LzQxMDQ0NjY4MS1lNDllYTBiZi1jNDI3LTQxZmItYTY3Zi03N2MyZDQxM2E3Y2YucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDMyMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTAzMjFUMTAwODE5WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9NmQ1ZmJhNDhiZTQwODkwMTIwMDZjZTk0ZDcxNjgzMzQ3NThlMTJkMTY3MDM4Y2Q4YjRmYzA1MTU1MTcwNzRmOCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.B9b_uEf_Uq0JK2g4KadYc2ePcDTtEacrjbImHNRXKUE)](https://private-user-images.githubusercontent.com/7904185/410446681-e49ea0bf-c427-41fb-a67f-77c2d413a7cf.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI1NTE5OTksIm5iZiI6MTc0MjU1MTY5OSwicGF0aCI6Ii83OTA0MTg1LzQxMDQ0NjY4MS1lNDllYTBiZi1jNDI3LTQxZmItYTY3Zi03N2MyZDQxM2E3Y2YucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDMyMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTAzMjFUMTAwODE5WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9NmQ1ZmJhNDhiZTQwODkwMTIwMDZjZTk0ZDcxNjgzMzQ3NThlMTJkMTY3MDM4Y2Q4YjRmYzA1MTU1MTcwNzRmOCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.B9b_uEf_Uq0JK2g4KadYc2ePcDTtEacrjbImHNRXKUE)
- Supports different signs for staged changes.
	[![image](https://private-user-images.githubusercontent.com/7904185/410446241-28a3e286-96fa-478c-93a3-8028f9bd7123.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI1NTE5OTksIm5iZiI6MTc0MjU1MTY5OSwicGF0aCI6Ii83OTA0MTg1LzQxMDQ0NjI0MS0yOGEzZTI4Ni05NmZhLTQ3OGMtOTNhMy04MDI4ZjliZDcxMjMucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDMyMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTAzMjFUMTAwODE5WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ZmM5ZDE4YWUwN2ZhMjkyOWM5NjVhYzYwYTljNDE5ZDQ2ZDhmYjBlYTVhZjI2NzhkMmEzYTliZGNjNzdkMWViMSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.AdU5pOjYpxg9BBxwBoVEbt06MK5yj4Aw-AMBFlnPsuI)](https://private-user-images.githubusercontent.com/7904185/410446241-28a3e286-96fa-478c-93a3-8028f9bd7123.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI1NTE5OTksIm5iZiI6MTc0MjU1MTY5OSwicGF0aCI6Ii83OTA0MTg1LzQxMDQ0NjI0MS0yOGEzZTI4Ni05NmZhLTQ3OGMtOTNhMy04MDI4ZjliZDcxMjMucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDMyMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTAzMjFUMTAwODE5WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ZmM5ZDE4YWUwN2ZhMjkyOWM5NjVhYzYwYTljNDE5ZDQ2ZDhmYjBlYTVhZjI2NzhkMmEzYTliZGNjNzdkMWViMSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.AdU5pOjYpxg9BBxwBoVEbt06MK5yj4Aw-AMBFlnPsuI)
- Add counts to signs.
	[![image](https://private-user-images.githubusercontent.com/7904185/410445213-d007b924-6811-44ea-b936-d8da4dc00b68.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI1NTE5OTksIm5iZiI6MTc0MjU1MTY5OSwicGF0aCI6Ii83OTA0MTg1LzQxMDQ0NTIxMy1kMDA3YjkyNC02ODExLTQ0ZWEtYjkzNi1kOGRhNGRjMDBiNjgucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDMyMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTAzMjFUMTAwODE5WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ZGVhMTQ0YjNjMzMxMzhhZDBkOGIxNDc4MWY0NDQ3ZTc1NTMwNDM5YWQ1NDdiNjA3OWJhM2IwMzk4YmE1MDQ4OCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.azFrk47LAg8kkcRrR0SYDIdtVundxNraAQg8Yp-GSko)](https://private-user-images.githubusercontent.com/7904185/410445213-d007b924-6811-44ea-b936-d8da4dc00b68.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI1NTE5OTksIm5iZiI6MTc0MjU1MTY5OSwicGF0aCI6Ii83OTA0MTg1LzQxMDQ0NTIxMy1kMDA3YjkyNC02ODExLTQ0ZWEtYjkzNi1kOGRhNGRjMDBiNjgucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDMyMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTAzMjFUMTAwODE5WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ZGVhMTQ0YjNjMzMxMzhhZDBkOGIxNDc4MWY0NDQ3ZTc1NTMwNDM5YWQ1NDdiNjA3OWJhM2IwMzk4YmE1MDQ4OCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.azFrk47LAg8kkcRrR0SYDIdtVundxNraAQg8Yp-GSko)
**Hunk Actions**
- Stage/unstage hunks with `:Gitsigns stage_hunk`.
- Reset hunks with `:Gitsigns reset_hunk`.
- Also works on partial hunks in visual mode.
- Preview hunks inline with `:Gitsigns preview_hunk_inline`
	[![image](https://private-user-images.githubusercontent.com/7904185/410450249-60acd664-f4a8-4737-ba65-969f1efa7971.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI1NTE5OTksIm5iZiI6MTc0MjU1MTY5OSwicGF0aCI6Ii83OTA0MTg1LzQxMDQ1MDI0OS02MGFjZDY2NC1mNGE4LTQ3MzctYmE2NS05NjlmMWVmYTc5NzEucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDMyMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTAzMjFUMTAwODE5WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MjY0NzMwNmY5ZWVmY2RhNjFmNDUzOGQxNzg5YjQwM2ExMmVmYzU5MzMyYzQ3MWI4MGY3MzJhZTJlZjY5MWYxNiZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.n5whqCupojqSvkQO9gWwuwedJa6DMmkWfnr0aEMF_KA)](https://private-user-images.githubusercontent.com/7904185/410450249-60acd664-f4a8-4737-ba65-969f1efa7971.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI1NTE5OTksIm5iZiI6MTc0MjU1MTY5OSwicGF0aCI6Ii83OTA0MTg1LzQxMDQ1MDI0OS02MGFjZDY2NC1mNGE4LTQ3MzctYmE2NS05NjlmMWVmYTc5NzEucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDMyMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTAzMjFUMTAwODE5WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MjY0NzMwNmY5ZWVmY2RhNjFmNDUzOGQxNzg5YjQwM2ExMmVmYzU5MzMyYzQ3MWI4MGY3MzJhZTJlZjY5MWYxNiZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.n5whqCupojqSvkQO9gWwuwedJa6DMmkWfnr0aEMF_KA)
- Preview hunks in popup with `:Gitsigns preview_hunk`
	[![image](https://private-user-images.githubusercontent.com/7904185/410450434-d2a9b801-5857-4054-80a8-195d111f4e8c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI1NTE5OTksIm5iZiI6MTc0MjU1MTY5OSwicGF0aCI6Ii83OTA0MTg1LzQxMDQ1MDQzNC1kMmE5YjgwMS01ODU3LTQwNTQtODBhOC0xOTVkMTExZjRlOGMucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDMyMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTAzMjFUMTAwODE5WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9YTJkM2VjNWFlYmI2NjVkMGZjMWI4ZDVlODhjY2E2ZTllZmEyNTAwNDZjZGYyYzQxYzQyY2IyYjgwNjQwNzFiNSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.Nh0s_W4PoJISCIh7Z6E1dNQda7KWi3WFm6HSrBo2P6k)](https://private-user-images.githubusercontent.com/7904185/410450434-d2a9b801-5857-4054-80a8-195d111f4e8c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI1NTE5OTksIm5iZiI6MTc0MjU1MTY5OSwicGF0aCI6Ii83OTA0MTg1LzQxMDQ1MDQzNC1kMmE5YjgwMS01ODU3LTQwNTQtODBhOC0xOTVkMTExZjRlOGMucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDMyMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTAzMjFUMTAwODE5WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9YTJkM2VjNWFlYmI2NjVkMGZjMWI4ZDVlODhjY2E2ZTllZmEyNTAwNDZjZGYyYzQxYzQyY2IyYjgwNjQwNzFiNSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.Nh0s_W4PoJISCIh7Z6E1dNQda7KWi3WFm6HSrBo2P6k)
- Navigate between hunks with `:Gitsigns nav_hunk next/prev`.
**Blame**
- Show blame of current buffer using `:Gitsigns blame`.
	[![image](https://private-user-images.githubusercontent.com/7904185/410447822-7d881e94-6e16-4f98-a526-7e785b11acf9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI1NTE5OTksIm5iZiI6MTc0MjU1MTY5OSwicGF0aCI6Ii83OTA0MTg1LzQxMDQ0NzgyMi03ZDg4MWU5NC02ZTE2LTRmOTgtYTUyNi03ZTc4NWIxMWFjZjkucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDMyMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTAzMjFUMTAwODE5WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MGZjMDY0YWE4Njk1Njg1NWEzN2FkM2JlMTY2MWNiMWM0MzU4YzUwOGI4Y2Y4ZGQ2ZGY1Y2U4ZWU2NjQzZDEyZCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.jAsc6TC-qDTxIPFT7w01oJ5uBIwMa-wNdOMJM-eBKkQ)](https://private-user-images.githubusercontent.com/7904185/410447822-7d881e94-6e16-4f98-a526-7e785b11acf9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI1NTE5OTksIm5iZiI6MTc0MjU1MTY5OSwicGF0aCI6Ii83OTA0MTg1LzQxMDQ0NzgyMi03ZDg4MWU5NC02ZTE2LTRmOTgtYTUyNi03ZTc4NWIxMWFjZjkucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDMyMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTAzMjFUMTAwODE5WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MGZjMDY0YWE4Njk1Njg1NWEzN2FkM2JlMTY2MWNiMWM0MzU4YzUwOGI4Y2Y4ZGQ2ZGY1Y2U4ZWU2NjQzZDEyZCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.jAsc6TC-qDTxIPFT7w01oJ5uBIwMa-wNdOMJM-eBKkQ)
- Show blame information for the current line in popup with `:Gitsigns blame_line`.
	[![image](https://private-user-images.githubusercontent.com/7904185/410448027-03ff7557-b538-4cd1-9478-f893bf7e616e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI1NTE5OTksIm5iZiI6MTc0MjU1MTY5OSwicGF0aCI6Ii83OTA0MTg1LzQxMDQ0ODAyNy0wM2ZmNzU1Ny1iNTM4LTRjZDEtOTQ3OC1mODkzYmY3ZTYxNmUucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDMyMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTAzMjFUMTAwODE5WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9Nzg4YzAyOThmMzllYTBhNGYwZTBmMjMwZGRhODA0MThjNWYwNzExYjNiNWFlOWNiZDQ0YjhiZTJiNjk5OWQ2NyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.0ZV3zCFQ4ax_h16UdOzZR29CM1aJ3sV1FjOXSZcOHYw)](https://private-user-images.githubusercontent.com/7904185/410448027-03ff7557-b538-4cd1-9478-f893bf7e616e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI1NTE5OTksIm5iZiI6MTc0MjU1MTY5OSwicGF0aCI6Ii83OTA0MTg1LzQxMDQ0ODAyNy0wM2ZmNzU1Ny1iNTM4LTRjZDEtOTQ3OC1mODkzYmY3ZTYxNmUucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDMyMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTAzMjFUMTAwODE5WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9Nzg4YzAyOThmMzllYTBhNGYwZTBmMjMwZGRhODA0MThjNWYwNzExYjNiNWFlOWNiZDQ0YjhiZTJiNjk5OWQ2NyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.0ZV3zCFQ4ax_h16UdOzZR29CM1aJ3sV1FjOXSZcOHYw)
- Show blame information for the current line in virtual text.
	[![image](https://private-user-images.githubusercontent.com/7904185/410448197-0c79e880-6a6d-4c3f-aa62-33f734725cfd.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI1NTE5OTksIm5iZiI6MTc0MjU1MTY5OSwicGF0aCI6Ii83OTA0MTg1LzQxMDQ0ODE5Ny0wYzc5ZTg4MC02YTZkLTRjM2YtYWE2Mi0zM2Y3MzQ3MjVjZmQucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDMyMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTAzMjFUMTAwODE5WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9OGY4NGI0MzlhNTEzNzYzNGFhMjNmNWI5ZjQ4NzdlOWZiYTUzYzU3ZDU1NzlhNTc2NTkxYTg5YTVhNmQ2NDc0YSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.zsnPK4ik713Q1aVyclbz_528v-TO7uKZ6cNzoaCK8Bg)](https://private-user-images.githubusercontent.com/7904185/410448197-0c79e880-6a6d-4c3f-aa62-33f734725cfd.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI1NTE5OTksIm5iZiI6MTc0MjU1MTY5OSwicGF0aCI6Ii83OTA0MTg1LzQxMDQ0ODE5Ny0wYzc5ZTg4MC02YTZkLTRjM2YtYWE2Mi0zM2Y3MzQ3MjVjZmQucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDMyMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTAzMjFUMTAwODE5WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9OGY4NGI0MzlhNTEzNzYzNGFhMjNmNWI5ZjQ4NzdlOWZiYTUzYzU3ZDU1NzlhNTc2NTkxYTg5YTVhNmQ2NDc0YSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.zsnPK4ik713Q1aVyclbz_528v-TO7uKZ6cNzoaCK8Bg)
	- Enable with `setup({ current_line_blame = true })`.
	- Toggle with `:Gitsigns toggle_current_line_blame`
**Diff**
- Change the revision for the signs with `:Gitsigns change_base <REVISION>`.
- Show the diff of the current buffer with the index or any revision with `:Gitsigns diffthis <REVISION>`.
- Show intra-line word-diff in the buffer.
	- Enable with `setup({ word_diff = true })`.
	- Toggle with `:Gitsigns toggle_word_diff`.
**Show hunks Quickfix/Location List**
- Set the quickfix/location list with changes with `:Gitsign setqflist/setloclist`.
	[![image](https://private-user-images.githubusercontent.com/7904185/410449855-c17001a5-b9cf-4a00-9891-5b130c0b4745.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI1NTE5OTksIm5iZiI6MTc0MjU1MTY5OSwicGF0aCI6Ii83OTA0MTg1LzQxMDQ0OTg1NS1jMTcwMDFhNS1iOWNmLTRhMDAtOTg5MS01YjEzMGMwYjQ3NDUucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDMyMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTAzMjFUMTAwODE5WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9NWU3MTliMmQzMmY4ZDhiMTcwYzdkODQ2M2NiMmE1NzRkODUzNDgxYWYzNWZmYjAyMWQwZjJiZjc3MjJhMzQ4MyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.0fFTxIJCKmjDyJlHyYH8GdNEK21WHQFC1XjKTUVGFT0)](https://private-user-images.githubusercontent.com/7904185/410449855-c17001a5-b9cf-4a00-9891-5b130c0b4745.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI1NTE5OTksIm5iZiI6MTc0MjU1MTY5OSwicGF0aCI6Ii83OTA0MTg1LzQxMDQ0OTg1NS1jMTcwMDFhNS1iOWNmLTRhMDAtOTg5MS01YjEzMGMwYjQ3NDUucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDMyMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTAzMjFUMTAwODE5WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9NWU3MTliMmQzMmY4ZDhiMTcwYzdkODQ2M2NiMmE1NzRkODUzNDgxYWYzNWZmYjAyMWQwZjJiZjc3MjJhMzQ4MyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.0fFTxIJCKmjDyJlHyYH8GdNEK21WHQFC1XjKTUVGFT0)
	Can show hunks for:
	- whole repository ( `target=all` )
	- attached buffers ( `target=attached` )
	- a specific buffer ( `target=[integer]` ).

**Text Object**
- Select hunks as a text object.
- Can use `vim.keymap.set({'o', 'x'}, 'ih', '<Cmd>Gitsigns select_hunk<CR>')`
**Status Line Integration**

Use `b:gitsigns_status` or `b:gitsigns_status_dict`. `b:gitsigns_status` is formatted using `config.status_formatter`. `b:gitsigns_status_dict` is a dictionary with the keys `added`, `removed`, `changed` and `head`.

Example:

```
set statusline+=%{get(b:,'gitsigns_status','')}
```

For the current branch use the variable `b:gitsigns_head`.

**Show different revisions of buffers**
- Use `:Gitsigns show <REVISION>` to `:edit` the current buffer at `<REVISION>`

## 📋 Requirements

- Neovim >= 0.9.0

Tip

If your version of Neovim is too old, then you can use a past [release](https://github.com/lewis6991/gitsigns.nvim/releases).

Warning

If you are running a development version of Neovim (aka `master` ), then breakage may occur if your build is behind latest.

- Newish version of git. Older versions may not work with some features.

## 🛠️ Installation & Usage

Install using your package manager of choice.

For recommended setup with all batteries included:

```lua
require('gitsigns').setup()
```

Configuration can be passed to the setup function. Here is an example with most of the default settings:

```lua
require('gitsigns').setup {
  signs = {
    add          = { text = '┃' },
    change       = { text = '┃' },
    delete       = { text = '_' },
    topdelete    = { text = '‾' },
    changedelete = { text = '~' },
    untracked    = { text = '┆' },
  },
  signs_staged = {
    add          = { text = '┃' },
    change       = { text = '┃' },
    delete       = { text = '_' },
    topdelete    = { text = '‾' },
    changedelete = { text = '~' },
    untracked    = { text = '┆' },
  },
  signs_staged_enable = true,
  signcolumn = true,  -- Toggle with \`:Gitsigns toggle_signs\`
  numhl      = false, -- Toggle with \`:Gitsigns toggle_numhl\`
  linehl     = false, -- Toggle with \`:Gitsigns toggle_linehl\`
  word_diff  = false, -- Toggle with \`:Gitsigns toggle_word_diff\`
  watch_gitdir = {
    follow_files = true
  },
  auto_attach = true,
  attach_to_untracked = false,
  current_line_blame = false, -- Toggle with \`:Gitsigns toggle_current_line_blame\`
  current_line_blame_opts = {
    virt_text = true,
    virt_text_pos = 'eol', -- 'eol' | 'overlay' | 'right_align'
    delay = 1000,
    ignore_whitespace = false,
    virt_text_priority = 100,
    use_focus = true,
  },
  current_line_blame_formatter = '<author>, <author_time:%R> - <summary>',
  sign_priority = 6,
  update_debounce = 100,
  status_formatter = nil, -- Use default
  max_file_length = 40000, -- Disable if file is longer than this (in lines)
  preview_config = {
    -- Options passed to nvim_open_win
    border = 'single',
    style = 'minimal',
    relative = 'cursor',
    row = 0,
    col = 1
  },
}
```

For information on configuring Neovim via lua please see [nvim-lua-guide](https://neovim.io/doc/user/lua-guide.html).

### 🎹 **Keymaps**

Gitsigns provides an `on_attach` callback which can be used to setup buffer mappings.

Here is a suggested example:

```lua
require('gitsigns').setup{
  ...
  on_attach = function(bufnr)
    local gitsigns = require('gitsigns')

    local function map(mode, l, r, opts)
      opts = opts or {}
      opts.buffer = bufnr
      vim.keymap.set(mode, l, r, opts)
    end

    -- Navigation
    map('n', ']c', function()
      if vim.wo.diff then
        vim.cmd.normal({']c', bang = true})
      else
        gitsigns.nav_hunk('next')
      end
    end)

    map('n', '[c', function()
      if vim.wo.diff then
        vim.cmd.normal({'[c', bang = true})
      else
        gitsigns.nav_hunk('prev')
      end
    end)

    -- Actions
    map('n', '<leader>hs', gitsigns.stage_hunk)
    map('n', '<leader>hr', gitsigns.reset_hunk)

    map('v', '<leader>hs', function()
      gitsigns.stage_hunk({ vim.fn.line('.'), vim.fn.line('v') })
    end)

    map('v', '<leader>hr', function()
      gitsigns.reset_hunk({ vim.fn.line('.'), vim.fn.line('v') })
    end)

    map('n', '<leader>hS', gitsigns.stage_buffer)
    map('n', '<leader>hR', gitsigns.reset_buffer)
    map('n', '<leader>hp', gitsigns.preview_hunk)
    map('n', '<leader>hi', gitsigns.preview_hunk_inline)

    map('n', '<leader>hb', function()
      gitsigns.blame_line({ full = true })
    end)

    map('n', '<leader>hd', gitsigns.diffthis)

    map('n', '<leader>hD', function()
      gitsigns.diffthis('~')
    end)

    map('n', '<leader>hQ', function() gitsigns.setqflist('all') end)
    map('n', '<leader>hq', gitsigns.setqflist)

    -- Toggles
    map('n', '<leader>tb', gitsigns.toggle_current_line_blame)
    map('n', '<leader>td', gitsigns.toggle_deleted)
    map('n', '<leader>tw', gitsigns.toggle_word_diff)

    -- Text object
    map({'o', 'x'}, 'ih', gitsigns.select_hunk)
  end
}
```

## 🔗 Plugin Integrations

### vim-fugitive

When viewing revisions of a file (via `:0Gclog` for example), Gitsigns will attach to the fugitive buffer with the base set to the commit immediately before the commit of that revision. This means the signs placed in the buffer reflect the changes introduced by that revision of the file.

### trouble.nvim

If installed and enabled (via `config.trouble`; defaults to true if installed), `:Gitsigns setqflist` or `:Gitsigns setloclist` will open Trouble instead of Neovim's built-in quickfix or location list windows.

## 🚫 Non-Goals

### Implement every feature in vim-fugitive

This plugin is actively developed and by one of the most well regarded vim plugin developers. Gitsigns will only implement features of this plugin if: it is simple, or, the technologies leveraged by Gitsigns (LuaJIT, Libuv, Neovim's API, etc) can provide a better experience.

### Support for other VCS

There aren't any active developers of this plugin who use other kinds of VCS, so adding support for them isn't feasible. However a well written PR with a commitment of future support could change this.

## 🔌 Similar plugins

- [mini.diff](https://github.com/echasnovski/mini.diff)
- [coc-git](https://github.com/neoclide/coc-git)
- [vim-gitgutter](https://github.com/airblade/vim-gitgutter)
- [vim-signify](https://github.com/mhinz/vim-signify)