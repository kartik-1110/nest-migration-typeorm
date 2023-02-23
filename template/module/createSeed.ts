// // eslint-disable-next-line @typescript-eslint/no-var-requires
const fsModule = require('fs');

// /* check if the .env file is already there, if not then create a new one */
// if (!fsModule.existsSync('.env')) {
//   fsModule.open('.env', 'w', (err) => {
//     if (err) throw err;
//   });
//   /* copy the file content from envFile.txt template to newly created .env.development */
  fsModule.copyFileSync('template/snippet/seed.txt', 'db/seeds/demo1-seed.ts');
  console.log("template file")
// }


// const inquirer = require('inquirer')
// const fsModule = require('fs');
// const inquirerQuestion = require('inquirer');

// const filename = ''
// inquirerQuestion
//     .prompt([
//       /* Pass your questions in here */
//       {
//         type: 'input',
//         name: 'path',
//         message: 'Enter path for component',
//         default: `db/seeds/${filename}.seed.ts`,
//       }])
//     .then((answers) => {
//       /* if the path where we want to create does not exist,
//          then create a new folder or path accordingly */
//       if (!fsModule.existsSync(answers.path)) {
//         fsModule.mkdirSync(answers.path, {
//           recursive: true,
//         });
      
//       } else if (fsModule.existsSync(`${answers.path}/${filename}.seed.ts`)) {
//         /* if the typed component's name file already exits, msg will be displayed */
//         process.stdout.write(`${filename}.seed.ts already exists\n`);
//       } else {
//         console.log("else");
        
//       }
//     });