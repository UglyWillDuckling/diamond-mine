---
written: true
studied:
---
**dio** [[study Osnove Energetike]]

based on: [[EnergetikaInstalacije.pdf]]
___


# OSNOVE ENERGETIKE I BESPREKIDNA NAPAJANJA

## ELEKTROENERGETSKI SUSTAV

1. **Proizvodnja**
	- **Generator** je električni stroj poji pretvara **mehaničku** snagu na turbini u električnu **snagu**
	- **Transformator** podize napon s razine [[elektricni generator]] na razinu prijenosne mreze[^2] [^3]
2. **Prijenos**
	- putem 400kv, 220kv, 110kv
3. **Distribucija**
	- nazivni naponi: 0.4kv, 10kv, 20kv, 35 kv, 110kv [^1]
	- 

### Razine elektro-energetskog sustava

![[~/×/fa8ba4b5199a472e6fbb10f1f6e62a12_MD5.png]]

## **Dovod** električne energije do potrošača 

- niskonaponske mreže
- električne instalacije

**Zaštita** - važna u elektroprivrednom sustavu
Dosljedno provođenje suvremene tehničke regulative
- električna energija je bezopasna

![[~/×/d6fdacef6ddb0715e5ab71daa81d4215_MD5.png]]


1. `Električna instalacija` - skup međusobno spojene **niskonaponske**
električne opreme u promatranom prostoru ili prostoriji
2. `Izvor napajanja` - **transformatorska** stanica, **elektrana**, akumulatorska **baterija** ili **agregat**
3. `Mali napon`(**ELV**) - napon koji nazivno ne prelazi **50 V** `izmjenične`
struje ili **120 V** `istosmjerne` struje (bez valovitosti) i to bilo međusobno između vodiča ili između vodiča i zemlje, što obuhvaća `SELV, PELV i FELV` [^4]
4. `Niski napon` (**LV**) - napon koji nazivno ne prelazi **1000 V** izmjenično
ili **1500 V** istosmjerno
5. `Visoki napon` (**HV**) - napon koji nazivno prelazi *1000 V* izmjenično
ili *1500 V* istosmjerno.

### Pet pravila sigurnosti - zaštitne mjere koje sadrže:

1. **isključenje** i odvajanje od napona
2. **sprječavanje** ponovnog uključenja
3. **utvrđivanje** `beznaponskog` stanja
	- biti sigurni da nema napona
4. **uzemljavanje** i kratko spajanje
5. **ograđivanje** mjesta rada od dijelova pod naponom

### Niskonaponske mreže

strujni krugovi od izvora struje do sabirnica, odnosno priključka za osigurač na kućnom priključnom mjernom ormariću (**KPMO**) nazivnog napona do **1 kV**
- KPMO - kucni prikljucni mjerni ormaric

1. podrucne (nadzemne)
	![[~/×/f43e3ccb6292d5bf384530e6b4760397_MD5.png]]
	
2. gradske(kabelske)
	![[~/×/f7792bbbed0aacd927b570e72a82ccca_MD5.png]]

### Električna instalacija 

`strujni krugovi` poslije `sabirnica`, odnosno osigurača u KPMO.

# Djelovanje električne struje na ljudsko tijelo

Električni udar - je patofiziološki efekt koji nastaje prilikom prolaza električne struje kroz ljudsko ili životinjsko tijelo

Električna struja, prolazeći kroz ljudski organizam, djeluje na sljedeće načine:
	1. `TOPLINSKI` - pri čemu se **tijelo** **zagrijava**, naročito na mjestu ulaza i izlaza struje iz tijela
	2. `MEHANIČKI` - jer za vrijeme prolaza struje kroz tijelo dolazi do grčenja mišića, što može izazvati kidanje krvnih žila, živaca, pa čak i lomove kostiju.
	3. `KEMIJSKI` - jer električna struja, prolazeći kroz krv, **elektrolitički rastvara krvnu plazmu**
	4. `BIOLOŠKI` - što se očituje grčenjem mišićnog tkiva, paralizom disanja, grčevima krvotoka, treptanjem srčanih klijetki


Na temelju ispitivanja te analize ozljeda i smrtnih slučajeva, dobiveni su podaci o fiziološkom djelovanju električnih struja raznih jakosti na ljudski organizam:

- **12-15 mA** - ruke se teško odvajaju od elektroda, snažni bolovi
u prsima i rukama, bol se može trpjeti 5-10 minuta
- **20-25 mA** - paraliza ruku, veoma jaki bolovi, otežano disanje
- **50-80 mA** -  paraliza disanja, početak treperenja srčanih klijetki
- **80-100 mA** - paraliza disanja i rada srca
- Iznad **3.000** mA - paraliza disanja i rada srca pri djelovanju duljem od 0,1 sekunde, razaranje tkiva toplinskim djelovanjem struje

$$ 12...15, 20.....25, 50...80, 80..100, >3000 (ma) $$

Na **težinu** ozljeđivanja električnom strujom utječu
- jakost struje
- trajanje prolaska struje kroz organizam

![[~/×/fb1565b0c90912f1ffccff7f6743375c_MD5.png]]

Dijagram se odnosi na izmjeničnu struju frekvencije 15-100 Hz te za put struje od lijeve ruke prema objema nogama.
### **Označena područja**

1. područje gdje nema reakcije (prag osjetljivosti je **0,5** mA)
2. nema fiziološki opasnog djelovanja
3. povećanje krvnog tlaka, opasnost fibrilacije srca postoji, ali je vrlo mala
4. opasnost fibrilacije srca je vrlo vjerojatna i to:
	4.1. opasnost fibrilacije srca je ispod 5 % vjerojatnosti
	4.2. opasnost fibrilacije srca je ispod 20 % vjerojatnosti
	4.3. opasnost fibrilacije srca je iznad 50 % vjerojatnosti.

Unutar **područja 3** nalazi se konvencionalna krivulja (**L**) koja predstavlja preporučenu granicu opasnosti, uzimajući u obzir jakost struje i dozvoljeno vrijeme njezinog protjecanja kroz ljudsko tijelo.

Na osnovi toga može se zaključiti da je 30 mA najveća struja koja neće ugroziti čovjeka bez obzira na vrijeme njezinog protjecanja. Struja od 10 mA naziva se otpuštajuća struja jer se kod te jakosti čovjek još može snagom svojim mišića osloboditi iz strujnog kruga (za 50 Hz).

> [!warning] 30ma max
> struja koja nece ugroziti covjeka

Ukupna težina ozljede ovisi o:
❑ jakosti struje kroz tijelo čovjeka
❑ vremenu protjecanja
❑ putu kojim struja teče kroz tijelo čovjeka
❑ frekvenciji
❑ osobnim svojstvima čovjeka

Može se reći da su najopasnije struje frekvencije **50-60 Hz**.
Struje `vrlo visokih frekvencija` su praktički **bezopasne**.

## SPAŠAVANJE OSOBE KOJA JE POD STRUJNIM UDAROM

- Ako je unesrećeni još uvijek u strujnom krugu, treba ga što prije osloboditi.
- Spasilac mora paziti i na vlastitu sigurnost.

- Ovisno o situaciji **strujni krug se prekida** izvlačenjem utikača iz utičnice, vađenjem osigurača ili odvajanjem električnog vodiča od tijela pomoću predmeta od izolirajućeg materijala (plastika, suho drvo, debeli sloj suhe tkanine ili papira).

- Dobro je koristiti **gumene rukavice i čizme.** 
- Eventualni `požar` na mjestu nezgode **ne smije se gasiti vodom.**

## **Impedancija** ljudskog tijela i naponi dodira

Napon dodira je napon između istodobno dostupnih vodljivih dijelova, odnosno napon koji čovjek može premostiti svojim tijelom.
Odnos između dozvoljene struje kroz ljudsko tijelo i dozvoljenog napona dodira nije linearan.
Tome je uzrok, prije svega, promjenljiva impedancija ljudskog tijela.

![[~/×/e14a45aa03bfd14598feb0fb3409272a_MD5.png]]
> shema otpora ljudskog tijela

Impedancija ljudskog tijela ovisi o:
- **čistoći i vlažnosti** kože
- **debljini** kože
- **naponu** koji djeluje na ljudsko tijelo
- **duljini** trajanja prolaza struje kroz tijelo
- **jakosti** struje
- **kontaktnom** **pritisku** i površini dodira

📔vrlo veliki utjecaj na impedanciju tijela imaju **vanjski utjecaji**, prije svega **vlaga** i **otpor** **tla**.

### **vanjski** uvjeti

Vanjski uvjeti mogu se svrstati u **3** skupine:

1. **Suhi** i vlažni prostori (normalni uvjeti) - stambeni, poslovni, industrijski i slični prostori.
2. **Mokri** prostori (loši uvjeti) - instalacija na otvorenom, gradilišta, kampovi, poljoprivredni objekti i sl.
3. **kod** **potapanja** (naročito `loši` uvjeti) - npr. bazeni

Dozvoljeni napon dodira (UL) je najveća vrijednost napona dodira koja se može izdržati neograničeno vrijeme bez štetnih posljedica.
Očekivani napon dodira (UC) je najviši napon dodira koji se očekuje u slučaju kvara zanemarive impedancije.

U tom smislu može se na osnovi tablice i dijagrama zaključiti i upamtiti:
	❑ u normalnim uvjetima je granica opasnog dodirnog
	napona **50V** ∼(120V -)
	❑ u lošim uvjetima je granica opasnog dodirnog napona
	**25 V** ∼(60 V -).

![[~/×/fe601a5ffd293824cfc982c79bfd220a_MD5.png]]
> dijagram napona dodira, `L1 i L2` - normalni i losi uvjeti
> 	`maksimumi` su **`25 i 50V`**

#  GROMOBRANI I GROMOBRANSKE INSTALACIJE

![[~/×/9eb6532687aa3b4590aed642e074a461_MD5.png]]

## Dijelovi zastite

**Zemlja** - izraz pod kojim razumijevamo, primjerice, spoj sa zemljom.
Tlo - izraz za vrstu tla kao tvar.

**Referentna zemlja** - područje zemljišta, a naročito njegova površina koja je od uzemljivača toliko udaljena da između bilo kojih točaka toga područja ne postoji potencijalne razlike.

**Uzemljivači** su vodljivi predmeti položeni u zemlju koji su sa zemljom u vodljivoj vezi (cijev, traka, ploča, itd.).

**Zemljovod** (`dozemni` vod ) - `vod` koji **spaja** uzemljeni dio postrojenja s uzemljivačem bez obzira je li položen nad zemljom ili izoliran u tlu

**Postrojenje za uzemljenje** je skup međusobno vodljivo vezanih uzemljivača s njihovim dozemnim vodovima i sabirnim dozemnim vodovima.

**Uzemljiti** znači povezati neku točku pogonskog strujnog kruga ili vodljivog dijela koji ne pripada pogonskom krugu sa zemljom posredstvom uređaja za uzemljenje.

**Specifični** otpor tla A - električni otpor kocke tla duljine brida 1 m između dvije suprotne stranice (m 2/m = m).

**Otpor** **rasprostiranja** uzemljivača R´A - otpor tla između uzemljivača i referentne zemlje. R´ A je praktički djelatan otpor.

Otpor rasprostiranja može biti stacionarni, udarni i valni. Udarni i valni otpor interesantni su kod prenaponske zaštite.

**Otpor uzemljenja** – zbroj otpora rasprostiranja uzemljivača i otpora zemljovoda.

**Ukupni otpor uzemljenja** - otpor uzemljenja koji se može izmjeriti na jednom mjestu uzimajući u obzir zajedničko djelovanje svih uzemljenja.

**Pogonsko uzemljenje** - uzemljenje aktivnih dijelova i uzemljenja nulvodiča.

**Zaštitno uzemljenje** - neposredan spoj kućišta s uzemljivačima ili uzemljenim dijelovima, kako bi se postiglo iskapčanje prilikom kvara na izolaciji posredstvom prekostrujnih zaštitnih organa.

## Dijelovi **gromobranske** instalacije:

• **glavni prihvatni vod**- nalazi se na krovu zgrade, odnosno na sljemenu i zubatima i služi za prihvaćanje direktnog udara munje
• **odvodi** - spojevi između glavnog prihvatnog voda i uzemljivača koji idu rubom krova i okomito se spuštaju niz zid
• **pomoćni** vodovi- povezuju sve metalne dijelove na krovu i duže dijelove zgrade s glavnim prihvatnim vodom ili odvodima
• **uzemljivač** - 
	postavlja se oko zgrade na dubini **oko 80 cm** i **razmaku od zgrade 2 m** koji povezuju cijevi za uzemljenje 
	- `Trakasti` – metalne trake u zemlji, traka najčešće od pocinčanog čelika, a rjeđe i od bakra
	- `Štapni` - metalna šipka ili cijev okomito ukopana u zemlju
	- `Temeljni` - metalni vodiči postavljeni u temelje objekta i preko velike površine betona dolaze u kontakt sa okolnom zemljom
• **mjerni spoj -** spoj za odvajanje instalacije na krovu od uzemljivača zbog određivanja otpora uzemljenja i provjere instalacije

![[~/×/2144f14f3da1994048e9f869315788d0_MD5.png]]


`Izjednačenje` potencijala je **odstranjivanje razlike potencijala.** [^5]

$$ R`A = \rho_{A}*k $$

Gdje je:
R´ - otpor rasprostiranja
*ro*A - specifični otpor tla u (om)m
k - faktor ovisan o veličini i obliku uzemljivača.

Za `cijev`:
$$ k = \frac{1}{2\pi l} * \ln\frac{{4}l}{d} $$

Za `traku`
$$ k = \frac{1}{2\pi l} * \ln\frac{{2}l^2}{hd}$$

![[~/×/45e092901d2dfa553d2bb71295201712_MD5.png]]


## **Kvaliteta uzemljivača** (što niža otpornost) 

ovisi o **2** **čimbenika**
- načinu ugradnje
- vrsti tla

## Načini **ugradnje** uzemljivača

### 1. Ukopani prstenasti uzemljivač

Elektrodu treba ukopati oko oboda iskopa napravljenog za temelje.
Goli vodič mora biti u bliskom kontaktu s tlom (ne u šljunku ili
podlozi za beton).
Uzemljivač s instalacijom treba spojiti pomoću najmanje 4 (široko
razmaknuta) okomita vodiča. Sve armaturne šipke u betonskim
elementima trebaju biti spojene na uzemljivač.
Uzemljivač koji se polaže u iskop za temelje, mora biti u zemlji
najmanje 50 cm ispod tvrde jezgre ili podloge za betonski temelj. Ni
uzemljivač ni vertikalni vodiči ne smiju biti u kontaktu s temeljnim
betonom.
Vertikalne ploče, šipke za uzemljenje
Za postojeće zgrade, uzemljivač treba biti ukopan oko vanjskog zida
do dubine od najmanje 1 metar. Svi okomiti spojevi od uzemljivača
do nadzemne razine trebaju biti izolirani za nazivni NN napon (600-
1000 V).
Vodiči mogu biti:
•••Od bakra: goli kabel (≥ 25 mm2) ili višestruki (≥ 25 mm2 i ≥
2 mm debljine)
Od Aluminija s olovnim omotačem: kabel (≥ 35 mm2)
Kabel od pocinčanog čelika: goli kabel (≥ 95 mm2) ili
višežilni (≥ 100 mm2 i ≥ 3 mm debljine).
Približni otpor elektrode R u ohmima ():
Gdje je:
L - Duljina vodiča u metrima (m)
 - otpornost tla u ohm-metrima (m)

### 2. **Štapni** uzemljivači (šipke)

Štapni uzemljivači koriste se za postojeće zgrade te za
poboljšanje (tj. smanjenje otpora) postojećih uzemljivača.
Štapovi mogu biti:
• Bakar ili čelik obložen bakrom, dužine 1 ili 2 metra s
navojima i utičnicama kako bi se, ako je potrebno, dosegnule
znatne dubine (na primjer, razina vode u područjima visoke
•otpornosti tla)
Pocinčana čelična cijev promjera ≥ 25 mm ili šipka promjera
≥ 15 mm, duljine ≥ 2 metra.

Kada se ugrađuje više od jedne šipke, razmak između njih bi
trebao biti veći od dubine na koju se šipke zabijaju, i to 2 do 3
puta.
Ukupni otpor (u homogenom tlu) se dobije tako da se otpor
jedne šipke podijeli s brojem postojećih šipki.
Približni otpor R, uz uvjet da je razmak između šipki > 4 L, je:
Gdje je:
L – Duljina vodiča u metrima (m)
 - otpornost tla u ohm-metrima
(m)
n – broj ugrađenih šipki

### 3. Vertikalne ploče

Pravokutne ploče, čija svaka strana mora biti ≥ 0,5 m, služe kao
uzemljivači ukopani okomito, tako da je središte ploče
najmanje 1 metar ispod površine tla.
Ploče mogu biti:
• Od bakra debljine 2 mm
• Od pocinčanog čelika debljine 3 mm
Otpor R u omima () približno iznosi:
0,8 𝜌
Gdje je:
 𝑅=
L – opseg ploče u metrima (m)
 𝐿
 - otpornost tla u ohm-metrima
(m)

$$ R = 0.8 \rho / L$$

### **tablica** vrsta tla

| **Vrsta tla** (Type of Soil)                                           | **Srednja vrijednost otpornosti (Ωm)** (Average Resistance Value) |
| ---------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Močvarno tlo, močvare (Marshy soil, marshes)                           | 1 - 30                                                            |
| Mulj aluvij (Mud alluvium)                                             | 20 - 100                                                          |
| Humus, plijesan lišća (Humus, leaf mold)                               | 10 - 150                                                          |
| Treset, travnjak (Peat, meadow)                                        | 5 - 100                                                           |
| Meka glina (Soft clay)                                                 | 50                                                                |
| Lapor i tvrda glina (Loam and hard clay)                               | 100 - 200                                                         |
| Jurski lapor (Jurassic loam)                                           | 30 - 40                                                           |
| Glineni pijesak (Clayey sand)                                          | 50 - 500                                                          |
| Silikatni pijesak (Silicate sand)                                      | 200 - 300                                                         |
| Kameno tlo (Stony soil)                                                | **1500 - 3000**                                                   |
| Travom prekriveno kamenito podzemlje (Grass-covered stony underground) | 300 - 500                                                         |
| Kredasto tlo (Chalky soil)                                             | 100 - 300                                                         |
| Vapnenac (Limestone)                                                   | **1000 - 5000**                                                   |
| Ispucani vapnenac (Weathered limestone)                                | 500 - 1000                                                        |
| Škriljevac, škriljac (Schist, schistose)                               | 50 - 300                                                          |
| Liskun škriljac (Crushed schist)                                       | 800                                                               |
| Granit i pješčenjak (Granite and sandstone)                            | **1500 - 10000**                                                  |
| Modificirani granit i pješčenjak (Modified granite and sandstone)      | 100 - 600                                                         |

# TROŠILA I POTROŠAČKA POSTROJENJA

**Trošilo** je pogonsko sredstvo koje pretvara električnu energiju u drugu `neelektričnu` energiju.

Podjela trošila niskog napona prema električnim karakteristikama:
Prema nazivnom naponu trošila
Prema vrsti struje
 - izmjenična
- istosmjerna
▪ Prema broju faza - jednofazna
- trofazna
▪ Prema frekvenciji
▪ Prema struji pokretanja
▪ Prema priključnoj snazi
- velike snage (preko 1000 W)
- srednje snage (100 - 1000 W)
- male snage (ispod 100 W)

**Podjela** trošila u potrošačkim postrojenjima:

a) Prema vrsti energije u koju se pretvara električna energija:
- rasvjetna
- termička
- motorna
- ostala.
b) Prema potrošačkim postrojenjima u kojem se nalazi trošilo:
- kućanstvo
- industrija
- javna rasvjeta
- poljoprivreda
c) Prema pokretnosti:
- stalna
- pokretna
Podjela trošila u potrošačkim postrojenjima (2):

d) Vrste pogona:
- trajan pogon – pogon traje tako dugo dok se ne dostigne
najviša dopuštena temperatura
- isprekidani pogon – uklapanje i isklapanje je u pauzama
koje nisu dovoljne da se trošilo ohladi do temperature okoline
- kratkotrajan pogon – pogonsko vrijeme je tako kratko,
a pauza tako duga da se nakon svakog ciklusa trošilo
ohladi na temperaturu okoline.

##  Potrošačka **postrojenja niskog napona**

**Potrošač** - fizička ili pravna osoba, odnosno korisnik električne energije.

**Potrošačko postrojenje** - `skup` pogonskih sredstava u vlasništvu
ili nadležnosti jednog potrošača (primjerice, `instalacija u stanu`).

![[~/×/a1975698898deb833802a54793f1c0c6_MD5.png]]

**Karakteristike** NN potrošačkog postrojenja:
- Nazivni priključni napon
- Broj faza
- Najveća potrebna snaga ili vršno opterećenje
- Instalirana snaga
- Potrebna električna energija
- Trajanje upotrebe instalirane snage ili vršnog opterećenja
- Vrsta pogona, sezonske oscilacije, krivulja opterećenja
- Osjetljivost na prekid opskrbe električnom energijom
- Perspektivne promjene vršnog opterećenja,
potrebne energije i ostalih karakteristika.


Pod kvalitetom električne energije podrazumijeva se ([[EN50160]]):
▪ Pouzdanost dobave;
▪ Dozvoljena odstupanja frekvencije;
▪ Dozvoljena odstupanja od nazivnog napona;
▪ Dozvoljena odstupanja od sinusoidalnog napona;
▪ Dozvoljena odstupanja od simetrije tri fazna napona.


Prema Europskom vijeću za regulaciju električne energije ([[CEER]])
temeljna obilježja kontinuirane isporuke električne energije su:

Tip prekida: planski ili neplanski;

Trajanje svakog prekida: kratkotrajni ili dugi.

(Prema Europskom standardu EN 50160 koji definira da su kratkotrajni prekidi svi oni koji ne traju dulje od **3 minute**, a svi ostali su dugotrajni);

Naponska razina za vrijeme zastoja: nizak/srednji/visoki napon;

Pokazatelj pouzdanosti: broj ili trajanje zastoja.

## **Dijagram** opterećenja

Konzumna područja zahtijevaju električnu snagu koja se mijenja
tijekom dana, tjedna, mjeseca, sezone i godine.
Iskorištenost instaliranih postrojenja pokazuje faktor opterećenja m.

$$ m = \frac{W_{d}}{24P_{v}}$$
$W_d$ - ukupno potrošena električna energija tijekom dana
 $P_{}v$ - vršno opterećenje

![[~/×/023d27864dd54226b08e9e1b5a88ba38_MD5.png]] 
> **dnevni** dijagram opterecenja


### **Faktor** potražnje i istodobnosti

Faktor potražnje fp određuje se za jedno potrošačko postrojenje ili grupu trošila.
Slika prikazuje principijelnu spojnu shemu električne instalacije stana.

![[~/×/4de01a855ef1405c7f360ea22073ac94_MD5.png]]

Sva trošila u domaćinstvu nisu nikada istovremenose može pisati:

PV < Pi

Odnosno uvođenjem faktora potražnje:
$$ f_{p} = \frac{P_{v}}{P_{i}} $$
`Pi` - instalirana snaga odnosno **suma nazivnih snaga** svih pojedinih trošila potrošačkog postrojenja
`PV` - **vršno opterećenje**, odnosno najveća snaga koja se pojavljuje u određenom vremenskom razdoblju, npr. tijekom godine na mjestu napajanja potrošačkog postrojenja i prema tomu mora biti stalno na raspolaganju.

==Vrijednosti faktora potražnje==

| Namjena                    | Koeficijent |
| -------------------------- | ----------- |
| Škole, radionice, trgovine | 1.0         |
| Mali stanovi               | 0.9         |
| Veći stanovi               | 0.8         |
| Veliki stanovi             | 0.7         |
| Uredi                      | 0.6         |
| Motorni pogoni             | 0.6-1.0     |

### Faktor **istodobnosti**

U konzumnom području koje se sastoji od grupe potrošačkih
postrojenja (stanova) algebarska suma pojedinih vršnih opterećenja
potrošačkih postrojenja PV1, PV2, P Vi veća je od vršnog opterećenja
grupe potrošačkih postrojenja PVn zato što svako domaćinstvo
živi svojim ritmom.
$$ f_{i} = \frac{P_{vn}}{P_{v_{1}} + P_{v_{2}} + P_{v_{3}} +\dots+P_{vi}}$$

### Modeliranje **potražnje** potrošačkog postrojenja

Ograničenje snage **je zapravo maksimiranje vršnog opterećenja**. %% stavlja se gornja granica %%

Metode za provođenje ograničenja snage provode se uporabom

- Rastalnih **osigurača**
- Instalacijskih **automatskih prekidača**
- **Tarifnih prekidača**
- **Tarifnih prekidača i strujne zaštitne sklopke** u obliku jednog aparata
- **programiranjem**

# VODOVI I MREŽE NISKOG NAPONA

Tehničkim propisima određeni standardni presjeci i najmanji dopušteni presjeci - osigurava se osnovna kvaliteta voda.

Standardni presjeci vodiča i njihov otpor pri istosmjernoj struji u $33\ohm$/km u zavisnosti o temperaturi.

Here is the table you created in Markdown format:

| Standardni presjek vodiča (mm²) | Električni otpor vodiča u (Ω/km) |          |          |
| ------------------------------- | -------------------------------- | -------- | -------- |
|                                 | **20°C**                         | **40°C** | **60°C** |
| 1.5                             | 11.90                            | 12.81    | 13.72    |
| 2.5                             | 7.14                             | 7.69     | 8.23     |
| 4                               | 4.46                             | 4.80     | 5.14     |
| 6                               | 2.98                             | 3.20     | 3.43     |
| 10                              | 1.786                            | 1.92     | 2.06     |
| 16                              | 1.116                            | 1.201    | 1.286    |

1. Grupa 1. Vodovi položeni u cijevi, uključivši i zaštitne vodiče, npr. P, P/F…
2. Grupa 2. Instalacijski vodovi koji nisu položeni u cijevima npr. PP, PP/R…
3. Grupa 3. Jednožilni vodovi položeni slobodno u zraku na međusobnom razmaku jednakom najmanje njihovom promjeru. Jednožilni spojni vodovi u razvodnim ormarima.

## Pad napona i gubitak snage

Dopušteni pad napona - **3%** od uvoda do posljednjeg trošila.
Za **jednofaznu** izmjeničnu struju:
$$ u = \frac{{200 l P}}{kAU^2} \%$$
Za **trofaznu** izmjeničnu struju:
$$ u = \frac{{100*l*P}}{k*A*U^2}\%$$

**Kritična duljina vođenja** nakon koje će vod biti opterećen ispod strujne opterećenosti:
$$ l_{kr} = \frac{{uAkU^2}}{100P}\%$$

**Gubitak snage** - prvenstveno ekonomska (gospodarska) veličina
	Pokazuje koliki se dio proizvedene električne energije gubi u vodičima

Gubitak snage u vodičima za **jednofaznu** izmjeničnu struju:
$$ p = \frac{{200Pl}}{kAU^2*\cos^2\phi}\%$$ κ – vodljivost s obzirom na vrstu materijala vodiča



Gubitak snage u vodičima za **trofaznu** izmjeničnu struju:
$$ p = \frac{{100Pl}}{kAU^2*\cos^2\phi}\%$$



[^1]: [[volt unit]]
[^2]: [[electric generator]]
[^3]: [[electric transformer]]
[^4]: [[Extra-low voltage]]
[^5]: [[List of LaTeX symbols]]