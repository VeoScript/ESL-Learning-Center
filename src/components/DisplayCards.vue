<template>
  <div class="p-2">
    <b-row class="justify-content-center">
      <b-col sm="6">
        <b-card-group deck>
          <b-card
            header="Vision"
            header-tag="header"
            footer="Card Footer"
            footer-tag="footer"
            title="Title"
          >
            <b-card-text>Header and footers using props.</b-card-text>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </b-card-group>
      </b-col>
      <b-col sm="6">
        <b-card-group deck>
          <b-card
            header="featured"
            header-tag="header"
            footer="Card Footer"
            footer-tag="footer"
            title="Title"
          >
            <b-card-text>Header and footers using props.</b-card-text>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>