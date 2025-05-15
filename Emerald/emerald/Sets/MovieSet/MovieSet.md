
```set
scope:
  - type
  - movie
fields:
  - cover
  - __bname
  - genre
  - plot
  - director
  - cast
  - year
  - name and year
  - rating
  - rate
  - watched
timestamp: 1747326796603
viewMode: gallery
gallery:
  transclude:
    - cover
    - watched
  minWidth: 300
calculatedFields:
  name and year: prop("year")
  rate: |-
    const fullStars = Math.floor(prop("rating")) / 2; 
    let result = '';     
    for (let i = 0; i < 5; i++) {         
        result += i < fullStars ? '★' : '☆';     
    }   
    return result;

```

# watch plan
```set
scope:
  - type
  - movie
fields:
  - __bname
  - director
  - cast
  - year
  - name and year
  - rating
  - rate
  - watched
timestamp: 1747327356869
viewMode: board
gallery:
  transclude:
    - cover
    - watched
  minWidth: 300
calculatedFields:
  name and year: prop("year")
  rate: |-
    const fullStars = Math.floor(prop("rating")) / 2; 
    let result = '';     
    for (let i = 0; i < 5; i++) {         
        result += i < fullStars ? '★' : '☆';     
    }   
    return result;
board:
  groupField: state
  lanes:
    - want to watch
    - watch again
    - watched

```
