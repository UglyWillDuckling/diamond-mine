## Pitanja za usmeni ispit

1. Sigurnosne usluge i mehanizmi prema specifikaciji X.800?
2. Sigurnosni trokut – sigurnost informacija?

3. Objasnite četiri osnovne sigurnosne prijetnje u otvorenom okruženju?
4. Objasnite četiri osnovne vrste **kibernetičkih** napada?
5. Objasnite napade izvana i napade iznutra?
6. Objasnite razliku između pasivnih i aktivnih napada?

7. Opišite model mrežne sigurnosti?

8. **Osnovna podjela malicioznog software-a?**
9. **Faze životnog vijeka „virusa“?**

10. Podjela „virusa“ prema strategiji prikrivanja?

11. Objasnite funkcionalnost četiri generacije antivirusnog softvera?
12. Objasnite kako djeluju računalni „crvi“?
13. Trojanski konji?
14. Objasnite osnovne metode zavaravanja (Spoofing)?

15. SYN flooding napad?
16. Distribuirani SYN flooding napad?

17. Distribuirani ICMP napad?
18. Direktni i reflektirani DDoS napad?

19. Temeljna načela kriptografije?

20. Monoabecedna supstitucija?
21. Poliabecedna supstitucija?
22. Transpozicijske šifre?

23. Blok šifre i protočne (stream) šifre?

24. Model simetrične enkripcije?
25. Model asimetrične enkripcije?

26. Kerberos razmjena ključeva?

27. Vatrozid i funkcionalnost vatrozida?
28. Konfiguracije vatrozida prema kontrolnoj strategiji?
29. Distribuirani vatrozid?

30. Generički model procesa IDS sustava?

31. IDS sustavi prema izvoru informacija?

32. Načini detekcije upada kod IDS sustava?
33. Pozicioniranje IDS sustava?

34. Računala i mreže mamci, Honeypot sustavi?

35. Sustavi za analizu ranjivosti?
36. Objasnite osnovne korake u ispitivanju ranjivosti?

37. Kontrola pristupa u mrežu?

38. Sigurnosne prijetnje i razine zaštite sustava?

39. Fizička zaštita mrežne opreme i zaštita na fizičkoj razini?

40. Prijetnje i zaštite na podatkovnoj razini?
41. Prijetnje i zaštita na mrežnoj razini?
42. Prijetnje i zaštite na transportnoj razini?
43. Prijetnje i zaštite na korisničkoj razini?

44. Objasnite sigurnosne probleme na MAC razini u WLAN mrežama?

45. Sigurnosni problemi s WEP standardom?
46. Sigurnosna arhitektura u WLAN mrežama?

### 1. Sigurnosne usluge prema [[X.800]]

Sigurnosna usluga je funkcija koju komunikacijski sustav pruža kako bi zaštitio resurse i komunikaciju.

| Sigurnosna usluga                                    | Opis                                                                                             |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 1. **Autentikacija (Authentication)**                | Omogućuje provjeru identiteta komunikacijskih sudionika ili izvora podataka.                     |
| 2. **Kontrola pristupa (Access Control)**            | Sprječava neovlašteno korištenje resursa.                                                        |
| 3. **Povjerljivost podataka (Data Confidentiality)** | Štiti podatke od neovlaštenog otkrivanja.                                                        |
| 4. **Cjelovitost podataka (Data Integrity)**         | Osigurava da podaci nisu neovlašteno izmijenjeni, obrisani ili umetnuti.                         |
| 5. **Neporecivost (Non-repudiation)**                | Sprječava sudionika da kasnije porekne sudjelovanje u komunikaciji ili slanje/primanje podataka. |

### 2. Sigurnosni ==mehanizmi== prema X.800

Sigurnosni mehanizmi su načini na koje se sigurnosne usluge ostvaruju.

**Specifični sigurnosni mehanizmi:**

1. **Encipherment (šifriranje)** – pretvaranje podataka u oblik koji neovlaštena osoba ne može razumjeti.
2. **Digital signature (digitalni potpis)** – omogućuje **autentikaciju izvora,** cjelovitost i neporecivost.
3. **Access control (kontrola pristupa)** – određuje tko smije pristupiti određenim resursima.
4. ==**Data integrity (mehanizmi cjelovitosti podataka)** – otkrivaju neovlaštene izmjene podataka.==
5. **Authentication exchange (razmjena za autentikaciju)** – omogućuje provjeru identiteta komunikacijskih entiteta.
6. ==**Traffic padding (popunjavanje prometa)** – dodavanje umjetnih podataka kako bi se otežala analiza prometa.==
7. **Routing control (kontrola usmjeravanja)** – omogućuje odabir **sigurnijih komunikacijskih putova.**
8. ==**Notarization (notarizacija)** – korištenje pouzdane treće strane za potvrđivanje određenih svojstava komunikacije ili transakcije.==

**Prema X.800 postoje i opći sigurnosni mehanizmi**, koji nisu vezani samo uz jednu određenu uslugu. Među njima su funkcionalnost pouzdanosti (trusted functionality), sigurnosne oznake, detekcija događaja, sigurnosni audit trail i sigurni oporavak.

Primjer: **povjerljivost podataka** je sigurnosna usluga, dok je **šifriranje** sigurnosni mehanizam kojim se ta usluga može ostvariti.

Ukratko, X.800 daje temeljnu klasifikaciju sigurnosnih funkcija u OSI okruženju i povezuje **autentikaciju, kontrolu pristupa, povjerljivost, cjelovitost i neporecivost** s mehanizmima kojima se te zaštite implementiraju.

## 2. Sigurnosni trokut – sigurnost informacija?

**Sigurnosni trokut** odnosno **CIA trijada** predstavlja tri temeljna ==cilja== sigurnosti informacija:

### 🔺 1. Povjerljivost (Confidentiality)

Osigurava da su informacije dostupne **samo ovlaštenim osobama**.

* Zaštita od neovlaštenog pristupa i otkrivanja.
* Primjeri: šifriranje, lozinke, kontrola pristupa.

**Primjer:** Samo zaposlenici s odgovarajućim ovlastima mogu vidjeti podatke o plaćama.

### 🔺 2. Cjelovitost (Integrity)

Osigurava da informacije ostanu **točne, potpune i nepromijenjene na neovlašten način**.

* Sprječava ==neovlaštenu izmjenu, brisanje ili umetanje podataka.==
* Primjeri: digitalni potpisi, hash funkcije, kontrole pristupa.

**Primjer:** Napadač ne smije moći promijeniti iznos transakcije($) u bazi podataka.

### 🔺 3. Dostupnost (Availability)

Osigurava da su informacije i informacijski sustavi **dostupni ovlaštenim korisnicima kada su potrebni**.

* Zaštita od prekida rada, kvarova i napada
* zastita od gubitka informacija
* Primjeri: sigurnosne kopije, redundancija, UPS, zaštita od DoS/DDoS napada.

**Primjer:** Internetsko bankarstvo mora biti dostupno korisnicima i tijekom povećanog opterećenja.

### 📌 Sažetak

**CIA = Povjerljivost + Cjelovitost + Dostupnost**

| Element              |                Pitanje                | Cilj                                                                |
| -------------------- | :-----------------------------------: | ------------------------------------------------------------------- |
| 🔒 **Povjerljivost** |      Tko smije vidjeti podatke?       | Spriječiti neovlašteno otkrivanje                                   |
| 🛡️ **Cjelovitost**  |       Jesu li podaci ispravni?        | Spriječiti neovlaštene izmjene                                      |
| ⚡ **Dostupnost**     | Jesu li podaci dostupni kada trebaju? | Spriječiti prekid dostupnosti                                       |
| ✍**Vjerodostojnost** |  osigurava autentičnost informacije   | primatelj je siguran da<br>je pošiljatelj onaj kojim se predstavlja |

## Objasnite četiri osnovne sigurnosne prijetnje u otvorenom okruženju?

1. **Presretanje (Interception)**
   Neovlaštena osoba dolazi do podataka koji su namijenjeni drugom korisniku.
   → Napad na **povjerljivost**.
   **Primjer:** napadač prisluškuje mrežni promet i čita poruke.

2. **Izmjena (Modification)**
   Napadač ne samo da pristupa podacima nego ih i **mijenja** prije nego što stignu do primatelja.
   → Napad na **cjelovitost**.
   **Primjer:** promjena iznosa bankovne transakcije tijekom prijenosa.

3. **Prekid (Interruption)**
   Resurs ili komunikacijska usluga postaje **nedostupna** ovlaštenom korisniku.
   → Napad na **dostupnost**.
   **Primjer:** ==DoS== napad kojim se poslužitelj preoptereti i postane nedostupan.

4. **Fabriciranje / krivotvorenje (Fabrication)**
   Napadač **ubacuje lažne podatke ili poruke** u sustav ili komunikaciju.
   → Napad na **autentičnost** i može ugroziti cjelovitost. (Vjerodostojnost)
   **Primjer:** napadač šalje lažni zahtjev za prijenos novca predstavljajući se kao ovlašteni korisnik.


### Ukratko za učenje

| PRIJETNJA        | Što napadač radi?         | Ugrožava                                      |
| ---------------- | ------------------------- | --------------------------------------------- |
| **Presretanje**  | Čita/pribavlja podatke    | **Povjerljivost**                             |
| **Izmjena**      | ==Mijenja== podatke       | **Cjelovitost**                               |
| **Prekid**       | ==Onemogućuje== uslugu    | **Dostupnost**                                |
| **Fabriciranje** | ==Ubacuje== lažne podatke | **Autentičnost(Vjerodostojnost)/cjelovitost** |

## 4. Objasnite četiri osnovne vrste kibernetičkih napada?

Četiri osnovne vrste kibernetičkih napada mogu se objasniti kroz **što napadač radi s podacima ili sustavom**:

1. **Presretanje (Interception)** 👀
   Napadač **neovlašteno pristupa ili prisluškuje** podatke.

   * Ugrožava: **povjerljivost**
   * Primjer: prisluškivanje mrežnog prometa i krađa podataka.

2. **Izmjena (Modification)** ✏️
   Napadač **mijenja postojeće podatke** bez dopuštenja.

   * Ugrožava: **cjelovitost**
   * Primjer: promjena iznosa transakcije s 100 € na 1.000 €.

3. **Prekid (Interruption)** 🚫
   Napadač **onemogućava pristup resursu ili usluzi**.

   * Ugrožava: **dostupnost**
   * Primjer: DoS/DDoS napad koji sruši ili preoptereti poslužitelj, Fizicko unistavanje, ometanje signala, brisanje programa, etc.

4. **Fabriciranje (Ubacivanje lazne informacije)** 📝
   Napadač **stvara i ubacuje lažne podatke ili poruke**.

   * Ugrožava: **autentičnost**, a može ugroziti i cjelovitost.
   * Primjer: napadač pošalje lažni zahtjev za prijenos novca u ime druge osobe,lazni podaci u DB, lazni IP datagrami u mrezi, lazni ==email== 📧

## Objasnite napade izvana i napade iznutra?

#### 1. Napadi izvana (external attacks)

Napadač **nije ovlašteni korisnik sustava** i djeluje izvan organizacije ili mreže.

* Nema legitimni pristup sustavu.
* ==Pokušava neovlašteno ući u sustav== ili napasti njegove resurse.

**Takvi izvori mogu biti:**
- vanjski neprijatelji koji imaju pristup do javne mreže, ali nemaju pristup ponuđenim uslugama,
- kriminalne ili terorističke organizacije 🥷
- obavještajne službe i istražiteljske agencije u potrazi za informacijama 🕵️‍♀️
- komercijalne tvrtke, s ciljem prikupljanja povjerljivih informacija potencijalnim korisnicima, dužnicima i sl., 💰
- hakeri💀

**Primjeri**: haker pokušava probiti lozinku, **phishing** napad, **DDoS** napad.

#### 2. Napadi iznutra

Napadač je **unutar organizacije ili već ima određeni legitiman pristup sustavu**, ali ga koristi na neovlašten način.

- Moze napraviti slucajnu gresku ili propust.
* Može biti zaposlenik, administrator ili drugi ovlašteni korisnik.
* Može zloupotrijebiti svoje ovlasti ili ukrasti podatke.
* Može namjerno uskratiti uslugu

**Primjer**: zaposlenik kopira povjerljive podatke na USB i odnese ih izvan organizacije. Operator nekome uskrati pristup internetu.

#### 🧠 Za ispit

> **Napad izvana:** napadač **nema legitiman pristup** i pokušava ga ostvariti.
> **Napad iznutra:** napadač **ima pristup**, ali ga **zloupotrebljava**.

## 6. Objasnite razliku između pasivnih i aktivnih napada?

### 1. Pasivni napadi 👀

Napadač **samo promatra, prisluškuje ili prikuplja podatke**, ali ih **ne mijenja**.

* Cilj je najčešće narušiti **Povjerljivost**.
* Teže ih je otkriti jer se komunikacija normalno odvija.
* naglasak je na prevenciji

**Primjeri**:
  * ==prisluškivanje== mrežnog prometa
  * čitanje poruka
  * analiza prometa (tko s kim komunicira, kada i koliko).

### 2. Aktivni napadi ✏️

Napadač **mijenja, uništava, blokira ili ubacuje podatke** u komunikaciju ili sustav.oo

- mijenja
- unistava
- blokira
- ubacuje podatke (inject)

* Mogu narušiti **cjelovitost, dostupnost i autentičnost**.
* Često ih je ==lakše== ==otkriti== jer uzrokuju promjene u sustavu.

**Skupine**

- Napadi **pretvaranjem** (engl. masquerade)
	✓ Entitet se „pretvara” da je netko drugi, tj. predstavlja se lažnim identitetom ostalim sudionicima u komunikaciji.
- Napadi **ponavljanjem** (engl. **replay**):
	✓ Napadač „uhvati” dio podatkovnog prometa, te kasnije vrši njegovu retransmisiju (s ciljem
izvršenja neautorizirane radnje).
- **Modifikacija** poruke (engl. modification)
- Napadi uskraćivanjem usluge (Dos) (engl. denial of service) njihovih usluga i resursa

u![[Pasted image 20260826231113.png|358]]

### 🧠 Najkraće za ispit:

> **Pasivni napad** – napadač samo promatra ili prisluškuje komunikaciju i ne mijenja podatke.
> **Aktivni napad** – napadač mijenja, briše, ubacuje podatke ili ometa rad sustava.

## 7. Opišite model mrežne sigurnosti?

> Model mrežne sigurnosti opisuje kako se **komunikacija između pošiljatelja i primatelja štiti od napadača.**

Osnovni elementi modela su:

1. **Pošiljatelj** – šalje poruku ili podatke.
    
2. **Primatelj** – prima poruku.
    
3. **Mreža/komunikacijski kanal** – putem njega se podaci prenose.
    
4. **Napadač** – pokušava presresti, izmijeniti, uništiti ili lažno ubaciti podatke.
    
5. **Sigurnosna transformacija** – npr. **šifriranje** ili dodavanje digitalnog potpisa, kojom se podaci štite.
    
6. **Tajna informacija (ključ)** – koristi se za provođenje sigurnosne transformacije.
    
7. **Pouzdana treća strana** – ==može== sudjelovati u distribuciji ključeva, autentikaciji ili izdavanju certifikata.
   

![[canvas_LE_upscale_prime.jpg|725]]

**Pošiljatelj → [sigurnosna zaštita] → nesigurna mreža → [sigurnosna provjera] → Primatelj**

### Komponente

> Sve tehnike za pružanje sigurnosti uključuju dvije komponente:

• **Sigurnosna transformacija** informacije koja se šalje – enkripcija poruke i
dodavanje koda koji omogućava provjeru identiteta pošiljatelja

• **Tajna informacija** koju dijele subjekti u komunikaciji - ==kriptografski ključevi==

• **Ponekad** je za omogućavanje sigurne komunikacije nužno postojanje **treće povjerljive strane** (kojoj „vjeruju” svi sudionici u komunikaciji) – najčešće služi za sigurnu distribuciju tajne informacije (ključeva) i sigurnosnih certifikata (Trusted Third Party - TTP)

**Prilikom dizajniranja određene sigurnosne usluge moraju se provesti četiri osnovna koraka:**

1) **Dizajniranje** ==algoritma== za provođenje sigurnosne transformacije
2) **Generiranje** **tajne informacije** koja će se koristiti zajedno s algoritmom
3) Razvoj **metoda za distribuciju i dijeljenje tajne informacije**
4) Specificiranje **protokola** koji će se koristiti za komunikaciju između subjekata

## 8. Osnovna podjela malicioznog software-a?

softver koji je implementiran u računalni sustav s namjerom kompromitiranja povjerljivosti, integriteta ili dostupnosti podataka.

Razlikujemo: **parazitski** i **samostalni**

### 1. Parazitski softver 

==Ne može postojati i izvoditi se samostalno== (u pitanju su zapravo *fragmenti* programa)vec se izvodi pokretanjem „zaraženog“ programa.

U ovu skupinu, spadaju
- virusi
- logičke bombe i
- „stražnja vrata“ (*backdoor*)

- ne može funkcionirati samostalno
- moze posjedovati sposobnost **samostalnog širenja**
- Najčešće se širi izvršavanjem inficiranog programa ili slanjem zaraženih datoteka elektroničkom poštom

### 2. Samostalni (neovisni)

koji se izvodi kao neovisna aplikacija pokrenuta od strane operativnog sustava (npr. crv 🪱).

## 9. Faze zivotnog vijeka virusa

Tijekom svojeg životnog vijeka, tipičan virus prolazi kroz četiri faze:

1. **Latentna** faza: Virus je neaktivan – može ga aktivirati nekakav događaj (npr. datum, prisustvo neke datoteke i sl.)
2. Faza **propagacije**: Virus **svojom kopijom** nastoji inficirati druge programe
		Kod naprednijih virusa ove kopije nisu posve identične, s ciljem izbjegavanja i otežavanja detekcije.
3. **aktiviranja**(activate): Virus se *aktivira* s ciljem izvođenja njegove programirane funkcije
	 (okidač može biti niz različitih događaja u sustavu).
4. **izvršavanja**(execute): Virus *izvodi* programiranu funkciju 

```js
1. latent -> 2. propagation -> 3. activation -> 4. execution
```

## 10. Podjela „virusa“ prema strategiji prikrivanja?

1. **Kriptirani** virusi: virus je u svakoj svojoj instanci kriptiran **različitim (slučajnim) ključem** koji
	 je pohranjen zajedno sa virusnim kodom (na taj način se postiže ==različiti uzorak bitova== u
	 svakoj instanci virusa, što otežava njegovo otkrivanje)
2. **Prikriveni** virusi: dizajnirani su tako da se cijeli virus (ne samo njegov dio) nastoji prikriti
	 od antivirusnog programa
3. **Polimorfni** virusi: virusi koji ==mutiraju== sa svakom novom instancom, te na takav način
	 onemogućavaju detekciju pomoću poznatog „potpisa“(*signature*)
4. **Metamorfni** virusi: slično polimorfnim virusima, i metamorfni virusi mutiraju sa svakom
	 novom infekcijom, ali za razliku od polimorfnih virusa ==u potpunosti se mijenjaju i prilikom==
	 ==svake iteracije izvođenja,== što dodatno otežava njihovu detekciju

- crypted
- hidden
- polymorph = change on each copy(instance)
- metamorph = polymorphp + morph on each execution

## 11. Objasnite funkcionalnost četiri generacije antivirusnog softvera? 

1. **Prva** generacija: prvu generaciju antivirusnog softvera predstavljaju obični „skeneri“ koji prepoznaju viruse na temelju njihovog „**potpisa**“ pohranjenog u svojoj bazi. Ograničena je na detekciju poznatih virusa.
2. **Druga** generacija: ne oslanja se na „potpise“, već koristi heuristička pravila u potrazi za vjerojatnom infekcijom (npr. traže fragmente koda koji su vjerojatno pridruženi virusima, ili provjeravaju integritet datoteka pomoću kontrolnih suma ili kriptografskih hash funkcija)
3. **Treća** generacija: treća generacija antivirusnog softvera je **uvijek** **rezidentna u memoriji i** viruse prepoznaje na temelju njihove ==aktivnosti==, a ne njihove strukture
4. Četvrta generacija: posljednja generacija antivirusnog softvera uspješno ==kombinira mnoštvo antivirusnih metoda== i tehnika poznatih iz prethodnih generacija uz primjenu naprednih metoda kontrole pristupa datotekama

> **Gen 1** :LiSignature: prepoznavanje po **potpisu** iz db. 
> **Gen 2** :LiHash: heuristicka pravila(vjerojatnost) : kontrolne sume, hash funkcije
> **Gen 3** 🏃‍♀️detekcija po aktivnosti a ne po strukturi (u memoriji)
> **Gen 4** :LiShapes: kombinira antivirusne metode + metoda pristupa

## 12. Objasnite kako djeluju računalni „crvi“? 🪱

> Crv (worm 🪱) je samostalan i neovisan program, obično dizajniran tako da se širi po inficiranom sustavu i traži druge dostupne sustave preko ==mreže==.

Iskorištavaju nedostatke u sigurnosti pri prijenosu podataka pa koriste resurse mreže kako bi **napravili kopije koje potom šalju mrežom**. Pri tome potpuno blokiraju ostali promet, djeluju na cjelokupnu mrežu.

**Pojednostavljeno**, djeluju ovako:

1. 🪱 Pronađu ranjivo računalo – crv traži uređaje koji imaju određenu sigurnosnu slabost.
2. 🔓 Iskoriste ranjivost – ako pronađu nezaštićen uređaj, pokušaju se na njega ubaciti.
3. 📋 Kopiraju sami sebe – za razliku od običnog programa, **ne moraju nužno čekati da korisnik nešto pokrene.**
4. 🌐 Šire se dalje – zaraženo računalo može tražiti nova ranjiva računala i tako nastaviti širenje.
5. 💥 Izvršavaju štetne radnje – mogu usporiti mrežu i računalo, brisati ili mijenjati podatke, instalirati drugi zlonamjerni softver ili omogućiti napadaču pristup sustavu.

> Glavna razlika između crva i računalnog virusa jest u tome što se crv može širiti **samostalno**, dok se virus obično mora „prikačiti” uz neku datoteku ili program koji korisnik potom pokrene.

**Primjer**:
ako je u mreži 100 računala i svako ima istu nezaštićenu ranjivost, crv može zaraziti jedno računalo, zatim iskoristiti njega za pronalaženje drugih i vrlo brzo se proširiti cijelom mrežom.

- mogu potpuno **==blokirati==** promet, djeluju na cjelokupnu mrezu 🛑
- mogu se ==samostalno== siriti 🌐
- sire se preko ==**mreze**== :LiNetwork:

![[Pasted image 20260827213142.png|400]]

## 13. Trojanski konji?

> Trojanski konj je program ili dio programskog koda skriven unutar nekog programa i obavlja neku **prikrivenu** **funkciju.**

- **ne mogu se izvršavati samostalno**
- predstavljaju se kao legitimni program (to se najčešće postiže modifikacijom postojećeg programa ili jednostavnom zamjenom postojećeg) 
- gotovo uvijek uzrokuju štetu, no **mogu biti i bezopasni.** 

### **Dva osnovna tipa trojanaca:**

1. **legitimni program** u kojeg je napadač ubacio zloćudni programski kod koji se izvršava za vrijeme korištenja programa
2. **posebni program** koji odaje dojam da služi nečem korisnom (npr. igra ili slika), kako bi zavarao korisnika

### prema steti

- trojanci koji omogućuju **udaljeni pristup**(*remote access*)
- trojanci koji **šalju podatke**

- **proxy** trojanci 
- **FTP** trojanci

- **destruktivni** trojanci koji uništavaju datoteke i resurse računala, (rm)

- trojanci koji onemogućavaju rad **sigurnosnih programa** (disable av)
- trojanci koji omogućuju napade **uskraćivanjem usluge** (DOS)
- trojanci koji **otvaraju određene Web-stranice** (web)

## 14. Objasnite osnovne metode zavaravanja (Spoofing)?

> Spoofing (zavaravanje) je metoda napada u kojoj se napadač ==predstavlja== kao neka druga osoba, uređaj ili usluga kako bi prevario korisnika ili računalni sustav.

👉 Ukratko: spoofing = lažno predstavljanje radi obmane.

**Vrste**

- IP Address Spoofing
- **Session** highjacking (conn)
- **DNS** spoofing
- Sequence number spoofing (TCP)
- **Replay** attack (traffic)

- 🌐 IP spoofing - napadač mijenja izvornu IP adresu kako bi se njegovo računalo činilo kao drugi uređaj.
- 🖥️ DNS spoofing - korisnika se preusmjerava na krivu IP adresu
	 - Man in the middle - Kod **MIM** napada uljez se postavlja između klijenta i servera u mreži i na taj način **presreće** povjerljive informacije koje unosi klijent
	 - DNS poisoning - Kod ovog napada uljez kompromitira **DNS server** i u tablice DNS servera
- Session Hijacking - Neovlaštena osoba preuzima nadzor nad konekcijom između servera i klijenta (router)
- Sequence number spoofing - vrsta zavaravanja koja se odnosi na TCP komunikaciju (redni broj, )
	- zastita je enkripcija
- Replay attack - provodi se na taj način da uljez hvata i pohranjuje legalni promet između dva sustava i kasnije ponavlja njegov prijenos
### sequence number spoofing

> Sequence number spoofing je vrsta zavaravanja koja se odnosi na TCP komunikaciju.

* 🔢 **Sequence number** je broj koji TCP koristi za označavanje redoslijeda podataka koji se šalju.
* 🎭 Kod sequence number spoofinga napadač pokušava **pogoditi ili krivotvoriti taj broj** kako bi se njegovi paketi činili kao da dolaze od legitimnog uređaja.
* 🔓 Ako uspije, može pokušati **ubaciti podatke u postojeću komunikaciju** ili ostvariti neovlaštenu komunikaciju bez stvarnog uređaja.

👉 **Ukratko:** napadač lažira TCP sequence number kako bi **oponašao legitimnu komunikaciju između dva računala**.
🛡 **Zastita**: Enkripcija konekcije

## 15. SYN flooding napad?

> SYN flooding je vrsta DoS/DDoS napada koja iskorištava način na koji TCP uspostavlja vezu.
> Zloupotrebljava mehanizam uspostave TCP konekcije.

- SYN flooding napad onesposobljava odredišni sustav uspostavom velikog broja “poluotvorenih” konekcija
- Kod poluotvorene konekcije postavljena je zastavica SYN na koju server mora odgovoriti SYN-ACK paketom
- Budući da server može primiti ograničeni broj istovremenih konekcija, legitimnim korisnicima neće biti moguće spojiti se na server

**Zaštita**: SYN cookies, ograničavanje broja zahtjeva, vatrozid i DDoS zaštita.

![206](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Tcp_normal.svg/1920px-Tcp_normal.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail)

![261](https://upload.wikimedia.org/wikipedia/commons/9/94/Tcp_synflood.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original)

## 16. Distribuirani SYN flooding napad?


Distribuirani SYN flooding napad odvija se kroz nekoliko koraka:

1) Napadač preuzima putem Interneta kontrolu nad više hostova, te ih navodi da kontaktiraju ciljani web poslužitelj (server)
2) Preuzeti hostovi započinju sa slanjem TCP/IP `SYN` paketa (sa lažiranom izvorišnom IP adresom) ciljanom hostu (meti)
3) Svaki `SYN` paket predstavlja zahtjev za otvaranjem TCP konekcije, te na njega poslužitelj odgovara sa `SYN/ACK` paketom, pokušavajući uspostaviti TCP konekciju s lažiranom IP adresom. Preopterećenjem resursa poslužitelja pomoću ovakvih „**poluotvorenih**“ konekcija on ==postaje nedostupan njegovim legitimnim korisnicima==

**⏩**
> **vise** hostova
> **svi salju SYN zahtjev** sa laziranom IP
> `IP` adresa **ne postoji**

## 17. Distribuirani ICMP napad?

[[Internet Control Message Protocol]]

> Distribuirani ICMP napad primjer je [[DDoS]] napada koji se fokusira na iscrpljivanje
prijenosnog kapaciteta mreže i odvija se kroz nekoliko koraka:

1) Napadač preuzima putem Interneta kontrolu nad više hostova, te ih navodi na slanje ICMP ECHO REQUEST paketa sa lažiranom IP adresom grupi hostova koji se ponašaju kao „reflektori“
2) Skupina čvorova „reflektora“ nakon što je primila veliki broj (lažiranih) ECHOREQUEST paketa odgovaraju slanjem ECHO REPLY paketa koji će svi biti usmjereni ka napadnutom usmjerivaču (lažirana IP adrese)
3) Napadnuti **usmjerivač**(router) bit će „preplavljen“ paketima, te mu neće preostati raspoloživih resursa za legitimni promet

**atacker(1) -> hosts(n) -> reflectors(n*n) -> target(1)**

- vise hostova salje `ECHO` request reflektorima = $n$
- reflektori *odgovaraju* sa `REPLY` prema meti (router) = $n*n$

```
Your PC ── ICMP Echo Request ──> Server
Your PC <── ICMP Echo Reply ─── Server
```

## 18. Direktni i reflektirani DDoS napad?

> Distribuirani napadi uskraćivanjem resursa

### Direktni :LiComputer:

**Kod direktnih DDoS** napada napadač najprije mora na određeni broj lokacija (distribuiranih po Internetu) implementirati maliciozni softver (u kontekstu DDoS često ga se naziva zombi-softverom).

- Često DDoS napad uključuje **dvije razine zombi strojeva**: master zombies i slave zombies.
- U tom slučaju napadač koordinira i pokreće master zombije, dok dalje master zombiji kontroliraju slave zombije 
- otezana detekcija napadaca

master -> slave

![[Pasted image 20260827220440.png|564]]

napadac -> ==master== zombies -> ==slave== zombies -> meta

$z = n*n$

### reflektirani 🪞

> Kod reflektiranog DDoS napada uključena je **još jedna razina** (sloj) uređaja.

Reflektirani DDoS napad je napad u kojem napadač koristi posredne, **legitimne poslužitelje** ili uređaje kako bi veliki broj **odgovora** usmjerio prema žrtvi.

- **slave zombiji** laziraju IP adresu i **koriste adresu zrtve** (IP Spoofing)
- **reflektori** ==salju odgovore na adresu zrtve==
- otezana detekcija napadaca
- ukljucen vrlo velik broj racunala

🧠 **Ukratko:**
**napadac -> master zombies -> slave zombies -> reflectors -> meta**

Kako djeluje:

🎯 Napadač šalje zahtjeve velikom broju drugih uređaja/poslužitelja.
🪞 Zahtjevi su oblikovani tako da izgledaju **kao da ih je poslala žrtvina IP adresa**
📡 Ti uređaji(🪞) odgovaraju na zahtjeve i ==šalju odgovore žrtvi,== a ne napadaču
💥 Žrtva prima velik broj neželjenih odgovora i može doći do zagušenja mreže ili nedostupnosti usluge.

Zašto „reflektirani”?
Zato što napadač koristi druge sustave kao svojevrsna „ogledala” koja promet usmjeravaju prema žrtvi.

## 19. Temeljna načela kriptografije?

- **Redudancija**
- **Osvježavanje**
- **Difuzija** 
- **konfuzija**

### Redundancija

Redundancija podrazumijeva da sve poruke koje se kriptiraju pored same korisne informacije moraju sadržavati i određenu količinu zaštitne redundancije. Sluzi radi dektekcije promjene izvorne poruke.

- CRC

Redundancija je potrebna kako bi se u osnovnom smislu zaštitila izvorna poruka (eng. plaintext) od aktivnih uljeza koji možda prisluškuju komunikacijski kanal. Također redundancija nikada ne smije biti u obliku n logičkih nula dodanih na početku ili na kraju poruke. U tu svrhu se može primijeniti i CRC zaštitno kodiranje.

### Osvježavanje

Osvježavanje podrazumijeva nekakva mjerenja u samom kriptosustavu koja moraju potvrditi da je svaka poruka primljena uodređenom vremenu osvježavanja (npr. unutar 10 sekun di), čime se dokazuje da je poruka «svježa» odnosno da na kanalu ne djeluje nekakvi aktivni uljez koji pokušava zavarati prijamnika ==šaljući stare poruke==.

```
> Potvrduje se da je poruka primljena odredenom vremenskom roku, e.g. 10s.
```

**Zapamti**:
> Osvježavanje služi za sprječavanje ponovnog korištenja stare poruke.

### Difuzija

podrazumijeva takvu transformaciju šifriranja da jedan bit čistog teksta ima utjecaj na više bitova kriptoteksta. 
Odnosno, jedan bit ključa utječe na više bitova kriptoteksta.

**Primjer**

```
Čisti tekst:
AAAAAA

       ↓ šifriranje

Kriptotekst:
X7K29P
```

```
BAAAAA

       ↓ šifriranje

Kriptotekst:
Q4M81Z
```
> Promjena jednog bita/znaka može uzrokovati promjenu velikog broja bitova u rezultatu.

### Konfuzija

podrazumijeva primjenu takve transformacije šifriranja koja utječe na **statistiku kriptoteksta** tako da ona ne ovisi o statistici čistog teksta.

**Primjer**:

U običnom hrvatskom tekstu neka se slovo A pojavljuje vrlo često.
Kod dobre enkripcije ne želimo da napadač iz kriptoteksta može jednostavno zaključiti:
```
"Najčešći znak = A"
```

### ukratko

> **Redundancija** 🔁
> **Osvjezavanje** :LiRefreshCcw:: provjera vremena primanja poruke
> **Difuzija** ✖: transformacija utjece na vise bitova kriptoteksta
> **Konfuzija** 🤯: transformacija utjece tako da statistika kripta ne ovisi o statistici originala

## 20. Monoabecedna supstitucija?

Značajno povećanje prostora ključeva (broja mogućih ključeva) postiže se ukoliko se za šifriranje može koristiti **bilo koja permutacija abecede.**

Originalna abeceda zamjenjuje se zamjenskom koja se radi **permutacijom slova originalne abecede.**

Takva šifra naziva se monoabecedna supstitucijska šifra.

• Za skup od n elemenata postoji n! mogućih permutacija
• Za supstitucijsku šifru temeljenu na permutaciji 26 znakova abecede
postoju 26! (približno 4×$10^{26}$) mogućih ključeva.

**Glavni nedostatak**: budući da se isto slovo uvijek zamjenjuje istim slovom, moguće ju je razbiti analizom učestalosti slova.

**Primjer**:
A → D
B → E
C → F
D → G
…

TAJNA PORUKA → WDMQD SRUXND : A je uvijek D

**🧠 Zapamti**
> nova abeceda se dobiva **permutacijom** slova originalne
> postoji n! mogucih permutacija
> slova **uvijek imaju istu zamijenu**

## 21. Poliabecedna supstitucija?

> Kod poliabecedne supstitucije ključ određuje kojom abecedom će se šifrirati otvoreni tekst.

- Poliabecedna šifra puno je bolja od monoabecedne i uvodi važnu novinu – **ključ**
- Neovlaštena osoba poznaje algoritam šifriranja, no da bi došla do otvorenog teksta mora otkriti ključ
- Jakost poliabecedne šifre (otpornost na kriptoanalizu) raste s **dužinom ključa**

**Poliabecedna supstitucijska** šifra je metoda šifriranja u kojoj se koristi više različitih supstitucijskih alfabeta.

==Za razliku od monoabecedne supstitucije, isto slovo ne mora uvijek biti zamijenjeno istim slovom==. Zamjena ovisi o položaju slova u poruci i ključu.

Kod poliaabecedne supstitucije, ključ određuje koju ćemo zamjenu koristiti za svako slovo poruke.

- Poliabecedna šifra puno je bolja od monoabecedne i uvodi važnu novinu – **ključ**
- Neovlaštena osoba poznaje algoritam šifriranja, no da bi došla do otvorenog teksta mora otkriti ključ
- Jakost poliabecedne šifre (otpornost na kriptoanalizu) raste s dužinom ključa

👉 Za zapamtiti:
> Monoabecedna → jedno slovo = uvijek ista zamjena
> Poliabecedna → jedno slovo = može imati različite zamjene

**Primjer** Vigenèreove šifre :LiBarcode::

Poruka: NAPAD
Ključ: KLJUC

🔑 Ključ se postavlja ispod poruke:
```
Poruka:  N A P A D
Ključ:   K L J U C
```

Svako slovo ključa određuje pomak za odgovarajuće slovo poruke.

N + K → X
A + L → L
P + J → Y
itd.

Ako je ključ kraći od poruke, ponavlja se:
```
Poruka:  N A P A D N A P A D
Ključ:   K L J U C K L J U C
```

### Vigenereova tablica
```
A B C Č Ć D Đ E F G H I J K L M N O P Q R S Š T U V W X Y Z Ž
B C Č Ć D Đ E F G H I J K L M N O P Q R S Š T U V W X Y Z Ž A
C Č Ć D Đ E F G H I J K L M N O P Q R S Š T U V W X Y Z Ž A B
Č Ć D Đ E F G H I J K L M N O P Q R S Š T U V W X Y Z Ž A B C
Ć D Đ E F G H I J K L M N O P Q R S Š T U V W X Y Z Ž A B C Č
D Đ E F G H I J K L M N O P Q R S Š T U V W X Y Z Ž A B C Č Ć
Đ E F G H I J K L M N O P Q R S Š T U V W X Y Z Ž A B C Č Ć D
E F G H I J K L M N O P Q R S Š T U V W X Y Z Ž A B C Č Ć D Đ
F G H I J K L M N O P Q R S Š T U V W X Y Z Ž A B C Č Ć D Đ E
G H I J K L M N O P Q R S Š T U V W X Y Z Ž A B C Č Ć D Đ E F
H I J K L M N O P Q R S Š T U V W X Y Z Ž A B C Č Ć D Đ E F G
I J K L M N O P Q R S Š T U V W X Y Z Ž A B C Č Ć D Đ E F G H
J K L M N O P Q R S Š T U V W X Y Z Ž A B C Č Ć D Đ E F G H I
K L M N O P Q R S Š T U V W X Y Z Ž A B C Č Ć D Đ E F G H I J
L M N O P Q R S Š T U V W X Y Z Ž A B C Č Ć D Đ E F G H I J K
M N O P Q R S Š T U V W X Y Z Ž A B C Č Ć D Đ E F G H I J K L
N O P Q R S Š T U V W X Y Z Ž A B C Č Ć D Đ E F G H I J K L M
O P Q R S Š T U V W X Y Z Ž A B C Č Ć D Đ E F G H I J K L M N
P Q R S Š T U V W X Y Z Ž A B C Č Ć D Đ E F G H I J K L M N O
Q R S Š T U V W X Y Z Ž A B C Č Ć D Đ E F G H I J K L M N O P
R S Š T U V W X Y Z Ž A B C Č Ć D Đ E F G H I J K L M N O P Q
S Š T U V W X Y Z Ž A B C Č Ć D Đ E F G H I J K L M N O P Q R
Š T U V W X Y Z Ž A B C Č Ć D Đ E F G H I J K L M N O P Q R S
T U V W X Y Z Ž A B C Č Ć D Đ E F G H I J K L M N O P Q R S Š
U V W X Y Z Ž A B C Č Ć D Đ E F G H I J K L M N O P Q R S Š T
V W X Y Z Ž A B C Č Ć D Đ E F G H I J K L M N O P Q R S Š T U
W X Y Z Ž A B C Č Ć D Đ E F G H I J K L M N O P Q R S Š T U V
X Y Z Ž A B C Č Ć D Đ E F G H I J K L M N O P Q R S Š T U V W
Y Z Ž A B C Č Ć D Đ E F G H I J K L M N O P Q R S Š T U V W X
Z Ž A B C Č Ć D Đ E F G H I J K L M N O P Q R S Š T U V W X Y
Ž A B C Č Ć D Đ E F G H I J K L M N O P Q R S Š T U V W X Y Z
```

## 22. Transpozicijske šifre?

 elementi otvorenog teksta se permutiraju.

Ideja transpozicijske šifre je da se elementi otvorenog teksta ostave
nepromijenjeni, ali da se promijeni njihov međusobni položaj.

- U praksi najviše korištena transpozicijska šifra bila je **stupčana** transpozicija.
- Kod nje se otvoreni tekst upisuje u pravokutnik, a zatim se poruka čita po stupcima, ali s promijenjenim poretkom stupaca.
- Ako se posljednji redak ne ispuni do kraja, onda se prazna mjesta popune proizvoljnim slovima (nulama) koja ne mijenjaju sadržaj poruke

**Primjer**: Šifrirati otvoreni tekst KRIPTOGRAFIJA I KRIPTOANALIZA stupčanom
transpozicijom s ključem 4 3 1 2 5 7 6.

```
4 3 1 2 5 7 6
K R I P T O G
R A F I J A I
K R I P T O A
N A L I Z A X
```

sifrat: IFILPIPIRARAKRKNTJTZGIAXOAOA

## 23. Blok šifre i protočne (stream) šifre?

- **blokovne** šifre, kod kojih se obrađuje jedan po jedan ==blok elemenata== otvorenog teksta koristeći jedan te isti ključ K
- **protočne** šifre (engl. stream cipher) kod koji se elementi otvorenog
	teksta obrađuju **jedan po jedan** koristeći pritom niz ključeva (engl. **keystream**) koji se paralelno generira

**blok**

![[key_LE_upscale_prime.jpg|600]]

**stream**

![[stream_LE_upscale_prime 2.jpg|600]]


## 24. Model simetrične enkripcije?

> Enkripcija tajnim kljucem.

Sudionici u komunikaciji koriste jedinstveni tajni ključ i algoritam šifriranja.

**Prednosti i nedostaci** simetrične enkripcije:

PREDNOSTI: 
- brza,
- relativno sigurna,
- razumljiva 
- široko prihvaćena

NEDOSTACI: 
- zahtijeva razmjenu tajnog ključa
- složena za administriranje
- ne osigurava **autentikaciju** i **nerepudijaciju**

- DES (Data Encryption Standard)
▪ Razvijen 1970-tih od strane IBM-a uz potporu NSA
▪ Izvorno je koristio 56-bitne ključeve
▪ Široku primjenu našao na bankomatima i POS uređajima
- Triple DES, 3DES
▪ Trostruko kriptiranje/dekriptiranje – povećana duljina ključa
- IDEA (International Data Encryption Algorithm)**Glavni nedostatak**: budući da se isto slovo uvijek zamjenjuje istim slovom, moguće ju je razbiti analizom učestalosti slova.
▪ Nastao u Švicarskoj 1990-tih godina
▪ Koristi 128-bitne ključeve
- RC2, RC4, RC5 (Rivest Cipher)
▪ Koristi ključeve varijabilne duljine, najčešće 128 bita
▪ Koristi se u Internet preglednicima (browserima)
- Advanced Encryption Standard (AES)
▪ NIST - novi standard 2001. godine
▪ tri duljine ključeva: 128, 192 i 256 bita

## Asimetrična enkripcija (enkripcija javnim ključem)

Koncept asimetrične kriptografije uvode W. Diffie i M.Hellman (Stanford University) 1976. godine.

- koristi se par ključeva, privatni ili tajni (private key) i javni ključ (public key)
- Poznavanje javnog ključa ne otkriva privatni ključ

- Poruka kriptirana javnim ključem može se dekriptirati jedino tajnim ključem
- Poruka kriptirana tajnim ključem može se dekriptirati isključivo odgovarajućim javnim kljucem

**Prednosti** i nedostaci enkripcije tajnim ključem:

PREDNOSTI: ne zahtijeva razmjenu tajnog ključa, pruža mehanizme autentikacije i nerepudijacije

NEDOSTACI: sporija i računski zahtjevnija, zahtijeva certifikat

**Primjer**

Ako Ana želi poslati Bobu tajnu poruku:
```
Ana → [Bobov javni ključ] → šifrirana poruka → Bob
                                                    ↓
                                             [Bobov privatni ključ]
                                                    ↓
                                              izvorna poruka
```

**dodatno** Diffie-Helman: https://www.youtube.com/watch?v=NmM9HA2MQGI

- Diffie – Hellman
- RSA (Rivest, Shamir, Adelman)
- DSA (Digital Signature Algorithm)

## 26. Kerberos razmjena ključeva?

> **key server** protokol

Kerberos je mrežni autentikacijski protokol za razmjenu ključeva (trusted key server) razvijen na MIT-u.

- Koristi **simetricnu** kriptografiju.
- Kerberos koristi centralizirani pouzdani centar u distribuiranoj mreži – to je distribucijski centar za ključeve (Key Distribution Centre, KDC)
- KDC sadrži bazu podataka o korisnicima, uslugama i enkripcijskim ključevima

**Praktičan** **primjer**

Ana se želi spojiti na poslužitelj za datoteke.

```
        KDC
       /   \
      /     \
    Ana    File server
```

1. Ana se prijavljuje
Ana šalje zahtjev KDC-u za dokazivanje identiteta.

2. KDC izdaje Ticket Granting Ticket (**TGT**) 🎫
KDC potvrđuje Anin identitet i daje joj TGT koji može koristiti za dobivanje pristupa različitim servisima.

3. Ana traži pristup **file serveru**
Pomoću TGT-a traži od KDC-a ulaznicu (**service ticket)** za file server.

4. KDC izdaje service ticket 🎫
KDC generira i šalje Ani ticket koji je namijenjen file serveru.

5. Ana šalje ticket file serveru
File server provjerava ticket i, ako je valjan, omogućuje Ani pristup.

🔐 Gdje je ključ?
**KDC može generirati sesijski ključ koji Ana i file server koriste za sigurnu komunikaciju.**

```sh
Ana → KDC
     "Trebam pristup file serveru"

KDC → Ana
     "Evo ti ticket + sesijski ključ"

Ana → File server
     "Evo servis ticketa"

File server → Ana
     "Ticket je valjan ✓"

Ana ↔ File server
     🔐 sigurna komunikacija
```

## 27. Vatrozid i funkcionalnost vatrozida?

![[Pasted image 20260828205248.png|558]]

Vatrozid (Firewall) predstavlja jedan od najvažnijih sigurnosnih mehanizama koji se koristi na računalima povezanim u mrežu.

Vatrozid je sigurnosni sustav koji omogućava protok podataka od zaštićenog računala (mreže) ili prema njemu, a istovremeno onemogućava neovlašteno pristupanje računalu ili mreži

To je mrežni uređaj koji može **dopuštati**, **zabranjivati** ili **prosljeđivati** mrežne **konekcije** u skladu s sigurnosnom politikom organizacije koja ga koristi.

Vatrozidi mogu biti **hardverski** ili **softverski**.

**Prilikom dizajniranja vatrozida nastoje** se postići sljedeći ciljevi:

• **Sav promet koji ulazi u mrežu ili iz nje izlazi mora proći kroz vatrozid** 
• Propuštat će se samo **autorizirani** promet, sukladno lokalnoj sigurnosnoj politici
• ==Vatrozid sam mora biti otporan== na napade i kompromitaciju od strane napadača

Pristup uslugama može se kontrolirati i sukladno tome koji korisnik pokušava pristupiti usluzi, pa vatrozid ujedno omogućava
i **kontrolu korisnika** (user control).

Kontrola korisnika najčešće se primjenjuje na lokalne („unutarnje“) korisnike, ali moguće ju je primijeniti i na dolazni promet od eksternih korisnika (koji u tom slučaju moraju koristiti neku od tehnika za sigurnu autentifikaciju).

Vatrozid može **kontrolirati i način na koji se pojedine usluge koriste,** 
npr. omogućiti eksterni pristup samo dijelu podataka na lokalnom web poslužitelju (behaviour control). 


**druge funkcije**

- NAT
- IPsec - VPN

### ponasanje 

Vatrozid se ponaša kao filter mrežnog prometa.

Može se ponašati kao **pozitivni** filter (propušta samo pakete koji zadovoljavaju određene kriterije) ili 
kao **negativni** filter (odbacuje pakete koji zadovoljavaju odgovarajuće kriterije).

Ovisno o tipu, vatrozid može analizirati jedno ili više protokolnih zaglavlja u svakom paketu, podatkovni dio paketa ili uzorak generiran slijedom paketa.

### zadatak

Osnovni zadatak vatrozida je da kontrolira promet između računalnih mreža s različitim stupnjevima povjerenja. 

Obično se radi o dvije mreže:

- **Internetu**, koji predstavlja zonu u kojoj povjerenje i ne postoji i
- **privatnoj mreži**, u kojoj je stupanj povjerenja iznimno visok.

## 28. Konfiguracije vatrozida prema kontrolnoj strategiji?

Ovisno o namjeni i razini zaštite pojedinih dijelova mreže, postoji više različitih načina implementacije vatrozida u mreži:

- Privatne mreže bez usluga vanjskim korisnicima
- Privatne mreže koje pružaju usluge vanjskim korisnicima
- Demilitarizirana zona

### Privatne mreže bez usluga vanjskim korisnicima 

![[Pasted image 20260828205825.png|685]]

Za privatne lokalne mreže koje vanjskim korisnicima ne pružaju nikakve usluge i ne podržava virtualne privatne mreže, vatrozid se može konfigurirati tako da propušta pakete koji potječu s privatne mreže i pripadajuće povratne pakete (pokušaji uspostave veze izvana će biti blokirani vatrozidom)

### Privatne mreže koje pružaju usluge vanjskim korisnicima

Ako organizacija pruža određene usluge vanjskim korisnicima (npr. web, FTP, DNS, elektroničku poštu) ili
omogućuje konfiguriranje virtualnih privatnih mreža, zaštitu se može realizirati na sljedeće načine:

- poslužiteljska infrastruktura izvan privatne mreže
- poslužiteljska infrastruktura unutar privatne mreže - od javne je mreže odvojena vatrozidom 
- korištenjem dva vatrozida
- korištenjem demilitarizirane zone.

**poslužiteljska infrastruktura izvan privatne mreže**

Računala koja se nalaze izvan privatne mreže mogu biti izložena različitim prijetnjama.

![[Pasted image 20260828210112.png|691]]


**poslužiteljska infrastruktura unutar privatne mreže - od javne je mreže odvojena vatrozidom**

![[Pasted image 20260828210302.png|611]]


**korištenjem dva vatrozida**

![[Pasted image 20260828210430.png|750]]

Vanjski vatrozid spaja se na javnu mrežu i poslužiteljsku mrežu, a unutarnji na privatnu mrežu.

- Unutarnji vatrozid prema unutra propušta samo one pakete koji su dio neke uspostavljene veze (inicirane iz privatne mreže).
- Vanjski vatrozid mora propuštati još i pakete koji su namijenjeni poslužiteljima

- Između eksternog i internog vatrozida nalazi se „demilitarizirana zona“ (**DMZ**)
- U demilitariziranu zonu obično se postavljaju poslužitelji koji moraju biti dostupni izvana, a ipak moraju imati
odgovarajuću razinu zaštite.

**Demilitarizirana zona**

Alternativa - vatrozidu se dodaje i treće sučelje, putem kojeg je spojen na mrežu poslužitelja, tzv.
demilitariziranu zonu.
Sučelje prema privatnoj mreži propušta pakete koji pripadaju uspostavljenoj vezi (iniciranoj iz privatne
mreže), dok prema poslužiteljima omogućuju slanje početnih paketa i s privatne mreže i s javne mreže.

- 3. sucelje prema mrezi posluzitelja(DMZ)
- sucelje omogucuje slanje paketa s privatne i javne mreze

## 29. Distribuirani vatrozid?

Vatrozid može biti i distribuirane prirode.

Distribuirana konfiguracija vatrozida uključuje **pojedinačne vatrozide (hardverske i softverske) distribuirane po mreži** koji rade zajedno pod ==zajedničkom centraliziranom administracijom==.

![[Pasted image 20260828210946.png|400]]

```
          Internet
             │
        ┌────┴────┐
        │ Router  │
        └────┬────┘
             │
     ┌───────┼───────┐
     ↓       ↓       ↓
   PC 1    Server   PC 2
    🔥       🔥       🔥
   FW       FW       FW
```

Svaki uređaj može imati vlastita pravila koja određuju koji promet smije ući ili izaći.

**Primjer**:

🖥️ PC 1 → smije pristupati webu
🗄️ Server → prihvaća samo određene veze
🖥️ PC 2 → ne smije komunicirati s određenim uređajima

### **Prednosti**

🛡️ Bolja zaštita – ==napadač ne može zaobići zaštitu samo napadom na jedan centralni vatrozid==
==🔄 Pravila se mogu centralno definirati i **distribuirati** na više uređaja==

📈 Skalabilnost – lakše se primjenjuje u velikim mrežama
📍 Zaštita pojedinačnih uređaja – svaki uređaj može kontrolirati vlastiti promet

## 30. Generički model procesa IDS sustava?

> Intrusion Detection Systems

softverski ili hardverski sustav koji automatizira postupak nadzora **nad događajima** u računalnom sustavu ili mreži, analizirajući ih u potrazi za naznakama sigurnosnih problema.

Funkcioniranje IDS sustava može se razložiti na tri glavne funkcionalne komponente:

1. **Prikupljanje** informacija
	- mrezni promet
	- logovi
	- dogadaji
	- aktivnosti korisnika
2. **Analiza** - dva najčešća pristupa su 
	- detekcija zlouporabe (misuse detection) i
	- detekcija anomalija (anomaly detection)
3. Reakcija (odgovor) - uključuje aktivne i pasivne mjere

##  31. IDS sustavi prema izvoru informacija?

- **Mrežno**-orijentirani IDS sustavi (Network-Based IDS,NIDS)
- **Računalno**-orijentirani IDS sustavi (Host-Based IDS, HIDS)
- **Aplikacijski**-orijentirani IDS sustavi (Application-BasedIDS, AIDS) – zapravo, predstavljaju podvrstu HIDS sustava

### Mrezno orijentirani

> NIDS sustavi detektiraju napade hvatanjem i analizom mrežnih paketa

- NIDS sustav može činiti i više senzora ili hostova postavljenih na različite pozicije unutar mreže
- Ove jedinice imaju zadatak nadzirati mrežni promet, provoditi lokalnu analizu te slati izvještaje središnjoj upravljačkoj konzoli
- Sve senzorske jedinice moraju raditi u prikrivenom (stealth) modu kako bi napadač što teže otkrio njihovu prisutnost i točnu lokaciju

**Prednosti**

- Velika mreža može se nadzirati i štititi sa samo nekoliko dobro postavljenih NIDS sustava
- Postavljanje NIDS sustava ima vrlo mali utjecaj na postojeću mrežu (budući da su to uglavnom pasivni uređaji koji
“osluškuju” mrežni promet bez ikakvih utjecaja i smetnji za normalan rad mreže)
- Moguće je implementirati NIDS sustave koji će postizati vrlo visoku razinu zaštite od napada, a istovremeno biti vrlo **dobro prikriveni** i teško vidljivi napadaču

**Nedostatci**

U velikim mrežama i mrežama s velikom količinom prometa NIDS sustav može imati poteškoća prilikom procesiranja svih paketa
- Nisu pogodni za mreže s puno malih segmenata jer se time umanjuje njihova mogućnost istovremene zaštite velikog broja računala
- NIDS sustavi ne mogu analizirati enkriptirane informacije
- Većina NIDS sustava mogu samo detektirati pokušaj napada, no ne i odrediti uspješnost napada
- Neki NIDS sustavi imaju problema prilikom napada koji uključuju fragmentirane pakete

### Racunalno Orijentirani (HIDS)

HIDS sustavi prikupljaju podatke sa pojedinačnih računala, što im omogućava veću preciznost i pouzdanost
prilikom analize podataka.

- **moze točno odrediti koji procesi i koji korisnici** sudjeluju u pojedinom napadu na računalo
- **može vidjeti i posljedice pokušanog napada**

**Prednosti**

- u stanju su detektirati neke pokušaje napada koji su nevidljivi NIDS sustavu
- ==mogu funkcionirati u mrežama u kojima je promet enkriptiran==
- Na HIDS sustave ne utječe podjela mreže na manje segmente

- **prateći sistemske zapise** (audit trail i system log) može pomoći pri detekciji napada malicioznim programima koji narušavaju integritet softvera

**Mane**

- HIDS sustavima **teže je upravljati i kontrolirati** njihov rad jer je potrebno konfigurirati i upravljati nadzor svakog pojedinačnog računala
-  nisu pogodni za detekciju pokušaja skeniranja cijele mreže

- Postoji opasnost da se prilikom napada napadne i onesposobi i sam HIDS sustav
	- mogu biti onemogućeni pomoću nekih tipova napada uskraćivanjem resursa (**Denial-of-Service**)
- mogu **degradirati performanse** računala kojeg nadziru budući da koriste njegove resurse

### Aplikacijski orijentirani

> predstavljaju podvrstu računalno-orijentiranih IDS sustava (HIDS).

Analiziraju događaje unutar aplikacije – najčešće izvore informacija za AIDS sustave predstavljaju aplikacijski dnevnički zapisi (log files).
Lako otkrivaju sumnjivo ponašanje autoriziranih korisnika koji prekoračuju svoje ovlasti.

**Prednosti**

- mogu nadzirati interakciju između korisnika i aplikacije, što im omogućava praćenje neautoriziranih aktivnosti pojedinih korisnika
- često mogu raditi u enkriptiranim okruženjima (budući da se njihova interakcija s aplikacijom odvija u točki gdje su informacije nekriptirane)

**Mane**

- mogu biti ranjiviji od HIDS sustava (budući da **dnevnički zapisi** aplikacija nisu tako dobro zaštićeni kao oni operativnog sustava, koje koristi HIDS)
- često nadziru događaje na apstraktnoj korisničkoj razini pa obično nisu u stanju detektirati neki maliciozni softver

## 32. Načini detekcije upada kod IDS sustava?

 Kod IDS sustava postoje dva osnovna pristupa analizi događaja s ciljem otkrivanja napada:

- ⚫ Detekcija **zlouporabe** (misuse detection)
- ⚫ Detekcija **anomalija** (anomaly detection)

### zlouporaba

Analizira se aktivnost sustava u potrazi za događajima ili nizovima događaja koji odgovaraju predefiniranom uzorku koji opisuje poznati napad (“potpis”, signature)

Ovakvi sustavi pokazuju se vrlo učinkovitim u otkrivanju napada, pri čemu stvaraju vrlo mali broj lažnih uzbuna.

**Veliki nedostatak**: mogu detektirati samo poznate napade (za koje postoji predefinirani uzorak događaja, “potpis”), pa se stalno moraju nadograđivati “potpisima” novih
napada.

### anomalija

Sustavi temeljeni na tehnici detekcije anomalija identificiraju nenormalna i **neobična ponašanja** (anomalije) na računalu ili mreži. Trazi odstupanja.

==Funkcioniraju na pretpostavci da se napadi razlikuju od “normalnih”, legitimnih aktivnosti u sustavu i otkrivaju napade na temelju identifikacije ovih razlika.==

- za referencu služi profil koji reprezentira normalno ponašanje sustava, a koji se formira tako što se neko vrijeme prati ponašanje korisnika, računala ili mreže u normalnom radu
- Ovakav sustav može otkriti simptome pojedinih napada bez poznavanja specifičnih detalja o napadu
-  Nedostatak ove tehnike je **veći broj lažnih alarma** zbog nepredvidivog ponašanja korisnika i mreža
- Može otkriti i nove/nepoznate napade

**Primjer**: korisnik se obično prijavljuje jednom dnevno, a odjednom sustav bilježi stotine pokušaja prijave.

## 33. Pozicioniranje IDS sustava?

> Iznimno je važno pravilno implementirati IDS sustave u mrežu, što podrazumijeva i njihovo pravilno **pozicioniranje**.

Samo pravilno podešeni i ispravno pozicionirani IDS sustavi mogu postići svoju svrhu – zaštititi računalne sustave u lokalnoj mreži od napada izvana.

Za potpunu zaštitu potrebno je kombinirati NIDS i HIDS sustave.

![[Pasted image 20260830111804.png|507]]

### Lokacije

- Lokacija 1: NIDS sustav postavljen iza eksternog vatrozida 🔥(vatrozida koji razdvaja lokalnu mrežu od ostatka Interneta)
- Lokacija 2: NIDS sustav postavljen ispred eksternog vatrozida :LiBrickWall:
- Lokacija 3: NIDS sustav postavljen na jezgrene dijelove lokalne mreže (backbones :LiBone:)
- Lokacija 4: NIDS sustav postavljen na kritične podmreže 🕸 (subnets)

U idealnom slučaju trebalo bi postaviti HIDS sustav na svako računalo (host) unutar lokalne mreže, što bi bilo prilično skupo rješenje koje bi zahtijevalo i puno vremena za instalaciju, konfiguraciju i održavanje.

Zato se HIDS sustavi najprije instaliraju na najkritičnija računala (obicno serveri 🖥)

Ukoliko se HIDS sustavi instaliraju na više računala unutar mreže, poželjno je sustav projektirati na takav način da se formira središnje upravljačko mjesto.

## 34. Računala i mreže mamci, Honeypot sustavi?

> Honeypots, Honeynets

⚫ Mreže “mamci”
⚫ cilj:
	⚫ navesti napadača na krivi trag
	⚫ identificirati napadača
	⚫ pratiti napad i učiti iz napada

>  potrebno je izgraditi što uvjerljiviji sustav.

![[Pasted image 20260828214550.png|548]]

### Honeypot

> Honeypot je informacijski resurs čija vrijednost leži upravo u neautoriziranoj ili zabranjenoj upotrebi tog resursa.

- U mrežu se postavlja uređaj koji nema nikakvu drugu svrhu osim da predstavlja žrtvu napada.
- Honeypotovi nemaju nikakvu autoriziranu aktivnosti i produkcijsku vrijednost.
- Teoretski, oni ne bi trebali vidjeti nikakav promet. To zapravo znači da je **gotovo svaka interakcija s honeypotom neautorizirana ili zlonamjerna aktivnost.**

Vrijednost honeypota ogleda se u tri različita dijela sigurnosti:
- **prevenciji**
- **otkrivanju**
- **reakciji**

## 35. Sustavi za analizu ranjivosti?

Cilj je utvrditi trenutnu razinu izloženosti i jesu li trenutne mjere sigurnosti dovoljne u smislu povjerljivosti, integriteta i dostupnosti.

Ispitivanje ranjivosti može se izvoditi kao eksterno ispitivanje, u kojem se pretpostavlja nepoznavanje informacija vezanih za
sustav koji se napada i interno ispitivanje u kojem se preuzima uloga nekog zaposlenika.

**Pronađene ranjivosti mogu se klasificirati** s obzirom na razinu ozbiljnosti i rizika kojeg pružaju organizaciji:

- Pronalazak ranjivosti prije napadača kako bi se sustav stigao na vrijeme zaštititi i kako bi se spriječila šteta.
- Ispitivanje sustava prije nego što mu se omogući pristup internetu – testiranje novih tehnologija.
- Potvrđivanje sigurnosti sustava i izvještavanje menadžmenta o problemima.
- Neki standardi i regulacije zahtijevaju obavezno vanjsko sigurnosno ispitivanje

**Zapamti**
> **cilj** je utvrditi razinu izlozenosti i jesu li trenutne mjere sigunosti adekvatne.
> **eksterno ispitivanje ili interno**
> **Klasifikacija** po riziku -  
> Bitno je pronaci ranjivosti prije napadaca
> neki standardi zahtijevaju vanjsko sigurnosno ispitivanje

## 36. Objasnite osnovne korake u ispitivanju ranjivosti?


- Planiranje i pripremanje
- Prikupljanje informacija i analiza
- Otkrivanje ranjivosti
- Pokušaj napada
- Analiza i izvještavanje
- Čišćenje

### Planiranje i priprema

- Utvrditi doseg i cilj ispitivanja ranjivosti kao i osobe uključene u samu provedbu ispitivanja.
- Vrijeme trajanja i provedbe ispitivanja.

- Utvrditi **vrste** ispitivanja koje će se izvoditi nad sustavom.
- Određivanje koje se **osoblje** mora, i mora li se uopće, informirati prije provođenja ispitivanja.
- **Pravna regulativa** ispitivanja - dokument kojim će se odobriti ispitivanja

### Prikupljanje informacija i analiza

Cilj je prikupiti što više informacija o sustavima i mrežama koje su meta ispitivanja.

Očekivane informacije koje mogu biti od koristi su: domenska imena, imena poslužitelja, informacije o pružatelju
internetske usluge (ISP), IP adrese domaćina i ostale.

Sljedece je ispitivanje otvorenosti vrata (**portova**).

### Otkrivanje ranjivosti

> Na temelju informacija prikupljenih u prethodnom koraku ispituje se postojanje ranjivosti na manualan ili automatizirani način.

- **Manualan** način od ispitivača zahtijeva dobro znanje o konkretnim uslugama, programima i drugim prisutnostima na sustavu kako bi znao pronaći ranjivosti.
- **Automatizirani** način se provodi pomoću alata koji ispisuju listu svih pronađenih ranjivosti.

### Pokušaj napada 

Sljedeći korak je identifikacija prikladnih meta za napad. Potrebno je procijeniti potrebno vrijeme i resurse
potrebne za izvođenje napada.

Postoje alati koji omogućuju napade na ranjivosti no često zahtijevaju dodatne korisničke prilagodbe.

Moguce je i napad usmjeriti na ljudski element kroz socijalni inženjering.

### Analiza i izvještavanje 

Završno izvješće treba sadržavati pregled provedenog procesa ispitivanja ranjivosti, analizu pronađenih ranjivosti i
komentare na njih.

Potrebno je naznačiti koje su ranjivosti bitne, a koje manje. 

Takav pristup pomaže organizaciji kod odlučivanja koje ranjivosti treba ispraviti sad, a koje mogu ostaviti za kasnije ako trenutno nemaju dovoljno resursa da ih otklone.

###  Čišćenje

U zadnjem koraku čiste se podaci i promjene koji su nastale kao posljedica izvođenja 
ispitivanja ranjivosti: 
npr. korisnički računi tijekom provođenja ispitivanja ili drugi slični događaji koji su bili korišteni pri napadu.

Važno je sačuvati detaljan opis provedenih koraka kod provođenja ispitivanja kako bi se postupak čišćenja mogao provesti ispravno i u cijelosti.

Postupak čišćenja može biti i potpuni backup i vraćanje podataka.

## 37. Kontrola pristupa u mrežu?

- Fizička sigurnost opreme
- Identifikacija i autentikacija
- Zaporke, PIN-ovi, tokeni
- Sustavi s jedinstvenom prijavom (Single sign-on - SSO)
	- korisnik se prijavljuje na središnji sustav jedinstvenom zaporkom
	- središnji sustav dodjeljuje dozvole za pristup ostalim uslugama
- Kontrola pristupa mreži
	- RADIUS, NAC-NAP

### NAC - NAP

> Sigurnost mreže ovisi i o korisničkim računalima u mreži. 

- NAC (Network Addmission Control) – Cisco
- NAP (Network Access Protection) – Microsoft

ograničavanje pristupa mreži nesigurnim računalima, politike pristupa zasnovane na:
- posjedovanju sigurnosnih zakrpa
- obnavljanju virusnih definicija
- postojećim aplikacijama,…

## Sigurnosne prijetnje i razine zaštite sustava?

- Fizička zaštita mrežne opreme
- Fizička razina
- Podatkovna razina
- Mrežna razina
- Transportna razina
- Korisnička razina
- Operacijski sustav i sigurnost korisnika

## 39. Fizička zaštita mrežne opreme i zaštita na fizičkoj razini?

- Fizička zaštita mrežne opreme podrazumijeva zaštitu od **neovlaštenog pristupa ili krađe**.

- Zaštita od **elementarnih nepogoda** ili ublažavanje njihovih posljedica moguće je uvođenjem dodatnih uređaja.

- Moguće je uvesti uređaje za neprekidno napajanje (**UPS**), prenaponsku zaštitu, uređaje za otkrivanje i zaštitu od požara, 
- potrebno je i redovito praviti sigurnosne kopije podataka (backup).

- **Sigurnosne kopije** omogućavaju obnavljanje oštećenih ili izbrisanih datoteka, a moraju biti redovito održavane i obnavljane tako da sadrže sve bitne i aktualne izmjene datoteka

### Prijetnje i zaštita na fizičkoj razini

Mjere sigurnosti na fizičkoj razini bliske su fizičkoj zaštiti komponenti mreže, uglavnom ==komunikacijskih kanala.==

| NAPAD                                       | OBRANA                                                                                       | NAPOMENA                                                                                 |
| ------------------------------------------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Neovlašten pristup fizičkom mediju          | Odspojiti utičnice koje se ne koriste. Zastiti pristup uticnicama. Koristiti opticke kablove | Onemogućava neovlašteno spajanje opreme, a time i postavljanje uređaja za prisluškivanje |
| Uništavanje fizičkog medija ili prekid veza | Zaštititi kanalice. Osigurati alternativne puteve                                            |                                                                                          |
| Oštećenje opreme (kroz utičnice)            | Odspojiti utičnice koje se ne koriste                                                        |                                                                                          |
| Interferencija signala                      | Odspojiti mrežne segmente sa smetnjama. Poveca                                               |                                                                                          |
| Interferencija signala                      | Povećati pouzdanost veza                                                                     |                                                                                          |


## 40. Prijetnje i zaštite na podatkovnoj razini?

| NAPAD                                           | OBRANA                                                                                                                 | NAPOMENA                                                                                                                                                               |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Neovlašteni pristup kroz javnu telefonsku mrežu | Provjera identifikacije i autorizacija korisnika                                                                       |                                                                                                                                                                        |
| Hvatanje paketa podataka (data capture)         | Onemogućiti pokretanje programa za hvatanje paketa (npr. programa kao što je `tcpdump`)                                |                                                                                                                                                                        |
| Hvatanje paketa podataka (data capture)         | Pratiti stanje mrežnih priključaka opreme s ciljem detekcije promiskuitetnog načina rada što upućuje na prisluškivanje | U **promiskuitetnom načinu rada (promiscuous mode)** mrežna kartica pokušava prihvatiti i obrađivati **pakete koji nisu namijenjeni tom računalu**.(tcpdump,wireshark) |
| Hvatanje paketa podataka (data capture)         | Koristiti LAN prospojnike koji omogućavaju nadzor distribucije okvira dijeljenjem mreže na više zona kolizije          |                                                                                                                                                                        |
| Hvatanje paketa podataka (data capture)         | Koristiti šifriranje na višim razinama                                                                                 | Uhvaćeni podaci postaju beskorisni                                                                                                                                     |
| Preplavljivanje lokalne mreže podataka          | Pratiti promet po lokalnoj mreži                                                                                       | U tom slučaju treba koristiti programe za hvatanje paketa                                                                                                              |
| Preplavljivanje lokalne mreže podataka          | Koristiti LAN prospojnike koji omogućavaju selektivno uskraćivanje usluga nepovjerljivim ili nekorektnim korisnicima   |                                                                                                                                                                        |

# 41. Prijetnje i zaštita na mrežnoj razini?

Na mrežnoj razini od posebnog su značaja tehnike zaštitnog kodiranja, kao i
postavljanje vatrozida s ciljem zaštite pristupa mreži.

• Zaštitno kodiranje (šifriranje, kriptiranje) predstavlja postupak promjene
podataka iz jednog oblika u drugi nečitljivi, s ciljem prikrivanja informacije.

• Vatrozid (firewall) ograničava komunikaciju jednog dijela mreže s drugim, ili
jedne mreže s drugim mrežama. Temelji se na ograničenom i selektivnom
propuštanju paketa upućenih nekom od uređaja na vlastitoj mreži. Kako je
pristup mreži moguć isključivo preko vatrozida, on predstavlja osnovnu točku
koju na sustavu treba štititi, a puno je jednostavnije dobro osigurati jednu
točku u sustavu, nego sve komponente sustava

**Bitno**: kodiranje, vatrozid

### Vrste Napada

| NAPAD                                                              | OBRANA                                                                              | NAPOMENA                                                                                           |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Krivo ili lažno predstavljanje (IP spoofing, false identification) | Koristiti šifriranje                                                                |                                                                                                    |
| Krivo ili lažno predstavljanje (IP spoofing, false identification) | Onemogućiti usluge koje provjeru identiteta korisnika temelje na podacima IP razine | Na taj način onemogućava se ubacivanje krivih ili **hvatanje izvornih podataka** na višim razinama |
| Preuzimanje uspostavljene veze (Connection hijacking)              | Koristiti šifriranje                                                                |                                                                                                    |
| Neovlašteni pristup računalima                                     | Koristiti vatrozid (filtriranje paketa i privatne mreže)                            | Onemogućiti sve pokušaje spajanja s nepovjerljivih računala                                        |
| Preplavljivanje IP paketa (s udaljenih mreža)                      | Koristiti IP vatrozid                                                               |                                                                                                    |
| Neovlašteno mijenjanje tablica usmjeravanja                        | Ograničiti pristup i prava administriranja usmjerivačkih uređaja (router)           | Npr. omogućiti pristup i mogućnost konfiguriranja samo preko konzole                               |

# 42. Prijetnje i zaštite na transportnoj razini?

Na razini transporta, sigurnosni aspekti su slični onima na mrežnoj, a
zaštita sustava ostvaruje se preko posrednika (proxy) koji vezu uspostavljaju umjesto samog korisnika.

| NAPAD                                                                    | OBRANA                                                                  | NAPOMENA                                                 |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------- | -------------------------------------------------------- |
| Krivo predstavljanje i preuzimanje TCP veza (TCP spoofing and hijacking) | Isto kao i na mrežnoj razini                                            |                                                          |
| **Neovlašteni pristup računalima**                                       | Koristiti vatrozid na transportnoj razini i koncept privatnih mreža     | Npr. proxy SOCKS za uspostavu TCP veza umjesto korisnika |
| **Neovlašteni pristup računalima**                                       | Definirati listu računala koja imaju pravo pristupiti štićenom računalu |                                                          |

# 43. Na korisnickoj(aplikacijskoj) razini

### Telnet

| NAPAD                                                                                                                                     | OBRANA                                                                                                       | NAPOMENA                                                                                                                        |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| Neovlašteni pristup korisnika (uporaba, mijenjanje ili uništavanje korisnikovih podataka)                                                 | Definiranje pravila o izboru i duljini trajanja lozinke                                                      | Do lozinke se može doći hvatanjem paketa na nižim razinama, pogađanjem na osnovu poznavanja korisnika ili korisnikovih podataka |
| Neovlašteni pristup korisnika                                                                                                             | Korištenje jednokratnih lozinki                                                                              |                                                                                                                                 |
| Neovlašteni pristup korisnika                                                                                                             | Zabrana pristupa s nepovjerljivih računala                                                                   |                                                                                                                                 |
| Neovlašteni pristup u ime administratora sustava (s ciljem promjene podataka sustava ili instalacije programske podrške štetne za sustav) | Pravila o lozinkama                                                                                          | Cilj je onemogućiti neovlašteno stjecanje administratorskih prava                                                               |
| Neovlašteni pristup u ime administratora sustava                                                                                          | Pristup kao administrator sustava dozvoliti samo s konzole i biranog terminala                               |                                                                                                                                 |
| Neovlašteni pristup u ime administratora sustava                                                                                          | Otklanjati nedostatke programske podrške                                                                     |                                                                                                                                 |
| Neovlašteni pristup u ime administratora sustava                                                                                          | Praćenje rada sustava i aktivnosti korisnika kroz datoteke koje bilježe pristup i korištenje resursa sustava | Otkrivanje nedozvoljenih aktivnosti                                                                                             |

### FTP

| NAPAD                                                                                        | OBRANA                                                                         | NAPOMENA                                                                          |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| **Neovlašteni** **pristup** korisnika (kopiranje, stavljanje, zamjena ili brisanje podataka) | Kao i za Telnet poslužitelj – ograničiti prava pristupa i provjeravati sadržaj | Postavljene datoteke mogu sadržavati viruse, crve ili trojanske konje             |
| **Zlouporaba pristupa javnim FTP poslužiteljima**                                            | Pažljiva uspostava javnog FTP poslužitelja                                     | Cilj je izbjeći pristup datotečnom sustavu koji nije namijenjen običnom korisniku |

### Email

| NAPAD                                                                             | OBRANA                                                                                                            | NAPOMENA                                                                               |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **Krivo predstavljanje** (slanje elektroničke pošte pod tuđim korisničkim imenom) | 1. Zabrana uporabe SMTP protokola<br>2. Pravilna konfiguracija programa za razmjenu elektroničke pošte (sendmail) |                                                                                        |
| Neovlašteni pristup e-mail porukama korisnika                                     | Koristiti **šifriranje**,                                                                                         | GPP                                                                                    |
| Zasipanje porukama (E-mail **spamming**)                                          | **Filtriranje prometa**                                                                                           | Nema dovoljno učinkovite obrane; primjenjuju se dopuštene tehnike slanja e-mail poruka |

### Web

| NAPAD                                                | OBRANA                                                          | NAPOMENA                                                         |
| ---------------------------------------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------- |
| Pregled sadržaja direktorija                         | Zabraniti pristup                                               | Sprječava uvid u sadržaj direktorija                             |
| Zlonamjerni `cgi-bin` programi                       | Dozvoljavati samo provjerene CGI programe                       | Zaštita WWW poslužitelja od neovlaštenog pristupa ili zlouporabe |
| Loše napisane CGI-bin i JavaScript komandne datoteke | Temeljita provjera kôda uz ispravljanje pogrešaka               | Zaštita WWW poslužitelja od neovlaštenog pristupa ili zlouporabe |
| Zlonamjerni Java appleti                             | **Web pregledniku zabraniti izvršavanje Java programa**         | Zaštita računala klijenta                                        |
| Neovlašteno hvatanje podataka                        | Primjenjivati **šifriranje** za prijenos tajnih podataka(HTTPS) |                                                                  |

# 44. Objasnite sigurnosne probleme na MAC razini u WLAN mrežama?

![[Pasted image 20260901223959.png|771]]

- DIFS: Distributed coordination function Inter Frame Space
- SIFS: Short IFS – za akcije neposrednog odgovora
- NAV: Network Allocation Vector

### DIFS

Distributed Inter-Frame Space

Kada uređaj želi poslati podatke:

1. provjeri je li kanal slobodan
2. pričeka DIFS
3. ako je kanal i dalje slobodan, može pokušati poslati podatke
4. ako više uređaja želi slati, koristi se još i slučajno čekanje (**backoff**)

```
Kanal slobodan
     │
     ▼
  [ DIFS ]
     │
     ▼
  Backoff
     │
     ▼
  Slanje podataka
```

### SIFS – Short Inter-Frame Space

Wifi
```
A ───── DATA ─────> B
A <───── ACK ────── B
          ↑
        SIFS
```
> B nakon primitka podatka ne čeka DIFS, nego puno kraći SIFS i šalje ACK.

### NAV – Network Allocation Vector

NAV je nešto drugačije. To je virtualni pokazatelj zauzetosti kanala.

```
A ───────── DATA ─────────> B
                            │
                            └── komunikacija traje još 100 μs

C vidi NAV = 100 μs
│
└── ne šalje ništa
    čeka 100 μs
```

Dakle, NAV omogućuje uređaju da virtualno procijeni je li kanal zauzet, čak i ako trenutno fizički ne detektira signal.

| Pojam    | Značenje                                    | Zapamti kao                            |
| -------- | ------------------------------------------- | -------------------------------------- |
| **DIFS** | Čekanje prije normalnog prijenosa           | 🕐 „Smijem li početi slati?”           |
| **SIFS** | Vrlo kratko čekanje za neposredni odgovor   | ⚡ „Moram odmah odgovoriti.”            |
| **NAV**  | Informacija koliko će kanal još biti zauzet | 🚫 „Netko drugi koristi kanal, čekaj.” |

### Manipulacija Backoff vrijednostima

IEEE 802.11e s QoS podrškom omogućava manipulaciju Backoff-a, DIFS-a.

- Manipulacijom parametara protokola za pristup kanalu (CSMA/CA) moguće je “zauzeti” radijski kanal
	- **maliciozni napadač može lako izvršiti DoS napad**
	- pojedini korisnici mogu ostvariti veći dio kapaciteta

![[Pasted image 20260901224649.png|782]]

👉 802.11e uvodi QoS kako bi različitim vrstama prometa omogućio različite prioritete. Manipuliranjem parametara pristupa kanalu moguće je jednom uređaju dati nepoštenu prednost. **Zlonamjerni korisnik može to iskoristiti za uskraćivanje kapaciteta drugim korisnicima i izazvati DoS.**

# 45. Sigurnosni problemi s WEP standardom?

> Wired Equivalent Privacy

WEP algoritam - slijedna šifra (**stream** chiper) zasnovana na RC4 enkripcijskom algoritmu

**Ne osigurava:**
-  Tajnost
- Integritet
- Autentikaciju

## Tajnost

### vektor

Inicijalizacijski vektor (v) se mijenja za svaki prenošeni paket.

- Međutim, v je “dug” **samo 24 bita** (IEEE 802.11 standard)
- Ako se v generira na slučajan način, dva paketa će imati istu vrijednost nakon samo 5000 paketa (“birthday paradox”)
- Ako se v jednostavno **inkrementira** počevši od 0, dva računala koja odašilju konstantno će generirati pakete s istom vrijednošću v

### pohrana

- Napadač **pohrani** 2^24 parova (vi, RC4(k,vi)) – otprilike 24 GB
- Kada napadač “vidi” šifrirani paket Ci, pogleda u memoriju (vrijednost vi nije kriptirana) i nađe odgovarajući par (vi, RC4(k,vi))
- Pi = Ci x RC4(k,vi)
- RC4 “slabi” ključevi (npr. Airsnort program pronalazi ključ vrlo brzo)


## Integritet

Za provjeru integriteta i autentičnosti poruke, WEP koristi šifrirani CRC (checksum)
ili Integrity Value Check (IVC).

 CRC je linearna funkcija: CRC(P1  P2) = CRC(P1)  CRC(P2)

### napad

Napadač:
Posjeduje C = RC4(k,v)  P, CRC(P) (ne zna P i k)
Želi generirati poruku P’ = P  , koju će prihvatiti AP kao autentičnu
Generira: C’ = C  , CRC()

= RC4(k,v)  P, CRC(P)  , CRC()
= RC4(k,v)  P  , CRC(P)  CRC()
= RC4(k,v)  P’, CRC(P  )
= RC4(k,v)  P’, CRC(P’)

## Autentikacija


# 46. Sigurnosna arhitektura u WLAN mrežama?

- WPA (WiFi Protected Access)
	 Prijelazno rješenje, kompatibilno s postojećim hardverom

- IEEE 802.11i standard (ili **WPA2**)
	 Novije rješenje, ali zahtijeva promjenu hardvera

**Novine** u IEEE 802.11i u usporedbi s WEP-om

- ⚫ Kontrola pristupa je zasnovana na IEEE 802.1X modelu
- ⚫ Fleksibilan autentikacijski okvir (EAP – Extensible Authentication Protocol)

⚫ Autentikacija može koristiti provjerene autentikacijske protokole (npr.,
TLS – Transport Layer Security)
⚫ Autentikacijski proces rezultira sesijskim tajnim ključem
⚫ Različite funkcije (enkripcija, integritet) koriste različite ključeve koji se
izvode iz sesijskog ključa

⚫ Enkripcijska funkcija značajno poboljšana (AES, TKIP)
⚫ Zaštita integriteta poruka značajno poboljšana (AES-MAC, TKIP-MIC)
