<template>
  <v-form v-model="valid" @submit="submit()">
    <v-subheader class="pa-0 mt-3">CONTACT DETAIL</v-subheader>
    <v-text-field
      label="Full Name"
      name="fullname"
      placeholder="Michael Wang"
      v-model="formModel.name"
      v-validate="'required'"
      data-vv-name="fullname"
      :error-messages="errors.collect('fullname')"
      required
    ></v-text-field>
    <v-text-field
      label="Email"
      placeholder="wangqiangshen@gmail.com"
      name="email"
      v-validate="'required|email'"
      data-vv-name="email"
      :error-messages="errors.collect('email')"
      v-model="formModel.email"
      required
    ></v-text-field>
    <v-text-field
      label="Phone"
      placeholder="(###) ### - ####"
      v-validate="'required'"
      data-vv-name="phone"
      :error-messages="errors.collect('phone')"
      v-model="formModel.phone"
      mask="phone"
      required
    ></v-text-field>
    <v-subheader class="pa-0 mt-3">ADDRESS</v-subheader>
    <v-text-field
      label="Address"
      v-validate="'required'"
      data-vv-name="address"
      :error-messages="errors.collect('address')"
      v-model="formModel.address"
      required
    ></v-text-field>
    <v-select
      :items="states"
      v-validate="'required'"
      data-vv-name="state"
      v-model="formModel.state"
      label="State"
      auto
      required
      item-text="text"
      item-value="value"
    ></v-select>
    <v-text-field
      label="Zip Code"
      v-model="formModel.zipcode"
      required
    ></v-text-field>

    <div class="form-btn">
      <v-btn outline @click="submit" color="primary">Submit</v-btn>
      <v-btn outline @click="clear">Clear</v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  $_veeValidate: {
    validator: "new"
  },
  data: () => ({
    formModel: {
      name: null,
      email: null,
      phone: null,
      address: null,
      text: null,
      zipcode: null
    },
    states: [
      { text: "Alabama", value: "Alabama" },
      { text: "Alaska", value: "Alaska" },
      { text: "American Samoa", value: "American Samoa" },
      { text: "Arizona", value: "Arizona" },
      { text: "Arkansas", value: "Arkansas" },
      { text: "California", value: "California" },
      { text: "Colorado", value: "Colorado" },
      { text: "Connecticut", value: "Connecticut" },
      { text: "Delaware", value: "Delaware" },
      { text: "District of Columbia", value: "District of Columbia" },
      {
        text: "Federated States of Micronesia",
        value: "Federated States of Micronesia"
      },
      { text: "Florida", value: "Florida" },
      { text: "Georgia", value: "Georgia" },
      { text: "Guam", value: "Guam" },
      { text: "Hawaii", value: "Hawaii" },
      { text: "Idaho", value: "Idaho" },
      { text: "Illinois", value: "Illinois" },
      { text: "Indiana", value: "Indiana" },
      { text: "Iowa", value: "Iowa" },
      { text: "Kansas", value: "Kansas" },
      { text: "Kentucky", value: "Kentucky" },
      { text: "Louisiana", value: "Louisiana" },
      { text: "Maine", value: "Maine" },
      { text: "Marshall Islands", value: "Marshall Islands" },
      { text: "Maryland", value: "Maryland" },
      { text: "Massachusetts", value: "Massachusetts" },
      { text: "Michigan", value: "Michigan" },
      { text: "Minnesota", value: "Minnesota" },
      { text: "Mississippi", value: "Mississippi" },
      { text: "Missouri", value: "Missouri" },
      { text: "Montana", value: "Montana" },
      { text: "Nebraska", value: "Nebraska" },
      { text: "Nevada", value: "Nevada" },
      { text: "New Hampshire", value: "New Hampshire" },
      { text: "New Jersey", value: "New Jersey" },
      { text: "New Mexico", value: "New Mexico" },
      { text: "New York", value: "New York" },
      { text: "North Carolina", value: "North Carolina" },
      { text: "North Dakota", value: "North Dakota" },
      { text: "Northern Mariana Islands", value: "Northern Mariana Islands" },
      { text: "Ohio", value: "Ohio" },
      { text: "Oklahoma", value: "Oklahoma" },
      { text: "Oregon", value: "Oregon" },
      { text: "Palau", value: "Palau" },
      { text: "Pennsylvania", value: "Pennsylvania" },
      { text: "Puerto Rico", value: "Puerto Rico" },
      { text: "Rhode Island", value: "Rhode Island" },
      { text: "South Carolina", value: "South Carolina" },
      { text: "South Dakota", value: "South Dakota" },
      { text: "Tennessee", value: "Tennessee" },
      { text: "Texas", value: "Texas" },
      { text: "Utah", value: "Utah" },
      { text: "Vermont", value: "Vermont" },
      { text: "Virgin Island", value: "Virgin Island" },
      { text: "Virginia", value: "Virginia" },
      { text: "Washington", value: "Washington" },
      { text: "West Virginia", value: "West Virginia" },
      { text: "Wisconsin", value: "Wisconsin" },
      { text: "Wyoming", value: "Wyoming" }
    ],
    valid: true
  }),
  mounted() {
    this.$validator.localize("en", this.dictionary);
  },
  methods: {
    submit() {
      this.$validator.validateAll();
      this.$emit("submit", this.formModel);
      this.clear();
    },
    clear() {
      this.formModel = {};
      this.$validator.reset();
    }
  }
};
</script>
