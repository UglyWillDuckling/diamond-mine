
1. Sql
Structured query language. Jezik pomocu kojeg upravljamo relacijskim bazama podataka.

2. **Entitet**
je neki **realni ili konceptualni element** sustava, to je neka posebnost što u poslovnome sustavu postoji i jasno se razlikuje od drugih entiteta. Na primjer: zaposlenici, narudžbe, organizacijske jedinice i dr.

Entitet se moze **jednoznacno** identificirati.
Svaki primjerak entiteta je jedinstven.

- stvarni ili konceptualni
- posebnost sustava
- jasno se razlikue od drugih entiteta

4. Sto je **primarni kljuc**

**Jedan ili vise atributa entiteta cija vrijednost ==jednoznacno== odreduje primjerak entiteta.**

5. Sto je **normalizacija**

Relacijska sheme dobivena iz ER-sheme može sadržavati nedorečenosti koje treba ukloniti prije implementacija. Uklanjanje tih loših strana polazne sheme zove se normalizacija.

- **uklanjanje** **nedorecenosti** iz polazne ER-sheme

6. **Fizicki sloj**

Fizički nivo odnosi se na fizički prikaz i raspored podataka na jedinicama vanjske memorije. To je aspekt kojeg vide samo sistemski programeri. Sam fizički nivo može se dalje podijeliti na više podnivoa apstrakcije, od sasvim konkretnih staza i cilindara na disku, do već donekle apstraktnih pojmova datoteke i zapisa kakve susrećemo u klasičnim programskim jezicima. Raspored pohranjivanja opisuje kako se elementi logičke definicije baze preslikavaju na fizičke uređaje.


7. Baza podataka

Baza podataka je skup međusobno povezanih podataka, pohranjenih u vanjskoj memoriji računala(trajno). **Podaci su istovremeno dostupni raznim korisnicima i aplikacijskim programima.** Ubacivanje, promjena, brisanje i čitanje podataka obavlja se posredstvom posebnog softvera, takozvanog **sustava za upravljanje bazom podataka** (engleski [[Data Base Management System]] – DBMS). Korisnici i aplikacije pritom ne moraju poznavati detalje fizičkog prikaza podataka, već se referenciraju na neku idealiziranu logičku strukturu baze.

- skup povezanih podataka
- trajno pohranjeni
- dostupno vise korisnika i aplikacija
- editiranje, dodavanje, brisanje, citanje
- interakcija ostvareno preko DBMS sustava


8. Relacijska algebra

==**je jezik koji omogućava definiranje novih relacija iz postojećih.**==

Nova relacija sadrži podatke koji su bili u bazi u **trenutku izvršenja operacije.**

[[Relational Algebra]]

9. Relacijski model(**rdbms**)

Baza podataka **se sastoji od skupa pravokutnih tablica(relacija).** Svaka tablica je jedinstvena, nema ponavljanja.

10. Funkcionalnost veza?
- `1 : 1` - **jedan naprama jedan**
	E1 je povezan s najvise jednim primjerkom iz E2. Isto vrijedi i u suprotnom smjeru
- `N : 1` - **Mnogo naprama jedan**
	E1 poveza s najvise jednim primjerkom E2. 
	Istovremeno, jedan primjerak od E2 može biti povezan s više primjeraka od E1.
- `1 : N`
	Jedan primjerak od E1 može biti povezan s više primjeraka od E2. 
	Istovremeno, jedan primjerak od E2 može biti povezan najviše s jednim primjerkom od E1.
- `N : N`
	Jedan primjerak od E1 može biti povezan s više primjeraka od E2. Također, jedan primjerak od E2 može biti povezan s više primjeraka od E1.

8. Sto su veze

**Veza je međusobni odnos entiteta.**
Koncept koji predstavlja  **interakciju** među **entitetima** u sustavu, odnosno predstavlja znanje o njihovoj povezanosti.

Na primjer: brak je veza između muškaraca i žena.

12. **Vrste apstrakcije**
--

13. Mrezni model

Mrežne baze podataka nadovezuju se na hijerarhijski model pohrane podataka sa strukturom nalik **grafu**.
Dok u hijerarhijskom modelu svaki slog ima jedan „roditeljski" slog i neograničeno „djece", mrežni model omogućava svakom zapisu da ima višestruke roditelje i djecu, kreirajući mrežastu strukturu. 

 - struktura nalik grafu
 - slogovi imaju visestruke roditelje i djecu
 - mrezasta struktura

14. Hijearhijski model
 
 U hijerarhijskom modelu podaci su smješteni u **seriju slogova (zapisa).** (record)
 Za uspostavu veza između slogova, hijerarhijski model uspostavlja **relaciju roditelj nasljednik.** 
 Ovo je `1:N` odnos između slogova odnosno jedno dijete može imati samo jednog roditelja, dok roditelj može imati više djece.
- serija slogova
- veza preko relacije roditelj nasljednik
- 1:N

15. Jezik za opis podataka(DDL)

**DDL**(Data **Definition** Language)

Služi za zapisivanje **sheme** ili pogleda.
Tim se jezikom **definiraju podaci i veze među podacima** na logičkoj razini , odnosno, struktura baze podataka.

16. Arhitektura baze podataka

- **Konceptualno** oblikovanje modela 
		**konceptualna** **shema** cijele baze: entiteti, atributi i veze
- **Logičko** oblikovanje modela 
		**logicka** **shema** sastavljena od relacija(tablica). Ukljucuje i normalizaciju
- **Fizicko** oblikovanje
		opis fizicke grade -  nize SQL **naredbi** kojima se relacije realiziraju kao tablice

16. Sto znaci organizirati podatke?

17. Nacini pruzanja usluga racunalskim mrezama?
- **Centralizirana** obrada - HOST TERMINAL - jedno racunalo radi sve
- Model **ravnopravnih** članova – P2P (peer-to-peer) - svaki cvor nudi i koristi usluge drugima
- CLIENT - SERVER okruženje - mrezni posluzitelj nudi usluge klijentima

16. Involuirane veze?
**Involuirana veza** povezuje jedan tip entiteta s tim istim tipom. 

Njezino stanje opisuje se kao skup **uređenih parova primjeraka entiteta istog tipa koji su povezani**. 
Funkcionalnost takve veze može biti **1:1, 1:N, odnosno N:N**.

20. Sto predstavlja **raslojavanje** aplikacije?

**Raslojavanje aplikacije predstavlja odvajanje njenih dijelova prema funkcionalnosti.**

Promjene u funkcionalnosti objekata jednog sloja neće imati posljedice na objekte u ostalim slojevima, a imati će sporadične efekte čak i za objekte u istom sloju. 

Jedno od pravila dobrog dizajna aplikacija je da se u između objekata (klasa) **u istom sloju postigne visoka kohezija (high cohesion), a slaba sprega između slojeva (low coupling)**.

21. Modeli DB
- **Plošni** 
- **Hijerarhijski** 
- **Mrežni** 
- **Relacijski**  – RDBMS
- **Objektno** orijentirani (OO)
- **NoSQL** 

21. Troslojni model

- **Prezentacijski** sloj (presentation)
- Sloj **poslovne logike** (buisness logic)
- Sloj **podataka** (data)

21. jezici rada s bazama

22. DDL - sluzi projektantima za zapisivanje sema(`schema`)
23. DML - programeri za uspostavljanje veze s bazom
24. QL - query language - sluzi korisnicima za neposredno koristenje DB

___
### sql

structured query language - programski jezik pomocu kojeg se upravlja relacijskim bazama podataka.

dozvoljava da postavljamo upite prema bazi, dohvacamo podatke, dodajemo nove podatke, uredujemo i brisemo postojece, izvrsavamo naprednu obradu podataka koja ukljucuje sortiranje, filtriranje, kombiniranje i pretragu podataka iz vise tablica.

Pomocu sql-a mozemo napraviti i nove podatkovne strukture tako sto napravimo nove tablice.
SQL takoder ima podrsku za varijable i petlje tako da je u njemu moguce i napraviti naprednu logiku za obradu podataka i istu tu logiku trajno spremiti u obliku koda odnosno sql skripti.


### vrste apstrakcije

Apstrakcija (engl. abstraction) je kontrolirano uključivanje detalja u cjelinu, pri čemu u mislima istovremeno poima ideja detalja cjeline i veze među njima. 

**tri** procedure apstrakcije

1. Klasifikacija(tipizacija) - grupiranje entiteta u klase, razrede, odnosno tipove ovisno o zajednickom obiljezjima
2. Generalizacija - tipovi entiteta nize razine se uopcavaju s tipom entiteta.
3. Agregacija - formiranje novog pojma na osnovi odnosa postojecih pojmova

#### klasifikacija (TIPIZACIJA)

**grupiranje** **`entiteta`** u klase, razrede, odnosno **tipove** ovisno o zajednickom obiljezjima

- entitet
- grupiranje
- klasa
- tipovi

#### generalizacija

apstrakcija u kojoj se **skup ==sličnih tipova== objekata predstavlja općim generičkim tipom**, odnosno `nadtipom`.

- tipovi objekata
- predstavlja generickim tipom(`nadtip`) - novi tip
- izvedeni tip

#### **AGREGACIJA**

apstrakcija u kojoj se **skup objekata i njihovih međusobnih veza tretira kao novi, jedinstveni, agregirani tip.**

- skup objekata i veza
- novi tip
- agregirani tip

![[apstrakcija.png]]

