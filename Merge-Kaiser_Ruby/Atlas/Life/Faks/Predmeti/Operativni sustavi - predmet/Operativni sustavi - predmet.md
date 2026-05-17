#predmet 

- [[prezentacija - notes]]
- [[biljeske OS]]
___
## pitanja - ispit

1. Kada treba neki od racunalnih resursa OS aktivira mehanizam sistemskog poziva
	- **Tocno** [[biljeske OS#Mehanizam sistemskog poziva (System Call)|mehanizam Sist. poziva]]
	
2. Tehnika kojom se proces moze razdvojiti na vise dijelova koji ne trebaju stalno nalaziti u glavnoj  memoriji vec se ucitavaju po potrebi naziva se: Demand Paging
3. **Zamjena** je proces privremenog premjestanja procesa iz glavne u sek. memoriju.
	- **Tocno**  [[biljeske OS#Swapping – zamjene]]
4. Racunalna sigurnost podrazumijeva nekoliko ciljeva: [[biljeske OS#Sigurnost OS]]
	- ==**Dostupnost**== podataka i usluga
	- **Tajnost**
	- **Integritet**
	- **Autenticnost**
5. [[Round Robbin]] predstavlja proaktivni algoritam zakazivanja procesorske jedinice koji rezervira ==fiksno vrijeme== u krugu za svaki proces te ako proces ne dovrsi izvrsavanje u odredenom vremenu **trenutno se prekida**: ==NE==, ne prekida se. [[biljeske OS#Upravljanje procesima]]
6. Sto cini podatkovnu strukture procesa(PCB) [[biljeske OS#Komponente procesa]]
	- Process **ID**
	- Process **State**
	- **CPU** **registers**
	- Program Counter
	- MM info
	- Open Files
	- Access Control
	- Resource Allocation
	- Scheduling information
7. Kada se dogada promijena **konteksta**? [[biljeske OS#Context Switching]]
	- **prioritet**
	- Prekid(Interrupt)
	- prebacivanje is korisnickog u jezgreni nacin rada
	- preventivno rasporedivanje procesora
	- ..
8. U kontekstu OS-a sistemski programi cine posebnu vrstu softvera koji nam daje mogucnost uredivanja korisnickog sucelja? ==NE== [[biljeske OS#Sistemski programi]]
9. za sto sluzi OS
10. Sigurnosna tehnologija Sandboxa moze zastiti racunala na nacin da nezeljenim programima ogranici pristup sljedecim resursima:
	- **procesorsko** vrijeme
	- **memorija**
	- **mrezni** pristup
	- pristup **datotekama**
11. Gdje se nalazni Bootstrap loader? **==ROM==** memorija [[biljeske OS#Booting]]
12. Medium-Term CPU Scheduler se uglavnom bavi zamjenom procesa iz gl. memorije na disk i obrnuto? TOCNO [[biljeske OS#Medium-Term Scheduler]]
13. Funkcije OS-a? [[biljeske OS#Funkcije OS-a]]
	- **Sistemski** pozivi
	- Nadzor **performansi**
	- **Sigurnost**
14. Vrijeme tijekom kojeg korisnik dobiva paznju procesorske jedinice poznato je kao kvantum i obicno je reda: **10 do 100 ms** [[biljeske OS#Time Sharing OS]]
