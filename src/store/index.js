import { createStore } from 'vuex'

export default createStore({
    strict: true,
    state: {
        posts: [
            {
                id: 1,
                like: 0,
                image: "https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/465024790_957730083048579_4427690051733980024_n.jpg",
                content: "kartoffel",
                author_pic: "https://cdn-icons-png.flaticon.com/512/1134/1134769.png",
                created_time: "08.10.2023"
            },
            {
                id: 2,
                like: 11,
                image: null,
                content: "New phone who DIS?!?",
                author_pic: "https://cdn-icons-png.flaticon.com/512/1134/1134769.png",
                created_time: "02.05.2003"
            },
            {
                id: 3,
                like: 19,
                image: "https://scontent.ftll2-1.fna.fbcdn.net/v/t39.30808-6/465009299_8759648954078015_7479492291036471472_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TKceibgiL_QQ7kNvgEYewEP&_nc_zt=23&_nc_ht=scontent.ftll2-1.fna&_nc_gid=AmbUozkUbq0lbkz72NyD1vI&oh=00_AYBvcJ4Udsit84gATdIFsfvyIfe0c5lyzg5A8tH6pzAJcg&oe=6727ACE0",
                content: "Pommuudis",
                author_pic: "https://cdn-icons-png.flaticon.com/512/1134/1134769.png",
                created_time: "08.10.2023"
            },
            {
                id: 4,
                like: 9,
                image: "https://scontent.ftll2-1.fna.fbcdn.net/v/t39.30808-6/464261458_122164553486053854_1874447425570842371_n.jpg?stp=dst-jpg_s640x640&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Y7-czb1nWKsQ7kNvgGb2Djf&_nc_zt=23&_nc_ht=scontent.ftll2-1.fna&_nc_gid=A4-b3RJ1Ep8bCmxzF1ssFCg&oh=00_AYB-6Cgd9uzen5ct6-sg9_Ru3Q79tUzZTcLvZTlHFXRzkw&oe=6727C39E",
                content: "ZAik",
                author_pic: "https://cdn-icons-png.flaticon.com/512/1134/1134769.png",
                created_time: "03.03.2023"
            },
            {
                id: 5,
                like: 3,
                image: "https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/465024790_957730083048579_4427690051733980024_n.jpg",
                content: "",
                author_pic: "https://cdn-icons-png.flaticon.com/512/1134/1134769.png",
                created_time: "13.08.2018"
            },
            {
                id: 6,
                like: 12,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcSUmrliao3jjDaQdeMjX5_ezS6F6eBqZP0A&s",
                content: "Mina beebina",
                author_pic: "https://cdn-icons-png.flaticon.com/512/1134/1134769.png",
                created_time: "28.02.2004"
            },
            {
                id: 7,
                like: 33,
                image: "https://i.pinimg.com/736x/c1/84/15/c1841505291373a1efaaaba05462d455.jpg",
                content: "eile",
                author_pic: "https://cdn-icons-png.flaticon.com/512/1134/1134769.png",
                created_time: "12.10.2008"
            },
            {
                id: 8,
                like: 5,
                image: "https://t4.ftcdn.net/jpg/06/45/27/81/360_F_645278147_orAd7BZzFeVzJu1hr14wHj7FPxHmQoMw.jpg",
                content: "crew'ga sai kõikides liivakastides käidud",
                author_pic: "https://cdn-icons-png.flaticon.com/512/1134/1134769.png",
                created_time: "09.06.2023"
            },
            {
                id: 9,
                like: 1,
                image: "https://images.squarespace-cdn.com/content/v1/509d7c06e4b081ffff71ad54/1630506639252-WEMRGTRN7Y50YK5DO5KN/fishing-6-1.jpg",
                content: "onu Tiiduga",
                author_pic: "https://cdn-icons-png.flaticon.com/512/1134/1134769.png",
                created_time: "28.02.2004"
            },
            {
                id: 10,
                like: 11,
                image: "https://www.letseatcake.com/wp-content/uploads/2021/07/Funny-Memes-44.jpg",
                content: "iga saatana kord",
                author_pic: "https://cdn-icons-png.flaticon.com/512/1134/1134769.png",
                created_time: "26.06.2002"
            },

        ]
    },
    getters: {
        allPosts: state => state.posts,
    },
    mutations: {
        // increase like by one
        increaseLike(state, postId) {
            const post = state.posts.find(p => p.id === postId);
            if (post) post.like++;
        },
        // all the likes reset to 0
        resetLikes(state) {
            state.posts.forEach(post => post.like = 0);
        }
    },
    actions: {
        increaseLikeAction({ commit }, postId) {
            commit('increaseLike', postId);
          },
          resetLikesAction({ commit }) {
            commit('resetLikes');
          }
    }
})