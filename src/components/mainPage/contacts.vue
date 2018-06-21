<template>
  <div class="googleMap">
    <b-jumbotron>
      <template slot="header">
        Контактные данные
      </template>
      <template slot="lead">
        Местонахождение Колледжа Экономики Бизнеса и Права
      </template>
      <br>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2576.3224675339175!2d73.0598556158935!3d49.78000054332584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424340be88ae630b%3A0x59961b43ab55796!2z0JrQvtC70LvQtdC00LYg0Y3QutC-0L3QvtC80LjQutC4LCDQsdC40LfQvdC10YHQsCDQuCDQv9GA0LDQstCwINCa0K3Qo9Ca0LDQt9C_0L7RgtGA0LXQsdGB0L7RjtC30LA!5e0!3m2!1sru!2skz!4v1529528993438"
        width="100%"
        height="600"
        style="border:0"
        allowfullscreen>
        </iframe>
        <br>
        <br>
        <h4>
          Дополнительная информация
        </h4>
        <div>
          <ul class="information">
            <li class="information__items">
              <i class="material-icons">place</i>
              ул. Академическая 7 Караганда Карагандинская 100009 Казахстан
            </li >
            <li class="information__items">
              <i class="material-icons">email</i>
              kebl_keu@mail.ru
            </li>
            <li class="information__items">
              <i class="material-icons">contact_phone</i>
              44-16-41, 44-16-24 добавочно 124
            </li>
            <li class="information__items">
              <i class="material-icons">smartphone</i>
              +7-(700)-149-93-67
            </li>
            <li class="information__items">
              <i class="material-icons">web</i>
              www.college.keu.kz
            </li>
            <li class="information__items">
              <i class="material-icons">directions_bus</i>
              Проезд автобусами №18, 19, 44 и маршрутными такси №011, 30, 31, – остановка «КЭУ»
            </li>
          </ul>
        </div>
      </b-jumbotron>
    </div>
</template>

<script>
export default {

};
</script>

<style lang="sass" scoped>
i
  padding-right: 10px
.jumbotron
  margin-bottom: 0
.information
  display: flex
  justify-content: center
  flex-direction: column
  list-style-type: none
  &__items
    display: flex
    align-items: center
    padding: 10px
</style>

