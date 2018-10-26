<template>
    <div>
        <h2>Dog Search</h2>
        <form @submit.prevent="handleSubmit">
            <div>ZIP code:
                <input type="number" name="zip" placeholder="ZIP code" v-model="zip">
            </div>
             <div>Min Weight:
                <input type="number" name="maxWeight" v-model="minWeight">
            </div>
            <div>Max Weight:
                <input type="number" name="maxWeight" v-model="maxWeight">
            </div>
            <div>MinPrice:
                <input type="number" name="price" v-model="minPrice">
            </div>
            <div>MaxPrice:
                <input type="number" name="price" v-model="maxPrice">
            </div>
            <div>Gender:
                <input type="radio" name="gender" value="female" v-model="gender"> Female<br>
                <input type="radio" name="gender" value="male" v-model="gender"> Male<br>
                <input type="radio" name="gender" value="other" v-model="gender"> Other
            </div>
            <div>Spayed or Neutered:
                <input type="radio" name="spayedOrNeutered" value="true" v-model="spayedOrNeutered"> Yes<br>
                <input type="radio" name="spayedOrNeutered" value="false" v-model="spayedOrNeutered"> No
            </div>
            <div>Personality Attribues:
                <input type="checkbox" id="loving"  value="loving" v-model="checkedAttributes"> loving<br>
                <input type="checkbox" id="playful"  value="playful" v-model="checkedAttributes"> playful<br>
                <input type="checkbox" id="friendly"  value="friendly" v-model="checkedAttributes"> friendly<br>
                <input type="checkbox" id="protective"  value="protective" v-model="checkedAttributes"> protective<br>
                <input type="checkbox" id="calm"  value="calm" v-model="checkedAttributes"> calm<br>
                <input type="checkbox" id="intelligent"  value="intelligent" v-model="checkedAttributes"> intelligent<br>
                <input type="checkbox" id="herder"  value="herder" v-model="checkedAttributes"> herder<br>
                <input type="checkbox" id="anxious"  value="anxious" v-model="checkedAttributes"> anxious<br>
                <input type="checkbox" id="headstrong"  value="headstrong" v-model="checkedAttributes"> headstrong<br>
                <input type="checkbox" id="independent" value="independent" v-model="checkedAttributes"> independent
            </div>

            <button>Submit</button>
        </form>

        <div v-if="dogs">
            <h3>Results:</h3>
            <div 
                v-for="dog in dogs"
                :key="dog._id">
            
                <h4>Name: {{ dog.name }}</h4>
                <p>Description: {{ dog.description }}</p>
                <p>Weight: {{ dog.weight }}</p>
                <p>Price: {{ dog.price }}</p>
                <p>Gender: {{ dog.gender }}</p>
                <p>Spayed or Neutered: {{ dog.spayedOrNeutered }}</p>
                <p>Personality Attributes:</p> 
                <p v-for="personalityAttribute in dog.personalityAttributes"
                    :key="personalityAttribute">
                    {{ personalityAttribute }}
                </p>
            </div>
        </div>
        

    </div>
</template>

<script>
import { dogQuery, makeQueryString } from '../services/api';

export default {

    data() {
        return {
            zip: null,
            maxWeight: null,
            minWeight: null,
            minPrice: null,
            maxPrice: null,
            gender: '',
            spayedOrNeutered: null,
            dogs: null,
            checkedAttributes: []
        };
    },
    methods: {
        handleSubmit() {
            const queryString = makeQueryString(this.zip, this.maxWeight, this.minWeight, this.minPrice, this.maxPrice, this.gender, this.spayedOrNeutered, this.checkedAttributes);
            dogQuery(queryString)
            .then(matchingDogs => {
                this.dogs = matchingDogs;
            })
            
        },
    }
}
</script>

<style>

</style>