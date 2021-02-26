<template>
  <div>
    <v-alert type="success" :value="this.alert.showSuccess">
      This is a success alert.
    </v-alert>
    <v-card-text class="">
      <employee-form @submit="addEmployee"></employee-form>
    </v-card-text>
  </div>
</template>

<script>
import EmployeeForm from "@/components/EzGoEmployeeForm";
import axios from "axios";
export default {
  layout: "ez-go",
  data() {
    return {
      alert: {
        showSuccess: false,
        showError: false
      }
    };
  },
  components: {
    EmployeeForm
  },
  methods: {
    addEmployee(employee) {
      employee.createdTime = new Date();
      axios
        .post(
          "https://ezgotrucking-admin-default-rtdb.firebaseio.com/employees.json",
          employee
        )
        .then(response => {
          if (response) {
            this.alert.showSuccess = true;
          }
        });
    }
  }
};
</script>

<style scoped></style>
