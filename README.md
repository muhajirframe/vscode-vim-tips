# vscode-vim-tips

### Deleting a function
  Press `daI`
  ![delete-a-function](gifs/delete-function.gif)

  It's based on `vim-indent-object`

| Command        | Description                                                                                          |
| -------------- | ---------------------------------------------------------------------------------------------------- |
| `<operator>ii` | This indentation level                                                                               |
| `<operator>ai` | This indentation level and the line above (think `if` statements in Python)                          |
| `<operator>aI` | This indentation level, the line above, and the line after (think `if` statements in C/C++/Java/etc) |

###  Delete everything inside curly bracket `{..}`
  press `di{`
  ![Delete everything inside curly bracket](gifs/delete-inside-curly-bracket.gif)

### Delete everything inside parentheses
  ![Delete everything inside parentheses](gifs/delete-everything-inside-parentheses.gif)
