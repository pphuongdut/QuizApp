<template>
  <div></div>
</template>

<script>
export default {
  components: {},
  layout: 'default',
  middleware({ redirect }) {
    return redirect('/home')
  },
}
</script>
