var app = new Vue (
    {
        el: '#root',
        data: {
            mailArray: []
        },
        methods: {
        },
        mounted() {
            for(let i = 0; i < 10; i++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    console.log(response);
                    const result = response.data.response;
                    this.mailArray.push(result);
                    console.log(this.mailArray);
                });
            }
        }
    }
)