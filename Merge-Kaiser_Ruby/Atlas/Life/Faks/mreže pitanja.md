

- topologija 

- dns

- paritet 

- Ip address 

- icmp protocol 

- pcm pulse code modulation
___


# Detaljni odgovori na mrežni i telekomunikacijske termine

## **TOPOLOGIJA**

Topologija je način na koji su čvorovi fizički ili logički raspoređeni i međusobno povezani u mreži. Razlikujemo:

### Vrste topologija:

**1. Zvjezdana topologija (Star)**
- Sve računale su povezane na centralni hub ili switch
- Ako jedan kabl padne, samo taj uređaj je odsječen
- Ako se central uređaj sruši, cijela mreža prestaje raditi
- **Primjer**: Kućna WiFi mreža sa ruterom kao centrom

**2. Sabirnička topologija (Bus)**
- Svi uređaji su povezani na jednu centralnu liniju (magistralu)
- Stari [[Ethernet]] standard (10BASE5)
- Ako se jedan dio kabla prekine, cijela mreža prestaje raditi
- Svi uređaji dijele istu propusnost
- samo jedan uređaj mogao slati podatke istovremeno
- Rijetko se koristi danas

**3. Prstenasta topologija (Ring)**
- Uređaji su raspoređeni u krug, gdje svaki uređaj ima točno **dva susjeda**
- Token Ring tehnologija - samo uređaj koji drži "token" može slati podatke
- Ako jedan uređaj ne radi, može prekida kruga (osim u dual-ring konfiguraciji)
- Koristi se u nekim industrijskim aplikacijama

**4. Mrežasta topologija (Mesh)**
- Svaki uređaj je direktno povezan sa više ostalih uređaja
- **Potpuna mesh** - svaki uređaj je povezan sa svim ostalim
- Vrlo pouzdana jer ima više ruta za podatke
- **Skupo** je implementirati jer trebaju mnogi kablovi
- Koristi se u ==🟠kritičnim sustavima== i bežičnim mrežama

**5. Stablaska topologija (Tree)**
- Kombinacija zvjezdane i sabirnijske topologije
- Ima centralni hub sa više sub-hubova
- Osnovna mreža je sabirnička, a grane su zvjezdane
- Koristi se u većim organizacijama

---

# DNS (Domain Name System) - Profesionalni Odgovor

## Definicija

DNS (Domain Name System) je distribuirani, hierarhijski sustav koji omogućava mapiranje simboličkih imena domene na odgovarajuće IP adrese. 

Predstavlja aplikacijski sloj (Sloj 7 OSI modela) protokola koji koristi **port 53 za UDP i TCP** komunikaciju. 
DNS je essencijalna infrastrukturna komponenta globalne internacijske arhitekture.

## Arhitektura i Hijerarhija DNS-a

DNS sustav je organiziran u hijerarhijsku strukturu koja se može vizualizirati kao inverzno stablo:

```
                    . (ROOT)
                    |
        ├─────┬─────┼─────┬─────┤
        |     |     |     |     |
       com   org   net   edu   hr
       |     |     |     |     |
    google facebook  mozilla  fer
```

### Razine DNS Hijerarhije:

**1. Root Nameservers (Koren)**
- 13 logičkih root nameservera (a-m.root-servers.net)
- Distribuirani geografski preko svijeta
- Ne sadrže podatke specifične za domene, već referentne informacije
- Usmjeravaju upite prema TLD serverima

**2. [[Top-Level Domain]] (TLD) Nameservers**
- Upravljaju extensions kao što su `.com`, `.org`, `.net`, `.hr`, `.de`
- Održavaju autoritet za sve domene registrirane pod tom ekstenzijom
- Primjer: VeriSign upravlja `.com` i `.net` TLD-ovima

**3. Authoritative Nameservers**
- Sadrže zone file sa stvarnim DNS rekordima za specifičnu domenu
- Odgovaraju sa autoritativnim odgovorima (AA flag = 1)
- Obično se održavaju od strane registrara domene ili hosting providera

**4. Recursive Resolvers (Resolvers)**
- **Lokalni DNS serveri**, obično održavani od ISP-a ili Enterprise IT-a
- Ne sadrže autoritativne podatke
- Izvršavaju rekurzivne upite u ime korisnika
- Održavaju cache za poboljšanu performansu

## Proces Rezolucije - DNS Query Flow

### 1. Iterativni vs Rekurzivni Upiti

**Rekurzivni upit:**
- Klijent pita resolver: "Trebam IP za example.com"
- Resolver je odgovoran da pronađe odgovor i vrati ga

**Iterativni upit:**
- Resolver pita root server: "Gdje je example.com?"
- Root server odgovara: "Ne znam, pitaj TLD server"
- Resolver pita TLD server: "Gdje je example.com?"
- TLD server odgovara: "Ne znam, pitaj authoritative server"
- authoritative server upit vraća IP adresu

### 2. Sekvenca DNS Rezolucije

```
1. Korisnik/Aplikacija → Rekurzivni Resolver
   "Trebam IP za www.example.com"

2. Resolver → Root Nameserver (iterativni upit)
   "Gdje je example.com?"
   Odgovor: "Pitaj TLD server za .com (208.112.200.4)"

3. Resolver → TLD Nameserver (iterativni upit)
   "Gdje je example.com?"
   Odgovor: "Pitaj Authoritative NS (ns1.example.com - 192.0.2.1)"

4. Resolver → Authoritative Nameserver (iterativni upit)
   "Koja je IP za www.example.com?"
   Odgovor: "93.184.216.34" (sa AA flag = 1)

5. Resolver → Korisnik (rekurzivni odgovor)
   "IP je 93.184.216.34"

6. Resolver sprema rezultat u cache
```

## DNS Rekordni Tipovi

| Tip | Svrha | Primjer |
|-----|-------|---------|
| **A** | IPv4 adresa | example.com → 93.184.216.34 |
| **AAAA** | IPv6 adresa | example.com → 2606:2800:220:1:248:1893:25c8:1946 |
| **CNAME** | Kanonijalno ime (alias) | www.example.com → example.com |
| **MX** | Mail exchange | example.com mail → mail.example.com (prioritet 10) |
| **NS** | Nameserver | example.com NS → ns1.example.com |
| **SOA** | Start of Authority | Podatci o domeni (serial, refresh, retry) |
| **TXT** | Tekstualni zapis | SPF, DKIM, DMARC za email sigurnost |
| **SRV** | Servisni zapis | _sip._tcp.example.com → sip.example.com:5060 |
| **PTR** | Obrnuta DNS rezolucija | 34.216.184.93 → example.com |

## DNS Caching Mehanizam

DNS performanse se unapređuju kroz caching na više razina:

**1. Browser Cache**
- Chrome, Firefox čuvaju DNS rezultate (obično 1-10 minuta)
- Kontrolira se sa `dns-prefetch` HTML tag-om

**2. OS-level Cache**
- Windows: ipconfig /displaydns
- Linux: systemd-resolved (obično 2 minuta default)

**3. Recursive Resolver Cache (ISP/Enterprise)**
- Obično 24-48 sati (TTL vrijednost iz SOA rekorda)

**4. Zone File TTL (Time To Live)**
- Definira koliko dugo resursi ostaju u cache-u
- Manji TTL = čestije ažuriranje, ali više upita
- Veći TTL = manje upita, ali sporije propagiranje promjena

## DNS Sigurnost - Mehanizmi Zaštite

### DNSSEC (DNS Security Extensions)

DNSSEC dodaje kriptografsku autentikaciju DNS-u:

**Komponente:**
- **ZSK** (Zone Signing Key) - privatni ključ za potpisivanje rekorda
- **KSK** (Key Signing Key) - privatni ključ za potpisivanje KSK-a
- **DS record** - povezivanje između parent i child zone

**Proces validacije:**
```
Resolver prima odgovor sa RRSIG (RecordSet Signature)
↓
Resolver provjerava RRSIG sa javnim ključem (DNSKEY rekord)
↓
Ako je validan → odgovor je autentičan
Ako nije → odgovor se odbija (SERVFAIL)
```

### Ostale Sigurnosne Mjere:

**1. Rate Limiting**
- Ograničavanje broja upita sa iste IP adrese
- Zaštita od DNS flood DoS napada

**2. DNS Filtering**
- Blokiranja poznatih zlonamjernih domena
- Koristi se za enterprise zaštitu od malware-a

**3. DNS-over-HTTPS (DoH) i DNS-over-TLS (DoT)**
- Enkriptiranje DNS upita
- Sprječava man-in-the-middle napade
- Standard: RFC 8484 (DoH), RFC 7858 (DoT)

**4. DANE (DNS-based Authentication of Named Entities)**
- Koristi DNSSEC za pohranu certificate otisaka
- Sprječava SSL/TLS napadaje

## DNS Performance Optimizacija

### Prefetching Strategije:

**1. DNS Prefetching:**
```html
<link rel="dns-prefetch" href="//example.com">
```

**2. Preconnect:**
```html
<link rel="preconnect" href="//cdn.example.com">
```

### Load Balancing sa DNS-om:

**Round Robin DNS:**
- Authoritative server vraća više A rekorda za istu domenu
- Klijenti se distribuiraju između više IP adresa
```
example.com A 192.0.2.1
example.com A 192.0.2.2
example.com A 192.0.2.3
```

**Geo-redundancy:**
- Različiti A/AAAA rekordji za različite geografske lokacije
- Koristi se sa GeoDNS servisima

## DNS Propagacija i TTL Management

Pri promjeni DNS rekorda:

1. **Čekanje TTL vremenske vrijednosti** - DNS cache serveri čuvaju stare podatke dok ne istekne TTL
2. **Smanjenje TTL-a prije migracije** - prije promjene, TTL se smanji sa 86400 (24h) na 300 (5 min)
3. **Čekanje nakon promjene** - nakon propagacije, TTL se vraća na normalnu vrijednost
4. **Globalna propagacija** - Može potrajati 24-48 sati dok se promjena prosljeđuje kroz sve DNS servere

## Enterprise DNS Arhitektura

```
┌─────────────────────────────────┐
│    Korisničke Aplikacije        │
│    (Resolver aplikacija)        │
└──────────────┬──────────────────┘
               │
┌──────────────▼──────────────────┐
│  Rekurzivni Resolver            │
│  (Obično OS resolver)           │
│  - Cache                        │
│  - Load balancing               │
└──────────────┬──────────────────┘
               │
┌──────────────▼──────────────────┐
│   Corporate Recursive Resolver   │
│   - Monitoring                  │
│   - Filtering                   │
│   - Internal domains            │
└──────────────┬──────────────────┘
               │
┌──────────────▼──────────────────┐
│   ISP Recursive Resolver        │
│   (Backup, fallback)            │
│   1.1.1.1 (Cloudflare)          │
│   8.8.8.8 (Google)              │
└──────────────┬──────────────────┘
               │
┌──────────────▼──────────────────┐
│   Global DNS Infrastruktura     │
│   (Root, TLD, Authoritative)    │
└─────────────────────────────────┘
```

## Zaključak

DNS predstavlja kritičnu komponentu internacijske infrastrukture koja omogućava apstrakciju numeričkih IP adresa kroz simbolička imena. Distribuirana, hierarhijska arhitektura osigurava skalabilnost, pouzdanost i redundanciju globalne mreže. Razumijevanje DNS-a je esencijalno za Network Engineers, System Administrators, i Security professionals.

____

## **PARITET (Parity)**

Paritet je najjednostavnija metoda za detekciju grešaka u prijenosu podataka. Ne može ispraviti grešku, samo je detektirati.

### Kako funkcionira paritet?

Paritet radi sa brojenjem jedinica (`1` bitova) u nizu podataka:

**Parni paritet (Even parity):**
- Broj jedinica mora biti **paran** broj
- Ako je broj jedinica neparan, dodaje se parity bit sa vrijednosti `1`
- Ako je broj jedinica paran, parity bit je `0`

Primjer:
```
Originalni podaci: 1011001 (4 jedinice - paran broj)
Parity bit: 0
Poslano: 01011001

Originalni podaci: 1011000 (3 jedinice - neparan broj)
Parity bit: 1
Poslano: 11011000
```

**Neparni paritet (Odd parity):**
- Broj jedinica mora biti **neparan** broj
- Logika je obrnuta od parnog pariteta

### Primjer greške:
```
Poslano: 01011001 (5 bitova = paran broj sa parity bitom)
Primljeno: 01111001 (6 bitova = neparan broj - GREŠKA!)
Detekcija: Receiver zna da je nešto krivo jer broj jedinica nije paran
```

### Gdje se koristi paritet?

- **Memorija (RAM)** - DRAM memorija često koristi paritet
- **Serijska komunikacija** - RS-232 protokoli
- **Stari telefoni** - modemske veze
- **Hard diskovi** - neke konfiguracije

### Ograničenja:

- Može detektovati samo **neparan broj grešaka** (1, 3, 5 bitova)
- Ako se 2, 4, ili 6 bitova promijeni, greška neće biti detektirana
- Modemni sustavi koriste sofisticiranije metode: **Hamming code**, **CRC** (Cyclic Redundancy Check)

---

## **IP ADRESA (Internet Protocol Address)**

IP adresa je jedinstveni numerički identifikator koji omogućava rutiranje podataka kroz internet.

### IPv4 (Internet Protocol verzija 4)

**Format:**
- 32-bitna adresa
- Napisana kao 4 okteta odvojena točkama: `192.168.1.1`
- Svaki oktet može biti od 0 do 255
- Teorijski mogućih ~ 4.3 milijarde adresa

**Struktura IP adrese:**
```
IP adresa = Mrežni dio + Host dio

Primjer: 192.168.1.100 sa maskom 255.255.255.0
         ↑ Mrežni dio  ↑ Host dio
```

**Klase adresa (klasično dijeljenje - sada zastarjelo):**

| Klasa | Raspon  | Primjena                        |
| ----- | ------- | ------------------------------- |
| **A** | 1-126   | Velike mreže (milioni domaćina) |
| **B** | 128-191 | Srednje mreže                   |
| **C** | 192-223 | Male mreže (do 254 domaćina)    |
| **D** | 224-239 | Multicast                       |
| **E** | 240-255 | Istraživanje/rezervirano        |

**Specijalne IP adrese:**
- `0.0.0.0` - Default ruta
- `127.0.0.1` - Localhost (vaše računalo)
- `255.255.255.255` - Broadcast (svi u mreži)
- `169.254.x.x` - Link-local (kada DHCP ne radi)
- `192.168.x.x`, `10.x.x.x`, `172.16-31.x.x` - Privatne adrese (samo u LAN-u)

**Subnet maska:**
- Odreduje koju dio IP adrese je mrežni, a koja je host dio
- Primjer: `255.255.255.0` znači da je zadnji oktet za domaćine
- U binarnoj: `11111111.11111111.11111111.00000000`

**CIDR notacija (Classless Inter-Domain Routing):**
- Moderniji zapis: `192.168.1.0/24`
- `/24` znači da je prvih 24 bita mrežni dio
- Ekvivalentno sa `255.255.255.0` maskom

### IPv6 (Internet Protocol verzija 6)

**Format:**
- 128-bitna adresa
- Napisana kao 8 grupa od 4 heksadecimalna znaka: `2001:0db8:85a3:0000:0000:8a2e:0370:7334`
- Mogućih ~ 340 undeciliona adresa (praktički neograničeno)

**Karakteristike IPv6:**
- Automatsko konfiguriranje bez DHCP-a
- Bolji sigurnost sa IPsec integracijom
- Bolji QoS (Quality of Service)
- Bolja mobilnost

**IPv6 skraćivanja:**
```
2001:0db8:0000:0000:0000:0000:0000:0001
↓ može se napisati kao:
2001:db8::1

Nule se mogu ispustiti, a :: može zamjenjivati niz nula samo jednom
```

### Kako se IP adrese dodeljuju?

**1. DHCP (Dynamic Host Configuration Protocol)**
- Dinamički dodeljuje IP adrese iz pool-a
- Obično je validna 24 do 48 sati
- Automatski se osvježava
- Koristi se za većinu korisničkih računala

**2. Statičko dodjeljivanje**
- Administrator ručno dodjeljuje IP adresu
- Koristi se za servere, printri, i kritične uređaje
- Nije se mijenja dok administrator ne promijeni

**3. Link-local**
- Računalo se samo dodeljuje IP adresu ako DHCP server nije dostupan
- Adresa iz raspona `169.254.x.x`

### Rutiranje:

IP rutiranje je proces pronalaženja najbolje rute do odredišta:
- **Usmjerivač (router)** gleda odredišnu IP adresu
- Konsultira **routing tablicu** - listu mogućih ruta
- Šalje paket prema bliskom sljedećem usmjerivaču
- Proces se ponavlja dok paket ne stigne do odredišta

```
Vaše računalo (192.168.1.100) želi pristupiti google.com (142.251.32.14)

1. Vaš router gleda: "142.251.32.14 je u drugoj mreži"
2. Moja default ruta je do ISP routera (192.168.1.1)
3. Pošalje paket ISP routeru
4. ISP router gleda: "142.251.32.14 je u drugoj mreži"
5. Pošalje paket backbone provideru
6. Proces se ponavlja preko nekoliko usmjerivača
7. Paket Finally stigne do Google-ove mreže
8. Google server odgovara
```

---

## **ICMP PROTOKOL (Internet Control Message Protocol)**

ICMP je mrežni protokol koji se koristi za slanje kontrolnih poruka i obavijesti o greškama. **Nije za slanje podataka**, već za upravljanje mrežom.

### Karakteristike ICMP-a:

- **OSI sloj:** Sloj 3 (Mrežni sloj) - isto kao IP
- **Ne koristi portove** - ne radi kao TCP ili UDP
- **Kao dio IP-a** - uključen u svaki IP paket
- **Kontrolne poruke** - samo obavijesti, ne pravi sadržaj

### Glavne ICMP poruke:

**1. Echo Request / Echo Reply (PING)**

Koristi se za testiranje dostupnosti domaćina:
```
Vaše računalo → Drugi računalo: "Jesi li dostupan?"
Drugi računalo → Vaše: "Da, dostupan sam! Primio sam tvoj paket u 25ms"
```

Primjer:
```
ping google.com

PING google.com (142.251.32.14) 56(84) bytes of data.
64 bytes from 142.251.32.14: icmp_seq=1 ttl=119 time=15.2 ms
64 bytes from 142.251.32.14: icmp_seq=2 ttl=119 time=14.8 ms
64 bytes from 142.251.32.14: icmp_seq=3 ttl=119 time=15.1 ms
```

**2. Destination Unreachable (Cilj nedostižan)**

Kod: Usmjerivač ne može dostaviti paket jer:
- Host je nedostižan
- Mrežni port je filtriran (firewall)
- Protokol nije dostupan na domaćinu
- Host je odbio paket

Primjer: Pokušate pristupiti računalu koje je isključeno

**3. Time Exceeded (Isteklo vrijeme)**

Kod: TTL (Time To Live) je dostigao 0
- Svaki usmjerivač smanjuje TTL za 1
- Ako TTL dosegne 0, paket se odbacuje
- Koristi se u `tracert` / `traceroute` naredbi

**4. Redirect (Preusmjeravanje)**

Kod: Usmjerivač može bolje rutirati paket nego vaša zadana ruta
- Primjer: "Trebao bi koristiti drugi gateway za tu destinaciju"

**5. Parameter Problem (Problem sa parametrom)**

Kod: IP header ima pogrešne parametre

### Tracert / Traceroute - Primjena ICMP-a:

```
Trebam saznati kroz koje usmjerivaće ide paket do google.com

Korak 1: Pošaljem paket sa TTL=1
  Router 1 nema TTL, vraća "Time Exceeded" - sada znam gdje je prvi router
  
Korak 2: Pošaljem paket sa TTL=2
  Router 2 nema TTL, vraća "Time Exceeded" - sada znam gdje je drugi router
  
Korak 3: Pošaljem paket sa TTL=3
  ... i tako dalje dok ne stignem do Google-a
```

Primjer output-a:
```
tracert google.com

1    2 ms    2 ms    2 ms  router.local [192.168.1.1]
2   15 ms   16 ms   15 ms  gateway.isp.com [203.0.113.1]
3   18 ms   19 ms   18 ms  core-router.isp.com [203.0.113.2]
4   25 ms   24 ms   25 ms  142.251.32.1
5   26 ms   27 ms   26 ms  142.251.32.14 [google.com]
```

### ICMP i sigurnost:

**Zašto je ICMP kontroverzno?**
- Napadači mogu koristiti ICMP za pronalaženje podataka o mreži
- ICMP flood (Ping flood) - napadač šalje milijune ping zahtjeva
- Rezultat: DoS (Denial of Service) napad

**Zaštita:**
- Mnoge firewall-e blokira ICMP
- Ali to može sprječiti i legitimnu dijagnostiku
- Moderate pristup: dozvoliti echo replies, blokirati druge vrste

---

## **PCM - PULSE CODE MODULATION**

PCM je fundamentalna tehnologija koja pretvara analogne signale (kao što je glas) u digitalne signale. Temelj je moderne digitalne telefonije i audio kompresije.

### Analogni vs Digitalni signali:

**Analogni signal:**
- Kontinuiran - može imati bilo koju vrijednost
- Primjer: Vaš glas kroz mikrofon je analogan signal
- Buka može lako utjecati na signal

**Digitalni signal:**
- Diskretan - samo specifične vrijednosti (0 ili 1)
- Precizniji, manja buka
- Lako se prenosi i kompresira

### Tri koraka PCM procesa:

#### **1. UZORKOVANJE (Sampling)**

Uzimamo "snapshot" analognog signala u redovitim vremenskim intervalima:

```
Analogni signal (kontinuiran):
/‾‾‾\      /‾‾‾\
    \____/‾    \____/

Uzorkovanje (4 puta u sekundi, samo primjer):
   *      *      *      *
   |      |      |      |
```

**Nyquist teorem:** Trebate uzorkovanje barem **dvaput brže** od najviše frekvencije u signalu.

**Primjer - Telefonija:**
- Ljudski glas ima frekvencije do ~4000 Hz
- Trebate uzorkovanje od barem 8000 Hz
- Telefonski standard: **8000 uzoraka po sekundi**

**Primjer - Audio CD:**
- Čovjek čuje do ~20000 Hz
- CD koristi **44100 uzoraka po sekundi** (44.1 kHz)
- Daje prostor za sigurnost

#### **2. KVANTIZACIJA (Quantization)**

Svaki uzorak se aproksimira na najbliži mogući nivo:

```
Analogna vrijednost: 3.7 volti
Mogući nivoi sa 3 bita: 0, 1, 2, 3, 4, 5, 6, 7
Najbliži nivo: 4 volti
→ Kvantizirana vrijednost: 4
```

**Broj bita = broj mogućih nivoa:**
- 3 bita → 2³ = 8 nivoa
- 8 bita → 2⁸ = 256 nivoa
- 16 bita → 2¹⁶ = 65536 nivoa

**Više bita = bolja kvaliteta, ali više podataka**

#### **3. KODIRANJE (Encoding)**

Kvantizirana vrijednost se pretvara u binarni kod:

```
Nivo 4 sa 3 bita → 100 (binarni)
Nivo 7 sa 3 bita → 111 (binarni)
```

### Primjer cijelog PCM procesa:

```sh

Analogni signal: Vaš glas kaže "HELLO"

Korak 1 - Uzorkovanje (8 puta):
Primljeni nivoi: 2.1, 3.5, 4.2, 3.8, 2.5, 1.9, 1.2, 0.8

Korak 2 - Kvantizacija (sa 3 bita, nivoi 0-7):
Aproksimirana: 2, 4, 4, 4, 3, 2, 1, 1

Korak 3 - Kodiranje:
Binarni kod: 010, 100, 100, 100, 011, 010, 001, 001

Finalni digitalni tok: 01010010010010001101000
```

### PCM u telefoniji:

**Telefonski standard:**
- Uzorkovanje: **8000 Hz** (8000 uzoraka/sekundi)
- Bita po uzorku: **8 bita**
- Brzina: 8000 × 8 = **64 kilobita po sekundi (kbps)**

To je razlog zašto je osnovni telefonski kanal **64 kbps**!

**Primjer - Međunarodna telefonska poziva:**
```
Vaš glas → Mikrofon → PCM encoder (8kHz, 8-bit)
→ Digitalni signal (64 kbps) → Internacionalni vod
→ PCM decoder → Zvučnik → Udaljeni glas
```

### Vrste PCM:

**1. Linearni PCM (Linear PCM)**
- Jednostavna kvantizacija
- Koristi se u računalima i CD-ima
- Viša kvaliteta, ali više podataka

**2. µ-law (Mu-law)**
- Koristi se u Sjevernoj Americi i Japanu
- Kompresija: manje vrijednosti imaju više razlike
- Bolje čuva tihe dijelove govora

**3. A-law (A-law)**
- Koristi se u Europi, Africi, Aziji
- Sličan µ-law ali sa drugom kompresijskom krivuljom
- ITU standard G.711

### PCM u modernoj upotrebi:

**Gdje se koristi PCM?**
- ✅ Telefonija (VoIP koristi PCM ili kompresije bаzirane na PCM)
- ✅ Audio CD-i (44.1 kHz, 16-bit stereo)
- ✅ DVD audio (48 kHz ili 96 kHz)
- ✅ Professional audio recording
- ✅ Digitalna TV transmisija
- ✅ Wireless komunikacija

**Kompresija nakon PCM-a:**

Čist PCM proizvodi velike količine podataka. Zato se koriste kompresije:
- **MP3** - kompresija zvuka (dio jeste MPEG standard zasnovan na PCM)
- **FLAC** - bez gubitaka kompresija
- **Opus** - moderna kompresija za VoIP
- **G.711** - telefonska kompresija bazirana na PCM

---

## **Zaključak i Veze između pojmova:**


Korisnik pristupa web stranici:

1. Koristi domenu (npr. example.com) → **DNS** prevodi u IP adresu
2. Paket ide kroz nekoliko usmjerivača korištenjem **IP** rutiranja
3. Ako server ne odgovara, **ICMP** vraća grešku
4. Ako je potrebna telefonija, glas se kodira sa **PCM**
5. Mreža je obično zvjezdane **topologije** sa swich-evima
6. Podatke mogu biti štićeni sa **paritetom** ili drugom detekcijom grešaka
