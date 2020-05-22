<template>
    <div class="col-md-6 offset-md-3 mt-4">
        <div class="card">
            <div class="card-header">Tweet</div>
            <div class="card-body">
                <textarea v-if="editMode" name="tweet" id="tweet" class="form-control" v-model="tweet.description"></textarea>
                <p v-else> {{ tweet.description }} </p>
                <div class="row">
                    <div class="col-md-12">
                        <p class="mb-0 text-muted text-right" style="font-size: 12px">
                            Fecha de publicación: {{ tweet.created_at.substring(0,10) }}
                        </p>
                        <p class="mb-0 text-muted text-right" style="font-size: 12px">
                            Última modificación: {{ tweet.updated_at.substring(0,10) }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <button v-if="editMode" class="btn-sm btn btn-primary text-white" v-on:click="onClickUpdate()">
                    Guardar cambios
                </button>
                <button  v-else class="btn-sm btn btn-info text-white" v-on:click="onClickEdit()">
                    Editar
                </button>
                <button class="btn-sm btn btn-danger" v-on:click="onClickDelete()">
                    Eliminar
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['tweet'],
        data(){
            return{
                editMode: false,
            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        methods: {
            onClickDelete() {
                axios.delete(`/tweets/${this.tweet.id}`).then(() => {
                    this.$emit('delete');
                });
            },
            onClickEdit() {
                this.editMode = true;
            },
            onClickUpdate() {
                const params = {
                    description: this.tweet.description
                };
                axios.put(`/tweets/${this.tweet.id}`, params).then((response) => {
                    this.editMode = false;
                    const tweet = response.data;
                    this.$emit('update', tweet);
                }); 
            }
        }
    }
</script>