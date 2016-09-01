export default {
  additionalProperties: false,
  definitions: {
    actionItemDisabled: {
      description: 'Tells if action bar button or link is disabled or ties it to selection',
      oneOf: [
        {
          type: 'boolean',
          default: false,
        }, {
          type: 'object',
          additionalProperties: false,
          description: 'Shortcut to enable and disable button or link as selection changes',
          properties: {
            minSelected: {type: 'number'},
            maxSelected: {type: 'number'}
          }
        }
      ]
    },
    actionItem: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          description: 'Given to action handler to identify button or link'
        },
        text: {
          type: 'string',
          description: 'The text displayed on button or link'
        },
        size: {
          type: 'string',
          description: 'Size of button or link',
          enum: ['small', 'medium', 'large'],
          default: 'small'
        },
        priority: {
          type: 'string',
          description: 'Priority of button or link',
          enum: ['primary', 'secondary', 'tertiary'],
          default: 'primary'
        },
        disabled: {
          '$ref': '#/definitions/actionItemDisabled'
        }
      }
    }
  },
  type: 'object',
  description: 'Object browser configuration schema',
  properties: {
    bunsenModel: {
      type: 'object',
      description: 'Bunsen model for list items'
    },
    bunsenView: {
      ref: 'https://github.com/ciena-blueplanet/bunsen-core/blob/master/src/validator/view-schemas/v2.js',
      description: 'Bunsen view for list items'
    },
    expandable: {
      type: 'boolean',
      default: false,
      description: 'Is list expandable?'
    },
    isExpanded: {
      type: 'boolean',
      default: false,
      description: 'Is list currently expanded'
    },
    rowHeight: {
      type: 'number',
      description: 'Row height given to frost-list. Default is frost-list default.'
    },
    expandedRowHeight: {
      type: 'number',
      description: 'Row height given to frost-list when expanded. Default is the normal rowHeight.'
    },
    pageSize: {
      type: 'number',
      default: 20,
      description: 'Number of items fetched at a time'
    },
    initialPages: {
      type: 'number',
      default: 3,
      description: 'Number of pages to load initially'
    },
    maxPages: {
      type: 'number',
      default: 3,
      description: 'Number of pages to retain and keep updated. Set to 0 to to keep everything.'
    },
    filterBunsenModel: {
      type: 'object',
      description: 'Bunsen model for filter'
    },
    filterBunsenView: {
      ref: 'https://github.com/ciena-blueplanet/bunsen-core/blob/master/src/validator/view-schemas/v2.js',
      description: 'Bunsen view for filter'
    },
    sorting: {
      type: 'array',
      description: 'Available sort methods',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          name: {
            type: 'string',
            description: 'Used both for display and configuration'
          },
          defaultDescending: {
            type: 'boolean',
            description: 'When selected the sort polarity will be changed to ascending or descending. Omit for normal behavior where ascending or descending state is retained.',
          }
        },
        required: ['name']
      }
    },
    currentSort: {
      type: 'array',
      description: 'Current sorting methods',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          name: {
            type: 'string',
            description: 'Must match one of the names in the sorting list'
          },
          descending: {
            type: 'boolean',
            default: true
          }
        },
        required: ['name']
      }
    },
    selectionType: {
      type: 'string',
      description: 'Controls what type of selection is available',
      enum: ['single', 'multi', 'none'],
      default: 'multi'
    },
    selectedItems: {
      type: 'array',
      description: 'List of currently selected items',
      items: {
        description: 'Type should match the item id. Probably string.'
      }
    },
    actionBarButtons: {
      type: 'array',
      description: 'Buttons in the action bar',
      items: {
        '$ref': '#/definitions/actionItem'
      }
    },
    actionBarLinks: {
      type: 'array',
      description: 'Links in the action bar',
      items: {
        '$ref': '#/definitions/actionItem'
      }
    },
    infoBar: {
      type: 'object',
      description: 'Info bar configuration',
      properties: {
        icon: {
          type: 'object',
          description: 'Info bar icon',
          properties: {
            name: {'string'},
            pack: {'string'}
          },
          required: ['name']
        },
        title: {
          type: 'string',
        },
        summary: {
          type: 'string'
        },
        actionItems: {
          type: 'array',
          description: 'Buttons on the info bar. Typically a create button.',
          items: {
            '$ref': '#/definitions/actionItem'
          }
        }
      }
    }
  },
  required: [
    'bunsenModel'
  ]
}
