- [x] #task uci [[Digitalna · Usmeni · Pitanja]] 🛫 2025-06-20 ⏳ 2025-06-21 📅 2025-06-22 🆔 PalelG ✅ 2025-06-29
___

```table-of-contents
```
___

## Razlika analognih i digitalnih signala, prednosti digiratlnih sustava
`pop: istraziti` `note:zanimljivo `

**analogno**

- ima beskonacno mnogo stanja (beskonacna preciznost)
	- komponente su podlozne promijenama vrijednosti zbog promijena u okolini
- svaki trenutak vremena je zabiljezen

**digitalno**
- broj mogucih stanja je **fiksan** i podesiv (nije beskonacan) - rezolucija odnosno broj diskretnih stanja
- moguce kontrolirati vremenske razmake mjerenja (sample rate)
- moguce prikazati u binarnom sustavu
- bolja predvidljivost
- puno manja osjetljivost na vanjske promijene
- laka kontrola preciznosti odnosno osjetljivosti na promjenu
- moguce uvijek reproducirati na drugim digitalnim uredajima

## Pretvorba iz analognog u digitalni signal, graf
- [[Analog-to-digital converter]]

- konvertiramo u dvije osi
	- vremenski i preko amplitude
	- laka mogucnost podesavanje potrebne preciznosti(osjetljivosti)
	- mogucnost odredivanje potrebne broja uzoraka (sample rate)
		- smanjuje potrebe za spremanjem velike kolicine podataka

![[~/×/78a5f13ecd5cc81ddcb90d4a41553658_MD5.jpeg]]

## Brojevni sustavi
`pop:kasnije `
- [ ] generalno o brojevnim sustavima
- [ ] lista sustava
	- [ ] pojasnjenja

## Binarno mnozenje

**Množenje u binarnome brojevnom sustavu  jedna je od jednostavnijih aritmetičkih operacija**, jer se svodi na zbrajanje binarnih brojeva. 

Provodi se na isti način kao u dekadskome brojevnom sustavu.

101110
+101110
+0000000 =
100010100

- relativno jednostavno
- bitno obratiti paznju na poziciju trenutno mnozenja
- pripaziti na **nule** pri kraju broja 

## Binarno zbrajanje i oduzimanje

- klasicno zbrajanje
- oduzimanje dvojnim komplementom

## konverzije iz raznih brojevnih sustava

1. bin > dec
2. bin > octal
3. bin > hex
4. dec > hex
5. dec > octal

### bin to dec

- svaka znamenka u binarnom sustavu predstavlja potenciju broja 2
- kreceno od LSB sa nultom potencijom i za svaku znamenku povecavamo za eksponent za jedan(1)

1. utvrdimo potencije svake znamenke
2. pomnozimo znamenke s njihovim potencijama
3. zbrojimo(sumiramo) rezultate mnozenja

### bin -> octal

-  $2^3$ **je 8 pa svake 3 binarne znamenke predstavljaju jednu** znamenku u oktalnom sustavu [^1] 

1. s desna na lijevo podijelimo znamenke u **parove po 3**
2. pretvorimo znamenke u oktalne brojeve %% ovo su isti kao brojevi u dekadskom sustavu %%

### bin to hex
- svake 4 znamenke predstavljaju jednu u heksadecimalnome sustavu[^2] 

1. s desna na lijevo podijelimo znamenke u **parove po 3**
2. pretvorimo hex brojeve pazeci na brojeve iznad **9**

> [!remember]-  hex brojevi
>  U hex sustavu brojeva se broji do 15 decimalno sto znaci da za brojeve iznad 9 moramo koristiti dodatne znakove kako bismo ih mogli zapisati.
>  ![[hexadecimal system#from 0 to E (0 to 15 dec)]]

## Floating point
`pop: instraziti`

- koristi se 1 bit za znak(+,-)
- nekoliko bitova za eksponent
- **ostatak** bitova za mantisu - brojevi iza decimalne tocke
- cesto korišten, standardiziran
- [[IEEE 754 standard]]
- postoje 2 beskonacnosti +∞ and −∞.
- dvije vrste [[NAN]]
- baze mogu biti **2 ili 10**

formula za izracun vrijednosti nekog floating point broja:
$-1^s*c*b^q$
- s: sign(+,-)
- c: mantisa (koeficijent)
    b: baza
- q: eksponent

Razlikujemo:
- **Jenostruka** preciznost : 32-bita širina
- **Dvostruka** preciznost : 64-bita širina

### jednostruka preciznost

- **32** bita
	- 1 sign bit
	- 8 bita eksponent
	- 23 bita mantisa

### dvostruka preciznost (double precision)

- **64** bita
	- 1 sign bit
	- 11 bita eksponent
	- 52 bita mantisa

##  Little endian i Big endian

- **Little** endian
	- sprema `LSB`, najmanji bit, na najmanjoj adresi
	- 'znacaj' bita se moze **povecati** povecanjem adrese
- **Big** Endian
	- sprema `MSB`, bit najvece vrijednosti, na najmanjoj adresi
	- znacaj bita se **smanjuje** povecanjem adrese

![[Atlas/Knowledge/Concepts/CS 1/Endianness#^74e261]]
see: [[Bit numbering]], [[Atlas/Knowledge/Concepts/CS 1/Endianness]]

## Zašto kodirati digitalni podatak

-  prilagođavanje informacije na prijenosni kako za brzinu tako i za sigurnost
 - potreba da se kodom prikrije sadrzaj informacije koja se pomoću ključa ili šifre moze otkriti
	 - skrivanje informacija odnosno kodiranje
 - spremanje podataka, sažimanje
 - jednostavnost rada
 - mogucnost reprodukcije na svim digitalnim uredajima
 - prilagodavanje potrebnoj preciznosti
 - manji memorijski zahtjevi
 - lako odredivanje vlastitih vrijednosnih raspona
	 - primjer: 0 i 1 u racunalu su u pravilu voltazni rasponi

## BCD kod
 [[Binary-coded decimal]]

**Binary Coded Decimal** je brojčani sustav kodiranja decimalnih znamenki
 
 - BCD znamenka kodira svaki decimalni broj u **4-bitni** binarni oblik
 - svaki kodni bit ima svoju težinu
 - Najpopularniji **8421** BCD koji je u literaturi naveden kao BCD kod, postoje još 5421, 4221
 
 - svake 4 znamenke predstavljaju 1 decimalnu znamenku

## Gray zrcalni kod
 
 - [[Frank Gray]] (u [[Bell Labs]]) patentiran 1953.
 - Susjedne kombinacije se uvijek razlikuju **samo u jednom bitu**
 - Za istu dužinu riječi može biti više gray kodova, standardan je zrcalni
 - Kod K-mapa [^3] , smanjenje mogućnosti greške u komunikaciji

Kod rijesava probleme s promijenom stanja izmedu dva uzastopna binarna broja kod kojih je potrebno promijeniti vise bitova:

011 -> 100
Mijenjaju se 3 bita. Fizicki je emoguce da se sva 3 promijene u isto vrijeme promatracu je nemoguce utvrditi gleda li "pravu" poziciju ili **tranzicijsko** stanje.
Greyev kod rijesava taj problem tako da se susjedne vrijednosti(kombinacije) razlikuju u samo jednom bitu.

## 12. Znakovni kodovi

 - Pored znamenki omogućavaju kodiranje i **slova, znakova i simbola**
 - Koriste se kod ulazno izlaznih uređaja
	 - Bušene kartice – 12-bitni Hollerith kod, zastario
 - Danas: [[ASCII]], [[EBCDIC]], [[UNICODE]]

## 13. 7 seg kod

[[~/×/3cb6632cc976427a9eb55778fcd78b55_MD5.jpeg|Open: 7seg.png]]
![[~/×/3cb6632cc976427a9eb55778fcd78b55_MD5.jpeg|555]]


## 14. Paritet

 - Dodavanje jednog bita radi detekcije pogreške u jednom bitu
 - Jedan **redudantni** bit
 - Parni i neparni patriet
	 - 0 – paran broj, 1 – neparan broj
 - Ne može lokalizirati pogrešku

- detekcija se vrsi provjerom broja parnih odnosno neparnih bitova
- nije moguce popraviti gresku
- radi polovicno posto ce uhvatiti gresku samo kad paritet ne odgovara sto nije uvijek slucaj

pogledaj: [[Error Detection Codes Parity Bit Method]]

## 15. Repetition kod
 [^4]
 
 - Svaki bit se ponavlja nekoliko puta
 - Veći broj redudantnih bitova
 - Može lokalizirati pogrešku ovisno o broju redudantnih bitova
 - Trostuko ponavljanje za podatak „1001“
 - lakoca implementacije

> [!faq]- Primjer
> ![[Repetition code - Wikipedia#Example]]
[^4]

## 16. 16.Hammingov kod

 - Dodavanje **paritetnog** bita na točno određena mjesta u kodnoj riječi
 - Veći broj **redudantnih** bitova lociranih na točno određenim mjestima
 - Može detektirati i lokalizirati pogrešku za pogrešku **u jednom i u dva bita**
 - moze ispraviti gresku u jednom bitu
 
Kako se radi?
1. **Pozicija** - **paritetni** **bitovi** se stavljaju na pozicije koje su **potencije** broja dva
2. **Izracun** - svaki **paritetni** **bit** se izracunava tako da pokriva odredene podatkovne bitove
3. `Kodiranje` - kada se dodaju paritetni bitovi, cijeli niz se salje kao **Hammingov kod**

![[~/×/370f0b91f944affafa384e5235847b16_MD5.jpeg]]

see: [[Hamming code - Wikipedia]]

## 19. Ternarna (Trorazinska) logika

- koristi 3 stanja umjesto 2
	- 0, 1, 2
	- 2 je neodredeno ili trece stanje
- uzima 3 ulazna bita i generira 1 izlazni bit na temelju logicke funkcije

Ovakva logika je korisna kod iskazivanja vrijednosti ciju samu vrijednost ne mozemo utvrditi.

## 20. Što je logička 0 i 1, TTL naponske razine 0 i 1

 - 0 – označava niski napon, 1 – označava visoki napon
 - Logička 0 (LOW) – **od 0V do 0,8V**
 - Logička 1 (HIGH) – **od 2,0V do 5V**
 - Naponski raspon između 0,8V i 2V je **nedeterminiran** – ne garantira se pouzdanost logičke razine

## 21. Schmit vrata

logički sklopovi koji uvode histerezu u prijelazu između logičkih stanja. To znači da imaju dvije
različite naponske razine za:
- prelazak s logičke '0' na logičku '1' (tzv. **gornji** prag)
- prelazak s logičke '1' na logičku '0' (tzv. **donji** prag)

- Schmit vrata imaju memoriju tako da pamte trenutno postignuto stanje i odrzavaju ga iako ulazni signal(voltaza)  trenutno ne pokazuju to stanje
	- ovisno o trenutnom stanju njihovo se ponasanje mijenja

**Zašto su važna Schmitt vrata?**
==Uklanjaju šumove i oscilacije== u signalima koji sporo prelaze između logičkih razina.
Omogućuju stabilniji rad digitalnih sklopova, posebno kad se ulazni signal mijenja
postupno ili je zagađen šumom

**Primjena**:
U prekidačima, senzorima, **analogno-digitalnim pretvornicima**, tajmerima, itd.

**Simbol**:
![[~/×/d194556c243adc8c6022d8f466d7abf0_MD5.jpeg|200]]

Simbol Schmitt vrata često ima standardni simbol AND/OR/NOT s dodatnom malom
krivuljom na ulazu koja označava histerezu.

![[~/×/549e241f98e3e912ccd5c98ce12f362d_MD5.jpeg|500]]

vidi: [[Schmitt trigger]], [[Schmitt Trigger and memory]]

### primjer rada

![[Schmitt trigger#**Modified input voltage (parallel feedback) **]]

Kada ulazni napon prede prag u bilo kojem smjeru sklop promjeni svoju ulaznu voltazu u istome smjeru.(napon se dodaje/povecava)
- Ovo je `pozitivni feedback`

## 22. Obitelji TTL sklopova

**Transistor–transistor logic**

- tranzistori obavljaju i logicku i pojacivacku funkciju

 - TTL sklopovi se dijele na različite obitelji prema brzini rada i potrošnji energije:
	- Standard TTL (74) – osnovna verzija, umjerene performanse
	- 74LS (low Power Schottky) – manja potrošnja, brži od standardnog TTL-a
	- 74S (Schottky) – vrlo brz, ali troši više energije
	- 74ALS (Advanced Low Power Schottky) – kombinira nisku potrošnju i visoku brzinu
	- 74F (Fast) – izuzetno brz, koristi naprednu tehnologiju
 - Svaka obitelj ima različite električne i vremenske karakteristike

1. standardni ttl
2. low - ttl
3. High-speed ttl
4. Schotthky ttl

## 23. Vrijeme propagacije LH, HL

 - Vrijeme propagacije je vrijeme koje je potrebno da se promjena na ulazu sklopa odrazi na
- njegovom izlazu.
- Propagacijsko vrijeme **LOW→HIGH**: Vrijeme koje treba izlazu da prijeđe iz niske (0) u(1) logičku razinu
- Propagacijsko vrijeme **HIGH→LOW**: Vrijeme koje treba izlazu da prijeđe iz visoke (1) u(0) razinu
 - ==Tipično se mjeri u nanosekundama== (ns). Manje vrijeme znači brži rad sklopa
- vazno u dizaju sklopova jer utjece na brzinu cijelog sustava i moze uzrokovati kasnjenja u prijenosu informacija.

## 24. Strujne karakteristike TTL sklopova 

 - TTL sklopovi imaju **specifične ulazne i izlazne struje:**
	- **Ulazna struja** (I<sub>IH</sub>, I<sub>IL</sub>):
		- Kolika struja **ulazi** u ulaz kada je on **na visokoj (H) ili niskoj (L) razini**
		- TTL ulazi troše struju i zato ih nije moguće vezati previše na jedan izlaz
	- **Izlazna struja** (I<sub>OH</sub>, I<sub>OL</sub>):
		- Koliku struju **izlazi** može dati kada je u **visokom (H) ili niskom (L) stanju**
		- Ograničenje na broj ulaza koje jedan izlaz može "voziti" zove se **fan-ou**t
 - Za standardni TTL, **fan-out j**e tipično 10 – ==jedan izlaz može upravljati s 10 ulaza==

1. **iscjedna** struja - struja kroz izlazni tranzistor kada je iskljucen
2. **Izlazna** struja - max. struja koju izlaz moze isporuciti
3. **Ulazna** struja - struja koja tece u ulaze sklopova
4. **Napajanje** (V_CC) - naponski nivo za TTL: obicno 5V.
5. **potrosnja** struje 

## 25. Programljivi logički sklopovi

 - Funkcionalnost im se može mjenjati
 - Koriste se kod digitalnih sistema **bez stalnog hardverskog mjenjanja**

**Vrste**:

- FPGA (Field-Programmable Gate Array)
- CPL (Complex Programmable Logic Device)
- PAL (Programmable Array Logic)

## 26. Objasniti CLB
 `configurable logic blocks`

![clb|500](https://upload.wikimedia.org/wikipedia/commons/1/1c/FPGA_cell_example.png)

 - osnovna gradevna jedinica FPGA
 - Predstavlja osnovnu logiku FPGA sklopova
 - Sasdrži logičke funkcije LUT, bistabila (D tip), multipleksera i ostalih elemenata
  
see [[Field-programmable gate array - FPGA#Logic blocks]]

![[~/×/325655c4f4951696446b1271f5991c42_MD5.jpeg|400]]



## 27. LUT

`Look up Table`

- osnovna komponenta FPGA cipova
- pohrana **rezultata**
- **promjena** fukcije bez potrebe za promjenom hardverske strukture
- mogu se konfigurirati
- omogucuju visoke performanse
 
 - **LUT** predstavlja $2^nx1$ **memoriju** i omogućuje implementaciju bilo kojeg n ulaznog kombinacisjkog sklopa
 - **Bistabil** omogućuje implementaciju **sekvencijalnog** sklopa

 ### spajanje LUT-a
 
Multiplekser se može konfigurirati tako da prosljeđuje izlaz iz LUT-a ili ulaz logičkog bloka (d)
Npr. **iz dva LUT3 možemo dobiti LUT4**

![[~/×/8f127329e397f02a661499a7f60f2de5_MD5.jpeg|300]]

Objasnjenje: svaki novi input duplicira broj mogucih kombinacija, iz tog razloga je potrebno `spojiti` dvije look-up tablice kako bi mogli podrzavati dodatni ulaz(d).
- $2^3 = 8$, $2^4 = 16$
- $8 + 8 = 16$
Ako bismo htjeli podrzati 5 ulaza(e), broj stanja bi se povecao na **32** i morali bismo jos jednom duplicirati nas spoj. Ovo bi znacilo jos 2 LUT3, i jos 2 MUX-a.

Sve zajedno dobijemo:
$$2 * (2*LUT3 + 1MUX) + 1MUX = (4LUT3 + 2MUX) + 1MUX $$

## Objasniti konfigurabilne interkonekcije kod FPGA

 - `Programabilne` **veze između CLB blokova** u FPGA
 - Sastoje se od žica i programabilnih sklopki
- kljucni element koji omogucuje povezivanje logickih blokova(CLB)
	- konekcije su programabilne sto znaci da se interakcije medu blokovima mogu konfigurirati(kontrolirati)

## 29. Karakteristike VHDL-a

**Jezik za opisivanje sklopova vrlo visokih brzina**

- apstraktnost
- strukturalni i funkc. opis
- concurrencyy-,
- podrzava razlicite tipove podataka
,,,,,,,,,,,,,,,,,,,,,
 - Dizajniran na inicijativu US DOD 1980. godine
 - Opisivanje sklopovlja, sintez,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,a i simulacija
 - Standardiziran ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,od,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, strane IEEE
 - Opisivanje digita,-,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,lnioh sklopova za CPLD i Fpga
 - Linije VHDL koda izvode se paralelno, a posebni dijelovi sekvencijalno





[^1]: [[octal number system]]
[^2]: [[hexadecimal system]]
[^3]: [[K-mape]]
[^4]: [[Repetition code - Wikipedia]]