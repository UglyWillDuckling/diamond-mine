
### informatika 

Opća enciklopedija (1966) – „Informatika je znanstvena disciplina koja proučava strukturu i svojstva (ali ne i sadržaj) INFORMACIJA, te zakonitosti informatičke djelatnosti, njezinu teoriju, povijest, metodologiju, organizaciju i učinkovitost.“

"The study of the structure, behavior, and interactions of natural and engineered computational systems.„

### povratna veza

predstavlja kružni postupak koji nastaje ako se u neki sustav vraća u njega već dobiveni rezultati kako bi se vrijednost povećala ili smanjila. Vraćanje izlaznog rezultata na ulaz može se ponavljati sve dok se ne postigne željeni učinak.

### racunalstvo

bavi se strukturiranjem informacija i algoritamskim procesima za obradu informacija i računalnim sklopovljem.

### Logička organizacija podataka 

podrazumijeva njihovo smještanje u direktorije (foldere, fascikle). Folder je osnovna jedinica organizacije podataka na disku. U folder se smještaju datoteke i drugi folderi (podfolderi). Adresa datoteke ili foldera naziva se putanja (path) do datoteke.

## baze podataka

Baza podataka je skup međusobno povezanih podataka, pohranjenih u vanjskoj memoriji računala. **Podaci su istovremeno dostupni raznim korisnicima i aplikacijskim programima.** Ubacivanje, promjena, brisanje i čitanje podataka obavlja se posredstvom posebnog softvera, takozvanog sustava za upravljanje bazom podataka (engleski [[Data Base Management System]] – DBMS). Korisnici i aplikacije pritom ne moraju poznavati detalje fizičkog prikaza podataka, već se referenciraju na neku idealiziranu logičku strukturu baze.

Baza podataka je skup međusobno povezanih podataka, pohranjenih zajedno bez štetne ili nepotrebne zalihosti, koje koriste različiti aplikacije.

Baze podataka svakodnevno olakšavaju pristup određenim podacima odnosno informacijama. 

Brz pristup podacima omogućuje njihovu lakšu analizu i proučavanje. Prvi puta se počinju primjenjivati 60-ih godina prošlog stoljeća, a prvi modeli poput mrežnih i hijerarhijskih baza bili su iznimno neprilagodljivi korisniku i teški za rukovanje. S toga su dvadeset godina kasnije razvijene relacijske i objektno-orijentirane baze podataka kojima je bilo lakše upravljati i čija je popularnost i rasprostranjenost vidljiva i danas.
Naglim razvitkom Interneta mijenja se i potreba pohranjivanja podataka pa su s toga danas iznimno popularne **NoSQL** baze podataka čija je brzina obrade podataka nemjerljiva s prethodno spomenutima. Također, većina aktivnosti danas se preselila na online platforme pa se sukladno tome naveliko koriste i baze podataka u oblacima. (Vaishnavi, 2019.) 


### dbms

> str. 190
> Sustav za upravljanje bazom (SUBP)

Programska podrška koja izvodi sve operacije nad bazom podataka (kreiranje strukture, brisanje, mijenjanje i dohvaćanje podataka, . . . ) 
Brine se o ﬁzičkom smještaju podataka.
Sustav za upravljanje bazama podataka je programski sustav koji omogućava upravljanje podacima u bazi podataka. DBMS se temelji na odabranom modelu podataka.

Primjeri operacija nad bazom podataka su kreiranje strukture, brisanje, mijenjanje i dohvaćanje podataka, administracija i dr.

- zaštita objekata baza podataka od neovlaštenog korištenja,
- očuvanje integriteta podataka u bazi podataka,
-  omogućavanje obnove podataka različitim načinima u slučaju gubitka podataka
- omogućavanje konkurentnosti, tj. omogućavanje višekorisničkog pristupa istim podacima u bazi podataka istovremeno,
- omogućavanje opisa podataka metapodacima,
- identificiranje optimalne strukture za najprikladnije upravljanje podacima
-  opis i rukovanje podacima.


## relacijski model

U srcu relacijskog modela nalazi se koncept tablice (koja se naziva relacija) u kojoj su smješteni svi podaci. Svaka tablica je načinjena od slogova (redova u tablici), a svaki slog ima svoja, polja (atribute).


### NoSQL baze podataka 

NoSQL baze podataka su novije na tržištu te se koriste najkraće od svih, no s obzirom na svoje mogućnosti, obećavaju možda i najviše. 

NoSQL Baza podataka je nerelacijski sustav upravljanja podacima koji ne zahtijeva fiksnu shemu. Izbjegava spojeve i lako se skalira. Glavna svrha korištenja NoSQL baze podataka je za distribuirane pohrane podataka s ogromnim potrebama za pohranu podataka. NoSQL se koristi za velike podatke i web aplikacije u stvarnom vremenu. Na primjer, tvrtke poput Twittera, Facebooka i Googlea prikupljaju terabajte korisničkih podataka svaki dan.

NoSQL (Not Only SQL) u doslovnom prijevodu znači „ne samo SQL’’ te označava da se baze podataka i upiti u istima mogu postavljati i na neke drugačije načine od onih definiranih u tradicionalnim relacijskim bazama koje su primarno orijentirane na korištenje SQL jezika. 

U ovakve baze mogu se pohranjivati i podaci koji nisu konzistentni, točnije čija će se struktura možda promijeniti s vremenom. Takvi podaci vežu se uz društvene mreže i web objave. Uz sve prednosti, NoSQL baze još uvijek nisu u potpunosti zamijenile tradicionalne vrste baza te će još neko vrijeme na tržištu prevladavati druge baze, ponajviše relacijske. („What are the Pros and Cons of NoSQL“, 2021.)

NoSQL ili „ne samo SQL” je klasa baza podataka dizajnirana za fleksibilnije upravljanje podacima od relacijskih baza podataka. 
NoSQL baze podataka dolaze u mnogo različitih oblika i veličina, ali sve imaju jednu zajedničku stvar - ne koriste tradicionalnu strukturu relacijskih baza podataka temeljenu na tablici. Umjesto toga, 
NoSQL baze podataka mogu koristiti različite strukture podataka, uključujući orijentirane na dokumente, orijentirane na stupce i parove ključ-vrijednost. 
Ova ih fleksibilnost čini prikladnima za upravljanje velikim količinama nestrukturiranih podataka


### distribuirane baze
Integritet podataka	Visoke performanse zbog podjele radnog opterećenja.

Sigurnost	Visoka dostupnost zbog spremnosti dostupnih čvorova za obavljanje posla.
Jednostavan pristup svim Informacijama	Neovisni čvorovi i bolja kontrola nad resursima
Podaci su lako prenosivi	
Pretraživanje podataka zahtijeva vrijeme	Prilično je velik i složen sustav pa ga je teško koristiti i održavati.
U slučaju kvara centraliziranog poslužitelja, cijela baza podataka bit će izgubljena.	Teško je pružiti sigurnost
Ako više korisnika pokuša
pristupiti podacima u isto
vrijeme, mogući su problemi.	Povećanje zahtjeva za pohranom i infrastrukturom
	Rukovanje kvarovima prilično je težak zadatak

### arhitektura DB-a

**Konceptualno oblikovanje modela** 

Glavni rezultat prve faze oblikovanja jest konceptualna shema cijele baze, sastavljena od entiteta, atributa i veza. Treba opisivati sadržaj baze i načine povezivanja podataka u njoj. Prikaz je jezgrovit, neformalan i pogodan ljudima za razumijevanje, no još je nedovoljno razrađen da bi omogućio izravnu implementaciju. 

**Logičko** 
Glavni rezultat druge faze oblikovanja je logička shema koja je u slučaju relacijskog modela sastavljena od relacija (tablica). Sastavni dio logičkog oblikovanja je i normalizacija, gdje se primjenom posebnih pravila nastoji popraviti logička struktura samih relacija. 

**Fizičko**
Glavni rezultat treće faze oblikovanja je fizička shema cijele baze, dakle opis njezine fizičke građe. U slučaju uporabe DBMS-a zasnovanog na jeziku SQL, pojam fizičke razine treba shvatiti uvjetno. **Fizička shema je niz SQL (DDL) naredbi** kojima se ==relacije iz logičke sheme realiziraju kao tablice==. 
Pritom se dodaju pomoćne strukture i mehanizmi za postizavanje traženih performansi te čuvanje integriteta i sigurnosti podataka. 

### nivoi

Fizički nivo odnosi se na fizički prikaz i raspored podataka na jedinicama vanjske memorije. To je aspekt kojeg vide samo sistemski programeri. Sam fizički nivo može se dalje podijeliti na više podnivoa apstrakcije, od sasvim konkretnih staza i cilindara na disku, do već donekle apstraktnih pojmova datoteke i zapisa kakve susrećemo u klasičnim programskim jezicima. Raspored pohranjivanja opisuje kako se elementi logičke definicije baze preslikavaju na fizičke uređaje.

Globalni logički nivo odnosi se na logičku strukturu cijele baze. To je aspekt kojeg vidi projektant baze odnosno njen administrator. **Zapis logičke definicije naziva se shema.** Shema je tekst ili dijagram koji definira logičku strukturu baze, i u skladu je sa zadanim modelom. Dakle imenuju se i definiraju svi tipovi podataka i veze medu tim tipovima, u skladu s pravilima korištenog modela. Također, shema uvodi i ograničenja kojim se čuva integritet podataka.

**Lokalni logički nivo** odnosi se na logičku predstavu o dijelu baze kojeg koristi pojedina aplikacija. To je aspekt kojeg vidi korisnik ili aplikacijski programer. Zapis jedne lokalne logičke definicije zove se pogled (engleski `view`) ili pod-shema. To je tekst ili dijagram kojim se imenuju i definiraju svi lokalni tipovi podataka i veze medu tim tipovima, opet u skladu s pravilima korištenog modela. Također, pogled zadaje preslikavanje kojim se iz globalnih podataka i veza izvode lokalni.

![[baze-arh.png|800]]


### jezici za rad s DB

**Jezik za opis podataka (engleski Data Description Language – DDL).** 

Služi projektantu baze ili administratoru za zapisivanje sheme ili pogleda. Tim se jezikom definiraju podaci i veze među podacima na logičkoj razini. Naredbe DDL obično podsjećaju na naredbe za definiranje složenih tipova podataka u jezicima poput COBOL-a ili C-a. 

**Jezik za manipuliranje podacima (engleski Data Manipulation Language – DML)**

Služi programeru za uspostavljanje veze između aplikacijskog programa i baze. Naredbe DML omogućuju „manevriranje“ po bazi i jednostavne operacije kao što su upis, promjena, brisanje ili čitanje zapisa. U nekim softverskim paketima DML je zapravo biblioteka potprograma: „naredba“ u DML-u svodi se na poziv potprograma. 
U drugim paketima zaista se radi o posebnom jeziku: programer tada piše program u kojem su izmiješane naredbe dvaju jezik, pa takav program treba prevoditi pomoću dvaju prevoditelja (DML-precompiler, obični compiler).

**Jezik za postavljanje upita (engleski Query Language – QL).** 

Služi neposrednom korisniku za interaktivno pretraživanje baze. To je jezik koji podsjeća na govorni (engleski) jezik. Naredbe su neproceduralne, dakle takve da samo specificiraju rezultat koji želimo dobiti, a ne i postupak za dobivanje rezultata. 

### Životni ciklus baze podataka

![[ciklusdb.png|800]]

### Model podataka - osnovne komponente

Podatak je kodirana činjenica iz realnog sustava, on je nositelj informacije. 

Informacija je protumačeni (interpretirani) podatak.

Interpretacija podataka se vrši na osnovu strukture podataka, semantičkih ograničenja na njihove vrijednosti i preko operacija koje se nad njima mogu izvršiti. 

STRUKTURA MODELA

Skup koncepata za opis objekata sustava, njihovih atributa i njihovih međusobnih veza.

OPERACIJE

**Operacije nad konceptima strukture,** preko kojih je moguće prikazati i mijenjati vrijednosti podataka u bazi

DINAMIČKA PRAVILA INTEGRITETA

Dinamička pravila integriteta kojima se definira osnovno dinamičko ponašanje modela.

### Model podataka

Način na koji prikazujemo opis entiteta i njihove međusobne odnose ovisi o odabranom modelu podataka, odnosno DBMS-u koji podržava taj model podataka. 

Općenito, modeli podataka su **simbolički prikazi entiteta (objekata) objektnog sustava i odnosa među njima**, zajedno s njihovim opisima i tumačenjima. 


### Osnovni pojmovi o modeliranju 

Pomoću strukture podataka, podaci o pojmovima poslovnoga sustava spajaju se u međusobno povezane grupe i tako se znanje o grupiranju i interakciji pojmova iz poslovnoga sustava prenosi u model podataka. 

Na primjer, grupa podataka će biti recepti, druga grupa podataka će biti pacijenti, a treća lijekovi. Lijekove ćemo povezati s receptima, ali ne i s pacijentima.

#### ogranicenja

Pomoću ograničenja na podatke u strukturi podataka unosi se dalje znanje o interakciji koncepata iz poslovnoga sustava.

Na primjer, što je zabranjeno, ili u kojoj količini je dopušteno, pa možemo ograničiti da jedan recept može propisati samo jedan lijek, ali da pacijent može dobiti više recepata.

#### operatori

Pomoću operatora nad podacima, uvodi se skup operacija nad strukturom podataka, koje omogućuju dinamiku podataka o konceptima analogno dinamici stvari u poslovnome sustavu

Na primjer, operacija bi bila upis novoga recepta ili **složena operacija pretrage pacijenata koji su primili ove godine bilo koji antibiotski lijek tvrtke „Pliva".**

### struktura modela

Struktura modela podataka gradi se od temeljnih koncepata: entitet, ==veza== i atribut.

#### Entitet (engl. Entity) sustava

je neki njegov **realni ili konceptualni element**, to je neka posebnost što u poslovnome sustavu postoji i jasno se razlikuje od drugih entiteta. Na primjer: muškarci, narudžbe, organizacijske jedinice i dr.

Entitet se moze **jednoznacno** identificirati.
Svaki primjerak entiteta je jedinstven.

- stvarni, konceptualni **element** modela
- posebnost u sustavu
- jasno **se razlikuje** od drugih entiteta
- primjer: narudzba, proizvod, posiljka, korisnik, nekretnina, termin, kuca, dogadaj
- svaki entitet je jedinstven

#### Veza 

je koncept koji predstavlja neku **interakciju** među entitetima u sustavu, odnosno predstavlja znanje o njihovoj povezanosti. Na primjer: brak je veza između muškaraca i žena.

- interakcija medu entitetima u modelu
- znanje o povezanosti
- npr. : brak?

#### Atribut 

je neko svojstvo entiteta. Na primjer: ime radnika, datum prispijeća narudžbe, faktor uvećanja, brzina vozila, šifra općine i dr.

- svojstvo entiteta
- primjer: ime, prezime, datum rodenja, cijena, dimenzije, brzina, lozinka

#### Shema

je opis nekog skupa podataka, korištenjem danog modela podataka

### Entiteti, atributi, veze između entiteta

Primarni kljuc je jedan ili vise atributa koji jednoznacno odreduje primjerak(instancu) entiteta.
Primjer: korisnik, pr. kljuc moze biti email adresa, student: broj indeksa.


### Vrste objekata

**Nezavisan** objekt ima osobinu koja ga može jednoznačno identificirati (ne zavisi od drugih entiteta).

**Zavisan** objekt je onaj čija egzistencija i identifikacija zavise od drugog ili drugih entiteta. 

karakteristični objekt (slab objekt) – koji se ponavlja više puta za određeni nezavisni objekt; 

asocijativni objekt, koji predstavlja vezu više objekata 

![[objekt-vrste.png]]


### Veze

**Veza je međusobni odnos entiteta.**

Veze se uspostavljaju između dva ili više tipova entiteta na primjer veza IGRA ZA između tipova entiteta IGRAČ i Klub.
Jedna od veza je je član, ili je bio član, ili je počasni član.

Matematički rečeno radi se o binarnoj ili k-narnoj relaciji **između primjeraka entiteta zadanih tipova.** 
