#projekt/faks

- & nije potreban delay ako je sve na principu promijene
- ..

- [x] vidjeti imam li senzor za svjetlo (light sensor)
- [x] popravi bug da se svjetlo ne ugasi iako je dan

- [x] ispisi stanje dana
- [x] dodaj ispis kod klika na gumb
- [x] fix inicijalni ispis
- [x] ? vidi je li delay potreban?
- [ ] napravi centralizirani ispis baziran na **promijeni**

**ispis na promijena** (on change)

- promijene(3): dan/noc, gumb pritisnut, promijena stanja

- [ ] obavezno ispisi dan/noc
- [ ] ako je gumb pritisnut + promijena stanja = napisi "svijetlo je " "upaljeno|ugaseno" 

- [ ] ako je gumb pritisnut a nije bilo promijene stanja napisi da gumb ne radi po danu

### code :LiCode:

#### v2

```c++
#include <DIYables_LCD_I2C.h>
DIYables_LCD_I2C lcd(0x27, 16, 2);  // I2C address 0x27, 16 columns, 2 rows=

const byte led=6; const byte botun=2;
#define ON(x) digitalWrite(x,1)
#define OFF(x) digitalWrite(x,0)

void AKCIJA();
void setup() {
  lcd.init();
  lcd.backlight();
  pinMode(led, OUTPUT);
  pinMode(botun, INPUT_PULLUP);
  attachInterrupt(0, AKCIJA, FALLING);
  Serial.begin(9600);
}

bool stanje=0;
bool stateChanged=false;
bool noc=false;
String poruka = "";

int foto;
void loop() {
  foto=analogRead(A0);

  bool prevNoc = noc;
  noc = ( foto < 50 ) ? true : false;

  // uvijek ugasi svijetlo ako je dan
  if (!noc) {
    updateState(false);
  }

  if (prevNoc != noc) {
    // u slucaju promijene, napravi updejt ekrana
    poruka = ( !noc ) ? "dan je." : "noc je.";
  }

  refreshScreen();
  refreshLight();
}

void refreshScreen() {  
  if (poruka != "") {
    lcd.clear();
    lcd.printCenter(poruka.c_str(), 0);
    poruka="";
  }
}

void refreshLight() {
	stanje ? ON(led) : OFF(led);
}

void updateState(bool s) {
  stateChanged = (stanje==s) ? false : true;
  stanje = s;
}

unsigned long pass_time=0;
void AKCIJA() {
  unsigned long interrupt_time=millis();
  if(interrupt_time - pass_time > 200) {
    if(noc) {
      poruka="gumb pritisnut.";
      updateState(!stanje);
    } else {
      poruka="gumb ne radi po danu.";
      updateState(false);
    }
    pass_time=millis();
  }
}
```

#### v1
```cpp
const byte led=6; const byte botun=2;
bool stanje=0; unsigned long pass_time=0;

#define ON(x) digitalWrite(x,1)
#define OFF(x) digitalWrite(x,0)

void AKCIJA();
void setup() {
  pinMode(led, OUTPUT);
  pinMode(botun, INPUT_PULLUP);
  attachInterrupt(0, AKCIJA, FALLING);
  Serial.begin(9600);
}

int foto;
void loop() {
  foto=analogRead(A0);
  // Serial.print(F("Svjetlo= "));
  // Serial.println(foto);
}

void toggleLight() {
  if(stanje==1){
    ON(led);
  }
  else{
    OFF(led);
  }
}

void AKCIJA() {
  unsigned long interrupt_time=millis();
  if(interrupt_time - pass_time > 200) {
    if(foto < 100) {
      stanje=!stanje;
      toggleLight();
    }
    pass_time=millis();
  }
}
```
