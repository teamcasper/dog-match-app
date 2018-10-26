<template>
    <div>
        <h2>Dog Post</h2>
        <form @submit.prevent="handleAddDog">
             <div>Name: 
                <input type="text" name="name"  v-model="name">
            </div>
             <div>Description: 
                <input type="text" name="description"  v-model="description">
            </div>
            <div>Weight:
                <input type="number" name="weight" v-model="weight">
            </div>
            <div>Price:
                <input type="number" name="price" v-model="price">
            </div>
            <div>Photo URL: 
                <input type="text" name="photoUrl" v-model="photoUrl">
            </div>
            <div>Gender:
                <input type="radio" name="gender" value="female" v-model="gender"> Female<br>
                <input type="radio" name="gender" value="male" v-model="gender"> Male<br>
                <input type="radio" name="gender" value="other" v-model="gender"> Other
            </div>
            <div>Is your Dog spayed or neutered? 
                <input type="radio" name="spayedOrNeutered" value="true" v-model="spayedOrNeutered"> Yes<br>
                <input type="radio" name="spayedOrNeutered" value="false" v-model="spayedOrNeutered"> No
            </div>
            <button>Submit</button>
        </form>
    </div>
</template>

<script>
import { addDog } from '../services/api';

export default {
    data() {
        return {
            name: '',
            description: '',
            weight: null,
            price: null,
            photoUrl: '',
            gender: '',
            spayedOrNeutered: null
        };
    },
    methods: {
        handleAddDog() {
            return addDog(this.name, this.description, this.weight, this.price, this.photoUrl, this.gender, this.spayedOrNeutered)
        }
    }

}
</script>

<style>

</style>
