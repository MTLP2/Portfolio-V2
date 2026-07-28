---
title: "2000 € investis, 84 € de CA : le bilan honnête de mon app iOS"
titleEn: "€2,000 Invested, €84 in Revenue: The Honest Retrospective of My iOS App"
date: "2026-07-28"
description: "Un an de développement solo sur une app iOS mêlant philosophie et développement personnel. Les chiffres, les erreurs de tracking, d'ASO et de ciblage, et ce que ça m'a vraiment rapporté."
descriptionEn: "A year of solo development on an iOS app blending philosophy and personal growth. The numbers, the tracking, ASO and targeting mistakes, and what it actually gave me in return."
tags: ["indie dev", "iOS", "startup", "retour d'expérience", "IA", "Français"]
author: "Mathéo Lopes"
authorImage: "/Photo.JPG"
recommendations: ["Xor_explained"]
---

## Les chiffres d'abord

Je me suis lancé dans la création d'une app en espérant devenir riche et céééélèbre. Le constat, après plus d'un an :

- **2000 €** investis
- **84 €** de chiffre d'affaires

On est très, très loin des chiffres qui font rêver sur Twitter.

Je pourrais m'arrêter là et enterrer le projet en silence, mais un échec qu'on n'analyse pas est un échec qu'on répète. Alors voilà le post-mortem complet : l'idée, ce qui a cassé, et ce que j'y ai quand même gagné.

---

## L'idée

Une app qui mélange **philosophie et accompagnement personnel**. Le concept était simple :

1. **Un journal chiffré.** Tu écris ta vie, tes peurs, tes rêves. C'est à toi, personne d'autre n'y accède.
2. **Une IA qui te lit.** Elle identifie le courant philosophique le plus compatible avec ta façon de penser.
3. **Des leçons quotidiennes et hebdomadaires**, générées à partir de cette philosophie *et* de ce qui se passe réellement dans ta vie.

Pas un énième générateur de citations stoïciennes. L'idée était que la leçon du mardi parle de ce que tu as écrit le lundi.

---

## Ce qui n'a pas marché

### 1. Le tracking installé beaucoup trop tard

Erreur numéro un, et de loin la plus coûteuse. J'ai branché **PostHog** pour l'onboarding, **AppsFlyer** pour l'attribution des campagnes TikTok et le **pixel TikTok**… après avoir commencé à dépenser en acquisition.

Résultat : j'ai payé pour du trafic que j'étais incapable d'attribuer. Je ne savais pas quelle campagne ramenait des installs, ni à quelle étape de l'onboarding les gens décrochaient. J'ai piloté à l'aveugle pendant les semaines qui comptaient le plus.

> **La leçon :** le tracking n'est pas une tâche de la phase « croissance ». Il fait partie du MVP, au même titre que le login. Zéro euro d'ads tant que l'attribution n'est pas branchée et vérifiée.

### 2. Les refus à répétition sur l'App Store

Plusieurs cycles de soumission → rejet → correction → resoumission. À chaque fois, plusieurs jours perdus, et une roadmap qui glisse.

Le pire, c'est que c'était évitable : les guidelines sont publiques, longues, chiantes — et il fallait juste les lire sérieusement avant de coder, pas après le premier refus. Fallait bien lire les guidelines, Mathéo.

> **La leçon :** lire les App Store Review Guidelines *avant* d'écrire la première ligne, en particulier les sections sur les abonnements, le contenu généré par IA et les données de santé/bien-être.

### 3. Un onboarding et une boucle de rétention pas assez travaillés

J'ai passé énormément de temps sur les features et pas assez sur les 60 premières secondes. Or dans une app grand public, tout se joue là : si l'utilisateur ne comprend pas la valeur immédiatement, il ne reviendra pas — et une app de journal, sans retour, ne sert à rien.

La boucle de rétention (notifications, rappels, moment de la journée, raison de revenir) a été pensée trop tard, comme une couche ajoutée par-dessus, pas comme le cœur du produit.

> **La leçon :** dans un produit d'habitude, la boucle de rétention *est* le produit. Le reste, c'est du bonus.

### 4. Un mauvais ciblage

J'ai visé un public très jeune, via TikTok. Double problème : peu de pouvoir d'achat pour un abonnement, et une attention qui se déplace vite — génération TikTok, ils zappent aussi vite qu'ils arrivent.

J'ai donc payé cher pour acquérir précisément le segment le moins susceptible de payer et de rester. Le canal d'acquisition a décidé de ma cible, alors que ça aurait dû être l'inverse.

> **La leçon :** choisir la cible qui a le problème *et* les moyens de le résoudre, puis choisir le canal. Pas l'inverse.

---

## Ce que ça m'a quand même apporté

Le CA est ridicule, mais la colonne « compétences » est loin d'être vide.

**Développer une app iOS de A à Z.** Notifications, système de paiement et d'abonnement, StoreKit, gestion des pods et de la CI, publication sur le store. Tout le cycle, sans filet, sans équipe.

**Construire une vraie identité de marque.** Assets, mascotte, direction artistique, visuels. Ce n'est pas mon métier de base, et c'est probablement le domaine où j'ai le plus progressé.

**Comprendre la distribution.** Lire les tendances TikTok, monter des campagnes ads, brancher AppsFlyer, interpréter (un peu trop tard) les données d'attribution. Savoir coder ne sert à rien si personne ne trouve l'app.

**Mettre les mains dans les systèmes d'IA appliqués.** Scoring, prompts dynamiques, utilisation de données custom, et surtout retraitement des données en amont pour obtenir de meilleures sorties. C'est une mise en bouche, mais elle m'a appris que la qualité du modèle compte moins que la qualité de ce qu'on lui donne.

---

## Le seul chiffre qui compte vraiment

L'app a aidé — et continue d'aider — **plus de 500 personnes** dans leur envie de s'améliorer ou dans leurs moments les plus compliqués.

Ce chiffre-là ne rembourse pas les 2000 €, mais il rend la facture beaucoup moins amère. Quelqu'un, quelque part, a ouvert l'app un mauvais soir et y a trouvé quelque chose d'utile. Pour un projet solo, c'est déjà énorme.

---

## La prochaine sera mieux préparée

Ce que je changerai, concrètement :

- **Tracking et attribution avant le premier euro d'ads.** Non négociable.
- **Lire les guidelines de la plateforme avant de développer**, pas après le premier refus.
- **Valider la cible et sa capacité à payer** avant de choisir le canal d'acquisition.
- **Traiter l'onboarding et la rétention comme le produit**, pas comme du polish de fin de projet.

P.S. : ça fait mal quand même.

---

Merci d'avoir lu jusqu'ici. Si tu es en train de te lancer dans ton propre projet solo, j'espère que ce post-mortem t'évitera au moins une de ces quatre erreurs. N'hésite pas à me suivre sur LinkedIn, je continue de partager mon quotidien de software engineer en startup et mes expérimentations d'indie dev.
