<template>
<div class="container">
    <form-tweet-component @new="addTweet"></form-tweet-component>
    <tweet-component 
        v-for="(tweet, index) in tweets" 
        :key="tweet.id"
        :tweet="tweet"
        @update="updateTweet(index, ...arguments)"
        @delete="deleteTweet(index)">
    </tweet-component>
</div>
</template>

<script>
    export default {
        data(){
            return {
                tweets: []
            }
        },
        mounted() {
            axios.get('/tweets').then((response) => {
                this.tweets = response.data;
            })
        },
        methods: {
            addTweet(tweet) {
                this.tweets.unshift(tweet);
            },
            deleteTweet(index) {
                this.tweets.splice(index, 1);
            },
            updateTweet(index) {
                this.tweets[index] = tweet;
            }
        }
    }
</script>