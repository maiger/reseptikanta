<template>
  <div class="about">
    <div class="content">
      <h1>Tervetuloa Reseptikantaan!</h1>
      <p>Täältä löydät herkullisimmat reseptit jokaiseen tilanteeseen.</p>
      <p>
        Reseptit on koottu vuosien(kymmenien) saatossa useista eri lähteistä.
      </p>
      <p>
        Reseptejä on koottu niin historian havinoista, kuin lehdista ja
        internetin syövereistä.
      </p>
      <p>
        Monia reseptejä on muokattu alkuperäisestä omien maukujen mukaisesti.
      </p>
      <h2>Ominaisuudet</h2>
      <ul>
        <li>Avoin hakukenttä</li>
        <li>Haku avainsanoilla</li>
        <li>Reseptien vaiheitten seuranta</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.about {
  @include flex-column-center;

  .content {
    @include flex-column-center;
    @include base-panel;

    padding: 4rem;
    min-height: 80vh;
    max-width: 80rem;
    margin-top: 3rem;
    color: var(--color-secondary-1-dark-1);
  }

  h2 {
    margin: 3rem 0 0 0;
  }

  ul {
    @include flex-column-center;

    margin-top: 1rem;
  }
}
</style>
