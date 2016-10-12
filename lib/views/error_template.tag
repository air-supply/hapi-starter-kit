<fileNotFound>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
  </head>
  <div class={"error_" + opts.statusCode + " container"}>
    <h1 class='error_title'>{opts.errorTitle}</h1>
    <div class="error_message">{opts.errorMessage}</div>
    <h1 class="status_code">{opts.statusCode}</h1>
  </div>
  <style>
    .container {
      color: blue;
      height: 1000px;
      width: 100%;
    }
    .error_400 {
      background-color: #e67e22;
    }
    .error_500 {
      background-color: #e74c3c;
    }
  </style>
</fileNotFound>
