# ds-react-component-template
Basic NPM template for React component. The package is prepared to be used as boilerplate for any React components created for DataSpark which can be published as NPM project.

# Project Setup
Transpiler:
- Babel6
- Preset Stage-2

Linting:
- ESLint

Tests:
- Mocha
- Enzyme
- Sinon
- JSDOM


# Basic Usage
```bash
# install dependencies
npm install

# run watcher to monitor file changes and execute test cases automatically.
npm run test

# run test once and produce coverage output
npm run coverage

# run webpack-dev-server for development.
npm run dev

# compile source code in ./src to ./dist for production-ready version.
npm run build
```

# Cloning Template to A New Component Project
1. In your local machine, clone <code>ds-react-component-template</code> from GitHub as a new project, for example: <code>my-new-repo</code>
   ```bash
   git clone https://github.com/DataSpark-UI/ds-react-component-template.git my-new-repo
   ```

2. Rename current remote <code>origin</code> to <code>template</code>
   ```bash
   git remote rename origin template
   ```

3. Go to GitHub webpage and create a new empty repo, following <code>my-new-repo</code> name

4. Copy <code>clone url</code> from the new repo, for example: https://github.com/DataSpark-UI/my-new-repo.git

5. Insert the new repo url as the new <code>origin</code>
   ```bash
   git remote add origin https://github.com/DataSpark-UI/my-new-repo.git
   ```

6. Finally, push the <code>master</code> to new repo and set the upstream reference pointing to the new <code>origin</code>.
   ```bash
   git push -u origin master
   ```

7. Do normal git commands, like push & pull as usual.

# License
This software and any related documentation contain confidential and proprietary information of DataSpark and its licensors (if any).
Use of this software and any related documentation is governed by the terms of your written agreement with DataSpark.
You may not use, download or install this software or any related documentation without obtaining an appropriate licence agreement from DataSpark.

Copyright © DataSpark Pte Ltd 2016.

All rights reserved.
