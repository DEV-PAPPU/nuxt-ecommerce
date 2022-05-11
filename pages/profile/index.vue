<template>
  <div>
    <div>
      <b-card no-body>
        <b-tabs pills card vertical>
          <b-tab title="Profile" active>
            <b-card-text>
              <p>{{$auth.user}}</p>
              <h1 v-if="$auth.loggedIn">hi</h1>
            </b-card-text>
          </b-tab>
          <b-tab title="Tab 2">
            <b-card-text>Tab contents 2</b-card-text>
          </b-tab>
          <b-tab title="Tab 3">
            <b-card-text>Tab contents 3</b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>

  </div>
</template>

<script>export default {
  data() {
    return {
      form: {
        email: '',
          password: ''
      },
    }
  },

  methods: {

    test() {
      this.$store.commit('SET_AUTHENTICATED', true);
      console.log('1')
    },

  },

  computed: {
       
       auth(){
          return this.$store.getters.Get_Auth;
       }
  }

}

</script>