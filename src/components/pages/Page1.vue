<style lang="scss" scoped>
p {
            margin-bottom: 5px !important;

        }

        .dropcap {
            font-family: "Source Sans Pro", Arial, Helvetica, sans-serif;
            background: white;
            color: #99CCCC;
            float: left;
            font-size: 4rem;
            line-height: 0.7;
            margin: 0 0.1em 0 0;
            padding: 0.1em;
        }

        .page {
            background-image: url("/img/pages/1.jpg");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            padding-left: 0px;
            padding-right: 30px;
            padding-top: 150px;
        }

        .paragraph {
            font-size: 16px;
            width: 455px;
            height: 0px;
            text-justify: inter-word;
            padding: 45px 0 0 60px;
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
            color: white;
        }

        .judul {
            font-family: 'montserrat', sans-serif;
            font-weight: 800;
            font-size: 35px;
            color: white;
            padding: 0 0 0 60px;
        }
</style>

<template>
    <!-- <img class="page-background" src="/img/pages/1.jpg" alt="" /> -->
<div class="page">
        <div class="judul">HAI! SOBAT<br><i><span style="color: #f96500;"> U.</span>Magz</i></div>
        <div class="row paragraph">
            <div class="col-12">
                <p>
                    Salam kenal buat kalian semua para pejuang literasi. <br> U magz hadir tidak lebih untuk kalian
                    semua
                    pastinya.
                    <br> U magz sendiri adalah majalah digital yang hadir untuk memudahkan kalian mengakses sebuah
                    majalah
                    digital. tidak perlu keluar rumah dan mengeluarkan uang untuk membaca majalah yang kalian inginkan
                    loo.
                    <br> U magz Juga hadir guna memperluas wawasan, dan meningkatkan literasi membaca, agar tidak salah
                    menggunakan gadged mereka untuk hal yang positif.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Page1",
};
</script>