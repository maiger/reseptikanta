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
        Monia reseptejä on muokattu alkuperäisestä omien makujen mukaisesti.
      </p>
      <h2>Ominaisuudet</h2>
      <ul>
        <li>Avoin hakukenttä</li>
        <li>Haku avainsanoilla</li>
        <li>Reseptien järjestyksen vaihto</li>
        <li>Reseptien muutos annosmäärien mukaan</li>
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
    max-width: 80rem;
    margin: 3rem 0 3rem 0;
    color: var(--color-secondary-1-dark-1);
  }

  h1 {
    margin-bottom: 1.2rem;
  }

  h2 {
    margin: 3rem 0 0 0;
  }

  ul {
    @include flex-column-center;
  }
}
</style>
