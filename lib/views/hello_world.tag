<hello-world>
  <script>
    socket (e) {
      e.preventDefault()
      console.log('testing');
    }
  </script>
  <h1>HELLO YOU BEAUTIFUL WORLD</h1>
  <form method="POST" url="/">
    <input type="input" placeholder="Title" name="title" />
    <input type="input" placeholder="Description" name="description" />
    <input type="submit" value="Submit" onsubmit={socket} />
  </form>
</hello-world>
