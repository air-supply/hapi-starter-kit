<todoList>
  <div each={itemStore}>
    {title}
    {description}
  </div>
  <script>
  this.itemStore = opts.itemStore

  </script>
</todoList>
