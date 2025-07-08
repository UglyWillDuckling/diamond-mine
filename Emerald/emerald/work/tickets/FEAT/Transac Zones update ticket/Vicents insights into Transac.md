a list of questions -> answers regarding [[Transac Zones update ticket]]
___

**how do you use this feature and when? What is it's purpose?**

when a realtor subscribes to a new zone I open it, and when a realtor leaves a zone and there is no one left I close it

**how do you `close` a zone?**

I put a city_id in the list and I put a closing date

**are you expecting that the automation also close a zone not just open it?**
yes

**what does it mean there is no one left?** 

when in a given  [[salesforce sector|sector]] (group of `city_ids` that form a SEL on SalesForce) becomes **empty of realtors**, I have to close that bunch of cities because we have no one to send the leads to
 
**how are previous irises and SalesForce sectors connected?**

it's all connected with `iris_ids` associated to each sector

**are irises mapped one to one to sectors, or, are there other maybe smaller irises that are parts of a sector?**

iris_id is the smallest geo data possible so there are dozens of iris_ids per sector (edited) 
there can't be an iris_id in 2 different sectors

___

Here is the list of **geographical data** used for [[QSL]], from smallest to largest :
- `iris_id`
- `city_id`
- `zip`

There are **5909** distinct zipcodes (zip) in France. 
In each zip, there can be **dozens of cities**, each having a `city_id`. 
In each city, there can be hundreds of `iris_ids`, which represent a small part of land (like 2m²)

%% irises represent a small piece of land %%

`note:note: ` If you receive an `iris_id` on **Day** 1, and you don't receive that `iris_id` on **day 2**, then that iris_id needs to be closed

**but, we might have an issue there since the new implementation actually expects you to input iris_ids not city_ids. I'm talking about the manual updates.**

I can input `iris_ids` instead of `city_ids`

**what are your expectations from manual updates? 

==It needs to override automatic opening / closing==, and I need to have a report telling me which cities / sectors are overrided ; can't be displayed with iris_id information

**do you need the start/end dates for the manual update?**
No

 **Let's say you add a new zone in BY. Then SalesForce sends that same zone. What should happen to it?**

like I open it?
and then SF `automatically re-opens it`?

Then **I think the override should stay,** and the report should indicate that this zone is marked as atuomatically opened AND overrided as opened

**and if the opposite happens, you open it and then SF wants to close it?**

==if I opened it manually it needs to stay open==
