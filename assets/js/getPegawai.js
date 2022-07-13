$(document).ready(function () {
  $(".chosen").chosen();
  formKl();
  formDl();
  formPpu();
  formPb();
  formPp();
  formPw();
  formRk();
  formPk();
});

function formKl() {
  var base_url = "https://www.radhiansobarna.com/api/elsa/pegawai/data";
  var formInput = document.getElementById("kl");
  var formInputU = document.getElementById("klU");
  formInput.innerHTML = '<option value="">--Pilih--</option>';
  formInputU.innerHTML = '<option value="">--Pilih--</option>';
  $.ajax({
    type: "POST",
    url: base_url,
    dataType: "json",
    success: function (hasil) {
      for (var i = 0; i < hasil.length; i++) {
        var item = hasil[i];
        formInput.innerHTML += `<option value="${item.pegawai_nip}">${item.pegawai_nama}</option>`;
        formInputU.innerHTML += `<option value="${item.pegawai_nip}">${item.pegawai_nama}</option>`;
      }
    },
  });
}

function formDl() {
  var base_url = "https://www.radhiansobarna.com/api/elsa/pegawai/data";
  var formInput = document.getElementById("dl");
  var formInputU = document.getElementById("dlU");
  formInput.innerHTML = '<option value="">--Pilih--</option>';
  formInputU.innerHTML = '<option value="">--Pilih--</option>';
  $.ajax({
    type: "POST",
    url: base_url,
    dataType: "json",
    success: function (hasil) {
      for (var i = 0; i < hasil.length; i++) {
        var item = hasil[i];
        formInput.innerHTML += `<option value="${item.pegawai_nip}">${item.pegawai_nama}</option>`;
        formInputU.innerHTML += `<option value="${item.pegawai_nip}">${item.pegawai_nama}</option>`;
      }
    },
  });
}

function formPpu() {
  var base_url = "https://www.radhiansobarna.com/api/elsa/pegawai/data";
  var formInput = document.getElementById("ppu");
  var formInputU = document.getElementById("ppuU");
  formInput.innerHTML = '<option value="">--Pilih--</option>';
  formInputU.innerHTML = '<option value="">--Pilih--</option>';
  $.ajax({
    type: "POST",
    url: base_url,
    dataType: "json",
    success: function (hasil) {
      for (var i = 0; i < hasil.length; i++) {
        var item = hasil[i];
        formInput.innerHTML += `<option value="${item.pegawai_nip}">${item.pegawai_nama}</option>`;
        formInputU.innerHTML += `<option value="${item.pegawai_nip}">${item.pegawai_nama}</option>`;
      }
    },
  });
}

function formPb() {
  var base_url = "https://www.radhiansobarna.com/api/elsa/pegawai/data";
  var formInput = document.getElementById("pb");
  var formInputU = document.getElementById("pbU");
  formInput.innerHTML = '<option value="">--Pilih--</option>';
  formInputU.innerHTML = '<option value="">--Pilih--</option>';
  $.ajax({
    type: "POST",
    url: base_url,
    dataType: "json",
    success: function (hasil) {
      for (var i = 0; i < hasil.length; i++) {
        var item = hasil[i];
        formInput.innerHTML += `<option value="${item.pegawai_nip}">${item.pegawai_nama}</option>`;
        formInputU.innerHTML += `<option value="${item.pegawai_nip}">${item.pegawai_nama}</option>`;
      }
    },
  });
}

function formPp() {
  var base_url = "https://www.radhiansobarna.com/api/elsa/pegawai/data";
  var formInput = document.getElementById("pp");
  var formInputU = document.getElementById("ppU");
  formInput.innerHTML = '<option value="">--Pilih--</option>';
  formInputU.innerHTML = '<option value="">--Pilih--</option>';
  $.ajax({
    type: "POST",
    url: base_url,
    dataType: "json",
    success: function (hasil) {
      for (var i = 0; i < hasil.length; i++) {
        var item = hasil[i];
        formInput.innerHTML += `<option value="${item.pegawai_nip}">${item.pegawai_nama}</option>`;
        formInputU.innerHTML += `<option value="${item.pegawai_nip}">${item.pegawai_nama}</option>`;
      }
    },
  });
}

function formPw() {
  var base_url = "https://www.radhiansobarna.com/api/elsa/pegawai/data";
  var formInput = document.getElementById("pw");
  var formInputU = document.getElementById("pwU");
  formInput.innerHTML = '<option value="">--Pilih--</option>';
  formInputU.innerHTML = '<option value="">--Pilih--</option>';
  $.ajax({
    type: "POST",
    url: base_url,
    dataType: "json",
    success: function (hasil) {
      for (var i = 0; i < hasil.length; i++) {
        var item = hasil[i];
        formInput.innerHTML += `<option value="${item.pegawai_nip}">${item.pegawai_nama}</option>`;
        formInputU.innerHTML += `<option value="${item.pegawai_nip}">${item.pegawai_nama}</option>`;
      }
    },
  });
}

function formRk() {
  var base_url = "https://www.radhiansobarna.com/api/elsa/pegawai/data";
  var formInput = document.getElementById("rk");
  var formInputU = document.getElementById("rkU");
  formInput.innerHTML = '<option value="">--Pilih--</option>';
  formInputU.innerHTML = '<option value="">--Pilih--</option>';
  $.ajax({
    type: "POST",
    url: base_url,
    dataType: "json",
    success: function (hasil) {
      for (var i = 0; i < hasil.length; i++) {
        var item = hasil[i];
        formInput.innerHTML += `<option value="${item.pegawai_nip}">${item.pegawai_nama}</option>`;
        formInputU.innerHTML += `<option value="${item.pegawai_nip}">${item.pegawai_nama}</option>`;
      }
    },
  });
}

function formPk() {
  var base_url = "https://www.radhiansobarna.com/api/elsa/pegawai/data";
  var formInput = document.getElementById("pk");
  var formInputU = document.getElementById("pkU");
  formInput.innerHTML = '<option value="">--Pilih--</option>';
  formInputU.innerHTML = '<option value="">--Pilih--</option>';
  $.ajax({
    type: "POST",
    url: base_url,
    dataType: "json",
    success: function (hasil) {
      for (var i = 0; i < hasil.length; i++) {
        var item = hasil[i];
        formInput.innerHTML += `<option value="${item.pegawai_nip}">${item.pegawai_nama}</option>`;
        formInputU.innerHTML += `<option value="${item.pegawai_nip}">${item.pegawai_nama}</option>`;
      }
    },
  });
}
