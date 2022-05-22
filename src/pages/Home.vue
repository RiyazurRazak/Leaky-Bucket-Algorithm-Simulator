<template>
  <NavBar />
  <br />
  <div class="desc">
       <p class="desc">Leaky Bucket Algorithm mainly controls the total amount and the rate of the traffic sent to the network.</p>
       <ul>
        <li>
          Let us imagine a bucket with a small hole at the bottom where the rate at which water is poured into the bucket is not constant and can vary but it leaks from the bucket at a constant rate.
        </li>
        <li>
          So (up to water is present in the bucket), the rate at which the water leaks does not depend on the rate at which the water is input to the bucket.
        </li>
        <li>
           If the bucket is full, additional water that enters into the bucket that spills over the sides and is lost.
        </li>
        <li>
           Thus the same concept applied to packets in the network. Consider that data is coming from the source at variable speeds. Suppose that a source sends data at 10 Mbps for 4 seconds. Then there is no data for 3 seconds. The source again transmits data at a rate of 8 Mbps for 2 seconds. Thus, in a time span of 8 seconds, 68 Mb data has been transmitted.
        </li>
       </ul>
      <p>That’s why if a leaky bucket algorithm is used, the data flow would be 8 Mbps for 9 seconds. Thus, the constant flow is maintained.</p>
      <pre>source: <a href="https://www.tutorialspoint.com/what-is-leaky-bucket-algorithm-in-computer-networks">tutorialspoint</a></pre>
  </div>
  <div class="center">
        <router-link to="/simulator"><n-button color="#4E944F" ghost strong>Simulate Now</n-button></router-link>
  </div>
  <Footer />

 
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import {NButton} from 'naive-ui'
</script>

<style scoped>
.desc{
    width: 80vw;
    margin: auto;
    text-align: left;
    font-size: 18px;
}
.desc ul{
    padding-left: 15px;
}
.center{
    text-align: center;
}
</style>
