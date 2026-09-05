
## ISPIT 1

1. Osnove programskog inženjerstva

Objasni pojam programsko inženjerstvo. Navedi tri razloga zašto se uopće razvio kao posebna disciplina (u odnosu na „obično programiranje"). Programsko inženjerstvo je inženjerska disciplina koja se bavi svim aspektima razvoja softvera s ciljem izrade kvalitetnog softvera na sustavan i ekonomičan način. Razvilo se zbog rasta kompleksnosti softvera, nepreciznih i promjenjivih zahtjeva korisnika te potrebe za osiguravanjem kvalitete softverskih sustava.

2. Softverski produkt i atributi kvalitete

a) Definiraj softverski produkt.

b) Nabroji pet atributa kvalitete softverskog proizvoda (npr. pouzdanost, učinkovitost...) i za svaki napiši po jednu rečenicu objašnjenja. a) Softverski (programski) produkt je skup računalnih programa i pripadne dokumentacije, stvoren s ciljem isporuke korisniku. Osim programa, uključuje dokumente potrebne za korištenje, razvoj i održavanje softvera.

b)

1) Mogućnost održavanja – softver se mora moći jednostavno mijenjati i prilagođavati promijenjenim zahtjevima korisnika 2) Pouzdanost – softver se mora ponašati predvidivo i ispravno bez neočekivanih grešaka 3) Učinkovitost (efikasnost) – softver mora imati zadovoljavajuće performanse i učinkovito koristiti računalne resurse 4) Sigurnost – softver mora štititi podatke i sustav od neovlaštenog pristupa i zlouporabe 5) Upotrebljivost – softver treba biti jednostavan za korištenje, s razumljivim sučeljem i odgovarajućom dokumentacijom

2. Uloge u razvoju softvera

Nabroji najmanje četiri uloge u timu (npr. analitičar zahtjeva, projektant, programer, tester).

Za dvije izabrane uloge objasni što konkretno rade na projektu razvoja web-shopa.

Nabrajanje uloga u timu:

- analitičar zahtjeva

- projektant (**arhitekt**)

- programer

- tester

- **projektni menadžer**

1) Analitičar zahtjeva

- prikuplja i analizira potrebe korisnika web-shopa, npr. kupnju proizvoda, registraciju korisnika, plaćanje i dostavu-na temelju razgovora s klijentom ==definira funkcionalne i nefunkcionalne zahtjeve== koje sustav mora zadovoljiti.
2) Programer
- ==implementira== web-shop prema definiranim zahtjevima i dizajnu, npr. razvija funkcionalnosti poput košarice, obrade narudžbi, plaćanja i rada s bazom podataka - također ispravlja greške i sudjeluje u održavanju sustava.

4. Zahtjevi – funkcionalni i nefunkcionalni

a) Definiraj funkcionalne

b) Nefunkcionalne zahtjeve.

Za sustav,, online naručivanja hrane" napiši dva funkcionalna i dva nefunkcionalna zahtjeva.

a) Funkcionalni zahtjevi opisuju što sustav mora raditi, odnosno koje funkcionalnosti i usluge mora pružiti korisnicima. Primjeri za sustav online naručivanja hrane:

1) Sustav mora omogućiti korisniku **pregled** ponude restorana i jelovnika.
2) Sustav mora omogućiti korisniku **naručivanje** hrane i slanje narudžbe restoranu.

b) Nefunkcionalni zahtjevi opisuju kako sustav mora raditi, odnosno ograničenja i kvalitativna svojstva sustava poput **performansi**, sigurnosti i **upotrebljivosti**. Primjeri za sustav online naručivanja hrane:

1) Sustav mora obraditi narudžbu u roku od najviše 2 sekunde.
2) Sustav mora osigurati zaštitu korisničkih podataka i sigurno plaćanje.

3. Proces inženjerstva zahtjeva

Nabroji i ukratko opiši četiri osnovne aktivnosti inženjerstva zahtjeva (npr. prikupljanje, analiza, dokumentiranje, validacija). Za svaku aktivnost navedi jedan tipičan artefakt ili rezultat.


1) **Prikupljanje** zahtjeva:

U ovoj aktivnosti prikupljaju se zahtjevi od korisnika i ostalih dionika kroz razgovore, radionice i analizu postojećih sustava. 
Tipičan **artefakt**: ==popis== ==zahtjeva== korisnika.

2) **Analiza** zahtjeva

Zahtjevi se detaljno analiziraju, razjašnjavaju, uklanjaju se nejasnoće i konflikti te provjerava njihova izvedivost. 
Tipičan **artefakt**: ==analizirani i strukturirani zahtjevi.==

3) **Dokumentiranje** zahtjeva

Zahtjevi se formalno zapisuju u standardiziranom obliku kako bi bili jasni svim sudionicima projekta. 
Tipičan **artefakt**: **==specifikacija==** softverskih zahtjeva ([[[Software Requirements Specification|SRS]]).

4) **Validacija** zahtjeva

Provjerava se jesu li zahtjevi ispravni, potpuni i odgovaraju stvarnim potrebama korisnika.

Tipičan ==artefakt== / rezultat: **potvrđeni** (validirani) zahtjevi.

6. Procesni modeli – izbor i primjena

Zaokruži procesni model koji je strogo sekvencijalan:

b) **Vodopadni model** [^1]

Prednost:

Jasno su definirane faze razvoja koje se odvijaju redoslijedom, što olakšava planiranje, praćenje projekta i dokumentiranje. 
Nedostatak: Teško se prilagođava promjenama zahtjeva jer se povratak na prethodne faze gotovo ne predviđa, pa se greške često otkrivaju kasno.

7. Evolucijski / inkrementalni model

Objasni ideju evolucijskog (inkrementalnog) modela razvoja.

Navedite primjer projekta gdje bi taj model bio bolji od vodopadnog i obrazloži zašto.

Evolucijski (inkrementalni) model razvoja temelji se na postupnoj izgradnji softvera u više manjih koraka (inkremenata). U svakom inkrementu razvija se i isporučuje funkcionalni dio sustava, a sustav se tijekom vremena evolucijski nadograđuje na temelju povratnih informacija korisnika. Primjer: razvoj web aplikacije

Kod takvih projekata zahtjevi se često mijenjaju i nisu u potpunosti poznati na početku. Inkrementalni model omogućuje ranu isporuku funkcionalnog softvera, lakše uvođenje promjena i kontinuirano poboljšavanje sustava, dok vodopadni model zahtijeva unaprijed potpuno definirane zahtjeve.

8. UML - [[use case dijagram]]

Izradi UML use case dijagram za sustav,, web-shop za mobilne telefone" koji sadrži:

Najmanje dva aktera, najmanje pet slučajeva uporabe, iscrtanu granicu sustava barem jednu vezu tipa «include» ili «extend» (ako je primjenjivo).



 

9. UML - dijagram slijeda (sequence)

Tekstualno opiši dijagram slijeda za slučaj uporabe,, Kupac obavlja kupnju u web- shopu". Nabroji sudionike i najmanje 6 poruka između njih, onim redoslijedom kojim bi ih nacrtao na dijagramu. Sudionici:

1) Kupac 2) Web-shop sustav 3) Košarica 4) Sustav za plaćanje 5) Baza podataka Poruke (redoslijedom na dijagramu):

Kupac → Web-shop sustav: pregledava proizvode

Kupac → Web-shop sustav: dodaje proizvod u košaricu

Web-shop sustav → Košarica: ažuriraj sadržaj košarice

Kupac → Web-shop sustav: potvrđuje kupnju

Web-shop sustav → Sustav za plaćanje: pošalji zahtjev za plaćanje

Sustav za plaćanje → Web-shop sustav: potvrda uspješnog plaćanja

Web-shop sustav → Baza podataka: spremi narudžbu

Web-shop sustav → Kupac: potvrda kupnje

Kako to izgleda na crtanom dijagramu:

Sudionici su poredani s lijeva na desno

Poruke idu odozgo prema dolje

Svaka poruka je strelica s opisom akcije

10. UML - dijagram razreda, apstraktne klase i veze

a) Ukratko definiraj apstraktnu klasu.

b) Za sustav,, informacijski sustav knjižnice" predloži tri razreda (npr. Knjiga, Član, Posudba) s po 2 atributa i 1 metodom. c) Opiší dvije veze izmedu tih razreda (navedi radi li se o asocijaciji, nasljeđivanju, agregaciji ili kompoziciji a)Apstraktna klasa je klasa koja ne može imati izravne instance, već služi kao osnova (roditelj) za druge klase koje nasljeđuju njezina svojstva i metode. b)

RAZRED ATRIBUTI METODA

Knjiga naslov, ISBN provjeriDostupnost()

Član clanskiBroj, ime posudiKnjigu()

Posudba datumPosudbe, rokVracanja zakljuciPosudbu()

c)

Asocijacija između razreda Član i Posudba

- član može imati jednu ili više posudbi

Kompozicija između razreda Posudba i Knjiga

- posudba ne može postojati bez knjige koju se posuđuje

 

ISPIT 2

1. Osnove PI - povijest i ciljevi

Objasni pojam "kriza softvera" koja je dovela do razvoja programskog inžinjerstva.

Navedi tri cilja programskog inženjerstva u odnosu na razvoj softvera (npr. predvidivost, kvaliteta, održivost…). Kriza softvera označava razdoblje kada je postalo jasno da se softver ne može razvijati ad-hoc pristupom jer su projekti kasnili, bili preskupi, nepouzdani i teško održivi. Pojava sve većih i složenijih sustava dovela je do potrebe za sustavnim pristupom razvoju, što je rezultiralo razvojem programskog inženjerstva.

Tri cilja:

1) Predvidivost razvoja (rokovi i troškovi)

2) Kvaliteta softverskog proizvoda

3) Održivost i mogućnost održavanja softvera

4. Softverski produkti i kvaliteta procesa

a) Objasni razliku između kvalitete softverskog proizvoda i kvalitete procesa razvoja.

b) Navedi po jedan primjer mjere ili aktivnosti kojom se poboljšava:

- kvaliteta proizvoda

- kvaliteta procesa

a) Razlika kvalitete proizvoda i kvalitete procesa

Djelomično se može zaključiti iz materijala:

- Kvaliteta softverskog proizvoda odnosi se na svojstva samog softvera (funkcionalnost, pouzdanost, performanse, sigurnost itd.), što je vidljivo iz podjele nefunkcionalnih zahtjeva – proizvod - Kvaliteta procesa razvoja odnosi se na način razvoja softvera (pravila, postupci, tehnike), što je vidljivo iz procesnih zahtjeva i opisa procesa prikupljanja, analize, dokumentiranja i validacije zahtjeva

b) Primjeri mjera / aktivnosti

- Poboljšanje kvalitete proizvoda:

~ definiranje mjerljivih i provjerljivih zahtjeva

- Poboljšanje kvalitete procesa:

~ provođenje validacije zahtjeva i formalnih pregleda

3. Uloge u timskom radu

Pretpostavi da radiš u timu koji razvija mobilnu aplikaciju za naručivanje taksija.

Ulogu tima:

- analitičara zahtjeva

- testera

- voditelja projekta

Analitičar zahtjeva: prikuplja i analizira korisničke zahtjeve te ih dokumentira

Tester: provjerava ispravnost funkcionalnosti i otkriva pogreške

Voditelj projekta: planira razvoj, koordinira tim i prati rokove i resurse

4. Zahtjevi – izvori i problemi

a) Nabrojiti izvore iz kojih se mogu prikupljati zahtjevi (npr. korisnici, postojeći sustav…).

b) Objasni tri tipična problema koji nastaju sa zahtjevima (npr. nejasni, konfliktni, promjenjivi) i posljedice tih problema. a) Izvori zahtjeva

Može se izravno izvesti iz procesa prikupljanja (elicitation):

- korisnici sustava

- klijent / naručitelj

- ostali dionici (regulatori, market analyst, razvojni tim)

- postojeći sustavi i dokumentacija

b) Tri tipična problema i posljedice

Izravno navedeni problemi u materijalu:

- Nejasni zahtjevi → različita tumačenja i pogrešna implementacija

- Konfliktni zahtjevi → potreba za kompromisima i kašnjenja

- Promjenjivi zahtjevi → povećanje troškova i nestabilnost projekta

5. Scenariji slučaja

Napiši tekstualni scenarij slučaja uporabe „Student prijavljuje ispit“ u informacijskom sustavu fakulteta. Scenarij mora imati:

- početne pretpostavke

- osnovni tijek

- najmanje dva alternativna ili iznimna tijeka

Početne pretpostavke:

Student je prijavljen u sustav i ima pravo prijave ispita.

Osnovni tijek:

Student odabire predmet

Sustav prikazuje dostupne ispite

Student potvrđuje prijavu

Sustav bilježi prijavu ispita

Alternativni / iznimni tijekovi:

Student nema pravo prijave → sustav odbija zahtjev

Ispit je već prijavljen → sustav obavještava studenta

6. Procesni modeli – usporedba

Usporedi vodopadni, V-model i big-bang model razvoja softvera:

za svaki navedi jednu prednost i jedan nedostatak

navedi u kojoj situaciji se ne bi dobro koristio big-bang pristup

MODEL PREDNOSTI NEDOSTATCI

Vodopadni Jednostavan i lako razumljiv Slabo prilagođavanje promjenama

V-model Snažna povezanost razvoja i testiranja Krutost procesa Big-bang Minimalno planiranje Vrlo rizičan i nepregledan

Big-bang se ne bi koristio za velike, složene i sigurnosno kritične sustave.

7. Agilni pristup

a) Navedi tri vrijednosti i principe iz agilnog manifesta.

b) Usporedi agilni pristup (npr. Scrum) s vodopadnim modelom u pogledu:

- odnosa prema korisniku

- planiranja i dokumentacije

a) Vrijednosti i principi agilnog manifesta

- Ljudi i interakcije ispred procesa i alata

- Suradnja s korisnikom ispred opsežne dokumentacije

- Spremnost na promjene

b) Usporedba agilnog i vodopadnog pristupa

- Odnos prema korisniku:

~ agilni – stalna suradnja

~ vodopadni – korisnik uključen uglavnom na početku

-Planiranje i dokumentacija:

~ agilni – iterativno planiranje, lagana dokumentacija

~ vodopadni – detaljno planiranje unaprijed

8. UML – vrste dijagrama

Nabroji najmanje četiri UML dijagrama po standardu UML 2.x i svrhu svakog (npr. use case, class, sequence, activity…). Za svaki naznači pripada li strukturalnim ili ponašajnim (behavioral) dijagramima.

Može se odgovoriti djelomično prema UML slajdovima:

Use case diagram – opis funkcionalnosti i aktera → behavioral

Sequence diagram – redoslijed interakcija → behavioral

Class diagram – struktura podataka i klasa → structural

Deployment diagram – fizički raspored sustava → structural

9. UML – use case dijagram (call centar)

Izradi use case dijagram za „call centar pružatelja internetskih usluga“ sa najmanje:

- dva aktera (npr. Operater, Korisnik)

- pet slučajeva uporabe (npr. prijava kvara, provjera statusa…)

Akteri:

Korisnik

Operater

Slučajevi uporabe:

Prijava kvara

Provjera statusa usluge

Aktivacija usluge

Rješavanje prijave

Zatvaranje prijave

10. UML – class dijagram za web shop (mobilna verzija)

Za „web shop za mobilne uređaje“ izradi opis class dijagrama.

Na temelju primjera online shopping i klasnih dijagrama u PDF-u, class dijagram web shopa (mobilna verzija) uključuje:

Kupac (ime i prezime, email, mobitel)

Adresa (ulica, kućni broj, poštanski broj, grad, država)

Narudžba (orderID, datum i vrijeme)

Stavka (količina)

Artikl (naziv, specifikacija, cijena)

ArtiklSkladište (serijski broj)

Veze:

Kupac ima jednu ili više narudžbi

Narudžba se sastoji od jedne ili više stavki (kompozicija)

Stavka se odnosi na jedan artikl

Kupac ima jednu ili više adresa

Opis i struktura jasno su prikazani u primjerima klasnog dijagrama online shopa

ISPIT 3

1. Osnove programskog inžinjerstva – process.

Objasni što je životni ciklus softverskog proizoda. Nabroji i ukratko opiši četiri tipiče faze generičkog procesa razvoja softvera (npr. analiza, dizajn, implementacija, testiranje), te objasni kako se programsko inžinjerstvo “ubacuje” u taj ciklus.

Životni ciklus softverskog proizvoda predstavlja skup faza kroz koje softver prolazi od početne ideje i analize pa sve do implementacije, evaluacije i daljnje evolucije.

Identificiraju se ključni entiteti, funkcionalnosti i odnosi u domeni

Prikupljaju se i definiraju zahtjevi

Analiza (analiza zahtjeva)

UML modeli pomažu u razumijevanju domene problema

U ovoj fazi razvija se model domene (manje detaljan)

Razrađuje se arhitektura sustava

Definiraju se razredi, atributi, veze i odgovornosti

Dizajn (oblikovanje)

Klasni dijagrami pomažu u vizualizaciji strukture sustava

Određuju se odnosi (asocijacije, generalizacije, kompozicije)

Model sustava se pretvara u programski kod

Implementacija Razredi identificirani u modelu postaju stvarne klase u programu

Odgovornosti razreda se implementiraju kao metode i funkcionalnosti

Provjerava se ispravnost implementacije

Testiranje / Evaluacija i evolucija Sustav se evaluira u odnosu na zahtjeve

U slučaju promjena, sustav evoluira i prilagođava se novim potrebama

Programsko inženjerstvo uvodi sustavan, strukturiran i modeliran pristup razvoju softvera kroz cijeli životni ciklus:

Koristi se modeliranje (UML dijagrami) za razumijevanje domene

Definira se odgovornost razreda

Provodi se strukturirana identifikacija klasa, atributa i veza

Primjenjuju se tehnike poput CRC kartica

Provodi se evaluacija i recenzija modela

2. Projekt vs. proizvod, tipske vrste softvera.

Objasni razliku između:

- razvoja softverskog proizvoda na tržištu (npr. MS Office, mobilna aplikacija, u dućanu aplikacija)- razvoja softvera po narudžbi za konkretnog klijenta (npr. informacijski sustav za bolicu) Razvoj softverskog proizvoda za tržište

Karakteristike (implicitno iz materijala o zahtjevima i dionicima):

Sustav mora zadovoljiti širu skupinu korisnika

Zahtjevi su općenitiji i temelje se na tržišnim potrebama

Veći naglasak na fleksibilnosti i proširivosti

Proizvod se razvija bez unaprijed poznatog konkretnog kupca

Evolucija proizvoda je kontinuirana

Razvoj softvera po narudžbi (custom development)

Karakteristike (iz dijelova o zahtjevima i domeni primjene):

Sustav se razvija za konkretnog klijenta

Zahtjevi su precizno definirani prema specifičnoj organizaciji

Modeliranje domene je detaljnije (npr. sustav rezervacije avio-leta)

Uključen je naručitelj kao glavni dionik

Manje generičnosti, više prilagodbe specifičnim procesima

3. Zahtjevi – nejasno formulirani zahtjev.

Zadan je slijedeći zahtjev: “Sustav mora biti brz i jednostavan za korištenje.”

a) Objasni zašto je ovakav zahtjev lose specificiran iz perspective inžinjerstva zahtjeva.

b) Prepiši ga u obliku namjanje dva konkretna nefunkcionalna zahtjeva koji se mogu provjeriti / mjeriti. a) Zahtjevi trebaju biti:

Jasni

Nedvosmisleni

Mjerljivi / povjerljivi

Konzistentni

Iz perspective inžinjerstva zahtjeva, problem je u nedostatku kvantifikacije i preciznosti, što otežava validaciju i testiranje. b) Zahtjev performansi (brzina):

„Vrijeme odziva sustava pri obradi korisničkog zahtjeva ne smije biti dulje od 2 sekunde u 95 % slučajeva.” Zahtjev uporabljivosti:

„Korisnik mora moći izvršiti osnovnu funkciju (npr. prijavu ispita / narudžbu proizvoda) u najviše 5 koraka bez dodatne pomoći.”

4. Tragljivost (traceability) zahtjeva.

Objasniti pojam tragljivost zahtjeva (requirements traceability). Zamisli sustav za online kupnju karata za koncerte i napiši mali primjer tablice tragljivosti (barem 3 reda) koja povezuju: - ID zahtjeva

- kratki opis zahtjeva

- pripadajući testni slučaj

Tragljivost zahtjeva znači mogućnost praćenja zahtjeva kroz različite faze razvoja:

od inicijalne specifikacije,

preko modeliranja i dizajna,

do implementacije i testiranja.

ID zahtjeva Kratki opis zahtjeva Pripadajući testni slučaj

X1 Korisnik mora moći pretraživati koncerte po izvođaču Unijeti ime izvođača i provjeriti prikaz rezultata X2 Sustav mora omogućiti online plaćanje karticom Izvršiti kupnju s važećom karticom i provjeriti uspješnu

transakciju

X3 Sustav mora poslati potvrdu kupnje na e-mail korisnika Nakon kupnje provjeriti primitak e-mail potvrde

 

5. Procesni modeli – izbor prilagodnog modela.

Tvrtka razvija novi sustav za “pametni dom” (upravljanje rasvjetom, grijanjem, senzorima). Zahtjevi nisu potpuno jasni, očekuje se da će se mijenjati nekon što korisnici vide prve verzije aplikacije.

a) Koji tip procesnog modela (npr. vodopadni, inkrementalni, spiralni, agilni) bi odabrao i zašto? b) Navedi dvije konkretne prednosti tog modela u ovoj situaciji.

a) Agilni modeli. Prikladni su kada:

Zahtjevi nisu u potpunosti definirani

Zahtjevi se mijenjaju

Potreban je čest feedback korisnika

Sustav se razvija iterativno

b) Prednosti:

Razvoj u malim inkrementima

Isporuku funkcionalnih verzija

Prilagodbu zahtjeva između iteracija

Smanjenje rizika razvoja pogrešnih funkcionalnosti

6. UML – use case dijagram: rezervacija termina kod liječnika.

Za sustav “online rezervacija termina kod liječnika”:

a) Identifikacija najmanje tri aktera (npr. Pacijent, Liječnik, Administrator).

b) Navedite najmanje šest slučajeva uporabe (npr. Rezervacija termina, Otkazivanje termina, Pregled rasporeda, …).

c) Opisno objasni kako bi izgledao use case dijagram (granica sustava, veze aktera i UC-ova).

a) Akteri: Pacijent, Liječnik, Administrator

b)Slučajevi uporabe:

1) Rezervacija termina

2) Otkazivanje termina

3) Pregled rasporeda

4) Promjena termina

5) Upravljanje rasporedom (unos slobodnih termina)

6) Potvrda dolaska

7) Upravljanje korisničkim računima

c) Use case dijagram:

Pacijent – Rezervacija termina, Otkazivanje termina, Pregled rasporeda, Promjena termina, Potvrda dolaska

Liječnik – Pregled rasporeda, Upravljanje rasporedom

Administrator – Upravljanje rasporedom, Upravljanje korisničkim računima

7. UML – activity dijagrama: obrada online narudžbe.

Opisno izradi activity dijagram za process “obrada online narudžbe u web-shopu”:

a) Nabroji glavne aktivnosti (npr. zaprimanje narudžbe, provjera zalihe, naplata, priprema za dostavu, …). b) Koristi barem jedno grananje odluke (npr. “ima zalihe? Da/Ne”).

c) Navedi gdje bi se mogla pojaviti paralelnost aktivnosti, ako je primjenjivo.

a) Glavne aktivnosti:

1) Zaprimanje narudžbe

2) Provjera dostupnosti artikla

3) Rezervacija artikla na skladištu

4) Obrada plaćanja

5) Generiranje računa

6) Priprema paketa za dostavu

7) Slanje narudžbe kupcu

8) Slanje potvrde kupcu na e-mail

b) Grananje odluke:

“Je li plaćanje uspješno?”

Da – generiranje računa, priprema za dostavu, slanje potvrde kupcu

Ne – prikaz poruke o neuspjelom plaćanje, omogućiti ponovno plaćanje / otkazivanje narudžbe c) Paralelnost se može pojaviti nakon uspješne naplate:

“Obrada plaćanja” – generiranje računa i priprema paketa za dostavu

8. UML – sequence dijagram: bankovni prijenos.

Opisno prikaži dijagram slijeda za slučaj uporabe “Korisnik obavlja prijenos novca putem internet bankarstva”. a) Nabroji sudionike (npr. Korisnik, Web aplikacija, Bankovni sustav, Sustav autentifikacije, Baza podataka, …). b) Navedi najmanje 7 poruka koje bi se pojavljivale u dijagramu, redoslijedom kojim se šalju. a) Sudionici:

1) Korisnik

2) Web aplikacija

3) Bankovni sustav

4) Sustav autentifikacije

5) Baza podataka

b) 7 poruka:

1) Korisnik → Web aplikacija: Unos korisničkog imena i lozinke.

2) Web aplikacija → Sustav autentifikacija: Provjera vjerodajnica.

3) Sustav autentifikacije → Baza podataka: Dohvat korisničkih podataka.

4) Sustav autentifikacije → Web aplikacija: Rezultat autentifikacije. (Uspješno: nastavak. / Neuspješno: prekid (alternativni tijek))

5) Korisnik → Web aplikacija: Unos podataka za prijenos.

6) Web aplikacija → Bankovni sustav: Zahtjev za izvršenje prijenosa.

7) Bankovni sustav → Baza podataka: Provjera stanja računa.

8. UML – class dijagram: sustav za najam automobile.

Za “sustav za najam automobile” predloži class dijagram s najmanje četiri razreda (npr. Vozilo, Klijent, UgovorONajmu, Lokacija). a) Za svaki razred navedi 2 atributa i 1 metodu.

b) Opiši barem tri veze između razreda (tip veze i kardinalnost, npr. Klijent-UgovorONajmu, UgovorONajmu-Vozilo, …) a)

ATRIBUTIMETODE

ime: String

KlijentrezervirajVozilo()

brojVozackeDozvole: String

registracijskiBroj: String

VozilopromijeniStatus()

status: String (npr. dostupno, iznajmljeno)

datumPocetka: Date

UgovorONajmuizracunajCijenu()

datumZavrsetka: Date

nazivLokacije: String

LokacijadodajVozilo()

adresa: String

b) Veze između razreda:

1) Klijent – UgovorONajmu: asocijacija

-jedan klijent može imati 0, 1 ili više ugovora

-svaki ugovor pripada točno 1 klijentu

2) UgovorONajmu – Vozilo: asocijacija

-svaki ugovor se odnosi na točno 1 vozilo

-jedno vozilo može biti u 0, 1 ili više ugovora (kroz vrijeme)

3) Lokacija – Vozilo: agregacija

-jedna lokacija ima 0, 1 ili više vozila

-svako vozilo pripada 1 lokaciji

10. Kvaliteta i testiranje – verifikacija vs. validacija.

a) Objasni razliku između verifikacije (“gradimo li proizvod na pravi način?”) i validaciju (“gradimo li pravi proizvod?”). b) Navedite jedan primjer aktivnosti verifikacije i jedan primjer aktivnosti validacija za sustav mobilčnog bankarstva. c) Objasnite kako ove aktivnosti doprinose kvaliteti softverskog proizvoda.

a)

Verifikacija provjerava:

-jesu li zahtjevi ispravno implementirani

-odgovara li implementacija spedifikaciji

-je li kod tehnički ispravan

Validacija provjerava:

-zadovoljava li sustav stvarne potrebe korisnika

-rješava li problem zbog kojeg se razvija

-je li upotrebljiv i funkcionalan u stvarnom okruženju

b) Primjeri:

Verifikacija

Testiranje funkcije prijenosa novca prema specifikaciji

→ Provjera da li se iznos točno oduzima s jednog računa i dodaje na drugi

→ Provjera pravilnog izračuna stanja računa

Validacija

Testiranje aplikacije s realnim korisnicima

→ Korisnici isprobavaju prijenos novca

→ Provjerava se je li proces jednostavan i razumljiv

c) Kako doprinose kvaliteti:

Verifikacija doprinosi:

-smanjenju tehničkih pogrešaka

-otkrivanju bugova

-osiguravanju ispravnosti implementacije

-stabilnosti sustava

Validacija doprinosi:

-zadovoljstvu korisnika

-funkcionalnoj ispravnosti u stvarnom okruženju

-smanjenju rizika razvoja pogrešnog proizvoda

[^1]: [[Waterfall Method]]