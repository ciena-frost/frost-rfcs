```hbs
{{frost-object-browser
  items=<sorted-filtered-selected-expanded-items>
  header=(component ‘frost-info-bar’
    icon=(hash
      name=‘foo’
      pack=‘foo’
    )
    title=‘foo’
    description=‘foo’ or (component ‘foo’ …
    scope=(component ‘foo’ ...
    buttons=(array
      (hash
        icon=(hash
          name=‘foo’
          pack=‘foo’
        )
        label=‘foo’
        onClick=(action ‘foo’ …
      )
    )
  )
  facets=(component ‘frost-bunsen-form’ / ‘frost-bunsen-facets’ …
    bunsenModel=…
  )
  content=(component ‘frost-list’ 
    item=(component ‘user-list-item’
      onCollapse=(action ‘foo’)
      onExpand=(action ‘foo’)
      onSelect=(action ‘foo’)
    )
    expansion=(component ‘frost-list-expansion’
      onCollapseAll=(action ‘foo’)
      onExpandAll=(action ‘foo’)
    )
    sorting=(component ‘frost-sort’
      …
    )
  )
  buttons=(array
    (hash
      label=‘foo’
      priority=‘foo'
      onClick=(action ‘foo’ …
    )
  )
  links=(array
    (hash
      label=‘foo’
      priority=‘foo'
      route=‘foo'
    )
  )
}}
```    