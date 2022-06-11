function generateCard (employeeArr) {
let cardArr = [];
for(i=0; i<employeeArr.length;i++){
    
}
}

function generateHtml (employeeArr) {
    return`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${employeeArr[0].name}</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    </head>
    <body style="background-color:rgba(171, 252, 228, 0.907)">
        <div class="jumbotron jumbotron-fluid" style="background-color: rgba(54, 168, 133, 0.897); box-shadow: 0px 10px 5px rgba(122, 140, 138, 0.762);">
            <div class="container" >
              <h1 class="display-4">Your new development team</h1>
            </div>
        </div>
        <div class=".container-fluid " id="cardTarget">
            ${cardArr}
        </div>
    
    
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>        
    </body>
    </html>`
}



module.exports = { generateCard, generateHtml }