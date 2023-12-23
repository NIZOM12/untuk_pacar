function tampilkanPesan() {
    var namaPacar = document.getElementById("namaPacar").value;
    var pesanContainer = document.getElementById("pesanContainer");

    if (namaPacar !== "") {
        var pesan = `
            <p>Hai ${namaPacar},</p>
            <p>Aku ingin memberitahumu betapa spesialnya kamu bagiku.</p>
            <p>Kamu membuat hari-haraku lebih cerah dan berarti.</p>
            <p>Aku bersyukur memiliki kamu di hidupku.</p>
            <p>Boleh tidak aku melihat nenen mu saat vc.</p>
            <p>Dengan cinta,<br>[Nizom Gnateng]</p>
        `;

        pesanContainer.innerHTML = pesan;
    } else {
        alert("Silakan masukkan nama pacar Anda.");
    }
}
