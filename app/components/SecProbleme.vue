<template>
  <section id="probleme" class="band">
    <div class="shell">
      <h2 class="t-statement max-w-[20ch]">
        <span v-reveal class="block">Votre entreprise n'a probablement pas besoin d'un nouvel outil.</span>
        <span v-reveal="120" class="mt-8 block text-mute md:mt-14">
          Elle a besoin que ceux qu'elle possède déjà travaillent ensemble.
        </span>
      </h2>

      <div v-reveal class="mt-16 grid gap-8 md:mt-24 md:grid-cols-2 md:gap-16">
        <p class="t-lead text-mute">
          Un client entre. Une information est copiée. Un dossier est créé. Un email est envoyé. Une
          facture est préparée. Une relance est planifiée.
        </p>
        <p class="t-lead text-mute">
          Une activité se remplit rapidement de petites actions qui ne devraient plus dépendre de
          quelqu'un.
        </p>
      </div>

      <div v-reveal class="mt-16 md:mt-24">
        <FlowCompare />
      </div>
    </div>
  </section>
</template>
