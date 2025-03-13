---
link: 
scheduled: 2025-03-12-11-28
---
#call/work/crm/architecture 

```dataview
LIST
FROM #call/work/crm/architecture 
WHERE scheduled < this.scheduled
SORT scheduled DESC
LIMIT 3
```

## who
- [[luna team]]
- [[Amin Khansari]]
- [[Natasa Bozic|Natasa]]

## results

- [/] #task explore the [[Campaing Rules doc]] 🆔 IXfwgc

## 🗒notes
- sales people are paid only for **P1**
- ..

---

# Calling Campaigns [^1]
[Miro](https://miro.com/app/board/uXjVKthL_7Q=/?moveToWidget=3458764617443952296&cot=14)

## related
[[calling campaign]]
[[cut-off campaign]]
[[Sale Slot entity]]
[[lead score]]
[[lead rank]]
[[calling segment]]

A calling campaing is an event that takes place over a specific period of time.

The campaign contains a list of leads that represent calls that will be made to them.

## ? questions

- [?] what is the **lifetime** of a [[lead]]
	- [?] when is the lead no longer in the campaign
	- [?] how long do they usually stay in the campaigns
	- [?] where do they go next?
- [?] is there a difference between the current campaign generation and what we need to do ✅
	- `freezing` people? -> sending to [[SLMP]]
		- we should send **cold** leads to [[SLMP]]
	- more flexible: **start**, **end** dates; 
	- & planned for other countries
		- **rules** for countries

## lead scoring 💯

Done by the [[B2c LeadRankingAPI]]

- ? do we need to do additional scoring
	- what would be the **rules**

## call/lead segmentation

The lead need to be put into specific segments and those segments should be used when creating a campaign.

**see** [[calling segment#segments list]]

## sales people scoring

- done manually
- better sellers get even better leads

## [[Modjo]]
> A tool for **transcribing** calls

- Direct integration  into [[LUQA]]
- used by [[Quality Team]]

## features

- project/lead status updated



[^1]: [[calling campaign]]