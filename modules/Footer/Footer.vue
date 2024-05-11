<template>
  <footer class="footer">
    <Container>
      <div class="container">
        <Logo />
        <ul class="list">
          <li>
            <a class="phone-link" href="tel:+380671868667"
              >+38 (067) 186 86 67</a
            >
          </li>
          <li>
            <a class="phone-link" href="tel:+380505643977"
              >+38 (050) 564 39 77</a
            >
          </li>
          <li>
            <a class="phone-link" href="">Миколи Закревського 103</a>
          </li>
        </ul>
      </div>
    </Container>
  </footer>
</template>

<script>
export default {
  name: "MyFooter",
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #fff;
  padding: 20px 0;
}
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
.list {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
}
.phone-link {
  color: #000;
  font-size: 18px;
}
@include media(tablet) {
  .container {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 200px;
  }
}
@include media(desktop) {
  .container {
    gap: 350px;
  }
}
</style>
