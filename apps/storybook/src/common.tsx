export const thead = (
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
      <th>Required</th>
    </tr>
  </thead>
)

export const property = (
  <tr key="property">
    <td><code>property</code></td>
    <td>
      The path to where the value for this node is stored in the data
      object. Uses dot notation for referencing a property of an object, letting you set values
      in nested objects.
    </td>
    <td>Yes</td>
  </tr>
)

export const show = (
  <tr key="show">
    <td><code>show</code></td>
    <td>
      Logical expression deciding whether or not to show the node. Expressed
      using the <a href="/?selectedKind=DSL&selectedStory=Intro">DSL</a>.
    </td>
    <td></td>
  </tr>
)

export const hide = (
  <tr key="hide">
    <td><code>hide</code></td>
    <td>
      Logical expression deciding whether or not to hide the node. Expressed
      using the <a href="/?selectedKind=DSL&selectedStory=Intro">DSL</a>.
    </td>
    <td></td>
  </tr>
);

export const heading = (
  <tr key="heading">
    <td><code>heading</code></td>
    <td>The label for this node.</td>
    <td>Yes</td>
  </tr>
)

export const optional = (
  <tr key="optional">
    <td><code>optional</code></td>
    <td>Mark input as optional. By default all fields are required.</td>
    <td></td>
  </tr>
)

export const autocoomplete = (
  <tr key="autocomplete">
    <td><code>autocomplete</code></td>
    <td>The autocomplete content attribute can be used to hint to the browser how to, or whether to, help the user fill forms in. For example prefilling the user's name, address or phone numbers based on earlier input. This is an accessibility requirement if there are relevant codes available. See UUtilsynet for <a href="https://www.uutilsynet.no/veiledning/135-identifiser-formal-med-inndata/1238">documentation on available codes</a>. This field is optional.</td>
    <td></td>
  </tr>
)

export const inputProperties = [
  property,
  heading,
];

export const optionalInputProperties = [
  <tr key="validator">
    <td><code>validator</code></td>
    <td>
      An array of objects containing two properties: <code>test</code>; a logical
      expression that must evaluate to a true in order for the field to be available. If the
      test evaluates to a falsy value, the field will still show, but it will be disabled and a
      message will explain what prerequisites has not been met. The message is defined with the
      <code>error</code> property in the validator object.
    </td>
    <td></td>
  </tr>,
  optional,
  show,
  hide
];
