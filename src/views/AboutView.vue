<template>
  <div class="about">
    <div class="content">
      <h1>Tervetuloa Reseptikantaan!</h1>
      <p>Täältä löydät herkullisimmat reseptit jokaiseen tilanteeseen.</p>
      <h2>Ominaisuudet</h2>
      <ul>
        <li>Avoin hakukenttä</li>
        <li>Haku avainsanoilla</li>
        <li>Reseptien vaiheitten seuranta</li>
      </ul>
    </div>
  </div>
</template>

<style>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 4rem;

    min-height: 80vh;
    max-width: 80rem;
    margin-top: 3rem;
    border-radius: 20px;
    color: var(--color-secondary-1-dark-1);
    background-color: var(--color-primary-1-dark);
  }

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
</style>
