[[Operativni sustavi - predmet]] 
## Sastavnice računalnog sustava

1. Hardver - Fizički dijelovi računala:
Procesor (CPU)
Memorija (RAM)
Pohrana (HDD/SSD)
Ulazno/izlazni uređaji (tipkovnica, miš, monitor…)
2. Softver - Programski dio koji upravlja hardverom:
**Operativni sustav** (Windows, Linux…)
Aplikacije (Word, Photoshop…)
**Driveri i sistemski softver**
Programski jezici i razvojni alati
3. Korisnik - Osoba koja koristi računalo:
Donosi odluke
Interagira s aplikacijama
Unosi podatke i interpretira rezultate
Prilagođava sustav svojim potrebama

### Što je OS?

Operativni sustav je **program** na kojem se izvršavaju aplikacijski program komunikacijski most (**sučelje**) između korisnika i računalnog hardvera.

Glavni njegov zadatak je **dodjela resursa i usluga**, kao što je dodjela memorije, uređaja, procesora i informacija.

Operacijski sustav uključuje programe za upravljanje tim resursima, kao što su kontroler
prometa, planer, modul za upravljanje memorijom, ulazno-izlazni programi i datotečni sustav.

### Za što nam služi?

- Kontrolira sve računalne **resurse**
- **Posrednik** između sistemskog hardvera i krajnjeg korisnika
- **Skriva** **složenost** softvera
- Daje **sučelje** korisnicima(`interface`)

- **Pruža** potrebite **resurse** i usluge korisničkim programima
 
- **Koordinira** **izvršavanje** korisničkih programa

- Podržava **paralelno** istovremeno izvršavanje programa
- **Prati** izvršavanje korisničkih programa kako bi se spriječile **pogreške** - `error handling/correction`

## Što je operativni sustav (OS)

Bez postojanja OS-a vrlo je teško da bilo koja aplikacija bude jednostavna za upotrebu.
Operativni sustav pruža korisniku **sučelje** koje svaku aplikaciju čini jednostavnom za upotrebu.

Operativni sustav dolazi s velikim brojem **upravljačkih programa** za uređaje.

**Operativni sustav radi kao komunikacijski kanal između sistemskog hardvera i sistemskog softvera.**
Operacijski sustav pomaže u interakciji aplikacije s hardverskim dijelom bez poznavanja stvarne hardverske konfiguracije.

Svako računalo opće namjene sastoji se od 
- hardvera
- operacijskog sustava
- sistemskih i aplikacijskih programa

**Hardver** se sastoji od memorije, CPU, I/O uređaja, te raznih perifernih uređaja i uređaja za pohranu.
**Sistemski** programi sastoji se od kompajlera, assemblera, urednika(editor), jezgre OS-a itd.
**Aplikacijski** programi sastoje se od poslovnih programa i programa baze podataka.

## Razvoj procesora – od cijevi do kvantnih čipova

Razvoj procesora i operativnih sustava išao je ruku pod ruku – kako su procesori
postajali brži i manji, operativni sustavi su postajali pametniji, intuitivniji i dostupniji širem krugu korisnika. 

Danas živimo u eri umjetne inteligencije, mobilnosti i kvantnog računalstva, gdje se
granice tehnologije stalno pomiču.

- 1940 – 1955: First Generation – **Vacuum** Tubes – rana računala koristila su vakuumske cijevi kao sklopove i magnetske ploče za memoriju. Gabaritima su bila ogromna, doslovno su zauzimali cijele sobe i poprilično koštali
- 1956 – 1963: Second Generation – **Transistors** - Zamjena vakuumskih cijevi tranzistorima odredila je pojavu druge generacije računalstva. Iako su prvi put izumljeni 1947. godine,
		tranzistori se nisu značajno koristili u računalima do kraja 1950-ih. Znatno su superiorniji od vakuumskih cijevi, čineći računala manjima, bržim, jeftinijim uz znatno manju potrošnju električne energije.
- 1964 – 1971: Third Generation – **Integrirani krugovi** – u ovoj fazi, tranzistori su se `minijaturizirali` te su se postavljali na silikonske čipove (zvane poluvodiči). To je dovelo do masovnog povećanja brzine i učinkovitosti računala.
- 1972 – 2010: Fourth Generation – **Microprocessors** - 4. generacija se može sažeti u jednu riječ: [[Intel]]. 
		Proizvođač čipova razvio je čip Intel 4004 1971. godine, koji je sve računalne komponente (CPU, memoriju, ulazne / izlazne kontrole) postavio na jedan čip. Ono što je ispunilo sobu 1940ih sada je stalo na dlan. 1981. izrađeno je prvo računalo (IBM) posebno dizajnirano za kućnu upotrebu, a 1982. godine MacIntosh je predstavio Apple.
- 2010- : Fifth Generation – **Artificial Intelligence** - Računalni uređaji s umjetnom inteligencijom su još uvijek u razvoju, ali neke od ovih tehnologija počinju se pojavljivati i koriste se npr kod prepoznavanje glasa. U budućnosti, računala će se ponovno radikalno transformirati kvantnom matematikom, molekularnom i nano tehnologijom.

## Kratka povijest operativnih sustava

### 1950-e – Prvi računalni sustavi bez OS-a

Računala su tada izvodila samo jedan program u isto vrijeme.
Programeri su unosili kod ručno (npr. pomoću bušenih kartica).
### 1960-e – Pojava prvih operativnih sustava

[[IBM]] razvija [[OS/360]], jedan od prvih univerzalnih OS-a.
Uveden je batch processing – više zadataka obrađuje se jedan za drugim bez interakcije korisnika.
### 1970-e – Razvoj UNIX-a

[[UNIX]] ([[Bell Labs]], **1969**.) postaje temelj za mnoge kasnije OS-ove.
Uveden multitasking (više programa odjednom) i rad u više korisnika.

### 1980-e – Računala za široku uporabu

1981 Microsoft izdaje **MS-DOS,** jednostavan tekstualni OS.
Apple uvodi **Mac OS** s grafičkim sučeljem (GUI).
izlazi prvi **Microsoft Windows**, kao grafičko proširenje DOS-a.

### 1990-e – Dominacija Windowsa i razvoj [[Linux]]

[[Windows 95]] donosi pravi grafički OS i postaje globalni standard za osobna računala.
[[Linux]] ([[Linus Torvalds]], 1991.) pojavljuje se kao besplatna open-source alternativa UNIX-u.

### 2000-e – Mobilni operativni sustavi

Širenje interneta i mobilnih uređaja.
[[Apple]] pokreće [[iOS]] (2007.) uz [[iPhone]].
[[Google]] razvija [[Android]] (2008.), temeljen na Linuxu.

### Danas

- Windows i dalje vodeći na osobnim računalima.
- Linux dominantan na serverima i u cloudu.
- Android i iOS vladaju mobilnim uređajima.
- Operativni sustavi sve više integrirani s internetom i umjetnom inteligencijom.

Vremenska crta razvoja operativnih sustava:
- 1950-e → Računala bez OS-a, programi se unose ručno (bušene kartice).
- 1960-e → IBM OS/360, batch processing.
- 1970-e → UNIX (Bell Labs), multitasking i rad više korisnika.
- 1980-e → MS-DOS (1981.), Mac OS (1984.), Windows 1.0 (1985.).
- 1990-e → Windows 95, Linux (1991.).
- 2000-e → iOS (2007.), Android (2008.).
- Danas → Windows (PC), Linux (serveri), Android i iOS (mobilni).

### Glavne zadaće operativnog sustava:

- Upravljanje procesima
- Pokretanje i zaustavljanje programa.
- Dodjeljivanje procesorskog vremena različitim zadacima ([[Computer Multitasking]]).
- Upravljanje memorijom
- Dodjeljivanje radne memorije (RAM) programima.
- Kontrola zauzeća memorije i zaštita podataka različitih procesa.
- Upravljanje datotekama i datotečnim sustavom
- Pohrana i organizacija podataka na diskovima.
- Omogućuje rad s mapama i datotekama (čitanje, zapisivanje, brisanje).
- Upravljanje uređajima (ulazno/izlaznim jedinicama)
- Komunikacija s uređajima poput tipkovnice, miša, pisača, monitora, USB uređaja.
- Korištenje upravljačkih programa (drivera).
- Sigurnost i zaštita
- Kontrola pristupa korisnika (lozinke, prava pristupa).
- Zaštita podataka i procesa od neovlaštenog pristupa.

- Korisničko sučelje
	- Omogućuje interakciju korisnika s računalom – npr. grafičko sučelje (Windows, macOS) ili tekstualno (Linux terminal).

## Ciljevi operativnog sustava:

- **Udobnost za korisnika** (User convenience)
	OS treba omogućiti jednostavno i intuitivno korištenje računala.
	Primjer: grafičko sučelje (ikone, prozori, izbornici).
- **Efikasno korištenje resursa** (Efficiency)
	OS upravlja procesorom, memorijom, diskovima i uređajima tako da se iskoriste maksimalno učinkovito. Sprječava "prazan hod" računala.

- **Pouzdanost i sigurnost** (Reliability & Security)
- **Zaštita podataka i procesa od grešaka i neovlaštenog pristupa**
- **Stabilan rad** bez rušenja sustava.

- **Višekorisnički** i **višezadaćni** rad (Multitasking & Multiuser)
	Omogućuje da više programa i/ili korisnika radi istovremeno bez međusobnog ometanja.
	
- Prijenosnost i kompatibilnost (**Portability**) [^1]
	`Omogućuje rad softvera na različitim uređajima i hardverskim konfiguracijama.`
	Primjer: Linux radi na PC-ima, serverima, mobitelima i superračunalima

## Funkcije OS-a

- **Resource** Management: upravlja i dodjeljuje memoriju, vrijeme procesora (CPU time) i druge hardverske resurse među različitim programima i procesima koji se izvode na računalu.

- **Process** Management: OS je odgovoran za pokretanje, zaustavljanje i upravljanje procesima i
programima. Također kontrolira zakazivanje procesa i dodjelu resursa.
- **Memory** Management: OS upravlja primarnom memorijom računala i pruža mehanizme za
optimizaciju korištenja memorije.
- **Security**: OS pruža sigurno okruženje za korisnika, aplikacije i podatke implementacijom
sigurnosnih pravila i mehanizama kao što su kontrole pristupa (autentikacija i autorizacija),
šifriranje i slično..
- **Job Accounting**: Prati vrijeme i resurse koje koriste različiti poslovi ili korisnici.
- **File Management**: odgovoran je za organiziranje i upravljanje datotečnim sustavom, uključujući
	stvaranje, brisanje i manipulaciju datotekama i direktorijima.
- **Device** **Management**: OS upravlja ulazno/izlaznim (I/O) uređajima kao što su pisači, tipkovnice,
miševi i zasloni. Održava potrebne upravljačke programe i njihova sučelja kako bi se omogućila
komunikacija između uređaja i računala.

- **Networking**: Operacijski sustav pruža mogućnosti umrežavanja kao što su uspostavljanje
mrežnih veza i upravljanje njima, rukovanje mrežnim protokolima i zajedničko korištenje resursa
kao što su pisači i datoteke putem mreže.

- **User Interface**: Operativni sustav pruža korisničko sučelje koje korisnicima omogućuje
interakciju s računalnim sustavom. To može biti graphical user interface (GUI), command line
interface (CLI) ili kombinacija oba.

- **Backup and Recovery:** OS pruža mehanizme za sigurnosno kopiranje podataka i njihovo
obnavljanje u slučaju kvarova sustava, pogrešaka ili katastrofa.
- **Performance Monitoring:** Operativni sustav pruža alate za praćenje i optimizaciju performansi
sustava, uključujući identificiranje uskih grla, optimizaciju korištenja resursa i analizu zapisnika
i mjernih podataka sustava.
- **Time-Sharing:** OS omogućuje više korisnika da istovremeno dijele računalni sustav i njegove
resurse pružajući mehanizme dijeljenja vremena koji pravedno i učinkovito raspoređuju resurse.
- **System Calls:** Operativni sustav **upravlja zbirkama sistemskih poziva** koji aplikacijama
omogućuju interakciju s operativnim sustavom i pristup njegovim resursima. 
> [!info]+ Sys Calls
> Sistemski pozivi([[System call]]) pružaju standardizirano sučelje između aplikacija i operativnog sustava, čime se ostvaruje **prenosivost i kompatibilnost** između različitih hardverskih i softverskih platformi.

- **Virtualization**: Operativni sustav pruža mogućnosti virtualizacije koje omogućuju pokretanje više
operacijskih sustava ili aplikacija na jednom fizičkom računalu. To omogućuje učinkovito
korištenje resursa i fleksibilnost u upravljanju radnim opterećenjem.

- Error-detecting Aids: OS upravlja metodama koje se koriste za generiranje izvadaka (**dumps**),
tragova (**traces**), poruka o pogreškama te raznih drugih algoritama za otkrivanje i ispravljanje
pogrešaka.

## Osnovne komponente OS-a

### Kernel – srce operativnog sustava

Kernel je najniža i najvažnija komponenta OS-a.

- Upravlja hardverom: komunicira s procesorom, memorijom, diskovima i drugim uređajima.
- Dodjeljuje resurse: odlučuje koji proces dobiva koliko CPU vremena, memorije itd.
- Upravlja procesima i memorijom: omogućuje multitasking i izolaciju procesa.
- Radi u kernel modu: ima potpunu kontrolu nad sustavom.

Vrste kernela:
- Monolitni kernel – sve funkcije u jednom velikom modulu (npr. Linux).
- Mikrokernel – minimalan kernel, ostale funkcije u korisničkom prostoru (npr. Minix).
- Hibridni kernel – kombinacija oba pristupa (npr. Windows NT).

### Shell – sučelje između korisnika i kernela

Shell je ono što korisnik vidi i koristi za interakciju s OS-om.

- Prima naredbe od korisnika (npr. ls, mkdir, cd) i prosljeđuje ih kernelu.
	Može biti tekstualni (CLI) ili grafički (GUI).
- Omogućuje skriptiranje – korisnici mogu automatizirati zadatke pomoću shell skripti.

Vrste shellova:
- Bash (Bourne Again Shell) – najčešći na Linuxu.
- Zsh, Csh, Fish – druge varijante s dodatnim mogućnostima.
- PowerShell – napredni shell za Windows s objektno-orijentiranim pristupom.

> [!question]  Kako surađuju kernel i shell?
> Zamislimo da želimo otvoriti datoteku Shell **prima naredbu** korisnika (npr. # cat dokument.txt)
> Kernel izvršava naredbu – pristupa disku, učitava datoteku u memoriju Shell **prikazuje**
> **rezultat na ekranu.**

#### Kako se odvija suradnja kernela i shella u stvarnom vremenu – u milisekundama:

1. Korisnik unosi naredbu — preko GUI (klikom) ili CLI (tipkanjem – npr. komandu ls)
2. **Shell** prima tu naredbu i interpretira je
3. **Shell** šalje zahtjev kernelu
4. Kernel upravlja hardverom: pristupa disku, memoriji, procesoru.
5. Kernel vraća rezultat shellu.
6. **Shell** prikazuje rezultat korisniku — u prozoru ili terminalu.

## Vrste OS-a

### Batch Operating System (Serijski OS)

Kako radi: Korisnici ne komuniciraju izravno s računalom. Umjesto toga, poslovi
(naredbe/programi) se grupiraju u batch i izvršavaju jedan za drugim.

Primjena: Idealno za zadatke koji se ponavljaju — npr. obračun plaća, obrada bankovnih izvoda.

**Prednosti: Visoka učinkovitost, minimalna interakcija.**
**Nedostaci: Nema povratne informacije tijekom izvršavanja, teško otkrivanje grešaka.**

### Time-Sharing Operating System (OS za dijeljenje vremena)

Kako radi: Više korisnika koristi sustav istovremeno. CPU se dijeli u male vremenske kvantume i brzo prebacuje između korisnika.

Primjena: Višekorisnički sustavi, obrazovni sustavi, terminali.
**Prednosti: Interaktivnost, brza reakcija, bolja iskoristivost resursa.**
**Nedostaci: Kompleksno upravljanje memorijom i sigurnošću.**

### Distributed Operating System (Distribuirani OS)

Kako radi: Više računala povezanih u mrežu djeluju kao jedan sustav. Resursi se dijele i
koordiniraju.
Primjena: Cloud sustavi, klasteri, mrežni poslužitelji.

**Prednosti: Skalabilnost, dijeljenje resursa, otpornost na kvarove.**
**Nedostaci: Kompleksna sinkronizacija i sigurnost.**

### Real-Time Operating System (RTOS – OS u stvarnom vremenu)

Kako radi: Odgovara na događaje u strogo definiranom vremenskom okviru.
Vrste:
Hard real-time: Kašnjenje nije dopušteno (npr. nuklearne elektrane).
Soft real-time: Kašnjenje je prihvatljivo do određene granice (npr. video streaming).
Primjena: Industrijska automatizacija, medicinski uređaji, zrakoplovstvo.

**Prednosti: Preciznost, pouzdanost.**
**Nedostaci: Ograničena fleksibilnost, visoka kompleksnost.**

### Multiprogramming OS

Kako radi: Više programa je u memoriji istovremeno, ali samo jedan koristi CPU u danom
trenutku.
Primjena: Osnovni višezadaćni sustavi.
**Prednosti: Bolja iskoristivost CPU-a.**
**Nedostaci: Nema interaktivnosti kao kod time-sharinga.**

### Multi-user OS

Kako radi: Više korisnika može istovremeno koristiti sustav, svaki sa svojim `sesijama`.
Primjena: Poslužitelji, **UNIX** sustavi.

**Prednosti: Dijeljenje resursa, centralizirano upravljanje.**
**Nedostaci: Potencijalni sigurnosni izazovi.**

### Time-Sharing u Linuxu

Linux koristi preemptivno multitasking — CPU se dijeli u male **vremenske kvantume** (time
slices) između procesa.

Svaki korisnik ili proces dobiva svoj trenutak pažnje procesora, a sustav se brzo prebacuje
između njih.
To omogućuje da više korisnika (ili procesa) dobije dojam da sustav radi samo za njih — iako se
resursi zapravo dijele.

Primjer: Ako ti i kolega istovremeno pristupate Linux serveru putem SSH-a, sustav će rasporediti
CPU vrijeme između vaših sesija, tako da oboje možete raditi bez vidljivog kašnjenja.
Multi-User u Linuxu

Linux podržava više korisničkih računa — svaki s vlastitim dozvolama, direktorijima i procesima.
Više korisnika može istovremeno biti prijavljeno (npr. putem terminala, SSH-a, ili čak grafičkog
sučelja).
Kernel izolira procese svakog korisnika, čime se osigurava sigurnost i stabilnost sustava.

Primjer: Na Linux serveru možeš imati korisnika zdravko, admin, guest, itd. Svaki ima vlastiti
home direktorij (/home/zdravko) i vlastite procese. Sustav zna tko što smije raditi — zahvaljujući
identifikatorima (UID) i dozvolama.

Kako se to spaja?
**Time-sharing omogućuje da više korisnika koristi sustav istovremeno bez konflikta u CPU**
**vremenu.**

**Multi-user omogućuje da svaki korisnik ima svoj prostor, identitet i sigurnosne granice.**

**Zajedno, to znači da Linux može služiti kao server za više korisnika, gdje se resursi dijele**
**pametno i sigurno.**

Korisnici (User A, B, C): Svaki ima vlastite procese.
Procesi: Neki aktivni, neki čekaju — svi su izolirani i dodijeljeni korisnicima.
Kernel: Upravlja svim procesima, dodjeljuje resurse, kontrolira pristup hardveru.

###  Što se događa kad korisnički proces pozove kernel:

Proces u korisničkom prostoru poziva funkciju poput read(), write(), fork(), itd.
Poziv se prebacuje u kernel prostor putem sistemskog poziva.
Kernel izvršava traženu operaciju — npr. pristup datoteci, dodjela memorije, komunikacija s
hardverom.
Ako sve prođe u redu, kernel vraća rezultat procesu.
Ako dođe do greške (npr. nepostojeća datoteka), proces može završiti u čekanju ili dobiti poruku
o pogrešci.

## Struktura OS-a

Struktura operativnog sustava definira kako su njegove komponente organizirane i kako
međusobno surađuju da bi upravljale računalom.

**Struktura operativnog sustava je organizacijski model koji određuje:**
Kako se dijelovi OS-a (kernel, shell, moduli, sučelja) međusobno povezuju
Kako se odvija komunikacija između korisnika, aplikacija i hardvera
Kako se upravlja resursima poput memorije, procesora, uređaja za pohranu itd.

**Zašto je struktura važna?**
Stabilnost: Dobro organizirana struktura sprječava pad sustava.
Sigurnost: Izolacija komponenti smanjuje rizik od napada.
Fleksibilnost: Modularni pristup omogućuje lakše nadogradnje.
Performanse: Efikasna komunikacija između slojeva poboljšava brzinu.

### Linux Arhitektura

**Monolitna jezgra**: Sve osnovne funkcije (upravljanje memorijom, procesima, datotekama,
uređajima) su dio jedne velike jezgre.
**Shell**: Korisnici komuniciraju s OS-om putem CLI-a (npr. Bash).
**Modularnost**: Kernel podržava dinamičko učitavanje modula.
**Otvorenost**: Kod je dostupan, što omogućuje prilagodbu i sigurnosnu transparentnost.

### Windows Arhitektura

**Hibridna** jezgra: Kombinira elemente mikrojezgre i monolitne jezgre.
**GUI** orijentiran: Većina korisničke interakcije odvija se kroz grafičko sučelje.
Upravitelj izvršavanja: Centralna komponenta koja koordinira servise, I/O, memoriju i procese.
**Zatvoren kod**: Kod nije dostupan korisnicima, što ograničava prilagodbu.

###  Performanse: Linux vs Windows

Zaključak:
Linux je brži i efikasniji u serverima i razvojnim okruženjima.
Windows je optimiziran za korisničko iskustvo, igre i multimediju.

###  Sigurnost: Linux vs Windows:

Zaključak:
Linux pruža jaču sigurnost iz kutije, posebno za servere i razvojne sustave.
Windows je poboljšao sigurnost, ali ostaje ranjiviji zbog svoje popularnosti.

### Slojevi u prikazu:

- User Programs – aplikacije koje korisnik pokreće (npr. web preglednik, editor teksta)
- I/O Device Management – upravljanje ulazno-izlaznim uređajima (tipkovnica, miš, printer)
- Process Management – kreiranje, planiranje i prekidanje procesa
- Memory Management – dodjela i oslobađanje memorije

CPU Scheduling je dio upravljanja procesima (Process Management) koji odabire koji će proces
dobiti CPU u danom trenutku i upravlja redovima spremnih procesa (ready queue). Kada proces
završi, čeka I/O ili bude prekinut, scheduler bira sljedeći proces iz reda — to je srce
multitaskinga.
Hardware – fizički sloj: CPU, RAM, diskovi, uređaji

Svaki sloj komunicira samo s neposrednim susjednim slojem — što omogućuje bolju
organizaciju, sigurnost i modularnost.

## Mehanizam sistemskog poziva (System Call)

**U računalstvu sistemski poziv je programski način na koji računalni program traži**
**uslugu iz jezgre (kernela) operativnog sustava na kojem se izvršava.**

Jezgra je osnovni dio operacijskog sustava koji upravlja sistemskim resursima. On djeluje kao
most između aplikacije i hardvera računala. To je jedan od prvih programa učitanih pri
pokretanju (nakon Bootloadera) – vidjeti kasnije boot sequencu

- **racunalni program pomocu syscalla trazi uslugu jezgre(kernela) odnosno samog OS-a**

### Jezgreni način rada (kernel mode) i korisnički način rada procesora (user mode)

CPU može izvršiti određene upute samo kada je u jezgrenom načinu rada.
OS stavlja CPU u jezgreni način rada kada se izvršava u jezgri tako da jezgra može izvršiti neku
posebnu operaciju.

OS stavlja CPU u korisnički način rada kada se korisnički program izvršava tako da se korisnički
program ne može povezati s programom operacijskog sustava.

**Sistemski poziv je jedini način na koji programi mogu komunicirati s operativnim sustavom.**
**Jedine ulazne točke u jezgreni sustav.**

Sistemski poziv osigurava tj pruža usluge operativnog sustava za korisničke programe i to putem
sučelja aplikacijskog programa (**API**).
Svojevrsno sučelje između procesa i operativnog sustava kako bi se procesima na razini
korisnika omogućilo da zatraže usluge operativnog sustava.

Korisnički program može komunicirati s operativnim sustavom pomoću sistemskog poziva.
Program zahtijeva brojne usluge, a OS odgovara pokretanjem brojnih sistemskih poziva kako bi
ispunio zahtjev.
Sistemski poziv može se pisati na programskim jezicima visoke razine kao što su C ili Pascal ili
na jeziku montaže Assembler.

Sistemski poziv pokreće program koji izvršava određenu uputu, što pokreće prelazak na jezgreni
način rada, dopuštajući programu da zatraži uslugu od OS-a. OS zatim obrađuje zahtjev, obavlja
potrebne operacije i vraća rezultat natrag u program.

Evo uredno **formatiranog i preglednog teksta**, bez mijenjanja sadržaja — samo struktura i čitljiv[[]]ost 👇

---

## Mehanizam sistemskog poziva (System Call)

**Interface**
Sistemski pozivi pružaju **dobro definirano sučelje** između korisničkih programa i operativnog sustava.
Programi postavljaju zahtjeve pozivanjem određenih funkcija, a operacijski sustav odgovara izvršavanjem tražene usluge i vraćanjem rezultata.

**Protection**
Sistemski pozivi koriste se za pristup povlaštenim operacijama koje nisu dostupne običnim korisničkim programima.
Operacijski sustav koristi ovu privilegiju za zaštitu sustava od zlonamjernog ili neovlaštenog pristupa.

**Kernel Mode**
Kada se upućuje sistemski poziv, program se privremeno prebacuje iz korisničkog načina rada u jezgreni način rada.
U jezgrenom načinu rada program ima pristup svim sistemskim resursima, uključujući:

* hardver
* memoriju
* druge procese

**Context Switching**
Sistemski poziv zahtijeva prekidač konteksta, koji uključuje:

* **spremanje stanja trenutnog procesa**
* **prebacivanje na jezgreni način rada radi izvršavanja tražene usluge**

Ovo može dovesti do usporenja izvršavanja i utjecati na performanse sustava.

**Error Handling**
Sistemski pozivi mogu vratiti šifre pogrešaka kako bi ukazali na probleme s traženom uslugom.
Programi moraju provjeriti te pogreške i postupati s njima na odgovarajući način.

**Synchronization**
Sistemski pozivi koriste se za **sinkronizaciju pristupa zajedničkim resursima**, kao što su:

* **datoteke**
* **mrežne** **veze**

Operativni sustav pruža mehanizme sinkronizacije poput:
* brava
* semafora

## Kako mehanizam poziva radi?

**User needs special resources**
Ponekad programi trebaju obaviti posebne zadatke koji se ne mogu izvršiti bez dopuštenja OS-a, npr.:

* čitanje iz datoteke
* pisanje u datoteku
* dobivanje informacija iz hardvera
* zahtjev za memorijskim prostorom

**Program makes a system call request**
Postoje posebne unaprijed definirane upute za podnošenje zahtjeva operativnom sustavu.
Te upute nazivaju se **sistemski pozivi**, a program ih koristi u svojoj šifri kada je potrebno.

**Operating system sees the system call**
Kada OS prepozna sistemski poziv:

* privremeno zaustavlja izvršavanje programa
* preuzima kontrolu i predaje je **jezgi (Kernel)**

Jezgra tada rješava zahtjev programa.

**Operating system performs the operations**
Operativni sustav izvršava traženu operaciju, npr.:

* čitanje sadržaja iz datoteke

**Operating system gives control back to the program**
Nakon izvršenja operacije, OS vraća kontrolu programu kako bi se njegovo izvođenje nastavilo.

### Sistemski programi

Bilješke: Programiranje sustava može se definirati kao aktivnost izgradnje softvera sustava
pomoću programskih jezika sustava.
Prema računalnoj hijerarhiji, prvo dolazi Hardver. Zatim ide operativni sustav, sistemski
programi i na kraju aplikacijski programi.
U kontekstu operativnog sustava, sistemski programi nisu ništa drugo nego poseban softver koji
nam daje mogućnost upravljanja i kontrole hardvera i resursa računala.
Sistemski programi su bliži s operativnim sustavom tako da brzo i korisno izvršavaju bitne
operacije kojima ne može upravljati aplikacijski softver .

File management – upravljanje datotečnim sustavom
Command Line Interface (CLI)
Device drivers – upravljački programi
Status information
File modification
Programming-Language support
Program loading and execution
Communication

Slajd 27: Sistemski programi

Bilješke: File Management
Datoteka je zbirka specifičnih informacija pohranjenih u memoriji računalnog sustava.
Upravljanje datotekama definira se kao proces manipulacije datotekama u računalnom
sustavu, što uključuje proces stvaranja, izmjene i brisanja datoteka.
Command Line Interface(CLI’s) :
Omogućuje korisniku mogućnost pisanja naredbi izravno u sustav za izvođenje bilo koje
operacije . To je tekstualni način interakcije s operativnim sustavom. CLI-i mogu obavljati mnoge
zadatke poput manipulacije datotekama, konfiguracije sustava itd.
Device drivers :
Upravljački programi uređaja rade kao jednostavni prevoditelji za OS i uređaje . U osnovi djeluje
kao posrednik između OS-a i uređaja i pruža mogućnost i OS-u i uređajima da razumiju
međusobni jezik kako bi mogli učinkovito surađivati bez prekida.
Status Information
Neki korisnici traže informacije kao što su datum, vrijeme, količina dostupne memorije ili
prostor na disku. Drugi pružaju detaljne informacije, zapisivanje i ispravljanje pogrešaka koje su
složenije. Sve ove informacije oblikovane su i prikazane na izlaznim uređajima ili ispisane.
Terminalni ili drugi izlazni uređaji ili datoteke ili prozor GUI-ja koriste se za prikaz izlaza
programa.
File Modification
Za izmjenu sadržaja datoteka koristimo ovo. Za datoteke pohranjene na diskovima ili drugim
uređajima za pohranu koristili smo različite vrste uređivača. Za pretraživanje sadržaja datoteka
ili izvođenje transformacija datoteka koristimo posebne naredbe.
Programming-Language support
Za uobičajene programske jezike koristimo kompajlere, asemblere, programe za ispravljanje
pogrešaka i usmene prevoditelje koji su već pruženi korisnicima. Možemo pokrenuti bilo koji
programski jezik. Svi jezici od važnosti već su osigurani.
Program Loading and Execution

Kada je program spreman nakon sastavljanja i kompilacije, mora se učitati u memoriju za
izvršenje. Učitavač (LOADER) je dio operativnog sustava koji je odgovoran za učitavanje
programa i knjižnica programa (DLL).
Communications
Programi omogućavaju veze između procesa, korisnika i računalnih sustava. Korisnici mogu
slati poruke drugom korisniku na svom zaslonu, Korisnik može slati e-poštu, pregledavanje web
stranica, daljinsku prijavu, transformaciju datoteka s jednog korisnika na drugog.

## Učitavanje OS -- booting

###  Booting

Kada se pokrene računalni sustav, u sustavu postoji mehanizam koji učitava operativni sustav iz
sekundarne pohrane u glavnu memoriju ili RAM sustava. To se naziva procesom pokretanja
sustava.
Postoje dvije vrste učitavanja OSa ovisno o broju operacijskih sustava instaliranih na računalu
Booting & Dual Booting
Nakon generiranja operacijskog sustava, OS mora biti dostupan hardveru.
Ali kako hardver zna gdje je jezgra (kernel) ili kako učitati tu jezgru?
Pokretanje sustava Postupak pokretanja računala učitavanjem jezgre (kernela)

**Postoji poseban program, pohranjen u ROM-u za obavljanje ovog posla poznat kao Bootstrap**
**utovarivač (LOADER).**

Npr: BIOS (ulazno-izlazni sustav za pokretanje).
Moderni PC BIOS (Basic Input/Output System) podržava pokretanje s različitih uređaja.
BIOS će obično korisniku omogućiti konfiguriranje redoslijeda pokretanja. Ako je redoslijed
pokretanja postavljen na:
1. CD Drive
2. Hard Disk Drive
3. Network

BIOS prvo pokuša pokrenuti sustav s CD pogona, a ako to ne uspije, pokušat će se pokrenuti s
tvrdog diska, a ako to ne uspije, pokušat će se pokrenuti s mreže, a ako to ne uspije, uopće se
neće pokrenuti.
Booting (pokretanje) je slijed pokretanja (startup sequence) koji pokreće operacijski sustav
računala.
Slijed pokretanja (boot sequence) je početni skup operacija koje računalo izvodi kada je
uključeno. Svako računalo ima slijed pokretanja.
Bootstrap loader pronalazi jezgru, učitava je u glavnu memoriju i započinje njezino izvršavanje.
U nekim sustavima jednostavan boottrap loader dohvaća složeniji program za pokretanje s
diska, koji zauzvrat učitava jezgru.

Dual Booting
Kada su dva operativna sustava instalirana na računalnom sustavu, to se naziva dvostruko
pokretanje.
Na takav sustav može se instalirati više operativnih sustava.
Kako sustav zna koji operativni sustav pokrenuti?
Boot loader koji razumije više datotečnih sustava i više operacijskih sustava nakon učitavanja
može pokrenuti jedan od operativnih sustava dostupnih na disku.
Disk može imati više particija, od kojih svaka sadrži različitu vrstu operativnog sustava.
Kada se računalni sustav uključi, program upravitelja pokretanja prikazuje izbornik,
omogućujući korisniku da odabere operativni sustav koji će koristiti.

Slajd 29: BATCH OS

Bilješke: Operativni sustav za skupnu obradu (BatchOS) je operativni sustav otvorenog koda
dizajniran za upravljanje većim brojem poslova u nizu. Temelji se na distribuciji CentOS Linuxa i
licenciran je pod Općom javnom licencom GNU-a.
Dizajniran je za podršku širokom rasponu zadataka skupne obrade, uključujući skladištenje
podataka, OLAP i rudarenje podataka, obradu velikih podataka, integraciju podataka i analizu
vremenskih serija.

Jedna od glavnih prednosti korištenja je ta što može poboljšati učinkovitost poslovanja
dopuštajući mu istovremeno pokretanje više zadataka. To se može učiniti dopuštanjem
operativnom sustavu da upravlja zadacima i procesima. To može omogućiti tvrtki da
istovremeno izvodi više zadataka bez čekanja da svaki od njih završi.
Operativni sustavi za skupnu obradu dizajnirani su za izvršavanje velikog broja sličnih poslova ili
zadataka bez intervencije korisnika.
Obično se koriste u poslovnim i znanstvenim aplikacijama gdje se veliki broj radnih mjesta mora
obraditi određenim redoslijedom.
Omogućuju učinkovito korištenje računalnih resursa. Zakazivanjem i obradom poslova u
serijama sustav može maksimalno iskoristiti dostupne resurse kao što su vrijeme procesora,
memorija i pohrana.
Korisnici šalju svoje poslove sustavu, koji se zatim dodaju u red čekanja za obradu. Sustav
obrađuje svaki posao zauzvrat, bez ikakve intervencije korisnika, dok se svi poslovi ne završe.
Prednosti :
Učinkovito korištenje resursa poslovi se obrađuju u serijama i planiraju pokrenuti kada su
resursi dostupni.
Visoka propusnost: mogu brzo obraditi velik broj poslova, omogućujući visoku propusnost i
brzo vrijeme preskakanja s posla na posao.
Smanjene pogreške: ne zahtijevaju intervenciju korisnika, što smanjuje broj pogrešaka koje se
mogu pojaviti tijekom ručne obrade posla.
Pojednostavljeno upravljanje poslom: automatizacija slanja, zakazivanja i izvršavanja posla.
Isplativo: omogućuju učinkovito korištenje resursa i mogu pomoći u smanjenju pogrešaka i
vremena obrade.
Skalabilnost: mogu se lako nositi s velikim brojem poslova, što ih čini skalabilnima za velike
organizacije koje zahtijevaju obradu podataka velike količine.
Nedostaci:
Ograničena funkcionalnost: dizajnirani su za jednostavne zadatke, a ne za složenije zadatke.
To ih može otežati za korištenje za određene zadatke, kao što je upravljanje datotekama ili
softverom.
Sigurnosni problemi: Budući da se obično ne koriste za svakodnevne zadatke, možda nisu
sigurni kao uobičajeniji operacijski sustavi. To može dovesti do sigurnosnih rizika ako sustav
koriste ljudi koji mu ne bi trebali imati pristup.
Prekidi mogu se često prekidati, što može dovesti do propuštenih rokova ili pogrešaka.
Neučinkovitost: često su spori i teški za upotrebu, što može dovesti do neučinkovitosti na
radnom mjestu.

## Multiprograming OS

Kada se više od jednog programa može izvršiti u operativnom sustavu, to se naziva
multiprogramskim operativnim sustavom.

Više programa mora biti pohranjeno u memoriji i svakom programu se daje određeni dio
memorije koji je poznat kao proces. OS obrađuje sve te procese i njihova stanja.
Prije nego što se proces izvrši, OS odabire proces koji je spreman da se izvrši. 

Tijekom izvršavanja, moguće je da proces treba odraditi i neku **ulazno/izlazna operaciju** pa u to vrijeme
proces **izlazi iz glavne memorije te se privremeno pohranjuje u sekundarnu pohranu**, a CPU
prelazi na sljedeći spreman proces.

Kada se proces nakon I/O operacije ponovno pojavi, CPU se prebacuje na taj proces. Ovo
prebacivanje se događa tako brzo i opetovano da stvara iluziju istovremenog izvršenja.

Multiprogramiranje je uglavnom razvrstano u dvije vrste:
Višekorisnički operacijski sustav
Operacijski sustav za obavljanje više zadataka odjednom
Multitasking je operativni sustav koji vam omogućuje istovremeno pokretanje više programa.
Operativni sustav to čini premještanjem svakog programa u memoriju i iz memorije jedan po
jedan. Kada programu ponestane memorije, privremeno se pohranjuje na disk dok ponovno ne
bude potreban.
Višekorisnički operativni sustav omogućuje mnogim korisnicima dijeljenje vremena obrade na
moćnom središnjem računalu na različitim terminalima. Operativni sustav to čini brzim
prebacivanjem između terminala, od kojih svaki prima ograničenu količinu vremena procesora
na središnjem računalu.
Značajke multiprogramiranja
Za implementaciju je potreban jedinstveni CPU.
Brzi prijelaz između procesa.
Prebacivanje se događa kada trenutni proces prolazi kroz stanje čekanja.
Vrijeme mirovanja procesora je skraćeno.
Velika iskorištenost resursa.
Visoke performanse.
Nedostaci multiprogramiranja
Potrebno je prethodno poznavanje algoritama zakazivanja termina.

Ako ima veliki broj radnih mjesta, tada će dugoročni poslovi morati zahtijevati dugo čekanje.
Upravljanje memorijom potrebno je u OS jer su sve vrste zadataka pohranjene u glavnoj
memoriji.
Korištenje multiprogramiranja u većoj mjeri može uzrokovati problem s zagrijavanjem.

## Time Sharing OS

Dijeljenje vremena logičan je nastavak multiprogramiranja.

CPU obavlja mnoge zadatke prebacujući se između njih tako često da korisnik može
komunicirati sa svakim programom dok je pokrenut.
Vremenski dijeljeni operacijski sustav omogućuje većem broju korisnika istovremeno
zajedničko korištenje računala. Kako se sustav brzo prebacuje s jednog korisnika na drugog,
svakom korisniku se daje dojam da je cijeli računalni sustav posvećen njegovoj upotrebi, iako se
dijeli među više korisnika.
Vremenski dijeljeni operacijski sustav koristi zakazivanje procesora i višestruko programiranje
kako bi svakom korisniku pružio mali dio zajedničkog računala odjednom. Svaki korisnik ima
barem jedan zaseban program u memoriji. Program se učitava u memoriju i izvršava, izvodi
kratko vrijeme prije dovršetka ili dovršetka ulazno-izlaznog razdoblja.
Ovo kratko vremensko razdoblje tijekom kojeg korisnik dobiva pažnju CPU-a poznato je kao
vremenski isječak (time slice), vremenski utor (time slot) ili kvantum . Obično je reda veličine od **10 do 100 milisekundi**.
**K**orisnik 5 je u aktivnom stanju, dok su korisnici 1, 2, 3 i 4 u stanju čekanja, dok je korisnik 6 u
stanju spremnosti.
Aktivno stanje – Korisnikov program je pod kontrolom CPU-a. U tom je stanju dostupan samo
jedan program.
Stanje spremnosti - Korisnički program spreman je za izvršavanje, ali čeka svoj red da dobije
CPU. Istovremeno više korisnika može biti u spremnom stanju.
Stanje čekanja – Korisnikov program čeka neku ulazno/izlaznu operaciju. Istovremeno više
korisnika može biti u stanju čekanja.
Prednosti

Svaki zadatak dobiva jednaku priliku.
Manje šanse za dupliciranje softvera.
Vrijeme mirovanja procesora (CPU Idle Time) se može smanjiti.
Nedostaci
Problem pouzdanosti.
Treba uzeti u obzir sigurnost i integritet korisničkih programa i podataka.
Problem s podatkovnom komunikacijom.

Slajd 32: Network OS

Bilješke: mrežni operativni sustav(NOS) je softver koji povezuje više uređaja i računala na mreži i
omogućuje im dijeljenje resursa na mreži.
Funkcije NOS-a :
Stvaranje korisničkih računa na mreži i upravljanje njima.
Kontrola pristupa resursima na mreži.
Pružajte komunikacijske usluge između uređaja na mreži.
Nadzirite mrežu i otklanjajte poteškoće s njom.
Konfiguriranje resursa na mreži i upravljanje njima.
Vrste mrežnih operacijskih sustava :
Peer to Peer – omogućite zajedničko korištenje resursa i datoteka s malim mrežama i manje
resursa. Općenito, peer-to-peer mrežni operativni sustavi koriste se na LAN-u.
Klijent/poslužitelj – korisnicima omogućuje pristup resursima putem središnjeg poslužitelja.
Ovaj NOS je preskup za implementaciju i održavanje.
Značajke mrežnih operacijskih sustava :
Pisači i zajedničko korištenje aplikacija na mreži.
Datotečni sustavi i zajedničko korištenje baze podataka.
Pružite dobru sigurnost pomoću funkcija kao što su provjera autentičnosti korisnika i kontrola
pristupa.
Stvorite sigurnosne kopije podataka.
Među-umrežavanje (inter-networking)

Prednosti mrežnih operativnih sustava :
Vrlo stabilan zbog središnjeg poslužitelja.
Pruža dobru sigurnost.
Nadogradnja nove tehnologije i hardvera može se lako implementirati u mrežu.
Omogućuje daljinski pristup poslužiteljima s različitih mjesta.
Nedostaci mrežnih operativnih sustava :
Ovisi o središnjem mjestu za izvođenje operacija.
Visoki troškovi kupnje poslužitelja.
Potrebno je redovito ažuriranje i održavanje.
Primjeri mrežnih operacijskih sustava :
Microsoft Windows Server
Linux

## Real Time OS

Operativni sustavi u stvarnom vremenu (RTOS) koriste se u okruženjima u kojima se
veliki broj događaja, uglavnom izvan računalnog sustava, mora prihvatiti i obraditi u kratkom
vremenu ili u određenim rokovima.

S RTOS-om se vrijeme obrade mjeri u desetinama sekundi. Ovaj sustav je vremenski ograničen i
ima fiksni rok. Obrada u ovoj vrsti sustava mora se odvijati unutar navedenih ograničenja. U
suprotnom, to će dovesti do kvara sustava.
Primjeri operativnih sustava u stvarnom vremenu su sustavi kontrole zračnog prometa, sustavi
kontrole naredbi, sustavi rezervacija zrakoplovnih tvrtki, srčani pejsmejkeri, mrežni
multimedijski sustavi, roboti itd.
Prednosti Maksimalna potrošnja: Maksimalna iskorištenost uređaja i sustava. Dakle, više izlaza
iz svih resursa.
Prebacivanje zadataka: Vrijeme dodijeljeno za prebacivanje zadataka u tim sustavima vrlo je
manje. Prebacivanje jednog zadatka na drugi traje 3 mikrosekunde.

Fokus se na aplikaciju: Fokus je na aplikaciji koja se trenutno izvršava a manja važnost je za
aplikacije koje su u redu čekanja.
RTOS in Embedded Systems: Budući da je veličina programa mala, RTOS mogu biti ugrađeni u
transporttne sustave, vozila i drugo
Bez pogrešaka: ove vrste sustava ne sadrže pogreške.
Dodjela memorije: RTOS sustavi najbolje upravljaju dodjelom memorije procesima
Nedostaci:
Ograničeni zadaci: Vrlo malo zadataka ise ,zvodi istovremeno, te su koncentrirani na svega
nekoliko aplikacija kako bi se izbjegle pogreške.
Ponekad znatno opterećuju hardver
Algoritmi su vrlo složeni te ih programeri teško razvijaju.
Potrebni su točno određeni upravljački programi uređaja (driver) i točno određeni prekidi signala
(interrupts)
Teško se postavljaju prioriteti niti procesa jer su ti sustavi manje skloni prebacivanju zadataka.
Minimalno prebacivanje: RTOS obavlja minimalno prebacivanje zadataka.

Slajd 34: Q&A
&
DEMO

Bilješke: FAQs
Question 1. The Operating System is which type of software?
(A) System software
(B) Application software
(C) Both a and b
(D) None of the above
Solution: The correct option is A, i.e., System software
Question 2. Which of the following is not an example of an Operating System?

(A) Windows
(B) Linux
(C) Mac OS
(D) MS-Word
Solution: The correct option is D, i.e., MS-Word
Question 3. Which characteristic property prevents unauthorized access to programs and data?
(A) Security
(B) Data Management
(C) Device management
(D) Control of system performance
Solution:
The correct option is A, i.e, Security
Security prevents unauthorized access to programs and data by means of passwords or some
kind of protection technique.
Question 4. Which characteristic property allocates and de-allocates the resources and also
decides who gets the resource?
(A) Security
(B) File Management
(C) Device management
(D) Control of System performance
Solution:The correct option is B, i.e., File management
File Management allocates and de-allocates the resources and also decides who gets the
resource.
Question 5. _____________ is designed in such a way that it can manage the overall resources
and operations of the computer.
(A) Operating System
(B) File Management
(C) Device management
(D) None of the above
Solution: The correct option is A, i.e, Operating System

___

## Upravljanje procesima

**Proces je program u izvršavanju.** 


Na primjer, kada napišemo program u C ili C ++ i kompiliramo ga, kompajler stvara binarni kod. Izvorni kod i binarni kod su programi. Kada zapravo pokrenemo binarni kod, to postaje proces.

Proces je instanca računalnog progama koja se izvršava kroz jednu ili više tzv. Niti procesa koje
se ovisno o operativnom sustavu mogu izvršavati paralelno.

Proces je "aktivni" entitet umjesto programa, koji se smatra "pasivnim" entitetom. Jedan program može stvoriti mnogo procesa kada se izvodi više puta; Na primjer, kada više puta otvorimo .exe ili binarnu datoteku, započinje više instanci (stvara se više procesa).

Općenito, Upravljanje procesima odnosi se na tehnike i strategije koje organizacije??? koriste za
dizajniranje, praćenje i kontrolu svojih poslovnih procesa kako bi učinkovito i učinkovito postigle
svoje ciljeve.

Neki od poziva sustava (system call):

1. Create a child’s process identical to the parent’s. 
2. Terminate a process
3.  Wait for a child process to terminate
4. Change the priority of the process
5. Block the process
6. Ready the process
7. Dispatch a process
8. Suspend a process
9. Resume a process
10. Delay a process
11. Fork a process

### Komponente procesa

1. Text Section – sadržava integrirani **programski kod** koji tijekom izvršavanja programa učitava s nekog stalnog mjesta pohrane podataka – storage, disk
2. **Stack**: Stog sadrži privremene podatke, kao što su parametri funkcija, povratne adrese i lokalne varijable.
3. **Data Section** (data class): Sadrži globalne I **statičke** **varijable** koje se pozivaju I dijele prije izvršavanja glavne aktivnosti progama
4. **Heap** Section: Dinamički dodijeljena memorija za obradu tijekom vremena izvođenja.

5. **PCB** – [[Process Control Block]] – ==podatkovna struktura== procesa koja sadržava sve važne atribute koji obilježavaju neki proces:
	- Process **Id**: Jedinstveni identifikator kojeg dodjeljuje operacijski sustav
	- Process **State**: ready, running, waiting, terminated…..
	- CPU **registers**: sadržava informaciju, tzv adresu s daljnjom instrukcijom koja treba biti izvršena za taj proces
	- Accounts information: Količina CPU-a koji se koristi za izvršavanje procesa, vremenska
		ograničenja, ID izvršenja itd
	- **I/O** status information: Na primjer, uređaji dodijeljeni procesu, otvorene datoteke itd
	- CPU **scheduling** information: Na primjer, **Prioritet** procesa (različiti procesi mogu imati različite	prioritete, na primjer, nekom kraćem procesu može biti dodijeljen visoki prioritet tijekom njegovog prvog zakazivanja termina izvršenja)

### Upravljanje procesima

#### States of Process

Proces se nalazi u jednom od sljedećih stanja:

1. **NEW**: novostvoreni proces (ili) proces koji se stvara.
2. **READY**: Nakon što se proces stvaranja preseli u stanje Spremno, tj.
3. **RUN**: trenutno se **izvodi** proces u CPU-u (samo jedan proces odjednom može se izvršiti u jednom procesoru)
4. **WAIT** (or **BLOCK**): kada proces zatraži ==ulazno/izlazni== pristup.
5. **COMPLETE** (or TERMINATED): Postupak je dovršio njegovo izvršavanje. 💯 
6. **SUSPENDED** `READY`: Kada se spremni red čekanja napuni, neki se procesi premještaju u obustavljeno spremno stanje
7. **SUSPENDED** `BLOCK`: Kada red čekanja postane pun.

### Context Switching

**Proces spremanja konteksta (odnosa, stanja) jednog procesa i učitavanja** konteksta drugog procesa poznat je kao Promjena konteksta. 

Jednostavno rečeno, to je poput učitavanja i istovara procesa iz trenutnog aktivnog (**running**) stanja u spremno (**ready**) stanje.

Kada se događa promjena konteksta?
1. Kada proces **visokog** **prioriteta** dođe u spremno stanje (tj. s većim prioritetom od trenutno aktivnog procesa)
2. Kada se dogodi **Prekid** (==interrupt==)
3. Kada se dogodi prebacivanje između korisničkog i jezgrenog načina rada
4. Kada se koristi **preventivno** raspoređivanje procesora na druge zadatke

### Context Switch vs Mode Switch

**Mode switch (zamjena načina rada) događa se kada se promijeni razina privilegije procesora,**
**npr kada se upućuje sistemski poziv ili dođe do pogreške.**

Jezgra (kernel) radi više u privilegiranom načinu nego u standardnom korisničkom. 

**Ako korisnički proces želi pristupiti stvarima koje su dostupne samo jezgri, mora doći do Mode switcha**.

 ==Postupak koji se trenutno izvršava se ne mijenja tijekom zamjene načina rada – mode switcha.==

Mode switch se obično događa kako bi se pokrenula **zamjena konteksta** procesa – context switching.

## Upravljanje procesima

OS može koristiti različite algoritme za planiranje (zakazivanje) procesa:

### Prvi došao, prvi poslužen (FCFS)

Ovo je najjednostavniji algoritam zakazivanja, gdje se postupak izvršava prema redoslijedu dolaska. FCFS nije preventivni, što znači da nakon što se proces počne izvršavati, nastavlja se sve dok se ne završi ili čeka I/O.

### Najkraći posao na prvom mjestu (SJF):

SJF je proaktivni algoritam zakazivanja koji odabire proces s najkraćim vremenom izvršenja. Vrijeme izvršenja (Burst Time) je vrijeme potrebno procesu da se dovrši njegovo izvršenje. SJF minimizira prosječno vrijeme čekanja procesa.

### Round Robin (**RR**):

proaktivni algoritam zakazivanja koji rezervira fiksno vrijeme u krugu za svaki
proces. Ako proces ne dovrši izvršavanje u određenom vremenu, **blokira se** i dodaje na **kraj reda**
čekanja. RR osigurava pravednu raspodjelu CPU vremena svim procesima i izbjegava gladovanje.

### Prioritetno zakazivanje:

Ovaj algoritam zakazivanja dodjeljuje prioritet svakom procesu, a proces s najvišim prioritetom izvršava se prvi. Prioritet se može postaviti na temelju vrste procesa, važnosti ili zahtjeva resursa.

### Red čekanja na više razina:

Ovaj algoritam zakazivanja procesa dijeli spremni red čekanja u nekoliko zasebnih redova čekanja, a svaki red čekanja ima drugačiji prioritet. Procesi se stavljaju u red čekanja na temelju njihovog prioriteta, a svaki red čekanja koristi vlastiti
algoritam zakazivanja. 

Ovaj algoritam zakazivanja koristan je u scenarijima u kojima različite vrste procesa imaju različite prioritete.

## Kontrolni blok procesa (PCB) i tablica procesa

Da bi identificirao procese, OS svakom procesu dodjeljuje identifikacijski broj procesa (PID). 
Budući da OS podržava **multiprogramiranje**, mora pratiti sve procese.

Kontrolni blok procesa ([[Process Control Block]] PCB) koristi se za praćenje stanja izvršavanja
procesa.
Kada proces prijeđe iz jednog stanja u drugo, operativni sustav mora ažurirati informacije u PCB-u procesa.

**Tablica procesa je niz PCB-a, što znači da sadrži PCB za sve trenutne procese u sustavu.**

- `Pokazivač`: To je pokazivač kojeg je potrebno spremiti kada se proces prebaci iz jednog stanja u drugo kako bi se zapamtilo trenutno stanje procesa
- `Stanje` procesa: Pohranjuje odgovarajuće stanje procesa.
- *Broj(ID)* procesa: Svakom procesu dodjeljuje se jedinstveni ID poznat kao ID procesa ili PID
- `Mjerač` programa: U njemu se pohranjuje **brojač**,: koji sadrži info o sljedećem koraku u izvršavanju procesa
- `Registar`: To su registri procesora koji uključuju akumulator, bazu, registre i registre opće namjene
- Ograničenja `memorije`: Ovo polje sadrži informacije o sustavu upravljanja memorijom kojeg koristi operacijski sustav.
- Lista otvorenih `datoteka` : datoteke otvorene za pristup procesu

### Operacije na procesima

Proces je aktivnost izvršavanja programa. U osnovi, to je program koji se izvršava a koji treba određene resurse kako bi dovršio svoj zadatak.

**Operacije** koje se izvode tijekom izvršavanja procesa:

- **Stvaranje**
	Stvaranje procesa znači aktiviranje novog procesa za izvršenje.
	To mogu izvesti sam sustav, korisnik ili neki već pokrenuti proces.
	Događaji koji iniciraju stvaranje procesa:
	1. Kada pokrenemo računalo, `OS` kreira nekoliko pozadinskih procesa
	2. Sam `Korisnik` može zatražiti iniciranje novog procesa
	3. Neki `Proces` može sam stvoriti drugi novi proces tijekom izvršavanja
	4. `Batch` system pokreće neku obradu
- **Zakazivanje**/otprema(`scheduling`/dispatching)
	Događaj ili aktivnost u kojoj se stanje procesa mijenja iz spremnog u pokretanje (**ready to run**)
	OS stavlja proces iz spremnog stanja u akti,vno stanje.
	Dispečiranje OS vrši onda kada su resursi slobodni ili neki proces ima veći prioritet
	od tekućeg procesa.
- **Blokiranje**
		Blok način rada je u osnovi način u kojem **proces čeka ulaz-izlaz.** Stoga, na zahtjev samog procesa, operativni sustav blokira proces i šalje drugi proces procesoru. Stoga, u operacijama blokiranja procesa, operativni sustav stavlja proces u stanje "čekanja".
	**Pretpostavka**
		Ako dođe do prekoračenja vremena, što znači da proces nije prekinut u dodijeljenom
		vremenskom intervalu te je sljedeći, i to, prioritetni proces spreman za izvršavanje, tada OS
		prejudicira process, odnosno, operativni sustav stavlja proces u 'spremno' stanje.
- **Prekid** procesa (`terminate`)
	Prekid procesa aktivnost je završetka procesa. Prekid procesa je otpuštanje računalnih resursa koje proces uzima za izvršenje.
	Događaji koji mogu dovesti do prekida procesa:
	- Proces u potpunosti **dovršava** svoje izvršenje i pokazuje OS-u da je završio.
	- Sam operativni sustav prekida proces zbog **pogrešaka** u servisu.
	- Možda postoji **problem** u **hardveru** koji prekida proces.
	- Jedan proces može biti prekinut drugim procesom.

### Zakazivanje (==scheduling==) procesa

**Raspoređivanje procesa je aktivnost upravitelja procesa koja se bavi uklanjanjem**
**trenutno aktivnog procesa iz CPU-a i odabirom drugog procesa na temelju određenih pravila.**

**Operacijski sustav održava sljedeće redove čekanja za zakazivanje procesa:**

- Red čekanja za poslove (**job** queue) − Ovaj red čekanja zadržava sve procese u sustavu
- Spremni red čekanja (**ready** queue) − Ovaj red čekanja čuva skup svih procesa koji se nalaze u glavnoj memoriji, spremni i čekaju na izvršavanje. 
	**Novi se proces uvijek stavlja u ovaj red čekanja.*
- Redovi čekanja uređaja (`I/O waiting` queue) − Procesi koji su blokirani zbog nedostupnosti **ulazno-izlaznog uređaja** čine ovaj red čekanja

**Kategorije u zakazivanju**

- `Nepreventivno`: U ovom slučaju, resurs procesa ne može se uzeti prije nego što se aktivni proces završi
- `Preventivno`: U ovom slučaju, OS dodjeljuje resurse procesu za unaprijed određeno vremensko razdoblje. 
		Proces se prebacuje iz aktivnog stanja u spremno stanje ili iz stanja čekanja na spremno stanje. Prebacivanje se događa zato što CPU može drugim procesima dati prioritet i/ili zamijeniti trenutno aktivan proces procesom višeg prioriteta

### ==3== ==tipa== zakazivanja procesa

#### Long Term or Job Scheduler 

- dugoročno zakazivanje ili raspored poslova

Njime se novi proces dovodi u "spremno stanje„ te se kontrolira stupanj multiprogramiranja,
odnosno broj procesa prisutnih u spremnom stanju u bilo kojem trenutku.

#### Short-Term or CPU Scheduler 



> **kratkoročno** zakazivanje ili raspored procesora.
 
Odgovorno je za odabir ==jednog procesa== **iz spremnog stanja radi zakazivanja prelaska u aktivno**
**stanje**.

`Napomena`: Kratkoročni planer odabire samo postupak(proces) za zakazivanje, a ne učitava
proces pri izvođenju.

#### Medium-Term Scheduler

**Odgovoran je za obustavu i nastavak procesa. 
Uglavnom se bavi zamjenom (premještanjem) procesa ==iz glavne memorije na disk i obrnuto==).**

### Izmjena/prebacivanje stanja procesa - Context Switching

Prebacivanje konteksta u operacijskom sustavu uključuje spremanje konteksta ili stanja pokrenutog procesa kako bi se kasnije mogao vratiti, a potom učitavanje konteksta ili stanja drugog.

Odnosi se na proces/metodu koju sustav koristi za promjenu procesa iz jednog stanja u drugo
pomoću CPU-ova prisutnih u sustavu.

**Primjer** 

Pretpostavimo da je u OS-u (N) broj procesa pohranjen u kontrolnom bloku procesa (PCB). 
Dok se proces izvodi, drugi procesi s najvišim prioritetom čekaju u redu za korištenje CPU-a radi dovršetka svog zadatka.

Prebacivanje konteksta omogućuje svim procesima dijeljenje jednog CPU-a kako bi završili
izvršavanje i pohranili status zadataka sustava.

Postoje 3 različite kategorije okidača za promjenu konteksta:
1. **Prekidi** (interrupts) - kada CPU zatraži čitanje podataka s diska, te ako dođe do bilo kakvih
prekida, prebacivanje konteksta automatski se prebacuje na komponentu hardvera koja može
brže podnijeti prekid
2. **Višezadaćnost** (multitasking) - mogućnost prebacivanja procesa s CPUa kako bi se mogao
pokrenuti drugi proces. Kada se proces promijeni, prethodno stanje se zadržava tako da bi se taj
proces mogao nastaviti izvoditi na istom mjestu u sustavu gdje je stao.

Skretnica korisnika/jezgre (user/kernel switch) - okidač se koristi kada OS treba prebacivati
između korisničkog načina rada i jezgrenog načina rada – !!!! bilo već riječi o tome ranije

#### Kontrolni blok procesa (process kontrol blok)

> Blok kontrole procesa (PCB) poznat je i kao blok kontrole zadataka.

**Kontrolni blok procesa (PCB) je struktura podataka koju računalo koristi za pohranu svih**
**informacija o procesu.** 

Kada se proces stvori (pokrene ili instalira), operacijski sustav automatski kreira upravitelja procesa.

###  Preventivno i nepreventivno zakazivanje/planiranje procesa

Bilješke: Preemptive Scheduling

Preventivno zakazivanje koristi se kada se proces prebaci iz aktivnog stanja u stanje spremnosti
ili iz stanja čekanja u spremno stanje. Resursi se dodjeljuju procesu na ograničeno vrijeme, a
zatim oduzimaju, a proces se ponovno vraća u spremni red čekanja ukoliko ima preostalo
vrijeme izvršavanja.
Taj proces ostaje u spremnom redu čekanja dok ne dobije sljedeću priliku za izvršenje.
Algoritmi koji se temelje na preventivnom rasporedu su Round Robin (RR), Shortest Remaining
Time First (SRTF), Priority (preemptive version), etc.
Prednosti
Pouzdana metoda jer proces možda neće monopolizirati procesor
Bilo koji događaj sprječava dovršavanje tekućih zadataka.
Poboljšano prosječno vrijeme odziva
Operativni sustav osigurava da svaki proces koji koristi CPU koristi istu količinu vremena
procesora

Non-Preemptive Scheduling
Nepreventivno zakazivanje koristi se kada se proces završi ili se proces prebaci iz pokretanja u
stanje čekanja.
U ovom zakazivanju, nakon što se resursi CPU dodijele procesu, proces zadržava CPU dok se ne
prekine ili ne dosegne stanje čekanja.
Nepreventivnog zakazivanje ne prekida proces koji se izvodi usred izvršenja. Umjesto toga, čeka
dok proces ne završi, a zatim može dodijeliti CPU drugom procesu.
Algoritmi koji se temelje na nepreventivnom rasporedu su: Shortest Job First (SJF basically non
preemptive) and Priority (nonpreemptive version), etc.
Prednosti
Minimalno opterećenje planiranja rasporeda.
Vrlo jednostavan postupak.
Koristi manje računalnih resursa.

## Niti / Threads

[[Thread (computing)]]

Nit je predstavlja zaseban put izvršenja nekog procesa.

**Svojevrsni manji, uvjetno rečeno laganiji, proces kojeg OS može zakazati i izvršavati istodobno s** **drugim nitima.**

OS stvara niti i upravlja njima te one dijele istu memoriju i resurse kao i program koji ih je stvorio.

Unutar Osa koji podržava multithreading, proces se može sastojati od mnogih niti.
Nit je tok (stream) s jednim slijedom (single sequence) unutar procesa.

**Niti se pokreću paralelno, poboljšavajući performanse aplikacije jer svaka pojedina nit ima**
**svoje CPU stanje i prostor ali s druge strane sve zajedno dijele adresni prostor procesa i okruženja.**

**Niti mogu dijeliti uobičajene podatke tako da ne moraju koristiti međuprocesnu komunikaciju.**

Kao i procesi, niti također imaju **stanja** poput 
- spremna
- izvršna
- blokirana itd.
- ready, running

**Prioritet** se mogu dodijeliti nitima baš kao i procesima, a prvo se izvršava nit najvišeg prioriteta.

Svaka nit ima svoj kontrolni blok niti (TCB – [[thread control block]]). 
**Kao i kod procesa, dolazi do zamjene konteksta (context switching) za nit, a sadržaj registra sprema se u (TCB).**
 
Multithreading je tehnika koja se koristi u operativnim sustavima za poboljšanje performansi i odziva računalnih sustava. Multithreading omogućuje višestrukim nitima (tj. laganim procesima) da dijele iste resurse jednog procesa, kao što su CPU, memorija i I/O uređaji.

#### Razlika između procesa I niti

**Primarna razlika je u tome što se niti izvršavaju ==unutar== istog ==procesa== u zajedničkom**
**memorijskom prostoru, dok se procesi izvode u odvojenim memorijskim prostorima.**

Niti nisu neovisne jedna o drugoj kao što su to procesi, već niti dijele s drugim nitima svoj dio
koda, dio podataka i resurse OS-a.

Ali, kao i procesi, nit imaju vlastiti programski brojač (PC), set podataka registra i adresni
prostor.

- **isti memorijski prostor**
- izvrsavanje unutar istog procesa
- nisu medusobno neovisne: dijele dio koda,podataka i resurse
- vlastiti `program counter`, registri, adresni prostor

za vise: [Virginia - Multi-threaded Processes](https://www.cs.virginia.edu/~cr4bd/3130/F2023/readings/thread.html#:~:text=1.4-,Multi%2Dthreaded%20Processes,-All%20the%20threads), [[CS3130 Processes and threads]]

### Vrste niti

#### User Level Threads

Ne stvaraju se preko sistemskih poziva te jezgra ne sudjeluje u upravljanju nitima.
Korisnik ih lako implementira na razini aplikacijskog softvera.

**Brže** su od niti na razini jezgre.
Kernel ne zna za postojanje višestrukih niti korisničke razine te upravlja njima kao da se radi o procesima s jednom niti.

#### Kernel Level Threads

Izvode se na razini kernela/jezgre.

Svaka nit se samoorganizira, a jezgra svakoj niti pruža vlastiti kontekst s informacijama o statusu
niti, kao što su njezin naziv, grupa i prioritet.
Znači umjesto da u unutar svakog procesa kernel ažurira tabelu s podacima o nitima, on ima
zajedničku master tablicu na razini sustava u kojoj vodi podatke za sve niti. 

Naravno kernel također kao što smo ranije govorili upravlja tabelom procesa aktivnih u sustavu.

**Sporije** se izvode od user level niti
Implementacija im je **kompleksnija**

#### Multithreading (višestruke niti) unutar OS

Na primjer, program ne može čitati pritiske na tipke tijekom izrade crteža, što znači da
ne može istovremeno izvršavati te zadatke.

Taj problem je rijesen `multitaskingom` tako da se **istovremeno** mogu izvršavati dva ili više
zadataka.

2 tipa multitaskinga – preko procesora ili putem niti.

**Multitaskingom temeljenim na procesoru u potpunosti upravlja OS, dok multitasking putem niti,**
**progamer koda može kontrolirati u određenoj mjeri.**

Proces je program koji se izvršava. Proces se može dalje podijeliti na neovisne jedinice poznate
kao niti. Nit je poput malog laganog procesa unutar procesa. Možemo reći da skup niti, u stvari,
predstavlja proces.

**2 tipa izvršavanja programa:**

- Istodobno izvršavanje (Concurrent Execution): događa se kada procesor uspješno prebacuje
	resurse između niti u višeslojnom procesu unutar jednog procesora
- Parallel Execution: kada svaka nit u procesu radi na zasebnom procesoru (CPU) u isto vrijeme u istom višeslojnom procesu

### Životni ciklus niti - statusi
 
- **New**: (`new` thread) počinje u ovom stanju
- **Runnable**: status niti nakon **pokretanja** (`Running`)

- **Waiting**: nit čeka da **druga nit izvrši zadatak**
- **Timed Waiting**(`Delayed`): nit je u ovom stanju dok ne istekne vrijeme

- **Terminated** (`Dead`): nakon izvršavanja zadatka

### Koristi multithreadinga

**Multithreading može poboljšati performanse i učinkovitost programa učinkovitijim korištenjem** **dostupnih CPU resursa. Izvršavajući više niti istovremeno, može iskoristiti paralelizam i smanjiti ukupno vrijeme izvršenja.**

1. Multithreading može poboljšati responzivnost u aplikacijama koje uključuju interakciju korisnika. 
		Odvajanjem dugotrajnih zadataka od glavne niti, **korisničko sučelje ostaje dostupno korisniku**.

2. Multithreading može omogućiti bolju iskorištenost resursa. Na primjer, u poslužiteljskoj
		aplikaciji više niti može istovremeno obrađivati dolazne `zahtjeve` klijenta, omogućujući
		poslužitelju da **istovremeno opslužuje više klijenata.**

3. Multithreading može olakšati bolju organizaciju koda i modularnost dijeljenjem složenih
		zadataka na manje, upravljive jedinice izvršenja. Svaka nit može obraditi određeni dio zadatka,
		**olakšavajući razumijevanje i održavanje koda.**

### Zastoji (==Deadlocks==)

Proces može koristiti resurse računala na nekoliko načina:

- Zahtjeva resurse
- Koristi resurse
- Oslobađa / otpušta resurse

**Zastoj nastaje kad je neki skup procesa blokiran jer svaki proces drži neki resurs te čeka na neki**
**drugi resurs koji je istovremeno dodijeljen nekom drugom procesu.**

Slika – process 1 drži resurs 1 ali I čeka na resurs 2 kojeg drži process 2 koji istovremeno čeka na
resurs 1 kojeg drži process 1 ………………

- [ ] dodati sliku

#### razlozi

**Uzajamna** isključenost (mutial exclusion)
	Nastaje kada se barem jedan resurs drži u načinu rada koji se ne može dijeliti, što znači da samo
	jedan proces može koristiti taj resurs u bilo kojem trenutku. Znači, samo jedan proces može
	imati ekskluzivan pristup resursu u bilo kojem trenutku dok ostali procesi koji traže isti taj resurs
	moraju čekati na njega
Proces 1 dobiva Resurs 1.
Proces 2 dohvaća Resurs 2.

**Drži** i čekaj (Hold and Wait)
	Proces mora držati barem jedan resurs za vrijeme dok čeka da ostali procesi oslobode resurse
	koje trenutno drže a koje taj proces treba.
	Proces 1 ima Resurs 1 i čeka Resurs 2.
	Proces 2 trenutno drži Resurs 2 i čeka Resurs 1.

	Oba procesa zadržavaju jedan resurs dok čekaju drugi.
	Bez pretpostavke (No Preemption)
	Resurs ne može biti uzet drugom procesu sve dok ga ovaj dobrovoljno ne oslobodi.

**Kružno** čekanje (circular wait): Procesi čekaju jedni druge u lancu (redu) čekanja odnosno jedan
	proces čeka na resurs kojeg drži drugi proces i tako u krug. Ovakav zastoj najčešće uzrokuje
	sistemsko gašenje OS-a budući da čekajući jedan na drugoga niti jedan proces ne uspjeva
	izvršiti svoj zadatak.

#### Metode rješavanja zastoja

**Prevencija**:

Cilj je osigurati da se sustav ne dovede u stanje zastoja tako da se spriječi pojava bilo koja od 4
tipa zastoja. Vrlo skupa implemntacija pa se to koristi samo u slučajevima kada je prioritet
stvaranje sustava bez zastoja.

Izbjegavanje:
Kako bi koristili strategiju izbjegavanja zastoja trebamo osigurati da nam sve informacije o
resursima koje će proces trebati budu poznate prije izvršenja procesa.

Detekcija i oporavak
Ako u samom softveru nije primijenjena politika sprječavanja ili izbjegavanja zastoja, protiv
zastoja se borimo pomoću postupka otkrivanja zastoja te postupka oporavka sustava tzv.
Vraćanje sustava s mrtve točke.
Dvije faze:
1. ispitujemo stanje procesa i provjeravamo postoji li zastoj u sustavu ili ne.
2. ako u prvoj fazi pronađemo zastoj, tada primjenjujemo algoritam za oporavak od zastoja.
Oporavak od zastoja može biti pomoću postupka prekida procesa
prekid svih procesa istovremeno (moguć gubitak podataka, potrebno više vremena)
Prekid pojedinog procesa, jedan po jedan, sve dok se ne eliminira krug zastoja
Oporavak od zastoja kroz proces pretpostavljanja resursa pokušavamo pronaći i odabrati koji
resurs i/ili proces nam trebaju za prekid zastoja
Faktori koji se uzimaju u obzir za odabir mogu uključivati broj resursa koji drže proces na mrtvoj
točki i/ili vrijeme koje je proces potrošio a nije se izvršio.

Vraćanje procesa unatrag (rollback) predstavlja pristup kod rješavanja zastoja na način da se
određeni proces prekida te ga se iznova pokreće od početne točke
Ignoriranje zastoja
Ako se neki zastoji rjetko pojavljaju, moguće ih je ignorirati te pokrenuti postupak ponovnog
porketanja sustava (restart)

## Upravljanje memorijom

### Što je glavna memorija?

- predstavlja niz riječi ili bajtova, veličine od stotina tisuća do nekoliko milijardi
- spremište brzo dostupnih informacija koje međusobno dijele CPU i I/O uređaji
- mjesto gdje se čuvaju programi i informacije – samo ako ih CPU koristi na učinkovit način
povezana je s procesorom, tako da je premještanje uputa i informacija u procesor i iz njega
izuzetno brzo
- uobičajeni naziv = RAM (Random Access Memory – memorija s izravnim pristupom).
- nestabilna je odnosno gubi sve podatke u njoj pohranjene ako dođe do prekida napajanja tj
gašenja OS-a računala
Što je upravljanje memorijom?
- u računalima koja mogu izvršavati više programa odjednom (multiprograming) operativni
sustav se nalazi u jednom dijelu memorije, dok se ostatak memorije koristi za ostale procese
- upravljanje memorijom predstavlja postupak dijeljenja memorije između više procesa s ciljem
efikasnog korištenja postojećih memorijskih resursa

Logički i fizički adresni prostor
Adresni prostor kojeg generira CPU naziva se logička adresa ili virtualna adresa. Definira se
veličinom nekog procesa. Može se mijenjati tijekom izvršavanja procesa.
Fizički adresni prostor predstavlja adresu kako ju vidi memorijska jedinica kada je učitana u
njezin Registar memorijskih adresa.
Obično je poznata kao fizička adresa ali i kao stvarna adresa.

Skup svih fizičkih adresa koje odgovaraju logičkim adresama poznat je kao Fizički adresni
prostor. Fizičku adresu izračunava MMU – Jedinica za upravljanje memorijom. Fizička adresa
uvijek ostaje konstantna.

Statičko i dinamičko učitavanje
Statičko učitavanje u stvari učitava cijeli program u stalni adresni prostor što zahtijeva više
memorijskog prostora.
Dinamičko učitavanje:
Cijeli program i svi podaci procesa moraju biti u fizičkoj memoriji da bi se proces izvršio što
znači da je veličina procesa ograničena na veličinu fizičke memorije.
Da bi se postiglo odgovarajuća iskorištenost memorije koristi se dinamičko učitavanje u kojem
se pojedina rutina u procesu ne učitava dok se ne pozove.
Prednost je da se neiskorištena rutina nikada ne učitava.

## Swapping – zamjene

**Zamjena je proces privremenog premještanja procesa iz glavne memorije u sekundarnu**
**memoriju, koja je brža u usporedbi sa sekundarnom memorijom.**

==Zamjena omogućuje pokretanje više procesa koji se mogu istovremeno uklopiti u memoriju.==

Koristimo i izraz uvođenje jer npr kod procesa višeg prioriteta, upravitelj memorije može izvršiti
njegovu zamjenu s procesom nižeg prioriteta, te ga učitati i izvršiti prvog. 

Nakon završetka rada procesa višeg prioriteta, proces nižeg prioriteta se zamijeni u memoriji i nastavi s procesom izvršenja.

### Dodjeljivanje memorije

Jedna od najjednostavnijih metoda za dodjelu memorije je podjela memorije na nekoliko particija fiksne veličine gdje svaka particija sadrži točno jedan proces.

Dodjeljivanje višestrukih particija proces se odabire u nekom redu čekanja te ga se učitava u
prvu slobodnu particiju. Kada se proces završi, ta particija postaje dostupna za druge procese.
Fiksna dodjela particija: OS ažurira tablicu koja pokazuje koji su dijelovi memorije dostupni, a
koje djelove su već zauzeli neki procesi.
Na početku je sva memorija dostupna za korisničke procese te je vidljiva kao jedan veliki blok
memorije dostupne za procese koristi se naziv "Rupa (Hole)"
Kada se neki proces pokrene i treba memoriju, OS traži rupu u memoriji dovoljne veličine za
pohranu tog procesa. Ostatak memorije se zadržava na raspolaganju za buduće zahtjeve
Kod dodjele memorije procesima koristi se nekoliko pristupa:
FIRST FIT procesu se dodijeljuje prvi slobodni memorijski prostor dovoljne veličine („prva
rupa”) – na slici prva dva prostora nisu dovoljno velika
BEST FIT dodjeljuje se najmanji mogući prostor koji veličinom odgovara zahtjevu procesora.
OS treba proći cijelu tablicu dok ne pronađe odgovarajuću „rupu”
WORST FIT OS procesu dodjeli najveći dostupni prostor što nije baš najbolje jer ostaje mnogo
neiskorištenih praznina kao što je vidljivo na slideu

## Fragmentacija

Bilješke: Fragmentacija nastaje kada proces nakon što se učita i ukloni iz memorije, stvori malu
slobodnu rupu.
Te rupe se **ne mogu dodijeliti novim procesima** jer se ili ne mogu kombinirati ili ne ispunjavaju
zahtjeve procesa za memorijskim prostorom.

Unutarnja fragmentacija nastaje kada se memorijski blokovi dodijele procesu ali više od tražene
veličine. Zbog toga ostaje neiskorišteni prostor te nastaje problem interne fragmentacije.
Primjer: Postoji fiksna particija koja se koristi za dodjelu memorije a koja je raznih veličina
blokova 3MB, 6MB i 7MB. Pojavi se novi proces veličine 2MB koji dobije memorijski blok od 3 MB
blok memorije od 1 MB je gubitak koji se ne može dodijeliti drugim procesima.
U vanjskoj fragmentaciji imamo blokove slobodne memorije, ali ih ne možemo dodijeliti procesu
jer nisu susjedni.

`Primjer`: Pretpostavimo da novi proces zahtijeva blok memorije od 3 MB, koji je dostupan, ali ga
ne možemo dodijeliti jer slobodan memorijski prostor nije neprekinut.
Vanjska fragmentacija utječe na procese dodjele memorije First Fit i Best Fit.
Za rješavanje problema vanjske fragmentacije koristimo postupak zbijanja (compacting) kojim
se sav slobodni memorijski prostor kombinira i koprimira u jedan veliki blok kojeg onda dalje
mogu učinkovito koristiti ostali procesi

## Paging

**Postupak dohvata procesa u** obliku stranica (pages) iz **sekundarne memorije** u glavnu **memoriju se naziva Paging.**

**Osnovna svrha mu je razdvojiti svaki postupak(proces) na tzv stranice** dok se za podjelu glavne memorije koriste tzv okviri (Frames).

Kod paginga ==fizička memorija== je **podijeljena je blokove nepromjenjive veličine** koji se nazivaju
**Frame**-ovi, a koji su iste veličine kao i stranice koje proces koristi.

Logički adresni prostor procesa također je podijeljen na blokove nepromjenjive veličine koji se
nazivaju **stranice**, a koji su iste veličine kao i Frame-ovi stranice.

Kada proces zahtijeva određenu količinu memorije, operacijski sustav dodjeljuje jedan ili više
Frame-ova stranice procesu te mapira logičke stranice procesa na fizičke Frame-ove stranica.
Mapiranje između logičkih stranica i fizičkih Frame-ova stranica se ažurira u tzv **tablici stranice**,
koju jedinica za upravljanje memorijom (memory management unit **MMU**) koristi za ==prevođenje==
==logičkih adresa u fizičke adrese==. 

**Tablica stranice mapira svaki logički broj stranice u fizički broj okvira stranice.**

- fizicka memorija podijeljena na blokove odnosno **Frameove**
- virtualna podijeljena na stranice(Page)
- virtualna memorija spremljena na Disk
- tablica mapiranja Page -> Frame

### Virtualna memorija

Bilješke: Virtualna memorija predstavlja način dodjele prostora za pohranu (hard disk) kojim se
sekundarna memorija može koristiti kao da je dio glavne memorije.
Veličina virtualne pohrane ograničena je shemom adresiranja računalnog sustava i količinom
sekundarne memorije dostupnom neovisno o veličini glavnog prostora za pohranu podataka.
Tehnika virtualne memorije mapira memorijske adrese (tzv virtualne adrese) koje koristi program
na fizički adresni prostor u memoriji računala.

Sve reference memorije unutar procesa su logičke adrese koje se za vrijeme izvođenja dinamički
prevode u fizičke adrese. To znači da neki proces može zauzimati različita mjesta u glavnoj
memoriji u različito vrijeme tijekom izvođenja.

#### Demand paging

**Isto tako, proces se može razdvojiti na više dijelova koji se ne moraju stalno nalaziti u glavnoj**
**memoriji tijekom izvođenja već se učitavaju u nju po potrebi odnosno kada su potrebni za**
**izvođenje cjelovitog procesa.**

**Ta tehnika se naziva Demand Paging (straničenje na zahtjev)**.

Npr, ako CPU želi pristupiti stranici P2 od nekog procesa P, najprije će ju potražiti u tablici
stranica (page table)
Budući da page table ne sadrži stranicu P2, ona će biti tzv Trap ili page fault. Čim se dogodi page
fault, dogodi se context switching te kontrola odlazi nazad Osu koji proces stavlja u stanje
waiting ili u stanje blocked
OS sada pretražuje sekundarnu memoriju kako bi pronašao stranicu P2
OS ju je pronašao u sekundarnoj memoriji te ju sada učitava u glavnu memoriju.
Nastavno dalje, OS ažurira zapise u tablici stranica
Konačno, kontrolu dalje preuzima CPU te se nastavlja izvršenje procesa
Vrijeme potrebno za obradu Page Faulta se naziva Page Fault Time i obuhvaća vrijeme potrebno
za izvođenje svih gore navedenih šest koraka.

**Prednosti**

Povećava razinu multiprogramiranja jer mnogi procesi mogu istovremeno biti prisutni u glavnoj
memoriji.
Učinkovitija je uporaba memorije jer se procesi čija je veličina veće od veličine glavne memorije
također mogu izvoditi pomoću mehanizma Virtualne memorije jer ne učitavamo cijelu stranicu
odjednom.

**Nedostaci**

Količina neizravnog korištenja procesora kao ii broj tablica koje se koriste za upravljanje Page
Fault-ovima je veći nego u običnoj tehnici upravljanja stranicama.

Slajd 55: HeapMemView, RAMMap, VMMap, ….

### Upravljanje pohranom podataka

Upravljanje pohranom se odnosi na upravljanje opremom za pohranu podataka koja se
koristi za pohranu podataka generiranih od strane korisnika / računala.

Kategorija upravljanja pohranom sadrži različite vrste potkategorija koje pokrivaju aspekte kao
što su **sigurnost**, **virtualizacija**, snapshot, **kompresija**, **replikacija**, kao i različite vrste dodjele
resursa ili automatizacije istih.

Ključni atributi:

1. Izvedba (performance)
2. Pouzdanost (reliability)
3. Mogućnost povrata (disaster and recovery)
4. Kapacitet (capacity)

#### Ograničenja upravljanja pohranom:
 
**Ograničeni kapacitet fizičke pohrane:** 

Operativni sustavi mogu upravljati samo raspoloživim
fizičkim prostorom za pohranu što znači da postoji ograničenje količine podataka koji se mogu
pohraniti.

**Degradacija performansi:** 

Kako se pohranjuje više podataka, performanse sustava se smanjuju
zbog povećanog vremena pristupa disku, fragmentacije i drugih faktora.
Složenost upravljanja pohranom: Upravljanje pohranom može biti složeno, pogotovo kad se
povećava veličina skladišnog prostora.

**Trošak:** 

Pohranjivanje velikih količina podataka može biti skupo kao i trošak stalnog povećavanja
kapaciteta.

**Sigurnosni problemi:** 

Pohranjivanje osjetljivih podataka predstavlja sigurnosni rizik, pa OS treba
posjedovati snažne sigurnosne značajke kako bi se spriječio neovlašteni pristup podacima.

**Backup and Recovery:** 

Može biti poseban izazov, osobito ako su podaci pohranjeni na više
različitih mjesta

### Datotečni sustavi

- **FAT** (File Allocation Table): **Stariji** datotečni sustav kojeg koriste starije verzije sustava
		Windows i drugi operacijski sustavi.
- **NTFS** (New Technology File System): Moderni datotečni sustav kojeg koriste noviji **Windowsi**.
		Podržava značajke kao što su dozvole za datoteke i mape, sažimanje i šifriranje.
- **ext** (Extended File System): Datotečni sustav koji se obično koristi na operativnim sustavima
		temeljenim na **Linuxu** i **Unixu**
- **HFS** (Hierarchical File System): Datotečni sustav koji koristi macOS
- **APFS** (Apple File System): Novi datotečni sustav koji je Apple uveo za svoje Mac i iOS uređaje

**Prednosti**

- **Organizacija**: datotečni sustav omogućuje organiziranje datoteka u direktorije i poddirektorije,
što olakšava upravljanje datotekama i njihovo pronalaženje.

- **Zaštita** podataka: datotečni sustavi često uključuju značajke kao što su dozvole za datoteke i
		mape, sigurnosno kopiranje i vraćanje te otkrivanje i ispravljanje pogrešaka radi zaštite
		podataka od gubitka ili oštećenja.
- Poboljšane **performanse**: Dobro dizajniran datotečni sustav može poboljšati performanse
		čitanja i pisanja podataka učinkovitom organizacijom na disku.

**Nedostatci**

- Problemi s kompatibilnošću: različiti datotečni sustavi možda nisu međusobno kompatibilni,
		što otežava prijenos podataka između različitih operacijskih sustava.
- Prostor na disku: datotečni sustavi mogu koristiti prostor na disku za pohranu metapodataka i
		drugih informacija, smanjujući količinu prostora dostupnog za korisničke podatke.
- Ranjivost: datotečni sustavi mogu biti osjetljivi na oštećenje podataka, zlonamjerni softver i
		druge sigurnosne prijetnje, što može ugroziti stabilnost i sigurnost sustava.

#### Datotečni sustavi – alokacija datoteka

Posao datotečnog sustava je da datoteke budu organizirane na najbolji mogući način.

Kad god se datoteka izbriše s hard diska na njemu se stvara slobodan prostorn. Kako bi taj
prostor mogli ponovno alocirati za druge podatke, File system treba znati gdje su ti prazni
prostori tj treba pratiti sve tzv blokove – prazne ali I one popunjene podacima.

File System sprema podatke u blokove na hard disku. 
Neki podatak može biti razbijen na više blokova ne nužno poredanih jedan uz drugi.

Zbirka datoteka predstvalja direktorij (imenik) datoteka. Imenik sadrži informacije o
datotekama, uključujući atribute, mjesto i vlasništvo. Većinom tih informacija, posebno onih
koje se bave pohranom, upravlja operativni sustav – search, create, delete, list, rename…..

#### NAČINI ALOKACIJE (dodjele) PROSTORA DATOTEKAMA

**Neprekinuta alokacija**

Jedan kontinuirani skup blokova dodjeljuje se datoteci u vrijeme stvaranja datoteke. Tablica za
dodjelu datoteka sadržava samo jedan unos za svaku datoteku početni blok i duljinu datoteke.
Na ovaj način, istovremeno se može čitati više blokova što poboljšava ulazno-izlazne
performanse obrade podataka.

**Povezana alokacija**

- linked list
 
Dodjela se odvija pojedinačno blok po blok. Svaki blok sadrži pokazivač na sljedeći blok u
lancu. **Tablica datoteka treba samo jedan unos za svaku datoteku**, prikazujući početni blok i
duljinu datoteke.
Blokovi se dodaju po potrebi. Blokovi ne moraju biti kontinuirani. Povećanje veličine datoteke
uvijek je moguće ako je dostupan slobodan blok diska

**Indeksirana alokacija**

Tablica Dodjele datoteka sadrži zaseban indeks za svaku datoteku. Indeks ima po jednu stavku
za svaki blok dodijeljen datoteci.

Dodjela može biti na temelju blokova fiksne veličine ili blokova promjenjive veličine.

Ova tehnika dodjele podržava i sekvencijalni i izravan pristup datoteci i stoga je **najpopularniji**
**oblik dodjele datoteka**.

#### Upravljanje slobodnim prostorom

Kao što OS upravlja prostorom koji je dodijeljen datotekama, tako mora upravljati I
prostorom koji trenutno nije dodijeljen nijednoj datoteci potrebno je znati koji su blokovi na
disku dostupni.

OS uz ažuriranje tablice za dodjelu datoteka, održava i tablicu za dodjelu diska

Načini upravljanja slobodnim prostorom

- Bit Tables: Metoda koristi vektor koji sadrži jedan bit za svaki blok na disku. Svaki unos za 0
		odgovara slobodnom bloku i svaki unos 1 odgovara bloku koji je zauzet
		Na primjer 00011010111100110001
- Free Block List: Svakom bloku se dodjeljuje uzastopni broj, a lista brojeva svih slobodnih
		blokova se održava u posebno za to rezerviranom bloku diska.

#### Raspoređivanje I/O zahtjeva

Disk scheduling (raspoređivanje diska) - OS upravlja ulazno/izlaznim zahtjevima koji
stižu na disk. Raspoređivanje diska poznato je i kao **I/O Scheduling**.

Više ulazno-izlaznih zahtjeva dolazi od različitih procesa, a kontroler diska istovremeno može
obraditi samo jedan ulazno/izlazni zahtjev drugi ulazno-izlazni zahtjevi moraju čekati u redu
čekanja.

Dva ili više zahtjeva mogu biti udaljeni jedan od drugoga, što rezultira dužim zapisivanjem
podataka na disk.

- Seek Time: Vrijeme traženja je vrijeme potrebno za pronalaženje određenog bloka na disku na
kojem se podaci trebaju čitati ili zapisivati. Što je manji seek time, to bolje
- Rotational Latency: vrijeme potrebno željenom sektoru diska da se rotira u položaj tako da može
pristupiti glavama za čitanje/pisanje.
- Transfer Time: Vrijeme prijenosa je vrijeme potrebno za prijenos podataka. Ovisi o brzini
rotiranja diska i broju bajtova koji će se prenijeti.
- Disk Access Time:
		Disk Access Time = Seek Time + Rotational Latency + Transfer Time
- Total Seek Time = Total head Movement * Seek Time
- Disk Response Time: Prosječno vrijeme utrošeno na zahtjev koji čeka da izvede svoju
		ulazno/izlaznu operaciju.

#### Redundancija diska - RAID

[[RAID]]

Bilješke: RAID tehnika koja koristi kombinaciju više diskova umjesto korištenja jednog diska za
povećane performanse, redundanciju podataka ili oboje.

**Data redundancy**, iako zauzima dodatni prostor, povećava pouzdanost diska. U slučaju kvara
diska, ako se isti podaci sigurnosno kopiraju na drugi disk, možemo dohvatiti podatke i nastaviti
s radom. S druge strane, ako se podaci nalaze na više diskova, bez RAID tehnike, gubitak jednog
diska može utjecati na cijele podatke.

Ključni faktori kod implementacije RAID-a

- **Reliability**: Koliko kvarova na disku sustav može tolerirati?
- **Availability**: koliko je sustav dostupan za stvarnu upotrebu?
- **Performance**: Koliko je vrijeme odziva? Kolika je propusnost (stopa obrade zadataka)?
- Capacity: Koliko je korisnog kapaciteta dostupno korisniku?
		RAID je vrlo transparentan jer se op. sustavu prikazuje kao jedan veliki disk koji se predstavlja
		kao linearni niz blokova.

To omogućuje da se starije tehnologije zamjene RAID-om bez previše promjena postojećeg
koda.

RAID razine
RAID-0 (Stripping)
RAID-1 (Mirroring)
RAID-2 (Bit-Level Stripping with Dedicated Parity)
RAID-3 (Byte-Level Stripping with Dedicated Parity)
RAID-4 (Block-Level Stripping with Dedicated Parity)
RAID-5 (Block-Level Stripping with Distributed Parity)
RAID-6 (Block-Level Stripping with two Parity Bits)

## Virtualizacija

Virtualizacija omogućava rad više logičkih ili aplikacijskih procesa na jednom računalu
tako da na siguran i pouzdan način dijeli resurse fizičkog računala između virtualnih okruženja
koja postoje na tom istom računalu. Postiže se tako da se na fizičkom računalu instalira
određeni virtualizacijski softver, odnosno hipervizor, kojeg biramo u skladu s potrebama I
mogućnostima.
Virtualizaciju možemo opisati kao tehnologiju koja nam omogućuje da na jednom računalu
imamo više virtualnih računala, odnosno više operativnih sistema koji mogu biti i različiti, a za
sve to nam ne treba dodatno sklopovlje (hardware) pa ne stvaramo nepotrebne troškove.
Znači da više operativnih sustava ili aplikacija dijeli resurse jednog sklopovlja (procesor, radna
memorija, kapacitet hard diska, mreža).
Dakle, možemo imati i dvije verzije
Windowsa, a možemo imati i Windows XP, Windows 7, Linux itd.

Virtualizacijski softver se na računalu ponaša kao i svaka druga aplikacija, no on ima zadatak da
„glumi“ drugo računalo.
Danas postoji puno kvalitetnih virtualizacijskih platformi, a među najpoznatijima su VMware,
Hyper-V, Xen, KVM i Oracle VIrtualBox. Najrašireniji je VMware koji drži oko 70% tržišta za
virtualizacijske platforme
Razvoj virtualizacijskih tehnologija započinje 1960-tih godina u IBM-u. Riječ je bila o projektu
M44/44X kojem je cilj bio logički podijeliti fizički sustav na različite virtualne strojeve kako bi se
poboljšala iskorištenost sklopovlja. Takav središnji sustav podržavao je istovremeno izvođenje
većeg broja procesa i programa. Zbog skupog sklopovlja i veće iskorištenosti računala to je
značilo značajne financijske uštede.
Na IBM računalima razvijen je i prvi CTSS (eng. Compatible Time Sharing System) sustav na MITu. Riječ je o sustavu koji omogućuje dijeljenje resursa računalnog sustava između različitih
korisnika (ljudi ili programa). Na taj način omogućuje se naizgled istovremeno obavljanje više
različitih zadataka.

Slajd 64: Virtualizacija memorije

Bilješke: Virtualizacije memorije je postupak kojim se u grozdovima računala (cluster) stvara
jedinstveni prostor RAM (Random Access Memory) memorije kojem mogu pristupati sva
računala. Na taj način distribuirani I umreženi poslužitelji imaju dostupne veće RAM kapacitete
što omogućuje povećanje učinkovitosti i lakše dijeljenje podataka.
Ova vrsta virtualizacije ostvaruje se tako da se fizički adresni prostori preslikaju u virtualne
adresne prostore preko kojih se pristupa stvarnim memorijskim adresama u različitim
spremnicima.
Poslužitelj koristi logički adresni prostor, a sve promjene u fizičkom adresnom prostoru
maskiraju se mijenjanjem postavki prevoditelja zahtjeva ili tzv. „meta-data“ maskiranjem.
To znači da će u slučaju premještanja podataka, zahtjev za stalnom logičkom lokacijom tih
podataka u prevoditelju jednostavno preusmjeriti na novu fizičku lokaciju.

Slajd 65: Virtualizacija programa

Bilješke: Programi se također mogu virtualno izvoditi na operacijskim sustavima.
Pritom se pokreću na jednom sustavu, a koriste datoteke i sredstva udaljenog računala.
Instalacija programa npr može uključivati instalaciju klijenta za neki mrežni protokol (npr. HTTP)
pomoću
kojeg se distribuirano pristupa dijelovima programa i usluga a na taj način se olakšava izvođenje
programa na operacijskim sustavima za koje nisu izravno oblikovani, izbjegava se virtualizacija
cijelog OS-a na klijentskom računalu, a i računalo se štiti od lose napisanog programskog koda.
Virtualizacija programa općenito preusmjerava zahtjeve programa za pristup datotekama u
druge posebno oblikovane datoteke preko kojih se dobivaju potrebni podaci.

Slajd 66: Virtualizacija računalnog sustava - potpuna

Bilješke: Virtualizacija računalnog sustava omogućuje simuliranje računalnog okruženja čime
se sakrivaju
svojstva izvorne platforme.

Virtualna računala se izvrđavaju kao da su izravno povezana na hardver, ali u stvarnosti njihov je
pristup računalnim resursima ograničen virtualnom okolinom.

Potpuna virtualizacija oponaša dovoljno hardvera da se operacijski sustav nepromijenjen može
izvoditi na virtualnom računalu. Virtualno hardversko okruženje pritom uključuje procesor,
radnu memoriju te dodatne memorijske i periferne uređaje (USB, grafičke, zvučne kartice i
slično).
Potpuna virtualizacija uključuje ispunjavanje sljedeća tri zahtjeva:
1. ekvivalencija – programi pokrenuti na virtualnom sustavu ponašaju se potpuno jednako kao
što bi se ponašali na odgovarajućem realnom sustavu,
2. upravljanje sredstvima – virtualizacijska podrška potpuno upravlja virtualnim sredstvima
3. učinkovitost – većina strojnih instrukcija može se izvoditi izvan virtualne okoline.

Slajd 67: Virtualizacija računalnog sustava - djelomična

Bilješke: Djelomična virtualizacija za razliku od potpune virtualizacije ne uključuje simulaciju
cijelog sklopovlja, već samo određenog dijela. To najčešće znači da se na virtualnom stroju ne
može pokretati cijeli operacijski sustav, ali može se pokretati velik broj programa. Primjer
djelomične virtualizacije je odvajanje adresnih prostora, odnosno dodjeljivanje zasebnog
virtualnog adresnog prostora svakom virtualnom stroju.
Riječ je o metodi koja omogućuje simuliranje operacijskih sustava, ali za razliku od potpune
virtualizacije ne simulira se izravan rad sa sklopovljem već se komunikacija obavlja preko
posebnog API-ja (Application Programming Interface) koji se naziva „hypervisor“.
Zbog toga se sustavi ne mogu instalirati na virtualnom stroju u izvornom obliku već je potrebno
prilagoditi ih za komunikaciju s nadzornim (eng. hypervisor) sučeljem.

Sklopovski (hardverski) potpomognuta virtualizacija

odnosi se zapravo na potpunu virtualizaciju koja koristi posebno prilagođene procesore fizičkog
poslužitelja.
Virtualne okoline koji koriste hardversku potporu su WMware Workstation, Xen 3.x, Linux KVM i
Mycrosoft Hyper-V.
Problem kod ove vrste virtualizacije je zahtjev za posebnim hardverom koje povećava
učinkovitost rada u virtualnim okolinama, ali smanjuje učinkovitost kod drugih primjena.

Slajd 68: Virtualizacija na razini OS-a

Bilješke: Kod ove vrste virtualizacije jezgra ili operacijski sustav omogućuju odvajanje
korisničkih prostora koji sa strane korisnika izgledaju kao potpuni poslužitelji.
Pritom su često uključeni alati za upravljanje računalnim sredstvima (memorijom, diskom i sl.).
Problem kod ove vrste virtualizacije je taj što se ne mogu koristiti virtualni poslužitelji s različitim
operacijskim sustavima od stvarnog poslužitelja.
Prednosti su pak što nema narušavanja učinkovitosti rada virtualnih strojeva jer se izravno
koristi stvarni operacijski sustav, bez sklopovskog ili programskog prevođenja virtualnih u
stvarne naredbe.
Na slici vidimo da nema VMM sloja, već se virtualni sustavi pokreću iznad operacijskog sustava
domaćina. Pritom su svi sustavi isti kao i sustav domaćin (HOST) a jedino su podijeljeni u
odvojene poslužitelje

Slajd 69: Arhitektura hipervizora

Bilješke: Hyper V provodi izolaciju virtualnih strojeva na način da koristi particiju u kojoj se OS
izvodi. Hipervizor instanca mora imati minimalno jednu „roditeljsku“ (parent) particiju na kojoj
se izvodi podržavana verzija Windows Servera (2008 i dalje).
Virtualizacijski sloj izvodi se u „roditeljskoj“ particiji i ima izravan pristup hardverskim
uređajima.
Iz „roditeljske“ particije mogu se zatim stvarati „dječje“ (child) particije koje služe kao domaćin
za gostujuće OS. „Dječje“ particije kreiraju se korištenjem API hypercalla.
„Dječje“ particije nemaju pristup hardverskim resursima, nego umjesto toga imaju virtualni
pogled na resurse.
Bilo kakav zahtjev za virtualnim uređajima je preusmjeren preko VM Bus (Virtual Machine Bus)
do uređaja u roditeljskoj particiji koji onda rješava zahtjeve.

##  Sigurnost OS-a

Bilješke: Općenito, računalna sigurnost podrazumijeva nekoliko različitih ciljeva:
1. **Dostupnost** podataka i usluga – korisnik u svakom trenutku može pristupiti podacima i
		uslugama za koje ima ovlasti i taj se pristup prekida tek po završetku cjelokupne radnje,
		odnosno ne može biti neočekivano prekinut djelovanjem treće strane. Također,
		dostupnost podrazumijeva i **prihvatljivu brzinu komunikacije**, tj. korisnik ne mora
		neopravdano dugo čekati reakciju poslužitelja ili programa.
		
2. **Tajnost** – vrijednosti podataka mogu doznati samo ovlašteni korisnici
3. **Integritet** – podatke mogu mijenjati samo ovlašteni korisnici
4. **Autentičnost** – Osoba ili program koji izvode neku radnju nesumnjivo su ti za koje se identifikacijskom oznakom predstavljaju.

**Dostupnost** podataka često se može narušiti pretjeranim zauzimanjem računalnih ili mrežnih
sredstava koji onda postaju nedostupni za druge korisnike i/ili programe. 

**Tajnost** i **integritet** podataka mogu se narušiti ukoliko se zbog programskih propusta stekne `pristup` određenom
dijelu sustava (diska ili memorije). 

Također, narušavanje svojstva **autentičnosti** (odnosno lažno predstavljanje) za sobom povlači i sva prava napadnutog korisničkog računa što može uključivati i pristup podacima koji su inače zaštićeni.

___

## 3. Virtualizacija i sigurnost 

Virtualizacija kao metoda ima određene prednosti u smislu sigurnosti jer prema definiciji potpuno logički odvaja dijelove istog fizičkog sustava i na taj način ih štiti. S druge strane pretpostavka takve odvojenosti može biti opasna jer su u slučaju propusta u virtualizacijskoj platformi virtualni sustavi izloženiji međusobnim napadima nego oni fizički odvojeni. U ovom poglavlju razmatra se virtualizacija s gledišta njezinih sigurnosnih prednosti i nedostataka. 3.1. Sigurnosni ciljevi i rizici Općenito, računalna sigurnost podrazumijeva nekoliko različitih ciljeva. Oni se mogu podijeliti na sljedeći način:  Dostupnost podataka i usluga – korisnik u svakom trenutku može pristupiti podacima i uslugama za koje ima ovlasti i taj se pristup prekida tek po završetku cjelokupne radnje, odnosno ne može biti neočekivano prekinut djelovanjem treće strane. Također, dostupnost podrazumijeva i prihvatljivu brzinu komunikacije, tj. korisnik ne mora neopravdano dugo čekati reakciju poslužitelja ili programa.  Tajnost – vrijednosti podataka mogu doznati samo ovlašteni korisnici  Integritet – podatke mogu mijenjati samo ovlašteni korisnici  Autentičnost – Osoba ili program koji izvode neku radnju nesumnjivo su ti za koje se identifikacijskom oznakom predstavljaju. Dostupnost podataka često se može narušiti pretjeranim zauzimanjem računalnih ili mrežnih sredstava koji onda postaju nedostupni za druge korisnike i/ili programe. Tajnost i integritet podataka mogu se narušiti ukoliko se zbog programskih propusta stekne pristup određenom dijelu sustava (diska ili memorije). Također, narušavanje svojstva autentičnosti (odnosno lažno predstavljanje) za sobom povlači i sva prava napadnutog korisničkog računa što može uključivati i pristup podacima koji su inače zaštićeni. 3.2. Virtualizacija kao metoda zaštite Ideja virtualizacije sama po sebi uključuje sigurnosne ciljeve zbog toga što u idealnom slučaju potpuno razdvaja dijelove sustava. Može ograničiti procesorska, memorijska i druga računalna sredstva koja se koriste. To povlači za sobom i ograničavanje okruženja u kojem se izvode različiti programi. Šteta koju crv, virus ili drugi štetni program nanese virtualnom sustavu ostaje izolirana u tom sustavu, a drugi dijelovi fizičkog sustava su netaknuti. Zato se virtualne okoline često koriste i kao metoda za ispitivanje programa i njihov razvoj (npr. osjetljivi dijelovi programa u izradi pokreću se u virtualnom stroju kako bi eventualna šteta ostala na razini tog virtualnog sustava). Osim toga, virtualni sustavi se nakon rušenja mnogo lakše i brže oporavljaju jer se mogu ponovno pokrenuti na istom ili na drugom računalu. To podrazumijeva i veću dostupnost sustava jer je manje vremena izvan funkcije - upravo zato što se jednostavno odmah može prenijeti (prekopirati) na ispravno fizičko računalo i pokrenuti. Virtualizacija spremnika podataka isto tako poboljšava njihovu dostupnost. Lakše kopiranje i prijenos virtualnih sustava na druga računala također omogućuje lakše forenzičke analize u slučaju zlouporaba. Virtualizacija se može koristiti i za ispitivanje ponašanja napadača i zlonamjernih korisnika te načina na koji pokušavaju ugroziti sustav. Takve spoznaje mogu bitno doprinijeti zaštiti stvarnih sustava. 

### Sandbox

**Primjer sigurnosne tehnologije koja se može zasnivati na virtualizaciji je Sandbox.** 

Riječ je o zaštiti računala i podataka od neželjenih i štetnih programa koja se provodi tako da se ograničavaju računalna sredstva dostupna tim programima. To mogu biti: 

- **procesorsko** vrijeme i memorija
- **mrežni** pristup
- **pristup** **datotekama** na lokalnom ili nekom drugom poslužitelju i  učitavanje datoteka s udaljenog poslužitelja. 

Ograničavanjem prostora i mogućnosti koje program ima pri komunikaciji s operacijskim sustavom, njegova se okolina predstavlja manjom nego što zaista jest. 



Popularni primjeri Sandbox alata su tzv. `appleti`. Riječ je o čestim dodacima za web preglednike koji omogućuju pokretanje programskog koda na web stranicama. Ograničavanjem uvjeta u kojima se takvi programi pokreću smanjuje se šteta koju mogu nanijeti operacijskom sustavu.

[^1]: [[Software portability]]