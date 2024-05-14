<template>
  <footer class="footer">
    <Container>
      <div class="my-container">
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
          <li class="list-icon">
            <ListIcon />
          </li>
          <li>
            <a class="phone-link" href="">вул. Миколи Закревського 103</a>
          </li>
        </ul>
      </div>
    </Container>
    <FooterBottom />
  </footer>
</template>

<script>
import FooterBottom from "./FooterBottom.vue";
export default {
  name: "MyFooter",
  components: { FooterBottom },
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #fff;
  padding-top: 20px;
}
.my-container {
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 20px;
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
  .my-container {
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 200px;
  }
  .list {
    flex-direction: row;
    gap: 24px 40px;
    align-items: center;
    flex-wrap: wrap;
    flex-wrap: nowrap;
  }
  .list-icon {
    width: 100%;
  }
}
@include media(desktop) {
  .my-container {
    justify-content: space-between;
  }
  .phone-link {
    white-space: nowrap;
  }
}
</style>
