<div>
  <h1>Irrelevant Ninja</h1>
  <sub>Blog</sub>
</div>

<style lang="scss">
  @use '../styles/text';

  div {
    position: relative;
    text-align: center;
    margin-bottom: var(--spacing-7);
  }
  h1 {
    @include text.gold-title();
  }
  sub {
    position: absolute;
    top: 60px;
    margin-left: 95px;
    color: var(--gold);
  }
</style>
