<template>
    <button class="btn btn-danger">
        Delete
    </button>
</template>

<script>
export default {
    name: "DetailTugasPublikasi",
    data() {
    return {
      posts: {
        id: 1,
        idKonsulen: null,
        tanggal: null,
        eventPublikasi: null,
        judulPublikasi: null,
        linkTugas: null,
        idResiden: 1,
        listReviewer: null,
      },
    };
  },
}
</script>