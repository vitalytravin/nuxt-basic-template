<template>
  <v-container id="signinup-form" class="fill-height">
    <v-row align="center" justify="center" no-gutters>
      <v-col cols="12" sm="8" md="8" class="">
        <v-card class="evelation-12 card">
          <v-window v-model="step">
            <!--SignIn-->
            <v-window-item :value="1">
              <v-row class="">
                <v-col cols="12" md="8" class="pt-6 pb-6">
                  <v-card-text>
                    <v-form class="signup-form-form" @submit.prevent="$emit('onSignin',{login,password})">
                      <h1
                        class="text-center display-1 mb-10" style="display:block; margin:0"
                        :class="`${bgColor}--text`"
                      >
                        {{ $t('auth.signIn') }}
                      </h1>
                      <v-text-field
                        id="username"
                        v-model="login"
                        :label="$t('auth.username')"
                        name="Username"
                        append-icon="person"
                        type="text"
                        :color="bgColor"
                      />
                      <v-text-field
                        id="password"
                        v-model="password"
                        :label="$t('auth.password')"
                        name="Password"
                        append-icon="lock"
                        type="password"
                        :color="bgColor"
                      />
                      <div class="text-center">
                        <a
                          class="mt-3 overline no-text-decoration"
                          :class="`${bgColor}--text`"
                          @click="step = 3"
                        >
                          {{ $t('auth.forgotYourPassword') }}
                        </a>
                      </div>
                      <div class="text-center mt-6">
                        <v-btn type="submit" large :color="bgColor" dark
                          >{{ $t('auth.signIn') }}</v-btn
                        >
                      </div>
                    </v-form>
                  </v-card-text>
                </v-col>
                <v-col
                  cols="12"
                  md="4"
                  class="darken-2 vcenter"
                  :class="`${bgColor}`"
                >
                  <div>
                    <v-card-text :class="`${fgColor}--text`">
                      <h1 class="text-center headline mb-3" style="display:block; margin:0">{{ $t('auth.noUser') }}</h1>
                      <h5 class="text-center overline mb-3">
                        {{ $t('auth.pleaseSignUpToContinue') }}
                      </h5>
                    </v-card-text>
                    <div class="text-center mb-6">
                      <v-btn dark outlined @click="step = 2">{{ $t('auth.signUp') }}</v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <!--SignUp-->
            <v-window-item :value="2">
              <v-row class="fill-height">
                <v-col
                  cols="12"
                  md="4"
                  class="darken-2 vcenter"
                  :class="`${bgColor}`"
                >
                  <div>
                    <v-card-text :class="`${fgColor}--text`">
                      <h1 class="text-center headline mb-3" style="display:block; margin:0">{{ $t('auth.alreadyUser') }}</h1>
                      <h5 class="text-center overline mb-3">{{ $t('auth.pleaseSignIn') }}</h5>
                    </v-card-text>
                    <div class="text-center mb-6">
                      <v-btn dark outlined @click="step = 1">{{ $t('auth.signIn') }}</v-btn>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" md="8" class=" pt-6 pb-6">
                  <v-card-text>
                    <h1
                      class="text-center display-1 mb-10"
                      :class="`${bgColor}--text`"
                      style="display:block; margin:0"
                    >
                      {{ $t('auth.signUp') }}
                    </h1>
                    <v-form class="signup-form-form" @submit.prevent="$emit('onSignup',{username,email,password})">
                      <v-text-field
                        id="username"
                        v-model="username"
                        :label="$t('auth.username')"
                        name="username"
                        append-icon="person"
                        type="text"
                      />
                      <v-text-field
                        id="email"
                        v-model="email"
                        label="e-Mail"
                        name="email"
                        append-icon="email"
                        type="email"
                      />
                      <v-text-field
                        id="password"
                        v-model="password"
                        :label="$t('auth.password')"
                        name="password"
                        append-icon="lock"
                        type="password"
                      />
                      <div class="text-center mt-6">
                        <v-btn type="submit" large :color="bgColor" dark>
                          {{ $t('auth.signUp') }}</v-btn
                        >
                      </div>
                    </v-form>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
            <!--PW Rest-->
            <v-window-item :value="3">
              <v-row class="fill-height">
                <v-col
                  cols="12"
                  md="4"
                  class="darken-2 vcenter"
                  :class="`${bgColor}`"
                >
                  <div>
                    <v-card-text :class="`${fgColor}--text`">
                      <h1 class="text-center headline mb-3" style="display:block; margin:0">{{ $t('auth.alreadyUser') }}</h1>
                      <h5 class="text-center overline mb-3">{{ $t('auth.pleaseSignIn') }}</h5>
                    </v-card-text>
                    <div class="text-center mb-6">
                      <v-btn dark outlined @click="step = 1">{{ $t('auth.signIn') }}</v-btn>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" md="8" class="pt-6 pb-6">
                  <v-card-text>
                    <v-form class="signup-form-form">
                      <h1
                        class="text-center display-1 mb-10"
                        :class="`${bgColor}--text`"
                        style="display:block; margin:0"
                      >
                        {{ $t('auth.resetPassword') }}
                      </h1>
                      <v-text-field
                        id="login"
                        v-model="login"
                        label="Username / eMail"
                        name="login"
                        append-icon="person / email"
                        type="text"
                        :color="bgColor"
                        class="v-input__icon--double"
                      />
                      <div class="text-center mt-6">
                        <v-btn large :color="bgColor" dark
                          >{{ $t('auth.resetPassword') }}</v-btn
                        >
                      </div>
                    </v-form>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Signupform',
  props: {
    source: {
      type: String,
      default: ''
    },
    bgColor: {
      type: String,
      default: 'indigo'
    },
    fgColor: {
      type: String,
      default: 'white'
    },
  },
  data: () => ({
    step: 1,
    username: '',
    email: '',
    password: '',
    login: '',
  }),
  
}
</script>

<style scoped >
.v-input__icon--double .v-input__icon {
  margin-left: -4.25rem !important;
}
a.no-text-decoration {
  text-decoration: none;
}
#signinup-form {
  max-width: 75rem;
}
.signup-form-form {
  max-width: 23rem;
  margin: 0 auto;
}
.card {
  overflow: hidden;
}
.vcenter {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>