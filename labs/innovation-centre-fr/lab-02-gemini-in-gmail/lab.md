# Gemini dans Gmail pour la collaboration du HIC

## Temps requis

30 minutes

## Présentation

Dans ce labo, vous utilisez Gemini dans Gmail sur un fil de transfert usine que vous vous envoyez. Vous résumez le fil depuis le panneau latéral, vous cherchez dans Gmail, Chat et Drive le protocole HIC-LC3-24, vous proposez une séance de travail avec Help me schedule, puis vous utilisez une réponse suggérée et un brouillon plus complet avant d’envoyer.

### Vous apprendrez à :
- Ouvrir Ask Gemini dans Gmail et résumer un fil sans quitter la boîte de réception.
- Chercher dans Gmail, Chat et Drive depuis le panneau latéral de Gmail, avec un repli sur Drive.
- Proposer des horaires avec Help me schedule, ou rédiger une proposition prête pour l’agenda si le bouton manque.
- Utiliser une réponse suggérée, puis écrire un brouillon plus complet et le relire avant l’envoi.

## Scénario

![Logo Holcim](./images/holcim-logo.png)

Vous coordonnez le transfert **HIC-LC3-24** vers l’usine synthétique Loire Plant. Le protocole et les fichiers HIC associés seront dans votre Drive. Personne n’a encore de réunion à l’agenda. Vous créez vous-même le fil d’e-mails pour que chaque apprenant parte de la même boîte de réception.

> [!WARNING]
> N’envoyez pas de vraies données d’essai non publiées, de noms de partenaires ni de fiches formule. Utilisez le texte préparé de ce labo. Les réponses suggérées peuvent se tromper sur le contenu technique. C’est toujours vous qui cliquez sur **Send**.

> [!NOTE]
> Les libellés Gemini de Gmail bougent. Si un nom de contrôle ci-dessous ne correspond pas à votre espace, utilisez le repli de cette étape. Ne bloquez pas le labo à chercher une capture identique.

## Instructions du labo

### Tâche 1 : Importer les fichiers HIC, puis envoyer et résumer le fil de transfert

Dans cette tâche, vous placez les fichiers HIC dans votre propre Drive pour que Gemini puisse les trouver ensuite. Puis vous créez le fil que Gemini résumera. Vous envoyez le message préparé à votre propre adresse pour que le labo ne dépende pas d’une boîte déjà remplie.

1. Téléchargez les quatre fichiers HIC. Pour chaque fichier du tableau, cliquez sur le lien pour l’ouvrir dans Google Drive, puis cliquez sur **Download** (l’icône flèche vers le bas en haut à droite de l’aperçu).

| Fichier | Ce qu’il contient |
| :--- | :--- |
| [hic-lc3-24-trial-protocol.pdf](https://drive.google.com/file/d/1REHLF6NeIkN_kON23YtxkcSImcXSPU5o/view) | Âges d’essai et spec à 28 jours |
| [hic-lc3-24-meeting-note.pdf](https://drive.google.com/file/d/1xGOwSrZjPmC4PlSmpopK9J0RzV_7DhI5/view) | Décisions de lancement ; la séance de travail n’est pas planifiée |
| [hic-trial-glossary.pdf](https://drive.google.com/file/d/11iwfKBi8ONKtSBjhWbkGRWnjSf4eWgDm/view) | Définition de prêt pour le transfert |
| [hic-lc3-24-handover-checklist.pdf](https://drive.google.com/file/d/1V87d4tNd6qbqUmcljHZzrJsduPKmFDY0/view) | Liste de contrôle de la séance de travail |

2. Ouvrez [https://drive.google.com/](https://drive.google.com/). Cliquez sur **New**, puis **New folder**. Nommez le dossier `HIC-LC3-24 handover` et cliquez sur **Create**.

3. Double-cliquez sur le nouveau dossier pour l’ouvrir. Cliquez sur **New**, puis **File upload**, et sélectionnez les quatre PDF dans votre dossier **Downloads**.

> [!NOTE]
> Drive peut mettre quelques minutes à rendre les nouveaux fichiers cherchables. Vous les importez maintenant pour que Gemini les trouve dans la tâche 2.

4. Ouvrez [https://mail.google.com/](https://mail.google.com/) et connectez-vous avec votre compte de cours.

5. Cliquez sur **Compose**.

6. Dans **To**, saisissez votre propre adresse e-mail.

7. Dans **Subject**, collez :

```text
HIC-LC3-24 : séance de travail pour le transfert usine
```

8. Dans le corps du message, collez :

```text
Équipe,

Voici où nous en sommes sur le transfert HIC-LC3-24 vers Loire Plant.

Nous avons besoin d'une séance de travail de 45 minutes la semaine prochaine pour convenir :
1. Quelles formules restent dans l'ensemble prêt pour l'usine
2. L'attribution du silo pour l'argile calcinée
3. Ce que le comité de revue d'innovation verra jeudi

Le protocole d'essai est dans Drive, dans le dossier HIC-LC3-24 handover : hic-lc3-24-trial-protocol.pdf.

Merci de répondre avec vos contraintes.

Merci,
Équipe essai liant du HIC
```

9. Ne joignez aucun fichier. L’e-mail ne fait que nommer le protocole. Dans la tâche 2, Gemini le trouve dans votre Drive.

10. Cliquez sur **Send**. Ouvrez le message dans votre boîte de réception pour que ce soit le fil actif.

11. En haut à droite de Gmail, cliquez sur **Ask Gemini**.

<!-- TODO IMAGE: Screenshot of Gmail with Ask Gemini side panel open on the self-sent thread -->
![Panneau latéral Ask Gemini dans Gmail](images/gmail-ask-gemini.png)

12. Dans le panneau Gemini, envoyez :

```text
Résumez ce fil en cinq puces. Listez les décisions qui restent à prendre, et citez le nom de fichier Drive mentionné dans l'e-mail. N'ajoutez pas de résultats d'essai qui ne sont pas dans le message.
```

> [!TIP]
> Si Ask Gemini manque, vérifiez que Gemini est activé pour Gmail dans votre compte Workspace, ou utilisez l’application Gemini avec le fil transféré à vous-même en dernier recours.

### Tâche 2 : Chercher dans Gmail, Chat et Drive depuis le panneau latéral

Dans cette tâche, vous restez dans Gmail et vous demandez à Gemini de trouver le protocole et les fichiers HIC associés. Chat peut être vide en cours. Drive est la source fiable.

1. Gardez le panneau Gemini ouvert. Envoyez :

```text
Cherchez dans Gmail, Chat et Drive pour HIC-LC3-24. J'ai besoin du protocole d'essai, des notes de réunion et du glossaire. Citez les noms de fichiers que vous trouvez. Si Chat n'a aucun résultat, dites-le et continuez avec Drive.
```

2. Relisez ce que Gemini renvoie.

3. Si les résultats Drive sont maigres, cliquez sur **Add source** (ou le contrôle Drive dans le panneau Gemini) et joignez `hic-lc3-24-trial-protocol.pdf` depuis votre dossier `HIC-LC3-24 handover` dans Drive.

4. Envoyez un suivi qui utilise le fichier :

```text
À partir du protocole d'essai HIC-LC3-24, listez les âges d'essai et la résistance de spec à 28 jours. Si une valeur n'est pas dans le protocole, écrivez Non trouvé. N'utilisez pas de valeurs LC3 typiques extérieures à ce fichier.
```

<!-- TODO IMAGE: Screenshot of Gemini in Gmail returning Drive protocol ages and spec -->
![Recherche Drive de Gemini dans Gmail pour le protocole](images/gmail-search-drive.png)

> [!NOTE]
> **Repli si Chat est vide :** c’est attendu dans un espace de formation. Terminez la recherche avec Drive depuis ce même panneau Gmail. Ne changez pas de produit sauf si Gemini dans Gmail est indisponible.

> [!NOTE]
> Gemini doit trouver les quatre fichiers que vous avez importés dans votre dossier `HIC-LC3-24 handover` à la tâche 1. S’il n’en trouve aucun, attendez une minute et renvoyez le prompt.

### Tâche 3 : Help me schedule pour une séance de travail de transfert usine

Dans cette tâche, vous proposez des horaires depuis Gmail en utilisant Calendar. La réunion est une séance de travail HIC de 45 minutes, pas un bloc que vous inventez sans regarder les disponibilités.

1. Dans le même fil, cliquez sur **Reply**.

2. Dans **To**, ajoutez au moins une autre personne que vous pouvez inviter en cours (votre formateur ou un camarade). Laissez-vous sur le fil.

3. En bas de la fenêtre de rédaction, cliquez sur **Help me schedule**.

   Si vous ne voyez pas **Help me schedule**, cliquez sur **More options**, puis **Help me schedule**.

4. Relisez les créneaux proposés. Ajustez la durée à **45 minutes** si Gemini a proposé une autre longueur.

5. N’envoyez **pas** encore. Vous enverrez une réponse plus complète dans la tâche 4.

<!-- TODO IMAGE: Screenshot of Help me schedule card in a Gmail draft -->
![Help me schedule dans Gmail](images/gmail-help-me-schedule.png)

> [!NOTE]
> **Repli si Help me schedule manque :** dans le panneau latéral Gemini, envoyez le prompt ci-dessous, puis collez vous-même la proposition dans une invitation Calendar.

```text
Rédigez une proposition prête pour l'agenda : séance de travail de 45 minutes la semaine prochaine pour le transfert usine HIC-LC3-24.
Incluez un objet, quatre créneaux candidats dans mes heures de travail, un court ordre du jour (formules prêtes pour l'usine, attribution du silo d'argile, comité de revue d'innovation), et une note demandant aux invités d'en choisir un.
N'inventez pas de résultats d'essai.
```

6. Facultatif : dans le panneau Gemini, vous pouvez aussi demander :

```text
Trouvez des créneaux libres de 45 minutes sur mon agenda principal la semaine prochaine pour une séance de travail de transfert usine.
```

> [!WARNING]
> Gemini dans Gmail ne peut créer ou lire des événements que sur votre agenda **principal**. Vérifiez les horaires du brouillon avant que quelqu’un accepte.

### Tâche 4 : Utiliser une réponse suggérée, puis rédiger une réponse plus complète

Dans cette tâche, vous comparez une réponse suggérée en un clic avec une vraie réponse de transfert, puis vous n’envoyez que la version que vous avez lue.

1. Fermez la fenêtre de rédaction si vous devez voir le fil, ou restez dans Reply.

2. Cherchez les **suggested replies** (courtes pastilles telles que « Sounds good » ou « I can meet ») au-dessus ou au-dessous du fil.

3. Cliquez sur une réponse suggérée pour voir ce que Gemini a détecté. Lisez-la. Elle ne suffira pas pour un transfert usine.

> [!NOTE]
> **Repli si aucune pastille n’apparaît :** passez à Help me write. Les réponses suggérées dépendent du message et de l’espace. Leur absence n’est pas un labo raté.

4. Dans la zone de réponse, cliquez sur **Help me write** (ou demandez à Gemini dans le panneau latéral : « Rédigez une réponse »). Collez :

```text
Rédigez une réponse à ce fil HIC-LC3-24.
Ton : concis, destiné à l'usine, sans marketing.
Incluez :
- Un accusé de réception des trois points de l'ordre du jour
- La proposition de séance de travail de 45 minutes (utilisez les horaires Help me schedule s'ils sont dans le brouillon)
- Une demande d'ouvrir hic-lc3-24-trial-protocol.pdf avant la réunion
- Une phrase indiquant que nous ne discuterons pas de chiffres non publiés qui ne sont pas dans les fichiers partagés
N'ajoutez pas de résistances à la compression ni de facteurs de clinker.
Restez sous 120 mots.
```

5. Insérez le brouillon dans la réponse. Modifiez tout ce que vous ne diriez pas à Loire Plant.

6. Cliquez sur **Send**.

> [!WARNING]
> Gemini a rédigé le texte. Vous l’avez envoyé. Si une réponse suggérée a inventé une date, une spec ou un participant, cette erreur est maintenant la vôtre.

### Tâche bonus 5 : Transformer le fil en événement Calendar (facultatif)

1. Si Gmail affiche **Add to calendar** sur le fil, utilisez-le et relisez le titre et les invités extraits.

2. Si ce bouton manque, créez l’événement dans Calendar à partir de la proposition que vous avez déjà rédigée.

## Félicitations !

Dans ce labo, vous avez :

- Créé un fil Gmail et l’avez résumé depuis le panneau latéral Ask Gemini.
- Cherché dans Gmail, Chat et Drive depuis Gmail, avec un repli sur Drive quand Chat est vide.
- Proposé une séance de travail de 45 minutes avec Help me schedule, ou un brouillon prêt pour l’agenda si le contrôle manquait.
- Comparé une réponse suggérée avec un brouillon Help me write plus complet, puis l’avez relu avant l’envoi.
