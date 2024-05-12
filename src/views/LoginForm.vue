<template>
  <div class="card">
    <h2 class="eadig">Login</h2>
    <!-- <input v-model="email" type="email" placeholder="">
    <input v-model="password" type="password" placeholder="Password"> -->

    <div class="form__group field">
      <input class="form__field" v-model="email" type="email" placeholder="Email" required />
      <label for="name" class="form__label">Email</label>
    </div>
    <div class="form__group field">
      <input class="form__field" v-model="password" type="password" placeholder="Password" required />
      <label for="name" class="form__label">Password</label>
    </div>

    <button @click="login" class="btn">Login</button>
    <RouterLink to="/product-list" class="routerLink">View Products</RouterLink>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const credentials = {
        email: this.email,
        password: this.password
      }
      if (credentials.email === 'admin@admin.com' && credentials.password === '12345') {
        // Assuming you have a Vuex store set up with a mutation named 'login'
        this.$store.commit('login', credentials.email)
        // Redirect to the product page
        this.$router.push('/product')
      } else {
        alert('Invalid credentials')
      }
    }
  }
}
</script>
