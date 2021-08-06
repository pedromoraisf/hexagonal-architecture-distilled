<h1 align="center">#0001 Create a post</h1>

<h3>CHARACTERISTIC INFORMATION</h3>

- Goal in Context: Create an post submitted by system user.

- Preconditions: Knowing the title and content of the publication:
<table>
  <tr>
    <td>title</td>
    <td>string</td>
  </tr>
  <tr>
    <td>content</td>
    <td>string</td>
  </tr>
</table>

- Success End Condition: The publication will be persisted and return an HTTP framework "Ok" data structure.

- Failed End Condition: HTTP framework "Server Error" data structure.

- Primary Actor: Blog admin.

- Trigger: External HTTP POST request.
