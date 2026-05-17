[[Operativni sustavi - predmet]], [[biljeske OS]]
___

#### 1. Sigurnost podrazumijeva

- Dostupnost
- **Tajnost**
- **Integritet**
- ==Autenticnost==

#### 2. Podatkovna struktura procesa (PCB)

- ==ID== procesa
- **status(stanje)**
- **informacije o rasporedu**

- **registri**
- **I/O** info - `files`, `devices`

- program counter #delete

#### 3. Kada promijena konteksta

1. **prioritet** procesa
2. INTERRUPT
3. prebacivanje nacina rada
4. **==preventivno==** rasporedivanje procesora

#### 4. Za sto sluzi OS?

- **Posrednik** između sistemskog hardvera i krajnjeg korisnika
- Pruza **sučelje** korisnicima(interface)

- **Skriva** složenost softvera

- `Kontrolira` sve računalne **resurse**

- **Pruža** **resurse** i **usluge** `korisničkim` programima
- **Koordinira** **izvršavanje** programa

- **Sprecava i brine  se** za `greske` tako sto prati izvodenje programa
- Podržava **paralelno** istovremeno izvršavanje programa

#### 5. Sandbox ogranicava pristup cemu? 4

- **datotekama** (`filesystem`)
- `mrezi` (network)

- `radnoj` `memoriji` (RAM)
- `procesoru` (CPU)

#### 6. Bootstrap loader lokacija

`ROM`

#### 7. Funkcije OS-a?

- **resource** management
- process management
- memory management
- **device** management
- file management
- job accounting
- networking

- user interface
- **backup** and recovery
- **performance** monitoring(nadzor performansi)

- **System calls**
- Time Sharing
- Error-detection

#### 8. Kvantum - velicina?

==10-100 **ms**==

#### 9. Tehnika kojom se proces moze razdvojiti na vise dijelova koji ne trebaju stalno nalaziti u glavnoj  memoriji vec se ucitavaju po potrebi naziva se?

**Demand Paging**.

___


- [ ] statusi procesa
- [ ] statusi Niti(thread)

### operacije nad procesima

- create :LiBaby:
- terminate 🧨
- wait for child process to end ⏱
- change priority :LiArrowDown:
- block 🧱
- ready 🏁
- dispatch :LiPlayCircle:
- suspend :LiCircleStop:
- resume :LiPlay:
- delay :LiAlarmClock:
- Fork :LiForkKnife:

### statusi procesa

- NEW
- READY - spreman
- RUN - izvodi se
- WAIT(or BLOCK) - I/O
- COMPLETE or TERMINATED
- SUSPENDED READY
- SUSPENDED BLOCK - red cekanja je **pun**
- 

### operacije nad procesima

- stvaranje - new
- zakazivanje(`scheduling`) - `spreman` -> `pokretanje`
- blokiranje - ceka I/O -> cekanje
- prekid(`terminate`)
	- complete
	- error
	- hardware problem
	- stopped by other process


### komponente procesa

- `Text` Section - **KOD**
- `Stack` - temp. data, execution
- Data Section - global vars
- `Heap`
- PCB
	- ID
	- `state`
	- `scheduling` info: prio, etc.
	- `registers` CPU
	- `I/O` - files, devices
	- Accounts Info

### planiranje i zakazivanje

- FCFS - first come first served
- SJF - shortest Job First
- RR - round robbin - u krug :LiRectangleCircle:
- Priority Scheduling - po prioritetu
- Red cekanja na vise razina - vise redova po prioritetu

### Niti - statusi

- NEW
- **RUNNABLE**

- **WAITING**
- TIMED WAITING

- **TERMINATED**
