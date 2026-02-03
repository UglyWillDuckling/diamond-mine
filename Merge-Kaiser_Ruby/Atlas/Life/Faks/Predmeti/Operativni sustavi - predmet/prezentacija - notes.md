
# Uvod

Moja tema je bila "Koristi li op. sustav Linux manje resursa od Windowsa".
Pa krenimo..

# 1. slajd

Kao sto mozete vidjeti, Tema je obradena u 3 dijela.

- pripremna faza
- Prikupljanje i tumacenje
- zakljucak

# 2. slajd

**Pripremna faza**

- Okruzenje: [[virtualbox]]

- specificne inacice sustava i njihove verzije:
	- [[Windows 10]]
	- Linux Mint 22.2
- hardver
	- CPU, RAM: 10GB, disk

# 3. slajd


Sto se tice parametara ovdje sam bio fokusiran na hardverske resurse - CPU, RAM i hard disk.

Samo testiranje sustava obavljeno je u 3 uvjeta:

1. stanje mirovanja
2. normalni uvjeti rada (za prosjecnog korisnika)
3. uvjeti visokog opterecenja (zahtjevni programi)

# rezultati

## stanje mirovanja - pokretanje

Odmah na početku primjećuje se razlika u potrošnji CPU. Windows pri pokretanju koristi jako puno procesorske snage u odnosu na Linux.
Primjetno je  da Linux troši puno manje VMM resursa u odnosu na Windows što ukazuje da je veliko opterećenje hipervizora kod Windows operativnog sustava. Dok je gostujuće opterećenje u oba operativna zanemarivo.

**RAM** 

Analiza koristenja RAM memorije takoder otkriva slicnu situaciju kao i kod opterecenja procesora, **Windows** sustav koristi znatno više memorije, oko cak **2,5 puta više od Linuxa.** u stanju mirovanja.

U apsolutnim brojkama, potrošnja memorije iznosi oko 2,4–2,6 GB za Windows, dok Linux Mint koristi približno ~900 MB.

**Disk**

U analizi korištenja diska uočena je znatno veća potreba Windows sustava za pristupom disku,  kako u pogledu čitanja, tako i pisanja podataka. Ovo opet moze dovesti do primjetnog pogoršanja korisničkog iskustva, budući da su takve operacije u pravilu sporije te mogu uzrokovati zastajkivanja i sporiji odziv sustava. 

Treba napomenuti da se, čak i nakon duljeg stanja mirovanja, procesi čitanja i pisanja na disku nastavljaju istim intenzitetom, što upućuje na kontinuiranu aktivnost pozadinskih procesa. Pri pokretanju sustava zabilježeno je oko 2 GB pročitanih podataka, dok se ta vrijednost tijekom nekoliko sati rada povećava i prelazi 10 GB.

## normalni uvjeti za prosjecnog korisnika

> koristenje programa kao sto su internet browser, explorer, photo viewer, uredivaci dokumenata, audio i video playeri.

**CPU**

Generalno je u ovim uvjetima koristenje CPU-a efikasnije kod Linux sustava.

**RAM**

Analiza RAM memorije pokazuje usporediv rast potrošnje na oba sustava. Iz ovoga se može zaključiti da su korištene aplikacije podjednako optimizirane za obje platforme.  I dalje ostaje sveukupna potrosnja veca radi inicijalno povecanog koristenja radne memorije koje je primjeceno u uvjetima bez opterecenja.


**Disk**

Zabilježena su vrlo slična opažanja kao i u stanju mirovanja, opet se istice povećana potreba Windows sustava za citanjem i pisanjem podataka na disk.

## uvjeti visokog opterecenja

> zahtjevne aplikacije, editori slika, editori videa, 3D modeliranje([[Blender]]), [[CAD]] alati. ([[Auto-CAD]])


**CPU** 

Ovdje se uočavaju se možda i najočitije razlike među svim dosadašnjim rezultatima.  

Na prvi pogled vidljiva je razlika između dva sustava. Windows u pojedinim trenucima koristi gotovo cjelokupnu dostupnu procesorsku snagu, dok Linux Mint pri istim uvjetima ne pokazuje značajnije poraste opterećenja. 

Jos bih i napomenuo kako je prilikom testiranja Windows sustav često pokazivao manju responzivnost, što je otežavalo sam proces testiranja i povremeno usporavalo izvođenje zadataka. 

**RAM**

Kao i u prethodnim mjerenjima, vidljivo je ujednačeno korištenje memorije od strane programa i aplikacija na obje platforme.   

Međutim, u ovom dijelu analize dolazi do izražaja veći inicijalni memorijski otisak Windows sustava, zbog kojeg se ukupno korištenje radne memorije približava granici dodijeljenih RAM resursa. 

**Disk** 

Uočava se isti trend kao i u prethodnim testovima – operativni sustav Windows pokazuje izraženu potrebu za čestim pristupom disku. Mozemo da **s porastom broja otvorenih aplikacija povećava se i razina korištenja diska,** što ukazuje na veću ovisnost sustava o učestalom čitanju i pisanju podataka. 