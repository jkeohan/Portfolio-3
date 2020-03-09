let source = "https://spreadsheets.google.com/feeds/list/1wVjdMce-oO0pND1evxCbDKfE0wYQf-CfBov_3DmnMuQ/od6/public/values?alt=json";

fetch(source)
  .then(response => response.json())
  .then(data => {
      console.log('data',data)
      let projects = data.feed.entry.map(project =>{
        console.log('project',project.gsx$title.$t)
        return {
          title: project.gsx$title.$t,
          description: project.gsx$description.$t,
          image: project.gsx$image.$t,
          url: project.gsx$url.$t
        }
  })
      console.log('projects',projects)
      app(projects)
})

function app(projects){
  console.log('app-projects',projects)
  //my code goes here -- how to use this data from my project
}

