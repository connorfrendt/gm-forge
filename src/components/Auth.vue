<template>
    <div>
        <div class="auth-wrapper">
            <div>
                <div>Sign Up</div>
                <div>Name</div>
                <input v-model="name" />
                
                <div>Email</div>
                <input v-model="email" />
                
                <div>Password</div>
                <input v-model="password" type="password" />
                
                <div>Confirm Password</div>
                <input v-model="passwordConfirm" type="password" />
                
                <div class="submit-button" @click="signup">Submit</div>
            </div>
            <div>
                <div>Log In</div>
                <div>Email</div>
                <input />
                <div>Password</div>
                <input type="password" />
                <div class="submit-button">Submitsss</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import pb from '../lib/pocketbase';

const name = ref('');
const email = ref('');
const password = ref('');
const passwordConfirm = ref('');

const signup = async () => {
    try {
        const data = {
            name: name.value,
            email: email.value,
            password: password.value,
            passwordConfirm: passwordConfirm.value,
        }

        await pb.collection('users').create(data);

        console.log('User created successfully');
    }
    catch (err) {
        console.error('Signup error: ', err);
    }
}
</script>

<style scoped></style>