---
searchterm: "#person"
duration: 1 year
tags:
  - list/people
---
- [/] #task make a birthday list for all the peoples 🎂 🆔 PBZ3wr 🔽 ⏳ 2025-04-14 📅 2025-06-30

from:: [[DataviewJS Snippet Showcase - Share & showcase]]
___

```dataviewjs
var start = moment().startOf('day');
var end = moment(start).add(dv.current().duration);
var dateformat = "YYYY-MM-DD";
if (dv.current().dateformat) { dateformat = dv.current().dateformat; }

// info text above table, {0}=duration, {1}=start date, {2}=end date
// parameters can be left out, or the string empty
var infotext = "Upcoming birthdays for {0} from now ({1} – {2})<br><br>";

//======================================================================

function nextBirthday(birthday) {
    // Get person’s next birthday on or after "start"
    // returns a moment
    
    // need to "unparse" because DV has already converted YAML birthday to DateTime object
    // shouldn’t harm if already a string
    var bday = moment(birthday.toString());
    var bdayNext = moment(bday).year(start.year());
    if (bdayNext.isBefore(start, 'day')) {
        bdayNext.add(1, "year");
    }
    return bdayNext;
}

function turns(birthday) {
    // Get the age in years a person will turn to on their next birthday

    // need to "unparse" because DV has already converted YAML birthday to DateTime object
    // shouldn’t harm if already a string
    var bday = moment(birthday.toString());
    return nextBirthday(birthday).diff(bday, 'years');
}

function showBirthday(birthday) {
    // Determine if this birthday is in the range to be shown
    // including the start date, excluding the end date
    // because that comes from a duration calculation
    // for use with "where", returns true or false
    
    if (birthday) {
        // need to "unparse" because DV has already converted YAML birthday to DateTime object
        // shouldn’t harm if already a string
        var bday = moment(birthday.toString());
        var bdayNext = nextBirthday(birthday);
        if (bdayNext.isBetween(start, end, 'day', '[)')) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function sortByNextBirthday(a, b) {
    // comparator function for "sort"
    
  if (nextBirthday(a).isBefore(nextBirthday(b))) {
    return -1;
  }
  if (nextBirthday(a).isAfter(nextBirthday(b))) {
    return 1;
  }
  // they’re equal
  return 0;
}


//======================================================================

dv.paragraph(infotext.format(moment.duration(dv.current().duration.toString()).humanize(), start.format(dateformat), end.format(dateformat)));

dv.table(
    ["Name", "Birthday", "Turns"],
    dv.pages(dv.current().searchterm)
        // use a function to see if this birthday is in range to be shown
        .where(p => showBirthday(p.birthday))
        // use a comparator function to sort by next birthday
        .sort(p => p.birthday, 'asc', sortByNextBirthday)
        .map(p => [
            p.file.link,
            p.birthday ? nextBirthday(p.birthday).format(dateformat) : '–',
            turns(p.birthday)
        ])
);
```
