# **JIRA** ticket 
[[Diabolocom]], our telephony provider, warned us that they were going to disable on 12/05 numbers that we are using for our call campaigns and these numbers have the following structure `07432403XX`.

Indeed, our **B2C sales people** had these numbers defined in the “Campagne” field on their Backyard page (see screenshot),

In order to counter that, on 06/05, @Anne Perego changed these numbers (structure = 07432403XX) with valid numbers (called Diabo Mobile and structure = 0756525XXX) on all the B2C sales people Backyard page,

This means that theoretically, we should now be calling with 0756525XXX in the call campaigns,

However, on 07/05, [[Alan Jaouen]] shared a list of calls from the call campaigns where we could see the numbers 07432403XX, **which we should not see anymore** as they have been `replaced`, and looking at this list, it appears that 0756525XXX are used for B2C **COUPE FIL** and 07432403XX are used for B2C **PVI**.

The need is to understand / check (in the b2cLeadRankingApi) why aren’t the 0756525XXX exclusively chosen for mobile phone numbers in the call campaigns

# requirements

- [ ] **stop** using 07432403XX
- still used for **PVI**

# impl / work

**list of numbers from [[Thomas Sirgant]]**
	- 33743230315
	- 33743230313
	- 33743230308
	- 33743230302
	- 33743230316
	- 33743230318
	- 33743230321
	%% none of these numbers are present in B2C %%

- [x] check [[B2c LeadRankingAPI]] code
- [x] check if numbers still present in table for communications
	- present but `inactive`

- ! the number **33743240302** is hardcoded

- [/] communicate with [[Thomas Sirgant]]
	- [x] found the hardcoded number
		- we need a replacement for it
	- [/] wait for response
