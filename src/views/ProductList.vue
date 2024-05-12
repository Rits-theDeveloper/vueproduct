<template>
    <div class="listProducts">
      <h2>Product Listing</h2>
      <!-- <ul class="listProducts" v-if="products.length">
        <li v-for="(product, index) in products" :key="index">
          <span class="productname">{{ product.name }}</span> <span class="ProductPrice">{{ product.price }}</span>
        </li>
      </ul>
      <div v-else>
        <p>No products available.</p>
      </div> -->

      <table class="tableListing" v-if="products.length">
        <thead>
            <tr>
            <th>Product Name</th>
            <th>Product Price</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(product, index) in products" :key="index">
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            </tr>
        </tbody>
        </table>
        <div v-else>
        <p>No products available.</p>
        </div>
    </div>
  </template>

<script>
export default {
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>
