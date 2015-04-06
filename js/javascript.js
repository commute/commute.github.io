var projects = [{
    "projectId": "Project1",
    "projectName": "Project 1",
    "description": "Project 1 Text",
    "images": ["testImages/owl1.jpg", "testImages/owl2.jpg", "testImages/owl3.jpg"]
}, {
    "projectId": "Project2",
    "projectName": "Project 2",
    "description": "Project 2 Text",
    "images": ["testImages/owl3.jpg", "testImages/owl4.jpg", "testImages/owl5.jpg"]
}, {
    "projectId": "Project3",
    "projectName": "Project 3",
    "description": "Project 3 Text",
    "images": ["testImages/owl5.jpg", "testImages/owl6.jpg", "testImages/owl7.jpg"]
}];

function populateModal(ProjectID)
{
    
    for(var counter = 0; counter<projects.length; counter++)
    {
        var project = projects[counter];
        if(project["projectId"] === ProjectID)
        {
            $("#modalTitle").html(project["projectName"]);
            $("#modalDescription").html(project["description"]);
            
            var images = project["images"];
            
            var imageString = "";
            for(var num = 0; num<images.length; num++)
            {
                imageString = imageString + "<img style='width:100%; margin-top:10px;' src='" + images[num] + "' alt='" + project["projectName"] + "'/>";
                
            }
            $("#modalImages").html(imageString);
            
            $("#myModal").modal("show");
        }
    }
}