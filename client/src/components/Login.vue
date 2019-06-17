<template>
<v-container>
    <v-layout row wrap>
        <v-flex xs12>
            <h2>Login to Globomantics</h2>
        </v-flex>
        <v-flex xs12 sm6 offset-sm3>
            <v-text-field
            label="E-mail"
            v-model="email"
            v-bind:rules="emailRules"
            required>
            </v-text-field>
             <v-text-field
            label="Password"
            v-model="password"
            v-bind:rules="passwordRules"
            v-bind:type="'password'"
            required>
            </v-text-field>
        </v-flex>
        <v-flex xs12 sm6 offset-sm3>
            <v-btn color="error" v-on:click="cancel">Cancel</v-btn>
            <v-btn color="success" v-on:click="login">Login</v-btn>
        </v-flex>
    </v-layout>
    <v-snackbar
      v-model="showAlert"
      :timeout="6000"
      :top="true"
    >
    {{ message }}
    </v-snackbar>

</v-container>
</template>

<script>
export default {
    data(){
        return{
            showAlert: false,
            message:'', 
            email: '',
            emailRules: [
                 v => !!v || 'E-mail is required',
                 v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
            password: '',
            passwordRules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => ('The email and password you entered don\'t match')
                }

        }
    },
    methods: {
        login: function(){
            const vm = this
            if(vm.password === 'test11'){
            this.$router.push({ path: '/' })}
            else{
               vm.showAlert = true
               vm.message = 'Email or password invalid'
            }
        }
    }

}
</script>

<style>

</style>
