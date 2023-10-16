<template>
  <div class="container">
    <div class="container-cadastro">
      <div class="text-forms">
          <h3>LOGIN</h3>
        </div>
      <div class="inputs">
            <b-form-input
              id="input"
              type="email"
              placeholder="Email"
              required
            ></b-form-input>  
          </div>
      <div class="inputs">
           <b-form-input
             id="input"
             type="password"
             placeholder="Password"
             required
           ></b-form-input>
          </div>
          <div class="inputs">
          <b-button class="button-cadastro" type="submit"  variant="danger"
            >Login</b-button
          >
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
     
    };
  },
  methods: {
    onSubmit() {
    fetch('http://localhost:8000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.form.name,
        email: this.form.email,
        password: this.form.password,
        admin: this.form.admin
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('usuario criado',data);
    }).catch(error => {
      console.error('erro ao criar');
    });
    },


  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2? family= Alfa+Slab+One & display=swap');

.container {
  max-width: 1920px;
  height: 100vh;
  display: flex;
  text-align: center;
  background-color: #222;
  
}

.text-forms{
    color: var(--colorGray-2);
    
  }h3{
    font-weight: 900;
    font-family: 'Alfa Slab One', serif;;
  }
</style>