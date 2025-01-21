📗📗📗📗📗📗📗📗📗📗📗📗📗📗

---

## notes
- there are 4 states
	- P1
	- P2
	- P3
	- P4
- ...

## Putting into portfolio (steps 1, 2a, 2b)

WHEN lead coming from WLEF SeLoger enters campaign (Commercial person is not assigned, there is no sales project) 
AND the salesperson confirms with the lead is actually the owner of the property - by clicking on “Portefeuille" button,

THEN the sales project is successfully created with the address stated in the ESTIMA:



AND when salesperson goes back to contact page, 
THEN there is the new sales project that appears in the list:



a) WHEN the salesperson fills in the necessary criteria on “Resumé" tab (Date d'Evaluation estimée, and other information he gets on the call), 
AND requests the Evaluation by clicking on the button “Evaluation demandé"




THEN this project is added to portfolio of the salesperson, and he can choose agencies for this project (step 3).

b) WHEN the salesperson fills in the necessary criteria on “Resumé" tab (Date d'Evaluation estimée, and other information he gets on the call), 
AND puts the project into his portfolio, by clicking on “Portefeuille" button



THEN the project is successfully added to salesperson portfolio.

P1 - Requesting evaluation (step 3)


WHEN the sales person goes to “Evaluations" tab and clicks on the blue button “Choisir les agences", AND selects agencies, AND saves, 

AND selects for each agency RDVQ product 
AND clicks on “Enregistrer + Demander cette evaluation" button:


(with that click on “Enregistrer + Demander cette evaluation" button,  the agencies will appear in the Evaluations table)



AND clicks on “Evaluation demandee" button, 



THEN a popup will appear, which needs to be validated


AND upon validation, there is a success message and the sales project status is “Evaluation Demande"


AND an event is created on the sales project Resume tab as a result of previous action :


AND Commercial, Back Office and Conseiller are assigned to the project.




Validation by Quality team - confirmation that P1 is indeed P1 (step 4)


WHEN the Quality team selects evaluations and autorises the evaluation with email:




THEN there is a confirmation message the sales project is accepted, agencies estimations status become “Autorisee" in the table, AND in the header we see evaluations that need to be organised, 


AND the sales project can now be found in the “Evaluations à organiser” quick filter:


AND an automatic task for Back Office assigned on the project is created (check “Resume” tab):





P2 ( "mandat signé” (signed mandate)) - (step 5, 6)

WHEN the Back Office organises the evaluation meets by calling both the agencies and user, 
fills all the necessary info for each agency (date and time of visit, and changes status to “Organisee")
AND confirms the meets by click on “Confirmer RDV éval au client (email & SMS)” button

THEN success message appears “La confirmation des rendez-vous a bien été envoyée au client."
AND automatic email and SMS will be sent to the lead
AND a task is created automatically for the assigned sales person to check up on this file - if the mandate is signed - “Relance Signature Mandat"


WHEN the Back Office goes to “Mandats"> Nouveau Mandat> Sérénité, 
and fills all the necessary INFO
THEN the Mandat is created, with status “A regulariser"



P3 - Offer accepted (step 7)

WHEN Back Office changes the status of the mandate and fills all the necessary info in “Mandate" tab, 


THEN the file 


WHEN the Back Office changes the status of the mandate to “Sous offre"
THEN it can be found here in the quick filters:







WHEN the Back Office changes the status of the mandate to “Sous promesse"
THEN it can be found here in the quick filters:


P4 - Property sold

 WHEN the Back Office changes the status of the mandate to “Vendu",
THEN its status becomes Vendu
and can be found in Vendu folder:
