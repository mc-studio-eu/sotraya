<script setup lang="ts">
import { CONTACT, mailHref } from '~/utils/contact'
import { LEGAL } from '~/utils/legal'

const { company, terms } = LEGAL

const title = 'Conditions générales de vente — Sotraya'
const description =
  "Conditions générales de vente des prestations Sotraya : devis, prix, paiement, délais, livrables, propriété intellectuelle, confidentialité et responsabilité."

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: `${LEGAL.siteUrl}/conditions-generales-de-vente` }
  ],
  link: [{ rel: 'canonical', href: `${LEGAL.siteUrl}/conditions-generales-de-vente` }]
})
</script>

<template>
  <LegalDoc
    eyebrow="Conditions contractuelles"
    title="Conditions générales de vente"
    lead="Les présentes conditions encadrent toutes les prestations de conception, d'intégration et d'automatisation réalisées par Sotraya pour ses clients professionnels."
  >
    <section>
      <h2><span class="num">01</span>Objet et champ d'application</h2>
      <p>
        Les présentes conditions générales de vente (les « CGV ») s'appliquent à l'ensemble des
        prestations fournies par
        <strong>{{ company.name }}</strong>
        (le « Prestataire ») à ses clients professionnels (le « Client ») : audit et cadrage,
        conception de systèmes, intégration d'outils, automatisation de processus, développement de
        workflows, formation et accompagnement, ainsi que toute prestation connexe.
      </p>
      <p>
        Elles constituent, conformément à l'article L.441-1 du code de commerce, le socle unique de
        la négociation commerciale. Toute commande implique l'acceptation sans réserve des CGV en
        vigueur au jour de la commande. Elles prévalent sur toutes conditions d'achat du Client,
        sauf accord écrit exprès du Prestataire.
      </p>
      <p>
        Les prestations s'adressent exclusivement à des professionnels agissant dans le cadre de
        leur activité. Le Prestataire ne commercialise pas ses services auprès de consommateurs.
      </p>
    </section>

    <section>
      <h2><span class="num">02</span>Devis et formation du contrat</h2>
      <p>
        Chaque prestation fait l'objet d'un devis ou d'une proposition détaillant le périmètre, les
        livrables, le calendrier prévisionnel et le prix. Sauf mention contraire, le devis est
        valable {{ terms.quoteValidityDays }} jours à compter de son émission.
      </p>
      <p>
        Le contrat est formé à la date de réception par le Prestataire du devis accepté — signature
        manuscrite ou électronique, ou acceptation écrite non équivoque par courriel — accompagné,
        le cas échéant, du versement de l'acompte. Le devis accepté, ses annexes et les présentes
        CGV forment l'intégralité de l'accord. En cas de contradiction, le devis prévaut sur les
        CGV.
      </p>
    </section>

    <section>
      <h2><span class="num">03</span>Périmètre des prestations</h2>
      <p>
        Le Prestataire s'engage à exécuter les prestations décrites au devis conformément aux règles
        de l'art. Il est tenu d'une <strong>obligation de moyens</strong> : il met en œuvre les
        compétences, méthodes et diligences raisonnablement attendues d'un professionnel de son
        secteur, sans garantir un résultat commercial, financier ou de performance particulier, celui-ci
        dépendant de facteurs extérieurs à sa maîtrise.
      </p>
      <p>
        Toute prestation non expressément mentionnée au devis est exclue du périmètre et fait
        l'objet d'un devis complémentaire.
      </p>
    </section>

    <section>
      <h2><span class="num">04</span>Obligations du Client</h2>
      <p>Le bon déroulement des prestations suppose la collaboration active du Client, qui s'engage à :</p>
      <ul>
        <li>
          désigner un interlocuteur unique disposant du pouvoir de décision sur le projet ;
        </li>
        <li>
          fournir en temps utile les informations, contenus, accès et documents nécessaires, et en
          garantir l'exactitude ;
        </li>
        <li>
          ouvrir les accès techniques requis (comptes, licences, API, environnements) au nom du
          Client, et en assumer le coût ;
        </li>
        <li>
          répondre aux demandes de validation dans les délais convenus, un défaut de réponse
          décalant d'autant le calendrier ;
        </li>
        <li>
          maintenir des sauvegardes de ses données et environnements avant toute intervention.
        </li>
      </ul>
      <p>
        Le Prestataire ne saurait être tenu responsable des retards, surcoûts ou dysfonctionnements
        résultant d'un manquement du Client à ces obligations.
      </p>
    </section>

    <section>
      <h2><span class="num">05</span>Outils tiers, abonnements et licences</h2>
      <p>
        Les systèmes livrés s'appuient généralement sur des logiciels et services tiers
        (plateformes d'automatisation, CRM, messageries, hébergeurs, fournisseurs d'API ou de
        modèles d'intelligence artificielle). Sauf stipulation contraire au devis, les abonnements,
        licences et consommations correspondants sont souscrits au nom du Client, restent à sa
        charge et sont régis par les conditions de leurs éditeurs.
      </p>
      <p>
        Le Prestataire n'est pas responsable des évolutions tarifaires, modifications d'API,
        interruptions de service, limitations d'usage ou cessations d'activité de ces tiers, ni de
        leurs conséquences sur le fonctionnement des systèmes livrés. Les adaptations rendues
        nécessaires par de telles évolutions font l'objet d'un devis complémentaire.
      </p>
    </section>

    <section>
      <h2><span class="num">06</span>Prix</h2>
      <p>
        Les prix sont exprimés en euros et fixés au devis, au forfait ou selon un taux journalier.
        Ils s'entendent hors taxes ; la TVA applicable au jour de la facturation s'y ajoute, ou, le
        cas échéant, la mention « {{ company.vatExemptNotice }} » figure sur la facture.
      </p>
      <p>
        Les frais de déplacement, d'hébergement et les dépenses engagées pour le compte du Client
        sont refacturés à l'euro près, sur justificatifs et après accord préalable.
      </p>
    </section>

    <section>
      <h2><span class="num">07</span>Modalités de paiement</h2>
      <p>
        Sauf stipulation contraire au devis, la facturation intervient selon l'échéancier suivant :
        un acompte de <strong>{{ terms.depositRate }} %</strong> à la commande, conditionnant le
        démarrage des travaux, puis le solde à la livraison ou selon les jalons prévus au devis. Les
        prestations récurrentes sont facturées à échéance périodique.
      </p>
      <p>
        Les factures sont payables par virement bancaire à
        <strong>{{ terms.paymentDays }} jours</strong> à compter de leur date d'émission. Aucun
        escompte n'est accordé pour paiement anticipé.
      </p>
    </section>

    <section>
      <h2><span class="num">08</span>Retard de paiement</h2>
      <p>
        Conformément aux articles L.441-10 et D.441-5 du code de commerce, tout retard de paiement
        entraîne de plein droit, sans mise en demeure préalable :
      </p>
      <ul>
        <li>
          des pénalités de retard calculées au taux d'intérêt légal majoré de 10 points, appliquées
          au montant TTC dû, à compter du jour suivant la date d'échéance ;
        </li>
        <li>
          une indemnité forfaitaire pour frais de recouvrement de {{ terms.recoveryFee }}, sans
          préjudice d'une indemnisation complémentaire sur justificatifs ;
        </li>
        <li>
          la suspension de plein droit de toutes les prestations en cours après mise en demeure
          restée sans effet pendant quinze (15) jours, sans que cette suspension ouvre droit à
          indemnité au profit du Client.
        </li>
      </ul>
    </section>

    <section>
      <h2><span class="num">09</span>Délais, livraison et recette</h2>
      <p>
        Les délais annoncés sont indicatifs et courent à compter de la réception de l'acompte et de
        l'ensemble des éléments dus par le Client. Un dépassement raisonnable ne peut donner lieu à
        indemnité, retenue ou annulation de la commande.
      </p>
      <p>
        Le Client dispose de dix (10) jours ouvrés à compter de la mise à disposition des livrables
        pour notifier par écrit les non-conformités constatées par rapport au devis. À défaut, les
        livrables sont réputés acceptés. Toute mise en production ou exploitation effective des
        livrables vaut acceptation.
      </p>
    </section>

    <section>
      <h2><span class="num">10</span>Modifications du périmètre</h2>
      <p>
        Toute demande d'évolution formulée après acceptation du devis — ajout de fonctionnalités,
        changement d'outil, refonte d'un processus déjà validé — fait l'objet d'une évaluation puis
        d'un avenant ou d'un devis complémentaire précisant l'impact sur le prix et le calendrier.
        Aucune évolution n'est engagée sans accord écrit du Client.
      </p>
    </section>

    <section>
      <h2><span class="num">11</span>Garantie</h2>
      <p>
        Le Prestataire garantit la conformité des livrables au devis pendant
        {{ terms.warrantyDays }} jours à compter de leur acceptation. Pendant cette période, toute
        anomalie reproductible imputable au Prestataire est corrigée sans frais.
      </p>
      <p>Sont exclus de la garantie :</p>
      <ul>
        <li>les modifications apportées aux livrables par le Client ou par un tiers ;</li>
        <li>
          les dysfonctionnements provenant d'un service tiers, d'une évolution d'API, d'un défaut de
          licence ou d'un usage non conforme à la documentation remise ;
        </li>
        <li>les demandes d'évolution, qui relèvent de l'article 10.</li>
      </ul>
      <p>
        Au-delà de cette période, la maintenance, le support et les évolutions font l'objet d'un
        contrat distinct ou d'une facturation au temps passé.
      </p>
    </section>

    <section>
      <h2><span class="num">12</span>Propriété intellectuelle et propriété des livrables</h2>
      <p>
        Le Prestataire cède au Client, au fur et à mesure du paiement intégral du prix, les droits
        patrimoniaux d'exploitation portant sur les livrables spécifiques développés pour lui
        (workflows, automatisations, configurations, scripts, documentation), pour la durée légale
        de protection et pour le monde entier, aux fins d'utilisation, de reproduction, d'adaptation
        et d'évolution dans le cadre de son activité.
      </p>
      <p>
        Les comptes, données, contenus et environnements du Client demeurent en toute hypothèse sa
        propriété exclusive. La documentation remise permet au Client d'exploiter et de faire
        évoluer les systèmes livrés sans dépendance au Prestataire.
      </p>
      <p>
        Le Prestataire conserve la propriété de ses savoir-faire, méthodes, composants génériques,
        bibliothèques et outils internes préexistants ou réutilisables, sur lesquels le Client
        bénéficie d'un droit d'usage non exclusif, non cessible, pour les besoins de l'exploitation
        des livrables. Le Prestataire reste libre de réutiliser ces éléments pour d'autres clients.
      </p>
      <p>
        Tant que le prix n'est pas intégralement réglé, les livrables restent la propriété du
        Prestataire et le Client n'est pas autorisé à les exploiter.
      </p>
    </section>

    <section>
      <h2><span class="num">13</span>Confidentialité</h2>
      <p>
        Chaque partie s'engage à préserver la confidentialité des informations, documents, accès et
        données auxquels elle accède à l'occasion du contrat, à ne les utiliser que pour son
        exécution, et à ne pas les divulguer à des tiers sans autorisation écrite. Cet engagement
        subsiste pendant trois (3) ans après la fin du contrat. Il ne s'applique pas aux
        informations publiques, déjà connues, ou dont la divulgation est légalement requise.
      </p>
    </section>

    <section>
      <h2><span class="num">14</span>Données personnelles</h2>
      <p>
        Lorsque l'exécution des prestations conduit le Prestataire à traiter des données à caractère
        personnel pour le compte du Client, il agit en qualité de
        <strong>sous-traitant</strong> au sens de l'article 28 du RGPD, le Client demeurant
        responsable de traitement. Le Prestataire traite ces données sur instruction documentée du
        Client, met en œuvre des mesures de sécurité appropriées, impose la confidentialité aux
        personnes autorisées, assiste le Client dans l'exercice des droits des personnes concernées
        et supprime ou restitue les données à la fin des prestations. Un accord de sous-traitance
        spécifique est conclu lorsque la nature des traitements le requiert.
      </p>
      <p>
        Le traitement des données personnelles des interlocuteurs du Client dans le cadre de la
        relation commerciale est décrit dans les
        <NuxtLink to="/mentions-legales">mentions légales</NuxtLink>.
      </p>
    </section>

    <section>
      <h2><span class="num">15</span>Responsabilité</h2>
      <p>
        La responsabilité du Prestataire est limitée aux dommages directs et prouvés résultant d'un
        manquement à ses obligations. Elle ne peut excéder, toutes causes confondues, le montant
        hors taxes effectivement perçu au titre de la prestation à l'origine du dommage.
      </p>
      <p>
        Sont exclus les dommages indirects, notamment les pertes d'exploitation, de chiffre
        d'affaires, de clientèle, de données, de bénéfice escompté ou d'image. Aucune limitation ne
        s'applique en cas de faute lourde, de dol ou de dommage corporel.
      </p>
      <p>
        Toute réclamation doit être notifiée par écrit dans un délai de trois (3) mois à compter de
        la survenance du fait générateur.
      </p>
    </section>

    <section>
      <h2><span class="num">16</span>Force majeure</h2>
      <p>
        Aucune partie ne peut être tenue responsable d'un manquement résultant d'un cas de force
        majeure au sens de l'article 1218 du code civil. Les obligations affectées sont suspendues
        pendant la durée de l'événement ; si celui-ci se prolonge au-delà de soixante (60) jours,
        chaque partie peut résilier le contrat par écrit, les prestations réalisées restant dues.
      </p>
    </section>

    <section>
      <h2><span class="num">17</span>Résiliation et annulation</h2>
      <p>
        En cas de manquement grave de l'une des parties à ses obligations, l'autre partie peut
        résilier le contrat de plein droit trente (30) jours après une mise en demeure restée sans
        effet, sans préjudice de dommages et intérêts.
      </p>
      <p>
        En cas d'annulation par le Client d'une prestation engagée, l'acompte versé reste acquis au
        Prestataire et les travaux réalisés ainsi que les frais engagés à la date de l'annulation
        sont facturés au prorata. Les prestations récurrentes peuvent être résiliées par chaque
        partie moyennant un préavis écrit d'un (1) mois.
      </p>
    </section>

    <section>
      <h2><span class="num">18</span>Non-sollicitation de personnel</h2>
      <p>
        Chaque partie renonce à solliciter ou à embaucher directement un collaborateur ou
        sous-traitant de l'autre partie ayant participé au projet, pendant l'exécution du contrat et
        pendant douze (12) mois après son terme, sauf accord écrit préalable.
      </p>
    </section>

    <section>
      <h2><span class="num">19</span>Référence commerciale</h2>
      <p>
        Sauf refus écrit du Client, le Prestataire peut citer le nom et le logo du Client ainsi
        qu'une description non confidentielle des prestations réalisées à titre de référence
        commerciale, sur son site et ses supports de présentation.
      </p>
    </section>

    <section>
      <h2><span class="num">20</span>Droit de rétractation</h2>
      <p>
        Le contrat étant conclu entre professionnels pour les besoins de l'activité du Client, il
        n'ouvre pas droit à rétractation. Par exception, conformément à l'article L.221-3 du code de
        la consommation, le Client professionnel n'employant pas plus de cinq salariés et souscrivant une
        prestation n'entrant pas dans le champ de son activité principale dispose d'un délai de
        quatorze (14) jours pour se rétracter ; il peut demander l'exécution immédiate, auquel cas
        les prestations déjà réalisées lui sont facturées.
      </p>
    </section>

    <section>
      <h2><span class="num">21</span>Modification des CGV</h2>
      <p>
        Le Prestataire peut modifier les présentes CGV à tout moment. La version applicable à une
        commande est celle en vigueur à la date de son acceptation, disponible à l'adresse
        {{ LEGAL.siteUrl }}/conditions-generales-de-vente.
      </p>
    </section>

    <section>
      <h2><span class="num">22</span>Droit applicable et litiges</h2>
      <p>
        Les présentes CGV sont soumises au droit français. En cas de différend, les parties
        s'engagent à rechercher une solution amiable dans un délai de trente (30) jours à compter de
        la notification écrite du litige, adressée à <a :href="mailHref">{{ CONTACT.email }}</a
        >.
      </p>
      <p>
        À défaut d'accord, tout litige relatif à la formation, l'interprétation, l'exécution ou la
        rupture du contrat relève de la compétence exclusive du tribunal de commerce du ressort du
        siège social du Prestataire, y compris en cas de pluralité de défendeurs ou d'appel en
        garantie.
      </p>
    </section>
  </LegalDoc>
</template>
