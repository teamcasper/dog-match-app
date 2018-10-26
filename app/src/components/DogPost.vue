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
                <input type="radio" name="gender" value="female" v-model="gender"> Female
                <input type="radio" name="gender" value="male" v-model="gender"> Male
                <input type="radio" name="gender" value="other" v-model="gender"> Other
            </div>
            <div>Is your Dog spayed or neutered? 
                <input type="radio" name="spayedOrNeutered" value="true" v-model="spayedOrNeutered"> Yes
                <input type="radio" name="spayedOrNeutered" value="false" v-model="spayedOrNeutered"> No
            </div>
            <div class="personality">Personality Attribues <br><br>
                <input type="checkbox" id="loving"  value="loving" v-model="checkedAttributes2"> loving<br>
                <input type="checkbox" id="playful"  value="playful" v-model="checkedAttributes2"> playful<br>
                <input type="checkbox" id="friendly"  value="friendly" v-model="checkedAttributes2"> friendly<br>
                <input type="checkbox" id="protective"  value="protective" v-model="checkedAttributes2"> protective<br>
                <input type="checkbox" id="calm"  value="calm" v-model="checkedAttributes2"> calm<br>
                <input type="checkbox" id="intelligent"  value="intelligent" v-model="checkedAttributes2"> intelligent<br>
                <input type="checkbox" id="herder"  value="herder" v-model="checkedAttributes2"> herder<br>
                <input type="checkbox" id="anxious"  value="anxious" v-model="checkedAttributes2"> anxious<br>
                <input type="checkbox" id="headstrong"  value="headstrong" v-model="checkedAttributes2"> headstrong<br>
                <input type="checkbox" id="independent" value="independent" v-model="checkedAttributes2"> independent
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
            spayedOrNeutered: null,
            checkedAttributes2: []
        };
    },
    methods: {
        handleAddDog() {
            return addDog(this.name, this.description, this.weight, this.price, this.photoUrl, this.gender, this.spayedOrNeutered, this.checkedAttributes2)
        }
    }

}
</script>

<style>

</style>
