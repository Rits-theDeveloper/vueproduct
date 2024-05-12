<template>
    <div>
        <div class="headerName">
            <h2>Product CRUD</h2>

            <button @click="logout" class="btnlog">
                Logout
            </button>
        </div>
      <form @submit.prevent="submitProduct" >
        <div class="form__group field">
            <label class="form__label">Name:</label>
            <input class="form__field" v-model="productName" type="text" required>
        </div>
        <div class="form__group field">
            <label class="form__label">Price:</label>
            <input class="form__field" v-model.number="productPrice" type="number" required>
        </div>

        <button type="submit" class="btnlog marXauto">Add Product</button>
      </form>

      <div class="listProducts" v-if="products.length">
        <h3>Product List</h3>
        <ul class="listProducts">
          <li v-for="(product, index) in products" :key="index">
            <span v-if="editingIndex !== index" class="width-50 smallFont">
              <span class="productname">{{ product.name }}</span> <span class="ProductPrice">{{ product.price }}</span>
            </span>
            <span v-else class="width-50 disBase">

            <div class="form__group field">
                <label class="form__label">Name:</label>
                <input class="form__field" v-model="editingProductName" type="text" required>
            </div>
            <div class="form__group field">
                <label class="form__label">Password:</label>
                <input class="form__field" v-model.number="editingProductPrice" type="number" required>
            </div>
            </span>
            <button @click="editProduct(index)" class="btn btnlogEdit width-25" v-if="editingIndex !== index">Edit</button>
            <button @click="saveEditedProduct" class="btn btnlogSave width-25" v-else>Update</button>
            <button @click="deleteProduct(index)" class="btn btnlogDelete width-25">Delete</button>
          </li>
        </ul>
      </div>
    </div>
  </template>

<script>
/* eslint-disable */

export default {
  data () {
    return {
      productName: '',
      productPrice: '',
      editingIndex: -1,
      editingProductName: '',
      editingProductPrice: ''
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    submitProduct () {
      if (this.productName && this.productPrice) {
        const newProduct = {
          name: this.productName,
          price: this.productPrice
        }
        this.$store.commit('addProduct', newProduct) 
        this.productName = ''
        this.productPrice = ''
      } else {
        alert('Please enter product name and price.')
      }
    },
    editProduct (index) {
      this.editingIndex = index
      this.editingProductName = this.products[index].name
      this.editingProductPrice = this.products[index].price
    },
    saveEditedProduct () {
      if (this.editingIndex !== -1) {
        this.$store.commit('updateProduct', {
          index: this.editingIndex,
          name: this.editingProductName,
          price: this.editingProductPrice
        })
        this.cancelEditing()
      }
    },
    cancelEditing () {
      this.editingIndex = -1
      this.editingProductName = ''
      this.editingProductPrice = ''
    },
    deleteProduct (index) {
      this.$store.commit('deleteProduct', index) 
    },
    logout () {
      this.$store.commit('logout')
      this.$router.push('/login')
    }
  }
}
</script>
