#college

related:: 
- [[Ispit - vjerojatnost i kombinatorika]]
- [[Probability study]]

___

# PERMUTACIJE S PONAVLJANJEM

Permutacije s ponavljanjem pokazuju na koliko se načina može poredati niz od n elemenata ako je r1, r2, … , rk  istih među njima
$$ P = \frac{n!}{r_{1}!\ r_{2}!\ \dots r_{k}!} $$

### Koliko se različitih riječi može napisati od riječi MAMA?

$$ P = \frac{4!}{2!*2!} = 6$$

### Koliko se različitih riječi može napisati od riječi   
              MATEMATIKA?

Ovdje je riječ o nizu slova  A, A, A, E, I, M, M, T, T.

$$ P = \frac{10!}{2!3!} = 151 200$$

#  P = \frac{10!}{2!3!} = 151 200

### U bubnju se nalazi **15** kuglica različitih boja. Vadimo nasumično **3** kuglice. Na koliko možemo načina to učiniti? 

n = 15
k = 3
$$ {15 \choose 3} = \frac{15!}{3!*(15 - 3)!} $$
= 455 nacina

### U snopu od 52 karte su četiri boje s po 13 karata: tref, pik, srce i karo.

a) Na koliko načina možemo odabrati 6 karata iz snopa?

n = 52; k = 6;
$$ {52 \choose 6} = \frac{52!}{6! (46!)} $$
= 20 358 520

c) Na koliko načina možemo odabrati **6** karata od kojih su 3 karo, 2 tref i **1** srce?

$$ = {13 \choose 3} {13 \choose 2}{13 \choose 1} = \frac{13*12*11}{3*2*1} * \frac{13*12}{2*1} *13 = 290 $$
= 290 004

### U kutiji se nalazi 8 bijelih, 7 crvenih i 5 crnih kuglica. Izvlačimo 5 kuglica

k = 5; n = 20;

a) Na koliko nacina mozemo izvuci **5 kuglica**?

$$ = {20 \choose 5}  = \frac{20!}{5!15!}$$

# KOMBINACIJE S PONAVLJANJEM


Tvore se od n različitih elemenata podskupova od r elemenata koje možemo birati više puta, a poredak izabranih nije bitan.

### Profesor nasumičnim odabirom iz e-dnevnika proziva učenike pred ploču. 

Predvidio je riješiti na satu **10** zadataka. 
U razredu su 24 učenika. Na koliko je načina moguće odabrati učenike za rješavanje predviđenih zadataka? 
Moguće je odabrati ponovno iste učenike.
$$ {24 + 10 - 1 \choose 10} = {33 \choose 10} $$

= 92 561 040

### Za dan učitelja učenici su kupili bukete cvijeća za svoje profesorice

Odabrali su ruže. U ponudi su bile tri vrste ruža: bijele, roze i crvene. 

Na koliko su načina  profesorice mogle dobiti bukete od pet ruža ako su buketi složeni nasumičnim odabirom ruža?

k = 5; n = 3;
$$ {3 + 5 -1 \choose 5} = {7 \choose 5} $$
= 21
