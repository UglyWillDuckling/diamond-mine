
![[~/×/b2eb3fdad34b41e8f1ae64cb07f738d5_MD5.png|400]]

Ethernet je najraširenija tehnologija za mrežno povezivanje računala putem žičane veze.
Koristi se u lokalnim mrežama (LAN – Local Area Network) i omogućuje brzi, pouzdani prijenos podataka između računala, servera, rutera i drugih mrežnih uređaja.

---

⚙️ Osnovna ideja

Ethernet definira:

način prijenosa podataka u obliku **okvira** (frames)

**pravila pristupa** mreži (CSMA/CD – Carrier Sense Multiple Access with Collision Detection)

**fizičke komponente** (kablovi, konektori, mrežne kartice)

---

📘 Glavne značajke:

Značajka	Opis

Standard	**IEEE 802.3**
Topologija	Zvjezdasta (star) ili ranije sabirnica (bus)
Vrsta prijenosa	**Paketni** (frame-based)
Način pristupa	CSMA/CD (u žičnim mrežama)
Identifikacija uređaja	**MAC adrese** (npr. 00:1A:2B:3C:4D:5E)
Brzine	10 Mb/s → 100 Mb/s → 1 Gb/s → 10 Gb/s → 100 Gb/s+

Mediji	**UTP/STP bakreni kablovi, optička vlakna**

---

📡 Ethernet okvir (frame):

Sastoji se od:

1. **MAC** adresa pošiljatelja i primatelja
2. **Tip** podatka (EtherType)
3. **Podaci** (payload)
4. **CRC** provjera (Frame Check Sequence)

---

💡 **Prednosti** Ethernet tehnologije:

- Jednostavna implementacija
- Niski troškovi
- Visoka pouzdanost
- **Skalabilnost** (od malih LAN-ova do velikih mreža)
- **Kompatibilnost** s gotovo svim uređajima
