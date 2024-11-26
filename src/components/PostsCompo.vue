<template>
    <div id="post-list">
        <div v-for="post in posts" :key="post.id" class="post">
            <div class="post-header">
                <img :src="post.author_pic" alt="author" class="author-pic" />
                <p>{{ post.created_time }}</p>
            </div>
            <div class="post-body">
                <img v-if="post.image" :src="post.image" alt="Post Image" class="post-image" />
                <p>{{ post.content }}</p>
            </div>
            <div class="post-footer">
                <div class="like-button" @click="increaseLike(post.id)">
                    <img src="https://cdn.worldvectorlogo.com/logos/facebook-like.svg" alt="Like" class="like-image" />
                    <span>{{ post.like }} Likes</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PostsCompo",
    computed: {
        posts() {
            return this.$store.getters.allPosts;
        }
    },
    methods: {
        increaseLike(postId) {
            this.$store.dispatch('increaseLikeAction', postId);
        }
    }
};
</script>

<style scoped>
#post-list {
    margin: 20px;
}

.post {
    background-color: #f9f9f9;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.post-header {
    display: flex;
    align-items: center;
}

.author-pic {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 10px;
}

.post-body {
    margin: 10px 0;
}

.post-image {
    width: 100%;
    max-width: 600px;
    margin-bottom: 10px;
}

.post-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.like-button {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.like-image {
    width: 30px;
    height: 30px;
    margin-right: 5px;
}

.like-button:hover .like-image {
    opacity: 0.8;
}
</style>
