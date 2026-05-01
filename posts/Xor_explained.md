---
title: "Le XOR expliqué simplement"
titleEn: "XOR Explained Simply"
date: "2026-04-30"
description: "Comprends enfin le XOR : le symbole ⊕ en maths, ^ en code, et comment ça marche bit à bit avec des exemples concrets."
descriptionEn: "Finally understand XOR: the ⊕ symbol in math, ^ in code, and how it works bit by bit with concrete examples."
tags: ["xor", "binaire", "programmation", "opérateurs", "maths"]
author: "Mathéo Lopes"
authorImage: "/Photo.jpg"
image: "/blog/PrincipeduXOR.png"
---

## Le principe du XOR (eXclusive OR)

C'est une règle de comparaison binaire très simple. Pour chaque position de bit, on regarde les deux entrées :

- Si les bits sont **différents**, le résultat est **1**.
- Si les bits sont **identiques**, le résultat est **0**.

### 1. Le symbole $\oplus$ : L'approche Mathématique

Le symbole **$\oplus$** (un plus dans un cercle) est le symbole formel utilisé en **logique mathématique** et en **algèbre de Boole**.

- **Signification :** Il représente l'opération **"Somme directe"** ou **"OU exclusif"**.
- **Pourquoi ce symbole ?** Le petit "$+$" à l'intérieur rappelle que le XOR se comporte presque comme une addition, mais le cercle indique que c'est une opération spéciale (sans retenue).
- **Usage :** Tu le trouveras dans les livres de maths, les articles de recherche en cryptographie ou les cours de logique électronique.

![XOR logic gate truth table and symbol, généré par IA](https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcT5yHJK3D0mVFpULFE_nzNg7Iul7WI7XB-tifvBV7FIXJwU6zrMzv-bISWbOiLq7GXo6UOZu8TF8B7tKM_Og9LlBn0gCHdwtCtd7crcOolH3qyLiKU)

---

### 2. Le symbole `^` : L'approche Informatique (Code)

Le symbole **`^`** (l'accent circonflexe ou "caret") est l'opérateur **bit-à-bit** utilisé dans la quasi-totalité des langages de programmation (C, C++, Java, Python, JavaScript, etc.).

- **Signification :** Il donne l'instruction au processeur d'exécuter une porte logique XOR sur chaque bit de deux nombres.
- **Attention au piège :** Dans certains contextes (comme sur une calculatrice standard ou en LaTeX), `^` peut signifier "puissance" ($2^3 = 8$). Mais en programmation, si tu écris `5 ^ 3`, le processeur ne fera pas $5 \times 5 \times 5$, il fera un XOR et te répondra `6`.
- **Usage :** Dans ton code source, tes algorithmes et tes exercices de manipulation de bits.

---

### Un exemple concret : $5 \oplus 3$

Voyons ce qui se passe "sous le capot" de ton processeur :

1. **On convertit en binaire :**
   - $5 = 101_2$
   - $3 = 011_2$

2. **On compare chaque colonne :**
   - Colonne de droite : $1$ et $1$ (Identiques) $\rightarrow$ **0**
   - Colonne du milieu : $0$ et $1$ (Différents) $\rightarrow$ **1**
   - Colonne de gauche : $1$ et $0$ (Différents) $\rightarrow$ **1**

3. **Résultat :** $110_2$, ce qui donne **6** en décimal.

---

### Pourquoi c'est "Magique" ?

Le XOR est souvent appelé "l'addition sans retenue". Contrairement à une addition classique ($5 + 3 = 8$), le XOR ne fait jamais "déborder" un bit sur la colonne d'à côté.

C'est cette propriété qui lui donne ses super-pouvoirs :

- **L'effet miroir :** Si tu fais `A ^ B = C`, alors `C ^ B` te redonnera toujours `A`. C'est comme une porte qui s'ouvre et se ferme avec la même clé.
- **L'élément neutre :** `A ^ A` donne toujours `0` (car tous les bits sont identiques).
- **L'identité :** `A ^ 0` donne toujours `A` (car rien ne change).

> **Analogie visuelle :** Imagine deux calques transparents avec des points noirs. Le XOR, c'est comme superposer les deux calques : là où les points se superposent exactement, ils s'annulent et deviennent blancs. Là où il n'y a qu'un seul point, il reste noir.

## Problèmes leet code

Si tu te prépares au passage d'interview ou juste que tu souhaites améliorer ta compréhension des basiques avec l’arrivée de l’IA (bonne idée!) Tu pourras retrouver ce concept dans une multitude de problèmes LeetCode notamment.

[Voir une soumission LeetCode d'exemple ici](https://leetcode.com/problems/find-the-original-array-of-prefix-xor/description/)

## Exemple dans le monde réel

Bon XOR c'est pas juste un outil pour réussir des interview ; il est au cœur de technologies que tu utilises peut être tous les jours :

#### 1. La Cryptographie (Le Chiffrement)

Le XOR est la base de presque tous les algorithmes de chiffrement modernes (comme l'AES).

- **Le principe :** Ton message $\oplus$ une clé secrète = un message crypté illisible.
- **La magie :** Pour retrouver le message original, il suffit de refaire XOR avec la même clé. C'est ultra-rapide pour les processeurs, ce qui permet de chiffrer tes messages WhatsApp ou tes connexions HTTPS en temps réel.

#### 2. La Protection de Données (Systèmes RAID 5)

Dans les serveurs de stockage, on utilise le XOR pour éviter de perdre des données si un disque dur tombe en panne.

- On prend les données du Disque 1 et du Disque 2, on calcule leur XOR, et on stocke le résultat sur un Disque 3 (appelé disque de parité).
- Si le Disque 1 brûle, le système fait `Disque 2 ^ Disque 3` et, grâce à la propriété miroir, il reconstruit instantanément les données perdues du Disque 1.

Et bien d’autres exemples encore !

Merci d’avoir lu cet article. N’hésite pas à me suivre sur LinkedIn pour ne rien manquer de mes prochaines publications. (P.S. : Je travaille actuellement sur plusieurs autres projets. Je te partagerai mon quotidien de Software engineer dans une startup parisienne et mon expérience d’indie dev avec mon application iOS qui a atteint les 350 users ! youhou)

Bon courage dans ton apprentissage !
