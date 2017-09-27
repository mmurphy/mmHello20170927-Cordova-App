document.getElementById('say_hello').onclick = function () {
  document.getElementById('cloudResponse').innerHTML = "<p>Calling Cloud.....</p>";
  var start = Date.now();
  $fh.cloud(
      {
        path: 'hello',
        timeout: 0,
        data: {
          hello: document.getElementById('hello_to').value
        }
      },
      function (res) {
          var duration = Date.now() - start;
        document.getElementById('cloudResponse').innerHTML = "<p>" + res.msg + ', after ' + duration + ' milliseconds' + "</p>";
      },
      function (msg, err) {
          var duration = Date.now() - start;
        document.getElementById('cloudResponse').innerHTML = "<p>" + 'Cloud call failed with error message: ' + msg + '. Error properties: ' + JSON.stringify(err) + ', after ' + duration + ' milliseconds' + "</p>";
      }
  );
};
