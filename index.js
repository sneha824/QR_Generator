import qr from "qr-image";
import inquirer from "inquirer";
import fs from "fs";


inquirer
  .prompt([
    /* Pass your questions in here */
    {message:"Type in your URL :- ",
     name:"url"}
    //  msd is like printf and name is like scanf
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    // console.log(answers);
    const url2 = answers.url;
    // console.log(url2);


    // taken from qr-image module   note:its editted
    var qr_svg = qr.image(url2/*, { type: 'svg' }*/);
    //url2 is the url we have given n type is commented bcoz default it gives png format and we want that only!
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
    // qr_img.png is the name of the file where qr will be generator
    // end of qr-image module
 

    // to write the url in file created as (name of file) URL_file.txt
    // url2 is the data i.e. input given from user
    fs.writeFile('URL_file.txt', url2, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });