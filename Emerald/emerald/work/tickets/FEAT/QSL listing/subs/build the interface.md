---
color: var(--mk-color-turquoise)
---
#interface
[[interface]]

[[Create DB table]]

## current version

```php
interface Listing
{
    public function get_realtor(): ?\realtor;

    public function get_contract(): ?\contract;

    // NOTE: this will be a field in the end
    // Can contain HTML
    public function description(): string;

    // NOTE: a field
    public function current_price(): float;

    public function get_title(): string;

    public function get_url(): string;

    public function start_date(): string;
}
```

[local](http://localhost:8001/contacts/5758471/projects/2080878347/contracts/2080494651/listing)

## todos
- [x] [[#try out the interface]] on the backyard ✅ 2024-10-28
	- [x] modify listing if needed ✅ 2024-10-28
- [x] create rendering test
	- [x] update model accordingly
- [x] test the new changes on the website ✅ 2024-10-28
- [x] update `interface` definition ✅ 2024-11-04
- [x] check other scenarios ✅ 2024-11-04

### try out the interface
1. ! find the **place** where it is used
2. & inject a custom `listing`
	1. @ modify listing if needed

#### picture
Neither the property "`get_main_picture_url`" nor one of the methods "`get_main_picture_url`()", "`getget_main_picture_url`()"/"`isget_main_picture_url`()"/"`hasget_main_picture_url`()" or "__call()" exist and have public access in class "Share\Backyard\QSLListing"

  at `backyard/templates/contacts/projects/contracts/listing.html:11`
```html
  8▕                     <tr>
  9▕                         <td width="200">
 10▕                             <a href="{{ listing.get_url() }}" target="_blank">
➜  11▕                                 <img title="{{ listing.get_title() }}" alt="{{ listing.get_title() }}" src="{{ listing.get_main_picture_url('200x150') }}" width="200" />
 12▕                             </a>
 13▕                         </td>
 14▕                         <td>
 15▕                         </tr>
```

#### get_place

  `backyard/templates/contacts/projects/contracts/listing.html:22`
```html
     18▕                                 </a>
     19▕                                 <br/>
     20▕                                 {{ listing.current_price|currency }} <small>FAI</small>
     21▕                             </h4>
  ➜  22▕                             <div class="muted">{{ listing.get_place().title }}</div>
     23▕                             <div style="line-height: 18px;">{{ listing.description|striptags|truncate(200) }}</div>
     24▕                             <div>
     25▕                                 <a href="{{ listing.get_url() }}" target="_blank">
     26▕                                     Voir l'annonce sur MeilleursAgents.com
```

#### user id

Neither the property "id" nor one of the methods "id()", "getid()"/"isid()"/"hasid()" or "__call()" exist and have public access in class
"`user`". at backyard/templates/contacts/projects/contracts/listing.html

```html
<div class="small text-error">
    43▕ Annonce liée à un autre dossier 44▕ {% set contact =
    listing.contract.get_project().get_contact() %}
➜ 45▕ <a
        href="{{ '/contacts/%s/projects/%s/'|format(contact.id, listing.contract.project_id) }}"
        target="_blank"
    >
        46▕ (voir) 47▕
    </a>
</div>
```

### test on website
