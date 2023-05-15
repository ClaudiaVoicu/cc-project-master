Voicu Maria-Claudia

Link video: https://youtu.be/_OPH0NeCjsE

Link publicare: https://github.com/ClaudiaVoicu/cc-project-master

Link deploy: cc-project-master-178v.vercel.app

Documentația proiectului Financial Family Records

Introducere

Aplicatia Financial Family Records are ca scop expunerea cheltuielilor familiale furnizand informatii despre nume, suma cheltuita, valuta, categoria in care se incadreaza cheltuiala si descrierea ei pentru a oferi utilizatorilor o perspectivă clară și cuprinzătoare asupra lor.
Doua dintre elementele cheie ale acestei aplicații sunt utilizarea tehnologiilor cloud pentru a asigura fiabilitatea, avand acces rapid si usor la informatiile dorite si integrarea unui API furnizat de OpenAI . Acest API permite aplicației noastre să funcționeze ca un consultant virtual, capabil să răspundă la întrebările utilizatorilor.

Descriere problemă

Aplicația Financial Family Records are ca scop furnizarea unei platforme pentru gestionarea informațiilor financiare, care să permită utilizatorilor să adauge detalii despre cheltuieli într-o bază de date și să le monitorizeze, astfel menținând evidența acestora.
De asemenea, există o componentă de chat ce poate oferi utilizatorului recomandări financiare, ajutându-l să facă alegeri în funcție de nevoile și preferințele sale prin expunerea sa ca si consultant financiar virtual.
Descriere API
API-ul utilizat în partea de backend este un API simplu, care oferă funcționalități pentru a obține (GET), a adăuga (POST) și a șterge (DELETE) informații într-o bază de date NOSQL.
Flux de date
Utilizatorul accesează pagina de introducere a cheltuielilor, unde adaugă informațiile necesare despre cheltuială (numele utilizatorului, sumă, valută, categorie, descriere) și salvează datele în baza de date. După salvare, cheltuielile sunt afișate în pagina principală. Pe această pagină, utilizatorul poate vizualiza sau șterge cheltuielile.
În plus, componenta de chat oferă posibilitatea de a discuta cu un ChatBot antrenat să ofere recomandări financiare asemenea unui consultant virtual.

Exemple de Request/Response, metode HTTP și autorizare servicii

În cadrul componentei de Chat se folosește un API Call către OpenAI, unde este specificat ce fel de răspunsuri dorim să primim. Configurarea este următoarea:

     MESSAGE: {
            'role': 'system',
            'content': 'You are pretending to be financial consultant for the expanses of a family. You respond in a friendly familiar manner.',
        },
        TEMPERATURE: 1,
        MAX_TOKENS: 100,
     
Pentru utilizarea acestui serviciu am folosit OPENAI API KEY oferit de OpenAI pe care am stocat-o in fișierul .env din cadrul proiect.

import { Configuration, OpenAIApi , } from 'openai';

if (!process.env.OPENAI_API_KEY) {
    throw new Error('Please add your OPENAI_API_KEY to .env');
}

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

export const openai = new OpenAIApi(configuration);
Răspunsul primit de la API-ul OpenAI este mai apoi afișat utilizatorului în componenta chat a aplicatiei.

Exemplu de request POST către backend (Metoda HTTP de tipul POST)

Pentru a trimite date catre back-end: 

fetch("/api/records", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }).then(() => {
                console.log("New record inserted");
                document.getElementById("userName").value = "";
                document.getElementById("amount").value = "";
                document.getElementById("currency").value = "";
                document.getElementById("category").value = "";
                document.getElementById("description").value = "";
            });
						
Functia POST din cadrul serverului arata astfel:

else if(req.method === 'POST') {
        const record = req.body;
        const result = await postRecord(record);
        return sendOk(res, result);
    }

Descriere tehnologii cloud folosite

Pentru dezvoltarea proiectului, s-au utilizat următoarele tehnologii Cloud:
-	Next.js - un framework React pentru crearea de aplicații web și mobile.
-	MongoDB - o bază de date NoSQL cu scalabilitate orizontală și verticală.
-	OpenAI API- un API care furnizează instrumente de inteligență artificială pentru dezvoltatori.
-	Vercel - o platformă de cloud care oferă funcționalități de deploy și hosting pentru aplicații web.

Detalii despre aplicație

Aplicația Financial Family Records este un serviciu de tip SaaS (Software as a Service) care oferă utilizatorilor posibilitatea de a gestiona și monitoriza cheltuielile lor.
Această aplicație satisface nevoia utilizatorilor de a avea o sursă centralizată de informații financiare și de a le gestiona într-un mod personalizat. Utilizatorii pot adăuga detalii despre cheltuieli într-o bază de date, precum numele utilizatorului, suma, valuta, categoria și descrierea.
Prin utilizarea tehnologiilor cloud, aplicația asigură scalabilitate și oferă o experiență fiabilă și ușor de utilizat pentru utilizatori.
Pagina principală a aplicației conține o listă cu toate cheltuielile introduse de utilizatori, care pot fi vizualizate și șterse. Aceasta oferă o modalitate simplă și eficientă de a gestiona cheltuielile generate de utilizatori aplicației. 
De asemenea, cu ajutorul ChatBot-ului integrat in pagina de chat a aplicatiei, utilizatorul poate primi recomandări financiare detaliate, pe baza cărora poate lua decizii informate în gestionarea cheltuielilor sale.

![image](https://github.com/ClaudiaVoicu/cc-project-master/assets/91604317/ff093d20-8984-4444-9807-b2b7d5b17053)

![image](https://github.com/ClaudiaVoicu/cc-project-master/assets/91604317/6e91a0fd-4477-4b12-bc8b-11f0c707adf6)

![image](https://github.com/ClaudiaVoicu/cc-project-master/assets/91604317/105e7ac2-5682-441d-854e-09c5a3985efe)

 
 

