<script setup lang="ts">
import { CONTACT, mailHref, telHref } from '~/utils/contact'
import { LEGAL } from '~/utils/legal'

const { company, host } = LEGAL

type Row = { term: string; value: string | null; href?: string }

const editeur: Row[] = [
  { term: 'Dénomination sociale', value: company.name },
  { term: 'Forme juridique', value: company.legalForm },
  { term: 'Capital social', value: company.capital },
  { term: 'Siège social', value: company.address ?? null },
  { term: 'SIREN', value: company.siren },
  { term: 'Registre du commerce', value: company.rcs },
  { term: 'TVA intracommunautaire', value: company.vat ?? company.vatExemptNotice },
  { term: 'Directeur de la publication', value: company.publisher },
  { term: 'Courriel', value: CONTACT.email, href: mailHref },
  { term: 'Téléphone', value: CONTACT.phoneDisplay, href: telHref }
]

const hebergeur: Row[] = [
  { term: 'Hébergeur', value: host.name },
  { term: 'Adresse', value: host.address },
  { term: 'Site', value: host.url, href: host.url ?? undefined }
]

const title = 'Mentions légales | Sotraya'
const description =
  "Mentions légales du site sotraya.com : éditeur, hébergeur, propriété intellectuelle, données personnelles et cookies."

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: `${LEGAL.siteUrl}/mentions-legales` }
  ],
  link: [{ rel: 'canonical', href: `${LEGAL.siteUrl}/mentions-legales` }]
})
</script>

<template>
  <LegalDoc
    eyebrow="Informations légales"
    title="Mentions légales"
    :lead="`Informations relatives à l'éditeur et à l'hébergeur du site ${LEGAL.siteUrl.replace('https://', '')}, conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique.`"
  >
    <section>
      <h2><span class="num">01</span>Éditeur du site</h2>
      <dl class="legal-dl">
        <div v-for="row in editeur" :key="row.term">
          <dt>{{ row.term }}</dt>
          <dd>
            <a v-if="row.value && row.href" :href="row.href">{{ row.value }}</a>
            <template v-else-if="row.value">{{ row.value }}</template>
            <span v-else class="legal-todo">à compléter</span>
          </dd>
        </div>
      </dl>
      <p>
        Sotraya conçoit et déploie des systèmes d'automatisation et d'intégration d'outils métier
        pour des entreprises. L'activité est exercée depuis {{ company.city }}.
      </p>
    </section>

    <section>
      <h2><span class="num">02</span>Hébergement</h2>
      <dl class="legal-dl">
        <div v-for="row in hebergeur" :key="row.term">
          <dt>{{ row.term }}</dt>
          <dd>
            <a
              v-if="row.value && row.href"
              :href="row.href"
              target="_blank"
              rel="noopener noreferrer"
              >{{ row.value }}</a
            >
            <template v-else-if="row.value">{{ row.value }}</template>
            <span v-else class="legal-todo">à compléter</span>
          </dd>
        </div>
      </dl>
    </section>

    <section>
      <h2><span class="num">03</span>Propriété intellectuelle</h2>
      <p>
        L'ensemble des éléments composant ce site (structure, textes, identité visuelle, logo,
        marque « Sotraya », illustrations, photographies, typographies mises en page et code source)
        est protégé par le droit de la propriété intellectuelle et demeure la propriété exclusive
        de l'éditeur ou de ses ayants droit.
      </p>
      <p>
        Toute reproduction, représentation, modification, publication ou adaptation de tout ou
        partie du site, quel que soit le moyen ou le procédé utilisé, est interdite sans
        autorisation écrite préalable de l'éditeur. Toute exploitation non autorisée est susceptible
        de constituer une contrefaçon au sens des articles L.335-2 et suivants du code de la
        propriété intellectuelle.
      </p>
      <p>
        Les marques, logos et noms de produits de tiers éventuellement cités sur le site
        appartiennent à leurs détenteurs respectifs et ne sont mentionnés qu'à titre d'illustration.
      </p>
    </section>

    <section>
      <h2><span class="num">04</span>Données personnelles</h2>
      <p>
        Le site est un site vitrine : il ne comporte ni compte utilisateur, ni espace client, ni
        formulaire de collecte. Les données personnelles ne sont traitées que lorsque vous prenez
        contact de votre propre initiative, par courriel, téléphone, WhatsApp ou en réservant un
        créneau d'appel.
      </p>
      <ul>
        <li>
          <strong>Responsable de traitement</strong> : {{ company.name }}, joignable à
          <a :href="mailHref">{{ CONTACT.email }}</a
          >.
        </li>
        <li>
          <strong>Données traitées</strong> : identité, coordonnées professionnelles et contenu des
          échanges.
        </li>
        <li>
          <strong>Finalités</strong> : répondre aux demandes, établir des devis et assurer le suivi
          de la relation commerciale.
        </li>
        <li>
          <strong>Bases légales</strong> : mesures précontractuelles et exécution du contrat
          (art. 6.1.b RGPD), intérêt légitime pour le suivi commercial (art. 6.1.f RGPD).
        </li>
        <li>
          <strong>Durée de conservation</strong> : 3 ans à compter du dernier contact pour les
          prospects, et pendant la durée du contrat augmentée des délais légaux de conservation
          comptable pour les clients.
        </li>
        <li>
          <strong>Destinataires</strong> : l'éditeur et ses prestataires techniques (hébergement,
          messagerie, agenda, facturation), agissant en qualité de sous-traitants.
        </li>
      </ul>
      <p>
        Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition
        et de portabilité de vos données. Ces droits s'exercent à l'adresse
        <a :href="mailHref">{{ CONTACT.email }}</a> et une réclamation peut être adressée à la CNIL
        (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">cnil.fr</a>).
      </p>
    </section>

    <section>
      <h2><span class="num">05</span>Cookies et mesure d'audience</h2>
      <p>
        Le site ne dépose aucun cookie publicitaire ni traceur de profilage. Seuls des cookies
        strictement nécessaires à son fonctionnement peuvent être utilisés ; ils sont dispensés de
        consentement au titre de l'article 82 de la loi Informatique et Libertés. Si une mesure
        d'audience était ajoutée ultérieurement, elle serait mise en œuvre dans une configuration
        exemptée de consentement ou précédée d'un recueil du consentement.
      </p>
      <p>
        Des polices de caractères sont chargées depuis des services tiers (Fontshare, Google Fonts),
        ce qui implique la transmission de votre adresse IP à ces fournisseurs lors de l'affichage
        des pages.
      </p>
    </section>

    <section>
      <h2><span class="num">06</span>Liens hypertextes</h2>
      <p>
        Le site peut renvoyer vers des sites tiers (réseaux sociaux, outils de réservation, sites
        d'éditeurs de logiciels). L'éditeur n'exerce aucun contrôle sur ces ressources et décline
        toute responsabilité quant à leur contenu, leur disponibilité et leurs pratiques en matière
        de données personnelles.
      </p>
    </section>

    <section>
      <h2><span class="num">07</span>Responsabilité</h2>
      <p>
        Les informations publiées sur ce site sont fournies à titre indicatif et peuvent être
        modifiées à tout moment. L'éditeur s'efforce d'en assurer l'exactitude et la mise à jour,
        sans garantir qu'elles soient exemptes d'erreur ou d'omission. Elles ne constituent ni un
        engagement contractuel, ni un conseil professionnel personnalisé : seuls un devis signé et
        les
        <NuxtLink to="/conditions-generales-de-vente">conditions générales de vente</NuxtLink>
        engagent l'éditeur.
      </p>
      <p>
        L'éditeur ne saurait être tenu responsable des dommages résultant d'une indisponibilité du
        site, d'une intrusion informatique ou de la présence d'un virus sur le réseau.
      </p>
    </section>

    <section>
      <h2><span class="num">08</span>Droit applicable</h2>
      <p>
        Les présentes mentions légales sont régies par le droit français. Tout litige relatif à leur
        interprétation ou à l'utilisation du site relève des juridictions françaises compétentes.
      </p>
    </section>

    <section>
      <h2><span class="num">09</span>Contact</h2>
      <p>
        Pour toute question relative au site ou aux présentes mentions :
        <a :href="mailHref">{{ CONTACT.email }}</a> · <a :href="telHref">{{ CONTACT.phoneDisplay }}</a
        >.
      </p>
    </section>
  </LegalDoc>
</template>
