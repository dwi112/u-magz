<style lang="scss" scoped>
.dropcap {
            font-family: "Source Sans Pro", Arial, Helvetica, sans-serif;
            color: #0c0c0b;
            float: left;
            font-size: 4rem;
            line-height: 0.7;
            margin: 0 0.1em 0 0;
            padding: 0.1em;
        }

        .page {
            background-image: url("/img/pages/5.png");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
        }

        .paragraph {
            font-size: 11.6px;
            font-family: 'Open Sans', sans-serif;
            text-align: justify;
            text-justify: inter-word;
            padding: 374px 0 0 19px;
        }
        .row{
          display: flex;
          flex-wrap: wrap;
        }
        .col{
          flex: 1;
          margin: 10px;
        }
</style>

<template>
  <div class="page">
        <div class="row paragraph">
            <div class="col"><span class="dropcap">D</span>i era revolusi industri 4.0 seperti saat ini, peran
                Information
                Technology (IT) dinilai sangat penting untuk memudahkan pekerjaan manusia. Misalnya untuk beberapa
                pekerjaan
                yang
                bersifat pengulangan sehingga sudah dapat digantikan oleh mesin automation. Selain itu, keberadaan IT
                juga
                mampu
                mendorong mewujudkan pertumbuhan ekonomi yang adil dan merata (inklusif) di </div>
            <div class="col">Indonesia sendiri.
                CEO Maspion Group Alim Markus mengatakan, hal inilah yang melatar belakangi Maspion Square kembali
                membuka kerja sama dengan komunitas teknologi informasi dengan menghadirkan Maspion IT. Apalagi
                pertumbuhan IT di Jawa Timur dinilai sangat tinggi
                "Pemerintah saat ini juga sangat mementingkan IT. Karena industri 4.0 harus menggunakan IT supaya
                perkembangan ekonomi </div>
            <div class="col">atau industri bisa meningkat," terangnya di sela-sela peresmian Maspion IT di Surabaya.
                Alim mengatakan, jika pertumbuhan ekonomi Indonesia tetus meningkat selama dua puluh tahun ke depan,
                maka Indonesia akan mempunyai kesempatan untuk menjadi negara ke-4 dengan ekonomi terkuat di dunia.
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Page5",
};
</script>