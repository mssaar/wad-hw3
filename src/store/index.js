import { createStore } from 'vuex'

export default createStore({
    strict: true,
    state: {
        posts: [
            {
                id: 1,
                like: 0,
                image: "https://cdn.britannica.com/08/194708-050-56FF816A/potatoes.jpg",
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
                image: "https://media2.riemurasia.net/albumit/mmedia/ki/5i4/2iyp/44576/1895621409.jpg",
                content: "Pommuudis",
                author_pic: "https://cdn-icons-png.flaticon.com/512/1134/1134769.png",
                created_time: "08.10.2023"
            },
            {
                id: 4,
                like: 9,
                image: "https://i.redd.it/5az9x67eedx41.jpg",
                content: "ZAik",
                author_pic: "https://cdn-icons-png.flaticon.com/512/1134/1134769.png",
                created_time: "03.03.2023"
            },
            {
                id: 5,
                like: 3,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8GBxzohPMW294Tce5ADZVuQf97KhKYs1psw&s",
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
                image: "https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/465024790_957730083048579_4427690051733980024_n.jpg",
                content: "Might call later",
                author_pic: "https://cdn-icons-png.flaticon.com/512/1134/1134769.png",
                created_time: "12.10.2008"
            },
            {
                id: 8,
                like: 5,
                image: "https://scontent.ftll2-1.fna.fbcdn.net/v/t39.30808-6/464323300_498909039807098_5101012980119738836_n.jpg?stp=dst-jpg_s640x640&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=PB9SADUH9-UQ7kNvgFIZyJP&_nc_zt=23&_nc_ht=scontent.ftll2-1.fna&_nc_gid=A4-b3RJ1Ep8bCmxzF1ssFCg&oh=00_AYCWE0XHtS9JjtSXEMU-30CK-Jxqs_QemvOLileMU04VSg&oe=6727C5A2",
                content: "Armastan oma naist",
                author_pic: "https://cdn-icons-png.flaticon.com/512/1134/1134769.png",
                created_time: "09.06.2023"
            },
            {
                id: 9,
                like: 1,
                image: "https://scontent.ftll2-1.fna.fbcdn.net/v/t39.30808-6/463676956_10160892597732284_6556841479839573782_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LwuL2vlokukQ7kNvgEyZ8bh&_nc_zt=23&_nc_ht=scontent.ftll2-1.fna&_nc_gid=AjhcsyWptLHxb4YQiZJQECQ&oh=00_AYA4HaxPKrqE2JbNsfgB6N2ZFlft2IVgOO7Pu62SmPnIEg&oe=6727B84A",
                content: "Sitapildur",
                author_pic: "https://cdn-icons-png.flaticon.com/512/1134/1134769.png",
                created_time: "28.02.2004"
            },
            {
                id: 10,
                like: 11,
                image: "https://scontent.ftll2-1.fna.fbcdn.net/v/t39.30808-6/462713458_1165059075330837_5775663572925675202_n.jpg?stp=dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9GXeAf601I4Q7kNvgExB4s3&_nc_zt=23&_nc_ht=scontent.ftll2-1.fna&_nc_gid=AjhcsyWptLHxb4YQiZJQECQ&oh=00_AYC247ayY7tG4ARx-fhZ8co4_zw05Yu1Lm0FPt1zsUMZrQ&oe=6727CFCD",
                content: "Kulda kohe kapaga",
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