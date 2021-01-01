function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");
  
      var vertices = [];
  
      var cubePoints1 = [
        [0.1,  0.5,  0.05],   // A, 0
        [0.1, 0.3,  0.05],   // B, 1
        [0.9, 0.3,  0.05],   // C, 2 
        [0.9,  0.5,  0.05],   // D, 3
        [0.2,  0.6, -0.05],   // I, 4
        [0.2, 0.4, -0.05],   // L, 5
        [1, 0.4, -0.05],   // K, 6
        [1,  0.6, -0.05]    // J, 7 
        
      ];
      var cubePoints2 = [
        [0.4,  0.3,  0.05],   
        [0.4, -0.4,  0.05],   
        [0.6, -0.4,  0.05],   
        [0.6,  0.3,  0.05],   
        [0.5,  0.4, -0.05],   
        [0.5, -0.3, -0.05],   
        [0.7, -0.3, -0.05],   
        [0.7, 0.4, -0.05]    
      ];
      
        var cubePoints3 = [
          [-0.9,  0.5,  0.05],   // T
          [-0.9, 0.3,  0.05],   // S
          [-0.1, 0.3,  0.05],   // Q 
          [-0.1, 0.5,  0.05],   // R
          [-1, 0.6, -0.05],   // B1
          [-1, 0.4, -0.05],   // C1
          [-0.2, 0.4, -0.05],   // D1
          [-0.2, 0.6, -0.05]    // A1
        
        ];
  
        var cubePoints4 = [
          [-0.6,  0.3,  0.05],   // U
          [-0.6, -0.4,  0.05],   // W
          [-0.4, -0.4,  0.05],   // Z 
          [-0.4, 0.3,  0.05],   // V
          [-0.7, 0.4, -0.05],   // G1
          [-0.7, -0.3, -0.05],   // E1
          [-0.5, -0.3, -0.05],   // F1
          [-0.5, 0.4, -0.05]    // H1        
      ];
      
  
      var cubeColors = [
        [],
        [1.0, 0.0, 0.0],    // merah
        //[1.0, 0.0, 0.0],    // merah
        //[1.0, 0.0, 0.0],    // merah
        //[1.0, 0.0, 0.0],    // merah
        //[1.0, 0.0, 0.0],    // merah
        //[1.0, 0.0, 0.0],    // merah
         [0.0, 1.0, 0.0],    // hijau
         [0.0, 0.0, 1.0],    // biru
         [1.0, 1.0, 1.0],    // putih
         [1.0, 0.5, 0.0],    // oranye
         [1.0, 1.0, 0.0],    // kuning
        []
      ];
  
      var cubeWhite = [
        [-0.05,  0.05,  0.05],   // A, 0
        [-0.05, -0.05,  0.05],   // B, 1
        [ 0.05, -0.05,  0.05],   // C, 2 
        [ 0.05,  0.05,  0.05],   // D, 3
        [-0.05,  0.05, -0.05],   // E, 4
        [-0.05, -0.05, -0.05],   // F, 5
        [ 0.05, -0.05, -0.05],   // G, 6
        [ 0.05,  0.05, -0.05]    // H, 7 
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
  
      var cubeNormals = [
        [],
        [0.0, 0.0, 1.0],    // depan
        [1.0, 0.0, 0.0],    // kanan
        [0.0, 1.0, 0.0],    // atas
        [-1.0, 0.0, 0.0],   // kiri
        [0.0, 0.0, -1.0],   // belakang
        [0.0, -1.0, 0.0],   // bawah
        
        []
      ];
    
  
    function quad(a, b, c, d) {
      var indices = [a, b, c, c, d, a];
      
      for (var i=0; i<indices.length; i++) {
        var point = cubePoints1[indices[i]];  // [x, y, z]
        for (var j=0; j<point.length; j++) {
          vertices.push(point[j]);
        }
        var color = cubeColors[a]; // [r, g, b]
        for (var j=0; j<color.length; j++) {
          vertices.push(color[j]);
        }
        var normal = cubeNormals[a];
        for (var j=0; j<normal.length; j++) {
          vertices.push(normal[j]);
        }
      }
    }

    function quad2(a, b, c, d) {
      var indices = [a, b, c, c, d, a];
      for (var i=0; i<indices.length; i++) {
        var point = cubePoints2[indices[i]];  // [x, y, z]
        for (var j=0; j<point.length; j++) {
          vertices.push(point[j]);
        }
        var color = cubeColors[a]; // [r, g, b]
        for (var j=0; j<color.length; j++) {
          vertices.push(color[j]);
        }
        var normal = cubeNormals[a];
        for (var j=0; j<normal.length; j++) {
          vertices.push(normal[j]);
        }
      }
    }
    function quad3(a, b, c, d) {
      var indices = [a, b, c, c, d, a];
      for (var i=0; i<indices.length; i++) {
        var point = cubePoints3[indices[i]];  // [x, y, z]
        for (var j=0; j<point.length; j++) {
          vertices.push(point[j]);
        }
        var color = cubeColors[a]; // [r, g, b]
        for (var j=0; j<color.length; j++) {
          vertices.push(color[j]);
        }
        var normal = cubeNormals[a];
        for (var j=0; j<normal.length; j++) {
          vertices.push(normal[j]);
        }
      }
    }
    function quad4(a, b, c, d) {
      var indices = [a, b, c, c, d, a];
      for (var i=0; i<indices.length; i++) {
        var point = cubePoints4[indices[i]];  // [x, y, z]
        for (var j=0; j<point.length; j++) {
          vertices.push(point[j]);
        }
        var color = cubeColors[a]; // [r, g, b]
        for (var j=0; j<color.length; j++) {
          vertices.push(color[j]);
        }
        var normal = cubeNormals[a];
        for (var j=0; j<normal.length; j++) {
          vertices.push(normal[j]);
        }
      }
    }
    function quad5(a, b, c, d) { //abcd triangle
      var indices = [a, b, c, c, d, a];
      for (var i=0; i<indices.length; i++) {
        var point = cubeWhite[indices[i]];  // [x, y, z]
        for (var j=0; j<point.length; j++) {
          vertices.push(point[j]);
        }
        // b, 
        var color = cubeWhiteColors[a]; // [r, g, b]
        for (var j=0; j<color.length; j++) {
          vertices.push(color[j]);
        }
        var normal = cubeNormals[a];
        for (var j=0; j<normal.length; j++) {
          vertices.push(normal[j]);
        }
      }
    }

    quad(1, 2, 3, 0); // DEPAN, merah
    quad(2, 6, 7, 3); // KANAN, hijau
    quad(3, 7, 4, 0); // ATAS, biru
    quad(4, 5, 1, 0); // KIRI, putih
    quad(5, 4, 7, 6); // BELAKANG, oranye
    quad(6, 2, 1, 5); // BAWAH, kuning

    quad2(1, 2, 3, 0); // DEPAN, merah
    quad2(2, 6, 7, 3); // KANAN, hijau
    quad2(3, 7, 4, 0); // ATAS, biru
    quad2(4, 5, 1, 0); // KIRI, putih
    quad2(5, 4, 7, 6); // BELAKANG, oranye
    quad2(6, 2, 1, 5); // BAWAH, kuning

    quad3(1, 2, 3, 0); // DEPAN, merah
    quad3(2, 6, 7, 3); // KANAN, hijau
    quad3(3, 7, 4, 0); // ATAS, biru
    quad3(4, 5, 1, 0); // KIRI, putih
    quad3(5, 4, 7, 6); // BELAKANG, oranye
    quad3(6, 2, 1, 5); // BAWAH, kuning

    quad4(1, 2, 3, 0); // DEPAN, merah
    quad4(2, 6, 7, 3); // KANAN, hijau
    quad4(3, 7, 4, 0); // ATAS, biru
    quad4(4, 5, 1, 0); // KIRI, putih
    quad4(5, 4, 7, 6); // BELAKANG, oranye
    quad4(6, 2, 1, 5); // BAWAH, kuning
   // quad(12, 3, 11, 9); // L depan
   // quad(11, 9, 10, 8);
   // quad(12, 11, 13, 10);
   // quad(9, 3, 8, 7);
   // quad(12, 11, 9, 3);
   // quad(13, 10, 8, 7);

   quad5(1, 2, 3, 0); // DEPAN, merah
   quad5(2, 6, 7, 3); // KANAN, hijau
   quad5(3, 7, 4, 0); // ATAS, biru
   quad5(4, 5, 1, 0); // KIRI, putih
   quad5(5, 4, 7, 6); // BELAKANG, oranye
   quad5(6, 2, 1, 5); // BAWAH, kuning


    var vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
  
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
  
    // Ajarkan attribute a_Position di GPU
    //  tentang pengambilan data verteks dari ARRAY_BUFFER
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    var aPositionLoc = gl.getAttribLocation(shaderProgram, "a_Position");
    var aColorLoc = gl.getAttribLocation(shaderProgram, "a_Color");
    var aNormalLoc = gl.getAttribLocation(shaderProgram, "a_Normal");
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

    function resizer() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      minVal = Math.min(gl.canvas.width, gl.canvas.height);
      gl.viewport(gl.canvas.width/2 -minVal/2, gl.canvas.height/2 -minVal/2,minVal,minVal);
     // draw();
    }
  
    //gl.viewport(100, 0, canvas.height, canvas.height);
    window.addEventListener('resize', resizer);
    gl.enable(gl.DEPTH_TEST);
  
    var primitive = gl.TRIANGLES;
    var offset = 0;
    var nVertex = 180;
  
    var offset2 =+ nVertex;
    var offset3 =+ nVertex;
    var offset4 =+ nVertex;
    var offset5 =+ nVertex;

    var u_Model = gl.getUniformLocation(shaderProgram, 'u_Model');
    var u_View = gl.getUniformLocation(shaderProgram, 'u_View');
    var u_Projection = gl.getUniformLocation(shaderProgram, 'u_Projection');
    var model = glMatrix.mat4.create();
    var view = glMatrix.mat4.create();
    var projection = glMatrix.mat4.create();
    gl.uniformMatrix4fv(u_Projection, false, projection);
  
    var linearspeed = 0.01;
    var angularspeed = glMatrix.glMatrix.toRadian(1);
    function onKeyDown(event) {
      console.log(event.keyCode);
      if (event.keyCode == 65) {
        glMatrix.mat4.rotate(model, model, glMatrix.glMatrix.toRadian(1), [0, -1.0, 0.0]);
      } // A = 65
      else if (event.keyCode == 68) {
        glMatrix.mat4.rotate(model, model, glMatrix.glMatrix.toRadian(1), [0, 1.0, 0.0]);
      } // D = 68
      if (event.keyCode == 87) {
        glMatrix.mat4.translate(model, model, [0.0, linearspeed, 0.0]);
      } // W = 87
      if (event.keyCode == 83) {
        glMatrix.mat4.translate(model, model, [0.0, -linearspeed, 0.0]);
      } // S = 83
    }
    document.addEventListener('keydown', onKeyDown);
  
    var uNormalModel = gl.getUniformLocation(shaderProgram, 'u_NormalModel');
    var uAmbientColor = gl.getUniformLocation(shaderProgram, 'u_AmbientColor');
    gl.uniform3fv(uAmbientColor, [0.5, 0.5, 0.5]);
    var uLightColor = gl.getUniformLocation(shaderProgram, 'u_LightColor');
    gl.uniform3fv(uLightColor, [1, 1, 1]);
    var uLightPosition = gl.getUniformLocation(shaderProgram, 'u_LightPosition');
    gl.uniform3fv(uLightPosition, [2, -3, 3]);
  
    // glMatrix.mat4.rotate(model, model, glMatrix.glMatrix.toRadian(45), [1.0, 1.0, 1.0]);
    
    function render() {
      resizer();
      //glMatrix.mat4.rotate(model, model, angularspeed, [1.0, 1.0, 1.0]);
      gl.uniformMatrix4fv(u_Model, false, model);
      gl.uniformMatrix4fv(u_View, false, view);
      var normalModel = glMatrix.mat3.create();
      glMatrix.mat3.normalFromMat4(normalModel, model);
      gl.uniformMatrix3fv(uNormalModel, false, normalModel);
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.drawArrays(primitive, offset, nVertex);
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  }
  