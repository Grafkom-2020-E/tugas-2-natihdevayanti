function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    let verticeskanan = [];
    let verticeskiri = [];
    let verticesKubus = [];
    var vertices = [];

    //N KANAN

    //kanan
    var cubePoints1 = [
        [0.8, 0.5, 0.05],   // L, 0, kanan atas depan
        [0.8, -0.5, 0.05],   // K, 1, kanan bawah depan
        [0.6, -0.5, 0.05],    // J, 2, kiri bawah depan
        [0.6, 0.5, 0.05],   // I, 3, kiri atas depan
        [0.9, 0.6, -0.05],   // P, 4, kanan atas belakang
        [0.9, -0.4, -0.05],   // O, 5, kanan bawah belakang
        [0.7, -0.4, -0.05],  // N, 6, kiri bawah belakang
        [0.7, 0.6, -0.05],   // M, 7, kiri atas belakang
    ];

    //kiri
    var cubePoints2 = [
        [0.4, 0.5, 0.05], //U1, 0,kanan atas depan
        [0.4, -0.5, 0.05], //B, 2, kanan bawah depan
        [0.2, -0.5, 0.05], //T1, 3,kiri bawah depan
        [0.2, 0.5, 0.05], //V1, 1, kiri atas depan
        [0.5, 0.6, -0.05], //Q1, 4, kanan atas belakang
        [0.5, -0.4, -0.05], //F, 6, kanan bawah belakang
        [0.3, -0.4, -0.05], //S1, 7, kiri bawah belakang
        [0.3, 0.6, -0.05], //R1, 5,  kiri atas belakang
    ];

    //miring
    var cubePoints3 = [
        [0.6, 0, 0.05],   // E, 0, kanan atas depan
        [0.6, -0.5, 0.05],   // J, 2, kanan bawah depan
        [0.4, 0, 0.05],   // D, 3,kiri bawah depan
        [0.4, 0.5, 0.05],   // U1, 1, kiri atas depan
        [0.7, 0.1, -0.05],   // A, 4, kanan atas belakang
        [0.7, -0.4, -0.05],   // N,6, kanan bawah belakang
        [0.5, 0.1, -0.05],   // C, 7, kiri bawah belakang
        [0.5, 0.6, -0.05],   // Q1, 5,  kiri atas belakang
    ];

    //N KIRI
    //kanan
    var cubePoints4 = [
        [-0.2, 0.5, 0.05],   // A1, 0, kanan atas depan
        [-0.2, -0.5, 0.05],   // C1, 2, kanan bawah depan
        [-0.4, -0.5, 0.05],    // B1, 3, kiri bawah depan
        [-0.4, 0.5, 0.05],   // D1, 1, kiri atas depan
        [-0.3, 0.6, -0.05],   // H1, 4, kanan atas belakang
        [-0.3, -0.4, -0.05],   // O, 6, kanan bawah belakang
        [-0.5, -0.4, -0.05],   // F1, 7, kiri bawah belakang
        [-0.5, 0.6, -0.05]   // E1, 5, kiri atas belakang
    ];
    //kiri
    var cubePoints5 = [
        [-0.6, 0.5, 0.05],   // S, 0, kanan atas depan
        [-0.6, -0.5, 0.05],   // R, 2, kanan bawah depan
        [-0.8, -0.5, 0.05],    // Q, 3, kiri bawah depan
        [-0.8, 0.5, 0.05],   // T, 1, kiri atas depan
        [-0.7, 0.6, -0.05],   // W, 4, kanan atas belakang
        [-0.7, -0.4, -0.05],   // V, 6, kanan bawah belakang
        [-0.9, -0.4, -0.05],   // U, 7, kiri bawah belakang
        [-0.9, 0.6, -0.05]   // Z, 5, kiri atas belakang
    ];

    //miriing
    var cubePoints6 = [
        [-0.4, 0, 0.05],   // G, 0, kanan atas depan
        [-0.4, -0.5, 0.05],   // B1, 2, kanan bawah depan
        [-0.6, 0, 0.05],    // W1, 3, kiri bawah depan
        [-0.6, 0.5, 0.05],   // D, 1, kiri atas depan
        [-0.5, 0.1, -0.05],   // A2, 4, kanan atas belakang
        [-0.5, -0.4, -0.05],   // F1, 6, kanan bawah belakang
        [-0.7, 0.1, -0.05],   // Z1, 7, kiri bawah belakang
        [-0.7, 0.6, -0.05]  // W, 5, kiri atas belakang
    ];


    var cubeColors = [
        [],
        [1.0, 0.0, 0.0],    // merah
        [1.0, 0.0, 0.0],
        [1.0, 0.0, 0.0],
        [1.0, 0.0, 0.0],
        [1.0, 0.0, 0.0],
        [1.0, 0.0, 0.0],
        []
    ];

    var cubeWhite = [
        [-0.05, 0.05, 0.05],   // A, 0
        [-0.05, -0.05, 0.05],   // B, 1
        [0.05, -0.05, 0.05],   // C, 2 
        [0.05, 0.05, 0.05],   // D, 3
        [-0.05, 0.05, -0.05],   // E, 4
        [-0.05, -0.05, -0.05],   // F, 5
        [0.05, -0.05, -0.05],   // G, 6
        [0.05, 0.05, -0.05]    // H, 7 
    ];

    var cubeWhiteColors = [
        [],
        [1.0, 1.0, 1.0],    // putih
        [1.0, 1.0, 1.0],    // putih
        [1.0, 1.0, 1.0],    // putih
        [1.0, 1.0, 1.0],    // putih
        [1.0, 1.0, 1.0],    // putih
        [1.0, 1.0, 1.0],    // putih

        []
    ];

    //M kanan
    //bar kanan
    var cubeNormals = [
        [],
        [0.0, 0.0, 1.0],    // depan
        [-1.0, 0.0, 0.0],   // kiri
        [0.0, 1.0, 0.0],    // atas
        [1.0, 0.0, 0.0],    // kanan
        [0.0, 0.0, -1.0],   // belakang
        [0.0, -1.0, 0.0],   // bawah

        []
    ];

    //bar kiri
    var cubeNormals2 = [
        [],
        [0.0, 0.0, 1.0],    // depan
        [-1.0, 0.0, 0.0],   // kiri
        [0.0, 1.0, 0.0],    // atas
        [1.0, 0.0, 0.0],    // kanan
        [0.0, 0.0, -1.0],   // belakang
        [0.0, -1.0, 0.0],   // bawah
        []
    ];

    //miring kanan
    var cubeNormals3 = [
        [],
        [0.0, 0.0, 1.0],    // depan
        [-1.0, 0.0, 0.0],   // kiri
        [0.0, 1.0, 0.0],    // atas
        [1.0, 0.0, 0.0],    // kanan
        [0.0, 0.0, -1.0],   // belakang
        [0.0, -1.0, 0.0],   // bawah
        []
    ];
    //bar kanan
    var cubeNormals4 = [
        [],
        [0.0, 0.0, 1.0],    // depan
        [1.0, 0.0, 0.0],    // kanan
        [0.0, 1.0, 0.0],    // atas
        [-1.0, 0.0, 0.0],   // kiri
        [0.0, 1.0, -0.4],   // belakang
        [0.0, -1.0, 0.0],   // bawah
        []
    ];

    //bar kiri
    var cubeNormals5 = [
        [],
        [-1.0, 0.0, 1.0],    // depan
        [1.0, 0.0, 0.0],    // kanan
        [0.0, 1.0, 0.0],    // atas
        [-1.0, 0.0, 0.0],   // kiri
        [0.0, 0.0, 1.0],   // belakang
        [0.0, -1.0, 0.0],   // bawah

        []
    ];
    //miring
    var cubeNormals6 = [
        [],
        [0.0, 0.0, 1.0],    // depan
        [1.0, 0.0, 0.0],    // kanan
        [0.0, 1.0, 0.0],    // atas
        [-1.0, 0.0, 0.0],   // kiri
        [0.0, 1.0, -0.4],   // belakang
        [0.0, -1.0, 0.0],   // bawah
        []
    ];

    var cubeNormals7 = [
        [],
        [0.0, 0.0, -1.0],   // depan
        [-1.0, 0.0, 0.0],   // kanan
        [0.0, -1.0, 0.0],   // atas 
        [1.0, 0.0, 0.0],    // kiri
        [0.0, 0.0, 1.0],    // belakang
        [0.0, 1.0, 0.0],    // bawah
        []
    ];

    function quad(a, b, c, d, vertices, e) {
        var indices = [a, b, c, c, d, a];

        for (var i = 0; i < indices.length; i++) {
            var point = cubePoints1[indices[i]];  // [x, y, z]
            for (var j = 0; j < point.length; j++) {
                vertices.push(point[j]);
            }
            var color = cubeColors[a]; // [r, g, b]
            for (var j = 0; j < color.length; j++) {
                vertices.push(color[j]);
            }
            var normal = cubeNormals[e];
            for (var j = 0; j < normal.length; j++) {
                vertices.push(normal[j]);
            }
        }
    }

    function quad2(a, b, c, d, vertices, e) {
        var indices = [a, b, c, c, d, a];
        for (var i = 0; i < indices.length; i++) {
            var point = cubePoints2[indices[i]];  // [x, y, z]
            for (var j = 0; j < point.length; j++) {
                vertices.push(point[j]);
            }
            var color = cubeColors[a]; // [r, g, b]
            for (var j = 0; j < color.length; j++) {
                vertices.push(color[j]);
            }
            var normal = cubeNormals2[e];
            for (var j = 0; j < normal.length; j++) {
                vertices.push(normal[j]);
            }
        }
    }
    function quad3(a, b, c, d, vertices, e) {
        var indices = [a, b, c, c, d, a];
        for (var i = 0; i < indices.length; i++) {
            var point = cubePoints3[indices[i]];  // [x, y, z]
            for (var j = 0; j < point.length; j++) {
                vertices.push(point[j]);
            }
            var color = cubeColors[a]; // [r, g, b]
            for (var j = 0; j < color.length; j++) {
                vertices.push(color[j]);
            }
            var normal = cubeNormals3[e];
            for (var j = 0; j < normal.length; j++) {
                vertices.push(normal[j]);
            }
        }
    }

    function quad4(a, b, c, d, vertices, e) {
        var indices = [a, b, c, c, d, a];
        for (var i = 0; i < indices.length; i++) {
            var point = cubePoints4[indices[i]];  // [x, y, z]
            for (var j = 0; j < point.length; j++) {
                vertices.push(point[j]);
            }
            var color = cubeColors[a]; // [r, g, b]
            for (var j = 0; j < color.length; j++) {
                vertices.push(color[j]);
            }
            var normal = cubeNormals4[e];
            for (var j = 0; j < normal.length; j++) {
                vertices.push(normal[j]);
            }
        }
    }

    function quad5(a, b, c, d, vertices, e) {
        var indices = [a, b, c, c, d, a];
        for (var i = 0; i < indices.length; i++) {
            var point = cubePoints5[indices[i]];  // [x, y, z]
            for (var j = 0; j < point.length; j++) {
                vertices.push(point[j]);
            }
            var color = cubeColors[a]; // [r, g, b]
            for (var j = 0; j < color.length; j++) {
                vertices.push(color[j]);
            }
            var normal = cubeNormals5[e];
            for (var j = 0; j < normal.length; j++) {
                vertices.push(normal[j]);
            }
        }
    }


    function quad6(a, b, c, d, vertices, e) {
        var indices = [a, b, c, c, d, a];
        for (var i = 0; i < indices.length; i++) {
            var point = cubePoints6[indices[i]];  // [x, y, z]
            for (var j = 0; j < point.length; j++) {
                vertices.push(point[j]);
            }
            var color = cubeColors[a]; // [r, g, b]
            for (var j = 0; j < color.length; j++) {
                vertices.push(color[j]);
            }
            var normal = cubeNormals6[e];
            for (var j = 0; j < normal.length; j++) {
                vertices.push(normal[j]);
            }
        }
    }

    function quad7(a, b, c, d, vertices) { //abcd triangle
        var indices = [a, b, c, c, d, a];
        for (var i = 0; i < indices.length; i++) {
            var point = cubeWhite[indices[i]];  // [x, y, z]
            for (var j = 0; j < point.length; j++) {
                vertices.push(point[j]);
            }
            // b, 
            var color = cubeWhiteColors[a]; // [r, g, b]
            for (var j = 0; j < color.length; j++) {
                vertices.push(color[j]);
            }
            var normal = cubeNormals7[a];
            for (var j = 0; j < normal.length; j++) {
                vertices.push(normal[j]);
            }
        }
    }

    // disesuaikan dengan tampilan asli
    quad(4, 5, 6, 7, verticeskanan, 5); // BELAKANG, oranye
    quad(3, 7, 6, 2, verticeskanan, 2); // KIRI, putih
    quad(1, 2, 6, 5, verticeskanan, 6); // BAWAH, kuning
    quad(5, 1, 0, 4, verticeskanan, 4); // KANAN, hijau
    quad(1, 2, 3, 0, verticeskanan, 1); // DEPAN, merah
    quad(4, 0, 3, 7, verticeskanan, 3); // ATAS, biru

    quad2(4, 5, 6, 7, verticeskanan, 5); // BELAKANG, oranye
    quad2(3, 7, 6, 2, verticeskanan, 2); // KIRI, putih
    quad2(1, 2, 6, 5, verticeskanan, 6); // BAWAH, kuning
    quad2(5, 1, 0, 4, verticeskanan, 4); // KANAN, hijau
    quad2(1, 2, 3, 0, verticeskanan, 1); // DEPAN, merah
    quad2(4, 0, 3, 7, verticeskanan, 3); // ATAS, biru

    quad3(4, 5, 6, 7, verticeskanan, 5); // BELAKANG, oranye
    quad3(3, 7, 6, 2, verticeskanan, 2); // KIRI, putih
    quad3(1, 2, 6, 5, verticeskanan, 6); // BAWAH, kuning
    quad3(5, 1, 0, 4, verticeskanan, 4); // KANAN, hijau
    quad3(1, 2, 3, 0, verticeskanan, 1); // DEPAN, merah
    quad3(4, 0, 3, 7, verticeskanan, 3); // ATAS, biru

    quad4(4, 5, 6, 7, verticeskiri, 5); // BELAKANG, oranye
    quad4(3, 7, 6, 2, verticeskiri, 4); // KIRI, putih
    quad4(1, 2, 6, 5, verticeskiri, 6); // BAWAH, kuning
    quad4(5, 1, 0, 4, verticeskiri, 2); // KANAN, hijau
    quad4(1, 2, 3, 0, verticeskiri, 1); // DEPAN, merah
    quad4(4, 0, 3, 7, verticeskiri, 3); // ATAS, biru

    quad5(4, 5, 6, 7, verticeskiri, 1); // BELAKANG, oranye
    quad5(3, 7, 6, 2, verticeskiri, 4); // KIRI, putih
    quad5(1, 2, 6, 5, verticeskiri, 6); // BAWAH, kuning
    quad5(5, 1, 0, 4, verticeskiri, 2); // KANAN, hijau
    quad5(1, 2, 3, 0, verticeskiri, 5); // DEPAN, merah
    quad5(4, 0, 3, 7, verticeskiri, 3); // ATAS, biru

    quad6(4, 5, 6, 7, verticeskiri, 5); // BELAKANG, oranye
    quad6(3, 7, 6, 2, verticeskiri, 4); // KIRI, putih
    quad6(1, 2, 6, 5, verticeskiri, 6); // BAWAH, kuning
    quad6(5, 1, 0, 4, verticeskiri, 2); // KANAN, hijau
    quad6(1, 2, 3, 0, verticeskiri, 1); // DEPAN, merah
    quad6(4, 0, 3, 7, verticeskiri, 3); // ATAS, biru

    console.log("vertices length : " + vertices.length);

    quad7(1, 2, 3, 0, verticesKubus); // DEPAN, merah
    quad7(2, 6, 7, 3, verticesKubus); // KANAN, hijau
    quad7(3, 7, 4, 0, verticesKubus); // ATAS, biru
    quad7(4, 5, 1, 0, verticesKubus); // KIRI, putih
    quad7(5, 4, 7, 6, verticesKubus); // BELAKANG, oranye
    quad7(6, 2, 1, 5, verticesKubus); // BAWAH, kuning

    var vertexShaderSource = document.getElementById("vertexShaderSource").text;
    var fragmentShaderSource = document.getElementById("fragmentShaderSource").text;

    // Buat .c di GPU
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);

    // Kompilasi .c agar menjadi .o
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);

    // Siapkan wadah untuk .exe (shader program)
    var shaderProgram = gl.createProgram();

    // Masukkan .o ke dalam wadah .exe
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);

    // Sambungkan antar .o agar bisa menjadi
    //    runnable context di dalam wadah .exe tadi
    gl.linkProgram(shaderProgram);

    // Mulai menggunakan konteks (cat)
    gl.useProgram(shaderProgram);

    gl.viewport(100, 0, canvas.height, canvas.height);
    gl.enable(gl.DEPTH_TEST);

    var aPositionLoc = gl.getAttribLocation(shaderProgram, "a_Position");
    var aColorLoc = gl.getAttribLocation(shaderProgram, "a_Color");
    var aNormalLoc = gl.getAttribLocation(shaderProgram, "a_Normal");

    var primitive = gl.TRIANGLES;

    var u_Model = gl.getUniformLocation(shaderProgram, 'u_Model');
    var u_View = gl.getUniformLocation(shaderProgram, 'u_View');
    var u_Projection = gl.getUniformLocation(shaderProgram, 'u_Projection');
    var model = glMatrix.mat4.create();
    var view = glMatrix.mat4.create();
    var projection = glMatrix.mat4.create();
    gl.uniformMatrix4fv(u_Projection, false, projection);

    var uNormalModel = gl.getUniformLocation(shaderProgram, 'u_NormalModel');
    var uAmbientColor = gl.getUniformLocation(shaderProgram, 'u_AmbientColor');
    gl.uniform3fv(uAmbientColor, [0.3, 0.3, 0.3]);
    var uLightColor = gl.getUniformLocation(shaderProgram, 'u_LightColor');
    gl.uniform3fv(uLightColor, [1, 1, 1]);
    var uLightPosition = gl.getUniformLocation(shaderProgram, 'u_LightPosition');
    var uSpecularColor = gl.getUniformLocation(shaderProgram, 'u_Specularcolor');
    var specularPower = gl.getUniformLocation(shaderProgram, 'specularPower');

    let lightPositionY = 0;

    var offset = 0;
    var nVertex = 252;
    var offset2 = + nVertex;
    var offset3 = + nVertex;
    var offset4 = + nVertex;
    var offset5 = + nVertex;
    var offset6 = + nVertex;
    var offset7 = + nVertex;

    const drawVertices = (vertices, shininess, clear) => {
        var vertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        // Ajarkan attribute a_Position di GPU
        //  tentang pengambilan data verteks dari ARRAY_BUFFER
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

        gl.vertexAttribPointer(
            aPositionLoc,
            3,
            gl.FLOAT,
            false,
            9 * Float32Array.BYTES_PER_ELEMENT,
            0);
        gl.vertexAttribPointer(
            aColorLoc,
            3,
            gl.FLOAT,
            false,
            9 * Float32Array.BYTES_PER_ELEMENT,
            3 * Float32Array.BYTES_PER_ELEMENT);
        gl.vertexAttribPointer(
            aNormalLoc,
            3,
            gl.FLOAT,
            false,
            9 * Float32Array.BYTES_PER_ELEMENT,
            6 * Float32Array.BYTES_PER_ELEMENT);

        gl.enableVertexAttribArray(aPositionLoc);
        gl.enableVertexAttribArray(aColorLoc);
        gl.enableVertexAttribArray(aNormalLoc);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        gl.uniformMatrix4fv(u_Model, false, model);
        gl.uniformMatrix4fv(u_View, false, view);
        gl.uniform3fv(uLightPosition, [0, lightPositionY, 0]);
        gl.uniform3fv(uSpecularColor, [1.0, 1.0, 1.0]);
        var normalModel = glMatrix.mat3.create();
        gl.uniform1f(specularPower, shininess);
        glMatrix.mat3.normalFromMat4(normalModel, model);
        gl.uniformMatrix3fv(uNormalModel, false, normalModel);

        if (clear) {
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        }

        gl.drawArrays(primitive, offset, vertices.length / 9);
    }
    // glMatrix.mat4.rotate(model, model, glMatrix.glMatrix.toRadian(-45), [0, -0.1, 0.0]);
    //glMatrix.mat4.rotate(view, view, angularspeed, [1, 1, 1]);
    function render() {
        resizer();
        gl.clearColor(0.0, 0.0, 0.0, 0.0);
        drawVertices(verticesKubus, 10, true);
        drawVertices(verticeskiri, 1, false);
        drawVertices(verticeskanan, 300, false);
        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
    function resizer() {
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        var minimumSize = Math.min(gl.canvas.height, gl.canvas.width);
        gl.viewport(canvas.width / 2 - minimumSize / 2, canvas.height / 2 - minimumSize / 2, minimumSize, minimumSize);
        //draw();
    }
    window.addEventListener('resize', resizer);


}
