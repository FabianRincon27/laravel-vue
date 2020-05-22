<template>
    <div class="col-md-6 offset-md-3">
        <div class="card">
            <div class="card-header">¿En qué estás pensando ahora?</div>
            <div class="card-body">
                <form action="" v-on:submit.prevent="newTweet()">
                    <div class="form-group">
                        <label for="">Estoy pensando en:</label>
                        <textarea name="tweet" id="tweet" class="form-control" v-model="description"></textarea>
                    </div>
                    <div class="form-group row mb-0">
                        <div class="col-md-6 offset-md-3">
                            <button type="submit" class="btn-sm btn btn-outline-info btn-block">
                                Publicar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                description: ''
            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        methods: {
            newTweet(){
                const params = {
                    description: this.description
                }
                this.description = '';
                axios.post('/tweets', params)
                .then((response) => {
                    const tweet = response.data;
                    this.$emit('new', tweet);
                }); 
            }
        }
    }
</script>