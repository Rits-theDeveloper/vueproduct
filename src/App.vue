<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
.card{
  padding: 2rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    background: white;
    border-radius: 10px;
    width: 100%;
}
.eadig{
  margin-top: 0;
}
.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 30px;
  width: 100% !important;
}
 .form__field {
  width: 100%;
    border: 0;
    border-bottom: 2px solid #9b9b9b;
    outline: 0;
    font-size: 18px;
    font-weight: 500;
    color: #000;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
    font-family: "Montserrat", sans-serif;
}
 .form__field::placeholder {
  color: transparent;
}
 .form__field:placeholder-shown ~ .form__label {
  font-size: 1.3rem;
  cursor: text;
  top: 20px;
}
 .form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #9b9b9b;
}
 .form__field:focus {
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, #11998e, #38ef7d);
  border-image-slice: 1;
}
 .form__field:focus ~ .form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #11998e;
  font-weight: 700;
}
/* reset input */
 .form__field:required, .form__field:invalid {
  box-shadow: none;
}
/* demo */
 body {
   font-family: "Montserrat", sans-serif !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 1.5rem;
  background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);;
}
*{
  font-family: "Montserrat", sans-serif;
}
 .btn{
  background: linear-gradient(90deg, #1CB5E0 0%, #000851 100%);
    color: white;
    font-size: 18px;
    font-weight: 600;
    padding: 8px 24px;
    margin: 20px;
    border: 0px;
    border-radius: 10px;
 }
 .btnlog{
  background: linear-gradient(90deg, #1CB5E0 0%, #000851 100%);
    color: white;
    font-size: 18px;
    font-weight: 600;
    padding: 8px 24px;
    margin: 20px;
    border: 0px;
    border-radius: 10px;
    cursor: pointer;
    align-items: center;
    display: flex;
    justify-content: center;
    gap:10px;
 }
 .btnlog img{
  width: 20px;
 }
 .headerName{
  align-items: center;
    display: flex;
    justify-content: space-between;
 }
 .listProducts{
  list-style: none;
  padding: 0;
 }
 .listProducts li, .disBase{
  display: flex;
    align-items: center;    margin: 6px 0px;
 }
 .marXauto{
  margin: 20px auto !important;
 }
.width-50{
  width: 86%;
}
.width-25{
  width: 14%;
  margin: 0 2px;
  padding: 8px 0px;
  font-size: 12px;
  font-weight: 500;
}
.listProducts .form__group{
  margin: 0;
  padding: 15px 5px 0;
}
.listProducts .form__field,.listProducts .form__label, .smallFont{
  margin: 0;
  font-size: 14px;
}
.smallFont{
  display: flex;
  align-items: center;
  text-align: left;
}
.btnlogSave{
  background: linear-gradient(90deg, #3ebd13 0%, #008552 100%);
}
.btnlogDelete{

  background: linear-gradient(90deg, #ff6200 0%, #ff0000 100%);
}
.tableListing{
  border-collapse: collapse;

}
.tableListing th, .tableListing td{
  border:thin solid #000;
  padding: 20px;
  font-size: 16px;
}

.productname,.ProductPrice{
  width: 50%;
  display: inline-block;
}
.routerLink{
  font-size: 16px;
}
</style>
