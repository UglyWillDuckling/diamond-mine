---
source: "https://www.michaellongin.com/articles-1/there-is-no-such-thing-as-technical-debt"
published: 2026-07-29
created: 2026-08-01
tags:
---
Imagine the greatest software engineer of our time writes the greatest line of code ever written. It is elegant, efficient, perfectly tested. It is their Eiffel Tower. Their Rachmaninoff’s Third. Their Pietà. Everyone who reviews it agrees there is nothing they would change.

And yet, it is already technical debt.

The moment it goes into production, the clock starts ticking. Maybe it lasts twenty years. Maybe fifty. But eventually the language changes, the hardware changes, or the operating system changes. A security vulnerability is discovered. A dependency reaches end of life. A standard changes. The business changes. Something will eventually make that perfect line of code a liability.

Every line of code we write is future technical debt. We just don’t know the due date.

Which raises a question: if even perfect code eventually becomes technical debt, is debt really the right way to think about it?

We tend to use the term as shorthand for bad engineering. We rushed the implementation. We didn’t write enough tests. We chose an architecture that wouldn’t scale. We hard-coded something that should have been configurable. We took a shortcut and left ourselves a mess to clean up later. Debt is a useful metaphor for that story because someone borrowed from the future and eventually someone has to pay it back.

Except even those decisions rarely happen in a vacuum. Engineering teams don’t generally wake up looking for ways to make software worse. A customer commitment has been made. A regulatory deadline exists. A competitor has moved. There is a fixed budget. Product decides that getting 90 percent of the capability in three months is more valuable than getting 100 percent in six, and Engineering figures out what has to give to make that possible.

That may be exactly the right decision. If launching three months earlier creates millions of dollars of value, accepting additional future maintenance could be an excellent investment. We made a trade: lower cost or faster delivery today in exchange for potentially higher costs tomorrow. Calling the result “technical debt” makes it sound like an Engineering failure when it may have been a rational business choice.

Then there is everything we call technical debt that didn’t come from a compromise at all. A ten-year-old application wasn’t necessarily badly architected. Its framework wasn’t necessarily the wrong choice. Its dependencies weren’t irresponsible. The engineers who built it may have made exactly the right decisions using the information and technology available at the time.

Then time happened.

Software ages, and it doesn’t age in isolation. Hardware architectures change. Operating systems reach end of support. Database versions become obsolete. Security vulnerabilities are discovered in libraries that were considered safe when they were selected. Encryption standards change. Browsers remove capabilities. Cloud providers deprecate services. Vendors retire APIs. Regulatory requirements evolve. Sometimes nothing inside the application changed at all. Everything around it did.

Calling that technical debt is even stranger. Nobody borrowed anything. There was no shortcut to repay. The asset simply got older.

This is where the metaphor starts doing more harm than good. We have bundled very different things under the same label: maintenance created by deliberate business tradeoffs, security risk created by new threats, obsolescence created by changing technology, operational risk created by aging infrastructure, and development friction created as the business evolves beyond the assumptions the software was originally built around.

Those aren’t one kind of debt. They are different costs and risks associated with owning software.

We understand this naturally with physical assets. A company doesn’t build a distribution center and assume the building will never require another dollar. Roofs need replacing. Equipment needs servicing. Electrical systems need upgrading. A company may knowingly choose equipment with a shorter expected life because opening the facility six months earlier has greater economic value. Years later, when that equipment needs replacement, nobody talks about paying down “facilities debt.” The maintenance cost is part of the economics of owning the facility.

Software should not be fundamentally different.

Yet organizationally, we treat it differently. Product wants a feature, the business prioritizes it, Engineering builds it, and customers use it. Maybe it generates revenue. Maybe it lowers costs. Maybe it automates a process or enables a new market. The business case is visible, so the work earns a place on the roadmap.

Five years later, that same capability needs investment. Its operating system is approaching end of support. A dependency has known vulnerabilities. The database needs upgrading. A vendor integration is being retired. Or perhaps the compromise everyone consciously accepted to hit the original launch date is finally making every new change slower.

The vocabulary changes. What was once a business investment becomes technical debt, and Engineering is expected to find room for it.

The feature comes with a business case. The technical debt comes with a Jira ticket.

That framing quietly transfers ownership. The business prioritized building the software. Product prioritized the capabilities and timelines. The company received the value created by the software and by any compromises that accelerated its delivery. But the future costs of continuing to own that software somehow become Engineering’s responsibility.

Part of that is our own doing. Technical debt becomes an Engineering backlog because we’ve defined the work technically. “Upgrade the database.” “Refactor the payment service.” “Move to the new framework.” “Replace the legacy integration.” Those statements may be technically correct, but none gives Product much to prioritize. They describe what Engineering wants to do without explaining what the business is buying.

If we want technical work to compete with product work, we have to express it in terms that allow it to compete.

If upgrading a database reduces the probability of a major outage, what is the financial exposure of that outage? If moving off an unsupported operating system reduces security risk, what risk is the company carrying by staying where it is? If replacing an aging integration prevents a vendor end-of-life event from interrupting a critical process, what would that interruption cost? If restructuring an application means future product initiatives can be delivered faster, the benefit isn’t cleaner architecture. It’s additional capacity to deliver business value.

The numbers will rarely be clean. An outage avoided produces no invoice. A security incident prevented never appears on a financial statement. Development time that might be saved eighteen months from now is difficult to compare with revenue that could be captured this quarter. Engineering is much better at estimating what a modernization will cost than what declining to modernize will eventually cost the company.

But uncertainty doesn’t make these Engineering decisions. It makes them difficult business decisions. And difficult business decisions shouldn’t disappear onto an Engineering backlog.

A new feature might produce $5 million in revenue. A modernization effort might reduce the probability of a much larger operational loss. A refactor might increase development capacity for several years. An old application might carry very little risk and be perfectly capable of surviving another decade without meaningful investment. Those investments should compete.

Sometimes the new feature should win. Sometimes modernization should win. Sometimes doing absolutely nothing should win. There is nothing inherently irresponsible about accepting an aging platform, an architectural limitation, or even a known risk when the expected value of another investment is greater. That is prioritization.

Engineering’s job is to make the costs and risks understandable enough for that prioritization to happen. Product’s job is to put them into the same decision-making process as everything else competing for the company’s resources. Hiding them in a technical-debt backlog allows both sides to avoid the harder conversation.

Once we stop treating all of these costs as debt, the goal changes. There is nothing to “pay off.” There is software to own.

Some of it should be modernized. Some should be refactored. Some should remain exactly as it is. Some risks should knowingly be accepted. Some systems should be retired because the value they create no longer justifies what they cost to maintain. Those aren’t technical decisions hiding on an Engineering backlog. They are investment decisions about the company’s software portfolio.

Which brings us back to that perfect line of code.

Nothing was wrong with it when we wrote it. Nothing needed to be paid back. It simply existed long enough for the world around it to change. Eventually maintaining it became a cost of continuing to own it.

We called that technical debt.

Maybe the debt was never really there.

Because if our definition of technical debt eventually includes every line of code we write, then eliminating it was never a realistic goal in the first place.

A zero-debt codebase is just a codebase where nobody has written anything yet.