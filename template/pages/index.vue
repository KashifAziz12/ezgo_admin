<template>
  <div id="page-parallax">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg12>
          <v-widget title="Welcome to EZ-GO Admin Panel" class="mt-3">
            <div slot="widget-content" class="text-xs-center">
              <v-parallax
                :src="require('@/static/bg/21.jpg')"
                height="700"
                jumbotron
              >
                <h1>Welcome to EZ-GO Admin Panel</h1>
                <h3>
                  Please Navigate using the breadcrumbs to add a New Employee or
                  view Employee details
                </h3>
                <h3>Visit our website</h3>
                <a target="_" href="http://localhost:8080">EZ-GO Website</a>
              </v-parallax>
            </div>
          </v-widget>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import VWidget from "@/components/VWidget";

export default {
  layout: "ez-go",
  components: {
    VWidget
  },
  data() {
    return {
      page: 1
    };
  },
  computed: {},
  methods: {}
};
</script>
