povezano:: [[zastitni vodic]]

# Označavanja vrste sustava uzemljenja

**Prvo** slovo - odnos između mreže i uzemljenja:
	**T** - izravno spojena jedna točka mreže na zemlju (primjerice
	neutralna točka transformatora)
	**I** - svi aktivni dijelovi mreže izolirani su od zemlje ili u jednoj
	točki spojeni sa zemljom preko impedancije.
**Drugo** slovo - odnos između dohvatljivih vodljivih dijelova (kućišta trošila i sl.) i uzemljenja:
	T - izravno električno spajanje dohvatljivih vodljivih dijelova
	(kućišta trošila i sl.) na zemlju, neovisno o sustavu uzemljenja mreže
	N - izravno električno spajanje dohvatljivih vodljivih dijelova
		(kućišta trošila i sl.) na uzemljenu točku sustava mreže
		(primjerice na uzemljenu neutralnu točku sustava).
**Dodatno** slovo (nalazi se uz drugo slovo) - raspored neutralnog i zaštitnog vodiča:
	**S** - neutralni (N) vodič i zaštitni vodič (PE) međusobno su odvojeni u cijeloj mreži
	**C** - neutralni (N) vodič i zaštitni vodič (PE) kombinirani su u jednom (PEN) vodiču.

U distribucijskim mrežama niskog napona - tri tipa mreža s obzirom na sustav uzemljenja: 
- TN
- TT
- i IT

## TN sustav

Osnovno obilježje - jedna točka sustava (neutralna točka) izravno spojena sa zemljom, dohvatljivi dijelovi (kućišta) spojeni preko zaštitnog vodiča na izravno uzemljenu neutralnu točku.
Kod nas su takvi sustavi poznati pod nazivom **nulovani sustavi**.

Kod TN mreža, kod kojih je zvjezdište pogonski uzemljeno, a vodljivi dijelovi pogonskih sredstava priključeni su posredstvom zaštitnog vodiča sa zvjezdištem, primjenjuje se:
- nulovanje
- naponska zaštitna sklopka
- strujna zaštitna sklopka.

S obzirom na raspored i funkciju neutralnog i zaštitnog vodiča postoje **tri (3)** podvrste:
- TN-S sustav
- TN-C-S sustav
- TN-C sustav

### TN-S sustav

u cijeloj mreži **zaštitni vodič (PE)** **odvojen od neutralnog vodiča (N),** pogonska struja
ne teče kroz zaštitni vodič.
![[~/×/2b5fa2eb909c94f2c55ad0f778e9735c_MD5.png]]

- razdvojeni neutralni i zaštitni vodič u cijeloj mreži

### TN-C-S sustav

u dijelu mreže **PEN** vodič ima funkciju **zaštitnog i neutralnog vodiča**, a u drugom dijelu mreže (blizu trošila) od zadnje razdjelne ploče, zaštitni vodič **odvojen** od neutralnog vodiča.

1. PEN vodic ima funkciju zastitnog i neutralnog vodica
2. blizu trosila, zastitni vodic odvojen od neutralnog

![[~/×/4dc7c3050570b4ac743919f90b06b2d8_MD5.png]]
- neutralni i zaštitni vodiči sjedinjeni samo u dijelu mreže


### TN-C sustav

u cijeloj mreži sjedinjen zaštitni i neutralni vodič u **jedan PEN vodič.**

![[~/×/e5b75436728c6cee58ebfa6de574bd71_MD5.png]]
- **sjedinjeni zaštitni i neutralni vodič** u jedan PEN vodič u cijeloj mreži

## TT sustav

Osnovno obilježje - neutralna točka sustava uzemljena posredstvom jednog uzemljivača, a kućišta **trošila uzemljena preko drugih uzemljivača**, električno neovisnih o uzemljenju neutralne točke sustava.

![[~/×/bae0ab4838f6a3749861406abce138fb_MD5.png]]
- **razdvojena** pogonska i zaštitna uzemljenja

Kod TT mreža su zvjezdište i mase pogonskih sredstava uzemljeni, ali tako da su priključeni na različite uzemljivače.
Prema tome, postoji **pogonsko i zaštitno uzemljenje.**

primjenjuje se:
● zaštitno uzemljenje
● strujna zaštitna sklopka
● naponska zaštitna sklopka

## IT sustav

**svi aktivni vodiči izolirani su od zemlje** ili su u jednoj točki spojeni sa zemljom preko velike impedancije, **kućišta trošila se uzemljuju.**

![[~/×/8618d60fcdf3ce0751015437d494b862_MD5.png]]

![[~/×/f9678e04f7dad9beda02a82e9ce30e61_MD5.png]]
-  zvjezdište uzemljeno preko velike **impedancije** i **uzemljena kućišta trošila**


Kod **IT** mreža, kod kojih je mreža izolirana prema zemlji, a mase pogonskih sredstava su zaštitnim vodičem spojene s uzemljivačem, pogodne su ove zaštitne mjere:

● sistem zaštitnog voda
● kontrolnici izolacije

#  VRSTE ZAŠTITE OD ELEKTRIČNOG UDARA U UVJETIMA KVARA

Zaštitne mjere od električnog udara u uvjetima kvara, s obzirom na način djelovanja, mogu se podijeliti na tri osnovne skupine (i podskupine)

1. Skupina, istodobna zaštita od električnog udara u pravilnome radu 
	i u uvjetima kvara:
• **SELV** (engl. Safety Extra-Low Voltage)
• **PELV** (engl. Protection by Extra Low Voltage)
• **FELV** (engl. Functional Extra-Low Voltage)

2. Skupina, **automatski isklop napajanja**:
	a) **TT**
	• Isklop s nadstrujnom zaštitom
	• Isklop sa strujnim zaštitnim sklopkama
	b) **TN** (TN-C, TN-C/S, TN-S) 
	• Isklop s napravama nadstrujne zaštite
	• Isklop sa strujnim zaštitnim sklopkama
	c) **IT** sustavi s uporabom
	- Kontrolnika izolacije
	- Strujnih zaštitnih sklopki
	- Zaštitnih naprava nadstrujne zaštite

3. Skupina, **bez naprava za isklop struje kvara**
	• Zaštita primjenom opreme razreda II. ili jednako vrijednom izolacijom
	• Nevodljivim prostorima
	• Lokalnim izjednačavanjem potencijala bez spoja sa zemljom
	• Električnim odjeljivanjem (Električno odvajanje – Galvansko odvajanje)

## O kvarovima

Kućišta trošila i opreme te ostale metalne mase - u redovitom pogonu nisu pod naponom. 
Uslijed kvara na izolaciji vodiča mogu doći pod napon i predstavljati opasnost za ljude koji dodiruju ovu opremu.

Napon kvara, **Ug**, - potencijal kućišta trošila prema zemlji
Napon dodira, **Ud**, (dodirni napon) - napon koji se pojavljuje između istodobno dostupnih dijelova za vrijeme kvara

**Napon dodira** (dodirni napon) može poprimiti **najviše** **vrijednosti** faznog napona ako je kvar zanemarive impedancije nastao na priključnoj stezaljci jednog trošila, a drugi istodobno dostupni pristupačni vodljivi dio ima direktan spoj sa zemljom.

**Očekivani napon dodira** - najviši napon dodira koji se može pojaviti u električnoj 
instalaciji prilikom kvara sa zanemarivom impedancijom.

## <mark style="background: #ABF7F7A6;">Izjednačavanje</mark> potencijala

	 Smatra se da sama ova mjera za sebe nije uvijek dovoljna.
 
**Izjednačavanje potencijala** - pruža sve elemente djelotvorne zaštite tek u sklopu **s uređajima za brzo isključivanje struje kvara i s dobrim uzemljivačem.**

- postiže se međusobnim **galvanskim spajanjem** svih metalnih dijelova, različitih instalacija sa zaštitnim vodičem električne instalacije u nekom prostoru.

> [!danger] jednaki napon
> U slučaju pojave napona kvara na kućištima električnih trošila, taj **isti napon pojavit će se i na međusobno povezanim metalnim dijelovima drugih instalacija**, te ==neće== 
> ==postojati razlika napona== između tih vodljivih instalacija.

Ovim postupkom osjetno je smanjena mogućnost da na čovjeka djeluje napon dodira u slučaju ako dođe istodobno u dodir s neispravnim električnim trošilom 
i s bilo kojim metalnim dijelom drugih instalacija.

Dvije vrste izjednačavanja potencijala
- **glavno** izjednačavanje potencijala koje obuhvaća cijeli objekt
- **lokalno** **dopunsko** izjednačavanje potencijala, koje obuhvaća uži prostor ili dio instalacije u objektu

Primjene glavnog izjednačavanja potencijala - sprječavanje unošenja vanjskih opasnih potencijala u postrojenje. 

Vanjski opasni potencijali - u postrojenje - preko zaštitnih ili PEN vodiča i preko metalnih plašteva kabela. 

Izjednačavanjem potencijala - cijela zgrada **ekvipotencijalni sustav** u kojem je vrlo mala vjerojatnost pojave opasnih napona dodira, čak i kad je riječ o relativno visokim potencijalima u apsolutnome iznosu, koje bi cijeli sustav mogao imati prema
″dalekoj zemlji″.

Glavno izjednačavanje potencijala izvodi se s vodičima koji moraju imati presjek koji nije manji od polovice presjeka najvećeg zaštitnog vodiča u instalaciji, ali ne smije biti manji od 6 mm 2 na bakrene vodiče.

Najveći presjek ne mora bit veći od 25 mm2 za bakrene vodiče.

![[~/×/09987f5de603ca905195f2266e538a4f_MD5.png]]

## Istodobna zaštita od električnog udara u pravilnome radu i u uvjetima kvara

Primjena istodobne zaštite od električnog udara u pravilnome radu i u uvjetima kvara, kao učinkovita mjera zaštite ograničena je s obzirom da se mogu priključiti samo 
naprave **malih snaga** i na **male udaljenosti**.

**SELV, PELV i FELV** primjenjuju se:
- za ručne svjetiljke
- električni alat
- u upravljačkim i signalnim strujnim krugovima poljodjeljstvu te
- za dječje igračke

###  SELV – Sigurnosni mali napon (engl. Safety Extra-Low Voltage)

Upotrebljavaju se u situacijama gdje rad električnih uređaja
predstavlja ozbiljnu opasnost - bazeni, zabavni parkovi i slično.
Metoda - isporuka snage pri vrlo niskim naponima sa
sekundarnih namotaja izolirajućih transformatora posebno
dizajniranih u skladu s nacionalnim ili međunarodnim (IEC 60742) standardom.
Razina izolacije između primarnih i sekundarnih namotaja vrlo
je visoka te se ponekad koristi i uzemljeni metalni izolator
između namotaja.
Efektivni napon na sekundaru nikad ne prelazi 50 V.

Postoje tri uvjeta eksploatacije koja se moraju poštivati kako bi se
ostvarila zadovoljavajuća zaštita protiv indirektnog kontakta:
• Niti jedan “živi” vodič na SELV-u ne smije biti uzemljen
• Izloženi vodljivi dijelovi SELV opreme ne smiju biti
uzemljeni, spojeni na ostale izložene vodljive dijelove ili na
vanjske izložene vodljive dijeove
• Svi “živi” dijelovi SELV krugova i ostalih krugova visokog
napona moraju biti razmaknuti na minimalnoj udaljenosti
koja je jednaka onoj između primarnih i sekundarnih
namotaja izolacijskog transformatora

U nekim slučajevima uzemljenje sustava može imati potencijal koji nije nula,
odnosno može dosegnuti dovoljno visoke i opasne vrijednosti.

Zbog toga se sekundarna instalacija (SELV) ne uzemljuje i odvaja se od ostalih strujnih krugova.

Ove metode zahtijevaju:
- Da SELV krugovi moraju koristiti vlastite instalacijske cijevi ili 
	kanale osim kada se koriste kabeli izolirani od najviših napona ostalih krugova
- Utičnice za SELV sustav ne smiju imati izvod za uzemljenje
- SELV utikači i utičnice moraju biti posebno dizajnirane tako da se onemogući slučajno spajanje na više napone

Kada nazivni napon SELV sustava nije veći od 25 V efektivne
vrijednosti izmjenične struje, odnosno 60 V istosmjerne struje, nije
potrebna nikakva zaštita od direktnog dodira.
Ako nazivni naponi prelaze navedene vrijednosti mora se osigurati
zaštita od električnog udara u pravilnome radu s:
••pokrovima ili omotačima stupnja zaštite IP 2X, odnosno
IPXXB ili izolacijom koja izdržava ispitni napon od 500 V u vremenu od jedne minute.

Kod primjene SELV sustava nije potrebna nikakva dodatna
zaštita od indirektnog dodira, jer se ona osigurava samom
izvedbom, a to je:
- nazivni naponi su manji od trajno dogovorene granice
dodirnog napona (UL)
- sigurnim električnim razdvajanjem od strujnih krugova viših napona onemogućen je prijelaz tih napona na strujni krug sigurnosnog malog napona.

### PELV - Uzemljeni sigurnosni mali napon (engl. Protection by Extra Low Voltage)

• za općenitu uporabu gdje su **potrebni niski naponi** ili zbog sigurnosnih razloga,
• nije za lokacije visokog rizika.

Koncept sličan kao kod SELV sistema, ali je sekundarni krug uzemljen u jednoj točki (kućišta trošila ili vodiča).

![[~/×/01123e0cfa713653c6fc123b3ae34c29_MD5.png]]



###  FELV - Mali radni napon (engl. Functional Extra Low Voltage)

• Tamo gdje se, zbog funkcionalnih razloga, koristi napon od 50 V
ili manji, ali nisu ispunjeni svi uvjeti koji se odnose na SELV ili
PELV (nisu nužni SELV ili PELV)
• kada električni krug sadrži opremu nedovoljno izoliranu od visokih
napona (transformatori, releji, kontaktori i sl.)

![[~/×/9ecb935157a1f6f8a088fbe491a716e4_MD5.png]]

U slučaju kada se nekoliko uređaja napaja s **razdvojnog transformatora** potrebno je obratiti pažnju na sljedeće:

• Izloženi vodljivi dijelovi svih uređaja moraju biti međusobno povezani, ali ne i uzemljeni
• Utičnice moraju imati kontakt za uzemljenje koji u ovom slučaju služi 
samo kako bi se osiguralo međusobno povezivanje svih izloženih vodljivih dijelova

## Zaštita automatskim isklopom napajanja

Kako bi zaštita automatskim isklopom napajanja ispunila svoju zadaću, 
svaki kvar na izolaciji opreme mora prouzročiti dovoljno jaku struju 
kvara koja će izazvati prekidanje napajanja u vremenu koje je nužno za sigurnost ljudi.

Ova vrsta zaštite temelji se na dva elementa:
• postojanju zatvorenog strujnog kruga, odnosno kruga petlje
koji omogućava protjecanje struje kvara (oblik kruga petlje
ovisi o sustavu uzemljenja TT, TN i IT mreže), te
• o prekidanju struje kvara primjenom prikladnih zaštitnih
uređaja u tako kratkim vremenima da ne dođe do ozljeđivanja
osobe koja je bila izložena naponu dodira.

### TT sustav - isklop s nadstrujnom zaštitom

U **TT** sustavu uzemljuje se
- neutralna točka sustava odnosno zvjezdište transformatora ili generatora.
- sve mase trošila odnosno izloženi vodljivi dijelovi opreme i uređaja, koji mogu doći pod napon u slučaju kvara,
galvanski se povezuju sa zaštitnim vodičem i uzemljuju preko
posebnog uzemljivača
- u nekom objektu može se koristiti jedan uzemljivač za sva trošila.

U slučaju proboja izolacije na opremi, odnosno kvara zanemarive impedancije, struja kvara će proteći kroz zatvoreni strujni krug kako je prikazano na slici.

![[~/×/17077537a286b5a553b1eb2d713c687a_MD5.png]]

Kod nadstrujnih uređaja s inverznom karakteristikom t/I
osigurača, struja Ia mora biti tolike jakosti da sigurno izazove
isklapanje uređaja u vremenu ne duljem od 5 odnosno 0,2
sekunde.
Kod zaštitnih uređaja s trenutačnom karakteristikom
isklapanja, vremena isklapanja su manja od 0,1 sekunde, ali
struja kvara mora biti veća od struje isklapanja uređaja.
U slučaju da se za više trošila s različitim nadstrujnim
zaštitnim uređajima koristi samo jedan uzemljivač, ukupni
otpor rasprostiranja tog uzemljivača mora zadovoljiti uvjete za
ono trošilo koje zahtjeva najmanji otpor uzemljivača.

###  TT sustav - isklop napajanja zaštitnim strujnim sklopkama

Masa štićenog trošila povezuje se sa zaštitnim vodičem na posebni uzemljivač.

Ukoliko se jednim zaštitnim uređajem štiti više trošila, njihove mase moraju biti povezane na isti uzemljivač.
