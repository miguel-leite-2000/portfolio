export const ReactDragDropUploadREADME = `
# React Drag Drop Upload

React Drag Drop Upload is a lightweight library for uploading files and images with drag and drop, styled with Tailwind CSS and supporting customization.

# Installation

npm:

\`\`\`bash
npm install react-drag-drop-upload
\`\`\`

yarn:

\`\`\`bash
yarn add react-drag-drop-upload
\`\`\`

## Example

\`\`\`tsx
import { useState } from "react";
import { ReactDragDropUpload } from "react-drag-drop-upload";

function App() {
  const [fileOrFilesData, setFileOrFilesData] = useState(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (data: any) => {
    setFileOrFilesData(data);
    console.log("handleChange", fileOrFilesData);
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <ReactDragDropUpload
        handleChange={handleChange}
        className="border-zinc-700"
        types={["JPG", "PNG"]}
        multiple={false}
        variant="small"
      />
    </div>
  );
}

export default App;
\`\`\`

# Features

- Drag and drop file upload
- Customizable components
- Supports Tailwind CSS for styling
- Error handling for file type and size

# API

### ReactDragDropUpload Component

A component for drag and drop file upload with customizable options.

#### Props

...

### ChildrenUploaderProps Interface

...

#### Usage

...

### UploadWrapper Component

...

#### Props

...

#### Usage

...

### DescriptionWrapper Component

...

#### Props

...

#### Usage

...

### Description Component

...

#### Props

...

#### Usage

...

### DrawTypes Component

...

#### Props

...

#### Usage

...

## License

This library is licensed under the [MIT](https://choosealicense.com/licenses/mit/) license. See the LICENSE file for details.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests on GitHub.
`;
