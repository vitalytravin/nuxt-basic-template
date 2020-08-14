<template>
  <signupform @onSignup="signup($event)" @onSignin="signin($event)" />
</template>

<script>
export default {
  layout:"empty",
  methods: {
    signup(signupData) {
      this.$auth
        .signup({
          data: {
            user: signupData
          }
        })
        .catch((e) => {
          this.error = e + ''
        })
    },
    async signin(signinData) {
      try {
        const response = await this.$auth.loginWith('local', {
          data: signinData
        })
      } catch (err) {
        this.$toast.error('Error while authenticating',{
          position:'bottom-center',
          duration: 5000
          })
      }
    }
  }
}
</script>

