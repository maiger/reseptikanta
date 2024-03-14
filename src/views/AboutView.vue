<template>
  <div class="about">
    <h1>Tervetuloa Reseptikantaan!</h1>
    <p>Täältä löydät herkullisimmat reseptit jokaiseen tilanteeseen.</p>
    <h2>Ominaisuudet</h2>
    <ul>
      <li>Avoin hakukenttä</li>
      <li>Haku avainsanoilla</li>
      <li>Reseptien vaiheitten seuranta</li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    margin-top: 3rem;
    color: var(--color-secondary-1-dark-1);

    h2 {
      margin: 3rem 0 0 0;
    }

    ul {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
