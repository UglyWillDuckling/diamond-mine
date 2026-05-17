
## docstring

Prvi string u tijelu funkcije služi kao dokumentacija. Dostupan je preko help ili __doc__.

```python
def zbroj(a, b):
    """Vraca zbroj dvaju brojeva"""
    return a + b


help(zbroj)
print(zbroj.__doc__)
```

## Funkcije

### Varijabilni argumenti *args

```python
def zbroj(*brojevi):
    s = 0
    for n in brojevi:
        s += n
    return s


print(zbroj(1, 2, 3, 4))
```

### Variable Kwargs

Operator `**` skuplja sve imenovane argumente u rječnik.

```python
def ispisi(**informacije):
    for kljuc, vrijednost in informacije.items():
        print(kljuc, vrijednost)

ispisi(ime="Ana", grad="Zagreb")
```

## IO

### print

```python
print(var1, var2, var3, sep=' --- ')
print("HR ima <", 2**10 + 220, "> otoka!", sep="")
```

### input

Čitanje s tipkovnice

input([prompt]) čita znakove sve do tipke Enter, pretvara ih u string i vraća kao rezultat

funkcije.
Rezultat je uvijek tipa string; za brojeve je potrebno napraviti konverziju (int() ili float()).
primjer:

```python
tekst = input("Unesite tekst: ")
print("Unesen je tekst:", tekst)
```

**Numerički unos**

Vrijednost koju vraća input() uvijek je string. Ako očekujemo brojčanu vrijednost, upotrijebimo funkcije
int() ili float() da bismo dobili odgovarajući tip podataka.

```python
unos = input("Unesite cijeli broj: ")
num = int(unos)
print("Kvadrat je:", num * num)
```

# moduli i paketi

## rad s datotekama

### open

```python
f = open(ime_datoteke, mode)
```

Parametri:
• ime_datoteke – naziv datoteke uz relativnu ili apsolutnu putanju
• mode – način rada: r (čitanje), w (pisanje), x (kreiranje), a (dodavanje), + (kombinacija)

`note:note` Ako se mode izostavi, pretpostavlja se čitanje (r).

#### konstrukcija with

```python
with open("datoteka.txt") as f:
	for linija in f:
		print(linija.strip())
```

### read

Bez argumenta size čita cijelu datoteku. Ako je argument negativan ili izostavljen, vraća sve znakove.

`f.read([size])`

```python
with open("datoteka.txt") as f:
	sadrzaj = f.read()
	print(sadrzaj)
	print(f.read()) # drugi poziv vraća prazan niz
```

#### f.read(n)

Čita najviše n znakova iz datoteke. Svaki poziv nastavlja čitanje gdje je prethodni stao.

```python
with open("datoteka.txt") as f:
	print(f.read(5))
	print(f.read(5))
```

#### Čitanje linija

f.readline()
Čita jednu liniju uključujući znak novog retka.
Vraća prazan string na kraju datoteke.

f.readlines() ili list(f)
Vraćaju listu svih linija datoteke. Pogodno za obradu u petlji.

```python
with open("datoteka.txt") as f:
	for linija in f.readlines():
		print(linija, end="")
```

### Pisanje u datoteku

#### f.write(string)

Zapisuje string u datoteku i vraća broj zapisanih znakova. Za pisanje je potrebno otvoriti
datoteku u modu "w", "a" ili s "+".

```python

with open("datoteka.txt", "w") as f:
	napisano = f.write("Test")
	print(napisano) # ispisuje 4
```

## module OS

Modul os iz standardne biblioteke omogućuje rad s datotečnim sustavom. Primjeri korisnih funkcija:

• os.**getcwd**() – trenutni radni direktorij
• os.**listdir**(path) – popis datoteka u direktoriju
• os.path.**exists**(path) – provjera postoji li datoteka
• os.remove(path) – brisanje datoteke

## Pitanja 

1. Napišite program koji od korisnika traži ime, prezime i godinu rođenja, a zatim ispisuje poruku s dobi
korisnika na 2 decimale.
2. Napišite program koji generira deset slučajnih brojeva (random.**randint**) i zapisuje ih u tekstualnu
datoteku.
3. Napišite funkciju koja prima naziv datoteke i vraća broj redaka, broj riječi i broj znakova u toj
datoteci.
4. Učitajte datoteku popis.txt koja sadrži listu imena. Sortirajte imena i ponovno ih upišite u drugu
datoteku sortiran.txt.

___

# Liste

## Kopiranje vs. aliasing

Dodjeljivanje jednoj varijabli ne stvara novu listu:

Za kopiranje koristite slicing ili metodu copy():

```python
lista1 = [1, 2, 3]
kopija1 = lista1[:]
kopija2 = list(lista1)
kopija3 = lista1.copy()
```

##  Brojčane iteracije

range(start, stop, korak) generira niz brojeva koje možemo koristiti za indekse.

```python
lista = [10, 20, 30, 40]
	for i in range(len(lista)):
		print(i, lista[i])

# svaki treći element
for i in range(0, len(lista), 3):
	print(lista[i])
```

## Dodavanje elemenata

- Dodavanje na kraj: append(element)
- Dodavanje na poziciju: insert(indeks, element)
- Spajanje s drugom listom: extend(iterable)

## Uklanjanje elemenata

- **pop**([i]) - Uklanja i vraća element na indeksu i; bez argumenta zadnji element, vraca Element
- **remove**(x) - Uklanja prvo pojavljivanje x, vraca None
- **del** lista[i] - Briše element na indeksu i, vraca -

## Pretraživanje i brojanje

- Članstvo (in) vraća True/False:
```python
lista = ["a", "b", "c"]
"b" in lista # True
"x" in lista # False
```
- index(x) vraća poziciju prvog pojavljivanja, 
```python
vrijednosti = [10, 20, 10, 30]
vrijednosti.index(10) # 0
```
- count broji broj elemenata
```python
vrijednosti.count(10) # 2
```

### Sortiranje i reverse

**sort**() : sortira listu na licu mjesta; **sorted**() vraća novu sortiranu listu.

Argument reverse=True sortira u opadajućem poretku.

```python
brojevi = [3, 1, 4, 2]
brojevi.sort() # [1, 2, 3, 4]

sorted(brojevi, reverse=True)
```

### Uređivanje dijelova liste

del lista`[i:j]` briše elemente na rasponu, a lista`[i:j]` = zamjena umetne nove vrijednosti.

```python
lista = [1, 2, 3, 4, 5]
del lista[1:3] # lista postaje [1, 4, 5]
lista[1:2] = [99, 100] # zamjena
# rezultat: [1, 99, 100, 4, 5]
```

### Spajanje i ponavljanje

- Operator + stvara novu listu koja sadrži elemente obje liste.
- Operator * ponavlja elemente liste zadani broj puta.

## List comprehensions 

Comprehension konstruira listu u jednoj liniji: [izraz for element in kolekcija].

```python
brojevi = [1, 2, 3, 4]
kvadrati = [n*n for n in brojevi]
# [1, 4, 9, 16]
```

### Comprehensions – filtriranje

Možemo dodati uvjet na kraju comprehensiona kako bi filtrirali elemente.

```python
parni = [n for n in range(10) if n % 2 == 0]
# [0, 2, 4, 6, 8]
```

### Comprehensions – transformacije

```python
imena = ["ana", "marko", "teA"]
imena_upper = [ime.upper() for ime in imena]
# ["ANA", "MARKO", "TEA"]
```

## Česte pogreške

 - **Ne dodjeljujte rezultat append() – metoda vraća None**
- **Ne mijenjajte listu dok iterirate preko nje (koristite kopiju)**
- Ne sortirajte heterogene elemente (npr. int i string

### Najbolje prakse

• Preferirajte homogene tipove u listi
• Koristite list **comprehensions** za kratke transformacije
• Za redove(FIFO) koristite `collections.deque` umjesto listi

___
# Kolekcije

Python pruža nekoliko ugrađenih struktura podataka koje
olakšavaju organizaciju i obradu podataka.

U ovom predavanju upoznat ćemo tri osnovne kolekcije: **rječnike, ntorke i skupove.** Svaka struktura ima svoje prednosti i tipične primjene.

- dict
- tuple
- set

Osim toga, naučit ćemo kako koristiti main() funkciju i kako čitati argumente komandne linije.

## main() i sys.argv

- Programi se često pokreću iz komandne linije. Python
	nudi modul **sys** koji sadrži listu **argv**, a ona sadrži ime
	skripte i argumente koje korisnik unese.
- **main**() je konvencija za funkciju iz koje kreće izvođenje	programa.

## argparse modul

Za složenije aplikacije poželjno je koristiti modul argparse, koji automatski generira poruke pomoći, provjerava tipove argumenata i nudi kraće zastavice (npr. -h).

• Dodavanje argumenata: parser.add_argument(...)
• Parsiranje: args = parser.parse_args()

```python
import argparse

parser = argparse.ArgumentParser(description='Zbroji dva broja')

parser.add_argument('a', type=int, help='prvi broj')
parser .add_argument('b', type=int, help='drugi broj')

args = parser.parse_args()
print(args.a + args.b)
```

## Dicts

Rječnik je zbirka parova ključ:vrednost. Ključevi moraju biti jedinstveni i hashabilni (nepromjenjivi).

Primjer stvaranja rječnika:

```python
student = {
	'ime': 'Ana’,
	'godina': 20,
}
```
Vrijednost pristupate preko ključa: student['ime'] → 'Ana'

Dodavanje nove stavke: student['prosjek'] = 4.5
Ažuriranje postojeće vrijednosti: student['godina'] = 21

### Metode rječnika

• **keys**() vraća listu svih ključeva
• **values**() vraća listu vrijednosti
• **items**() vraća parove ključ–vrijednost
• update() ažurira rječnik drugim rječnikom

```python
for kljuc, vrijednost in student.items():
	print(kljuc, vrijednost)
```

• **del** rječnik[ključ] uklanja element
• **clear**() briše sve elemente
• **len**(rječnik) vraća broj parova


### Iteriranje i komprehencije

Rječnike možemo iterirati preko ključeva, vrijednosti ili
parova:
for kljuc in student:
...
for vrijednost in student.values():
...
for kljuc, vrijednost in student.items():

Komprehencije rječnika omogućuju izradu rječnika u jednom izrazu:

```python
{x: x**2 for x in range(1, 6)}
```

## Ntorke (tuple)

Ntorka je uređen i nepromjenjiv niz elemenata. Elementi se odvajaju zarezima, a koriste se zagrade.

Svojstva:
• **Uređenost** (indexiranje)
• **Nemogućnost izmjene**
• Može sadržavati **duplikate**

### Indeksiranje i raspakiravanje

Elementima ntorke pristupa se preko indeksa kao i kod lista. Rezanje (slicing) vraća novi tuple:

tjedni_dani[0] # 'pon'
tjedni_dani[1:3] # ('uto', 'sri')

Raspakiravanje omogućuje dodjelu elemenata varijablama u jednom koraku:
```python
(a, b) = (1, 2) # a = 1, b = 2
```

### Nemodifikabilnost i primjene

Ntorke su nepromjenjive. Pokušaj izmjene elementa rezultira pogreškom:

`tjedni_dani[0] = 'ned'`

TypeError: 'tuple' object does not support item assignment

Zbog nemodifikabilnosti ntorke se koriste kada je bitno očuvati integritet podataka. 

• Povrat više vrijednosti iz funkcije
• Ključevi u rječniku
• Koordinate (x, y, z)

## Skupovi (set)

Skup je neuređena kolekcija jedinstvenih elemenata. Ne
podržava indeksiranje.

Svojstva:
• Bez duplikata
• Brza provjera članstva
• Koristan za skupovne operacije

```python
prvo = {1, 2, 3, 4}
drugo= set([3, 4, 5])
```
A ∪ B
– zajednički i jedinstveni elementi - union
A ∩ B
– elementi prisutni u oba skupa - intersection
A-B
– elementi samo u a - difference
A △ B
– simetrična razlika - symetric difference

### Metode i komprehencije

• **add**(x) dodaje element
• **remove**(x) uklanja element ili baca grešku
• **discard**(x) uklanja element ako postoji

• set comprehensions omogućuju stvaranje skupa iz izraza
```python
{x * 2 for x in range(1, 6)}
```

## zajednicki primjeri

Napravimo malu aplikaciju koja iz komandne linije prima datoteku, broji riječi i prikazuje tri najčešće
riječi.
Koristit ćemo rječnik za **brojanje**, tuple za **sortiranje**, a skup za **filtriranje** riječi.

```python
import sys
from collections import Counter
def ucitaj_tekst(path):
	with open(path, 'r') as f:
		return f.read().lower().split()

def main():
	rijeci = ucitaj_tekst(sys.argv[1])
	rjecnik = Counter(rijeci)
	jedinstvene = set(rijeci)
	top3 = tuple(rjecnik.most_common(3))
	print('Ukupno jedinstvenih:', len(jedinstvene))

	for rijec, broj in top3:
	print(rijec, broj)
	
if __name__ == '__main__':
	main()
```
## Rad sa podacima

Rad sa podacima (data wrangling) je proces pretvaranja sirovih podataka u čisti i
organizirani oblik spreman za analizu i strojno učenje.

• Obuhvaća korake kao što su čišćenje, transformacija i formatiranje podataka.
• U okviru umjetne inteligencije temelj je za izgradnju modela jer kvaliteta ulaznih podataka
	određuje kvalitetu rezultata.
• Najčešća struktura za rad su tablični objekti (DataFrame) s redovima i stupcima.

### Struktura DataFrame-a

• Svaki red predstavlja jedno opažanje (npr. putnika).
• Svaki stupac predstavlja jednu značajku (spol, dob, itd.).
• DataFrame sadrži i **jedinstveni** **indeks** za svaki red.

### Kreiranje DataFrame-a

```python
import pandas as pd

dataframe = pd.DataFrame()
dataframe["Ime"] = ["Jacky Jackson", "Steven Stevenson"]
dataframe["Dob"] = [38, 25]
dataframe["Vozač"] = [True, False]

# Dodavanje novog retka
nova_osoba = pd.DataFrame([{"Ime": "Molly Mooney", "Dob": 40, "Vozač": True}])
# Spajanje
dataframe = pd.concat([dataframe, nova_osoba], ignore_index=True)

print(dataframe)
```

### Opis i statistika

- head(n) – prikaz prvih n redova
- shape – dimenzije (broj redova, broj stupaca)
- describe() – osnovne statistike za numeričke stupce (mean, std, min, max)
- count() – broj nenedostajućih vrijednosti usvakom stupcu

### Navigacija DataFrame-om

• iloc – odabir po pozicijskom indeksu (redni broj)
• loc – oznake (imena stupaca + uvjeti) / odabir po oznaci indeksa (npr. ime).
• Slices n:n omogućuju odabir niza redova ili stupaca.
• Moguće je mijenjati defaultni indeks na smisleni identifikator
```python
# odabir prvog retka
dataframe.iloc[0]
# odabir drugog, trećeg i četvrtog retka
dataframe.iloc[1:4]
# postavljanje indeksa na stupac 'Ime'
dataframe = dataframe.set_index('Ime')
dataframe.loc['Jacky Jackson']
```

### Uvjetno filtriranje

• Kombiniranjem **logičkih operatora** (&, |) definira se složeniji uvjet
• Rezultat je **novi DataFrame** sa samo redovima koji zadovoljavaju kriterij
• Često se koristi za filtriranje podskupova podataka prije analize

```python
# odabir svih žena
zene = dataframe[dataframe['Spol'] == 'ženski']
# kompleksniji uvjet: žene starije od 65
senior_zene = dataframe[(dataframe['Spol'] ==
'ženski') & (dataframe['Dob'] >= 65)]
```

### Zamjene i preimenovanja

...

### Jedinstvene vrijednosti

• unique() – vraća niz svih jedinstvenih vrijednosti u stupcu
• value_counts() – broj pojavljivanja svake vrijednosti
• nunique() – broj jedinstvenih vrijednosti

• **Oprez**: neočekivane klase (npr. '*') treba provjeriti i ispravno obraditi.

### Rukovanje nedostajućim vrijednostima

• isnull() / notnull() vraćaju logičke nizove koji označavaju nedostajuće vrijednosti.
• NaN vrijednosti predstavljaju nedostajući podatak;
• Često dataset koristi posebne vrijednosti (NONE, -999) za označavanje praznina – navedite ih prilikom učitavanja.

```python
# pronalazak NaN vrijednosti
missing_age = dataframe[dataframe['Dob'].isnull()]

# zamjena određenih vrijednosti s NaN
dataframe['Spol'] = dataframe['Spol'].replace(np.nan,'muški')

# čitanje CSV-a uz definiranje na_values
pd.read_csv('podaci.csv', na_values=[np.nan, 'NONE', -
999])
```

### Brisanje stupaca i redova

#### stupci
```python

# ukloni stupac 'Dob'
nova_df = dataframe.drop('Dob', axis=1)

# ukloni više stupaca
nova_df = dataframe.drop(['Dob','Spol'], axis=1)

# ukloni stupac prema indeksu
nova_df = dataframe.drop(dataframe.columns[1], axis=1)
```

#### redovi

```python
# izbaci redove gdje je Spol = 'muški'
bez_muskaraca = dataframe[dataframe['Spol'] != 'muški']
# izbaci red s imenom
bez_helen = dataframe[dataframe['Ime'] !='Allison, Miss Helen']

# izbaci red prema indeksu
bez_prvog = dataframe[dataframe.index != 0]
```
### Uklanjanje duplikata

• `drop_duplicates`() – uklanja duplikate na temelju svih stupaca ili podskupa.
	• `subset` – definira stupce koji se koriste za otkrivanje duplikata.
	• `keep` – određuje koje duplikate zadržati: 'first' (zadano), 'last' ili False (izbaci sve).

```python
# ukloni identične retke
df_bez_duplikata = dataframe.drop_duplicates()
# ukloni duplikate po Spolu
df_po_spolu = dataframe.drop_duplicates(subset=['Spol'])

# zadrži posljednji duplikat
df_last = dataframe.drop_duplicates(subset=['Spol'], keep='last')
```

### Grupiranje po vrijednosti

• **groupby**() – grupira redove prema vrijednosti jednog ili više stupaca.
	• Nakon grupiranja primjenjujemo **agregacijske funkcije** (`mean`, `sum`, `count`...).
• Korisno za analizu različitih grupa (npr. preživjeli vs. poginuli).

```python
# izračun prosječne dobi i preživljavanja po spolu
dataframe.groupby('Spol')[['Dob','Preživio']].mean()

# prebroji koliko je preživjelo i poginulo
dataframe.groupby('Preživio')['Ime'].count()
```

### Petlje i list comprehension

• Možemo iterirati kroz elemente stupca koristeći for petlju, ali to nije učinkovito.
• List comprehension nudi kraći i čišći zapis za jednostavne transformacije.
• Izbjegavajte nepotrebne petlje jer pandas podržava vektorizirane operacije.

```python
# for petlja, first 2 names
for name in dataframe['Ime'][0:2]:
	print(name.upper())
# list comprehension - uppercase first 2 names(creates new lis[]()t)
[name.upper() for name in dataframe['Ime'][0:2]]
```

### Primjena funkcija nad stupcima

• apply() – primjena ugrađenih ili vlastitih funkcija na **svaki element stupca**
	• omogućuje čiste, čitljive `transformacije` bez eksplicitnih petlji
	• idealno za prilagođene operacije poput normalizacije, ekstrakcije teksta, konverzije tipova

```python
defuppercase(x):
	return x.upper()

# primijeni funkciju na stupac
dataframe['Ime'].apply(uppercase)
```

# VJEZBA

### korijen

```python
	import math

	def get_square_root(number):
		return math.sqrt(number)
	
	def duljina_vektora(x, y):
		return math.sqrt(x**x + y**y)
```
