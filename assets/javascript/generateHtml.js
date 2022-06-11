function generateCard (employeeArr, cardArr) {

for(i=0; i<employeeArr.length;i++){
    switch(employeeArr[i].role){
        case 'intern' :
            cardArr.push(`<div class="card gap-5" style="width: 18rem; border:2px outset rgba(34, 34, 34, 0.634);border-radius: 20px; margin: 20px;">
    <div class="card-header" style="background-color:rgb(255, 206, 71);border-radius: 20px; box-shadow: 0px 5px 5px grey;">
       <span style="font-size:larger; font-weight: bolder;">${employeeArr[i].name} </span> <br>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard" viewBox="0 0 16 16">
       <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"/>
       <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"/>
     </svg>${employeeArr[i].role}
    </div>
        <ul class="list-group list-group-flush bg-transparent">
        <li class="list-group-item bg-transparent">ID: ${employeeArr[i].id}</li>
        <li class="list-group-item bg-transparent">Email: <a href="mailto:${employeeArr[i].email}">${employeeArr[i].email}</a></li>
        <li class="list-group-item bg-transparent" style="border-radius: 20px;">${employeeArr[i].school}</li>
        </ul>
        </div>`)
        break;
        case 'engineer' :
            cardArr.push(`<div class="card gap-5" style="width: 18rem; border:2px outset rgba(34, 34, 34, 0.634);border-radius: 20px; margin: 20px;">
    <div class="card-header" style="background-color:rgb(255, 206, 71);border-radius: 20px; box-shadow: 0px 5px 5px grey;">
       <span style="font-size:larger; font-weight: bolder;">${employeeArr[i].name} </span> <br>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pc-display-horizontal" viewBox="0 0 16 16">
       <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z"/>
     </svg>${employeeArr[i].role}
    </div>
        <ul class="list-group list-group-flush bg-transparent">
        <li class="list-group-item bg-transparent">ID: ${employeeArr[i].id}</li>
        <li class="list-group-item bg-transparent">Email: <a href="mailto:${employeeArr[i].email}">${employeeArr[i].email}</a></li>
        <li class="list-group-item bg-transparent" style="border-radius: 20px;">Github: <a href="https://github.com/${employeeArr[i].github}">${employeeArr[i].github}</a></li>
        </ul>
        </div>`)
        break;
        case 'manager' :
            cardArr.push(`<div class="card gap-5" style="width: 18rem; border:2px outset rgba(34, 34, 34, 0.634);border-radius: 20px; margin: 20px;">
    <div class="card-header" style="background-color:rgb(255, 206, 71);border-radius: 20px; box-shadow: 0px 5px 5px grey;">
       <span style="font-size:larger; font-weight: bolder;">${employeeArr[i].name} </span> <br>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16">
    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
    </svg>   ${employeeArr[i].role}
    </div>
    <ul class="list-group list-group-flush bg-transparent">
      <li class="list-group-item bg-transparent">ID: ${employeeArr[i].id}</li>
      <li class="list-group-item bg-transparent">Email: <a href="mailto:${employeeArr[i].email}">${employeeArr[i].email}</a></li>
      <li class="list-group-item bg-transparent" style="border-radius: 20px;">Office: ${employeeArr[i].office}</li>
    </ul>
  </div>`)
        break;
        default:
            console.log('error')
    }
}
}

function generateHtml (employeeArr, cardArr) {
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
        <div class="container-fluid d-flex flex-wrap justify-content-evenly" id="cardTarget">
            ${cardArr}
        </div>
    
    
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>        
    </body>
    </html>`
}



module.exports = { generateCard, generateHtml }