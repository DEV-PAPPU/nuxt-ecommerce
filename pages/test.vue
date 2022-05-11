<template>
  <div class="flex justify-center">
    <div class="row form__div vertical-offset-100 py-6 px-8 bg-whit">
      <div class="col-md-4 col-md-offset-4">
        <div class="panel panel-default form_body bg-white">
          <div class="panel-heading">
            <h3 class="panel-title">Please sign in</h3>
          </div>
          <div class="mt-2 panel-body">
            <form @submit.prevent="userLogin">
              <fieldset>
                <div class="form-group">
                  <input class="form-control" type="email" v-model="form.email" id="email" placeholder="email">
                </div>
                <div class="form-group">
                  <input class="form-control" placeholder="Password" type="Password" v-model="form.password" value="">
                </div>
                <div class="checkbox">
                  <label>
                    <input name="remember" type="checkbox" value="Remember Me"> Remember Me
                  </label>
                </div>
                <button type="submit" class="btn btn-lg btn-success btn-block">Login
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        form:{
            email: '',
            password: '',
            },
    }
  },
  methods: {

    userLogin(){
      this.$axios.post('http://manpower.test/api/testapi')
    }
 

  }
}
</script>

<style scoped>
.form__div{
    display: flex;
    justify-content: center;
    margin: 50px 0px;
}

.form_body{
    padding: 30px 20px;
}
</style>