$(document).ready(function () {
  var table;
  getData();

  $(".datepicker").datepicker({
    autoclose: true,
    format: "yyyy-mm-dd",
  });
});

$("#month").on("change", function () {
  table.ajax.reload();
});

function getData() {
  table = $("#table_1").DataTable({
    processing: true,
    serverSide: true,
    info: true,
    order: [],
    pageLength: 10,

    lengthChange: true,

    scrollX: true,

    ajax: {
      url: "https://www.radhiansobarna.com/api/elsa/getdata2",
      // url: "https://www.localhost/api/elsa/getdata2",
      type: "POST",
      data: function (data) {
        data.filterDate = $("#month").val();
      },
    },

    columnDefs: [
      {
        targets: [6],
        orderable: false,
      },
    ],
  });
}

function detailData(id) {
  var base_url = "https://www.radhiansobarna.com/api/elsa/tugaspelayanan2/getData";
  // var base_url = "https://www.localhost/api/elsa/tugaspelayanan2/getData";
  disable();
  $.ajax({
    type: "POST",
    data: "id=" + id,
    url: base_url,
    dataType: "json",
    success: function (hasil) {
      $("#idplk").val(hasil[0].plk_id);
      $("#tglU").val(hasil[0].plk_tgl);
      $("#klU").val(hasil[0].plk_kl);
      $("#dlU").val(hasil[0].plk_dl);
      $("#ppuU").val(hasil[0].plk_ppu);
      $("#pbU").val(hasil[0].plk_pb);
      $("#ppU").val(hasil[0].plk_pp);
      $("#pwU").val(hasil[0].plk_pw);
      $("#rkU").val(hasil[0].plk_rk);
      enable();
      document.body.style.paddingRight = "0px";
    },
  });
}

function petugas1(data) {
  var explode = data.split(",");
  return explode[0];
}

function petugas2(data) {
  var explode = data.split(",");
  return explode[1];
}

function proses_tambah() {
  let tgl = $("#tgl").val();
  let kl = $("#kl").val();
  let dl = $("#dl").val();
  let ppu = $("#ppu").val();
  let pb = $("#pb").val();
  let pp = $("#pp").val();
  let pw = $("#pw").val();
  let rk = $("#rk").val();

  loadingklik();
  disable();
  if (tgl == "") {
    pesan("Oops..", "Tanggal harus di isi!", "warning");
  } else {
    var postForm = {
      tgl: tgl,
      kl: kl,
      dl: dl,
      ppu: ppu,
      pb: pb,
      pp: pp,
      pw: pw,
      rk: rk
    };
    $.ajax({
      url: "https://www.radhiansobarna.com/api/elsa/tugaspelayanan2/proses_tambah",
      // url: "https://www.localhost/api/elsa/tugaspelayanan2/proses_tambah",
      type: "POST",
      data: postForm,
      dataType: "json",
      success: function (hasil) {
        console.log(hasil.pesan);
        if (hasil.pesan == "success") {
          pesan("Berhasil..", "Data berhasil ditambah.", "success");
          hapusForm();
          document.body.style.paddingRight = "0px";
          $("#exampleModal").modal("toggle");
          table.ajax.reload();
          enable();
        } else {
          pesan("Oops..", "Data gagal ditambah.", "warning");
          enable();
          document.body.style.paddingRight = "0px";
        }
      },
    });
  }
}

function proses_ubah() {
  let idplk = $("#idplk").val();
  let tgl = $("#tglU").val();
  let kl = $("#klU").val();
  let dl = $("#dlU").val();
  let ppu = $("#ppuU").val();
  let pb = $("#pbU").val();
  let pp = $("#ppU").val();
  let pw = $("#pwU").val();
  let rk = $("#rkU").val();
  loadingklik();
  disable();
  if (tgl == "") {
    pesan("Oops..", "Tanggal harus di isi!", "warning");
  } else {
    var postForm = {
      idplk: idplk,
      tgl: tgl,
      kl: kl,
      dl: dl,
      ppu: ppu,
      pb: pb,
      pp: pp,
      pw: pw,
      rk: rk
    };
    $.ajax({
      url: "https://www.radhiansobarna.com/api/elsa/tugaspelayanan2/proses_ubah",
      // url: "https://www.localhost/api/elsa/tugaspelayanan2/proses_ubah",
      type: "POST",
      data: postForm,
      dataType: "json",
      success: function (hasil) {
        console.log(hasil.pesan);
        if (hasil.pesan == "success") {
          pesan("Berhasil..", "Data berhasil diubah.", "success");
          hapusForm();
          enable();
          document.body.style.paddingRight = "0px";
          $("#exampleModalU").modal("toggle");
          table.ajax.reload();
        } else {
          pesan("Oops..", "Data gagal diubah.", "warning");
          enable();
          document.body.style.paddingRight = "0px";
        }
      },
    });
  }
}

function proses_hapus(id) {
  var postForm = {
    id: id,
  };
  $.ajax({
    url: "https://www.radhiansobarna.com/api/elsa/tugaspelayanan2/proses_hapus",
    // url: "https://www.localhost/api/elsa/tugaspelayanan2/proses_hapus",
    type: "POST",
    data: postForm,
    dataType: "json",
    success: function (hasil) {
      console.log(hasil.pesan);
      if (hasil.pesan == "success") {
        pesan("Berhasil..", "Data berhasil dihapus.", "success");
        table.ajax.reload();
        document.body.style.paddingRight = "0px";
      } else {
        pesan("Oops..", "Data gagal dihapus.", "warning");
        document.body.style.paddingRight = "0px";
      }
    },
  });
}

function hapusData(id) {
  swal
    .fire({
      title: "Hapus Data ini?",
      icon: "warning",
      closeOnClickOutside: false,
      showCancelButton: true,
      confirmButtonText: "Iya",
      confirmButtonColor: "#198754",
      cancelButtonText: "Batal",
      cancelButtonColor: "#d33",
    })
    .then((result) => {
      if (result.value) {
        loadingklik();
        proses_hapus(id);
      }
    });
}

function pesan(judulpesan, pesan, icon) {
  swal.fire({
    title: judulpesan,
    text: pesan,
    icon: icon,
    confirmButtonColor: "#198754",
  });
}

function hapusForm() {
  // input
  let tgl = $("#tgl");
  let kl = $("#kl");
  let dl = $("#dl");
  let ppu = $("#ppu");
  let pb = $("#pb");
  let pp = $("#pp");
  let pw = $("#pw");
  let rk = $("#rk");
  // update
  let idplk = $("#idplk");
  let klU = $("#klU");
  let dlU = $("#dlU");
  let ppuU = $("#ppuU");
  let pbU = $("#pbU");
  let ppU = $("#ppU");
  let pwU = $("#pwU");
  let rkU = $("#rkU");

  tgl.val("");
  idplk.val("");

  kl.val("");
  dl.val("");
  ppu.val("");
  pb.val("");
  pp.val("");
  pw.val("");
  rk.val("");

  klU.val("");
  dlU.val("");
  ppuU.val("");
  pbU.val("");
  ppU.val("");
  pwU.val("");
  rkU.val("");
}

function loadingklik() {
  Swal.fire({
    title: "Memuat...",
    onBeforeOpen: () => {
      Swal.showLoading();
    },
    showCloseButton: false,
    showCancelButton: false,
    showConfirmButton: false,
    focusConfirm: false,
  });
}

function disable() {
  $("#bSubmit").hide();
  $("#bSubmitDisable").show();
}

function enable() {
  $("#bSubmit").show();
  $("#bSubmitDisable").hide();
}
