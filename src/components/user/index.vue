<template lang="pug">
  div
    router-link(v-if="isAuth" to="/sign-out").outline-brown
      span Выход
    router-link(v-if="!isAuth" to="/sign-in").outline-brown
      span Вход
</template>

<script>
  export default {
    name: 'User',
    props: {
      isAuth: {
        type: Boolean,
        default: !!['isAuth'],
      },
    },
  }
</script>
